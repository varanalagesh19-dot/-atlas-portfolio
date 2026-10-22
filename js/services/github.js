/**
 * ATLAS 2026 — GITHUB INTEGRATION SERVICE
 * Real-time GitHub API integration for @varanalagesh19-dot
 * 
 * Features:
 *  - Primary fetch through backend proxy (/api/github/repos) with in-memory cache
 *  - Automatic direct fallback to api.github.com for static/offline deployment
 *  - Client-side localStorage cache with 15-minute TTL to respect rate limits
 *  - Granular state management: 'loading' | 'success' | 'rate_limited' | 'error'
 *  - Verified repository mapping to curated flagship architecture projects
 *  - Zero exposed secrets or personal tokens
 */

export const GITHUB_CONFIG = {
  username: 'varanalagesh19-dot',
  profileUrl: 'https://github.com/varanalagesh19-dot',
  cacheTtlMs: 15 * 60 * 1000, // 15 minutes
  storageKeyRepos: 'atlas_github_repos_v2',
  storageKeyProfile: 'atlas_github_profile_v2'
};

// Verified mapping from GitHub repository names to curated ATLAS project slugs
export const REPO_TO_PROJECT_MAP = {
  'solvex-ner-platform2.0': {
    slug: 'solvex-ner',
    name: 'NER ACCESS (SOLVEX 2.0)',
    badge: 'SIH 2026 SUBMISSION (SIH26002)'
  },
  'NER-ACCESS-Offline-AI-Logistics-Accessibility-Platform': {
    slug: 'solvex-ner',
    name: 'NER ACCESS (SOLVEX 2.0)',
    badge: 'SIH 2026 SUBMISSION (SIH26002)'
  },
  'linkxxx': {
    slug: 'linkx',
    name: 'LINKEDX',
    badge: 'GEMINI VISION AI'
  },
  'link-atlas': {
    slug: 'linkx',
    name: 'LINKEDX',
    badge: 'GEMINI VISION AI'
  },
  'IntelliPDF': {
    slug: 'intellipdf',
    name: 'IntelliPDF',
    badge: 'RAG & EXAM INTELLIGENCE'
  },
  'atlasAI': {
    slug: 'atlas-ai',
    name: 'atlasAI Platform',
    badge: 'MULTI-MODEL ORCHESTRATION'
  },
  'smart-agriculture': {
    slug: 'smart-agriculture',
    name: 'Smart Agriculture & Conservation',
    badge: 'IOT & SENSORS'
  },
  'smartfarmpro': {
    slug: 'smart-agriculture',
    name: 'Smart Agriculture & Conservation',
    badge: 'IOT & SENSORS'
  },
  'bumblebee-squad': {
    slug: 'base-isolation',
    name: 'Base Isolation Earthquake Defense',
    badge: 'SEISMIC DYNAMICS'
  },
  'Base-isolation': {
    slug: 'base-isolation',
    name: 'Base Isolation Earthquake Defense',
    badge: 'SEISMIC DYNAMICS'
  },
  'bumblebee-project': {
    slug: 'base-isolation',
    name: 'Base Isolation Earthquake Defense',
    badge: 'SEISMIC DYNAMICS'
  },
  'nvidia-ai-chat': {
    slug: 'nvidia-ai-chat',
    name: 'NVIDIA AI Chat Studio',
    badge: 'NVIDIA ACCELERATED AI'
  },
  'atlas-portfolio': {
    slug: 'atlas-portfolio',
    name: 'ATLAS 3D Portfolio',
    badge: 'THREE.JS 3D ENGINE'
  }
};

/**
 * Fetch public repositories for @varanalagesh19-dot
 * Returns { status, repos, count, source, timestamp, rateLimitReset, error }
 */
