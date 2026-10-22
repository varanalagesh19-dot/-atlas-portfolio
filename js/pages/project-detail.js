/**
 * ATLAS 2.0 — REAL PROJECT SHOWCASE & CASE STUDY TEMPLATE (/projects/:slug)
 * Deep architectural case studies for NER ACCESS, LINKEDX, and verified GitHub repositories.
 * 
 * Includes:
 *  1. Project Hero (title, badges, meta grid, direct GitHub & Project Lab links)
 *  2. 3D Spatial Simulation Stage (Three.js WebGL canvas with interactive orbital controls)
 *  3. Problem Statement & Solution Architecture
 *  4. Intended Users & Real Operational Use Cases
 *  5. End-to-End User & System Workflow
 *  6. Implementation Status Matrix (Strictly distinguishes Working from Planned Concepts)
 *  7. Interactive Architecture Explorer (for NER ACCESS & LINKEDX)
 *  8. Real Implementation Screenshot Gallery with Lightbox Inspection
 *  9. Interactive Working Demo / Lab Integration Widget
 * 10. Engineering Challenges & Measurable Deliverables
 * 11. Author's Actual Engineering Contribution & Leadership
 * 12. Verified Technical & Architecture Decisions
 * 13. Transparent Limitations & Future Improvements
 * 14. Technology Stack & Toolchain
 * 15. Prev / Next Navigation & Return to Projects
 */
import { PROJECTS_DATA, getProjectBySlug } from '../data/projects.js';
import { mountProjectScene } from '../3d/project-scenes.js';
import { renderArchitectureExplorer } from '../components/architecture-explorer.js';

let currentScene = null;
let currentArchExplorer = null;

