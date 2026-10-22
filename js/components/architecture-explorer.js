/**
 * ATLAS 2026 — INTERACTIVE ARCHITECTURE EXPLORER
 * Verified architectural diagrams for NER ACCESS and LINKEDX.
 * 
 * Rules:
 *  - Only represents documented concepts and verified repository implementations.
 *  - Explicitly distinguishes [IMPLEMENTED / CORE COMPONENT] from [PLANNED CONCEPT / FUTURE SPECIFICATION].
 *  - Zero invented APIs, backends, or false deployment claims.
 *  - Interactive node selection with detailed inspector panel.
 */

export const ARCHITECTURE_MODELS = {
  'solvex-ner': {
    id: 'solvex-ner',
    name: 'NER ACCESS (SOLVEX 2.0)',
    badge: 'SMART INDIA HACKATHON 2026 (SIH26002)',
    subtitle: 'Offline-First Logistics & Accessibility Intelligence Architecture',
    description: 'Documented offline topological routing, incline-weighted A* heuristics, accessibility weighting, hazard telemetry, and conceptual emergency SOS dispatch for North Eastern mountain corridors.',
    legend: {
      implemented: 'Implemented Core Component (Offline SQLite / Kotlin / A* Heuristics)',
      planned: 'Planned Concept / Future Specification (Emergency Mesh / Logistics Staging)'
    },
    nodes: [
      {
        id: 'node-store',
        title: 'Local SQLite & GIS Topology Store',
        category: 'Data Layer',
        status: 'implemented',
        statusLabel: 'IMPLEMENTED / CORE',
        icon: '💾',
        summary: 'Stores road network nodes, elevation profiles, and corridor accessibility attributes on device to operate under zero-connectivity cellular blackouts.',
        inputs: ['Pre-bundled regional road vectors', 'GIS elevation rasters', 'Transit corridor coordinates'],
        outputs: ['Graph adjacency list', 'Node elevation lookup tables', 'Corridor edge weights'],
        tech: ['SQLite', 'Android Room', 'Spatial Indexing'],
        details: 'Ensures the application operates 100% offline in isolated North Eastern mountain passes without requiring remote cloud database access.'
      },
      {
        id: 'node-astar',
        title: 'A* Heuristic Incline & Elevation Router',
        category: 'Algorithms',
        status: 'implemented',
        statusLabel: 'IMPLEMENTED / CORE',
        icon: '⚡',
        summary: 'Calculates optimal topological routes across mountain passes by weighting edge traversal costs against elevation incline and terrain friction.',
        inputs: ['Start & target coordinates', 'Corridor adjacency graph', 'Elevation gradient coefficients'],
        outputs: ['Optimal waypoints list', 'Total distance & elevation delta', 'Estimated traversal difficulty'],
        tech: ['A* Search Algorithm', 'Custom Heuristic Penalty', 'Kotlin'],
        details: 'Unlike conventional road navigation, this algorithm heavily penalizes steep inclines and rough mountain paths to optimize transport survival.'
      },
      {
        id: 'node-accessibility',
        title: 'Accessibility & Mobility Weighting Engine',
        category: 'Navigation',
        status: 'implemented',
        statusLabel: 'IMPLEMENTED / CORE',
        icon: '♿',
        summary: 'Adjusts route selection according to mobility profiles, factoring in wheelchair ramp availability, paved corridors, and step avoidance.',
        inputs: ['User mobility profile (Standard / Assisted / Wheelchair)', 'Corridor accessibility flags'],
        outputs: ['Accessibility-safe corridor geometry', 'Barrier warning notifications'],
        tech: ['Multi-criteria Graph Pruning', 'Kotlin Android SDK'],
        details: 'Filters out corridors containing physical obstacles, unpaved scree, or impassable stairs for vulnerable or medical transit.'
      },
      {
        id: 'node-hazards',
        title: 'Local Hazard & Obstruction Overlay',
        category: 'Telemetry',
        status: 'implemented',
        statusLabel: 'IMPLEMENTED / CORE',
        icon: '⚠️',
        summary: 'Locally records and caches landslide, mudslide, or road closure reports, dynamically updating graph edge weights to route around blocked corridors.',
        inputs: ['Local incident reports', 'GPS hazard coordinates', 'Temporary blockage tags'],
        outputs: ['Dynamic graph edge impedance updates', 'Alternative corridor rerouting triggers'],
        tech: ['Dynamic Graph Edge Weighting', 'Local Event Bus'],
        details: 'Allows field drivers and responders to flag obstructed mountain passes and instantly recalculate bypass routes without an internet connection.'
      },
      {
        id: 'node-sos',
        title: 'Emergency Assistance Beacon & SOS Dispatch',
        category: 'Emergency Assistance',
        status: 'planned',
        statusLabel: 'PLANNED CONCEPT / FUTURE SPEC',
        icon: '🚨',
        summary: 'Conceptual emergency communication protocol designed to broadcast critical distress coordinates via peer-to-peer / LoRaWAN mesh transceivers when cellular networks fail.',
        inputs: ['One-touch SOS activation', 'Current GPS fix', 'Urgency telemetry code'],
        outputs: ['Outbound distress packet', 'Local mesh relay hop broadcast'],
        tech: ['LoRaWAN 433/868MHz Mesh Concept', 'Bluetooth LE Beaconing'],
        details: 'Documented in SIH 2026 roadmap: designed to hop distress packets over 30-40km mountain ridges across local community transceivers.'
      },
      {
        id: 'node-logistics',
        title: 'Regional Logistics & Hub Dispatch Planner',
        category: 'Logistics Planning',
        status: 'planned',
        statusLabel: 'PLANNED CONCEPT / FUTURE SPEC',
        icon: '📦',
        summary: 'Planned architectural system for multi-hop inventory staging, essential medicine transport scheduling, and delivery confirmation across remote district hubs.',
        inputs: ['Cargo manifest', 'Destination clinic priority', 'Corridor safety ratings'],
        outputs: ['Multi-leg transport itinerary', 'Contingency staging checkpoints'],
        tech: ['Combinatorial Dispatch Concept', 'Offline Manifest Verification'],
        details: 'Conceptual logistics framework aimed at preventing medical stockouts in remote clinics during monsoon isolation periods.'
      }
    ],
    connections: [
      { from: 'node-store', to: 'node-astar', label: 'Feeds offline topology graph' },
      { from: 'node-accessibility', to: 'node-astar', label: 'Applies mobility penalty weights' },
      { from: 'node-hazards', to: 'node-astar', label: 'Updates edge impedance on landslides' },
      { from: 'node-astar', to: 'node-logistics', label: 'Provides safe routing corridors' },
      { from: 'node-store', to: 'node-sos', label: 'Supplies local base station coordinates' }
    ]
  },

  'linkx': {
    id: 'linkx',
    name: 'LINKEDX',
    badge: 'GEMINI VISION AI // PRODUCTION MOBILE APP',
    subtitle: 'Multimodal Image-to-LinkedIn Content Intelligence Architecture',
    description: 'Documented technical diagram ingestion, multimodal vision analysis with Google Gemini, audience tone calibration, and automated caption/hashtag synthesis.',
    legend: {
      implemented: 'Implemented Core Component (Kotlin / Gemini Vision API / Prompt Chaining)',
      planned: 'Planned Concept / Future Specification (Direct OAuth Auto-Publishing / Analytics)'
    },
    nodes: [
      {
        id: 'node-ingest',
        title: 'Image & Diagram Ingestion Pipeline',
        category: 'Input Layer',
        status: 'implemented',
        statusLabel: 'IMPLEMENTED / CORE',
        icon: '🖼️',
        summary: 'Accepts technical system architecture screenshots, whiteboard diagrams, UI mockups, or code captures, with client-side scaling and format normalization.',
        inputs: ['PNG / JPEG / WebP image binary', 'Capture timestamp', 'User context notes (optional)'],
        outputs: ['Base64 / Multipart normalized payload', 'Image dimensions & aspect ratio metadata'],
        tech: ['Android MediaStore API', 'Bitmap Normalization', 'Kotlin'],
        details: 'Performs pre-upload client compression and validation to optimize API payload transmission speed and latency.'
      },
      {
        id: 'node-vision',
        title: 'Multimodal Vision Analysis Engine (Gemini API)',
        category: 'AI / Vision',
        status: 'implemented',
        statusLabel: 'IMPLEMENTED / CORE',
        icon: '👁️',
        summary: 'Deconstructs technical imagery using Google Gemini Vision API to extract architectural components, data flows, technology labels, and conceptual hierarchies.',
        inputs: ['Preprocessed image payload', 'Structured extraction prompt schema'],
        outputs: ['Semantic entity breakdown', 'Technology tags detected', 'Hierarchical relationship summary'],
        tech: ['Google Gemini Vision API', 'Prompt Engineering', 'Structured JSON Output'],
        details: 'Extracts deep technical context rather than generic image descriptions, identifying software stacks, databases, and architectural patterns.'
      },
      {
        id: 'node-tone',
        title: 'Tone Adaptation & Audience Calibration',
        category: 'Narrative Engine',
        status: 'implemented',
        statusLabel: 'IMPLEMENTED / CORE',
        icon: '🎯',
        summary: 'Adapts technical insights to selected professional personas: Executive (strategic ROI), Engineering (implementation depth), or Research (experimental impact).',
        inputs: ['Semantic diagram breakdown', 'Selected tone preset (Executive / Engineering / Research)'],
        outputs: ['Calibrated draft narrative', 'Stylistic sentence structure parameters'],
        tech: ['Prompt Chaining', 'Dynamic Prompt Temperature Tuning'],
        details: 'Allows creators to re-target the same system architecture diagram for technical hiring managers, venture stakeholders, or fellow developers.'
      },
      {
        id: 'node-caption',
        title: 'LinkedIn Caption & Structure Synthesizer',
        category: 'Content Generation',
        status: 'implemented',
        statusLabel: 'IMPLEMENTED / CORE',
        icon: '📝',
        summary: 'Synthesizes complete LinkedIn posts with engaging attention hooks, concise problem-solution framing, key takeaways, and call-to-actions.',
        inputs: ['Calibrated narrative draft', 'Formatting constraints (character limits, line spacing)'],
        outputs: ['Formatted post copy ready for 1-click clipboard export', 'Alternative draft variants'],
        tech: ['Text Synthesis Guardrails', 'Readability Scoring'],
        details: 'Formats text with professional line breaks, bullet points, and scannable sections proven to engage LinkedIn professional audiences.'
      },
      {
        id: 'node-hashtags',
        title: 'Contextual Hashtags & Key Phrase Extractor',
        category: 'Metadata',
        status: 'implemented',
        statusLabel: 'IMPLEMENTED / CORE',
        icon: '🏷️',
        summary: 'Extracts high-resonance technical keywords, software stacks, and relevant professional discovery hashtags directly from verified diagram semantics.',
        inputs: ['Detected technologies & concepts from vision pass'],
        outputs: ['Curated hashtag set (e.g. #SystemDesign, #ThreeJS, #AI)', 'Primary technical keywords'],
        tech: ['Topic Extraction Heuristics', 'Keyword Tokenizer'],
        details: 'Prevents generic spam tags by generating only specific, contextual hashtags corresponding to the technologies visible in the analyzed image.'
      },
      {
        id: 'node-oauth',
        title: 'Direct LinkedIn OAuth Auto-Publishing API',
        category: 'Integration',
        status: 'planned',
        statusLabel: 'PLANNED CONCEPT / FUTURE SPEC',
        icon: '🚀',
        summary: 'Planned integration enabling authorized 1-click publishing or scheduled automated dispatch directly to user LinkedIn profiles or company pages.',
        inputs: ['Approved caption and media asset', 'Scheduled publication timestamp'],
        outputs: ['LinkedIn Share API response', 'Live post URL and transmission confirmation'],
        tech: ['LinkedIn Member Data / Share API', 'OAuth 2.0 PKCE Flow Concept'],
        details: 'Planned capability on the product roadmap; current application provides verified 1-click clipboard copy for direct paste into LinkedIn.'
      }
    ],
    connections: [
      { from: 'node-ingest', to: 'node-vision', label: 'Streams normalized image payload' },
      { from: 'node-vision', to: 'node-tone', label: 'Supplies architectural entities' },
      { from: 'node-vision', to: 'node-hashtags', label: 'Provides identified tech tokens' },
      { from: 'node-tone', to: 'node-caption', label: 'Guides narrative voice & depth' },
      { from: 'node-caption', to: 'node-oauth', label: 'Prepares finalized publication payload' },
      { from: 'node-hashtags', to: 'node-oauth', label: 'Appends discovery metadata' }
    ]
  }
};

