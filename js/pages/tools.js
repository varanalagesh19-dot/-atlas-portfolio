/**
 * ATLAS 2.0 — DEVELOPER TOOLS WORKSPACE (/tools)
 * Complete interactive developer suite with:
 * 1. Live Web Code Playground (HTML/CSS/JS with iframe execution, tabs, resizing, console)
 * 2. Algorithmic Snippets Library (search, filter, copy)
 * 3. 8x Developer Utilities (JSON, Base64, URL, UUID, SHA-256, Regex, Units, Color)
 * 4. ATLAS Terminal Interactive CLI (safe simulated command registry)
 * 5. AI System Prompt Engineering Lab (searchable prompt templates)
 */
import { SNIPPETS_DATA } from '../data/snippets.js';
import { showToast } from '../components/toast.js';

let activeToolTab = 'playground'; // 'playground' | 'snippets' | 'utilities' | 'terminal' | 'promptlab'
let activeSnippetCat = 'all';
let snippetSearchQuery = '';
let promptLabSearchQuery = '';
let activeEditorTab = 'all'; // 'all' | 'html' | 'css' | 'js'

export function renderToolsPage() {
  const container = document.createElement('div');
  container.className = 'page-container page-tools';

  container.innerHTML = `
    <header class="page-header">
      <div class="page-badge"><span class="badge-dot"></span>ENGINEERING WORKSPACE</div>
      <h1 class="page-title">Developer Tools & Utilities</h1>
      <p class="page-lead">
        A functioning suite of in-browser developer utilities, live sandboxed code playground,
        algorithmic snippets, and interactive ATLAS terminal CLI.
      </p>
    </header>

    <!-- Tool Navigation Bar -->
    <nav class="tools-tab-bar" role="tablist" aria-label="Developer Tools Tabs">
      <button class="tool-tab-btn ${activeToolTab === 'playground' ? 'active' : ''}" data-tool="playground" role="tab" aria-selected="${activeToolTab === 'playground'}">
        <span class="tab-icon">⚡</span>
        <span class="tab-label">Code Playground</span>
      </button>
      <button class="tool-tab-btn ${activeToolTab === 'snippets' ? 'active' : ''}" data-tool="snippets" role="tab" aria-selected="${activeToolTab === 'snippets'}">
        <span class="tab-icon">📋</span>
        <span class="tab-label">Snippets Library</span>
      </button>
      <button class="tool-tab-btn ${activeToolTab === 'utilities' ? 'active' : ''}" data-tool="utilities" role="tab" aria-selected="${activeToolTab === 'utilities'}">
        <span class="tab-icon">🛠️</span>
        <span class="tab-label">8x Utilities</span>
      </button>
      <button class="tool-tab-btn ${activeToolTab === 'terminal' ? 'active' : ''}" data-tool="terminal" role="tab" aria-selected="${activeToolTab === 'terminal'}">
        <span class="tab-icon">💻</span>
        <span class="tab-label">ATLAS Terminal</span>
      </button>
      <button class="tool-tab-btn ${activeToolTab === 'promptlab' ? 'active' : ''}" data-tool="promptlab" role="tab" aria-selected="${activeToolTab === 'promptlab'}">
        <span class="tab-icon">🤖</span>
        <span class="tab-label">Prompt Lab</span>
      </button>
    </nav>

    <!-- Main Workspace Container -->
    <main id="tools-workspace-outlet" class="tools-workspace-outlet">
      <!-- Injected via renderCurrentToolView -->
    </main>
  `;

  setupToolsTabs(container);
  renderCurrentToolView(container);

  return {
    element: container,
    cleanup: () => {
      // Remove playground message listener if registered
      window.removeEventListener('message', handlePlaygroundMessage);
    }
  };
}

function setupToolsTabs(container) {
  const tabs = container.querySelectorAll('.tool-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      activeToolTab = tab.dataset.tool;
      renderCurrentToolView(container);
    });
  });
}

function renderCurrentToolView(container) {
  const outlet = container.querySelector('#tools-workspace-outlet');
  if (!outlet) return;

  // Cleanup any lingering global listeners
  window.removeEventListener('message', handlePlaygroundMessage);
  outlet.innerHTML = '';

  switch (activeToolTab) {
    case 'playground':
      renderPlaygroundTool(outlet);
      break;
    case 'snippets':
      renderSnippetsTool(outlet);
      break;
    case 'utilities':
      renderUtilitiesTool(outlet);
      break;
    case 'terminal':
      renderTerminalTool(outlet);
      break;
    case 'promptlab':
      renderPromptLabTool(outlet);
      break;
    default:
      renderPlaygroundTool(outlet);
  }
}

// ==========================================
// 1. LIVE CODE PLAYGROUND
// ==========================================
const PLAYGROUND_TEMPLATES = {
  button: {
    html: `<button class="luxury-btn">
  <span>INITIALIZE ATLAS</span>
  <div class="glow-orb"></div>
</button>`,
    css: `body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #F5F3EE;
  font-family: 'Space Grotesk', system-ui, sans-serif;
}
.luxury-btn {
  position: relative;
  background: #202124;
  border: 1px solid #D4FF3F;
  color: #F5F3EE;
  padding: 1rem 2.2rem;
  font-size: 0.9rem;
  letter-spacing: 0.15em;
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
}
.luxury-btn:hover {
  background: #D4FF3F;
  color: #202124;
  box-shadow: 0 0 25px rgba(212, 255, 63, 0.4);
  transform: translateY(-2px);
}`,
    js: `console.log('Sandbox loaded: Luxury Button template.');
document.querySelector('.luxury-btn').addEventListener('click', () => {
  console.log('Action triggered: ATLAS Systems Initialized.');
  alert('ATLAS Systems Initialized.');
});`
  },
  card: {
    html: `<div class="glass-card">
  <div class="badge">ATLAS 2.0</div>
  <h2>Editorial Showcase</h2>
  <p>Engineered with light-first surfaces, champagne-gold accents, and subtle borders.</p>
  <button id="card-btn">Explore Architecture &rarr;</button>
</div>`,
    css: `body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #F5F3EE;
  font-family: 'Inter', system-ui, sans-serif;
}
.glass-card {
  background: #FFFFFF;
  border: 1px solid rgba(203, 179, 232, 0.3);
  border-radius: 12px;
  padding: 2.5rem;
  max-width: 360px;
  color: #202124;
  box-shadow: 0 16px 36px rgba(0,0,0,0.06);
}
.badge {
  display: inline-block;
  font-size: 0.7rem;
  color: #D4FF3F;
  letter-spacing: 0.15em;
  font-weight: 700;
  margin-bottom: 1rem;
}
h2 {
  margin: 0 0 0.8rem 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
}
p {
  color: #696969;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
button {
  background: transparent;
  border: 1px solid #D4FF3F;
  color: #D4FF3F;
  padding: 0.65rem 1.4rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.2s;
}
button:hover {
  background: #D4FF3F;
  color: #FFFFFF;
}`,
    js: `console.log('Glass Card loaded.');
document.getElementById('card-btn').addEventListener('click', () => {
  console.log('Inspecting glass panel properties: #D4FF3F accent applied.');
});`
  },
  particles: {
    html: `<canvas id="canvas"></canvas>`,
    css: `body, html {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #F5F3EE;
}
#canvas {
  display: block;
  width: 100vw;
  height: 100vh;
}`,
    js: `const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

const particles = Array.from({ length: 45 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  vx: (Math.random() - 0.5) * 1.5,
  vy: (Math.random() - 0.5) * 1.5,
  r: Math.random() * 2.5 + 1.5
}));

console.log('Initializing Champagne Particle Engine with ' + particles.length + ' nodes.');

function loop() {
  ctx.fillStyle = 'rgba(245, 243, 238, 0.25)';
  ctx.fillRect(0, 0, w, h);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;

    ctx.fillStyle = '#D4FF3F';
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(loop);
}
loop();`
  }
};

