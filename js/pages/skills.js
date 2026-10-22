/**
 * ATLAS — TECHNICAL SKILLS & CAPABILITIES PAGE (/skills)
 * Verified technical repertoire organized into 4 clear categories:
 * 1. Programming Languages
 * 2. Web Development
 * 3. AI / Machine Learning
 * 4. Tools and Platforms
 * 
 * Interactive category filtering, search, hover effects, and authentic project attribution.
 * Zero invented percentages or proficiency vanity rankings.
 */
import { SKILLS_DATA, SKILLS_CATEGORIES, CREATIVE_INTERESTS_DATA } from '../data/skills.js';
import { navigateTo } from '../router.js';
import { refreshScrollReveals } from '../components/motion.js';

let activeCategory = 'all';
let searchQuery = '';
let viewMode = 'categorized'; // 'categorized' | 'grid'

const CATEGORY_METADATA = SKILLS_CATEGORIES;

const PROJECT_NAME_TO_SLUG = {
  'intellipdf': 'intellipdf',
  'ner access': 'solvex-ner',
  'ner access (solvex 2.0)': 'solvex-ner',
  'solvex (ner platform 2.0)': 'solvex-ner',
  'solvex': 'solvex-ner',
  'linkedx': 'linkx',
  'linkx': 'linkx',
  'atlasai': 'atlas-ai',
  'atlas-ai': 'atlas-ai',
  'smart agriculture & conservation': 'smart-agriculture',
  'smart agriculture': 'smart-agriculture',
  'bumblebee base isolation': 'base-isolation',
  'base isolation': 'base-isolation',
  'nvidia-ai-chat': 'nvidia-ai-chat',
  'nvidia ai chat': 'nvidia-ai-chat',
  'atlas 3d portfolio': 'atlas-portfolio',
  'all 8 verified repositories': 'projects'
};

