/**
 * ATLAS 3.0 — SPA CLIENT-SIDE ROUTER & TRANSITION COORDINATOR
 * Handles dimensional page transitions, route parameters (/projects/:slug),
 * history navigation (pushState/popstate), dynamic unmounting/cleanup,
 * document title updates, and masthead active link tracking.
 */
import { renderHomePage } from './pages/home.js';
import { renderAboutPage } from './pages/about.js';
import { renderProjectsPage } from './pages/projects.js';
import { renderProjectDetailPage } from './pages/project-detail.js';
import { renderSkillsPage } from './pages/skills.js';
import { renderToolsPage } from './pages/tools.js';
import { renderContactPage } from './pages/contact.js';
import { renderNotFoundPage } from './pages/not-found.js';
import { updateMastheadActiveLink } from './components/masthead.js';
import { getProjectBySlug } from './data/projects.js';
import { refreshScrollReveals } from './components/motion.js';
import { playMonogramReveal, isMonogramRevealActive } from './components/monogram-reveal.js';
import { playThorReveal } from './components/thor-reveal.js';

let currentCleanup = null;
let currentPath = '';
let isNavigating = false;
let navTimer = null;
let initialLoad = true;

const ROUTE_TABLE = [
  { pattern: /^\/$/, handler: renderHomePage, title: 'ATLAS 3.0 — Architectural 3D Developer Portfolio' },
  { pattern: /^\/about\/?$/, handler: renderAboutPage, title: 'ATLAS — Biography, Credentials & Philosophy' },
  { pattern: /^\/projects\/?$/, handler: renderProjectsPage, title: 'ATLAS — Curated Engineering Projects' },
  { 
    pattern: /^\/projects\/([a-zA-Z0-9_-]+)\/?$/, 
    handler: (params) => renderProjectDetailPage(params),
    title: (params) => {
      const p = getProjectBySlug(params.slug);
      return p ? `ATLAS — ${p.name} | Architecture Case Study` : 'ATLAS — Project Detail';
    }
  },
  { pattern: /^\/skills\/?$/, handler: renderSkillsPage, title: 'ATLAS — Technical Skills & Repertoire' },
  { pattern: /^\/tools\/?$/, handler: renderToolsPage, title: 'ATLAS — Developer Tools & Workspace' },
  { pattern: /^\/contact\/?$/, handler: renderContactPage, title: 'ATLAS — Contact & Transmission Portal' },
  { 
    pattern: /^\/resume\/?$/, 
    handler: (params) => {
      const res = renderAboutPage(params);
      setTimeout(() => {
        const el = document.getElementById('resume-studio');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 250);
      return res;
    }, 
    title: 'ATLAS — Curriculum Vitae & Resume Studio' 
  },
  { 
    pattern: /^\/beyond-the-code\/?$/, 
    handler: (params) => {
      const res = renderAboutPage(params);
      setTimeout(() => {
        const el = document.getElementById('beyond-the-code');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 260);
      return res;
    }, 
    title: 'ATLAS — Beyond the Code & Creative Pursuits' 
  }
];

export function initRouter() {
  // Listen for history popstate (back / forward)
  window.addEventListener('popstate', () => {
    handleRoute(window.location.pathname, false);
  });

  // Intercept all internal navigation link clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    // Ignore if modified click (Ctrl, Cmd, Shift), external, download, or explicit target
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    if (link.target === '_blank' || link.hasAttribute('download')) return;

    const href = link.getAttribute('href');
    const routeAttr = link.getAttribute('data-route');
    const targetUrl = routeAttr || href;

    if (!targetUrl) return;

    // Check if it's an internal route starting with '/'
    if (targetUrl.startsWith('/') && !targetUrl.startsWith('//')) {
      e.preventDefault();
      navigateTo(targetUrl);
    }
  });

  // Handle initial page load route without artificial delay
  handleRoute(window.location.pathname, false);
}

function isAboutRoute(p) {
  if (!p) return false;
  const clean = p.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';
  return clean === '/about' || clean === '/beyond-the-code' || clean === '/resume';
}

export function navigateTo(path, force = false) {
  // Normalize path
  let target = path.trim();
  if (target.length > 1 && target.endsWith('/')) {
    target = target.slice(0, -1);
  }
  if (!target) target = '/';

  const isTargetAbout = isAboutRoute(target);

  // Prevent redundant navigation unless forced or re-clicking About
  if (target === currentPath && !force && !isTargetAbout) return;

  if (target !== currentPath) {
    window.history.pushState({}, '', target);
  }
  handleRoute(target, true, isTargetAbout);
}