export async function getGitHubRepositories({ forceRefresh = false } = {}) {
  const now = Date.now();

  // 1. Check client-side localStorage cache
  if (!forceRefresh) {
    try {
      const rawCache = localStorage.getItem(GITHUB_CONFIG.storageKeyRepos);
      if (rawCache) {
        const cached = JSON.parse(rawCache);
        if (cached && cached.repos && (now - cached.timestamp < GITHUB_CONFIG.cacheTtlMs)) {
          return {
            status: 'success',
            source: 'client-cache',
            repos: cached.repos,
            count: cached.repos.length,
            timestamp: cached.timestamp,
            rateLimitReset: cached.rateLimitReset || null
          };
        }
      }
    } catch (e) {
      console.warn('[GitHubService] localStorage cache read error:', e);
    }
  }

  // 2. Try Local Server Proxy Endpoint (/api/github/repos)
  try {
    const proxyUrl = forceRefresh ? '/api/github/repos?refresh=true' : '/api/github/repos';
    const res = await fetch(proxyUrl, {
      headers: forceRefresh ? { 'x-bypass-cache': 'true' } : {}
    });

    if (res.ok) {
      const payload = await res.json();
      if (payload && Array.isArray(payload.repos)) {
        saveClientCache(GITHUB_CONFIG.storageKeyRepos, {
          timestamp: payload.timestamp || now,
          repos: payload.repos,
          rateLimitReset: payload.rateLimitReset
        });

        return {
          status: payload.status || 'success',
          source: payload.source || 'server-proxy',
          repos: payload.repos,
          count: payload.repos.length,
          timestamp: payload.timestamp || now,
          rateLimitReset: payload.rateLimitReset || null,
          rateLimited: payload.rateLimited || false
        };
      }
    } else if (res.status === 403) {
      // Rate limited
      const rateResetHeader = res.headers.get('x-ratelimit-reset');
      const resetAt = rateResetHeader ? parseInt(rateResetHeader, 10) * 1000 : null;
      return handleRateLimitFallback(resetAt);
    }
  } catch (proxyErr) {
    console.info('[GitHubService] Backend proxy not reached, falling back to direct GitHub API:', proxyErr.message);
  }

  // 3. Direct Public GitHub API Fallback (CORS-friendly for public repos)
  try {
    const directUrl = `https://api.github.com/users/${GITHUB_CONFIG.username}/repos?per_page=100&sort=updated`;
    const res = await fetch(directUrl, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    const rateRemaining = res.headers.get('x-ratelimit-remaining');
    const rateReset = res.headers.get('x-ratelimit-reset');
    const resetAt = rateReset ? parseInt(rateReset, 10) * 1000 : null;

    if (res.ok) {
      const repos = await res.json();
      saveClientCache(GITHUB_CONFIG.storageKeyRepos, {
        timestamp: now,
        repos,
        rateLimitReset: resetAt
      });

      return {
        status: 'success',
        source: 'github-direct',
        repos,
        count: repos.length,
        timestamp: now,
        rateLimitReset: resetAt
      };
    } else if (res.status === 403) {
      return handleRateLimitFallback(resetAt);
    } else {
      return handleNetworkErrorFallback(`GitHub API error (HTTP ${res.status})`);
    }
  } catch (netErr) {
    return handleNetworkErrorFallback(netErr.message);
  }
}

/**
 * Fetch GitHub User Profile
 */
export async function getGitHubProfile({ forceRefresh = false } = {}) {
  const now = Date.now();

  if (!forceRefresh) {
    try {
      const raw = localStorage.getItem(GITHUB_CONFIG.storageKeyProfile);
      if (raw) {
        const cached = JSON.parse(raw);
        if (cached && cached.profile && (now - cached.timestamp < GITHUB_CONFIG.cacheTtlMs)) {
          return { status: 'success', profile: cached.profile, source: 'client-cache' };
        }
      }
    } catch (e) {
      // ignore
    }
  }

  // Try proxy first
  try {
    const res = await fetch('/api/github/profile');
    if (res.ok) {
      const payload = await res.json();
      if (payload && payload.profile) {
        saveClientCache(GITHUB_CONFIG.storageKeyProfile, {
          timestamp: payload.timestamp || now,
          profile: payload.profile
        });
        return { status: 'success', profile: payload.profile, source: payload.source };
      }
    }
  } catch (e) {
    // fallback to direct
  }

  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_CONFIG.username}`);
    if (res.ok) {
      const profile = await res.json();
      saveClientCache(GITHUB_CONFIG.storageKeyProfile, { timestamp: now, profile });
      return { status: 'success', profile, source: 'github-direct' };
    }
  } catch (e) {
    // error
  }

  // Graceful fallback to verified public metadata
  return {
    status: 'fallback',
    profile: {
      login: GITHUB_CONFIG.username,
      name: 'atlas_core07',
      bio: 'AI/ML Engineering Student | Full-Stack Developer | Building Intelligent Solutions 🚀',
      public_repos: 14,
      html_url: GITHUB_CONFIG.profileUrl,
      avatar_url: 'https://avatars.githubusercontent.com/u/235833541?v=4'
    }
  };
}

function handleRateLimitFallback(resetAt) {
  const rawCache = localStorage.getItem(GITHUB_CONFIG.storageKeyRepos);
  if (rawCache) {
    try {
      const cached = JSON.parse(rawCache);
      if (cached && cached.repos) {
        return {
          status: 'rate_limited_cached',
          source: 'stale-cache',
          rateLimited: true,
          repos: cached.repos,
          count: cached.repos.length,
          timestamp: cached.timestamp,
          rateLimitReset: resetAt || cached.rateLimitReset
        };
      }
    } catch (e) {
      // ignore
    }
  }

  return {
    status: 'rate_limited',
    rateLimited: true,
    repos: [],
    count: 0,
    rateLimitReset: resetAt,
    message: 'GitHub API rate limit reached (60 requests/hr unauthenticated limit).'
  };
}

function handleNetworkErrorFallback(errMsg) {
  const rawCache = localStorage.getItem(GITHUB_CONFIG.storageKeyRepos);
  if (rawCache) {
    try {
      const cached = JSON.parse(rawCache);
      if (cached && cached.repos) {
        return {
          status: 'error_cached',
          source: 'stale-cache',
          error: errMsg,
          repos: cached.repos,
          count: cached.repos.length,
          timestamp: cached.timestamp
        };
      }
    } catch (e) {
      // ignore
    }
  }

  return {
    status: 'error',
    error: errMsg,
    repos: [],
    count: 0
  };
}

function saveClientCache(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn('[GitHubService] localStorage save error:', e);
  }
}

/**
 * Format ISO date string into human-readable date
 * e.g., 'Sep 24, 2026'
 */
export function formatGitHubDate(isoString) {
  if (!isoString) return 'Recent';
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return 'Recent';
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch (e) {
    return 'Recent';
  }
}

/**
 * Get language accent color
 */
export function getLanguageColor(language) {
  switch ((language || '').toLowerCase()) {
    case 'python': return '#3572A5';
    case 'kotlin': return '#A97BFF';
    case 'javascript': return '#D4FF3F'; // Chartreuse signature
    case 'html': return '#E34C26';
    case 'css': return '#563D7C';
    case 'c':
    case 'c++': return '#F34B7D';
    default: return '#CBB3E8'; // Creative Lavender
  }
}
