/**
 * ATLAS — ABOUT PAGE COMPONENT (/about)
 * Architecture:
 *   1. Minimal Personal Profile Hero (ONLY photo, name, short intro, and two buttons).
 *      - Subtle 3D perspective tilt animation on photo frame (ProfilePhoto3DEffect).
 *      - ZERO project screenshots in profile hero.
 *   2. Transparent Rotating Slide Carousel:
 *      - Slide 1: Education & Journey (B.E. CSE AIML at Kathir College of Engineering 2025–2029 + journey)
 *      - Slide 2: Technical Interests (Core competencies & system design)
 *      - Slide 3: Featured Projects (Project images NER ACCESS & LINKEDX strictly contained here)
 *      - Slide 4: Contact & Professional Links (GitHub, LinkedIn, Email, Contact form)
 *      - Slide 5: Resume & Credentials (ATS-friendly curriculum vitae, Print PDF, Plaintext download/copy)
 *   3. Carousel interactions:
 *      - Exactly one slide visible at a time (inactive slides hidden via accessible display:none)
 *      - Prev/Next arrows, slide indicator "1 / 5", touch swipe, keyboard arrows
 *      - In-slide "View Details" expandable drawer for each section without leaving the page
 *      - Gentle auto-rotation (8s) pausing on hover/focus and stopping permanently on user interaction
 */

import { showToast } from '../components/toast.js';

/**
 * Refined 3D Photo Presentation Controller
 * - Gentle perspective tilt tracking pointer movement with smooth lerp dampening.
 * - Restrained metallic-gold frame highlights with soft specular reflection.
 * - Respects prefers-reduced-motion with a static, pristine presentation.
 * - Clean event listener management and leak-free destruction.
 */
class ProfilePhoto3DEffect {
  constructor(element) {
    this.el = element;
    this.card = element ? element.querySelector('.photo-depth-card') : null;
    this.sheen = element ? element.querySelector('.photo-specular-sheen') : null;
    this.glow = element ? element.querySelector('.photo-ambient-glow') : null;
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
      const nx = (x / rect.width) * 2 - 1; // -1 to 1
      const ny = (y / rect.height) * 2 - 1; // -1 to 1

      // Gentle, restrained tilt (max 6.5 deg)
      this.targetRotX = -ny * 6.5;
      this.targetRotY = nx * 7.5;
      this.isHovered = true;

      if (this.sheen) {
        this.sheen.style.opacity = '0.35';
        this.sheen.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 235, 175, 0.45) 0%, rgba(255, 215, 130, 0.1) 45%, transparent 70%)`;
      }

      if (this.glow) {
        this.glow.style.opacity = '1';
        this.glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(203, 179, 232, 0.40) 0%, rgba(212, 255, 63, 0.20) 40%, transparent 70%)`;
      }
    };

    this.onMouseLeave = () => {
      this.targetRotX = 0;
      this.targetRotY = 0;
      this.isHovered = false;
      if (this.sheen) {
        this.sheen.style.opacity = '0';
      }
      if (this.glow) {
        this.glow.style.opacity = '0.7';
        this.glow.style.background = `radial-gradient(circle at 50% 50%, rgba(203, 179, 232, 0.28) 0%, transparent 70%)`;
      }
    };

    this.el.addEventListener('mousemove', this.onMouseMove);
    this.el.addEventListener('mouseleave', this.onMouseLeave);

    const render = () => {
      this.animId = requestAnimationFrame(render);
      this.currentRotX += (this.targetRotX - this.currentRotX) * 0.1;
      this.currentRotY += (this.targetRotY - this.currentRotY) * 0.1;

      if (Math.abs(this.currentRotX) > 0.001 || Math.abs(this.currentRotY) > 0.001 || this.isHovered) {
        this.card.style.transform = `perspective(1000px) rotateX(${this.currentRotX.toFixed(2)}deg) rotateY(${this.currentRotY.toFixed(2)}deg) translateZ(${this.isHovered ? '8px' : '0px'})`;
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
    this.glow = null;
  }
}