let currentPlaygroundConsoleLogs = [];
let playgroundConsoleEl = null;

function handlePlaygroundMessage(event) {
  if (event.data && event.data.type === 'playground-console') {
    const { level, text, timestamp } = event.data;
    addConsoleMessage(level, text, timestamp);
  }
}

function addConsoleMessage(level, text, timestamp = new Date().toLocaleTimeString()) {
  currentPlaygroundConsoleLogs.push({ level, text, timestamp });
  if (playgroundConsoleEl) {
    const row = document.createElement('div');
    row.className = `console-msg msg-${level}`;
    row.innerHTML = `
      <span class="msg-time">${escapeHtml(timestamp)}</span>
      <span class="msg-level">[${escapeHtml(level.toUpperCase())}]</span>
      <span class="msg-body">${escapeHtml(text)}</span>
    `;
    playgroundConsoleEl.appendChild(row);
    playgroundConsoleEl.scrollTop = playgroundConsoleEl.scrollHeight;

    const countBadge = document.getElementById('console-count-badge');
    if (countBadge) {
      countBadge.textContent = `${currentPlaygroundConsoleLogs.length} logs`;
    }
  }
}

function renderPlaygroundTool(outlet) {
  const defaultTpl = PLAYGROUND_TEMPLATES.button;
  currentPlaygroundConsoleLogs = [];

  outlet.innerHTML = `
    <div class="playground-layout">
      <!-- Toolbar -->
      <div class="playground-toolbar glass-panel">
        <div class="toolbar-left">
          <label for="template-select" class="tpl-label">Preset Template:</label>
          <select id="template-select" class="tool-select">
            <option value="button">Luxury Button</option>
            <option value="card">Editorial Showcase Card</option>
            <option value="particles">Champagne Particle Canvas</option>
          </select>

          <!-- Editor Panes Switcher Tabs -->
          <div class="editor-tabs-switcher" role="tablist" aria-label="Editor Tabs">
            <button class="editor-subtab-btn ${activeEditorTab === 'all' ? 'active' : ''}" data-pane="all">All Panes</button>
            <button class="editor-subtab-btn ${activeEditorTab === 'html' ? 'active' : ''}" data-pane="html">HTML</button>
            <button class="editor-subtab-btn ${activeEditorTab === 'css' ? 'active' : ''}" data-pane="css">CSS</button>
            <button class="editor-subtab-btn ${activeEditorTab === 'js' ? 'active' : ''}" data-pane="js">JS</button>
          </div>
        </div>

        <div class="toolbar-right">
          <button id="run-playground-btn" class="btn-primary" title="Execute HTML, CSS & JavaScript in sandbox">
            <span>&blacktriangleright; Run</span>
          </button>
          <button id="reset-playground-btn" class="btn-secondary" title="Reset to template starter code">Reset</button>
          <button id="clear-playground-btn" class="btn-secondary" title="Clear all code editors">Clear</button>
        </div>
      </div>

      <!-- Editor & Output Grid -->
      <div class="playground-grid">
        <!-- Editor Column with solid opaque background -->
        <div class="editors-column pane-mode-${activeEditorTab}" id="editors-column">
          <div class="editor-pane" id="pane-html">
            <div class="editor-header">
              <span class="editor-lang-tag html-tag">HTML5</span>
              <span class="editor-meta">structure</span>
            </div>
            <textarea id="pg-html" class="code-textarea" spellcheck="false" placeholder="<!-- Write HTML markup here -->">${escapeHtml(defaultTpl.html)}</textarea>
          </div>

          <div class="editor-pane" id="pane-css">
            <div class="editor-header">
              <span class="editor-lang-tag css-tag">CSS3</span>
              <span class="editor-meta">styling</span>
            </div>
            <textarea id="pg-css" class="code-textarea" spellcheck="false" placeholder="/* Write CSS styles here */">${escapeHtml(defaultTpl.css)}</textarea>
          </div>

          <div class="editor-pane" id="pane-js">
            <div class="editor-header">
              <span class="editor-lang-tag js-tag">JavaScript</span>
              <span class="editor-meta">logic & events</span>
            </div>
            <textarea id="pg-js" class="code-textarea" spellcheck="false" placeholder="// Write JavaScript code here">${escapeHtml(defaultTpl.js)}</textarea>
          </div>
        </div>

        <!-- Live Output Preview & Console Column -->
        <div class="preview-column glass-panel">
          <div class="preview-header">
            <div class="traffic-lights">
              <span class="light red"></span>
              <span class="light yellow"></span>
              <span class="light green"></span>
            </div>
            <span class="preview-title">Sandboxed Preview</span>

            <!-- Preview Resizer Controls -->
            <div class="resizer-controls">
              <button class="resizer-btn active" data-width="100%" title="Full width (100%)">Desktop</button>
              <button class="resizer-btn" data-width="768px" title="Tablet width (768px)">768px</button>
              <button class="resizer-btn" data-width="375px" title="Mobile width (375px)">375px</button>
            </div>

            <button id="popout-preview-btn" class="preview-ctrl-btn" title="Open preview in new tab">New Tab &nearr;</button>
          </div>

          <div class="iframe-container" id="iframe-container">
            <iframe id="playground-iframe" sandbox="allow-scripts" title="Playground Preview"></iframe>
          </div>

          <!-- Console & Output Panel -->
          <div class="console-panel">
            <div class="console-header">
              <div class="console-header-left">
                <span class="console-title">&gt;_ Console &amp; Output</span>
                <span id="console-count-badge" class="console-badge">0 logs</span>
              </div>
              <button id="clear-console-btn" class="clear-console-btn" title="Clear console messages">Clear</button>
            </div>
            <div class="console-body" id="playground-console">
              <div class="console-msg msg-info">
                <span class="msg-time">--:--:--</span>
                <span class="msg-level">[SYS]</span>
                <span class="msg-body">Playground sandbox ready. Press &quot;Run&quot; or edit code to refresh.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach elements
  const htmlInput = outlet.querySelector('#pg-html');
  const cssInput = outlet.querySelector('#pg-css');
  const jsInput = outlet.querySelector('#pg-js');
  const iframe = outlet.querySelector('#playground-iframe');
  const iframeContainer = outlet.querySelector('#iframe-container');
  const runBtn = outlet.querySelector('#run-playground-btn');
  const clearBtn = outlet.querySelector('#clear-playground-btn');
  const resetBtn = outlet.querySelector('#reset-playground-btn');
  const tplSelect = outlet.querySelector('#template-select');
  const popoutBtn = outlet.querySelector('#popout-preview-btn');
  const editorsCol = outlet.querySelector('#editors-column');
  playgroundConsoleEl = outlet.querySelector('#playground-console');

  // Register listener for postMessage logs from iframe
  window.addEventListener('message', handlePlaygroundMessage);

  // Editor subtab switcher
  outlet.querySelectorAll('.editor-subtab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      outlet.querySelectorAll('.editor-subtab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeEditorTab = btn.dataset.pane;
      editorsCol.className = `editors-column pane-mode-${activeEditorTab}`;
    });
  });

  // Responsive resizing controls
  outlet.querySelectorAll('.resizer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      outlet.querySelectorAll('.resizer-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const w = btn.dataset.width;
      if (w === '100%') {
        iframe.style.width = '100%';
        iframe.style.margin = '0';
      } else {
        iframe.style.width = w;
        iframe.style.margin = '0 auto';
      }
    });
  });

  // Console Clear
  outlet.querySelector('#clear-console-btn')?.addEventListener('click', () => {
    currentPlaygroundConsoleLogs = [];
    if (playgroundConsoleEl) {
      playgroundConsoleEl.innerHTML = '';
      const badge = document.getElementById('console-count-badge');
      if (badge) badge.textContent = '0 logs';
    }
  });

  function executeCode() {
    const html = htmlInput.value;
    const css = cssInput.value;
    const js = jsInput.value;

    // Reset console output display
    currentPlaygroundConsoleLogs = [];
    if (playgroundConsoleEl) {
      playgroundConsoleEl.innerHTML = '';
      const badge = document.getElementById('console-count-badge');
      if (badge) badge.textContent = '0 logs';
    }

    // Build sandboxed payload with safe postMessage logger
    const docContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    ${css}
  </style>
  <script>
    (function() {
      function sendLog(level, args) {
        var str = Array.prototype.slice.call(args).map(function(item) {
          if (typeof item === 'object') {
            try { return JSON.stringify(item); } catch(e) { return String(item); }
          }
          return String(item);
        }).join(' ');
        window.parent.postMessage({
          type: 'playground-console',
          level: level,
          text: str,
          timestamp: new Date().toLocaleTimeString()
        }, '*');
      }

      var origLog = console.log;
      var origWarn = console.warn;
      var origError = console.error;

      console.log = function() {
        sendLog('log', arguments);
        if (origLog) origLog.apply(console, arguments);
      };
      console.warn = function() {
        sendLog('warn', arguments);
        if (origWarn) origWarn.apply(console, arguments);
      };
      console.error = function() {
        sendLog('error', arguments);
        if (origError) origError.apply(console, arguments);
      };

      window.onerror = function(msg, url, line) {
        sendLog('error', ['Runtime Error: ' + msg + ' (Line ' + line + ')']);
        return false;
      };
    })();
  <\/script>
</head>
<body>
  ${html}
  <script>
    try {
      ${js}
    } catch (err) {
      console.error('Execution Error:', err.message);
    }
  <\/script>
</body>
</html>`;

    iframe.srcdoc = docContent;
    showToast('Sandbox refreshed', 'info');
  }

  if (runBtn) runBtn.addEventListener('click', executeCode);

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      htmlInput.value = '';
      cssInput.value = '';
      jsInput.value = '';
      currentPlaygroundConsoleLogs = [];
      if (playgroundConsoleEl) {
        playgroundConsoleEl.innerHTML = `
          <div class="console-msg msg-info">
            <span class="msg-time">${new Date().toLocaleTimeString()}</span>
            <span class="msg-level">[SYS]</span>
            <span class="msg-body">All editors cleared.</span>
          </div>
        `;
      }
      iframe.srcdoc = '<!DOCTYPE html><html><body style="background:#F5F3EE; font-family:sans-serif; color:#696969; display:flex; align-items:center; justify-content:center; height:100vh; margin:0;"><p>Editor is empty. Enter code and click Run.</p></body></html>';
      showToast('Playground cleared', 'info');
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const selected = tplSelect.value || 'button';
      const tpl = PLAYGROUND_TEMPLATES[selected];
      htmlInput.value = tpl.html;
      cssInput.value = tpl.css;
      jsInput.value = tpl.js;
      executeCode();
      showToast(`Restored "${selected}" template`, 'success');
    });
  }

  if (tplSelect) {
    tplSelect.addEventListener('change', () => {
      const selected = tplSelect.value;
      const tpl = PLAYGROUND_TEMPLATES[selected];
      if (tpl) {
        htmlInput.value = tpl.html;
        cssInput.value = tpl.css;
        jsInput.value = tpl.js;
        executeCode();
      }
    });
  }

  if (popoutBtn) {
    popoutBtn.addEventListener('click', () => {
      const win = window.open('', '_blank');
      if (win) {
        win.document.write(iframe.srcdoc || '');
        win.document.close();
      }
    });
  }

  // Initial execution
  executeCode();
}