/**
 * Controller for Interactive Architecture Explorer Component
 */
export class ArchitectureExplorerController {
  constructor(container, options = {}) {
    this.container = container;
    this.currentModelId = options.defaultModel || 'solvex-ner';
    this.selectedNodeId = null;
    this.onSelectNode = options.onSelectNode || null;
    this.init();
  }

  init() {
    this.render();
  }

  setModel(modelId) {
    if (ARCHITECTURE_MODELS[modelId]) {
      this.currentModelId = modelId;
      this.selectedNodeId = null;
      this.render();
    }
  }

  selectNode(nodeId) {
    this.selectedNodeId = nodeId;
    const model = ARCHITECTURE_MODELS[this.currentModelId];
    const node = model ? model.nodes.find(n => n.id === nodeId) : null;
    
    // Update active node styling
    this.container.querySelectorAll('.arch-node-item').forEach(el => {
      if (el.dataset.nodeId === nodeId) {
        el.classList.add('selected');
        el.setAttribute('aria-selected', 'true');
      } else {
        el.classList.remove('selected');
        el.setAttribute('aria-selected', 'false');
      }
    });

    // Update connection paths highlighting
    this.container.querySelectorAll('.arch-connection-pill').forEach(pill => {
      const from = pill.dataset.from;
      const to = pill.dataset.to;
      if (from === nodeId || to === nodeId) {
        pill.classList.add('highlighted');
      } else {
        pill.classList.remove('highlighted');
      }
    });

    // Update inspector drawer
    const inspectorEl = this.container.querySelector('#arch-inspector-outlet');
    if (inspectorEl && node) {
      inspectorEl.innerHTML = this.renderInspectorContent(node);
      inspectorEl.classList.add('has-selection');
    }

    if (typeof this.onSelectNode === 'function') {
      this.onSelectNode(node);
    }
  }

