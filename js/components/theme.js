/**
 * ATLAS 2026 — CREATIVE FUTURISTIC THEME SYSTEM (LIGHT/DARK)
 * Default: Light theme (Warm White & Soft Lavender with Charcoal & Chartreuse)
 * Dark: Jet Black (#0B0B0B), Charcoal (#151515), Lavender (#CBB3E8) & Chartreuse (#D4FF3F)
 */

import { showToast } from './toast.js';

let currentTheme = 'light';

export function getTheme() {
  return currentTheme;
}

export function initTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem('atlas_theme_pref');
  } catch (e) {}

  // Light theme is the default per requirements
  const initial = saved || 'light';
  applyTheme(initial, false);

  // Bind masthead theme toggle button
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  }

  // Bind mobile drawer theme toggle button
  const mobileThemeBtn = document.getElementById('mobile-theme-toggle-btn');
  if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  }
}

export function toggleTheme() {
  const next = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(next, true);
}

export function applyTheme(theme, save = true) {
  currentTheme = theme;
  const docRoot = document.documentElement;
  docRoot.setAttribute('data-theme', theme);
  document.body.className = theme === 'light' ? 'theme-light' : 'theme-dark';

  // Update meta tags for browser chrome
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme === 'light' ? '#F8F7F4' : '#0B0B0B');
  }
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  if (metaColorScheme) {
    metaColorScheme.setAttribute('content', theme);
  }

  // Update masthead icon and label
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');
  if (themeIcon) {
    themeIcon.textContent = theme === 'light' ? '☼' : '☽';
  }
  if (themeLabel) {
    themeLabel.textContent = theme === 'light' ? 'Light' : 'Dark';
  }

  // Update mobile drawer icon and label
  const mobIcon = document.getElementById('mobile-theme-icon');
  const mobLabel = document.getElementById('mobile-theme-label');
  if (mobIcon) {
    mobIcon.textContent = theme === 'light' ? '☼' : '☽';
  }
  if (mobLabel) {
    mobLabel.textContent = theme === 'light' ? 'Switch to Dark' : 'Switch to Light';
  }

  // Notify 3D engine and custom listeners (both variants for complete compatibility)
  window.dispatchEvent(new CustomEvent('atlas:themechange', { detail: { theme } }));
  window.dispatchEvent(new CustomEvent('atlas:theme-change', { detail: { theme } }));

  if (save) {
    try {
      localStorage.setItem('atlas_theme_pref', theme);
    } catch (e) {}
    showToast(`Activated ${theme.toUpperCase()} theme`);
  }
}