export function renderProjectDetailPage(params = {}) {
  const slug = params.slug;
  const project = getProjectBySlug(slug);

  const container = document.createElement('div');
  container.className = 'page-container page-project-detail';

  if (!project) {
    container.innerHTML = `
      <div class="empty-state glass-panel" style="margin: 4rem auto; max-width: 600px; text-align: center;">
        <div class="empty-icon">⚠️</div>
        <h2>Project Architecture Not Found</h2>
        <p>The project route <code>/projects/${escapeHtml(slug || '')}</code> does not match any verified repository in ATLAS.</p>
        <div style="margin-top: 2rem;">
          <a href="/projects" class="btn-primary" data-route="/projects">&larr; Return to All Projects</a>
        </div>
      </div>
    `;
    return {
      element: container,
      cleanup: () => {}
    };
  }

  // Find index for prev / next
  const currentIndex = PROJECTS_DATA.findIndex(p => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : PROJECTS_DATA[PROJECTS_DATA.length - 1];
  const nextProject = currentIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[currentIndex + 1] : PROJECTS_DATA[0];

  const hasArchModel = project.slug === 'solvex-ner' || project.slug === 'linkx';
  const labUrl = `/projects?tab=lab&sim=${encodeURIComponent(project.simType || project.slug)}`;

  container.innerHTML = `
    <!-- Breadcrumb & Back Bar -->
    <nav class="detail-nav-bar" aria-label="Project Breadcrumb">
      <a href="/projects" class="back-link" data-route="/projects">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Back to Projects</span>
      </a>
      <div class="detail-breadcrumb">
        <span>Projects</span> / <strong>${escapeHtml(project.name)}</strong>
      </div>
      <div class="detail-nav-actions">
        ${project.repo ? `
          <a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-sm" title="View Source on GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub ↗</span>
          </a>
        ` : ''}
        <a href="${labUrl}" data-route="${labUrl}" class="btn-primary btn-sm" title="Launch Interactive Simulation in Project Lab">
          <span>🔬 Open in Project Lab &rarr;</span>
        </a>
      </div>
    </nav>

    <!-- Detail Hero -->
    <header class="project-detail-hero">
      <div class="detail-badge-row">
        <span class="badge-num">${escapeHtml(project.no)}</span>
        <span class="badge-dot"></span>
        <span class="badge-text">${escapeHtml(project.badge)}</span>
        <span class="badge-status">${escapeHtml(project.status)}</span>
      </div>
      <h1 class="project-detail-title">${escapeHtml(project.name)}</h1>
      <p class="project-detail-lead">${escapeHtml(project.summary)}</p>

      <div class="project-meta-grid">
        <div class="meta-item">
          <span class="meta-label">Domain</span>
          <span class="meta-val">${escapeHtml(project.category)}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Role</span>
          <span class="meta-val">${escapeHtml(project.role)}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Timeline</span>
          <span class="meta-val">${escapeHtml(project.year)}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Verified Repository</span>
          <span class="meta-val">
            ${project.repo ? `
              <a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="meta-link" title="Open verified GitHub repository">
                github.com/varanalagesh19-dot ↗
              </a>
            ` : 'Proprietary Research'}
          </span>
        </div>
      </div>
    </header>

    <!-- 3D Interactive Stage / Media Section -->
    <section class="detail-stage-section glass-panel" aria-label="3D Spatial Simulation Stage">
      <div class="stage-header">
        <div class="stage-info">
          <span class="pulse-indicator"></span>
          <span class="stage-caption">Three.js Spatial Simulation Stage // ${escapeHtml(project.slug.toUpperCase())}</span>
        </div>
        <div class="stage-controls">
          <button id="reset-stage-cam-btn" class="stage-ctrl-btn" title="Reset Camera">Center View</button>
        </div>
      </div>
      <div class="stage-canvas-wrapper">
        <canvas id="detail-3d-canvas" class="detail-3d-canvas" aria-label="${escapeHtml(project.name)} 3D simulation canvas"></canvas>
      </div>
      <div class="stage-footer">
        <p class="stage-tip">Interactive WebGL preview: Click and drag to inspect orbital rotation and specular lighting.</p>
      </div>
    </section>

    <!-- Core Architecture Grid: Problem, Solution -->
    <section class="detail-narrative-grid">
      <div class="narrative-card glass-panel">
        <div class="narrative-icon-header">
          <span class="narrative-tag">01 // THE CHALLENGE</span>
          <h3>Problem Statement</h3>
        </div>
        <p class="narrative-text">${escapeHtml(project.problem)}</p>
      </div>

      <div class="narrative-card glass-panel">
        <div class="narrative-icon-header">
          <span class="narrative-tag">02 // THE ARCHITECTURE</span>
          <h3>Engineered Solution &amp; Approach</h3>
        </div>
        <p class="narrative-text">${escapeHtml(project.solution)}</p>
      </div>
    </section>

    <!-- Intended Users & Use Cases (if available) -->
    ${(project.intendedUsers && project.intendedUsers.length > 0) || (project.useCases && project.useCases.length > 0) ? `
      <section class="detail-users-usecases-section">
        <div class="users-card glass-panel">
          <div class="section-card-header">
            <span class="section-tag-pill">TARGET STAKEHOLDERS</span>
            <h3 class="section-card-title">Intended Users &amp; Operational Roles</h3>
          </div>
          <div class="users-grid">
            ${(project.intendedUsers || []).map(u => `
              <div class="user-item">
                <div class="user-role-title">👤 ${escapeHtml(u.role)}</div>
                <div class="user-context-text">${escapeHtml(u.context)}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="usecases-card glass-panel">
          <div class="section-card-header">
            <span class="section-tag-pill">OPERATIONAL USE CASES</span>
            <h3 class="section-card-title">Core Problem Solved in the Field</h3>
          </div>
          <div class="usecases-grid">
            ${(project.useCases || []).map(uc => `
              <div class="usecase-item">
                <div class="usecase-item-title">⚡ ${escapeHtml(uc.title)}</div>
                <div class="usecase-item-desc">${escapeHtml(uc.desc)}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    ` : ''}

    <!-- End-to-End System Workflow (if available) -->
    ${project.workflow && project.workflow.length > 0 ? `
      <section class="detail-workflow-section glass-panel">
        <div class="section-card-header">
          <span class="section-tag-pill">PIPELINE EXECUTION</span>
          <h2 class="section-card-title">End-to-End System &amp; Data Workflow</h2>
          <p class="section-lead-sub">Chronological data flow from user input to final output.</p>
        </div>
        <div class="workflow-steps-grid">
          ${project.workflow.map(w => `
            <div class="workflow-step-card">
              <div class="step-badge">${escapeHtml(w.step)}</div>
              <h4 class="step-title">${escapeHtml(w.title)}</h4>
              <p class="step-desc">${escapeHtml(w.desc)}</p>
            </div>
          `).join('')}
        </div>
      </section>
    ` : ''}

    <!-- Implementation Status Matrix (Distinguishing Working vs Planned) -->
    ${project.implementationStatus ? `
      <section class="detail-status-matrix-section glass-panel">
        <div class="section-card-header">
          <span class="section-tag-pill">TRANSPARENCY &amp; EVIDENCE MATRIX</span>
          <h2 class="section-card-title">Implementation Status: Working vs. Planned Features</h2>
          <p class="section-lead-sub">
            Strict verification: Every feature below is categorized by its actual state in the codebase.
          </p>
        </div>
        <div class="status-matrix-grid">
          <!-- Working / Implemented -->
          <div class="status-column status-col-working">
            <div class="status-col-header">
              <span class="status-indicator-dot dot-working"></span>
              <h4>Verified Working Features (${(project.implementationStatus.workingFeatures || []).length})</h4>
            </div>
            <ul class="status-list">
              ${(project.implementationStatus.workingFeatures || []).map(wf => `
                <li class="status-list-item item-working">
                  <span class="status-icon">✓</span>
                  <span class="status-label">${escapeHtml(wf)}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Partially Implemented -->
          ${(project.implementationStatus.partiallyImplemented || []).length > 0 ? `
            <div class="status-column status-col-partial">
              <div class="status-col-header">
                <span class="status-indicator-dot dot-partial"></span>
                <h4>Partially Implemented (${project.implementationStatus.partiallyImplemented.length})</h4>
              </div>
              <ul class="status-list">
                ${project.implementationStatus.partiallyImplemented.map(pf => `
                  <li class="status-list-item item-partial">
                    <span class="status-icon">⏳</span>
                    <span class="status-label">${escapeHtml(pf)}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}

          <!-- Planned Concepts -->
          <div class="status-column status-col-planned">
            <div class="status-col-header">
              <span class="status-indicator-dot dot-planned"></span>
              <h4>Planned Concepts &amp; Future Specs (${(project.implementationStatus.plannedFeatures || []).length})</h4>
            </div>
            <ul class="status-list">
              ${(project.implementationStatus.plannedFeatures || []).map(pl => `
                <li class="status-list-item item-planned">
                  <span class="status-icon">✦</span>
                  <span class="status-label">${escapeHtml(pl)}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </section>
    ` : ''}

    <!-- Interactive Architecture Explorer Section (for NER ACCESS & LINKEDX) -->
    ${hasArchModel ? `
      <section class="detail-architecture-explorer-section">
        <div class="arch-section-header glass-panel">
          <div class="arch-header-badge">
            <span class="badge-sparkle">✦</span>
            <span>VERIFIED ARCHITECTURAL DECONSTRUCTION</span>
          </div>
          <h2 class="arch-section-title">Interactive System Pipeline &amp; Data Flow</h2>
          <p class="arch-section-desc">
            Explore authentic system relationships, data inputs/outputs, and implementation status. Click any node to inspect technical specifications.
          </p>
        </div>
        <div id="detail-arch-explorer-container" class="detail-arch-container"></div>
      </section>
    ` : ''}

    <!-- Real Implementation Screenshots Gallery -->
    ${project.screenshots && project.screenshots.length > 0 ? `
      <section class="detail-screenshots-section glass-panel">
        <div class="section-card-header">
          <span class="section-tag-pill">INTERFACE EVIDENCE</span>
          <h2 class="section-card-title">Real Interface &amp; System Screenshots</h2>
          <p class="section-lead-sub">Authentic application captures directly reflecting the production implementation.</p>
        </div>
        <div class="screenshots-gallery-grid">
          ${project.screenshots.map((s, idx) => `
            <div class="screenshot-card" data-screenshot-idx="${idx}">
              <div class="screenshot-img-wrapper">
                <img src="${escapeHtml(s.url)}" alt="${escapeHtml(s.title || project.name)}" class="screenshot-img" loading="lazy" />
                <span class="screenshot-tag">${escapeHtml(s.tag || 'Application UI')}</span>
              </div>
              <div class="screenshot-meta">
                <h4 class="screenshot-title">${escapeHtml(s.title || project.name)}</h4>
                <p class="screenshot-caption">${escapeHtml(s.caption)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    ` : ''}

    <!-- Interactive Working Demo & Project Lab Widget -->
    ${project.demo ? `
      <section class="detail-demo-widget-section glass-panel">
        <div class="demo-widget-content">
          <div class="demo-widget-badge">
            <span class="pulse-indicator"></span>
            <span>WORKING DEMONSTRATION &amp; SIMULATION</span>
          </div>
          <h3 class="demo-widget-title">${escapeHtml(project.demo.title)}</h3>
          <p class="demo-widget-desc">${escapeHtml(project.demo.desc)}</p>
          <div class="demo-widget-actions">
            <a href="${escapeHtml(project.demo.labTabUrl || labUrl)}" data-route="${escapeHtml(project.demo.labTabUrl || labUrl)}" class="btn-primary" id="btn-launch-demo-lab">
              <span>🔬 Launch Interactive Simulator in Project Lab &rarr;</span>
            </a>
            ${project.live ? `
              <a href="${escapeHtml(project.live)}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                <span>Open Live Deployment ↗</span>
              </a>
            ` : ''}
          </div>
        </div>
      </section>
    ` : ''}

    <!-- Key Capabilities & Features -->
    <section class="detail-features-section glass-panel">
      <h2 class="section-heading">Verified Features &amp; Systems</h2>
      <ul class="features-checklist">
        ${project.features.map(f => `
          <li class="feature-item">
            <span class="feature-bullet">&check;</span>
            <span class="feature-text">${escapeHtml(f)}</span>
          </li>
        `).join('')}
      </ul>
    </section>

    <!-- Author's Actual Contribution (if available) -->
    ${project.myContribution ? `
      <section class="detail-contribution-section glass-panel">
        <div class="section-card-header">
          <span class="section-tag-pill">ENGINEERING OWNERSHIP</span>
          <h2 class="section-card-title">My Actual Contribution &amp; Leadership</h2>
        </div>
        <div class="contribution-callout">
          <div class="contribution-icon">⚡</div>
          <div class="contribution-body">
            <p class="contribution-text">${escapeHtml(project.myContribution)}</p>
          </div>
        </div>
      </section>
    ` : ''}

    <!-- Engineering Challenges & Proven Outcomes -->
    <section class="detail-challenges-grid">
      <div class="challenge-block glass-panel">
        <h3>Technical Constraints Overcome</h3>
        <ul class="clean-list">
          ${project.challenges.map(c => `
            <li><span class="list-accent">&bull;</span> ${escapeHtml(c)}</li>
          `).join('')}
        </ul>
      </div>

      <div class="challenge-block glass-panel">
        <h3>Measurable Outcomes &amp; Deliverables</h3>
        <ul class="clean-list">
          ${project.outcomes.map(o => `
            <li><span class="list-accent">&check;</span> ${escapeHtml(o)}</li>
          `).join('')}
        </ul>
      </div>
    </section>

    <!-- Technical & Architectural Decisions (if available) -->
    ${project.technicalDecisions && project.technicalDecisions.length > 0 ? `
      <section class="detail-decisions-section glass-panel">
        <div class="section-card-header">
          <span class="section-tag-pill">SYSTEM RATIONALE</span>
          <h2 class="section-card-title">Technical Decisions Supported by Code</h2>
        </div>
        <div class="decisions-list">
          ${project.technicalDecisions.map(td => `
            <div class="decision-card">
              <span class="decision-bullet">✦</span>
              <p class="decision-text">${escapeHtml(td)}</p>
            </div>
          `).join('')}
        </div>
      </section>
    ` : ''}

    <!-- Transparent Limitations & Future Roadmap (if available) -->
    ${project.limitations && project.limitations.length > 0 ? `
      <section class="detail-limitations-section glass-panel">
        <div class="section-card-header">
          <span class="section-tag-pill">HONEST LIMITATIONS</span>
          <h2 class="section-card-title">Current Limitations &amp; Next Engineering Steps</h2>
          <p class="section-lead-sub">Accurate assessment of existing constraints without fabricated claims.</p>
        </div>
        <div class="limitations-list">
          ${project.limitations.map(lim => `
            <div class="limitation-item">
              <span class="limitation-icon">⚠️</span>
              <p class="limitation-text">${escapeHtml(lim)}</p>
            </div>
          `).join('')}
        </div>
      </section>
    ` : ''}

    <!-- Technology Stack -->
    <section class="detail-stack-section glass-panel">
      <h3 class="section-subheading">Technology Stack &amp; Toolchain</h3>
      <div class="detail-stack-tags">
        ${project.stack.map(s => `<span class="stack-tag">${escapeHtml(s)}</span>`).join('')}
      </div>
      ${project.roadmap ? `
        <div class="roadmap-note">
          <strong>Production Status &amp; Future Roadmap:</strong>
          <p>${escapeHtml(project.roadmap)}</p>
        </div>
      ` : ''}
    </section>

    <!-- Prev / Next Project Footer Navigation -->
    <nav class="project-pagination-footer" aria-label="Previous and Next Project">
      <a href="/projects/${prevProject.slug}" class="pagination-card glass-panel prev-card" data-route="/projects/${prevProject.slug}">
        <span class="pagination-sub">&larr; Previous Architecture</span>
        <strong class="pagination-title">${escapeHtml(prevProject.name)}</strong>
      </a>
      <a href="/projects/${nextProject.slug}" class="pagination-card glass-panel next-card" data-route="/projects/${nextProject.slug}">
        <span class="pagination-sub">Next Architecture &rarr;</span>
        <strong class="pagination-title">${escapeHtml(nextProject.name)}</strong>
      </a>
    </nav>
  `;

  // Mount 3D Scene, Architecture Explorer, and Lightbox Handlers
  requestAnimationFrame(() => {
    currentScene = mountProjectScene('detail-3d-canvas', project.slug);
    
    // Wire up stage reset camera button
    const resetBtn = container.querySelector('#reset-stage-cam-btn');
    if (resetBtn && currentScene && typeof currentScene.resetCamera === 'function') {
      resetBtn.addEventListener('click', () => {
        currentScene.resetCamera();
      });
    }

    // Mount Architecture Explorer if container present
    const archContainer = container.querySelector('#detail-arch-explorer-container');
    if (archContainer && hasArchModel) {
      currentArchExplorer = renderArchitectureExplorer(archContainer, { defaultModel: project.slug });
    }
  });

  return {
    element: container,
    cleanup: () => {
      if (currentScene && typeof currentScene.destroy === 'function') {
        try { currentScene.destroy(); } catch (err) {}
      }
      currentScene = null;

      if (currentArchExplorer && typeof currentArchExplorer.destroy === 'function') {
        try { currentArchExplorer.destroy(); } catch (err) {}
      }
      currentArchExplorer = null;
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
