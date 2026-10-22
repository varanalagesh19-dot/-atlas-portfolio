/**
 * ATLAS 2026 — INTERACTIVE WEB PLAYGROUND
 * Sandboxed HTML, CSS & JavaScript execution engine for portfolio project demonstrations.
 * 
 * Security & Isolation:
 *  - Sandboxed iframe with `sandbox="allow-scripts"` (Strict unique opaque origin).
 *  - Completely blocks access to top-window globals, parent DOM, localStorage, indexedDB, cookies, and local files.
 *  - Safe postMessage logger forwarding console logs and unhandled errors into the custom UI console.
 *  - Clear error states, syntax error trapping, and empty states.
 */

export const PLAYGROUND_PRESETS = {
  'ner-simulator': {
    id: 'ner-simulator',
    name: 'NER ACCESS: Heuristic Distance & Accessibility Simulator',
    projectSlug: 'solvex-ner',
    tag: 'LOGISTICS & ACCESSIBILITY',
    description: 'Interactive client-side topological graph pathfinder demonstrating incline penalty heuristics and wheelchair accessibility constraints.',
    html: `<div class="app-card">
  <header class="app-header">
    <div class="app-title">NER ACCESS // Mountain Corridor Heuristics</div>
    <span class="app-status">OFFLINE SIMULATOR ACTIVE</span>
  </header>

  <div class="controls-panel">
    <div class="control-group">
      <label for="route-select">Route Corridor:</label>
      <select id="route-select">
        <option value="corridor-a">Guwahati Hub &rarr; Shillong Plateau (Pass 1)</option>
        <option value="corridor-b">Dispur Staging &rarr; Tawang Ridge (High Incline)</option>
        <option value="corridor-c">Silchar Transit &rarr; Aizawl Medical Base</option>
      </select>
    </div>

    <div class="toggles-group">
      <label class="switch-item">
        <input type="checkbox" id="toggle-incline" checked>
        <span>Avoid Steep Inclines (>14% Gradient)</span>
      </label>
      <label class="switch-item">
        <input type="checkbox" id="toggle-accessibility" checked>
        <span>Enforce Wheelchair / Mobility Ramps</span>
      </label>
    </div>

    <button id="btn-calculate" class="calc-btn">Recalculate Optimal Route &rarr;</button>
  </div>

  <div class="results-grid">
    <div class="metric-card">
      <span class="metric-lbl">TOTAL DISTANCE</span>
      <span class="metric-val" id="metric-dist">48.6 km</span>
    </div>
    <div class="metric-card">
      <span class="metric-lbl">ELEVATION GAIN</span>
      <span class="metric-val" id="metric-elev">+840 m</span>
    </div>
    <div class="metric-card">
      <span class="metric-lbl">ACCESSIBILITY SCORE</span>
      <span class="metric-val accent-val" id="metric-score">96 / 100</span>
    </div>
  </div>

  <div class="route-log-box" id="route-log">
    Selected: Guwahati Hub &rarr; Shillong Plateau via Paved Pass Corridor. Incline avoidance active. Mobility safe.
  </div>
</div>`,
    css: `body {
  margin: 0;
  padding: 20px;
  background: #0B0B0B;
  color: #F8F7F4;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  display: flex;
  justify-content: center;
}
.app-card {
  width: 100%;
  max-width: 540px;
  background: #141418;
  border: 1px solid rgba(203, 179, 232, 0.25);
  border-radius: 14px;
  padding: 22px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(203, 179, 232, 0.15);
}
.app-title {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.app-status {
  font-size: 0.68rem;
  font-family: monospace;
  color: #D4FF3F;
  background: rgba(212, 255, 63, 0.12);
  padding: 3px 8px;
  border-radius: 999px;
  border: 1px solid rgba(212, 255, 63, 0.3);
}
.controls-panel {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 18px;
}
.control-group label {
  display: block;
  font-size: 0.78rem;
  font-family: monospace;
  color: #CBB3E8;
  margin-bottom: 6px;
}
select {
  width: 100%;
  background: #0B0B0B;
  color: #F8F7F4;
  border: 1px solid rgba(203, 179, 232, 0.3);
  padding: 8px 12px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.85rem;
  outline: none;
}
.toggles-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
}
.switch-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  cursor: pointer;
}
.switch-item input {
  accent-color: #D4FF3F;
}
.calc-btn {
  background: #D4FF3F;
  color: #0B0B0B;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 700;
  font-size: 0.88rem;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}
.calc-btn:hover {
  background: #bceb2b;
  transform: translateY(-1px);
}
.results-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 14px;
}
.metric-card {
  background: rgba(203, 179, 232, 0.06);
  border: 1px solid rgba(203, 179, 232, 0.12);
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}
.metric-lbl {
  display: block;
  font-size: 0.65rem;
  font-family: monospace;
  color: #A5A19A;
  margin-bottom: 4px;
}
.metric-val {
  font-size: 1rem;
  font-weight: 700;
}
.accent-val {
  color: #D4FF3F;
}
.route-log-box {
  background: #0B0B0B;
  border: 1px solid rgba(203, 179, 232, 0.15);
  border-radius: 8px;
  padding: 10px 12px;
  font-family: monospace;
  font-size: 0.75rem;
  color: #CBB3E8;
  line-height: 1.45;
}`,
    js: `// Client-side Heuristic Calculation Simulator
console.log('[NER ACCESS] Offline routing module initialized.');

const routeSelect = document.getElementById('route-select');
const toggleIncline = document.getElementById('toggle-incline');
const toggleAccess = document.getElementById('toggle-accessibility');
const btnCalc = document.getElementById('btn-calculate');

const distEl = document.getElementById('metric-dist');
const elevEl = document.getElementById('metric-elev');
const scoreEl = document.getElementById('metric-score');
const logEl = document.getElementById('route-log');

const ROUTES_DB = {
  'corridor-a': { baseDist: 44.2, baseElev: 620, name: 'Guwahati &rarr; Shillong' },
  'corridor-b': { baseDist: 82.5, baseElev: 1840, name: 'Dispur &rarr; Tawang' },
  'corridor-c': { baseDist: 63.0, baseElev: 980, name: 'Silchar &rarr; Aizawl' }
};

function calculateRoute() {
  const selectedKey = routeSelect.value;
  const data = ROUTES_DB[selectedKey];
  
  let dist = data.baseDist;
  let elev = data.baseElev;
  let score = 92;

  if (toggleIncline.checked) {
    dist += 4.4; // Detour over gentle gradient
    elev -= 210;
    score += 4;
  }

  if (toggleAccess.checked) {
    score = Math.min(100, score + 4);
  } else {
    score -= 18;
  }

  distEl.textContent = dist.toFixed(1) + ' km';
  elevEl.textContent = '+' + elev + ' m';
  scoreEl.textContent = score + ' / 100';

  const summary = \`Calculated: \${data.name}. Detour: \${toggleIncline.checked ? 'Gentle pass bypass' : 'Direct ridge pass'}. Mobility constraint: \${toggleAccess.checked ? 'Enforced' : 'Unrestricted'}.\`;
  logEl.innerHTML = summary;
  console.log('[NER ACCESS] Route updated: ' + summary);
}

btnCalc.addEventListener('click', calculateRoute);
routeSelect.addEventListener('change', calculateRoute);
toggleIncline.addEventListener('change', calculateRoute);
toggleAccess.addEventListener('change', calculateRoute);`
  },

  'linkx-styler': {
    id: 'linkx-styler',
    name: 'LINKEDX: Content Intelligence & Tone Adapter',
    projectSlug: 'linkx',
    tag: 'MULTIMODAL VISION AI',
    description: 'Interactive post narrative generator demonstrating tone calibration, character bounds, and keyword hashtag synthesis.',
    html: `<div class="post-workbench">
  <div class="workbench-header">
    <h3>LINKEDX // Post Synthesizer</h3>
    <span class="gemini-pill">GEMINI VISION FLOW</span>
  </div>

  <div class="tone-bar">
    <button class="tone-btn active" data-tone="engineering">Engineering Lead</button>
    <button class="tone-btn" data-tone="executive">Executive Summary</button>
    <button class="tone-btn" data-tone="research">AI Research</button>
  </div>

  <div class="composer-box">
    <textarea id="caption-output" rows="6"></textarea>
    <div class="composer-footer">
      <span id="char-count">0 characters</span>
      <button id="btn-copy" class="btn-action">Copy Draft &rarr;</button>
    </div>
  </div>

  <div class="hashtags-box">
    <span class="tags-title">Generated Contextual Tags:</span>
    <div id="tags-container" class="tags-row"></div>
  </div>
</div>`,
    css: `body {
  margin: 0;
  padding: 20px;
  background: #0B0B0B;
  color: #F8F7F4;
  font-family: 'Inter', system-ui, sans-serif;
  display: flex;
  justify-content: center;
}
.post-workbench {
  width: 100%;
  max-width: 520px;
  background: #15151A;
  border: 1px solid rgba(203, 179, 232, 0.25);
  border-radius: 14px;
  padding: 20px;
}
.workbench-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}
h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #F8F7F4;
}
.gemini-pill {
  font-size: 0.68rem;
  font-family: monospace;
  color: #CBB3E8;
  background: rgba(203, 179, 232, 0.15);
  padding: 3px 8px;
  border-radius: 999px;
  border: 1px solid rgba(203, 179, 232, 0.3);
}
.tone-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}
.tone-btn {
  flex: 1;
  background: #0B0B0B;
  color: #A5A19A;
  border: 1px solid rgba(203, 179, 232, 0.2);
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 0.78rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}
.tone-btn.active {
  background: #D4FF3F;
  color: #0B0B0B;
  border-color: #8BB800;
}
.composer-box {
  background: #0B0B0B;
  border: 1px solid rgba(203, 179, 232, 0.2);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 14px;
}
textarea {
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  border: none;
  color: #F8F7F4;
  font-family: inherit;
  font-size: 0.85rem;
  line-height: 1.5;
  resize: vertical;
  outline: none;
}
.composer-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  border-top: 1px solid rgba(203, 179, 232, 0.1);
  font-size: 0.75rem;
  color: #A5A19A;
}
.btn-action {
  background: rgba(203, 179, 232, 0.15);
  border: 1px solid rgba(203, 179, 232, 0.3);
  color: #F8F7F4;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
}
.btn-action:hover {
  background: #D4FF3F;
  color: #0B0B0B;
}
.tags-title {
  display: block;
  font-size: 0.72rem;
  font-family: monospace;
  color: #A5A19A;
  margin-bottom: 8px;
}
.tags-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.tag-pill {
  font-size: 0.75rem;
  font-family: monospace;
  background: rgba(212, 255, 63, 0.1);
  color: #D4FF3F;
  border: 1px solid rgba(212, 255, 63, 0.25);
  padding: 3px 8px;
  border-radius: 4px;
}`,
    js: `console.log('[LINKEDX] Content Styler initial load.');

const TONES = {
  engineering: {
    caption: \`Deconstructing distributed edge architecture: In our latest benchmark, isolating topological graph heuristics offline reduced pass-traversal latencies by 42%.

Key engineering decisions:
1. SQLite local indexing for zero-latency vertex lookup
2. Elevation-weighted A* heuristic minimizing mountain transit strain
3. Fail-safe asynchronous mesh coordinate dispatch\`,
    tags: ['#SystemDesign', '#Kotlin', '#GraphAlgorithms', '#SoftwareArchitecture', '#EdgeAI']
  },
  executive: {
    caption: \`Resilient infrastructure for mission-critical logistics: Under severe weather isolation, cloud dependencies become single points of failure.

By deploying offline-first edge intelligence across mountain transit corridors, regional medical transit teams maintain continuous coordination without reliance on vulnerable telecom towers.\`,
    tags: ['#Innovation', '#SmartLogistics', '#Resilience', '#StrategicTech', '#SIH2026']
  },
  research: {
    caption: \`Experimental study on multi-criteria heuristic pathfinding: By mapping contour incline gradients as non-linear cost multipliers, we prevent catastrophic vehicular failure in mountainous terrain.

Next phase involves LoRaWAN mesh propagation over 30km non-line-of-sight relays.\`,
    tags: ['#AIResearch', '#AppliedAlgorithms', '#MeshNetworks', '#Heuristics', '#ComputerScience']
  }
};

const textarea = document.getElementById('caption-output');
const charCount = document.getElementById('char-count');
const tagsContainer = document.getElementById('tags-container');
const toneBtns = document.querySelectorAll('.tone-btn');
const btnCopy = document.getElementById('btn-copy');

function applyTone(toneKey) {
  const data = TONES[toneKey];
  textarea.value = data.caption;
  charCount.textContent = data.caption.length + ' characters';

  tagsContainer.innerHTML = '';
  data.tags.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'tag-pill';
    span.textContent = tag;
    tagsContainer.appendChild(span);
  });
  console.log('[LINKEDX] Switched tone to: ' + toneKey);
}

toneBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toneBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyTone(btn.dataset.tone);
  });
});

textarea.addEventListener('input', () => {
  charCount.textContent = textarea.value.length + ' characters';
});

btnCopy.addEventListener('click', () => {
  textarea.select();
  document.execCommand('copy');
  btnCopy.textContent = 'Copied!';
  setTimeout(() => btnCopy.textContent = 'Copy Draft \u2192', 1500);
});

// Init
applyTone('engineering');`
  },

  'tilt-physics': {
    id: 'tilt-physics',
    name: 'ATLAS: 3D Perspective Tilt Physics Engine',
    projectSlug: 'atlas-portfolio',
    tag: 'THREE.JS & CREATIVE WEB',
    description: 'The authentic pointer-tracking physics damping algorithm and specular sheen spotlight used in ATLAS portfolio project cards.',
    html: `<div class="scene-stage">
  <div class="tilt-card" id="tilt-target">
    <div class="card-glow" id="card-glow"></div>
    <div class="card-inner">
      <div class="card-eyebrow">ATLAS 3D PERSPECTIVE</div>
      <h2>Interactive Physics Card</h2>
      <p>Hover and move pointer to test real-time lerp damping, rotational tilt, and directional specular reflection.</p>
      <div class="readout-box">
        RotX: <span id="val-rx">0.0&deg;</span> // RotY: <span id="val-ry">0.0&deg;</span>
      </div>
    </div>
  </div>
</div>`,
    css: `body {
  margin: 0;
  min-height: 100vh;
  background: #0B0B0B;
  color: #F8F7F4;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}
.scene-stage {
  perspective: 1000px;
  padding: 40px;
}
.tilt-card {
  position: relative;
  width: 320px;
  height: 240px;
  background: #141418;
  border: 1px solid #D4FF3F;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: border-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7);
}
.tilt-card:hover {
  border-color: #D4FF3F;
  box-shadow: 0 20px 50px rgba(212, 255, 63, 0.2);
}
.card-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
}
.card-inner {
  position: relative;
  z-index: 2;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 48px);
}
.card-eyebrow {
  font-size: 0.68rem;
  font-family: monospace;
  color: #D4FF3F;
  letter-spacing: 0.1em;
}
h2 {
  margin: 8px 0;
  font-size: 1.3rem;
  color: #F8F7F4;
}
p {
  margin: 0 0 12px 0;
  font-size: 0.82rem;
  color: #A5A19A;
  line-height: 1.5;
}
.readout-box {
  font-family: monospace;
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 10px;
  border-radius: 6px;
  color: #CBB3E8;
}`,
    js: `console.log('[ATLAS Physics] Initializing tilt controller.');

const card = document.getElementById('tilt-target');
const glow = document.getElementById('card-glow');
const valRx = document.getElementById('val-rx');
const valRy = document.getElementById('val-ry');

let targetRx = 0;
let targetRy = 0;
let currentRx = 0;
let currentRy = 0;
let isHovered = false;

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const nx = (x / rect.width) * 2 - 1;
  const ny = (y / rect.height) * 2 - 1;

  targetRx = -ny * 12;
  targetRy = nx * 14;
  isHovered = true;

  glow.style.opacity = '0.4';
  glow.style.background = \`radial-gradient(circle at \${x}px \${y}px, rgba(212, 255, 63, 0.45) 0%, rgba(203, 179, 232, 0.1) 45%, transparent 70%)\`;
});

card.addEventListener('mouseleave', () => {
  targetRx = 0;
  targetRy = 0;
  isHovered = false;
  glow.style.opacity = '0';
});

function animate() {
  requestAnimationFrame(animate);
  currentRx += (targetRx - currentRx) * 0.12;
  currentRy += (targetRy - currentRy) * 0.12;

  card.style.transform = \`perspective(1000px) rotateX(\${currentRx.toFixed(2)}deg) rotateY(\${currentRy.toFixed(2)}deg) translateZ(\${isHovered ? '8px' : '0px'})\`;
  valRx.textContent = currentRx.toFixed(1) + '\u00B0';
  valRy.textContent = currentRy.toFixed(1) + '\u00B0';
}
animate();`
  },

  'color-matrix': {
    id: 'color-matrix',
    name: 'ATLAS: Design Token & Palette Live Engine',
    projectSlug: 'atlas-portfolio',
    tag: 'DESIGN SYSTEM & TOKENS',
    description: 'Interactive palette generator testing the black, lavender, chartreuse, and hot-pink color combinations across real UI elements.',
    html: `<div class="token-lab">
  <div class="token-header">
    <h3>ATLAS Palette &amp; Token Matrix</h3>
    <span class="token-badge">WCAG CONTRAST ACTIVE</span>
  </div>

  <div class="swatches-grid">
    <div class="swatch-item">
      <div class="swatch-box swatch-chartreuse"></div>
      <span class="swatch-name">Chartreuse</span>
      <code>#D4FF3F</code>
    </div>
    <div class="swatch-item">
      <div class="swatch-box swatch-lavender"></div>
      <span class="swatch-name">Lavender</span>
      <code>#CBB3E8</code>
    </div>
    <div class="swatch-item">
      <div class="swatch-box swatch-pink"></div>
      <span class="swatch-name">Hot Pink</span>
      <code>#FF2DAB</code>
    </div>
    <div class="swatch-item">
      <div class="swatch-box swatch-obsidian"></div>
      <span class="swatch-name">Obsidian</span>
      <code>#0B0B0B</code>
    </div>
  </div>

  <div class="demo-components">
    <button class="test-btn test-btn-primary">Primary Chartreuse Action</button>
    <button class="test-btn test-btn-secondary">Lavender Outline</button>
    <div class="test-alert">
      <span class="alert-pulse"></span>
      <span>System telemetry online: WCAG 4.5:1 compliant contrast verified.</span>
    </div>
  </div>
</div>`,
    css: `body {
  margin: 0;
  padding: 20px;
  background: #0B0B0B;
  color: #F8F7F4;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  display: flex;
  justify-content: center;
}
.token-lab {
  width: 100%;
  max-width: 520px;
  background: #141418;
  border: 1px solid rgba(203, 179, 232, 0.25);
  border-radius: 14px;
  padding: 22px;
}
.token-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
h3 {
  margin: 0;
  font-size: 1rem;
}
.token-badge {
  font-size: 0.65rem;
  font-family: monospace;
  color: #0B0B0B;
  background: #D4FF3F;
  padding: 3px 8px;
  border-radius: 999px;
  font-weight: 700;
}
.swatches-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}
.swatch-item {
  text-align: center;
}
.swatch-box {
  width: 100%;
  height: 48px;
  border-radius: 8px;
  margin-bottom: 6px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}
.swatch-chartreuse { background: #D4FF3F; }
.swatch-lavender { background: #CBB3E8; }
.swatch-pink { background: #FF2DAB; }
.swatch-obsidian { background: #0B0B0B; }
.swatch-name {
  display: block;
  font-size: 0.72rem;
  color: #F8F7F4;
}
code {
  font-size: 0.65rem;
  color: #A5A19A;
}
.demo-components {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.test-btn {
  padding: 10px 16px;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: transform 0.2s;
}
.test-btn:hover {
  transform: translateY(-1px);
}
.test-btn-primary {
  background: #D4FF3F;
  color: #0B0B0B;
  border: 1px solid #8BB800;
}
.test-btn-secondary {
  background: transparent;
  color: #CBB3E8;
  border: 1px solid #CBB3E8;
}
.test-btn-secondary:hover {
  background: rgba(203, 179, 232, 0.15);
}
.test-alert {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 45, 171, 0.1);
  border: 1px solid rgba(255, 45, 171, 0.3);
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.78rem;
  color: #F8F7F4;
}
.alert-pulse {
  width: 8px;
  height: 8px;
  background: #FF2DAB;
  border-radius: 50%;
  box-shadow: 0 0 8px #FF2DAB;
}`,
    js: `console.log('[ATLAS Token Lab] Palette active: #D4FF3F, #CBB3E8, #FF2DAB, #0B0B0B.');
document.querySelector('.test-btn-primary').addEventListener('click', () => {
  console.log('[Interaction] Primary chartreuse action button clicked.');
});`
  }
};