// ==========================================
// 2. SNIPPETS LIBRARY
// ==========================================
// ==========================================
// 2. SNIPPETS LIBRARY (MASTER-DETAIL WORKSPACE)
// ==========================================
let selectedSnippetId = SNIPPETS_DATA[0] ? SNIPPETS_DATA[0].id : null;
let isViewerExpanded = false;

function renderSnippetsTool(outlet) {
  outlet.innerHTML = `
    <div class="snippets-tool-layout">
      <!-- Toolbar -->
      <div class="snippets-toolbar glass-panel">
        <div class="search-input-wrapper">
          <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="search" 
            id="snippet-search-input" 
            class="projects-search-input" 
            placeholder="Search snippets by title, language, algorithm, or keywords..." 
            value="${escapeHtml(snippetSearchQuery)}"
            aria-label="Search snippets"
          />
          <button id="clear-snippet-search-btn" class="clear-search-btn" style="display: ${snippetSearchQuery ? 'inline-flex' : 'none'};" title="Clear search">×</button>
        </div>

        <div class="filter-pills" role="tablist" aria-label="Snippet category filters">
          <button class="filter-pill ${activeSnippetCat === 'all' ? 'active' : ''}" data-cat="all">All (${SNIPPETS_DATA.length})</button>
          <button class="filter-pill ${activeSnippetCat === 'javascript' ? 'active' : ''}" data-cat="javascript">JavaScript</button>
          <button class="filter-pill ${activeSnippetCat === 'python' ? 'active' : ''}" data-cat="python">Python</button>
          <button class="filter-pill ${activeSnippetCat === 'ai-ml' ? 'active' : ''}" data-cat="ai-ml">AI &amp; ML</button>
          <button class="filter-pill ${activeSnippetCat === 'dsa' ? 'active' : ''}" data-cat="dsa">Algorithms &amp; DSA</button>
          <button class="filter-pill ${activeSnippetCat === 'threejs' ? 'active' : ''}" data-cat="threejs">Three.js / 3D</button>
          <button class="filter-pill ${activeSnippetCat === 'css' ? 'active' : ''}" data-cat="css">HTML &amp; CSS</button>
          <button class="filter-pill ${activeSnippetCat === 'api' ? 'active' : ''}" data-cat="api">APIs &amp; Net</button>
        </div>

        <div class="snippets-count-badge" id="snippets-count-badge">
          ${SNIPPETS_DATA.length} snippets
        </div>
      </div>

      <!-- Master-Detail Workspace: Left Catalog, Right Code Viewer -->
      <div class="snippets-workspace-grid ${isViewerExpanded ? 'viewer-expanded' : ''}" id="snippets-workspace-grid">
        <!-- Left Catalog Column -->
        <aside class="snippets-catalog-col" id="snippets-catalog-col" aria-label="Snippet Catalog">
          <div class="catalog-list" id="snippets-catalog-list">
            <!-- Injected via updateSnippetsCatalog -->
          </div>
        </aside>

        <!-- Right Code Preview Panel -->
        <main class="snippet-viewer-panel glass-panel" id="snippet-viewer-panel" aria-label="Snippet Code Viewer">
          <!-- Injected via updateSnippetViewer -->
        </main>
      </div>
    </div>
  `;

  const searchInput = outlet.querySelector('#snippet-search-input');
  const clearSearchBtn = outlet.querySelector('#clear-snippet-search-btn');

  searchInput?.addEventListener('input', (e) => {
    snippetSearchQuery = e.target.value;
    if (clearSearchBtn) clearSearchBtn.style.display = snippetSearchQuery ? 'inline-flex' : 'none';
    refreshSnippetsView(outlet);
  });

  clearSearchBtn?.addEventListener('click', () => {
    snippetSearchQuery = '';
    if (searchInput) searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    refreshSnippetsView(outlet);
  });

  const pills = outlet.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeSnippetCat = pill.dataset.cat;
      refreshSnippetsView(outlet);
    });
  });

  refreshSnippetsView(outlet);
}

