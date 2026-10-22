/**
 * ATLAS 2.0 — HOME PAGE COMPONENT (/)
 * Clean, focused, cinematic flagship introduction.
 * Includes subtle interactive lighting, high-contrast typography,
 * verified metrics, flagship architecture highlight, and accessible waypoints.
 */

export function renderHomePage() {
  const container = document.createElement('div');
  container.className = 'page-container page-home';

  container.innerHTML = `
    <!-- Cinematic Hero Section -->
    <section class="home-hero-clean" aria-label="ATLAS Hero">
      <div class="hero-left-column">
        <div class="hero-beacon-badge">
          <span class="beacon-dot" aria-hidden="true"></span>
          <span class="beacon-text">SYSTEM ACTIVE // INDEPENDENT DEVELOPER</span>
        </div>

        <h1 class="hero-display-title">
          Engineering ideas<br />
          into <span class="title-creative-accent">experiences.</span>
        </h1>

        <p class="hero-lead-text">
          I am <strong>Alagesh Varan</strong>, an AI systems developer and undergraduate engineer 
          pursuing B.E. CSE (Artificial Intelligence & Machine Learning) at 
          <strong>Kathir College of Engineering</strong> (Anna University, 2025–2029). 
          Designing offline-first heuristics, RAG neural architectures, and luxury 3D WebGL interfaces.
        </p>

        <!-- Primary Call to Action Buttons -->
        <div class="hero-cta-group">
          <a href="/projects" data-route="/projects" class="btn-primary hero-btn">
            <span>Explore Projects (8) &rarr;</span>
          </a>
          <a href="/about" data-route="/about" class="btn-secondary hero-btn">
            <span>Biography &amp; Credentials</span>
          </a>
          <a href="/contact" data-route="/contact" class="btn-secondary hero-btn">
            <span>Contact Me</span>
          </a>
        </div>

        <!-- Verified Quick Telemetry Metrics -->
        <div class="hero-quick-metrics">
          <div class="metric-item">
            <span class="m-val">8</span>
            <span class="m-lbl">Verified Repositories</span>
          </div>
          <div class="metric-item">
            <span class="m-val">SIH '26</span>
            <span class="m-lbl">Smart India Hackathon</span>
          </div>
          <div class="metric-item">
            <span class="m-val">RAG / 3D</span>
            <span class="m-lbl">Core Focus</span>
          </div>
        </div>
      </div>

      <!-- Right Column: 3D Stage Space & Interactive Focal Teaser -->
      <div class="hero-right-column">
        <div class="featured-teaser-card glass-panel" id="home-featured-card">
          <div class="card-lighting-overlay" aria-hidden="true"></div>
          <div class="teaser-top">
            <span class="teaser-badge">FLAGSHIP ARCHITECTURE</span>
            <span class="teaser-year">SIH26002</span>
          </div>
          <h3 class="teaser-title">SOLVEX — NER Logistics 2.0</h3>
          <p class="teaser-desc">
            Offline-first topological graph pathfinding and hazard telemetry for 
            India's North Eastern transit corridors under zero connectivity.
          </p>
          <div class="teaser-footer">
            <a href="/projects/solvex-ner" data-route="/projects/solvex-ner" class="teaser-link">
              <span>Inspect Case Study &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation Waypoint Bar -->
    <nav class="home-waypoints-bar glass-panel" aria-label="Quick Directory">
      <div class="waypoint-intro">
        <span class="waypoint-label">DIRECT ROUTE WAYPOINTS</span>
        <span class="waypoint-sub">Every domain has its own dedicated page</span>
      </div>
      <div class="waypoint-links">
        <a href="/about" data-route="/about" class="waypoint-pill">
          <span class="w-icon" aria-hidden="true">👤</span> About Me
        </a>
        <a href="/projects" data-route="/projects" class="waypoint-pill">
          <span class="w-icon" aria-hidden="true">📂</span> Projects Gallery
        </a>
        <a href="/skills" data-route="/skills" class="waypoint-pill">
          <span class="w-icon" aria-hidden="true">⚡</span> Skills Matrix
        </a>
        <a href="/tools" data-route="/tools" class="waypoint-pill">
          <span class="w-icon" aria-hidden="true">🛠️</span> Developer Tools
        </a>
        <a href="/contact" data-route="/contact" class="waypoint-pill">
          <span class="w-icon" aria-hidden="true">✉️</span> Contact
        </a>
      </div>
    </nav>

    <!-- Compact Personality Section: More Than Code -->
    <section class="home-personality-section glass-panel" aria-labelledby="more-than-code-title">
      <div class="personality-glow" aria-hidden="true"></div>
      <div class="personality-content">
        <div class="personality-header">
          <div class="personality-badge">
            <span class="personality-dot" aria-hidden="true"></span>
            <span>CREATIVE IDENTITY</span>
          </div>
          <h2 class="personality-title" id="more-than-code-title">More Than Code.</h2>
        </div>

        <p class="personality-quote">
          “Beyond building digital experiences, I enjoy exploring strategy through chess, capturing stories through photography and videography, expressing ideas through drawing, and discovering new worlds in Marvel’s Avengers comics.”
        </p>

        <div class="personality-cta">
          <a href="/about#beyond-the-code" data-route="/about#beyond-the-code" class="btn-primary personality-btn">
            <span>Explore Beyond the Code &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  `;

  // Attach subtle interactive lighting to the featured card
  const card = container.querySelector('#home-featured-card');
  const overlay = container.querySelector('.card-lighting-overlay');
  let animId = null;
  let targetRotX = 0;
  let targetRotY = 0;
  let currentRotX = 0;
  let currentRotY = 0;
  let isHovered = false;
  const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function onMouseMove(e) {
    if (isReducedMotion || !card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const nx = (x / rect.width) * 2 - 1;
    const ny = (y / rect.height) * 2 - 1;

    targetRotX = -ny * 4;
    targetRotY = nx * 5;
    isHovered = true;

    if (overlay) {
      overlay.style.opacity = '0.35';
      overlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(203, 179, 232, 0.45) 0%, transparent 65%)`;
    }
  }

  function onMouseLeave() {
    targetRotX = 0;
    targetRotY = 0;
    isHovered = false;
    if (overlay) {
      overlay.style.opacity = '0';
    }
  }

  if (card && !isReducedMotion) {
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);

    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);
      currentRotX += (targetRotX - currentRotX) * 0.1;
      currentRotY += (targetRotY - currentRotY) * 0.1;

      if (Math.abs(currentRotX) > 0.001 || Math.abs(currentRotY) > 0.001 || isHovered) {
        card.style.transform = `perspective(800px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) translateY(${isHovered ? '-3px' : '0'})`;
      } else {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
      }
    };
    renderLoop();
  }

  return {
    element: container,
    cleanup: () => {
      if (animId) cancelAnimationFrame(animId);
      if (card) {
        card.removeEventListener('mousemove', onMouseMove);
        card.removeEventListener('mouseleave', onMouseLeave);
      }
    }
  };
}
