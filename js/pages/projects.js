/**
 * ATLAS — REDESIGNED PROJECTS SHOWCASE & LIVE PROJECT LAB (/projects)
 * Architecture:
 *   1. Clean, Spacious Introduction (MY WORK // LIVE TELEMETRY, Heading, Dynamic Pill).
 *   2. Tri-Engine Presentation Switcher:
 *      - [✦ Flagship Systems (8)]: Curated production systems with interactive 3D simulations (NER ACCESS & LINKEDX),
 *        custom case studies, problem/solution architecture, expandable drawers, and live telemetry strip.
 *      - [🔬 Interactive Project Lab]: Sandboxed HTML/CSS/JS code playground with verified project presets,
 *        interactive Architecture Explorer for NER ACCESS & LINKEDX, and verified systems matrix.
 *      - [⑂ Live GitHub Repositories (14)]: Authentic live repository explorer synchronized in real-time
 *        with @varanalagesh19-dot via Node proxy and direct GitHub API with 15-min cache, language filtering,
 *        real star/fork telemetry, latest commit dates, verified case study mapping badges, and rate-limit fallbacks.
 *   3. Zero invented data, zero exposed secrets, fully accessible, and responsive.
 */

import { PROJECTS_DATA, getProjectBySlug } from '../data/projects.js';
import { NerAccessDemo } from '../3d/ner-demo.js';
import { LinkedxDemo } from '../3d/linkedx-demo.js';
import { showToast } from '../components/toast.js';
import { refreshScrollReveals } from '../components/motion.js';
import { 
  getGitHubRepositories, 
  getGitHubProfile, 
  REPO_TO_PROJECT_MAP, 
  formatGitHubDate, 
  getLanguageColor,
  GITHUB_CONFIG 
} from '../services/github.js';
import { renderArchitectureExplorer } from '../components/architecture-explorer.js';
import { renderWebPlayground } from '../components/web-playground.js';

/**
 * Refined 3D Project Preview Frame Controller
 * - Gentle perspective tilt tracking pointer movement with smooth lerp dampening.
 * - Layered depth effect with refined metallic-gold frame and soft specular highlights.
 * - Respects prefers-reduced-motion with a static presentation.
 * - Clean event listener management and leak-free destruction.
 */
class ProjectPreview3DEffect {
  constructor(element) {
    this.el = element;
    this.card = element ? element.querySelector('.preview-depth-card') : null;
    this.sheen = element ? element.querySelector('.preview-specular-sheen') : null;
    this.animId = null;
    this.targetRotX = 0;
    this.targetRotY = 0;
    this.currentRotX = 0;
    this.currentRotY = 0;
    this.isHovered = false;
    this.isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.init();
  }