export function renderSkillsPage() {
  const container = document.createElement('div');
  container.className = 'page-container page-skills';

  container.innerHTML = `
    <header class="page-header">
      <div class="page-badge"><span class="badge-dot"></span>REPERTOIRE &amp; PURSUITS</div>
      <h1 class="page-title">Skills &amp; Capabilities</h1>
      <p class="page-lead">
        A dual representation of technical competencies grounded strictly in delivered software repositories,
        alongside genuine personal creative mediums and strategic interests outside technology.
      </p>
    </header>

    <!-- ============================================================
         SECTION 1: TECHNICAL SKILLS
         Programming, Web Development, AI/ML, Developer Tools
         ============================================================ -->
    <section class="skills-major-section" id="technical-skills" aria-labelledby="technical-skills-title">
      <div class="skills-major-header">
        <div class="section-label-chip">
          <span class="chip-dot"></span>
          <span>Core Engineering Repertoire</span>
        </div>
        <h2 class="skills-major-title" id="technical-skills-title">Technical Skills</h2>
        <p class="skills-major-sub">
          Engineering disciplines backed by active code across verified open-source repositories and hackathon builds.
          Grounded strictly in working software with zero invented percentages.
        </p>
      </div>

      <!-- Toolbar: Search, 4 Category Filter Pills & View Mode Toggle -->
      <div class="skills-toolbar" role="toolbar" aria-label="Technical Skills Filter Toolbar">
        <div class="search-input-wrapper">
          <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="search" 
            id="skills-search-input" 
            class="skills-search-input" 
            placeholder="Filter technical skills (e.g. Python, RAG, WebGL, Docker)..." 
            value="${escapeHtml(searchQuery)}"
            aria-label="Search technical skills"
          />
          <button id="clear-skills-search-btn" class="clear-search-btn" style="display: ${searchQuery ? 'inline-flex' : 'none'};" title="Clear search">×</button>
        </div>

        <div class="filter-pills" role="tablist" aria-label="Filter skills by discipline">
          <button class="filter-pill ${activeCategory === 'all' ? 'active' : ''}" data-cat="all">All (${SKILLS_DATA.length})</button>
          <button class="filter-pill ${activeCategory === 'languages' ? 'active' : ''}" data-cat="languages">Programming</button>
          <button class="filter-pill ${activeCategory === 'web' ? 'active' : ''}" data-cat="web">Web Development</button>
          <button class="filter-pill ${activeCategory === 'ai' ? 'active' : ''}" data-cat="ai">AI/ML</button>
          <button class="filter-pill ${activeCategory === 'tools' ? 'active' : ''}" data-cat="tools">Developer Tools</button>
        </div>

        <div class="skills-view-toggle" role="group" aria-label="Skills View Layout">
          <button type="button" class="view-toggle-btn ${viewMode === 'categorized' ? 'active' : ''}" id="btn-view-categorized" title="Group by readable categories">
            <span>⊞ By Discipline</span>
          </button>
          <button type="button" class="view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}" id="btn-view-grid" title="Display flat grid matrix">
            <span>𝄜 Flat Grid</span>
          </button>
        </div>
      </div>

      <!-- Skills Container Target -->
      <div id="skills-display-target" class="skills-display-container">
        <!-- Injected via renderSkillsContent -->
      </div>

      <!-- Verification Manifesto Note -->
      <div class="skills-manifesto-card glass-panel">
        <div class="manifesto-content">
          <h3>Repository Verification Standard</h3>
          <p>
            Every technical skill listed above is backed by working code in the active GitHub repositories
            under <strong>@varanalagesh19-dot</strong>. Arbitrary skill percentage bars are omitted
            in favor of demonstrable project outcomes, unit tests, and production code.
          </p>
        </div>
        <div class="manifesto-action">
          <a href="/projects" class="btn-secondary" data-route="/projects">Inspect Verification Repositories &rarr;</a>
        </div>
      </div>
    </section>

    <!-- ============================================================
         SECTION 2: CREATIVE SKILLS & INTERESTS
         Photography, Wildlife, Videography, Drawing, Chess, Comics
         ============================================================ -->
    <section class="skills-major-section creative-skills-section" id="creative-skills-interests" aria-labelledby="creative-skills-title">
      <div class="skills-major-header">
        <div class="section-label-chip chip-creative">
          <span class="chip-dot"></span>
          <span>Personal Passions &amp; Creative Disciplines</span>
        </div>
        <h2 class="skills-major-title" id="creative-skills-title">Creative Skills &amp; Interests</h2>
        <p class="skills-major-sub">
          Creative mediums, observational arts, and strategic pursuits explored genuinely for creative balance.
          Presented as personal pursuits rather than commercial credentials, with zero invented proficiency ratings.
        </p>
      </div>

      <div class="creative-skills-grid" role="list">
        ${CREATIVE_INTERESTS_DATA.map(interest => `
          <article class="creative-skill-card glass-panel" role="listitem" tabindex="0">
            <div class="creative-card-sheen" aria-hidden="true"></div>
            <div class="creative-card-top">
              <span class="creative-icon" aria-hidden="true">${interest.icon}</span>
              <span class="hobby-category-badge ${interest.badgeClass}">${escapeHtml(interest.typeBadge)}</span>
            </div>
            <h3 class="creative-card-title">${escapeHtml(interest.name)}</h3>
            <span class="creative-category-sub">${escapeHtml(interest.category)}</span>
            <p class="creative-card-desc">${escapeHtml(interest.desc)}</p>
            
            <div class="creative-focus-pills">
              ${interest.focusAreas.map(f => `<span class="focus-pill">${escapeHtml(f)}</span>`).join('')}
            </div>

            <div class="creative-card-footer">
              <span class="creative-note">${escapeHtml(interest.note)}</span>
              <a href="/about#beyond-the-code" data-route="/about#beyond-the-code" class="creative-gallery-link">
                View in Visual Gallery &rarr;
              </a>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;

  setupSkillsInteractions(container);
  renderSkillsContent(container);

  return {
    element: container,
    cleanup: () => {}
  };
}

function filterSkills() {
  return SKILLS_DATA.filter(skill => {
    if (activeCategory !== 'all' && skill.category !== activeCategory) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      const matchName = skill.name.toLowerCase().includes(q);
      const matchDesc = skill.desc.toLowerCase().includes(q);
      const matchCat = (skill.categoryLabel || '').toLowerCase().includes(q);
      const matchProj = skill.projects && skill.projects.some(p => p.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchCat && !matchProj) return false;
    }
    return true;
  });
}

function renderSkillCardHtml(skill) {
  return `
    <article class="skill-card glass-panel" data-id="${skill.id}">
      <div class="skill-lighting-sheen" aria-hidden="true"></div>
      <div class="skill-card-top">
        <span class="skill-icon" aria-hidden="true">${skill.icon}</span>
        <span class="skill-category-badge">${escapeHtml(skill.categoryLabel || skill.category)}</span>
      </div>
      <h3 class="skill-name">${escapeHtml(skill.name)}</h3>
      <p class="skill-desc">${escapeHtml(skill.desc)}</p>
      
      <div class="skill-attribution-wrapper">
        <span class="attribution-label">Applied In Verified Work:</span>
        <div class="attribution-pills">
          ${skill.projects.map(p => {
            const normalizedP = p.toLowerCase().trim();
            const slug = PROJECT_NAME_TO_SLUG[normalizedP];
            if (slug && slug !== 'projects') {
              return `
                <a href="/projects/${slug}" data-route="/projects/${slug}" class="attribution-tag is-link" title="Open ${escapeHtml(p)} Case Study">
                  ${escapeHtml(p)} &nearr;
                </a>
              `;
            } else if (slug === 'projects') {
              return `
                <a href="/projects" data-route="/projects" class="attribution-tag is-link" title="Open All Projects">
                  ${escapeHtml(p)} &nearr;
                </a>
              `;
            }
            return `<span class="attribution-tag">${escapeHtml(p)}</span>`;
          }).join('')}
        </div>
      </div>
    </article>
  `;
}