  renderInspectorContent(node) {
    const isImplemented = node.status === 'implemented';

    return `
      <div class="arch-inspector-card glass-panel ${isImplemented ? 'status-implemented' : 'status-planned'}">
        <div class="inspector-header">
          <div class="inspector-title-row">
            <span class="inspector-node-icon">${node.icon}</span>
            <div>
              <span class="inspector-category">${escapeHtml(node.category)}</span>
              <h4 class="inspector-title">${escapeHtml(node.title)}</h4>
            </div>
          </div>
          <span class="inspector-status-badge ${isImplemented ? 'badge-implemented' : 'badge-planned'}">
            ${escapeHtml(node.statusLabel)}
          </span>
        </div>

        <p class="inspector-summary">${escapeHtml(node.summary)}</p>

        <div class="inspector-specs-grid">
          <div class="inspector-spec-box">
            <span class="spec-label">INGESTED INPUTS:</span>
            <ul class="spec-list">
              ${node.inputs.map(i => `<li>${escapeHtml(i)}</li>`).join('')}
            </ul>
          </div>

          <div class="inspector-spec-box">
            <span class="spec-label">GENERATED OUTPUTS:</span>
            <ul class="spec-list">
              ${node.outputs.map(o => `<li>${escapeHtml(o)}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="inspector-tech-row">
          <span class="spec-label">TECHNOLOGIES & PROTOCOLS:</span>
          <div class="tech-pills-row">
            ${node.tech.map(t => `<span class="tech-pill">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>

        <div class="inspector-details-box">
          <span class="details-heading">VERIFIED IMPLEMENTATION NOTE:</span>
          <p class="details-text">${escapeHtml(node.details)}</p>
        </div>
      </div>
    `;
  }

  render() {
    const model = ARCHITECTURE_MODELS[this.currentModelId];
    if (!model) return;

    // Default select first node if none selected
    if (!this.selectedNodeId && model.nodes.length > 0) {
      this.selectedNodeId = model.nodes[0].id;
    }

    const selectedNode = model.nodes.find(n => n.id === this.selectedNodeId) || model.nodes[0];

    this.container.innerHTML = `
      <div class="arch-explorer-wrapper">
        
        <!-- Header & Model Switcher -->
        <div class="arch-header-toolbar glass-panel">
          <div class="arch-model-info">
            <span class="arch-eyebrow">VERIFIED ARCHITECTURAL DECONSTRUCTION</span>
            <h3 class="arch-model-title">${escapeHtml(model.name)}</h3>
            <p class="arch-model-sub">${escapeHtml(model.subtitle)}</p>
          </div>

          <div class="arch-model-switchers" role="tablist" aria-label="Select Architecture Model">
            <button type="button" class="arch-switch-btn ${this.currentModelId === 'solvex-ner' ? 'active' : ''}" data-model="solvex-ner">
              <span>✦ NER ACCESS (Logistics)</span>
            </button>
            <button type="button" class="arch-switch-btn ${this.currentModelId === 'linkx' ? 'active' : ''}" data-model="linkx">
              <span>✦ LINKEDX (Vision AI)</span>
            </button>
          </div>
        </div>

        <!-- System Status Legend & Disclaimer -->
        <div class="arch-legend-bar glass-panel">
          <div class="legend-item">
            <span class="legend-dot dot-implemented"></span>
            <span class="legend-text"><strong>Implemented Core Component:</strong> Verified code in repository</span>
          </div>
          <div class="legend-item">
            <span class="legend-dot dot-planned"></span>
            <span class="legend-text"><strong>Planned Concept:</strong> Documented specification & roadmap</span>
          </div>
          <span class="legend-disclaimer">
            *Represented strictly from verified project specifications. Zero synthetic backends or unverified deployments.
          </span>
        </div>

        <!-- Main Diagram Grid & Inspector Layout -->
        <div class="arch-main-grid">
          
          <!-- Nodes Flow Column -->
          <div class="arch-flow-column">
            <div class="arch-column-header">
              <span class="column-title">System Pipeline & Components</span>
              <span class="column-hint">Click any node to inspect telemetry</span>
            </div>

            <div class="arch-nodes-container" role="tablist" aria-label="Architecture System Nodes">
              ${model.nodes.map((node, idx) => {
                const isSelected = node.id === this.selectedNodeId;
                const isImplemented = node.status === 'implemented';
                return `
                  <div 
                    class="arch-node-item glass-panel ${isSelected ? 'selected' : ''} ${isImplemented ? 'node-implemented' : 'node-planned'}" 
                    data-node-id="${node.id}"
                    role="tab"
                    aria-selected="${isSelected ? 'true' : 'false'}"
                    tabindex="0"
                  >
                    <div class="node-seq-tag">0${idx + 1}</div>
                    <div class="node-icon-box">${node.icon}</div>
                    <div class="node-info-box">
                      <div class="node-meta-top">
                        <span class="node-category-label">${escapeHtml(node.category)}</span>
                        <span class="node-status-pill ${isImplemented ? 'pill-implemented' : 'pill-planned'}">
                          ${isImplemented ? 'IMPLEMENTED' : 'CONCEPT'}
                        </span>
                      </div>
                      <h4 class="node-heading">${escapeHtml(node.title)}</h4>
                      <p class="node-short-desc">${escapeHtml(node.summary)}</p>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Inter-Component Flow Relationships Strip -->
            <div class="arch-connections-strip glass-panel">
              <span class="conn-strip-title">Data Transmission & Control Flows:</span>
              <div class="conn-pills-flow">
                ${model.connections.map(c => `
                  <div class="arch-connection-pill ${c.from === this.selectedNodeId || c.to === this.selectedNodeId ? 'highlighted' : ''}" data-from="${c.from}" data-to="${c.to}">
                    <span class="conn-arrow">&rarr;</span>
                    <span class="conn-label">${escapeHtml(c.label)}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Inspector Panel Column -->
          <div class="arch-inspector-column">
            <div class="arch-column-header">
              <span class="column-title">Component Inspector</span>
              <span class="column-hint">Technical Specifications</span>
            </div>

            <div id="arch-inspector-outlet" class="arch-inspector-outlet">
              ${this.renderInspectorContent(selectedNode)}
            </div>
          </div>

        </div>

      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    // Model switcher buttons
    this.container.querySelectorAll('.arch-switch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const modelId = btn.getAttribute('data-model');
        if (modelId && modelId !== this.currentModelId) {
          this.setModel(modelId);
        }
      });
    });

    // Node items click & keyboard selection
    this.container.querySelectorAll('.arch-node-item').forEach(item => {
      item.addEventListener('click', () => {
        const nodeId = item.getAttribute('data-node-id');
        if (nodeId) this.selectNode(nodeId);
      });

      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const nodeId = item.getAttribute('data-node-id');
          if (nodeId) this.selectNode(nodeId);
        }
      });
    });
  }

  destroy() {
    this.container.innerHTML = '';
  }
}

export function renderArchitectureExplorer(targetElement, options = {}) {
  return new ArchitectureExplorerController(targetElement, options);
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