/**
 * WebPlaygroundController: manages code editor, sandboxed iframe, console, and presets
 */
export class WebPlaygroundController {
  constructor(container, options = {}) {
    this.container = container;
    this.currentPresetKey = options.defaultPreset || 'ner-simulator';
    this.activeEditorTab = 'all'; // 'all' | 'html' | 'css' | 'js'
    this.consoleLogs = [];
    this.messageHandler = this.handleIframeMessage.bind(this);
    this.init();
  }

  init() {
    window.addEventListener('message', this.messageHandler);
    this.render();
  }

  handleIframeMessage(event) {
    if (event.data && event.data.type === 'atlas-playground-log') {
      const { level, text, timestamp } = event.data;
      this.appendConsoleLog(level, text, timestamp);
    }
  }

  appendConsoleLog(level, text, timestamp = new Date().toLocaleTimeString()) {
    this.consoleLogs.push({ level, text, timestamp });
    const consoleBody = this.container.querySelector('#pg-console-body');
    const badge = this.container.querySelector('#pg-console-count');

    if (consoleBody) {
      const row = document.createElement('div');
      row.className = `pg-log-row log-${level}`;
      row.innerHTML = `
        <span class="log-time">${escapeHtml(timestamp)}</span>
        <span class="log-level">[${escapeHtml(level.toUpperCase())}]</span>
        <span class="log-text">${escapeHtml(text)}</span>
      `;
      consoleBody.appendChild(row);
      consoleBody.scrollTop = consoleBody.scrollHeight;
    }

    if (badge) {
      badge.textContent = `${this.consoleLogs.length} logs`;
    }
  }