function getFilteredSnippets() {
  return SNIPPETS_DATA.filter(s => {
    // Category match
    if (activeSnippetCat !== 'all') {
      const cat = activeSnippetCat.toLowerCase();
      const matchCat = (s.category || '').toLowerCase() === cat;
      const matchLabel = (s.categoryLabel || '').toLowerCase().includes(cat);
      if (!matchCat && !matchLabel) return false;
    }

    // Search query match
    if (snippetSearchQuery) {
      const q = snippetSearchQuery.toLowerCase().trim();
      const matchTitle = (s.title || '').toLowerCase().includes(q);
      const matchDesc = (s.description || '').toLowerCase().includes(q);
      const matchLang = (s.language || '').toLowerCase().includes(q);
      const matchKeywords = (s.keywords || '').toLowerCase().includes(q);
      const matchCode = (s.code || '').toLowerCase().includes(q);
      return matchTitle || matchDesc || matchLang || matchKeywords || matchCode;
    }

    return true;
  });
}

function refreshSnippetsView(outlet) {
  const filtered = getFilteredSnippets();
  const countBadge = outlet.querySelector('#snippets-count-badge');
  if (countBadge) {
    countBadge.textContent = `${filtered.length} snippet${filtered.length === 1 ? '' : 's'}`;
  }

  // Ensure selectedSnippetId is valid within filtered list
  if (filtered.length > 0) {
    const exists = filtered.some(s => s.id === selectedSnippetId);
    if (!exists) {
      selectedSnippetId = filtered[0].id;
    }
  } else {
    selectedSnippetId = null;
  }

  updateSnippetsCatalog(outlet, filtered);
  updateSnippetViewer(outlet, filtered);
}

function updateSnippetsCatalog(outlet, filtered) {
  const catalogList = outlet.querySelector('#snippets-catalog-list');
  if (!catalogList) return;

  if (filtered.length === 0) {
    catalogList.innerHTML = `
      <div class="empty-state-card glass-panel" style="padding: 32px 20px; text-align: center;">
        <div style="font-size: 1.8rem; margin-bottom: 8px;">🔍</div>
        <h4 style="font-family: var(--font-display); font-size: 1.05rem; color: var(--paper); margin: 0 0 6px 0;">No Snippets Found</h4>
        <p style="color: var(--mist); font-size: 0.8125rem; margin: 0 0 14px 0;">No snippet matches &quot;${escapeHtml(snippetSearchQuery)}&quot; in category &quot;${escapeHtml(activeSnippetCat)}&quot;.</p>
        <button id="reset-snippet-filters-btn" class="btn-secondary" style="font-size: 0.8125rem; padding: 6px 14px;">Reset Filters</button>
      </div>
    `;

    outlet.querySelector('#reset-snippet-filters-btn')?.addEventListener('click', () => {
      snippetSearchQuery = '';
      activeSnippetCat = 'all';
      renderSnippetsTool(outlet);
    });
    return;
  }

  catalogList.innerHTML = filtered.map(s => {
    const isSelected = s.id === selectedSnippetId;
    return `
      <div class="snippet-catalog-item ${isSelected ? 'is-selected' : ''}" data-id="${s.id}" role="button" tabindex="0" aria-selected="${isSelected}">
        <div class="item-header">
          <span class="item-lang-badge">${escapeHtml(s.language || 'Code')}</span>
          <span class="item-cat-label">${escapeHtml(s.categoryLabel || '')}</span>
        </div>
        <h4 class="item-title">${escapeHtml(s.title)}</h4>
        <p class="item-desc">${escapeHtml(s.description)}</p>
      </div>
    `;
  }).join('');

  catalogList.querySelectorAll('.snippet-catalog-item').forEach(item => {
    const onSelect = () => {
      selectedSnippetId = item.dataset.id;
      catalogList.querySelectorAll('.snippet-catalog-item').forEach(el => {
        const isThis = el.dataset.id === selectedSnippetId;
        el.classList.toggle('is-selected', isThis);
        el.setAttribute('aria-selected', isThis);
      });
      updateSnippetViewer(outlet, filtered);
    };

    item.addEventListener('click', onSelect);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect();
      }
    });
  });
}

function updateSnippetViewer(outlet, filtered) {
  const viewerPanel = outlet.querySelector('#snippet-viewer-panel');
  if (!viewerPanel) return;

  if (!selectedSnippetId || filtered.length === 0) {
    viewerPanel.innerHTML = `
      <div class="empty-viewer-state">
        <p style="color: var(--mist); font-size: 0.95rem;">Select a snippet from the catalog on the left to view and copy its implementation.</p>
      </div>
    `;
    return;
  }

  const snippet = SNIPPETS_DATA.find(s => s.id === selectedSnippetId);
  if (!snippet) return;

  // Format code with line numbers
  const lines = snippet.code.split('\n');
  const codeWithGutter = lines.map((line, idx) => {
    const lineNum = String(idx + 1).padStart(2, '0');
    return `<span class="code-line"><span class="line-num">${lineNum}</span><span class="line-content">${escapeHtml(line)}</span></span>`;
  }).join('\n');

  viewerPanel.innerHTML = `
    <div class="viewer-header">
      <div class="viewer-title-block">
        <div class="viewer-badge-row">
          <span class="viewer-lang-badge">${escapeHtml(snippet.language)}</span>
          <span class="viewer-cat-badge">${escapeHtml(snippet.categoryLabel)}</span>
          <span class="viewer-lines-badge">${lines.length} lines</span>
        </div>
        <h3 class="viewer-title">${escapeHtml(snippet.title)}</h3>
      </div>

      <div class="viewer-actions-row">
        <button id="copy-selected-snippet-btn" class="btn-primary copy-snippet-action" title="Copy code snippet to clipboard">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span id="copy-btn-label">Copy Code</span>
        </button>

        <button id="toggle-viewer-expand-btn" class="viewer-expand-btn" title="${isViewerExpanded ? 'Collapse viewer' : 'Expand viewer full-width'}">
          ${isViewerExpanded ? 'Standard View ⇲' : 'Full Width ⇱'}
        </button>
      </div>
    </div>

    <div class="viewer-desc-strip">
      <span class="desc-bullet">&bull;</span>
      <span>${escapeHtml(snippet.description)}</span>
    </div>

    <div class="viewer-code-container">
      <pre class="viewer-code-pre"><code class="language-${escapeHtml((snippet.language || 'javascript').toLowerCase())}">${codeWithGutter}</code></pre>
    </div>
  `;

  // Attach copy handler
  const copyBtn = viewerPanel.querySelector('#copy-selected-snippet-btn');
  copyBtn?.addEventListener('click', () => {
    copyToClipboard(snippet.code, copyBtn);
  });

  // Attach expand handler
  const expandBtn = viewerPanel.querySelector('#toggle-viewer-expand-btn');
  const grid = outlet.querySelector('#snippets-workspace-grid');
  expandBtn?.addEventListener('click', () => {
    isViewerExpanded = !isViewerExpanded;
    if (grid) grid.classList.toggle('viewer-expanded', isViewerExpanded);
    expandBtn.textContent = isViewerExpanded ? 'Standard View ⇲' : 'Full Width ⇱';
  });
}