function renderSkillsContent(container) {
  const target = container.querySelector('#skills-display-target');
  if (!target) return;

  const filtered = filterSkills();

  if (filtered.length === 0) {
    target.innerHTML = `
      <div class="empty-state glass-panel" style="padding: 3.5rem 2rem; text-align: center;">
        <div class="empty-icon" style="font-size: 2.2rem; margin-bottom: 12px;">🔍</div>
        <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: var(--paper); margin-bottom: 8px;">No competencies match your search</h3>
        <p style="color: var(--mist); font-size: 0.9375rem; max-width: 480px; margin: 0 auto 1.5rem auto;">
          No technology matched "${escapeHtml(searchQuery)}" in this filter. Try searching for core languages like "Python" or architectures like "RAG".
        </p>
        <button id="reset-skills-btn" class="btn-primary">Reset Filter</button>
      </div>
    `;
    const resetBtn = target.querySelector('#reset-skills-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        activeCategory = 'all';
        searchQuery = '';
        const searchInput = container.querySelector('#skills-search-input');
        if (searchInput) searchInput.value = '';
        const clearBtn = container.querySelector('#clear-skills-search-btn');
        if (clearBtn) clearBtn.style.display = 'none';
        container.querySelectorAll('.filter-pill').forEach(pill => {
          pill.classList.toggle('active', pill.dataset.cat === 'all');
        });
        renderSkillsContent(container);
      });
    }
    return;
  }

  // If viewMode is 'grid' or an individual category is selected: render flat grid
  if (viewMode === 'grid' || activeCategory !== 'all') {
    target.innerHTML = `
      <div class="skills-grid">
        ${filtered.map(renderSkillCardHtml).join('')}
      </div>
    `;
    refreshScrollReveals(target);
    return;
  }

  // Categorized View: Group by the 4 clear categories
  const categoriesPresent = Object.keys(CATEGORY_METADATA);
  
  target.innerHTML = categoriesPresent.map(catKey => {
    const skillsInCat = filtered.filter(s => s.category === catKey);
    if (skillsInCat.length === 0) return '';
    const meta = CATEGORY_METADATA[catKey] || { label: catKey, icon: '•', desc: '' };

    return `
      <section class="skill-category-section" aria-label="${escapeHtml(meta.label)}">
        <div class="category-section-header">
          <div class="cat-header-left">
            <span class="cat-icon-frame" aria-hidden="true">${meta.icon}</span>
            <div class="cat-header-titles">
              <h2 class="cat-section-title">${escapeHtml(meta.label)}</h2>
              <p class="cat-section-desc">${escapeHtml(meta.desc)}</p>
            </div>
          </div>
          <span class="cat-count-badge">${skillsInCat.length} verified</span>
        </div>
        <div class="skills-grid">
          ${skillsInCat.map(renderSkillCardHtml).join('')}
        </div>
      </section>
    `;
  }).join('');
  refreshScrollReveals(target);
}

function setupSkillsInteractions(container) {
  const searchInput = container.querySelector('#skills-search-input');
  const clearBtn = container.querySelector('#clear-skills-search-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.style.display = searchQuery ? 'inline-flex' : 'none';
      }
      renderSkillsContent(container);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchQuery = '';
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      clearBtn.style.display = 'none';
      renderSkillsContent(container);
    });
  }

  const pills = container.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.cat;
      renderSkillsContent(container);
    });
  });

  const btnCategorized = container.querySelector('#btn-view-categorized');
  const btnGrid = container.querySelector('#btn-view-grid');

  if (btnCategorized && btnGrid) {
    btnCategorized.addEventListener('click', () => {
      viewMode = 'categorized';
      btnCategorized.classList.add('active');
      btnGrid.classList.remove('active');
      renderSkillsContent(container);
    });

    btnGrid.addEventListener('click', () => {
      viewMode = 'grid';
      btnGrid.classList.add('active');
      btnCategorized.classList.remove('active');
      renderSkillsContent(container);
    });
  }
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
