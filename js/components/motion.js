/**
 * ATLAS 2026 — REFINED MOTION & SCROLL-REVEAL COORDINATOR
 * Orchestrates subtle, high-performance scroll reveals using IntersectionObserver.
 * 
 * Design Principles:
 * 1. Progressive Enhancement: Content is 100% visible by default; hidden ONLY if JS motion initializes.
 * 2. Restrained: 10-14px vertical translation, 360ms duration, natural cubic-bezier easing.
 * 3. Staggered: 40-60ms micro-delays between sibling cards so users never wait.
 * 4. Resource Conscious: Unobserves elements once revealed; cleans up on route change.
 * 5. Accessibility First: Completely bypassed if prefers-reduced-motion is active.
 */

let observer = null;
let isReducedMotion = false;
let isMotionReady = false;

// Selectors for meaningful content clusters (avoids animating every individual node)
const REVEAL_SELECTORS = [
  '.home-hero-clean',
  '.hero-left-column',
  '.featured-teaser-card',
  '.hero-quick-metrics',
  '.home-waypoints-bar',
  '.about-hero-section',
  '.about-hero-narrative',
  '.about-hero-photo-col',
  '.about-carousel-section',
  '.carousel-slide',
  '.project-slide',
  '.project-card',
  '.projects-toolbar',
  '.projects-carousel-viewport',
  '.project-detail-hero',
  '.detail-body-grid',
  '.skills-toolbar',
  '.skill-group',
  '.skills-manifesto-card',
  '.tools-tab-bar',
  '.tools-workspace-outlet',
  '.contact-channels-column > *',
  '.contact-form-column',
  '.telemetry-box',
  '.atlas-footer .footer-inner'
];

/**
 * Initialize the motion system
 */
export function initMotion() {
  isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Listen for reduced motion changes dynamically
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', (e) => {
        isReducedMotion = e.matches;
        if (isReducedMotion) {
          revealAllInstantly();
        }
      });
    }
  }

  if (isReducedMotion) {
    document.documentElement.classList.remove('has-motion');
    return;
  }

  // Only mark HTML as motion-ready if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('has-motion');
    isMotionReady = true;

    observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.05
    });
  }
}

/**
 * IntersectionObserver callback
 */
function onIntersect(entries, obs) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add('is-revealed');
      obs.unobserve(el);
    }
  });
}

/**
 * Refresh reveals for current DOM tree (called on SPA page mount or view changes)
 */
export function refreshScrollReveals(container = document) {
  if (isReducedMotion || !isMotionReady || !observer) {
    revealAllInstantly(container);
    return;
  }

  const scope = container.querySelector ? container : document;
  const selector = REVEAL_SELECTORS.join(', ');
  const elements = scope.querySelectorAll(selector);

  elements.forEach((el, index) => {
    // If already revealed, do not re-hide
    if (el.classList.contains('is-revealed')) return;

    el.classList.add('reveal-item');

    // Add staggered delay to child cards within the same group
    const parent = el.parentElement;
    if (parent) {
      const siblings = Array.from(parent.children).filter(c => c.classList.contains('reveal-item'));
      const sIndex = siblings.indexOf(el);
      if (sIndex > 0 && sIndex <= 4) {
        el.style.transitionDelay = `${sIndex * 45}ms`;
      }
    }

    // Check if element is already within the initial viewport (above the fold)
    const rect = el.getBoundingClientRect();
    const inViewport = (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) + 20 &&
      rect.bottom > 0
    );

    if (inViewport) {
      // Small tick to trigger css transition naturally
      requestAnimationFrame(() => {
        el.classList.add('is-revealed');
      });
    } else {
      observer.observe(el);
    }
  });
}

/**
 * Fallback to reveal all content immediately (reduced motion or fallback)
 */
export function revealAllInstantly(container = document) {
  const scope = container.querySelector ? container : document;
  const elements = scope.querySelectorAll('.reveal-item');
  elements.forEach((el) => {
    el.classList.add('is-revealed');
    el.style.transitionDelay = '';
  });
}

/**
 * Clean up active observer instances
 */
export function cleanupMotion() {
  if (observer) {
    observer.disconnect();
  }
}
