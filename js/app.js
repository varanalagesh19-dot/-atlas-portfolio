/**
 * ATLAS 2.0 — APPLICATION BOOTSTRAPPER (js/app.js)
 * Initializes Theme Manager, Masthead, Command Palette,
 * Three.js 3D Spatial Canvas, and SPA Client-Side Router.
 */
import { initTheme, getTheme } from './components/theme.js';
import { initMasthead } from './components/masthead.js';
import { initCommandPalette } from './components/cmd-palette.js';
import { initTelemetryDock } from './components/telemetry-dock.js';
import { HeroStage } from './3d/hero-stage.js';
import { initRouter, navigateTo } from './router.js';
import { initMotion } from './components/motion.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Visual Theme (Warm Ivory default, Obsidian on toggle)
  initTheme();

  // 2. Initialize Subtle Progressive Motion System (Scroll Reveals & Transitions)
  initMotion();

  // 3. Initialize Top Masthead & Mobile Navigation Drawer
  initMasthead();

  // 4. Initialize Accessible Command Palette (Ctrl+K / Cmd+K) with Router
  initCommandPalette(navigateTo);

  // 5. Initialize Three.js Architectural Spatial Hero Stage
  let heroStage = null;
  const canvas = document.getElementById('stage-canvas');
  if (canvas && typeof THREE !== 'undefined') {
    try {
      heroStage = new HeroStage('stage-canvas');
      heroStage.setTheme(getTheme());
      window.atlasStage = heroStage;

      // Sync 3D materials on theme change
      window.addEventListener('atlas:theme-change', (e) => {
        if (heroStage && e.detail && e.detail.theme) {
          heroStage.setTheme(e.detail.theme);
        }
      });
    } catch (err) {
      console.warn('Three.js HeroStage initialization failed gracefully:', err);
    }
  }

  // 6. Initialize Truthful System Telemetry Dock & Floating Back-to-Top Button
  initTelemetryDock();

  // 7. Initialize Client-Side SPA Router & Transition Coordinator
  initRouter();

  // 8. Gracefully dismiss minimal ATLAS preloader veil (quick 250-320ms reveal)
  dismissPreloader();
});

function dismissPreloader() {
  const preloader = document.getElementById('atlas-preloader');
  if (!preloader) return;

  const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion) {
    if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
    return;
  }

  // Allow short, elegant wordmark reveal (200ms) before smooth 300ms fadeout
  setTimeout(() => {
    preloader.classList.add('is-loaded');
    setTimeout(() => {
      if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
    }, 320);
  }, 200);

  // Absolute fallback safety guard (never block UI if anything hangs)
  setTimeout(() => {
    if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
  }, 700);
}