async function copyToClipboard(text, btnElement) {
  try {
    let success = false;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        success = true;
      } catch (clipErr) {
        success = false;
      }
    }
    
    if (!success) {
      // Safe fallback for unsecure contexts or unsupported clipboard
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      ta.style.top = '-9999px';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        success = document.execCommand('copy');
      } catch (execErr) {
        success = false;
      }
      document.body.removeChild(ta);
    }

    if (success) {
      showToast('Copied snippet to clipboard!', 'success');
      animateCopyBtn(btnElement);
    } else {
      showToast('Clipboard unavailable. Please select and copy manually.', 'warn');
    }
  } catch (err) {
    showToast('Failed to copy snippet', 'error');
  }
}

function animateCopyBtn(btn) {
  const span = btn.querySelector('span');
  if (span) {
    const orig = span.textContent;
    span.textContent = 'Copied!';
    setTimeout(() => { span.textContent = orig; }, 2000);
  }
}

// ==========================================
// 3. 8X DEVELOPER UTILITIES
// ==========================================
function renderUtilitiesTool(outlet) {
  outlet.innerHTML = `
    <div class="utilities-layout">
      <!-- Nav Grid of 8 Utilities -->
      <div class="utilities-grid">
        <!-- 1. JSON Formatter & Validator -->
        <section class="utility-card glass-panel" id="util-json">
          <div class="util-header">
            <h3>01. JSON Formatter &amp; Validator</h3>
            <span class="util-badge">Parser</span>
          </div>
          <textarea id="json-input" class="util-textarea" placeholder="Paste JSON here...">{"project":"ATLAS","version":2.0,"active":true,"modules":["rag","edge","webgl"]}</textarea>
          <div class="util-btn-row">
            <button id="json-beautify-btn" class="btn-primary">Format (2 Spaces)</button>
            <button id="json-minify-btn" class="btn-secondary">Minify</button>
            <button id="json-validate-btn" class="btn-secondary">Validate</button>
          </div>
          <div id="json-status" class="util-status-msg"></div>
        </section>

        <!-- 2. Base64 Encoder / Decoder -->
        <section class="utility-card glass-panel" id="util-base64">
          <div class="util-header">
            <h3>02. Base64 Encoder / Decoder</h3>
            <span class="util-badge">Codec</span>
          </div>
          <textarea id="b64-input" class="util-textarea" placeholder="Enter plain text or Base64 string...">ATLAS 2.0 Architectural Systems</textarea>
          <div class="util-btn-row">
            <button id="b64-encode-btn" class="btn-primary">Encode Base64</button>
            <button id="b64-decode-btn" class="btn-secondary">Decode to Plaintext</button>
          </div>
          <div id="b64-status" class="util-status-msg"></div>
        </section>

        <!-- 3. URL Component Encoder / Decoder -->
        <section class="utility-card glass-panel" id="util-url">
          <div class="util-header">
            <h3>03. URL Encoder / Decoder</h3>
            <span class="util-badge">Web</span>
          </div>
          <textarea id="url-input" class="util-textarea" placeholder="Enter URL or query string...">https://alageshvaran.dev/projects?category=ai%20systems&page=1</textarea>
          <div class="util-btn-row">
            <button id="url-encode-btn" class="btn-primary">encodeURIComponent</button>
            <button id="url-decode-btn" class="btn-secondary">decodeURIComponent</button>
          </div>
          <div id="url-status" class="util-status-msg"></div>
        </section>

        <!-- 4. UUID v4 Generator -->
        <section class="utility-card glass-panel" id="util-uuid">
          <div class="util-header">
            <h3>04. UUID v4 Generator</h3>
            <span class="util-badge">Crypto</span>
          </div>
          <div class="uuid-display-box" id="uuid-display">Click generate to create cryptographically secure UUID v4</div>
          <div class="util-btn-row">
            <button id="uuid-gen-btn" class="btn-primary">Generate UUID v4</button>
            <button id="uuid-copy-btn" class="btn-secondary">Copy</button>
          </div>
        </section>

        <!-- 5. SHA-256 Hash Calculator -->
        <section class="utility-card glass-panel" id="util-hash">
          <div class="util-header">
            <h3>05. SHA-256 Cryptographic Hash</h3>
            <span class="util-badge">SubtleCrypto</span>
          </div>
          <input type="text" id="hash-input" class="projects-search-input" placeholder="Type text to compute hash..." value="ATLAS_ENGINEERING_CORE" />
          <div class="hash-result-box" id="hash-result">...</div>
          <div class="util-btn-row">
            <button id="hash-calc-btn" class="btn-primary">Compute SHA-256</button>
            <button id="hash-copy-btn" class="btn-secondary">Copy Digest</button>
          </div>
        </section>

        <!-- 6. Regex Live Evaluator -->
        <section class="utility-card glass-panel" id="util-regex">
          <div class="util-header">
            <h3>06. Regular Expression Tester</h3>
            <span class="util-badge">Engine</span>
          </div>
          <input type="text" id="regex-pattern" class="projects-search-input" placeholder="Pattern (e.g. \\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b)" value="\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b" />
          <textarea id="regex-text" class="util-textarea" placeholder="Test text...">Reach out at varanalagesh19@gmail.com or contact@atlas.dev for inquiries.</textarea>
          <div id="regex-matches" class="util-status-msg">Matches will appear here</div>
          <div class="util-btn-row">
            <button id="regex-test-btn" class="btn-primary">Evaluate Expression</button>
          </div>
        </section>

        <!-- 7. CSS Unit Converter (px &harr; rem) -->
        <section class="utility-card glass-panel" id="util-units">
          <div class="util-header">
            <h3>07. CSS Unit Converter (PX / REM)</h3>
            <span class="util-badge">Layout</span>
          </div>
          <div class="unit-row">
            <div>
              <label for="px-input">Pixels (px):</label>
              <input type="number" id="px-input" class="projects-search-input" value="16" />
            </div>
            <div class="unit-divider">&harr;</div>
            <div>
              <label for="rem-input">REM (at 16px base):</label>
              <input type="number" step="0.0625" id="rem-input" class="projects-search-input" value="1.0" />
            </div>
          </div>
          <div class="unit-preview-note">Base root font-size: 16px. Ideal for design token calculation.</div>
        </section>

        <!-- 8. HEX / RGB / HSL Color Converter -->
        <section class="utility-card glass-panel" id="util-color">
          <div class="util-header">
            <h3>08. Color Palette Converter</h3>
            <span class="util-badge">Design</span>
          </div>
          <div class="color-picker-row">
            <input type="color" id="color-picker" value="#D4FF3F" />
            <input type="text" id="color-hex-text" class="projects-search-input" value="#D4FF3F" />
          </div>
          <div id="color-values" class="color-values-block">
            <div><strong>RGB:</strong> <span id="rgb-val">rgb(212, 255, 63)</span></div>
            <div><strong>HSL:</strong> <span id="hsl-val">hsl(39, 38%, 55%)</span></div>
          </div>
          <div class="util-btn-row">
            <button id="copy-hex-btn" class="btn-secondary">Copy HEX</button>
            <button id="copy-rgb-btn" class="btn-secondary">Copy RGB</button>
            <button id="copy-hsl-btn" class="btn-secondary">Copy HSL</button>
          </div>
        </section>
      </div>
    </div>
  `;

  setupUtilitiesHandlers(outlet);
}