  init() {
    if (!this.el || !this.card || this.isReducedMotion) return;

    this.onMouseMove = (e) => {
      const rect = this.el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const nx = (x / rect.width) * 2 - 1;
      const ny = (y / rect.height) * 2 - 1;

      this.targetRotX = -ny * 5.5;
      this.targetRotY = nx * 6.5;
      this.isHovered = true;

      if (this.sheen) {
        this.sheen.style.opacity = '0.35';
        this.sheen.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 235, 175, 0.45) 0%, rgba(255, 215, 130, 0.1) 45%, transparent 70%)`;
      }
    };

    this.onMouseLeave = () => {
      this.targetRotX = 0;
      this.targetRotY = 0;
      this.isHovered = false;
      if (this.sheen) {
        this.sheen.style.opacity = '0';
      }
    };

    this.el.addEventListener('mousemove', this.onMouseMove);
    this.el.addEventListener('mouseleave', this.onMouseLeave);

    const render = () => {
      this.animId = requestAnimationFrame(render);
      this.currentRotX += (this.targetRotX - this.currentRotX) * 0.1;
      this.currentRotY += (this.targetRotY - this.currentRotY) * 0.1;

      if (Math.abs(this.currentRotX) > 0.001 || Math.abs(this.currentRotY) > 0.001 || this.isHovered) {
        this.card.style.transform = `perspective(1000px) rotateX(${this.currentRotX.toFixed(2)}deg) rotateY(${this.currentRotY.toFixed(2)}deg) translateZ(${this.isHovered ? '6px' : '0px'})`;
      } else {
        this.card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
      }
    };
    render();
  }

  destroy() {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    if (this.el) {
      if (this.onMouseMove) this.el.removeEventListener('mousemove', this.onMouseMove);
      if (this.onMouseLeave) this.el.removeEventListener('mouseleave', this.onMouseLeave);
    }
    this.el = null;
    this.card = null;
    this.sheen = null;
  }
}

export function renderProjectsPage() {
  const container = document.createElement('div');
  container.className = 'page-container page-projects-editorial';

  // Read URL query parameters to support direct deep-linking (?tab=lab or ?tab=architecture)
  const urlParams = new URLSearchParams(window.location.search);
  const initialTabParam = urlParams.get('tab');

  // Core State
  const totalProjects = PROJECTS_DATA.length;
  let activePrimaryTab = 'flagship'; // 'flagship' | 'lab' | 'github'
  let activeLabSubTab = 'playground'; // 'playground' | 'architecture' | 'matrix'

  if (initialTabParam === 'lab') {
    activePrimaryTab = 'lab';
  } else if (initialTabParam === 'architecture') {
    activePrimaryTab = 'lab';
    activeLabSubTab = 'architecture';
  } else if (initialTabParam === 'matrix') {
    activePrimaryTab = 'lab';
    activeLabSubTab = 'matrix';
  } else if (initialTabParam === 'github') {
    activePrimaryTab = 'github';
  }

  let activeCategory = 'all';
  let searchQuery = '';
  let currentSlideIndex = 0;
  let viewMode = 'slides'; // 'slides' | 'grid'
  let filteredProjects = [...PROJECTS_DATA];
  let activePreview3DEffect = null;
  let activeInteractiveDemo = null;
  let activeLabController = null;
  let autoRotateTimer = null;
  let transitionTimer = null;
  let isTransitioning = false;
  let userInteracted = false;
  let isHoveredOrFocused = false;
  let boundKeyHandler = null;

  // GitHub Live State
  let githubState = {
    status: 'idle',
    repos: [],
    profile: null,
    source: null,
    timestamp: null,
    rateLimitReset: null,
    error: null,
    isRefreshing: false
  };
  let githubLangFilter = 'all';
  let githubSearchQuery = '';

  // Filter curated projects
  function applyFilterAndSearch() {
    filteredProjects = PROJECTS_DATA.filter((p) => {
      if (activeCategory === 'ai') {
        if (!p.categoryTag.includes('ai')) return false;
      } else if (activeCategory === 'systems') {
        if (!p.categoryTag.includes('systems') && !p.categoryTag.includes('iot')) return false;
      } else if (activeCategory === 'webgl') {
        if (!p.categoryTag.includes('webgl')) return false;
      }

      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = p.name.toLowerCase().includes(q);
        const matchSummary = p.summary.toLowerCase().includes(q);
        const matchProblem = (p.problem || '').toLowerCase().includes(q);
        const matchStack = p.stack.some(s => s.toLowerCase().includes(q));
        return matchName || matchSummary || matchProblem || matchStack;
      }

      return true;
    });

    currentSlideIndex = 0;
  }

  // Fetch GitHub data asynchronously
  async function fetchGitHubData({ forceRefresh = false } = {}) {
    githubState.status = 'loading';
    githubState.isRefreshing = forceRefresh;

    if (activePrimaryTab === 'github') {
      renderFullView();
    } else {
      updateTelemetryHeaderOnly();
    }

    try {
      const [reposResult, profileResult] = await Promise.all([
        getGitHubRepositories({ forceRefresh }),
        getGitHubProfile({ forceRefresh })
      ]);

      githubState = {
        status: reposResult.status || 'success',
        repos: Array.isArray(reposResult.repos) ? reposResult.repos : [],
        profile: profileResult ? profileResult.profile : null,
        source: reposResult.source || 'server-proxy',
        timestamp: reposResult.timestamp || Date.now(),
        rateLimitReset: reposResult.rateLimitReset || null,
        error: reposResult.error || null,
        isRefreshing: false
      };

      if (forceRefresh) {
        showToast(`GitHub data synced (${githubState.repos.length} repositories)`, 'success');
      }
    } catch (err) {
      console.warn('[ProjectsPage] GitHub live fetch error:', err);
      githubState.status = 'error';
      githubState.error = err.message || 'Connection to GitHub API interrupted';
      githubState.isRefreshing = false;
      if (forceRefresh) {
        showToast('Live GitHub sync failed. Showing fallback.', 'error');
      }
    }

    renderFullView();
  }

  function updateTelemetryHeaderOnly() {
    const pill = container.querySelector('#projects-total-count');
    const tabLabel = container.querySelector('#github-tab-label');
    const repoCount = githubState.repos.length || 14;
    if (pill) {
      pill.textContent = `${totalProjects} Flagship Systems // ${repoCount} Live Repositories`;
    }
    if (tabLabel) {
      tabLabel.textContent = `Live GitHub Repositories (${repoCount})`;
    }
  }

  // Filter GitHub repositories
  function getFilteredGitHubRepos() {
    return (githubState.repos || []).filter((repo) => {
      if (githubLangFilter !== 'all') {
        const lang = (repo.language || '').toLowerCase();
        if (lang !== githubLangFilter.toLowerCase()) return false;
      }

      if (githubSearchQuery) {
        const q = githubSearchQuery.toLowerCase().trim();
        const nameMatch = (repo.name || '').toLowerCase().includes(q);
        const descMatch = (repo.description || '').toLowerCase().includes(q);
        const langMatch = (repo.language || '').toLowerCase().includes(q);
        const topicMatch = Array.isArray(repo.topics) && repo.topics.some(t => t.toLowerCase().includes(q));
        return nameMatch || descMatch || langMatch || topicMatch;
      }

      return true;
    });
  }

  // Extract unique languages with counts
  function getAvailableLanguages() {
    const counts = {};
    (githubState.repos || []).forEach((r) => {
      if (r.language) {
        counts[r.language] = (counts[r.language] || 0) + 1;
      }
    });

    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([lang, count]) => ({
        name: lang,
        count,
        color: getLanguageColor(lang)
      }));
  }

  // Render Curated Flagship Carousel / Grid Markup
  function renderCarouselMarkup() {
    const totalFiltered = filteredProjects.length;

    if (totalFiltered === 0) {
      return `
        <div class="projects-empty-state glass-panel">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">No flagship projects match your filter</h3>
          <p class="empty-desc">No curated system matched "${escapeHtml(searchQuery)}" in this category.</p>
          <button type="button" class="btn-secondary" id="btn-reset-filters">
            <span>Reset Filters</span>
          </button>
        </div>
      `;
    }

    if (viewMode === 'grid') {
      return `
        <div class="projects-cards-grid">
          ${filteredProjects.map((p, idx) => `
            <article class="project-grid-card glass-panel" data-slug="${p.slug}">
              <div class="card-media-wrapper">
                <img src="${p.image}" alt="${escapeHtml(p.name)} Preview" class="card-media-img" loading="lazy" />
                <span class="card-status-badge">${escapeHtml(p.badge ? p.badge.split('//')[1] || p.status : p.status)}</span>
                <span class="card-index-tag">${p.no}</span>
              </div>
              <div class="card-body-content">
                <div class="card-header-row">
                  <span class="card-cat-label">${escapeHtml(p.category.split('/')[0].trim())}</span>
                  ${p.slug === 'solvex-ner' ? '<span class="project-accent-tag tag-chartreuse">OFFLINE GRAPH</span>' : ''}
                  ${p.slug === 'linkx' ? '<span class="project-accent-tag tag-lavender">MULTIMODAL AI</span>' : ''}
                  <span class="card-year-label">${escapeHtml(p.year)}</span>
                </div>
                <h3 class="card-title">${escapeHtml(p.name)}</h3>
                <p class="card-summary">${escapeHtml(p.summary)}</p>
                
                <div class="card-problem-box">
                  <span class="problem-kicker">PROBLEM:</span>
                  <span class="problem-text">${escapeHtml(p.problem)}</span>
                </div>

                <div class="card-stack-row">
                  ${p.stack.slice(0, 4).map(s => `<span class="tech-tag">${escapeHtml(s)}</span>`).join('')}
                  ${p.stack.length > 4 ? `<span class="tech-tag-more">+${p.stack.length - 4}</span>` : ''}
                </div>

                <div class="card-actions-bar">
                  <a href="/projects/${p.slug}" data-route="/projects/${p.slug}" class="btn-primary btn-sm">
                    <span>Case Study &rarr;</span>
                  </a>
                  ${p.repo ? `
                    <a href="${p.repo}" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-sm" title="View Source on GitHub">
                      <span>GitHub ↗</span>
                    </a>
                  ` : ''}
                  <button type="button" class="btn-card-focus btn-sm" data-focus-slide="${idx}" title="Open this project in Slide Carousel">
                    <span>⧉ Slide</span>
                  </button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      `;
    }

    return filteredProjects.map((p, idx) => {
      const isActive = idx === currentSlideIndex;
      const hasInteractiveDemo = p.slug === 'solvex-ner' || p.slug === 'linkx';

      return `
        <article 
          class="project-slide glass-panel ${isActive ? 'active-slide' : ''}" 
          id="project-slide-${idx}" 
          data-slide-index="${idx}"
          ${isActive ? '' : 'hidden aria-hidden="true"'}
        >
          <div class="project-slide-grid">
            
            <!-- Left Column: Project Narrative & Actions -->
            <div class="project-info-col">
              <div class="project-eyebrow-row">
                <span class="project-index-pill">${p.no}</span>
                <span class="project-cat-name">${escapeHtml(p.category.split('/')[0].trim())}</span>
                ${p.slug === 'solvex-ner' ? '<span class="project-accent-tag tag-chartreuse">OFFLINE GRAPH // A*</span>' : ''}
                ${p.slug === 'linkx' ? '<span class="project-accent-tag tag-lavender">MULTIMODAL AI // GEMINI</span>' : ''}
                <span class="project-year-tag">${escapeHtml(p.year)}</span>
              </div>

              <h2 class="project-slide-title">${escapeHtml(p.name)}</h2>

              <p class="project-slide-desc">
                ${escapeHtml(p.summary)}
              </p>

              <!-- Problem Summary Block -->
              <div class="project-spec-snippet">
                <div class="spec-snippet-row">
                  <span class="spec-snippet-lbl">PROBLEM:</span>
                  <span class="spec-snippet-val">${escapeHtml(p.problem)}</span>
                </div>
              </div>

              <!-- Tech Stack Pills -->
              <div class="project-stack-row">
                ${p.stack.map(s => `<span class="tech-tag">${escapeHtml(s)}</span>`).join('')}
              </div>

              <!-- Primary Action Controls -->
              <div class="project-actions-row">
                <button 
                  type="button" 
                  class="btn-slide-toggle" 
                  data-details-toggle="${idx}" 
                  aria-expanded="false" 
                  aria-controls="project-details-${idx}"
                >
                  <span class="toggle-icon">&darr;</span>
                  <span class="toggle-text">View Details</span>
                </button>

                <a href="/projects/${p.slug}" data-route="/projects/${p.slug}" class="btn-primary">
                  <span>Case Study &rarr;</span>
                </a>

                <button type="button" class="btn-secondary btn-jump-to-lab-demo" data-jump-lab="${p.slug}">
                  <span>🔬 Lab Demo &rarr;</span>
                </button>

                ${p.repo ? `
                  <a href="${p.repo}" target="_blank" rel="noopener noreferrer" class="btn-secondary" title="View source code on GitHub">
                    <span>GitHub ↗</span>
                  </a>
                ` : ''}
              </div>
            </div>

            <!-- Right Column: 3D Depth Preview Frame -->
            <div class="project-preview-col">
              <div class="preview-frame-wrapper" id="preview-frame-${idx}" aria-label="${escapeHtml(p.name)} - Project Preview">
                <div class="preview-ambient-glow" aria-hidden="true"></div>
                <div class="preview-depth-card">
                  <div class="preview-gold-frame">
                    
                    <!-- Screenshot Image Viewport -->
                    <div class="preview-viewport-img" id="viewport-img-${idx}">
                      <img 
                        src="${p.image}" 
                        alt="${escapeHtml(p.name)} Preview" 
                        class="project-preview-img" 
                        loading="${idx === 0 ? 'eager' : 'lazy'}" 
                      />
                      <div class="preview-specular-sheen" aria-hidden="true"></div>
                    </div>

                    <!-- Interactive 3D Canvas Viewport (if supported) -->
                    ${hasInteractiveDemo ? `
                      <div class="preview-viewport-3d" id="viewport-3d-${idx}" style="display: none;">
                        <div id="interactive-canvas-target-${idx}" class="interactive-canvas-inner"></div>
                      </div>
                    ` : ''}

                    <!-- Status Tag Badge -->
                    <div class="preview-overlay-tag">
                      <span>${escapeHtml(p.badge ? p.badge.split('//')[1] || p.status : p.status)}</span>
                    </div>

                  </div>
                </div>

                <!-- Flagship Interactive 3D Demonstration Switcher -->
                ${hasInteractiveDemo ? `
                  <div class="demo-switch-bar">
                    <button type="button" class="demo-switch-pill active" data-switch-mode="image" data-slide-target="${idx}">
                      <span>🖼 Screenshot</span>
                    </button>
                    <button type="button" class="demo-switch-pill" data-switch-mode="3d" data-slide-target="${idx}">
                      <span>🎮 Interactive 3D Demo</span>
                    </button>
                  </div>
                ` : ''}

              </div>
            </div>

          </div>

          <!-- In-Slide Expandable Case Study Details Drawer -->
          <div class="project-slide-details-drawer" id="project-details-${idx}" hidden>
            <div class="drawer-inner-grid">
              
              <div class="drawer-section">
                <h4 class="drawer-section-heading">PROBLEM &amp; PURPOSE</h4>
                <p class="drawer-section-text">${escapeHtml(p.problem)}</p>
                <h4 class="drawer-section-heading" style="margin-top: 14px;">ENGINEERED SOLUTION</h4>
                <p class="drawer-section-text">${escapeHtml(p.solution)}</p>
              </div>

              <div class="drawer-section">
                <h4 class="drawer-section-heading">KEY ARCHITECTURAL FEATURES</h4>
                <ul class="drawer-features-list">
                  ${p.features.map(f => `<li>${escapeHtml(f)}</li>`).join('')}
                </ul>
              </div>

              <div class="drawer-section">
                <h4 class="drawer-section-heading">TECHNICAL CHALLENGES &amp; OUTCOMES</h4>
                <div class="challenges-outcomes-block">
                  <div class="co-sub"><strong>Challenges Solved:</strong></div>
                  <ul class="drawer-features-list">
                    ${(p.challenges || []).map(c => `<li>${escapeHtml(c)}</li>`).join('')}
                  </ul>
                  <div class="co-sub" style="margin-top: 10px;"><strong>Key Outcomes:</strong></div>
                  <ul class="drawer-features-list">
                    ${(p.outcomes || []).map(o => `<li>${escapeHtml(o)}</li>`).join('')}
                  </ul>
                </div>
              </div>

            </div>

            <!-- Drawer Footer Navigation -->
            <div class="drawer-footer-row">
              <a href="/projects/${p.slug}" data-route="/projects/${p.slug}" class="btn-primary">
                <span>Open Full Case Study Page &rarr;</span>
              </a>
              <button type="button" class="btn-secondary btn-close-drawer" data-close-drawer="${idx}">
                <span>Close Details &uarr;</span>
              </button>
            </div>
          </div>

        </article>
      `;
    }).join('');
  }

  // Render Flagship Section (Controls Toolbar + Carousel / Grid + Telemetry Strip)
  function renderFlagshipSection() {
    const totalFiltered = filteredProjects.length;
    const currentDisplayNum = totalFiltered > 0 ? String(currentSlideIndex + 1).padStart(2, '0') : '00';
    const totalDisplayNum = String(totalFiltered).padStart(2, '0');
    const repoCount = githubState.repos.length || 14;

    return `
      <!-- Flagship Controls Toolbar -->
      <div class="projects-controls-toolbar glass-panel">
        
        <!-- Category Filters -->
        <div class="projects-filter-pills" role="tablist" aria-label="Filter projects by domain">
          <button type="button" class="proj-filter-pill ${activeCategory === 'all' ? 'active' : ''}" data-cat="all">
            All (${totalProjects})
          </button>
          <button type="button" class="proj-filter-pill ${activeCategory === 'ai' ? 'active' : ''}" data-cat="ai">
            AI &amp; ML
          </button>
          <button type="button" class="proj-filter-pill ${activeCategory === 'systems' ? 'active' : ''}" data-cat="systems">
            Edge &amp; Systems
          </button>
          <button type="button" class="proj-filter-pill ${activeCategory === 'webgl' ? 'active' : ''}" data-cat="webgl">
            WebGL &amp; 3D
          </button>
        </div>

        <!-- Search Bar -->
        <div class="projects-search-box">
          <svg class="search-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="search" 
            id="proj-search-input" 
            class="proj-search-input" 
            placeholder="Search flagship projects..." 
            value="${escapeHtml(searchQuery)}"
            aria-label="Search flagship projects"
          />
          <button type="button" id="proj-clear-search" class="proj-clear-btn" style="display: ${searchQuery ? 'inline-flex' : 'none'};" title="Clear search">×</button>
        </div>

        <!-- View Mode Switcher -->
        <div class="projects-view-toggle" role="group" aria-label="Projects Presentation View">
          <button type="button" class="proj-view-btn ${viewMode === 'slides' ? 'active' : ''}" id="btn-projects-view-slide" title="Single Slide Showcase">
            <span>⧉ Slide Showcase</span>
          </button>
          <button type="button" class="proj-view-btn ${viewMode === 'grid' ? 'active' : ''}" id="btn-projects-view-grid" title="Browse All Project Cards">
            <span>⊞ All Cards Grid</span>
          </button>
        </div>

        <!-- Carousel Arrow Controls & Indicator -->
        <div class="projects-carousel-nav" style="${viewMode === 'grid' ? 'display: none;' : ''}">
          <button type="button" class="proj-nav-arrow prev-btn" id="btn-prev-project" aria-label="Previous project" title="Previous project (Left Arrow)">
            <span>&larr;</span>
          </button>
          <div class="proj-counter-box">
            <span class="proj-counter" id="project-carousel-counter">${currentDisplayNum} / ${totalDisplayNum}</span>
          </div>
          <button type="button" class="proj-nav-arrow next-btn" id="btn-next-project" aria-label="Next project" title="Next project (Right Arrow)">
            <span>&rarr;</span>
          </button>
        </div>

      </div>

      <!-- Curated Projects Viewport -->
      <main class="projects-carousel-viewport" id="projects-carousel-viewport" tabindex="0" aria-label="Flagship Projects Carousel">
        ${renderCarouselMarkup()}
      </main>

      <!-- Live GitHub Telemetry Strip -->
      <section class="github-telemetry-strip glass-panel" aria-label="Live GitHub Telemetry Bar">
        <div class="telemetry-info">
          <div class="telemetry-status-row">
            <span class="telemetry-dot ${githubState.status.includes('rate_limited') ? 'dot-warning' : 'dot-live'}"></span>
            <span class="telemetry-status-text">
              ${githubState.status === 'loading' ? 'Syncing live repository telemetry...' : 
                (githubState.status.includes('rate_limited') ? 'Cached Live Data (GitHub 60 req/hr rate-limit protected)' :
                 (githubState.status.includes('error') ? 'Telemetry fallback active' : 'Live Synced via GitHub REST API'))}
            </span>
            <span class="telemetry-user-chip">@${GITHUB_CONFIG.username}</span>
          </div>
          <div class="telemetry-metrics-row">
            <span class="telemetry-metric-item"><strong>${repoCount}</strong> Public Repositories</span>
            <span class="telemetry-metric-sep">//</span>
            <span class="telemetry-metric-item"><strong>Python, Kotlin, JS, HTML</strong></span>
            <span class="telemetry-metric-sep">//</span>
            <span class="telemetry-metric-item">Verified Identity: <strong>atlas_core07</strong></span>
          </div>
        </div>
        <div class="telemetry-actions">
          <button type="button" class="btn-primary btn-sm" id="btn-jump-to-github">
            <span>Explore All ${repoCount} Repositories &rarr;</span>
          </button>
          <a href="${GITHUB_CONFIG.profileUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-sm" title="Open GitHub Profile">
            <span>GitHub Profile ↗</span>
          </a>
        </div>
      </section>
    `;
  }

  // Render Interactive Project Lab Section
  function renderLabSection() {
    return `
      <!-- Lab Header & Sub-Navigation Bar -->
      <div class="lab-main-header glass-panel">
        <div class="lab-header-left">
          <div class="lab-header-badge">
            <span class="badge-sparkle">✦</span>
            <span>INTERACTIVE ENGINEERING ENVIRONMENT</span>
          </div>
          <h2 class="lab-header-title">ATLAS Project Lab</h2>
          <p class="lab-header-sub">
            Test live sandboxed algorithm simulators, inspect verified system architecture diagrams, and examine technical case studies without leaving the portfolio.
          </p>
        </div>

        <div class="lab-subtabs-row" role="tablist" aria-label="Project Lab Subsections">
          <button type="button" class="lab-subtab-btn ${activeLabSubTab === 'playground' ? 'active' : ''}" data-lab-subtab="playground" role="tab" aria-selected="${activeLabSubTab === 'playground'}">
            <span class="subtab-icon">⚡</span>
            <span>Web Playground</span>
          </button>
          <button type="button" class="lab-subtab-btn ${activeLabSubTab === 'architecture' ? 'active' : ''}" data-lab-subtab="architecture" role="tab" aria-selected="${activeLabSubTab === 'architecture'}">
            <span class="subtab-icon">🏛️</span>
            <span>Architecture Explorer</span>
          </button>
          <button type="button" class="lab-subtab-btn ${activeLabSubTab === 'matrix' ? 'active' : ''}" data-lab-subtab="matrix" role="tab" aria-selected="${activeLabSubTab === 'matrix'}">
            <span class="subtab-icon">📋</span>
            <span>Systems Matrix</span>
          </button>
        </div>
      </div>

      <!-- Lab Workbench Mount Outlet -->
      <div id="lab-workbench-outlet" class="lab-workbench-outlet">
        ${activeLabSubTab === 'matrix' ? renderCaseStudiesMatrix() : ''}
      </div>
    `;
  }

  function renderCaseStudiesMatrix() {
    return `
      <div class="systems-matrix-container">
        <div class="matrix-header-row">
          <h3 class="matrix-heading">Verified Systems Architecture Matrix (8 Projects)</h3>
          <span class="matrix-subtitle">Real engineering specifications, problems, implemented solutions, and repository links</span>
        </div>

        <div class="systems-matrix-grid">
          ${PROJECTS_DATA.map(p => `
            <div class="matrix-card glass-panel" data-slug="${p.slug}">
              <div class="matrix-card-top">
                <span class="matrix-num">${p.no}</span>
                <span class="matrix-status-pill">${escapeHtml(p.status)}</span>
              </div>
              <h4 class="matrix-title">${escapeHtml(p.name)}</h4>
              <span class="matrix-category">${escapeHtml(p.category)}</span>
              
              <div class="matrix-section">
                <span class="section-kicker">PROBLEM STATEMENT:</span>
                <p class="section-desc">${escapeHtml(p.problem)}</p>
              </div>

              <div class="matrix-section">
                <span class="section-kicker">ENGINEERED SOLUTION:</span>
                <p class="section-desc">${escapeHtml(p.solution)}</p>
              </div>

              <div class="matrix-section">
                <span class="section-kicker">VERIFIED FEATURES:</span>
                <ul class="matrix-feat-list">
                  ${p.features.slice(0, 3).map(f => `<li>${escapeHtml(f)}</li>`).join('')}
                </ul>
              </div>

              <div class="matrix-stack-row">
                ${p.stack.map(s => `<span class="tech-tag">${escapeHtml(s)}</span>`).join('')}
              </div>

              <div class="matrix-actions-bar">
                <a href="/projects/${p.slug}" data-route="/projects/${p.slug}" class="btn-primary btn-sm">
                  <span>Case Study &rarr;</span>
                </a>
                ${(p.slug === 'solvex-ner' || p.slug === 'linkx') ? `
                  <button type="button" class="btn-secondary btn-sm btn-quick-arch" data-model="${p.slug}">
                    <span>Architecture 🏛️</span>
                  </button>
                ` : ''}
                ${p.repo ? `
                  <a href="${p.repo}" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-sm" title="View Source on GitHub">
                    <span>GitHub ↗</span>
                  </a>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function mountLabSubView() {
    if (activeLabController && typeof activeLabController.destroy === 'function') {
      try { activeLabController.destroy(); } catch (e) {}
      activeLabController = null;
    }

    const outlet = container.querySelector('#lab-workbench-outlet');
    if (!outlet) return;

    if (activeLabSubTab === 'playground') {
      outlet.innerHTML = '';
      activeLabController = renderWebPlayground(outlet);
    } else if (activeLabSubTab === 'architecture') {
      outlet.innerHTML = '';
      activeLabController = renderArchitectureExplorer(outlet);
    } else if (activeLabSubTab === 'matrix') {
      // Wire up quick architecture buttons inside matrix
      outlet.querySelectorAll('.btn-quick-arch').forEach(btn => {
        btn.addEventListener('click', () => {
          activeLabSubTab = 'architecture';
          renderFullView();
        });
      });
    }
  }

  // Render GitHub Profile Hero & Repository Explorer Section
  function renderGitHubSection() {
    const repos = getFilteredGitHubRepos();
    const availableLangs = getAvailableLanguages();
    const totalRepos = githubState.repos.length || 14;
    const profile = githubState.profile || {
      login: GITHUB_CONFIG.username,
      name: 'atlas_core07',
      bio: 'AI/ML Engineering Student | Full-Stack Developer | Building Intelligent Solutions 🚀',
      public_repos: totalRepos,
      avatar_url: 'https://avatars.githubusercontent.com/u/235833541?v=4',
      html_url: GITHUB_CONFIG.profileUrl
    };

    return `
      <!-- GitHub Profile Hero Card -->
      <div class="github-profile-hero glass-panel">
        <div class="github-hero-left">
          <div class="github-avatar-frame">
            <img src="${profile.avatar_url}" alt="${escapeHtml(profile.name || profile.login)} GitHub Avatar" class="github-avatar-img" />
            <span class="github-avatar-badge" title="Live Synced">⑂</span>
          </div>
          <div class="github-hero-meta">
            <div class="github-hero-name-row">
              <h2 class="github-hero-title">${escapeHtml(profile.name || 'atlas_core07')}</h2>
              <a href="${profile.html_url}" target="_blank" rel="noopener noreferrer" class="github-username-link">
                @${escapeHtml(profile.login)} ↗
              </a>
              <span class="github-verified-tag">VERIFIED DEVELOPER</span>
            </div>
            <p class="github-hero-bio">${escapeHtml(profile.bio || 'AI/ML Engineering Student | Full-Stack Developer')}</p>
            <div class="github-hero-stats-row">
              <div class="hero-stat-pill">
                <span class="stat-num">${totalRepos}</span>
                <span class="stat-lbl">Public Repositories</span>
              </div>
              <div class="hero-stat-pill">
                <span class="stat-num">${availableLangs.length}</span>
                <span class="stat-lbl">Core Languages</span>
              </div>
              <div class="hero-stat-pill">
                <span class="stat-num">${githubState.source === 'client-cache' || githubState.source === 'stale-cache' ? '15m' : 'LIVE'}</span>
                <span class="stat-lbl">${githubState.source === 'client-cache' || githubState.source === 'stale-cache' ? 'Cache Active' : 'API Realtime'}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="github-hero-right">
          <button type="button" class="btn-primary btn-sm btn-refresh-github" id="btn-refresh-github" ${githubState.isRefreshing ? 'disabled' : ''}>
            <span>${githubState.isRefreshing ? '↻ Syncing...' : '↻ Refresh Live Data'}</span>
          </button>
          <a href="${profile.html_url}" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-sm">
            <span>View Profile on GitHub ↗</span>
          </a>
          <span class="github-live-disclaimer">
            Real data from GitHub REST API. Latest update timestamps reflect repository commits and do not imply active ongoing maintenance.
          </span>
        </div>
      </div>

      <!-- Rate-limit or Error Alert Notice (if triggered) -->
      ${githubState.status.includes('rate_limited') ? `
        <div class="github-alert-banner alert-warning glass-panel">
          <div class="alert-icon">⚠️</div>
          <div class="alert-content">
            <strong>GitHub API Rate-Limit Active (60 requests/hr unauthenticated limit)</strong>
            <p>Showing verified cached repository data. Rate limit will reset automatically${githubState.rateLimitReset ? ` around ${new Date(githubState.rateLimitReset).toLocaleTimeString()}` : ''}.</p>
          </div>
          <button type="button" class="btn-secondary btn-sm" id="btn-retry-github">
            <span>Try Refreshing</span>
          </button>
        </div>
      ` : ''}

      ${githubState.status === 'error' ? `
        <div class="github-alert-banner alert-danger glass-panel">
          <div class="alert-icon">⚡</div>
          <div class="alert-content">
            <strong>GitHub API Connection Notice</strong>
            <p>${escapeHtml(githubState.error || 'Network request failed')}. Displaying fallback system metadata.</p>
          </div>
          <button type="button" class="btn-secondary btn-sm" id="btn-retry-github">
            <span>Retry Connection</span>
          </button>
        </div>
      ` : ''}

      <!-- GitHub Explorer Controls Toolbar (Search & Dynamic Language Filters) -->
      <div class="github-controls-toolbar glass-panel">
        
        <!-- Language Filter Pills -->
        <div class="github-lang-filters" role="tablist" aria-label="Filter repositories by programming language">
          <button type="button" class="github-lang-btn ${githubLangFilter === 'all' ? 'active' : ''}" data-gitlang="all">
            All (${totalRepos})
          </button>
          ${availableLangs.map(l => `
            <button type="button" class="github-lang-btn ${githubLangFilter.toLowerCase() === l.name.toLowerCase() ? 'active' : ''}" data-gitlang="${escapeHtml(l.name)}">
              <span class="lang-color-dot" style="background-color: ${l.color};"></span>
              <span>${escapeHtml(l.name)} (${l.count})</span>
            </button>
          `).join('')}
        </div>

        <!-- Repository Search Box -->
        <div class="github-search-box">
          <svg class="search-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="search" 
            id="github-search-input" 
            class="proj-search-input" 
            placeholder="Search repositories by name, language, or topic..." 
            value="${escapeHtml(githubSearchQuery)}"
            aria-label="Search repositories"
          />
          <button type="button" id="github-clear-search" class="proj-clear-btn" style="display: ${githubSearchQuery ? 'inline-flex' : 'none'};" title="Clear search">×</button>
        </div>

      </div>

      <!-- Repositories Grid Container -->
      ${githubState.status === 'loading' ? renderSkeletonCards() : (repos.length === 0 ? renderEmptyGitHubState() : renderRepoCards(repos))}
    `;
  }

  function renderSkeletonCards() {
    return `
      <div class="github-repos-grid" aria-busy="true" aria-label="Loading repositories">
        ${[1, 2, 3, 4, 5, 6].map(() => `
          <div class="github-repo-card github-skeleton-card glass-panel">
            <div class="skeleton-line skeleton-header"></div>
            <div class="skeleton-line skeleton-desc"></div>
            <div class="skeleton-line skeleton-desc" style="width: 75%;"></div>
            <div class="skeleton-line skeleton-footer"></div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderEmptyGitHubState() {
    return `
      <div class="projects-empty-state glass-panel">
        <div class="empty-icon">⑂</div>
        <h3 class="empty-title">No repositories found</h3>
        <p class="empty-desc">No public repositories matched your filter "${escapeHtml(githubSearchQuery || githubLangFilter)}".</p>
        <button type="button" class="btn-secondary" id="btn-reset-github-filters">
          <span>Reset Filters</span>
        </button>
      </div>
    `;
  }

  function renderRepoCards(repos) {
    return `
      <div class="github-repos-grid" role="region" aria-label="GitHub Repositories Grid">
        ${repos.map((repo) => {
          const mapped = REPO_TO_PROJECT_MAP[repo.name];
          const langColor = getLanguageColor(repo.language);
          const updatedDate = formatGitHubDate(repo.updated_at);
          const hasDesc = Boolean(repo.description && repo.description.trim());
          const starCount = repo.stargazers_count || 0;
          const forkCount = repo.forks_count || 0;

          return `
            <article class="github-repo-card glass-panel" data-repo-name="${escapeHtml(repo.name)}">
              
              <!-- Card Header -->
              <div class="repo-card-header">
                <div class="repo-name-box">
                  <span class="repo-branch-icon" aria-hidden="true">⑂</span>
                  <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-name-link" title="Open repository on GitHub">
                    <h3 class="repo-title">${escapeHtml(repo.name)}</h3>
                  </a>
                </div>
                <span class="repo-badge-public">Public</span>
              </div>

              <!-- Verified Flagship Mapping Badge (if matched) -->
              ${mapped ? `
                <div class="repo-curated-bridge">
                  <a href="/projects/${mapped.slug}" data-route="/projects/${mapped.slug}" class="repo-curated-link" title="Open Flagship Architecture Case Study">
                    <span class="bridge-sparkle">✦</span>
                    <span class="bridge-text">FLAGSHIP ARCHITECTURE: <strong>${escapeHtml(mapped.name)}</strong> &rarr;</span>
                  </a>
                </div>
              ` : ''}

              <!-- Description -->
              <p class="repo-desc ${hasDesc ? '' : 'repo-desc-empty'}">
                ${hasDesc ? escapeHtml(repo.description) : 'No description provided in repository metadata.'}
              </p>

              <!-- Topics / Keywords (if available) -->
              ${Array.isArray(repo.topics) && repo.topics.length > 0 ? `
                <div class="repo-topics-row">
                  ${repo.topics.slice(0, 3).map(t => `<span class="repo-topic-pill">#${escapeHtml(t)}</span>`).join('')}
                </div>
              ` : ''}

              <!-- Meta Footer Row (Language, Stars, Forks, Updated Date) -->
              <div class="repo-meta-row">
                ${repo.language ? `
                  <div class="repo-meta-item repo-lang-item">
                    <span class="lang-color-dot" style="background-color: ${langColor};"></span>
                    <span class="repo-lang-name">${escapeHtml(repo.language)}</span>
                  </div>
                ` : `
                  <div class="repo-meta-item repo-lang-item">
                    <span class="lang-color-dot" style="background-color: #888;"></span>
                    <span class="repo-lang-name">Documentation</span>
                  </div>
                `}

                <div class="repo-meta-item repo-stat-item" title="${starCount} stargazers">
                  <span class="meta-icon">★</span>
                  <span>${starCount}</span>
                </div>

                <div class="repo-meta-item repo-stat-item" title="${forkCount} forks">
                  <span class="meta-icon">⑂</span>
                  <span>${forkCount}</span>
                </div>

                <div class="repo-meta-item repo-date-item" title="Last commit date on GitHub">
                  <span class="meta-icon">🕒</span>
                  <span>${updatedDate}</span>
                </div>
              </div>

              <!-- Direct Actions Bar -->
              <div class="repo-actions-bar">
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-sm repo-btn-code">
                  <span>View on GitHub ↗</span>
                </a>
                ${mapped ? `
                  <a href="/projects/${mapped.slug}" data-route="/projects/${mapped.slug}" class="btn-primary btn-sm repo-btn-study">
                    <span>Case Study &rarr;</span>
                  </a>
                ` : ''}
              </div>

            </article>
          `;
        }).join('')}
      </div>
    `;
  }

  // Full Page Render
  function renderFullView() {
    const totalRepos = githubState.repos.length || 14;

    container.innerHTML = `
      <!-- ====================================================================
           1. CLEAN, MINIMAL INTRODUCTION WITH LIVE COUNTS
           ==================================================================== -->
      <header class="projects-clean-header" aria-label="Projects Introduction">
        <div class="projects-eyebrow">MY WORK // LIVE REPOSITORY TELEMETRY &amp; LAB</div>
        <div class="projects-title-row">
          <h1 class="projects-main-heading">Projects</h1>
          <span class="projects-count-pill" id="projects-total-count">
            ${totalProjects} Flagship Systems // ${totalRepos} Live Repositories
          </span>
        </div>
        <p class="projects-intro-lead">
          Production AI architectures, interactive 3D simulations, sandboxed project lab demos, and authentic live repositories.
        </p>
      </header>

      <!-- ====================================================================
           2. PRIMARY PRESENTATION TABS (Flagship Systems vs Project Lab vs Live GitHub)
           ==================================================================== -->
      <nav class="projects-primary-tabs" role="tablist" aria-label="Choose projects view">
        <button 
          type="button" 
          class="proj-tab-btn ${activePrimaryTab === 'flagship' ? 'active' : ''}" 
          data-tab="flagship" 
          role="tab" 
          aria-selected="${activePrimaryTab === 'flagship'}"
        >
          <span class="tab-badge-dot">✦</span>
          <span>Flagship Systems (${totalProjects})</span>
        </button>

        <button 
          type="button" 
          class="proj-tab-btn ${activePrimaryTab === 'lab' ? 'active' : ''}" 
          data-tab="lab" 
          role="tab" 
          aria-selected="${activePrimaryTab === 'lab'}"
        >
          <span class="tab-badge-dot">🔬</span>
          <span>Interactive Project Lab</span>
          <span class="live-pulse-badge">LIVE LAB</span>
        </button>

        <button 
          type="button" 
          class="proj-tab-btn ${activePrimaryTab === 'github' ? 'active' : ''}" 
          data-tab="github" 
          role="tab" 
          aria-selected="${activePrimaryTab === 'github'}"
        >
          <span class="tab-badge-dot git-dot">⑂</span>
          <span id="github-tab-label">Live GitHub Repositories (${totalRepos})</span>
          <span class="live-pulse-badge ${githubState.status === 'loading' ? 'pulsing' : ''}">LIVE</span>
        </button>
      </nav>

      <!-- ====================================================================
           3. ACTIVE SECTION VIEWPORT
           ==================================================================== -->
      <div class="projects-tab-viewport">
        ${activePrimaryTab === 'flagship' ? renderFlagshipSection() : (activePrimaryTab === 'lab' ? renderLabSection() : renderGitHubSection())}
      </div>
    `;

    bindEventListeners();
    if (activePrimaryTab === 'flagship') {
      mountActiveSlideEffects();
    } else if (activePrimaryTab === 'lab') {
      mountLabSubView();
    }
    refreshScrollReveals(container);
  }

  // Mount 3D hover/tilt effects on active slide
  function mountActiveSlideEffects() {
    cleanupEffects();

    if (viewMode === 'grid' || filteredProjects.length === 0 || activePrimaryTab !== 'flagship') return;

    const activeSlide = container.querySelector(`#project-slide-${currentSlideIndex}`);
    if (!activeSlide) return;

    const frameWrapper = activeSlide.querySelector('.preview-frame-wrapper');
    if (frameWrapper) {
      activePreview3DEffect = new ProjectPreview3DEffect(frameWrapper);
    }
  }

  function cleanupEffects() {
    if (activePreview3DEffect) {
      activePreview3DEffect.destroy();
      activePreview3DEffect = null;
    }
    if (activeInteractiveDemo) {
      if (typeof activeInteractiveDemo.destroy === 'function') {
        activeInteractiveDemo.destroy();
      }
      activeInteractiveDemo = null;
    }
    if (activeLabController) {
      if (typeof activeLabController.destroy === 'function') {
        try { activeLabController.destroy(); } catch (e) {}
      }
      activeLabController = null;
    }
  }

  // Directional slide navigation
  function goToSlide(index, direction = 'next', isUserAction = false) {
    if (isTransitioning) return;
    if (filteredProjects.length === 0) return;

    const oldIndex = currentSlideIndex;
    const normalized = (index + filteredProjects.length) % filteredProjects.length;
    if (normalized === oldIndex && filteredProjects.length > 1) return;

    if (isUserAction) stopAutoRotation();
    currentSlideIndex = normalized;
    isTransitioning = true;

    const slides = container.querySelectorAll('.project-slide');
    const oldSlide = container.querySelector(`#project-slide-${oldIndex}`);
    const newSlide = container.querySelector(`#project-slide-${currentSlideIndex}`);

    const counterEl = container.querySelector('#project-carousel-counter');
    if (counterEl) {
      const curStr = String(currentSlideIndex + 1).padStart(2, '0');
      const totStr = String(filteredProjects.length).padStart(2, '0');
      counterEl.textContent = `${curStr} / ${totStr}`;
    }

    const isReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      if (oldSlide) {
        oldSlide.classList.remove('active-slide', 'slide-transitioning', 'slide-exit-to-left', 'slide-exit-to-right');
        oldSlide.setAttribute('hidden', '');
        oldSlide.setAttribute('aria-hidden', 'true');
      }
      if (newSlide) {
        newSlide.classList.remove('slide-transitioning', 'slide-enter-from-right', 'slide-enter-from-left');
        newSlide.classList.add('active-slide');
        newSlide.removeAttribute('hidden');
        newSlide.removeAttribute('aria-hidden');
      }
      isTransitioning = false;
      mountActiveSlideEffects();
      return;
    }

    const exitClass = direction === 'next' ? 'slide-exit-to-left' : 'slide-exit-to-right';
    const enterClass = direction === 'next' ? 'slide-enter-from-right' : 'slide-enter-from-left';

    slides.forEach(s => s.classList.remove('slide-exit-to-left', 'slide-exit-to-right', 'slide-enter-from-right', 'slide-enter-from-left', 'slide-transitioning'));

    if (newSlide) {
      newSlide.removeAttribute('hidden');
      newSlide.removeAttribute('aria-hidden');
      newSlide.classList.add('active-slide', 'slide-transitioning', enterClass);
    }

    if (oldSlide) {
      oldSlide.classList.add('slide-transitioning', exitClass);
    }

    if (transitionTimer) clearTimeout(transitionTimer);
    transitionTimer = setTimeout(() => {
      if (oldSlide) {
        oldSlide.classList.remove('active-slide', 'slide-transitioning', 'slide-exit-to-left', 'slide-exit-to-right');
        oldSlide.setAttribute('hidden', '');
        oldSlide.setAttribute('aria-hidden', 'true');
      }
      if (newSlide) {
        newSlide.classList.remove('slide-transitioning', 'slide-enter-from-right', 'slide-enter-from-left');
      }
      isTransitioning = false;
      mountActiveSlideEffects();
    }, 720);
  }

  function startAutoRotation() {
    const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion || userInteracted || activePrimaryTab !== 'flagship') return;

    clearAutoRotation();
    autoRotateTimer = setInterval(() => {
      if (!isHoveredOrFocused && !userInteracted && !isTransitioning && filteredProjects.length > 1) {
        goToSlide(currentSlideIndex + 1, 'next', false);
      }
    }, 9000);
  }

  function stopAutoRotation() {
    userInteracted = true;
    clearAutoRotation();
  }

  function clearAutoRotation() {
    if (autoRotateTimer) {
      clearInterval(autoRotateTimer);
      autoRotateTimer = null;
    }
  }

  // Event wiring
  function bindEventListeners() {
    // 1. Primary Tab Switcher (Flagship vs Lab vs GitHub)
    const primaryTabBtns = container.querySelectorAll('.proj-tab-btn');
    primaryTabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        if (targetTab === activePrimaryTab) return;
        activePrimaryTab = targetTab;
        if (activePrimaryTab === 'github') {
          stopAutoRotation();
          cleanupEffects();
          if (githubState.status === 'idle') {
            fetchGitHubData();
          }
        } else if (activePrimaryTab === 'lab') {
          stopAutoRotation();
          cleanupEffects();
        } else {
          cleanupEffects();
          startAutoRotation();
        }
        renderFullView();
      });
    });

    // Jump to Lab Demo button on flagship slide
    container.querySelectorAll('[data-jump-lab]').forEach(btn => {
      btn.addEventListener('click', () => {
        const slug = btn.getAttribute('data-jump-lab');
        activePrimaryTab = 'lab';
        if (slug === 'solvex-ner' || slug === 'linkx') {
          activeLabSubTab = 'architecture';
        } else {
          activeLabSubTab = 'playground';
        }
        stopAutoRotation();
        cleanupEffects();
        renderFullView();
        window.scrollTo({ top: container.offsetTop - 40, behavior: 'smooth' });
      });
    });

    // Jump to GitHub Explorer button in telemetry strip
    const jumpBtn = container.querySelector('#btn-jump-to-github');
    jumpBtn?.addEventListener('click', () => {
      activePrimaryTab = 'github';
      stopAutoRotation();
      cleanupEffects();
      if (githubState.status === 'idle') {
        fetchGitHubData();
      }
      renderFullView();
      window.scrollTo({ top: container.offsetTop - 40, behavior: 'smooth' });
    });

    // 2. Project Lab Sub-Tabs Wiring
    if (activePrimaryTab === 'lab') {
      const subTabBtns = container.querySelectorAll('.lab-subtab-btn');
      subTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const sub = btn.getAttribute('data-lab-subtab');
          if (sub && sub !== activeLabSubTab) {
            activeLabSubTab = sub;
            renderFullView();
          }
        });
      });
      return;
    }

    // 3. GitHub-specific controls
    if (activePrimaryTab === 'github') {
      container.querySelector('#btn-refresh-github')?.addEventListener('click', () => {
        fetchGitHubData({ forceRefresh: true });
      });

      container.querySelector('#btn-retry-github')?.addEventListener('click', () => {
        fetchGitHubData({ forceRefresh: true });
      });

      const langBtns = container.querySelectorAll('.github-lang-btn');
      langBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          langBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          githubLangFilter = btn.getAttribute('data-gitlang') || 'all';
          renderFullView();
        });
      });

      const ghSearchInput = container.querySelector('#github-search-input');
      const ghClearBtn = container.querySelector('#github-clear-search');
      ghSearchInput?.addEventListener('input', (e) => {
        githubSearchQuery = e.target.value;
        if (ghClearBtn) ghClearBtn.style.display = githubSearchQuery ? 'inline-flex' : 'none';
        renderFullView();
      });

      ghClearBtn?.addEventListener('click', () => {
        githubSearchQuery = '';
        if (ghSearchInput) ghSearchInput.value = '';
        ghClearBtn.style.display = 'none';
        renderFullView();
      });

      container.querySelector('#btn-reset-github-filters')?.addEventListener('click', () => {
        githubSearchQuery = '';
        githubLangFilter = 'all';
        renderFullView();
      });

      return;
    }

    // 4. Flagship Navigation Arrows
    const prevBtn = container.querySelector('#btn-prev-project');
    const nextBtn = container.querySelector('#btn-next-project');
    prevBtn?.addEventListener('click', () => goToSlide(currentSlideIndex - 1, 'prev', true));
    nextBtn?.addEventListener('click', () => goToSlide(currentSlideIndex + 1, 'next', true));

    // 5. Flagship Category Filter Pills
    const filterPills = container.querySelectorAll('.proj-filter-pill');
    filterPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        stopAutoRotation();
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.dataset.cat;
        applyFilterAndSearch();
        renderFullView();
      });
    });

    // 6. Flagship Search Bar
    const searchInput = container.querySelector('#proj-search-input');
    const clearSearchBtn = container.querySelector('#proj-clear-search');
    searchInput?.addEventListener('input', (e) => {
      stopAutoRotation();
      searchQuery = e.target.value;
      if (clearSearchBtn) clearSearchBtn.style.display = searchQuery ? 'inline-flex' : 'none';
      applyFilterAndSearch();
      renderFullView();
    });

    clearSearchBtn?.addEventListener('click', () => {
      stopAutoRotation();
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      applyFilterAndSearch();
      renderFullView();
    });

    container.querySelector('#btn-reset-filters')?.addEventListener('click', () => {
      searchQuery = '';
      activeCategory = 'all';
      applyFilterAndSearch();
      renderFullView();
    });

    // View Switcher Buttons (Slides vs Grid)
    container.querySelector('#btn-projects-view-slide')?.addEventListener('click', () => {
      viewMode = 'slides';
      renderFullView();
    });

    container.querySelector('#btn-projects-view-grid')?.addEventListener('click', () => {
      stopAutoRotation();
      viewMode = 'grid';
      renderFullView();
    });

    // Focus in slide buttons on grid cards
    container.querySelectorAll('[data-focus-slide]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-focus-slide'), 10);
        if (!isNaN(idx)) {
          currentSlideIndex = idx;
          viewMode = 'slides';
          renderFullView();
        }
      });
    });

    // 7. In-Slide Expandable "View Details" Buttons
    const toggleBtns = container.querySelectorAll('.btn-slide-toggle');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        stopAutoRotation();
        const slideIdx = btn.getAttribute('data-details-toggle');
        const drawer = container.querySelector(`#project-details-${slideIdx}`);
        if (!drawer) return;

        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        const nextState = !isExpanded;

        btn.setAttribute('aria-expanded', nextState ? 'true' : 'false');
        const iconSpan = btn.querySelector('.toggle-icon');
        const textSpan = btn.querySelector('.toggle-text');

        if (nextState) {
          drawer.removeAttribute('hidden');
          drawer.classList.add('is-expanded');
          if (iconSpan) iconSpan.textContent = '↑';
          if (textSpan) textSpan.textContent = 'Hide Details';
        } else {
          drawer.setAttribute('hidden', '');
          drawer.classList.remove('is-expanded');
          if (iconSpan) iconSpan.textContent = '↓';
          if (textSpan) textSpan.textContent = 'View Details';
        }
      });
    });

    // Close buttons inside details drawers
    const closeDrawerBtns = container.querySelectorAll('.btn-close-drawer');
    closeDrawerBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        stopAutoRotation();
        const slideIdx = btn.getAttribute('data-close-drawer');
        const drawer = container.querySelector(`#project-details-${slideIdx}`);
        const toggleBtn = container.querySelector(`[data-details-toggle="${slideIdx}"]`);
        if (drawer) {
          drawer.setAttribute('hidden', '');
          drawer.classList.remove('is-expanded');
        }
        if (toggleBtn) {
          toggleBtn.setAttribute('aria-expanded', 'false');
          const textSpan = toggleBtn.querySelector('.toggle-text');
          const iconSpan = toggleBtn.querySelector('.toggle-icon');
          if (textSpan) textSpan.textContent = 'View Details';
          if (iconSpan) iconSpan.textContent = '↓';
          toggleBtn.focus();
        }
      });
    });

    // 8. Interactive 3D Demo Mode Switchers (NER ACCESS and LINKEDX)
    const demoSwitchers = container.querySelectorAll('.demo-switch-pill');
    demoSwitchers.forEach((pill) => {
      pill.addEventListener('click', () => {
        stopAutoRotation();
        const slideIdx = pill.getAttribute('data-slide-target');
        const mode = pill.getAttribute('data-switch-mode');
        const slide = container.querySelector(`#project-slide-${slideIdx}`);
        if (!slide) return;

        const currentActiveProject = filteredProjects[slideIdx];
        if (!currentActiveProject) return;

        const switcherPills = slide.querySelectorAll('.demo-switch-pill');
        switcherPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const imgViewport = slide.querySelector(`#viewport-img-${slideIdx}`);
        const demoViewport = slide.querySelector(`#viewport-3d-${slideIdx}`);
        const canvasTarget = slide.querySelector(`#interactive-canvas-target-${slideIdx}`);

        if (mode === '3d') {
          if (imgViewport) imgViewport.style.display = 'none';
          if (demoViewport) demoViewport.style.display = 'block';

          if (activeInteractiveDemo && typeof activeInteractiveDemo.destroy === 'function') {
            activeInteractiveDemo.destroy();
            activeInteractiveDemo = null;
          }

          if (canvasTarget) {
            canvasTarget.innerHTML = '';
            if (currentActiveProject.slug === 'solvex-ner') {
              activeInteractiveDemo = new NerAccessDemo(canvasTarget);
              showToast('NER ACCESS 3D graph simulation active', 'info');
            } else if (currentActiveProject.slug === 'linkx') {
              activeInteractiveDemo = new LinkedxDemo(canvasTarget);
              showToast('LINKEDX 3D vision analysis active', 'info');
            }
          }
        } else {
          if (imgViewport) imgViewport.style.display = 'block';
          if (demoViewport) demoViewport.style.display = 'none';
          if (activeInteractiveDemo) {
            if (typeof activeInteractiveDemo.destroy === 'function') activeInteractiveDemo.destroy();
            activeInteractiveDemo = null;
          }
        }
      });
    });

    // 9. Carousel Hover/Focus State for Auto-rotation
    const carouselViewport = container.querySelector('#projects-carousel-viewport');
    if (carouselViewport) {
      carouselViewport.addEventListener('mouseenter', () => { isHoveredOrFocused = true; });
      carouselViewport.addEventListener('mouseleave', () => { isHoveredOrFocused = false; });
      carouselViewport.addEventListener('focusin', () => { isHoveredOrFocused = true; });
      carouselViewport.addEventListener('focusout', () => { isHoveredOrFocused = false; });

      // Touch Swiping Gesture Support
      let touchStartX = 0;
      let touchStartY = 0;

      carouselViewport.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      carouselViewport.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches.length === 1) {
          const deltaX = e.changedTouches[0].clientX - touchStartX;
          const deltaY = e.changedTouches[0].clientY - touchStartY;

          if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX < 0) {
              goToSlide(currentSlideIndex + 1, 'next', true);
            } else {
              goToSlide(currentSlideIndex - 1, 'prev', true);
            }
          }
        }
      }, { passive: true });
    }

    // 10. Keyboard Navigation
    if (!boundKeyHandler) {
      boundKeyHandler = (e) => {
        if (activePrimaryTab !== 'flagship') return;

        if (e.key === 'Escape') {
          const openDrawer = container.querySelector('.project-slide-details-drawer.is-expanded');
          if (openDrawer) {
            openDrawer.setAttribute('hidden', '');
            openDrawer.classList.remove('is-expanded');
            const toggleBtn = container.querySelector(`[aria-controls="${openDrawer.id}"]`);
            if (toggleBtn) {
              toggleBtn.setAttribute('aria-expanded', 'false');
              const textSpan = toggleBtn.querySelector('.toggle-text');
              const iconSpan = toggleBtn.querySelector('.toggle-icon');
              if (textSpan) textSpan.textContent = 'View Details';
              if (iconSpan) iconSpan.textContent = '↓';
              toggleBtn.focus();
            }
            return;
          }
        }

        if (document.activeElement && (container.contains(document.activeElement) || document.activeElement === document.body)) {
          if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;

          if (e.key === 'ArrowRight') {
            e.preventDefault();
            goToSlide(currentSlideIndex + 1, 'next', true);
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goToSlide(currentSlideIndex - 1, 'prev', true);
          }
        }
      };
      window.addEventListener('keydown', boundKeyHandler);
    }
  }

  // Initial render & GitHub background fetch
  renderFullView();
  startAutoRotation();
  fetchGitHubData();

  return {
    element: container,
    cleanup: () => {
      clearAutoRotation();
      if (transitionTimer) {
        clearTimeout(transitionTimer);
        transitionTimer = null;
      }
      isTransitioning = false;
      cleanupEffects();
      if (boundKeyHandler) {
        window.removeEventListener('keydown', boundKeyHandler);
        boundKeyHandler = null;
      }
    }
  };
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
