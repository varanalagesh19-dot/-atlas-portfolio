/**
 * ATLAS 3.0 — SMART PORTFOLIO FEATURES:
 * Truthful System Telemetry Dock & Floating Back-To-Top Controller
 */
import { getTheme } from './theme.js';

export function initTelemetryDock() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const telemPill = document.getElementById('atlas-telemetry-pill');
  const telemPopover = document.getElementById('atlas-telemetry-popover');
  const telemFps = document.getElementById('telem-fps');
  const telemScene = document.getElementById('telem-scene');
  const telemTheme = document.getElementById('telem-theme');
  const telemWebgl = document.getElementById('telem-webgl');
  const toggleMotionBtn = document.getElementById('toggle-motion-btn');

  // 1. Back to Top Smooth Scroll & Visibility
  if (backToTopBtn) {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 2. Telemetry Popover Toggle
  if (telemPill && telemPopover) {
    telemPill.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = telemPopover.classList.toggle('is-open');
      telemPill.setAttribute('aria-expanded', String(isOpen));
      updateTelemetryData();
    });

    document.addEventListener('click', (e) => {
      if (!telemPopover.contains(e.target) && e.target !== telemPill) {
        telemPopover.classList.remove('is-open');
        telemPill.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Truthful Local Telemetry State Updater
  const SCENE_NAMES = {
    '/': 'Home Crystal Knot & Spine',
    '/about': 'About Milestone Constellation',
    '/projects': 'Projects Prismatic Depth',
    '/skills': 'Skills Neural Topology',
    '/tools': 'Tools Cybernetic Matrix',
    '/contact': 'Contact Harmonic Waves'
  };

  function updateTelemetryData(currentPath = window.location.pathname) {
    // Current Scene
    if (telemScene) {
      const clean = currentPath.split('?')[0].replace(/\/+$/, '') || '/';
      telemScene.textContent = SCENE_NAMES[clean] || 'Spatial Ambient Prisms';
    }

    // WebGL state
    if (telemWebgl) {
      const hasWebgl = !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('webgl');
      telemWebgl.textContent = hasWebgl ? 'Active (Hardware Accel)' : 'Fallback (2D Canvas)';
    }

    // Theme state
    if (telemTheme) {
      const t = getTheme ? getTheme() : 'light';
      telemTheme.textContent = t === 'dark' ? 'Dark (Black Obsidian)' : 'Light (Warm Ivory)';
    }
  }

  // Listen to route changes for instant telemetry scene updates
  window.addEventListener('atlas:route-change', (e) => {
    if (e.detail && e.detail.path) {
      updateTelemetryData(e.detail.path);
    }
  });

  // Listen to theme changes
  window.addEventListener('atlas:theme-change', () => {
    updateTelemetryData();
  });

  // 4. Real Display Refresh Rate / FPS Estimator
  let frameCount = 0;
  let lastTime = performance.now();
  function measureFps(now) {
    frameCount++;
    if (now - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (now - lastTime));
      if (telemFps) {
        telemFps.textContent = `${Math.min(fps, 120)} FPS (Stable)`;
      }
      frameCount = 0;
      lastTime = now;
    }
    requestAnimationFrame(measureFps);
  }
  requestAnimationFrame(measureFps);

  // 5. Motion Reduction Toggle
  if (toggleMotionBtn) {
    let motionReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const updateMotionBtnState = () => {
      toggleMotionBtn.textContent = motionReduced ? 'Motion: REDUCED' : 'Motion: ACTIVE';
      toggleMotionBtn.style.color = motionReduced ? 'var(--accent)' : 'var(--paper)';
      if (window.atlasStage) {
        window.atlasStage.isReducedMotion = motionReduced;
      }
    };
    updateMotionBtnState();

    toggleMotionBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      motionReduced = !motionReduced;
      updateMotionBtnState();
    });
  }

  // Initial update
  updateTelemetryData();
}