function setupUtilitiesHandlers(outlet) {
  // 1. JSON
  const jsonInput = outlet.querySelector('#json-input');
  const jsonStatus = outlet.querySelector('#json-status');
  outlet.querySelector('#json-beautify-btn')?.addEventListener('click', () => {
    try {
      if (!jsonInput.value.trim()) throw new Error('Input is empty.');
      const parsed = JSON.parse(jsonInput.value);
      jsonInput.value = JSON.stringify(parsed, null, 2);
      jsonStatus.className = 'util-status-msg success';
      jsonStatus.textContent = 'Valid JSON formatted successfully (2 spaces).';
    } catch (e) {
      jsonStatus.className = 'util-status-msg error';
      jsonStatus.textContent = `JSON Parse Error: ${e.message}`;
    }
  });
  outlet.querySelector('#json-minify-btn')?.addEventListener('click', () => {
    try {
      if (!jsonInput.value.trim()) throw new Error('Input is empty.');
      const parsed = JSON.parse(jsonInput.value);
      jsonInput.value = JSON.stringify(parsed);
      jsonStatus.className = 'util-status-msg success';
      jsonStatus.textContent = 'JSON minified successfully.';
    } catch (e) {
      jsonStatus.className = 'util-status-msg error';
      jsonStatus.textContent = `JSON Error: ${e.message}`;
    }
  });
  outlet.querySelector('#json-validate-btn')?.addEventListener('click', () => {
    try {
      if (!jsonInput.value.trim()) throw new Error('Input is empty.');
      JSON.parse(jsonInput.value);
      jsonStatus.className = 'util-status-msg success';
      jsonStatus.textContent = 'Syntax is 100% valid JSON.';
    } catch (e) {
      jsonStatus.className = 'util-status-msg error';
      jsonStatus.textContent = `Invalid JSON: ${e.message}`;
    }
  });

  // 2. Base64
  const b64Input = outlet.querySelector('#b64-input');
  const b64Status = outlet.querySelector('#b64-status');
  outlet.querySelector('#b64-encode-btn')?.addEventListener('click', () => {
    try {
      if (!b64Input.value) {
        b64Status.className = 'util-status-msg error';
        b64Status.textContent = 'Please enter text to encode.';
        return;
      }
      b64Input.value = btoa(unescape(encodeURIComponent(b64Input.value)));
      b64Status.className = 'util-status-msg success';
      b64Status.textContent = 'Encoded to Base64 successfully.';
    } catch (e) {
      b64Status.className = 'util-status-msg error';
      b64Status.textContent = `Encoding error: ${e.message}`;
    }
  });
  outlet.querySelector('#b64-decode-btn')?.addEventListener('click', () => {
    try {
      if (!b64Input.value) {
        b64Status.className = 'util-status-msg error';
        b64Status.textContent = 'Please enter Base64 string to decode.';
        return;
      }
      b64Input.value = decodeURIComponent(escape(atob(b64Input.value)));
      b64Status.className = 'util-status-msg success';
      b64Status.textContent = 'Decoded to Plaintext successfully.';
    } catch (e) {
      b64Status.className = 'util-status-msg error';
      b64Status.textContent = 'Invalid Base64 input sequence.';
    }
  });

  // 3. URL
  const urlInput = outlet.querySelector('#url-input');
  const urlStatus = outlet.querySelector('#url-status');
  outlet.querySelector('#url-encode-btn')?.addEventListener('click', () => {
    if (!urlInput.value) {
      urlStatus.className = 'util-status-msg error';
      urlStatus.textContent = 'Input is empty.';
      return;
    }
    urlInput.value = encodeURIComponent(urlInput.value);
    urlStatus.className = 'util-status-msg success';
    urlStatus.textContent = 'URL Encoded (encodeURIComponent).';
  });
  outlet.querySelector('#url-decode-btn')?.addEventListener('click', () => {
    try {
      if (!urlInput.value) {
        urlStatus.className = 'util-status-msg error';
        urlStatus.textContent = 'Input is empty.';
        return;
      }
      urlInput.value = decodeURIComponent(urlInput.value);
      urlStatus.className = 'util-status-msg success';
      urlStatus.textContent = 'URL Decoded (decodeURIComponent).';
    } catch (e) {
      urlStatus.className = 'util-status-msg error';
      urlStatus.textContent = 'Malformed URI sequence.';
    }
  });

  // 4. UUID
  const uuidDisplay = outlet.querySelector('#uuid-display');
  function generateUUID() {
    const uuid = (crypto && crypto.randomUUID) ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    uuidDisplay.textContent = uuid;
    return uuid;
  }
  outlet.querySelector('#uuid-gen-btn')?.addEventListener('click', generateUUID);
  outlet.querySelector('#uuid-copy-btn')?.addEventListener('click', (e) => {
    copyToClipboard(uuidDisplay.textContent, e.currentTarget);
  });
  generateUUID();

  // 5. SHA-256
  const hashInput = outlet.querySelector('#hash-input');
  const hashResult = outlet.querySelector('#hash-result');
  async function computeHash() {
    const text = hashInput.value;
    if (!text) {
      hashResult.textContent = 'Please enter text above to hash.';
      return;
    }
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      hashResult.textContent = hashHex;
    } catch (err) {
      hashResult.textContent = `Hash computation error: ${err.message}`;
    }
  }
  outlet.querySelector('#hash-calc-btn')?.addEventListener('click', computeHash);
  outlet.querySelector('#hash-copy-btn')?.addEventListener('click', (e) => {
    copyToClipboard(hashResult.textContent, e.currentTarget);
  });
  computeHash();

  // 6. Regex
  const regexPattern = outlet.querySelector('#regex-pattern');
  const regexText = outlet.querySelector('#regex-text');
  const regexMatches = outlet.querySelector('#regex-matches');
  function runRegex() {
    if (!regexPattern.value) {
      regexMatches.className = 'util-status-msg error';
      regexMatches.textContent = 'Please enter a regex pattern.';
      return;
    }
    try {
      const re = new RegExp(regexPattern.value, 'g');
      const matches = regexText.value.match(re);
      if (matches && matches.length > 0) {
        regexMatches.className = 'util-status-msg success';
        regexMatches.textContent = `Found ${matches.length} match(es): ${matches.slice(0, 5).join(', ')}${matches.length > 5 ? '...' : ''}`;
      } else {
        regexMatches.className = 'util-status-msg';
        regexMatches.textContent = 'No matches found.';
      }
    } catch (e) {
      regexMatches.className = 'util-status-msg error';
      regexMatches.textContent = `Invalid Regex Syntax: ${e.message}`;
    }
  }
  outlet.querySelector('#regex-test-btn')?.addEventListener('click', runRegex);
  runRegex();

  // 7. Unit Converter
  const pxInput = outlet.querySelector('#px-input');
  const remInput = outlet.querySelector('#rem-input');
  pxInput?.addEventListener('input', () => {
    const px = parseFloat(pxInput.value);
    if (!isNaN(px)) {
      remInput.value = (px / 16).toFixed(4).replace(/\.?0+$/, '');
    }
  });
  remInput?.addEventListener('input', () => {
    const rem = parseFloat(remInput.value);
    if (!isNaN(rem)) {
      pxInput.value = (rem * 16).toFixed(1).replace(/\.0$/, '');
    }
  });

  // 8. Color Converter
  const colorPicker = outlet.querySelector('#color-picker');
  const colorHexText = outlet.querySelector('#color-hex-text');
  const rgbVal = outlet.querySelector('#rgb-val');
  const hslVal = outlet.querySelector('#hsl-val');

  function updateColor(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    if (hex.length !== 6) return;

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    rgbVal.textContent = `rgb(${r}, ${g}, ${b})`;

    // Compute HSL
    const rNorm = r / 255, gNorm = g / 255, bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm), min = Math.min(rNorm, gNorm, bNorm);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
        case gNorm: h = (bNorm - rNorm) / d + 2; break;
        case bNorm: h = (rNorm - gNorm) / d + 4; break;
      }
      h /= 6;
    }

    const hDeg = Math.round(h * 360);
    const sPct = Math.round(s * 100);
    const lPct = Math.round(l * 100);
    hslVal.textContent = `hsl(${hDeg}, ${sPct}%, ${lPct}%)`;
  }

  colorPicker?.addEventListener('input', (e) => {
    colorHexText.value = e.target.value.toUpperCase();
    updateColor(e.target.value);
  });

  colorHexText?.addEventListener('input', (e) => {
    let val = e.target.value.trim();
    if (!val.startsWith('#')) val = '#' + val;
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      colorPicker.value = val;
      updateColor(val);
    }
  });

  outlet.querySelector('#copy-hex-btn')?.addEventListener('click', (e) => {
    copyToClipboard(colorHexText.value, e.currentTarget);
  });
  outlet.querySelector('#copy-rgb-btn')?.addEventListener('click', (e) => {
    copyToClipboard(rgbVal.textContent, e.currentTarget);
  });
  outlet.querySelector('#copy-hsl-btn')?.addEventListener('click', (e) => {
    copyToClipboard(hslVal.textContent, e.currentTarget);
  });

  updateColor('#D4FF3F');
}