export function triggerMonogramAboutReveal() {
  navigateTo('/about', true);
}
export const triggerThorAboutReveal = triggerMonogramAboutReveal;

function handleRoute(rawPath, isPush = false, isExplicitAbout = false) {
  // Normalize path
  let path = rawPath.trim();
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  if (!path) path = '/';

  const isTargetAbout = isAboutRoute(path);

  // Prevent re-navigating to the current route unless initial load or explicit click on About
  if (!initialLoad && path === currentPath && !isExplicitAbout) return;

  const prevPath = currentPath;
  currentPath = path;

  const outlet = document.getElementById('app-outlet');
  if (!outlet) {
    console.error('Fatal: #app-outlet container element not found in DOM');
    return;
  }

  // Clear any existing transition timer
  if (navTimer) {
    clearTimeout(navTimer);
    navTimer = null;
  }

  // Check reduced motion preference
  const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Find matching route
  let matched = null;
  let params = {};

  for (const route of ROUTE_TABLE) {
    const match = path.match(route.pattern);
    if (match) {
      matched = route;
      if (match[1]) {
        params.slug = match[1];
      }
      break;
    }
  }

  // Dispatch global route change event (HeroStage & Telemetry listen to this)
  window.dispatchEvent(new CustomEvent('atlas:route-change', {
    detail: { path, prevPath, params }
  }));

  // Determine if cinematic ATLAS Monogram reveal should play:
  // Must NOT be initial direct page load, must NOT be reduced-motion, and target must be About route.
  const shouldPlayMonogram = !initialLoad && !isReducedMotion && isTargetAbout;

  // Helper to mount the incoming page
  const mountNewPage = (isRevealTransition = false) => {
    // 1. Cleanup previous page cleanly
    if (typeof currentCleanup === 'function') {
      try {
        currentCleanup();
      } catch (err) {
        console.warn('Page cleanup error:', err);
      }
      currentCleanup = null;
    }

    // 2. Clear outlet DOM
    outlet.innerHTML = '';

    // 3. Update Title
    if (matched) {
      if (typeof matched.title === 'function') {
        document.title = matched.title(params);
      } else {
        document.title = matched.title;
      }
    } else {
      document.title = 'ATLAS 3.0 — 404 Coordinate Not Found';
    }

    // 4. Scroll to top
    window.scrollTo(0, 0);

    // 5. Update masthead active status
    updateMastheadActiveLink(path);

    // 6. Render and Mount Incoming Page
    let pageResult;
    if (matched) {
      pageResult = matched.handler(params);
    } else {
      pageResult = renderNotFoundPage();
    }

    if (pageResult && typeof pageResult.render === 'function') {
      outlet.innerHTML = pageResult.render();
      if (typeof pageResult.mount === 'function') {
        pageResult.mount();
      }
      currentCleanup = () => {
        if (typeof pageResult.unmount === 'function') {
          pageResult.unmount();
        }
      };
    } else if (pageResult && pageResult.element) {
      outlet.appendChild(pageResult.element);
      currentCleanup = pageResult.cleanup;
    }

    // 7. Trigger scroll-reveal observer for incoming content
    refreshScrollReveals(outlet);

    // 7.1 Handle hash scrolling if navigating to an anchor like #beyond-the-code
    if (window.location.hash) {
      setTimeout(() => {
        try {
          const target = document.querySelector(window.location.hash);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        } catch (e) {}
      }, 260);
    }

    // 8. Complete entrance transition
    if (isRevealTransition) {
      outlet.className = 'app-outlet';
      isNavigating = false;
      initialLoad = false;
    } else if (!initialLoad && !isReducedMotion) {
      outlet.className = 'app-outlet page-transition-enter';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          outlet.className = 'app-outlet page-transition-enter-active';
          navTimer = setTimeout(() => {
            outlet.className = 'app-outlet';
            isNavigating = false;
          }, 240);
        });
      });
    } else {
      outlet.className = 'app-outlet';
      isNavigating = false;
      initialLoad = false;
    }
  };

  if (initialLoad) {
    mountNewPage(false);
    initialLoad = false;
  } else if (isReducedMotion) {
    mountNewPage(false);
  } else if (shouldPlayMonogram) {
    isNavigating = true;
    playMonogramReveal({
      onMount: () => {
        mountNewPage(true);
      },
      onComplete: () => {
        isNavigating = false;
      }
    });
  } else {
    // Standard subtle route transition (100ms quick fade down)
    isNavigating = true;
    outlet.className = 'app-outlet page-transition-exit';
    navTimer = setTimeout(() => {
      mountNewPage(false);
    }, 100);
  }
}

export function getCurrentPath() {
  return currentPath;
}
