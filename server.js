const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const GITHUB_USERNAME = 'varanalagesh19-dot';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes TTL

// In-memory cache store
const gitHubCache = {
  repos: { data: null, timestamp: 0, rateLimitRemaining: null, rateLimitReset: null },
  profile: { data: null, timestamp: 0, rateLimitRemaining: null, rateLimitReset: null }
};

function fetchFromGitHub(apiPath) {
  return new Promise((resolve, reject) => {
    const options = {
      host: 'api.github.com',
      path: apiPath,
      method: 'GET',
      headers: {
        'User-Agent': 'ATLAS-Portfolio-Engine/2.0 (+https://github.com/varanalagesh19-dot)',
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    const req = https.request(options, (res) => {
      let rawData = '';
      res.on('data', chunk => rawData += chunk);
      res.on('end', () => {
        const remaining = res.headers['x-ratelimit-remaining'] ? parseInt(res.headers['x-ratelimit-remaining'], 10) : null;
        const reset = res.headers['x-ratelimit-reset'] ? parseInt(res.headers['x-ratelimit-reset'], 10) : null;
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          rateLimitRemaining: remaining,
          rateLimitReset: reset,
          body: rawData
        });
      });
    });

    req.on('error', err => reject(err));
    req.setTimeout(8000, () => {
      req.destroy();
      reject(new Error('GitHub API request timed out'));
    });
    req.end();
  });
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost:8080'}`);
  let reqUrl = parsedUrl.pathname;
  const forceRefresh = parsedUrl.searchParams.get('refresh') === 'true' || req.headers['x-bypass-cache'] === 'true';

  // 1. GitHub Public Repositories Proxy with In-Memory Caching
  if (reqUrl === '/api/github/repos' && req.method === 'GET') {
    const now = Date.now();
    const cache = gitHubCache.repos;

    if (!forceRefresh && cache.data && (now - cache.timestamp < CACHE_TTL_MS)) {
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'X-Cache-Status': 'HIT',
        'X-Cache-Age-Seconds': Math.round((now - cache.timestamp) / 1000),
        'X-RateLimit-Remaining': String(cache.rateLimitRemaining ?? ''),
        'X-RateLimit-Reset': String(cache.rateLimitReset ?? '')
      });
      res.end(JSON.stringify({
        status: 'success',
        source: 'server-cache',
        timestamp: cache.timestamp,
        rateLimitRemaining: cache.rateLimitRemaining,
        rateLimitReset: cache.rateLimitReset,
        count: cache.data.length,
        repos: cache.data
      }));
      return;
    }

    try {
      const response = await fetchFromGitHub(`/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
      if (response.statusCode === 200) {
        const repos = JSON.parse(response.body);
        cache.data = repos;
        cache.timestamp = now;
        cache.rateLimitRemaining = response.rateLimitRemaining;
        cache.rateLimitReset = response.rateLimitReset;

        res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'X-Cache-Status': 'MISS',
          'X-RateLimit-Remaining': String(response.rateLimitRemaining ?? ''),
          'X-RateLimit-Reset': String(response.rateLimitReset ?? '')
        });
        res.end(JSON.stringify({
          status: 'success',
          source: 'github-live',
          timestamp: now,
          rateLimitRemaining: response.rateLimitRemaining,
          rateLimitReset: response.rateLimitReset,
          count: repos.length,
          repos: repos
        }));
      } else if (response.statusCode === 403 && cache.data) {
        // Rate limited by GitHub, but stale cache available
        console.warn('GitHub rate limit reached, returning stale cache.');
        res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'X-Cache-Status': 'STALE-FALLBACK',
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(response.rateLimitReset ?? '')
        });
        res.end(JSON.stringify({
          status: 'rate_limited_cached',
          source: 'stale-cache',
          rateLimited: true,
          timestamp: cache.timestamp,
          rateLimitReset: response.rateLimitReset,
          count: cache.data.length,
          repos: cache.data
        }));
      } else {
        res.writeHead(response.statusCode, {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(response.body);
      }
    } catch (err) {
      if (cache.data) {
        res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'X-Cache-Status': 'ERROR-FALLBACK'
        });
        res.end(JSON.stringify({
          status: 'error_cached',
          source: 'stale-cache',
          error: err.message,
          timestamp: cache.timestamp,
          count: cache.data.length,
          repos: cache.data
        }));
      } else {
        res.writeHead(502, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ status: 'error', error: err.message }));
      }
    }
    return;
  }

  // 2. GitHub Public Profile Proxy with In-Memory Caching
  if (reqUrl === '/api/github/profile' && req.method === 'GET') {
    const now = Date.now();
    const cache = gitHubCache.profile;

    if (!forceRefresh && cache.data && (now - cache.timestamp < CACHE_TTL_MS)) {
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'X-Cache-Status': 'HIT',
        'X-Cache-Age-Seconds': Math.round((now - cache.timestamp) / 1000)
      });
      res.end(JSON.stringify({
        status: 'success',
        source: 'server-cache',
        timestamp: cache.timestamp,
        profile: cache.data
      }));
      return;
    }

    try {
      const response = await fetchFromGitHub(`/users/${GITHUB_USERNAME}`);
      if (response.statusCode === 200) {
        const profile = JSON.parse(response.body);
        cache.data = profile;
        cache.timestamp = now;
        cache.rateLimitRemaining = response.rateLimitRemaining;
        cache.rateLimitReset = response.rateLimitReset;

        res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'X-Cache-Status': 'MISS'
        });
        res.end(JSON.stringify({
          status: 'success',
          source: 'github-live',
          timestamp: now,
          profile: profile
        }));
      } else if (response.statusCode === 403 && cache.data) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({
          status: 'rate_limited_cached',
          source: 'stale-cache',
          profile: cache.data
        }));
      } else {
        res.writeHead(response.statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(response.body);
      }
    } catch (err) {
      if (cache.data) {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ status: 'error_cached', source: 'stale-cache', profile: cache.data }));
      } else {
        res.writeHead(502, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ status: 'error', error: err.message }));
      }
    }
    return;
  }

  if (reqUrl === '/api/telemetry-log' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      console.log('BROWSER_TELEMETRY:', body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('{"status":"ok"}');
    });
    return;
  }
  if (reqUrl === '/api/save-video' && req.method === 'POST') {
    const filename = req.headers['x-video-filename'] || 'video.webm';
    const safeFilename = path.basename(filename);
    const saveDir = path.join(process.cwd(), 'assets', 'videos');
    if (!fs.existsSync(saveDir)) {
      fs.mkdirSync(saveDir, { recursive: true });
    }
    const targetPath = path.join(saveDir, safeFilename);
    const writeStream = fs.createWriteStream(targetPath);
    req.pipe(writeStream);
    writeStream.on('finish', () => {
      const stats = fs.statSync(targetPath);
      console.log(`Video saved: ${safeFilename} (${stats.size} bytes)`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok', file: `/assets/videos/${safeFilename}`, size: stats.size }));
    });
    writeStream.on('error', (err) => {
      console.error('Error saving video:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    });
  // Local Form Submission Simulator (emulates Netlify Forms 200 OK during local dev)
  if (req.method === 'POST' && (reqUrl === '/' || reqUrl === '/index.html' || reqUrl === '/contact')) {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      console.log('LOCAL_NETLIFY_FORM_SUBMISSION:', body);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<!doctype html><html><body><h1>Form submission received (Local Netlify Simulation)</h1></body></html>');
    });
    return;
  }

  if (reqUrl === '/') reqUrl = '/index.html';

  // Normalize nested asset requests (e.g. /projects/assets/... -> /assets/...)
  if (reqUrl.includes('/assets/')) {
    reqUrl = reqUrl.substring(reqUrl.indexOf('/assets/'));
  } else if (reqUrl.includes('/css/')) {
    reqUrl = reqUrl.substring(reqUrl.indexOf('/css/'));
  } else if (reqUrl.includes('/js/')) {
    reqUrl = reqUrl.substring(reqUrl.indexOf('/js/'));
  } else if (reqUrl.endsWith('/style.css')) {
    reqUrl = '/style.css';
  } else if (reqUrl.endsWith('/script.js')) {
    reqUrl = '/script.js';
  }
  
  let filePath = path.join(process.cwd(), reqUrl);
  
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // SPA route fallback: serve index.html for client-side routing (/projects, /skills, /about, /contact, /projects/:slug)
      const ext = path.extname(reqUrl);
      if (!ext || ext === '.html') {
        const indexPath = path.join(process.cwd(), 'index.html');
        fs.stat(indexPath, (idxErr, idxStats) => {
          if (!idxErr && idxStats.isFile()) {
            res.writeHead(200, {
              'Content-Length': idxStats.size,
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'no-cache, no-store, must-revalidate'
            });
            fs.createReadStream(indexPath).pipe(res);
            return;
          }
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
        });
        return;
      }

      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Support HTTP Range requests for video streaming
    const range = req.headers.range;
    if (range && (ext === '.mp4' || ext === '.webm')) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
      const chunksize = (end - start) + 1;
      
      const file = fs.createReadStream(filePath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
      });
      file.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': stats.size,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

server.listen(PORT, () => {
  console.log(`ATLAS High-Performance Server running at http://localhost:${PORT}`);
});