// ==========================================
// 4. ATLAS TERMINAL INTERACTIVE CLI
// ==========================================
function renderTerminalTool(outlet) {
  outlet.innerHTML = `
    <div class="terminal-container glass-panel">
      <div class="terminal-bar">
        <div class="traffic-lights">
          <span class="light red"></span>
          <span class="light yellow"></span>
          <span class="light green"></span>
        </div>
        <span class="terminal-title">atlas-cli — zsh — 80x24</span>
        <button id="clear-term-btn" class="term-bar-btn" title="Clear Console">clear</button>
      </div>

      <div class="terminal-body" id="term-body">
        <div class="term-line output system-banner">
          <div>ATLAS 2.0 Architectural Command Environment [Version 2.4.0]</div>
          <div>Connected to repository host <strong>alageshvaran.dev</strong></div>
          <div>Type <span class="term-highlight">help</span> for verified commands or <span class="term-highlight">projects</span> to inspect open-source inventory.</div>
          <br>
        </div>
      </div>

      <form class="terminal-input-row" id="term-form">
        <span class="term-prompt">atlas@production:~$</span>
        <input type="text" id="term-input" class="term-input" autocomplete="off" spellcheck="false" autofocus />
      </form>
    </div>
  `;

  const termBody = outlet.querySelector('#term-body');
  const termForm = outlet.querySelector('#term-form');
  const termInput = outlet.querySelector('#term-input');
  const clearBtn = outlet.querySelector('#clear-term-btn');

  let history = [];
  let historyIndex = -1;

  function appendLine(text, type = 'output') {
    const div = document.createElement('div');
    div.className = `term-line ${type}`;
    div.innerHTML = text;
    termBody.appendChild(div);
    termBody.scrollTop = termBody.scrollHeight;
  }

  function handleCommand(cmd) {
    const raw = cmd.trim();
    if (!raw) return;

    history.push(raw);
    historyIndex = history.length;

    appendLine(`<span class="term-prompt">atlas@production:~$</span> ${escapeHtml(raw)}`, 'input-echo');

    const [action, ...args] = raw.split(/\s+/);
    const sub = args.join(' ').toLowerCase();

    switch (action.toLowerCase()) {
      case 'help':
        appendLine(`
<strong>AVAILABLE SYSTEM COMMANDS:</strong>
  <span class="term-highlight">projects</span>       List all 8 verified repositories
  <span class="term-highlight">about</span>          Display developer background and education
  <span class="term-highlight">skills</span>         List core technical competencies
  <span class="term-highlight">tools</span>          Overview of available developer utilities
  <span class="term-highlight">contact</span>        Show verified contact channels
  <span class="term-highlight">theme</span> [dark|light] Switch global visual theme
  <span class="term-highlight">echo</span> [text]     Echo text back to console
  <span class="term-highlight">date</span>           Print current UTC timestamp
  <span class="term-highlight">whoami</span>         Print authenticated developer profile
  <span class="term-highlight">clear</span>          Clear the terminal viewport
        `);
        break;

      case 'projects':
        appendLine(`
<strong>VERIFIED OPEN-SOURCE REPOSITORIES:</strong>
  01. <a href="/projects/intellipdf" data-route="/projects/intellipdf" class="term-link">IntelliPDF</a> — RAG Exam Learning Assistant [Python/Streamlit]
  02. <a href="/projects/solvex-ner" data-route="/projects/solvex-ner" class="term-link">SOLVEX (NER ACCESS 2.0)</a> — SIH 2026 Logistics Intelligence [Edge AI]
  03. <a href="/projects/linkx" data-route="/projects/linkx" class="term-link">LINKEDX (LINKX)</a> — Multimodal LinkedIn Creator Engine [Gemini Vision]
  04. <a href="/projects/atlas-ai" data-route="/projects/atlas-ai" class="term-link">atlasAI Platform</a> — Multi-Provider LLM Proxy [Python/Flask]
  05. <a href="/projects/smart-agriculture" data-route="/projects/smart-agriculture" class="term-link">Smart Agriculture</a> — IoT Soil Moisture System [C/C++]
  06. <a href="/projects/base-isolation" data-route="/projects/base-isolation" class="term-link">Bumblebee Isolation</a> — Seismic Physics Simulation [Three.js]
  07. <a href="/projects/nvidia-ai-chat" data-route="/projects/nvidia-ai-chat" class="term-link">NVIDIA AI Chat Studio</a> — Accelerated NIM Inference [Python]
  08. <a href="/projects/atlas-portfolio" data-route="/projects/atlas-portfolio" class="term-link">ATLAS 3D Portfolio</a> — WebGL Multi-Page SPA Engine [Vanilla JS]
        `);
        break;

      case 'about':
        appendLine(`
<strong>ALAGESHVARAN (@varanalagesh19-dot)</strong>
  Creative Technologist, AI Systems Architect & Three.js 3D Developer.
  Education: B.Tech in Artificial Intelligence & Data Science (Sri Sairam Engineering College, CGPA: 8.44/10).
  Specialization: RAG architectures, edge offline pathfinding, real-time 3D spatial interfaces.
        `);
        break;

      case 'skills':
        appendLine(`
<strong>CORE REPERTOIRE:</strong>
  Languages: Python, Kotlin, JavaScript/Node.js, C/C++, HTML5/Modern CSS.
  AI/ML: RAG Architectures, Vector Embeddings (FAISS/ChromaDB), Gemini Vision, NVIDIA NIM.
  3D & Frontend: Three.js, WebGL GLSL Shaders, Web Audio API, Vanilla CSS.
  DevOps & Edge: Docker, A* Graph Routing, SQLite, Git, Vercel Serverless.
        `);
        break;

      case 'tools':
        appendLine(`
<strong>DEVELOPER UTILITIES SUITE:</strong>
  1. Live Code Playground: Sandboxed HTML/CSS/JS execution with console & responsive views
  2. Snippets Library: 13 verified algorithmic snippets with search & 1-click copy
  3. 8x Utilities: JSON, Base64, URL, UUID, SHA-256, Regex, Unit converter, Color palette
  4. Prompt Lab: Curated system prompts for zero-hallucination RAG and vision deconstruction
        `);
        break;

      case 'contact':
        appendLine(`
<strong>VERIFIED CHANNELS:</strong>
  Email:    <a href="mailto:varanalagesh19@gmail.com" class="term-link">varanalagesh19@gmail.com</a>
  GitHub:   <a href="https://github.com/varanalagesh19-dot" target="_blank" class="term-link">github.com/varanalagesh19-dot</a>
  LinkedIn: <a href="https://www.linkedin.com/in/alagesh023" target="_blank" class="term-link">linkedin.com/in/alagesh023</a>
  Location: Chennai, Tamil Nadu, India
        `);
        break;

      case 'theme':
        if (sub === 'dark' || sub === 'light') {
          document.documentElement.setAttribute('data-theme', sub);
          localStorage.setItem('atlas_theme', sub);
          appendLine(`Interface theme switched to <strong>${sub.toUpperCase()}</strong>.`);
        } else {
          appendLine(`Usage: theme dark OR theme light (current: ${document.documentElement.getAttribute('data-theme') || 'light'})`);
        }
        break;

      case 'echo':
        appendLine(escapeHtml(args.join(' ')));
        break;

      case 'date':
        appendLine(new Date().toISOString());
        break;

      case 'whoami':
        appendLine('guest@alageshvaran.dev [UID 1000 - READ ONLY VISITOR]');
        break;

      case 'clear':
        termBody.innerHTML = '';
        break;

      default:
        appendLine(`Command not found: "${escapeHtml(action)}". Type <span class="term-highlight">help</span> for valid commands.`, 'error');
    }
  }

  termForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = termInput.value;
    termInput.value = '';
    handleCommand(val);
  });

  clearBtn?.addEventListener('click', () => {
    termBody.innerHTML = '';
  });

  termInput?.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      if (history.length > 0 && historyIndex > 0) {
        historyIndex--;
        termInput.value = history[historyIndex];
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        termInput.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        termInput.value = '';
      }
      e.preventDefault();
    }
  });
}