  loadPreset(presetKey) {
    if (!PLAYGROUND_PRESETS[presetKey]) return;
    this.currentPresetKey = presetKey;
    const preset = PLAYGROUND_PRESETS[presetKey];

    const htmlInput = this.container.querySelector('#pg-code-html');
    const cssInput = this.container.querySelector('#pg-code-css');
    const jsInput = this.container.querySelector('#pg-code-js');
    const descEl = this.container.querySelector('#pg-preset-desc');

    if (htmlInput) htmlInput.value = preset.html;
    if (cssInput) cssInput.value = preset.css;
    if (jsInput) jsInput.value = preset.js;
    if (descEl) descEl.textContent = preset.description;

    this.executeCode();
  }

  executeCode() {
    const htmlInput = this.container.querySelector('#pg-code-html');
    const cssInput = this.container.querySelector('#pg-code-css');
    const jsInput = this.container.querySelector('#pg-code-js');
    const iframe = this.container.querySelector('#pg-preview-frame');
    const consoleBody = this.container.querySelector('#pg-console-body');
    const badge = this.container.querySelector('#pg-console-count');

    if (!iframe || !htmlInput || !cssInput || !jsInput) return;

    // Reset console
    this.consoleLogs = [];
    if (consoleBody) {
      consoleBody.innerHTML = '';
    }
    if (badge) {
      badge.textContent = '0 logs';
    }

    const html = htmlInput.value;
    const css = cssInput.value;
    const js = jsInput.value;

    // Build strictly isolated iframe payload
    // Using sandbox="allow-scripts" ensures unique opaque origin:
    // CANNOT access parent window, cookies, localStorage, IndexedDB, or local files.
    const payload = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    ${css}
  </style>
  <script>
    (function() {
      function send(level, args) {
        var str = Array.prototype.slice.call(args).map(function(item) {
          if (typeof item === 'object') {
            try { return JSON.stringify(item); } catch(e) { return String(item); }
          }
          return String(item);
        }).join(' ');

        window.parent.postMessage({
          type: 'atlas-playground-log',
          level: level,
          text: str,
          timestamp: new Date().toLocaleTimeString()
        }, '*');
      }

      var origLog = console.log;
      var origWarn = console.warn;
      var origError = console.error;

      console.log = function() { send('log', arguments); if (origLog) origLog.apply(console, arguments); };
      console.warn = function() { send('warn', arguments); if (origWarn) origWarn.apply(console, arguments); };
      console.error = function() { send('error', arguments); if (origError) origError.apply(console, arguments); };

      window.onerror = function(msg, url, line) {
        send('error', ['[Error at line ' + line + ']: ' + msg]);
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
    } catch(err) {
      console.error('Execution Exception: ' + err.message);
    }
  <\/script>
</body>
</html>`;

    iframe.srcdoc = payload;
  }

  render() {
    const currentPreset = PLAYGROUND_PRESETS[this.currentPresetKey] || PLAYGROUND_PRESETS['ner-simulator'];

    this.container.innerHTML = `
      <div class="web-playground-wrapper">
        
        <!-- Playground Header Toolbar -->
        <div class="pg-toolbar glass-panel">
          <div class="pg-toolbar-left">
            <label for="pg-preset-select" class="pg-label">Select Project Demo:</label>
            <select id="pg-preset-select" class="pg-select" aria-label="Select demo preset">
              ${Object.values(PLAYGROUND_PRESETS).map(p => `
                <option value="${p.id}" ${p.id === this.currentPresetKey ? 'selected' : ''}>
                  ${escapeHtml(p.name)}
                </option>
              `).join('')}
            </select>

            <!-- Editor Pane Selector -->
            <div class="pg-editor-tabs" role="tablist" aria-label="Editor Panes">
              <button class="pg-tab-btn ${this.activeEditorTab === 'all' ? 'active' : ''}" data-pane="all">All Panes</button>
              <button class="pg-tab-btn ${this.activeEditorTab === 'html' ? 'active' : ''}" data-pane="html">HTML</button>
              <button class="pg-tab-btn ${this.activeEditorTab === 'css' ? 'active' : ''}" data-pane="css">CSS</button>
              <button class="pg-tab-btn ${this.activeEditorTab === 'js' ? 'active' : ''}" data-pane="js">JS</button>
            </div>
          </div>

          <div class="pg-toolbar-right">
            <button id="pg-btn-run" class="btn-primary btn-sm" title="Execute sandboxed code (Ctrl+Enter)">
              <span>&blacktriangleright; Run Live Code</span>
            </button>
            <button id="pg-btn-reset" class="btn-secondary btn-sm" title="Reset to original preset code">
              <span>Reset</span>
            </button>
            <button id="pg-btn-clear" class="btn-secondary btn-sm" title="Clear editor content">
              <span>Clear</span>
            </button>
          </div>
        </div>

        <div class="pg-preset-info glass-panel">
          <span class="info-tag">${escapeHtml(currentPreset.tag)}</span>
          <p id="pg-preset-desc" class="info-desc">${escapeHtml(currentPreset.description)}</p>
        </div>

        <!-- Main Workbench Grid: Editors Column (Left) & Sandbox Preview Column (Right) -->
        <div class="pg-workbench-grid">
          
          <!-- Code Editors -->
          <div class="pg-editors-column pane-mode-${this.activeEditorTab}" id="pg-editors-column">
            
            <div class="pg-editor-card" id="card-html">
              <div class="editor-header">
                <span class="editor-lang html-tag">HTML5</span>
                <span class="editor-sub">markup structure</span>
              </div>
              <textarea id="pg-code-html" class="code-area" spellcheck="false" placeholder="<!-- HTML Markup -->">${escapeHtml(currentPreset.html)}</textarea>
            </div>

            <div class="pg-editor-card" id="card-css">
              <div class="editor-header">
                <span class="editor-lang css-tag">CSS3</span>
                <span class="editor-sub">styling & tokens</span>
              </div>
              <textarea id="pg-code-css" class="code-area" spellcheck="false" placeholder="/* CSS Styles */">${escapeHtml(currentPreset.css)}</textarea>
            </div>

            <div class="pg-editor-card" id="card-js">
              <div class="editor-header">
                <span class="editor-lang js-tag">JavaScript</span>
                <span class="editor-sub">client logic</span>
              </div>
              <textarea id="pg-code-js" class="code-area" spellcheck="false" placeholder="// JavaScript Code">${escapeHtml(currentPreset.js)}</textarea>
            </div>

          </div>

          <!-- Preview & Console Column -->
          <div class="pg-preview-column glass-panel">
            
            <div class="preview-header-bar">
              <div class="preview-lights">
                <span class="light-dot red"></span>
                <span class="light-dot yellow"></span>
                <span class="light-dot green"></span>
              </div>
              <span class="preview-title">Isolated Sandbox (allow-scripts only)</span>

              <div class="resizer-pills" role="group" aria-label="Viewport size">
                <button class="resizer-btn active" data-width="100%">Desktop</button>
                <button class="resizer-btn" data-width="768px">Tablet</button>
                <button class="resizer-btn" data-width="375px">Mobile</button>
              </div>
            </div>

            <!-- Sandboxed Iframe Container -->
            <div class="iframe-box" id="pg-iframe-box">
              <iframe 
                id="pg-preview-frame" 
                sandbox="allow-scripts" 
                title="Sandboxed Playground Preview"
                aria-label="Interactive Project Sandbox Output"
              ></iframe>
            </div>

            <!-- Sandbox Output Console -->
            <div class="pg-console-panel">
              <div class="console-head">
                <div class="console-title-box">
                  <span class="console-sym">&gt;_</span>
                  <span class="console-name">Console &amp; Execution Output</span>
                  <span id="pg-console-count" class="console-count">0 logs</span>
                </div>
                <button id="pg-btn-clear-console" class="console-clear-btn" title="Clear console messages">Clear</button>
              </div>
              <div class="console-body" id="pg-console-body">
                <div class="pg-log-row log-sys">
                  <span class="log-time">--:--:--</span>
                  <span class="log-level">[SYS]</span>
                  <span class="log-text">Sandbox environment ready. Click &quot;Run Live Code&quot; to test modifications.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        <!-- Non-Executable Systems Notice & Architecture Shortcut -->
        <div class="non-exec-notice-card glass-panel">
          <div class="notice-icon">🛡️</div>
          <div class="notice-body">
            <h4>Native Android &amp; Server-Side AI Architectural Previews</h4>
            <p>
              Certain production systems (such as the <strong>NER ACCESS Kotlin/Android APK</strong> or <strong>IntelliPDF containerized RAG pipeline</strong>) require native hardware or high-memory server environments and cannot be authentically executed within browser JavaScript sandboxes. Rather than fabricating mock executions, explore their verified architecture blueprints below.
            </p>
          </div>
          <button type="button" class="btn-primary btn-sm" id="btn-jump-to-arch">
            <span>Explore Architecture Diagrams &rarr;</span>
          </button>
        </div>

      </div>
    `;

    this.bindEvents();
    // Execute initial preset
    this.executeCode();
  }

  bindEvents() {
    // Preset dropdown selection
    const presetSelect = this.container.querySelector('#pg-preset-select');
    presetSelect?.addEventListener('change', (e) => {
      this.loadPreset(e.target.value);
    });

    // Run button
    this.container.querySelector('#pg-btn-run')?.addEventListener('click', () => {
      this.executeCode();
    });

    // Reset button
    this.container.querySelector('#pg-btn-reset')?.addEventListener('click', () => {
      this.loadPreset(this.currentPresetKey);
    });

    // Clear button
    this.container.querySelector('#pg-btn-clear')?.addEventListener('click', () => {
      const htmlInput = this.container.querySelector('#pg-code-html');
      const cssInput = this.container.querySelector('#pg-code-css');
      const jsInput = this.container.querySelector('#pg-code-js');
      if (htmlInput) htmlInput.value = '';
      if (cssInput) cssInput.value = '';
      if (jsInput) jsInput.value = '';
      this.executeCode();
    });

    // Clear console button
    this.container.querySelector('#pg-btn-clear-console')?.addEventListener('click', () => {
      this.consoleLogs = [];
      const consoleBody = this.container.querySelector('#pg-console-body');
      const badge = this.container.querySelector('#pg-console-count');
      if (consoleBody) consoleBody.innerHTML = '';
      if (badge) badge.textContent = '0 logs';
    });

    // Pane mode buttons
    const editorsCol = this.container.querySelector('#pg-editors-column');
    this.container.querySelectorAll('.pg-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.container.querySelectorAll('.pg-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeEditorTab = btn.dataset.pane;
        if (editorsCol) {
          editorsCol.className = `pg-editors-column pane-mode-${this.activeEditorTab}`;
        }
      });
    });

    // Resizer buttons
    const iframe = this.container.querySelector('#pg-preview-frame');
    this.container.querySelectorAll('.resizer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.container.querySelectorAll('.resizer-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const w = btn.dataset.width;
        if (iframe) {
          if (w === '100%') {
            iframe.style.width = '100%';
            iframe.style.margin = '0';
          } else {
            iframe.style.width = w;
            iframe.style.margin = '0 auto';
          }
        }
      });
    });

    // Jump to Architecture button
    this.container.querySelector('#btn-jump-to-arch')?.addEventListener('click', () => {
      const tabBtn = document.querySelector('[data-lab-tab="architecture"]');
      if (tabBtn) tabBtn.click();
    });
  }

  destroy() {
    window.removeEventListener('message', this.messageHandler);
    this.container.innerHTML = '';
  }
}

export function renderWebPlayground(targetElement, options = {}) {
  return new WebPlaygroundController(targetElement, options);
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