export const AboutPage = {
  profilePhotoEffect: null,
  currentSlide: 0,
  totalSlides: 5,
  autoRotateTimer: null,
  autoRotateIntervalMs: 8000,
  userInteracted: false,
  isTransitioning: false,
  transitionTimer: null,
  boundKeyHandler: null,

  render() {
    return `
      <div class="page-container page-about-editorial" aria-label="About Alagesh Varan">
        
        <!-- ====================================================================
             1. MINIMAL PERSONAL PROFILE HERO
             Contains ONLY: Original Photo, Name, Short Intro, and Two Buttons.
             No project screenshots, no separate sculptures, no cluttered cards.
             ==================================================================== -->
        <section class="about-hero-section" id="about-hero" aria-label="Personal Profile">
          <div class="about-hero-grid">
            
            <!-- Left Column: Name, Short Introduction, and Two Buttons -->
            <div class="about-hero-narrative">
              <div class="about-eyebrow">ABOUT ME</div>
              <h1 class="about-hero-name">Alagesh Varan</h1>
              <p class="about-hero-intro">
                I'm a B.E. CSE AIML student at Kathir College of Engineering, interested in AI/ML, software development, and building practical technology projects.
              </p>

              <!-- Actions Row: Primary buttons + Monogram Intro trigger -->
              <div class="about-actions-row">
                <a href="/projects" data-route="/projects" class="btn-primary" id="hero-explore-work-btn">
                  <span>Explore My Work &rarr;</span>
                </a>
                <button type="button" class="btn-secondary" id="hero-view-details-btn">
                  <span>View Details &darr;</span>
                </button>
                <button type="button" class="btn-secondary btn-monogram-replay" id="btn-replay-monogram" title="Replay cinematic ATLAS monogram intro animation" aria-label="Replay cinematic ATLAS monogram intro animation">
                  <span aria-hidden="true">✦</span>
                  <span>Monogram Intro</span>
                </button>
              </div>
            </div>

            <!-- Right Column: Original Personal Photo with Subtle 3D Tilt Presentation -->
            <div class="about-hero-photo-col">
              <div class="profile-photo-wrapper" id="profile-photo-3d-wrap" aria-label="Alagesh Varan - Profile Photo">
                <div class="photo-ambient-glow" aria-hidden="true"></div>
                <div class="photo-depth-card">
                  <div class="photo-gold-frame">
                    <img 
                      src="/assets/images/profile.jpg" 
                      alt="Alagesh Varan - Profile Photo" 
                      class="profile-photo-img"
                      loading="eager"
                    />
                    <div class="photo-specular-sheen" aria-hidden="true"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <!-- ====================================================================
             2. TRANSPARENT ROTATING SLIDE CAROUSEL
             Houses all additional sections (Education, Technical Interests,
             Featured Projects, Contact & Links, Resume & Credentials).
             Displays strictly ONE slide at a time.
             ==================================================================== -->
        <section class="about-carousel-section" id="about-carousel" aria-label="About Information Slides" tabindex="0">
          
          <!-- Carousel Navigation Bar: Category Pills + Prev/Next Arrows + Counter -->
          <div class="carousel-header-controls glass-panel">
            <div class="carousel-nav-pills" role="tablist" aria-label="Select About Slide">
              <button type="button" class="carousel-nav-pill active" data-slide-index="0" role="tab" aria-selected="true" id="tab-slide-0">
                <span class="pill-num">01</span>
                <span class="pill-text">Education &amp; Journey</span>
              </button>
              <button type="button" class="carousel-nav-pill" data-slide-index="1" role="tab" aria-selected="false" id="tab-slide-1">
                <span class="pill-num">02</span>
                <span class="pill-text">Technical Interests</span>
              </button>
              <button type="button" class="carousel-nav-pill" data-slide-index="2" role="tab" aria-selected="false" id="tab-slide-2">
                <span class="pill-num">03</span>
                <span class="pill-text">Featured Projects</span>
              </button>
              <button type="button" class="carousel-nav-pill" data-slide-index="3" role="tab" aria-selected="false" id="tab-slide-3">
                <span class="pill-num">04</span>
                <span class="pill-text">Contact &amp; Links</span>
              </button>
              <button type="button" class="carousel-nav-pill" data-slide-index="4" role="tab" aria-selected="false" id="tab-slide-4">
                <span class="pill-num">05</span>
                <span class="pill-text">Resume &amp; Credentials</span>
              </button>
            </div>

            <div class="carousel-arrow-controls">
              <button type="button" class="carousel-arrow-btn prev-btn" id="carousel-prev-btn" aria-label="Previous slide" title="Previous slide (Left Arrow)">
                <span>&larr;</span>
              </button>
              <div class="carousel-indicator-box">
                <span class="carousel-counter" id="carousel-counter" aria-live="polite">1 / 5</span>
              </div>
              <button type="button" class="carousel-arrow-btn next-btn" id="carousel-next-btn" aria-label="Next slide" title="Next slide (Right Arrow)">
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          <!-- Carousel Slides Track -->
          <div class="carousel-slides-viewport">
            
            <!-- ----------------------------------------------------------------
                 SLIDE 1: EDUCATION & JOURNEY
                 ---------------------------------------------------------------- -->
            <article class="carousel-slide active-slide glass-panel" id="slide-0" role="tabpanel" aria-labelledby="tab-slide-0" data-slide-idx="0">
              <div class="slide-header">
                <div class="slide-eyebrow">ACADEMIC &amp; LEARNING JOURNEY</div>
                <h2 class="slide-title">Education &amp; Journey</h2>
                <p class="slide-lead">
                  Current B.E. Computer Science &amp; Engineering (AI &amp; ML) education at Kathir College of Engineering (2025–2029) alongside hackathon prototypes, open-source architectures, and engineering milestones.
                </p>
              </div>

              <!-- Compact Primary Summary Card -->
              <div class="slide-compact-card">
                <div class="compact-card-header">
                  <span class="compact-badge-edu">ACADEMIC DEGREE</span>
                  <span class="compact-period">2025 – 2029 (Current)</span>
                </div>
                <h3 class="compact-card-title">Bachelor of Engineering (B.E.) — Computer Science &amp; Engineering (AI &amp; ML)</h3>
                <h4 class="compact-card-subtitle">Kathir College of Engineering · Anna University, Chennai</h4>
                <p class="compact-card-desc">
                  Specializing in Artificial Intelligence, Machine Learning algorithms, Data Structures, and systems programming with a focus on vector retrieval, offline routing heuristics, and edge hardware telemetry.
                </p>
                <div class="compact-tags-row">
                  <span class="tech-tag">Artificial Intelligence</span>
                  <span class="tech-tag">Machine Learning</span>
                  <span class="tech-tag">Data Structures &amp; Algorithms</span>
                  <span class="tech-tag">Anna University (2025–2029)</span>
                </div>
              </div>

              <!-- Slide In-Page Details Disclosure Action -->
              <div class="slide-toggle-row">
                <button type="button" class="btn-slide-toggle" data-slide-toggle="0" aria-expanded="false" aria-controls="slide-details-0">
                  <span class="toggle-icon">&darr;</span>
                  <span class="toggle-text">View Journey Details</span>
                </button>
              </div>

              <!-- Expandable In-Slide Journey Details -->
              <div class="slide-expanded-details" id="slide-details-0" hidden>
                <div class="journey-filter-wrapper">
                  <span class="filter-label">Filter Milestones:</span>
                  <div class="filter-pills-row" id="timeline-filter-pills">
                    <button type="button" class="filter-pill active" data-timeline-filter="all">All (5)</button>
                    <button type="button" class="filter-pill" data-timeline-filter="education">Education (1)</button>
                    <button type="button" class="filter-pill" data-timeline-filter="hackathons">Hackathons (1)</button>
                    <button type="button" class="filter-pill" data-timeline-filter="projects">Open Source (2)</button>
                    <button type="button" class="filter-pill" data-timeline-filter="learning">Specialization (1)</button>
                  </div>
                </div>

                <div class="journey-timeline-stream" id="journey-timeline-stream">
                  <!-- Milestone 1 -->
                  <div class="journey-node-card" data-category="education">
                    <div class="node-marker-col"><span class="node-dot"></span><span class="node-line"></span></div>
                    <div class="node-body">
                      <div class="node-header">
                        <span class="node-category-tag edu">ACADEMIC DEGREE</span>
                        <time class="node-period">2025 – 2029</time>
                      </div>
                      <h4 class="node-title">Bachelor of Engineering (B.E.) — CSE (AI &amp; ML)</h4>
                      <div class="node-org">Kathir College of Engineering · Anna University</div>
                      <p class="node-desc">Undergraduate engineering coursework in AI/ML, discrete math, database systems, and object-oriented algorithms.</p>
                    </div>
                  </div>

                  <!-- Milestone 2 -->
                  <div class="journey-node-card" data-category="hackathons">
                    <div class="node-marker-col"><span class="node-dot"></span><span class="node-line"></span></div>
                    <div class="node-body">
                      <div class="node-header">
                        <span class="node-category-tag hack">HACKATHON PROTOTYPE</span>
                        <time class="node-period">2026</time>
                      </div>
                      <h4 class="node-title">Smart India Hackathon (SIH 2026 / SIH26002) — Team Solvex</h4>
                      <div class="node-org">National Innovation Competition · Government of India</div>
                      <p class="node-desc">Engineered SOLVEX NER: offline-first route heuristics, disaster telemetry, and peer mesh sync for isolated mountainous corridors.</p>
                      <a href="/projects/solvex-ner" data-route="/projects/solvex-ner" class="node-inline-link">Inspect Solvex Architecture &rarr;</a>
                    </div>
                  </div>

                  <!-- Milestone 3 -->
                  <div class="journey-node-card" data-category="projects">
                    <div class="node-marker-col"><span class="node-dot"></span><span class="node-line"></span></div>
                    <div class="node-body">
                      <div class="node-header">
                        <span class="node-category-tag oss">OPEN SOURCE RAG</span>
                        <time class="node-period">2025 – 2026</time>
                      </div>
                      <h4 class="node-title">IntelliPDF &amp; atlasAI — Production AI Document Engines</h4>
                      <div class="node-org">Open Source Releases · GitHub</div>
                      <p class="node-desc">Constructed LangChain + ChromaDB vector embeddings for grounded multi-page exam synthesis with verifiable page citations.</p>
                      <a href="/projects/intellipdf" data-route="/projects/intellipdf" class="node-inline-link">Explore IntelliPDF &rarr;</a>
                    </div>
                  </div>

                  <!-- Milestone 4 -->
                  <div class="journey-node-card" data-category="projects">
                    <div class="node-marker-col"><span class="node-dot"></span><span class="node-line"></span></div>
                    <div class="node-body">
                      <div class="node-header">
                        <span class="node-category-tag sys">APPLIED HARDWARE</span>
                        <time class="node-period">2025 – 2026</time>
                      </div>
                      <h4 class="node-title">Smart Agriculture IoT &amp; Seismic Base Isolation Physics</h4>
                      <div class="node-org">Applied Engineering Prototypes</div>
                      <p class="node-desc">Built ESP32 telemetry nodes for automated soil hydration evaluation and interactive earthquake foundation physics demonstration.</p>
                      <a href="/projects/smart-agriculture" data-route="/projects/smart-agriculture" class="node-inline-link">View Agriculture IoT &rarr;</a>
                    </div>
                  </div>

                  <!-- Milestone 5 -->
                  <div class="journey-node-card" data-category="learning">
                    <div class="node-marker-col"><span class="node-dot"></span><span class="node-line"></span></div>
                    <div class="node-body">
                      <div class="node-header">
                        <span class="node-category-tag learn">SPATIAL COMPUTING</span>
                        <time class="node-period">2025 – 2026</time>
                      </div>
                      <h4 class="node-title">Three.js WebGL Graphics &amp; ATLAS Portfolio Platform</h4>
                      <div class="node-org">ATLAS 3.0 Platform Architecture</div>
                      <p class="node-desc">Engineered custom WebGL shaders, client-side SPA routing, sandboxed developer tool suite, and responsive glass UI system.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <!-- ----------------------------------------------------------------
                 SLIDE 2: TECHNICAL INTERESTS
                 ---------------------------------------------------------------- -->
            <article class="carousel-slide glass-panel" id="slide-1" role="tabpanel" aria-labelledby="tab-slide-1" data-slide-idx="1" hidden>
              <div class="slide-header">
                <div class="slide-eyebrow">CORE DISCIPLINES</div>
                <h2 class="slide-title">Technical Interests</h2>
                <p class="slide-lead">
                  My actual listed interests and engineering focus areas: machine learning architectures, modern web systems, algorithms, and edge prototyping.
                </p>
              </div>

              <!-- Compact 4-Card Capabilities Grid -->
              <div class="capabilities-grid-compact">
                <div class="capability-card-compact">
                  <div class="cap-icon-box">🧠</div>
                  <h3 class="cap-title">Artificial Intelligence &amp; ML</h3>
                  <p class="cap-desc">Retrieval-Augmented Generation (RAG), vector embeddings in FAISS/ChromaDB, multimodal Gemini Vision, and prompt guardrails.</p>
                  <div class="cap-substrip">Python · LangChain · ChromaDB · Gemini Vision</div>
                </div>

                <div class="capability-card-compact">
                  <div class="cap-icon-box">🌐</div>
                  <h3 class="cap-title">Modern Web &amp; Spatial Systems</h3>
                  <p class="cap-desc">Interactive Three.js 60fps WebGL scenes with physical materials, single-page client routing, and lightweight vanilla CSS systems.</p>
                  <div class="cap-substrip">JavaScript (ES6+) · Three.js · HTML5 · Node.js</div>
                </div>

                <div class="capability-card-compact">
                  <div class="cap-icon-box">⚡</div>
                  <h3 class="cap-title">Problem Solving &amp; Algorithms</h3>
                  <p class="cap-desc">A* heuristic graph pathfinding, topological dependency sorting, Trie string retrieval, and algorithmic efficiency analysis.</p>
                  <div class="cap-substrip">A* Heuristics · Graph Theory · Data Structures · Big-O</div>
                </div>

                <div class="capability-card-compact">
                  <div class="cap-icon-box">🛡️</div>
                  <h3 class="cap-title">Systems &amp; Edge Prototyping</h3>
                  <p class="cap-desc">Offline-first local caching in SQLite, store-and-forward peer sync during cellular blackouts, and ESP32 hardware telemetry.</p>
                  <div class="cap-substrip">Offline Mesh · SQLite · ESP32 · Sensor Telemetry</div>
                </div>
              </div>

              <!-- Slide In-Page Details Disclosure Action -->
              <div class="slide-toggle-row">
                <button type="button" class="btn-slide-toggle" data-slide-toggle="1" aria-expanded="false" aria-controls="slide-details-1">
                  <span class="toggle-icon">&darr;</span>
                  <span class="toggle-text">View Technical Details</span>
                </button>
              </div>

              <!-- Expandable In-Slide Technical Details -->
              <div class="slide-expanded-details" id="slide-details-1" hidden>
                <div class="skills-deep-breakdown">
                  <div class="deep-category-card">
                    <h4 class="deep-category-title">AI &amp; Machine Learning Workflow</h4>
                    <p class="deep-category-text">
                      Experience building end-to-end RAG pipelines: recursive semantic text chunking, dense vector representations, Cosine and HNSW similarity searches, and prompt engineering with strict hallucination guardrails. Practical implementation with Python, LangChain, Hugging Face Transformers, and Gemini APIs.
                    </p>
                  </div>
                  <div class="deep-category-card">
                    <h4 class="deep-category-title">Client-Side Engineering &amp; Graphics</h4>
                    <p class="deep-category-text">
                      Constructed ATLAS single-page client-side router with state isolation, zero external framework overhead, custom Three.js WebGL scenes using ACESFilmic tone mapping, and responsive CSS variables tailored for light/dark theme transitions.
                    </p>
                  </div>
                  <div class="deep-category-card">
                    <h4 class="deep-category-title">Heuristics &amp; Resilient Systems</h4>
                    <p class="deep-category-text">
                      Designed graph routing under variable constraint matrices (elevation gradient, real-time hazard markers). Emphasizes zero-network resilience where devices store payloads in local SQLite storage and sync via peer nodes when connections resume.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <!-- ----------------------------------------------------------------
                 SLIDE 3: FEATURED PROJECTS
                 Project images appear ONLY in this slide!
                 ---------------------------------------------------------------- -->
            <article class="carousel-slide glass-panel" id="slide-2" role="tabpanel" aria-labelledby="tab-slide-2" data-slide-idx="2" hidden>
              <div class="slide-header">
                <div class="slide-eyebrow">SELECTED WORK</div>
                <h2 class="slide-title">Featured Projects</h2>
                <p class="slide-lead">
                  Flagship engineering implementations demonstrating edge resilience, route heuristics, and multimodal vision intelligence.
                </p>
              </div>

              <!-- Compact Project Showcase Cards (Contains project screenshots strictly here) -->
              <div class="carousel-projects-grid">
                
                <!-- Project 1: NER ACCESS -->
                <div class="carousel-project-card">
                  <div class="carousel-project-media">
                    <img 
                      src="/assets/images/project-ner-access.jpg" 
                      alt="NER ACCESS (SOLVEX 2.0) Architecture Diagram and Route Map" 
                      class="carousel-project-img"
                      loading="lazy"
                    />
                    <span class="carousel-project-tag">SIH 2026 · TEAM SOLVEX</span>
                  </div>
                  <div class="carousel-project-content">
                    <h3 class="carousel-project-title">NER ACCESS (SOLVEX 2.0)</h3>
                    <p class="carousel-project-desc">
                      Offline-first route optimization and accessibility intelligence platform engineered for India's North Eastern Region (NER) during monsoons and cellular blackouts.
                    </p>
                    <div class="carousel-project-specs">
                      <div><strong>Routing:</strong> A* heuristic pathfinding weighted by terrain slope</div>
                      <div><strong>Resilience:</strong> Offline topological mesh graph cached in SQLite</div>
                    </div>
                    <div class="carousel-project-actions">
                      <a href="/projects/solvex-ner" data-route="/projects/solvex-ner" class="btn-primary btn-sm">
                        <span>Explore Case Study &rarr;</span>
                      </a>
                      <a href="https://github.com/varanalagesh19-dot/solvex-ner-platform2.0" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-sm">
                        <span>GitHub &nearr;</span>
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Project 2: LINKEDX -->
                <div class="carousel-project-card">
                  <div class="carousel-project-media">
                    <img 
                      src="/assets/images/project-linkedx.jpg" 
                      alt="LINKEDX Multimodal Thought Leadership Caption Engine" 
                      class="carousel-project-img"
                      loading="lazy"
                    />
                    <span class="carousel-project-tag">GEMINI VISION AI</span>
                  </div>
                  <div class="carousel-project-content">
                    <h3 class="carousel-project-title">LINKEDX (LINKX)</h3>
                    <p class="carousel-project-desc">
                      AI-powered multimodal intelligence platform transforming technical architecture diagrams and code screenshots into high-engagement publications using Gemini Vision.
                    </p>
                    <div class="carousel-project-specs">
                      <div><strong>Vision:</strong> Bounding box decomposition isolating architecture modules</div>
                      <div><strong>Synthesis:</strong> Tone adaptation presets with hashtag resonance heuristics</div>
                    </div>
                    <div class="carousel-project-actions">
                      <a href="/projects/linkx" data-route="/projects/linkx" class="btn-primary btn-sm">
                        <span>Explore Case Study &rarr;</span>
                      </a>
                      <a href="https://github.com/varanalagesh19-dot/linkxxx" target="_blank" rel="noopener noreferrer" class="btn-secondary btn-sm">
                        <span>GitHub &nearr;</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Slide In-Page Details Disclosure Action -->
              <div class="slide-toggle-row">
                <button type="button" class="btn-slide-toggle" data-slide-toggle="2" aria-expanded="false" aria-controls="slide-details-2">
                  <span class="toggle-icon">&darr;</span>
                  <span class="toggle-text">View Project Specifications</span>
                </button>
              </div>

              <!-- Expandable In-Slide Project Specifications -->
              <div class="slide-expanded-details" id="slide-details-2" hidden>
                <div class="project-specs-expanded">
                  <div class="spec-block">
                    <h4 class="spec-block-title">SOLVEX NER System Architecture</h4>
                    <p class="spec-block-text">
                      Designed with an offline-first distributed node architecture. When satellite or cellular connections drop during natural disasters, nodes maintain peer-to-peer ad-hoc WiFi Direct beacons. The local Android SQLite database maintains topological graph node records with dynamic elevation gradient penalties, ensuring ambulances and emergency convoys avoid flooded riverbanks.
                    </p>
                  </div>
                  <div class="spec-block">
                    <h4 class="spec-block-title">LINKEDX Multimodal Pipeline</h4>
                    <p class="spec-block-text">
                      Processes user-uploaded diagrams via Google Gemini 1.5 Flash Vision API. Extracts component relationship hierarchy, detects technology logos, and passes semantic entities into a multi-stage prompt chain producing executive summaries, technical trade-off breakdowns, and discussion prompts.
                    </p>
                  </div>
                  <div class="spec-block">
                    <h4 class="spec-block-title">More Projects in Portfolio</h4>
                    <p class="spec-block-text">
                      Visit the full <a href="/projects" data-route="/projects" class="inline-gold-link">Projects Page</a> to inspect IntelliPDF (RAG PDF Engine), Base Isolation Earthquake Defense (physics simulation), Smart Agriculture IoT, and the ATLAS 3D platform itself.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <!-- ----------------------------------------------------------------
                 SLIDE 4: CONTACT & PROFESSIONAL LINKS
                 ---------------------------------------------------------------- -->
            <article class="carousel-slide glass-panel" id="slide-3" role="tabpanel" aria-labelledby="tab-slide-3" data-slide-idx="3" hidden>
              <div class="slide-header">
                <div class="slide-eyebrow">GET IN TOUCH</div>
                <h2 class="slide-title">Contact &amp; Professional Links</h2>
                <p class="slide-lead">
                  Connect with me for software engineering opportunities, AI/ML research discussions, or technical project collaborations.
                </p>
              </div>

              <!-- Compact Contact Cards Grid -->
              <div class="contact-links-compact-grid">
                
                <a href="/contact" data-route="/contact" class="contact-card-item">
                  <div class="contact-icon-bubble">✉</div>
                  <div class="contact-meta">
                    <span class="contact-label">Direct Message</span>
                    <strong class="contact-value">Interactive Message Portal &rarr;</strong>
                  </div>
                </a>

                <a href="https://github.com/varanalagesh19-dot" target="_blank" rel="noopener noreferrer" class="contact-card-item">
                  <div class="contact-icon-bubble">🐙</div>
                  <div class="contact-meta">
                    <span class="contact-label">GitHub</span>
                    <strong class="contact-value">github.com/varanalagesh19-dot ↗</strong>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/alagesh023" target="_blank" rel="noopener noreferrer" class="contact-card-item">
                  <div class="contact-icon-bubble">💼</div>
                  <div class="contact-meta">
                    <span class="contact-label">LinkedIn</span>
                    <strong class="contact-value">linkedin.com/in/alagesh023 ↗</strong>
                  </div>
                </a>

                <a href="mailto:varanalagesh19@gmail.com" class="contact-card-item">
                  <div class="contact-icon-bubble">📧</div>
                  <div class="contact-meta">
                    <span class="contact-label">Email</span>
                    <strong class="contact-value">varanalagesh19@gmail.com ↗</strong>
                  </div>
                </a>

              </div>

              <!-- Slide In-Page Details Disclosure Action -->
              <div class="slide-toggle-row">
                <button type="button" class="btn-slide-toggle" data-slide-toggle="3" aria-expanded="false" aria-controls="slide-details-3">
                  <span class="toggle-icon">&darr;</span>
                  <span class="toggle-text">View Availability &amp; Details</span>
                </button>
              </div>

              <!-- Expandable In-Slide Contact Details -->
              <div class="slide-expanded-details" id="slide-details-3" hidden>
                <div class="contact-extended-panel">
                  <div class="availability-item">
                    <span class="avail-indicator"></span>
                    <div>
                      <strong>Location &amp; Timezone:</strong>
                      <span> Coimbatore, Tamil Nadu, India (IST · UTC+5:30)</span>
                    </div>
                  </div>
                  <div class="availability-item">
                    <span class="avail-indicator"></span>
                    <div>
                      <strong>Response Time:</strong>
                      <span> Usually within 24 hours for email and LinkedIn inquiries.</span>
                    </div>
                  </div>
                  <div class="availability-item">
                    <span class="avail-indicator"></span>
                    <div>
                      <strong>Open To:</strong>
                      <span> Software engineering internships, AI/ML research collaborations, open-source development, and hackathons.</span>
                    </div>
                  </div>
                  <div class="quick-copy-strip">
                    <button type="button" class="btn-secondary btn-sm" id="btn-quick-copy-email">
                      <span id="quick-copy-text">📋 Copy Email Address</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>

            <!-- ----------------------------------------------------------------
                 SLIDE 5: RESUME & CREDENTIALS
                 ---------------------------------------------------------------- -->
            <article class="carousel-slide glass-panel" id="slide-4" role="tabpanel" aria-labelledby="tab-slide-4" data-slide-idx="4" hidden>
              <div class="slide-header">
                <div class="slide-eyebrow">CURRICULUM VITAE</div>
                <h2 class="slide-title">Resume &amp; Credentials</h2>
                <p class="slide-lead">
                  An authenticated, ATS-friendly curriculum vitae formatted strictly from verified academic coursework, open-source repositories, and technical skills.
                </p>
              </div>

              <!-- Studio Action Controls Bar -->
              <div class="resume-controls-bar">
                <div class="resume-controls-left">
                  <button type="button" class="btn-primary btn-sm" id="btn-print-resume" title="Print or export professional PDF">
                    <span>🖨 Print / Export PDF</span>
                  </button>
                  <button type="button" class="btn-secondary btn-sm" id="btn-download-txt-resume" title="Download ATS Plaintext (.txt) file">
                    <span>⬇ Download Plaintext</span>
                  </button>
                  <button type="button" class="btn-secondary btn-sm" id="btn-copy-resume" title="Copy plaintext resume to clipboard">
                    <span id="copy-resume-status">📋 Copy Plaintext CV</span>
                  </button>
                  <button type="button" class="btn-secondary btn-sm" id="btn-toggle-resume-format" title="Toggle between clean document and plaintext code">
                    <span id="toggle-resume-label">👁 Switch to Plaintext View</span>
                  </button>
                </div>
                <div class="resume-controls-right">
                  <span class="verified-pill">✓ 100% Verified Profile Data</span>
                </div>
              </div>

              <!-- Transparent Resume PDF Verification Banner -->
              <div class="resume-pdf-notice" style="padding: 12px 18px; margin-bottom: 18px; border-radius: 12px; font-size: 0.825rem; line-height: 1.5; display: flex; align-items: center; gap: 12px; background: rgba(203, 179, 232, 0.1); border: 1px dashed rgba(203, 179, 232, 0.4);">
                <span style="font-size: 1.1rem; flex-shrink: 0;">ℹ️</span>
                <div>
                  <strong>Official Resume PDF:</strong> Storage path prepared at <code>assets/documents/resume.pdf</code>. Awaiting user's approved final PDF file before direct download is enabled. In the meantime, use the live ATS <strong>Print / Export PDF</strong> or <strong>Download Plaintext</strong> actions above.
                </div>
              </div>

              <!-- Compact Credential Highlights -->
              <div class="resume-compact-highlights">
                <div class="cred-pill"><strong>Degree:</strong> B.E. CSE (AI &amp; ML), Kathir College (2025–2029)</div>
                <div class="cred-pill"><strong>Specialization:</strong> AI/ML, Vector Search, Heuristics, WebGL</div>
                <div class="cred-pill"><strong>Hackathons:</strong> Smart India Hackathon (SIH 2026 / SIH26002)</div>
                <div class="cred-pill"><strong>Code Repositories:</strong> IntelliPDF, SOLVEX NER, LINKX, ATLAS 3.0</div>
              </div>

              <!-- Slide In-Page Details Disclosure Action -->
              <div class="slide-toggle-row">
                <button type="button" class="btn-slide-toggle" data-slide-toggle="4" aria-expanded="false" aria-controls="slide-details-4">
                  <span class="toggle-icon">&darr;</span>
                  <span class="toggle-text">View Full Curriculum Vitae</span>
                </button>
              </div>

              <!-- Expandable In-Slide Full Resume Document -->
              <div class="slide-expanded-details" id="slide-details-4" hidden>
                <div class="resume-paper-wrapper" id="resume-document">
                  
                  <!-- Formatted Paper View (Clean ATS 1-Column Layout) -->
                  <div class="resume-paper" id="resume-formatted-view" role="article" aria-label="Formatted Curriculum Vitae">
                    <!-- Header -->
                    <header class="cv-header">
                      <h1 class="cv-candidate-name">ALAGESH VARAN</h1>
                      <div class="cv-contact-line">
                        <span>Coimbatore, Tamil Nadu, India</span>
                        <span class="cv-sep">&bull;</span>
                        <a href="mailto:varanalagesh19@gmail.com">varanalagesh19@gmail.com</a>
                        <span class="cv-sep">&bull;</span>
                        <a href="https://github.com/varanalagesh19-dot" target="_blank" rel="noopener noreferrer">github.com/varanalagesh19-dot</a>
                        <span class="cv-sep">&bull;</span>
                        <a href="https://www.linkedin.com/in/alagesh023" target="_blank" rel="noopener noreferrer">linkedin.com/in/alagesh023</a>
                      </div>
                    </header>

                    <!-- Professional Summary -->
                    <section class="cv-section">
                      <h2 class="cv-section-title">PROFESSIONAL SUMMARY</h2>
                      <div class="cv-rule"></div>
                      <p class="cv-body-text">
                        Second-year Bachelor of Engineering student specializing in Computer Science &amp; Engineering (Artificial Intelligence and Machine Learning) at Kathir College of Engineering (affiliated with Anna University, Chennai; 2025–2029). Practical engineering experience architecting Retrieval-Augmented Generation (RAG) pipelines, offline-first resilient transit heuristics, IoT microcontroller telemetry, and high-performance Three.js WebGL spatial interfaces. Seeking software engineering and AI/ML internships to build scalable, production-grade systems.
                      </p>
                    </section>

                    <!-- Education -->
                    <section class="cv-section">
                      <h2 class="cv-section-title">EDUCATION</h2>
                      <div class="cv-rule"></div>
                      <div class="cv-entry">
                        <div class="cv-entry-row">
                          <span class="cv-entry-title">Bachelor of Engineering (B.E.) — Computer Science &amp; Engineering (AI &amp; ML)</span>
                          <span class="cv-entry-date">2025 – 2029 (Expected)</span>
                        </div>
                        <div class="cv-entry-subtitle">Kathir College of Engineering · Anna University, Chennai</div>
                        <p class="cv-entry-desc">
                          Specialized coursework: Artificial Intelligence, Machine Learning Algorithms, Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems (SQL), Discrete Mathematics.
                        </p>
                      </div>
                    </section>

                    <!-- Technical Core Skills -->
                    <section class="cv-section">
                      <h2 class="cv-section-title">TECHNICAL CORE SKILLS</h2>
                      <div class="cv-rule"></div>
                      <div class="cv-skills-block">
                        <div class="cv-skill-line">
                          <span class="cv-skill-key">Languages:</span>
                          <span class="cv-skill-val">Python, JavaScript (ES6+), Kotlin, C++, HTML5, CSS3, SQL</span>
                        </div>
                        <div class="cv-skill-line">
                          <span class="cv-skill-key">AI &amp; Machine Learning:</span>
                          <span class="cv-skill-val">LangChain, ChromaDB, FAISS, Hugging Face Transformers, RAG Pipelines, Vector Embeddings, OpenCV</span>
                        </div>
                        <div class="cv-skill-line">
                          <span class="cv-skill-key">Web &amp; Spatial Graphics:</span>
                          <span class="cv-skill-val">Node.js, Express, Three.js, WebGL Shaders, RESTful APIs, Single-Page App (SPA) Engine</span>
                        </div>
                        <div class="cv-skill-line">
                          <span class="cv-skill-key">Developer Tools &amp; Hardware:</span>
                          <span class="cv-skill-val">Git, GitHub, VS Code, Linux/Bash, Sandboxed Iframe Execution, ESP32 Microcontrollers</span>
                        </div>
                      </div>
                    </section>

                    <!-- Engineering Projects -->
                    <section class="cv-section">
                      <h2 class="cv-section-title">KEY ENGINEERING PROJECTS</h2>
                      <div class="cv-rule"></div>

                      <!-- Project 1: IntelliPDF -->
                      <div class="cv-entry">
                        <div class="cv-entry-row">
                          <span class="cv-entry-title">IntelliPDF — RAG Academic Document Query Engine</span>
                          <span class="cv-entry-links">
                            <a href="https://github.com/varanalagesh19-dot/IntelliPDF" target="_blank" rel="noopener noreferrer">Code ↗</a>
                          </span>
                        </div>
                        <div class="cv-entry-stack">Python · LangChain · ChromaDB · FastAPI · Vector Embeddings</div>
                        <ul class="cv-bullet-points">
                          <li>Engineered an offline-first RAG pipeline parsing complex multi-page academic textbooks with recursive semantic chunking and sliding window overlap.</li>
                          <li>Integrated ChromaDB cosine similarity ranking in vector space, enforcing strict prompt grounding guardrails that guarantee factual, page-cited answers without hallucinations.</li>
                          <li>Constructed an asynchronous FastAPI service delivering sub-200ms semantic search latency across dense technical notes.</li>
                        </ul>
                      </div>

                      <!-- Project 2: SOLVEX NER -->
                      <div class="cv-entry">
                        <div class="cv-entry-row">
                          <span class="cv-entry-title">SOLVEX (NER Platform 2.0) — Disaster Logistics &amp; Route Platform</span>
                          <span class="cv-entry-links">
                            <a href="https://github.com/varanalagesh19-dot/solvex-ner-platform2.0" target="_blank" rel="noopener noreferrer">Code ↗</a>
                          </span>
                        </div>
                        <div class="cv-entry-stack">Kotlin · Android SDK · SQLite · Offline Mesh Sync · A* Heuristics</div>
                        <ul class="cv-bullet-points">
                          <li>Submitted for Smart India Hackathon 2026 (SIH26002) to coordinate emergency medical relief and logistics supply routing in mountainous North East India.</li>
                          <li>Implemented offline-first topological A* graph pathfinding weighted by terrain gradient friction and real-time landslide risk telemetry.</li>
                          <li>Engineered local cache persistence with store-and-forward peer mesh synchronization operating during complete cellular infrastructure blackouts.</li>
                        </ul>
                      </div>

                      <!-- Project 3: LINKX -->
                      <div class="cv-entry">
                        <div class="cv-entry-row">
                          <span class="cv-entry-title">LINKX (LINKEDX) — Multimodal Content Intelligence Platform</span>
                          <span class="cv-entry-links">
                            <a href="https://github.com/varanalagesh19-dot/linkxxx" target="_blank" rel="noopener noreferrer">Code ↗</a>
                          </span>
                        </div>
                        <div class="cv-entry-stack">Kotlin · Android SDK · Google Gemini Vision API · Prompt Chaining</div>
                        <ul class="cv-bullet-points">
                          <li>Integrated Google Gemini Vision API to parse complex technical architecture diagrams and code screenshots into structured semantic tokens.</li>
                          <li>Engineered prompt chaining pipeline generating tailored executive, engineering, and research publication drafts with automated hashtag resonance heuristics.</li>
                        </ul>
                      </div>

                      <!-- Project 4: ATLAS Portfolio -->
                      <div class="cv-entry">
                        <div class="cv-entry-row">
                          <span class="cv-entry-title">ATLAS 3.0 — 3D Spatial Developer Portfolio &amp; Tooling Suite</span>
                          <span class="cv-entry-links">
                            <a href="https://github.com/varanalagesh19-dot/atlas-portfolio" target="_blank" rel="noopener noreferrer">Code ↗</a>
                          </span>
                        </div>
                        <div class="cv-entry-stack">JavaScript (ES6+) · Three.js / WebGL · Vanilla CSS System · Node.js</div>
                        <ul class="cv-bullet-points">
                          <li>Architected an ultra-fast developer portfolio with client-side SPA routing, interactive terminal, sandboxed code playground, and 8 developer utilities.</li>
                          <li>Engineered physical WebGL materials with ACESFilmic tone mapping maintaining steady 60fps rendering without blocking main-thread UI interactions.</li>
                        </ul>
                      </div>
                    </section>

                    <!-- Hackathons & Competitions -->
                    <section class="cv-section">
                      <h2 class="cv-section-title">HACKATHONS &amp; COMPETITIONS</h2>
                      <div class="cv-rule"></div>
                      <div class="cv-entry">
                        <div class="cv-entry-row">
                          <span class="cv-entry-title">Smart India Hackathon (SIH 2026 / SIH26002) — Team Solvex</span>
                          <span class="cv-entry-date">2026</span>
                        </div>
                        <div class="cv-entry-subtitle">National Innovation Initiative · Ministry of Education, Government of India</div>
                        <p class="cv-entry-desc">
                          National competition submission addressing disaster supply-chain bottlenecks and emergency medical resource allocation across remote transit corridors of North East India.
                        </p>
                      </div>
                    </section>
                  </div>

                  <!-- Plaintext CV View (Hidden by default, shown on toggle) -->
                  <div class="resume-plaintext-view" id="resume-plaintext-view" style="display: none;">
                    <div class="plaintext-header">
                      <span>ATS &amp; COPY OPTIMIZED PLAINTEXT FORMAT</span>
                      <button type="button" class="btn-primary btn-sm" id="btn-copy-raw-pre">
                        Copy Plaintext
                      </button>
                    </div>
                    <pre class="plaintext-pre" id="resume-raw-text">
================================================================================
ALAGESH VARAN
B.E. Computer Science & Engineering (AI & ML) Student · Creative Systems Architect
================================================================================
Location:  Coimbatore, Tamil Nadu, India
Email:     varanalagesh19@gmail.com
GitHub:    https://github.com/varanalagesh19-dot
LinkedIn:  https://www.linkedin.com/in/alagesh023
Portfolio: http://localhost:8080/

PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
Second-year Bachelor of Engineering student specializing in Computer Science &
Engineering (Artificial Intelligence and Machine Learning) at Kathir College of
Engineering (affiliated with Anna University, Chennai; 2025–2029). Practical
engineering experience architecting Retrieval-Augmented Generation (RAG)
pipelines, offline-first resilient transit heuristics, IoT microcontroller
telemetry, and high-performance Three.js WebGL spatial interfaces. Seeking software
engineering and AI/ML internships to build scalable, production-grade systems.

EDUCATION
--------------------------------------------------------------------------------
Bachelor of Engineering (B.E.) — Computer Science & Engineering (AI & ML)
Kathir College of Engineering · Anna University, Chennai
Period: 2025 – 2029 (Expected)
Specialized Coursework: Artificial Intelligence, Machine Learning Algorithms,
Data Structures & Algorithms, Object-Oriented Programming, Database Management
Systems (SQL), Discrete Mathematics.

TECHNICAL CORE SKILLS
--------------------------------------------------------------------------------
* Languages:          Python, JavaScript (ES6+), Kotlin, C++, HTML5, CSS3, SQL
* AI & ML Systems:    LangChain, ChromaDB, FAISS, Transformers, RAG Pipelines,
                      Vector Embeddings, OpenCV
* Web & Graphics:     Node.js, Express, Three.js, WebGL Shaders, RESTful APIs,
                      Single-Page Application (SPA) Engine
* Tools & Platforms:  Git, GitHub, VS Code, Linux/Bash, Sandboxed Iframe, ESP32

KEY ENGINEERING PROJECTS
--------------------------------------------------------------------------------
1. IntelliPDF — RAG Academic Document Query Engine
   Stack: Python, LangChain, ChromaDB, FastAPI, Streamlit, Vector Embeddings
   - Engineered an offline-first RAG pipeline for dense textbook PDFs with
     recursive semantic chunking and sliding window overlap.
   - Integrated ChromaDB cosine similarity ranking enforcing strict prompt
     grounding guardrails that guarantee factual answers with page citations.
   - Code: https://github.com/varanalagesh19-dot/IntelliPDF

2. SOLVEX (NER Platform 2.0) — Disaster Logistics & Route Platform
   Stack: Kotlin, Android SDK, SQLite, Offline Mesh Sync, A* Heuristics
   - Submitted for Smart India Hackathon 2026 (SIH26002) for medical relief
     logistics in mountainous North East India.
   - Implemented offline-first topological A* graph pathfinding weighted by
     terrain gradient friction and landslide hazard telemetry.
   - Code: https://github.com/varanalagesh19-dot/solvex-ner-platform2.0

3. LINKX (LINKEDX) — Multimodal Content Intelligence Platform
   Stack: Kotlin, Android SDK, Google Gemini Vision API, Prompt Chaining
   - Integrated Google Gemini Vision API to parse technical architecture
     diagrams into structured semantic tokens.
   - Generated tailored thought-leadership publications with hashtag heuristics.
   - Code: https://github.com/varanalagesh19-dot/linkxxx

4. ATLAS 3.0 — 3D Spatial Developer Portfolio & Tooling Suite
   Stack: JavaScript (ES6+), Three.js / WebGL, Vanilla CSS, Node.js
   - Client-side SPA routing engine with interactive terminal, sandboxed
     code playground, and 8 developer utilities.
   - Code: https://github.com/varanalagesh19-dot/atlas-portfolio

HACKATHONS & HONORS
--------------------------------------------------------------------------------
* Smart India Hackathon (SIH 2026 / SIH26002) — Team Solvex:
  National innovation competition submission for medical distribution across
  isolated mountainous transit corridors.
                    </pre>
                  </div>

                </div>
              </div>
            </article>

          </div>
        </section>

        <!-- ============================================================
             BEYOND THE CODE — CREATIVE HOBBIES GALLERY
             Personal creative pursuits and interests outside technology
             ============================================================ -->
        <section class="beyond-code-section" id="beyond-the-code" aria-labelledby="beyond-the-code-title">
          <header class="beyond-code-header">
            <div class="beyond-code-eyebrow">
              <span class="eyebrow-dot"></span>
              <span>Personal Pursuits</span>
            </div>
            <h2 class="beyond-code-title" id="beyond-the-code-title">Beyond the Code</h2>
            <p class="beyond-code-subtitle">The things I explore, create, and enjoy beyond technology.</p>
          </header>

          <div class="hobbies-gallery-grid" role="list">
            <!-- 1. Chess -->
            <article class="hobby-card glass-panel" role="listitem" tabindex="0">
              <div class="hobby-media-frame">
                <img
                  src="/assets/images/hobby-chess.jpg"
                  alt="Minimalist wooden and crystal chess pieces arrayed across an ebony board under soft studio light"
                  class="hobby-image"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <span class="hobby-category-badge badge-strategy">Strategy</span>
              </div>
              <div class="hobby-content">
                <h3 class="hobby-title">Chess</h3>
                <p class="hobby-description">
                  A lifelong fascination with strategy, quiet concentration, and forward planning. I love calculating lines, anticipating opponent moves, and finding structured solutions under pressure.
                </p>
                <div class="hobby-tags">
                  <span class="hobby-tag">Tactics</span>
                  <span class="hobby-tag">Pattern Recognition</span>
                  <span class="hobby-tag">Endgames</span>
                </div>
              </div>
            </article>

            <!-- 2. Photography -->
            <article class="hobby-card glass-panel" role="listitem" tabindex="0">
              <div class="hobby-media-frame">
                <img
                  src="/assets/images/hobby-photography.jpg"
                  alt="50mm prime camera lens highlighting optical glass reflections and shallow depth of field"
                  class="hobby-image"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <span class="hobby-category-badge badge-photography">Photography</span>
              </div>
              <div class="hobby-content">
                <h3 class="hobby-title">Photography</h3>
                <p class="hobby-description">
                  Capturing fleeting moments and everyday perspectives. I enjoy exploring natural lighting, geometric framing, shadow contrasts, and visual storytelling through the lens.
                </p>
                <div class="hobby-tags">
                  <span class="hobby-tag">Composition</span>
                  <span class="hobby-tag">Natural Light</span>
                  <span class="hobby-tag">Street & City</span>
                </div>
              </div>
            </article>

            <!-- 3. Wildlife Photography -->
            <article class="hobby-card glass-panel" role="listitem" tabindex="0">
              <div class="hobby-media-frame">
                <img
                  src="/assets/images/hobby-wildlife.jpg"
                  alt="Spotted deer calmly grazing amid morning mist and deep green forest foliage"
                  class="hobby-image"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <span class="hobby-category-badge badge-photography">Photography</span>
              </div>
              <div class="hobby-content">
                <h3 class="hobby-title">Wildlife Photography</h3>
                <p class="hobby-description">
                  An appreciation for the natural world and animal behavior. It demands deep patience and respect for habitats—observing wildlife peacefully without disrupting their environment.
                </p>
                <div class="hobby-tags">
                  <span class="hobby-tag">Nature</span>
                  <span class="hobby-tag">Patience</span>
                  <span class="hobby-tag">Conservation</span>
                </div>
              </div>
            </article>

            <!-- 4. Videography -->
            <article class="hobby-card glass-panel" role="listitem" tabindex="0">
              <div class="hobby-media-frame">
                <img
                  src="/assets/images/hobby-videography.jpg"
                  alt="Cinema camera setup on a stabilizing rig capturing urban motion and ambient night lights"
                  class="hobby-image"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <span class="hobby-category-badge badge-film">Film</span>
              </div>
              <div class="hobby-content">
                <h3 class="hobby-title">Videography</h3>
                <p class="hobby-description">
                  Telling stories through motion, pacing, and sound. I enjoy experimenting with dynamic camera movement, cinematic b-roll framing, and rhythmic editing sequences.
                </p>
                <div class="hobby-tags">
                  <span class="hobby-tag">Sequencing</span>
                  <span class="hobby-tag">Motion</span>
                  <span class="hobby-tag">Pacing & Edit</span>
                </div>
              </div>
            </article>

            <!-- 5. Drawing -->
            <article class="hobby-card glass-panel" role="listitem" tabindex="0">
              <div class="hobby-media-frame">
                <img
                  src="/assets/images/hobby-drawing.jpg"
                  alt="Open sketchbook with graphite pencil sketches of architectural concepts and freehand shapes"
                  class="hobby-image"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <span class="hobby-category-badge badge-art">Art</span>
              </div>
              <div class="hobby-content">
                <h3 class="hobby-title">Drawing</h3>
                <p class="hobby-description">
                  A personal outlet for creative observation and imagination. Whether sketching conceptual forms or freehand perspective studies, drawing helps me visualize ideas before they take shape.
                </p>
                <div class="hobby-tags">
                  <span class="hobby-tag">Sketching</span>
                  <span class="hobby-tag">Perspective</span>
                  <span class="hobby-tag">Visual Ideas</span>
                </div>
              </div>
            </article>

            <!-- 6. Comic Books -->
            <article class="hobby-card glass-panel" role="listitem" tabindex="0">
              <div class="hobby-media-frame">
                <img
                  src="/assets/images/hobby-comics.jpg"
                  alt="Original superhero comic art depicting an armored protagonist looking over a sprawling cityscape with halftone aesthetic"
                  class="hobby-image"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <span class="hobby-category-badge badge-comics">Comics</span>
              </div>
              <div class="hobby-content">
                <h3 class="hobby-title">Comic Books</h3>
                <p class="hobby-description">
                  An enthusiastic reader of Marvel comics, especially Avengers storylines, character arcs, and intricate multiverse lore. I appreciate the long-form narrative worldbuilding and panel art.
                </p>
                <div class="hobby-tags">
                  <span class="hobby-tag">Marvel Universe</span>
                  <span class="hobby-tag">Avengers Lore</span>
                  <span class="hobby-tag">Graphic Narratives</span>
                </div>
              </div>
            </article>
          </div>
        </section>

      </div>
    `;
  },

  mount(navigate) {
    this.currentSlide = 0;
    this.userInteracted = false;

    // 1. Mount Subtle 3D Photo Effect
    const photoWrap = document.getElementById('profile-photo-3d-wrap');
    if (photoWrap) {
      this.profilePhotoEffect = new ProfilePhoto3DEffect(photoWrap);
    }

    // 2. Wire Hero "View Details" button to smoothly scroll to and focus carousel
    const heroViewDetailsBtn = document.getElementById('hero-view-details-btn');
    const carouselSection = document.getElementById('about-carousel');
    if (heroViewDetailsBtn && carouselSection) {
      heroViewDetailsBtn.addEventListener('click', () => {
        carouselSection.scrollIntoView({ behavior: 'smooth' });
        carouselSection.focus();
      });
    }

    // 2.1 Wire Hero "Monogram Intro" replay button
    const replayMonogramBtn = document.getElementById('btn-replay-monogram');
    if (replayMonogramBtn) {
      replayMonogramBtn.addEventListener('click', (e) => {
        e.preventDefault();
        import('../router.js').then(({ triggerMonogramAboutReveal }) => {
          triggerMonogramAboutReveal();
        });
      });
    }

    // 3. Carousel Logic: Elements & State
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const pills = Array.from(document.querySelectorAll('.carousel-nav-pill'));
    const counterEl = document.getElementById('carousel-counter');
    const prevBtn = document.getElementById('carousel-prev-btn');
    const nextBtn = document.getElementById('carousel-next-btn');

    const updateSlideView = (newIndex, direction = 'next') => {
      if (newIndex < 0 || newIndex >= this.totalSlides || newIndex === this.currentSlide) return;
      if (this.isTransitioning) return; // Prevent rapid repeated clicks from breaking transitions

      const oldIndex = this.currentSlide;
      this.currentSlide = newIndex;
      this.isTransitioning = true;

      const oldSlide = slides[oldIndex];
      const newSlide = slides[newIndex];

      // Update indicator and pills immediately for snappy feedback
      pills.forEach((pill, idx) => {
        const isActive = idx === this.currentSlide;
        pill.classList.toggle('active', isActive);
        pill.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      if (counterEl) {
        counterEl.textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;
      }

      // Check reduced motion preference
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
          newSlide.setAttribute('aria-hidden', 'false');
        }
        this.isTransitioning = false;
        return;
      }

      // Directional classes
      const exitClass = direction === 'next' ? 'slide-exit-to-left' : 'slide-exit-to-right';
      const enterClass = direction === 'next' ? 'slide-enter-from-right' : 'slide-enter-from-left';

      // Clear any stale transition classes
      slides.forEach(s => s.classList.remove('slide-exit-to-left', 'slide-exit-to-right', 'slide-enter-from-right', 'slide-enter-from-left', 'slide-transitioning'));

      // Mount incoming slide
      newSlide.removeAttribute('hidden');
      newSlide.setAttribute('aria-hidden', 'false');
      newSlide.classList.add('active-slide', 'slide-transitioning', enterClass);

      // Animate outgoing slide
      if (oldSlide) {
        oldSlide.classList.add('slide-transitioning', exitClass);
      }

      if (this.transitionTimer) clearTimeout(this.transitionTimer);
      this.transitionTimer = setTimeout(() => {
        if (oldSlide) {
          oldSlide.classList.remove('active-slide', 'slide-transitioning', 'slide-exit-to-left', 'slide-exit-to-right');
          oldSlide.setAttribute('hidden', '');
          oldSlide.setAttribute('aria-hidden', 'true');
        }
        newSlide.classList.remove('slide-transitioning', 'slide-enter-from-right', 'slide-enter-from-left');
        this.isTransitioning = false;
      }, 720);
    };

    const goToNextSlide = (userAction = false) => {
      if (userAction) this.stopAutoRotation();
      if (this.isTransitioning) return;
      const nextIdx = (this.currentSlide + 1) % this.totalSlides;
      updateSlideView(nextIdx, 'next');
    };

    const goToPrevSlide = (userAction = false) => {
      if (userAction) this.stopAutoRotation();
      if (this.isTransitioning) return;
      const prevIdx = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
      updateSlideView(prevIdx, 'prev');
    };

    const goToIndex = (idx, userAction = false) => {
      if (userAction) this.stopAutoRotation();
      if (this.isTransitioning || idx === this.currentSlide) return;
      const dir = idx > this.currentSlide ? 'next' : 'prev';
      updateSlideView(idx, dir);
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => goToPrevSlide(true));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => goToNextSlide(true));
    }

    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const idx = parseInt(pill.getAttribute('data-slide-index'), 10);
        goToIndex(idx, true);
      });
    });

    // 4. Auto-rotation with hover pause & interaction stop
    const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let isHoveredOrFocused = false;

    const startAutoRotation = () => {
      if (isReducedMotion || this.userInteracted) return;
      this.clearAutoRotation();
      this.autoRotateTimer = setInterval(() => {
        if (!isHoveredOrFocused && !this.userInteracted) {
          goToNextSlide(false);
        }
      }, this.autoRotateIntervalMs);
    };

    this.stopAutoRotation = () => {
      this.userInteracted = true;
      this.clearAutoRotation();
    };

    this.clearAutoRotation = () => {
      if (this.autoRotateTimer) {
        clearInterval(this.autoRotateTimer);
        this.autoRotateTimer = null;
      }
    };

    if (carouselSection) {
      carouselSection.addEventListener('mouseenter', () => { isHoveredOrFocused = true; });
      carouselSection.addEventListener('mouseleave', () => { isHoveredOrFocused = false; });
      carouselSection.addEventListener('focusin', () => { isHoveredOrFocused = true; });
      carouselSection.addEventListener('focusout', () => { isHoveredOrFocused = false; });

      // Touch swiping
      let touchStartX = 0;
      let touchStartY = 0;

      carouselSection.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      carouselSection.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches.length === 1) {
          const deltaX = e.changedTouches[0].clientX - touchStartX;
          const deltaY = e.changedTouches[0].clientY - touchStartY;

          // If horizontal swipe is dominant and exceeds 45px threshold
          if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX < 0) {
              goToNextSlide(true);
            } else {
              goToPrevSlide(true);
            }
          }
        }
      }, { passive: true });
    }

    // Keyboard navigation (ArrowLeft / ArrowRight)
    this.boundKeyHandler = (e) => {
      // If focused inside carousel or body
      if (document.activeElement && (carouselSection.contains(document.activeElement) || document.activeElement === carouselSection)) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          goToNextSlide(true);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goToPrevSlide(true);
        }
      }
    };
    window.addEventListener('keydown', this.boundKeyHandler);

    startAutoRotation();

    // 5. In-Slide Expandable "View Details" Buttons
    const toggleBtns = document.querySelectorAll('.btn-slide-toggle');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.stopAutoRotation();
        const slideIdx = btn.getAttribute('data-slide-toggle');
        const detailsEl = document.getElementById(`slide-details-${slideIdx}`);
        if (!detailsEl) return;

        const isCurrentlyExpanded = btn.getAttribute('aria-expanded') === 'true';
        const newExpanded = !isCurrentlyExpanded;

        btn.setAttribute('aria-expanded', newExpanded ? 'true' : 'false');
        const iconSpan = btn.querySelector('.toggle-icon');
        const textSpan = btn.querySelector('.toggle-text');

        if (newExpanded) {
          detailsEl.removeAttribute('hidden');
          detailsEl.classList.add('is-expanded');
          if (iconSpan) iconSpan.textContent = '↑';
          if (textSpan) {
            const currentTxt = textSpan.textContent;
            textSpan.textContent = currentTxt.replace('View', 'Hide');
          }
        } else {
          detailsEl.setAttribute('hidden', '');
          detailsEl.classList.remove('is-expanded');
          if (iconSpan) iconSpan.textContent = '↓';
          if (textSpan) {
            const currentTxt = textSpan.textContent;
            textSpan.textContent = currentTxt.replace('Hide', 'View');
          }
        }
      });
    });

    // 6. Journey Timeline Filtering inside Slide 1
    const timelineFilterContainer = document.getElementById('timeline-filter-pills');
    if (timelineFilterContainer) {
      const filterPills = timelineFilterContainer.querySelectorAll('.filter-pill');
      const journeyNodes = document.querySelectorAll('.journey-timeline-stream .journey-node-card');

      filterPills.forEach((fp) => {
        fp.addEventListener('click', () => {
          this.stopAutoRotation();
          filterPills.forEach(p => p.classList.remove('active'));
          fp.classList.add('active');
          const cat = fp.getAttribute('data-timeline-filter');

          journeyNodes.forEach((node) => {
            const nodeCat = node.getAttribute('data-category');
            if (cat === 'all' || nodeCat === cat) {
              node.style.display = 'flex';
            } else {
              node.style.display = 'none';
            }
          });
        });
      });
    }

    // 7. Quick copy email in Slide 4
    const quickCopyBtn = document.getElementById('btn-quick-copy-email');
    if (quickCopyBtn) {
      quickCopyBtn.addEventListener('click', () => {
        this.stopAutoRotation();
        const email = 'varanalagesh19@gmail.com';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(() => {
            showToast('Email address copied to clipboard!', 'success');
            const txt = document.getElementById('quick-copy-text');
            if (txt) {
              const orig = txt.textContent;
              txt.textContent = '✓ Email Copied!';
              setTimeout(() => { txt.textContent = orig; }, 2000);
            }
          }).catch(() => {
            showToast('Email: varanalagesh19@gmail.com', 'info');
          });
        } else {
          showToast('Email: varanalagesh19@gmail.com', 'info');
        }
      });
    }

    // 8. Resume Actions in Slide 5: Print, Download, Copy, Format Toggle
    const btnPrint = document.getElementById('btn-print-resume');
    if (btnPrint) {
      btnPrint.addEventListener('click', () => {
        this.stopAutoRotation();
        window.print();
      });
    }

    const btnDownloadTxt = document.getElementById('btn-download-txt-resume');
    if (btnDownloadTxt) {
      btnDownloadTxt.addEventListener('click', () => {
        this.stopAutoRotation();
        const rawPre = document.getElementById('resume-raw-text');
        const text = rawPre ? rawPre.innerText.trim() : '';
        if (!text) {
          showToast('Resume text not available for export', 'error');
          return;
        }

        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Alagesh_Varan_Resume_2026.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('Downloaded Alagesh_Varan_Resume_2026.txt', 'success');
      });
    }

    const btnCopy = document.getElementById('btn-copy-resume');
    const copyStatus = document.getElementById('copy-resume-status');
    const btnCopyPre = document.getElementById('btn-copy-raw-pre');

    const handleCopyResume = () => {
      this.stopAutoRotation();
      const rawPre = document.getElementById('resume-raw-text');
      const text = rawPre ? rawPre.innerText.trim() : '';
      if (!text) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast('Plaintext resume copied to clipboard!', 'success');
          if (copyStatus) {
            const orig = copyStatus.textContent;
            copyStatus.textContent = '✓ Copied to Clipboard!';
            setTimeout(() => { copyStatus.textContent = orig; }, 2200);
          }
        }).catch(() => {
          fallbackCopy(text);
        });
      } else {
        fallbackCopy(text);
      }
    };

    function fallbackCopy(text) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast('Plaintext resume copied to clipboard!', 'success');
      } catch (err) {
        showToast('Please select and copy manually', 'warn');
      }
      document.body.removeChild(ta);
    }

    if (btnCopy) btnCopy.addEventListener('click', handleCopyResume);
    if (btnCopyPre) btnCopyPre.addEventListener('click', handleCopyResume);

    const btnToggle = document.getElementById('btn-toggle-resume-format');
    const formattedView = document.getElementById('resume-formatted-view');
    const plaintextView = document.getElementById('resume-plaintext-view');
    const toggleLabel = document.getElementById('toggle-resume-label');

    if (btnToggle && formattedView && plaintextView) {
      let isPlaintext = false;
      btnToggle.addEventListener('click', () => {
        this.stopAutoRotation();
        isPlaintext = !isPlaintext;
        if (isPlaintext) {
          formattedView.style.display = 'none';
          plaintextView.style.display = 'block';
          if (toggleLabel) toggleLabel.textContent = '📄 Switch to Document View';
          showToast('Switched to ATS Plaintext View', 'info');
        } else {
          formattedView.style.display = 'block';
          plaintextView.style.display = 'none';
          if (toggleLabel) toggleLabel.textContent = '👁 Switch to Plaintext View';
          showToast('Switched to Formatted Document View', 'info');
        }
      });
    }

    // Scroll directly to resume if requested via hash
    if (window.location.hash === '#resume-studio' || window.location.hash === '#slide-resume') {
      goToIndex(4, true);
      setTimeout(() => {
        if (carouselSection) carouselSection.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  },

  unmount() {
    this.clearAutoRotation();

    if (this.transitionTimer) {
      clearTimeout(this.transitionTimer);
      this.transitionTimer = null;
    }
    this.isTransitioning = false;

    if (this.profilePhotoEffect) {
      this.profilePhotoEffect.destroy();
      this.profilePhotoEffect = null;
    }

    if (this.boundKeyHandler) {
      window.removeEventListener('keydown', this.boundKeyHandler);
      this.boundKeyHandler = null;
    }
  }
};

export function renderAboutPage(params) {
  return AboutPage;
}