// ==========================================
// 5. PROMPT ENGINEERING LAB
// ==========================================
function renderPromptLabTool(outlet) {
  const PROMPTS = [
    {
      id: 'rag',
      title: 'Zero-Hallucination RAG Grounding Prompt',
      domain: 'RAG Architecture (IntelliPDF)',
      keywords: 'rag hallucination citation intellipdf pdf context',
      text: `You are an academic exam evaluation assistant. You must ONLY answer using factual excerpts from the provided context chunks.
For every factual claim, you must append the exact source citation in bracket format: [Page X, Paragraph Y].
If the retrieved context does not contain sufficient factual evidence to answer the user query, state explicitly: "INSUFFICIENT CONTEXT IN SOURCE NOTES." Do not hallucinate or synthesize unverified information.`
    },
    {
      id: 'vision',
      title: 'Multimodal UI / Diagram Vision Deconstruction',
      domain: 'Visual AI (LINKEDX)',
      keywords: 'vision multimodal diagram linkedx ocr extraction',
      text: `Analyze the uploaded user interface or architectural diagram. 
1. Identify all primary structural containers, UI controls, navigation bars, and typography hierarchies.
2. Extract the core technological design decisions and information architecture.
3. Synthesize a structured technical executive summary highlighting product usability, color harmony, and engineering trade-offs.`
    },
    {
      id: 'logistics',
      title: 'Offline Heuristic Pathfinding Dispatch Protocol',
      domain: 'Edge Logistics (NER ACCESS)',
      keywords: 'logistics edge offline a* pathfinding solvex ner elevation',
      text: `Evaluate incoming transit corridor telemetry. Priority routing rules:
1. Landslide hazard probability > 0.6 immediately triggers dynamic graph edge pruning.
2. High-elevation gradient incurs a terrain friction coefficient penalty factor of 1.45x.
3. Transmit offline SOS payload as compact 64-bit serialized coordinate struct for mesh relay.`
    },
    {
      id: 'system',
      title: 'Strict JSON API Response Schema Synthesizer',
      domain: 'Full-Stack AI (atlasAI)',
      keywords: 'json schema api atlasai openai formatting',
      text: `You are a deterministic JSON serialization service.
Output ONLY a syntactically valid JSON object matching the requested schema.
Do NOT enclose output in markdown backticks. Do NOT include conversational preambles or postscripts.
If a requested property cannot be computed, set its value to null.`
    }
  ];

  outlet.innerHTML = `
    <div class="promptlab-layout">
      <div class="promptlab-intro glass-panel">
        <div>
          <h3>Production AI System Prompt Templates</h3>
          <p>Curated prompts engineered for zero-hallucination RAG, multimodal vision parsing, and autonomous edge reasoning. (Template workspace)</p>
        </div>
        <div class="search-input-wrapper prompt-search-wrap">
          <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="search" 
            id="prompt-search-input" 
            class="projects-search-input" 
            placeholder="Search prompt templates..." 
            value="${escapeHtml(promptLabSearchQuery)}"
          />
        </div>
      </div>

      <div class="prompts-grid" id="prompts-grid">
        <!-- Injected via renderPromptsList -->
      </div>
    </div>
  `;

  function renderPromptsList() {
    const grid = outlet.querySelector('#prompts-grid');
    if (!grid) return;

    const filtered = PROMPTS.filter(p => {
      if (!promptLabSearchQuery) return true;
      const q = promptLabSearchQuery.toLowerCase().trim();
      return p.title.toLowerCase().includes(q) || p.domain.toLowerCase().includes(q) || p.keywords.toLowerCase().includes(q) || p.text.toLowerCase().includes(q);
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state-card glass-panel" style="grid-column: 1 / -1; padding: 36px; text-align: center;">
          <p style="color: var(--mist);">No prompt templates matched &quot;${escapeHtml(promptLabSearchQuery)}&quot;.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(p => `
      <article class="prompt-card glass-panel">
        <div class="prompt-card-header">
          <div>
            <span class="prompt-domain-tag">${escapeHtml(p.domain)}</span>
            <h4 class="prompt-title">${escapeHtml(p.title)}</h4>
          </div>
          <button class="copy-prompt-btn" data-text="${escapeHtml(p.text)}" title="Copy System Prompt">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy Prompt</span>
          </button>
        </div>
        <pre class="prompt-text-pre"><code>${escapeHtml(p.text)}</code></pre>
      </article>
    `).join('');

    grid.querySelectorAll('.copy-prompt-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const text = btn.dataset.text;
        copyToClipboard(text, e.currentTarget);
      });
    });
  }

  const searchInput = outlet.querySelector('#prompt-search-input');
  searchInput?.addEventListener('input', (e) => {
    promptLabSearchQuery = e.target.value;
    renderPromptsList();
  });

  renderPromptsList();
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>"']/g, (m) => {
    switch (m) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#039;';
      default: return m;
    }
  });
}
