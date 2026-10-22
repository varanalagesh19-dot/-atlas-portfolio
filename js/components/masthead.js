/**
 * ATLAS 2.0 — MASTHEAD & NAVIGATION CONTROLLER
 */

export function initMasthead() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavCloseBtn = document.getElementById('mobile-nav-close-btn');

  function getFocusableElements() {
    if (!mobileNavDrawer) return [];
    return Array.from(
      mobileNavDrawer.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])')
    );
  }

  function openMobileNav() {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.add('is-open');
    mobileNavDrawer.setAttribute('aria-hidden', 'false');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-nav-active');

    // Move focus inside drawer for accessibility
    requestAnimationFrame(() => {
      const focusables = getFocusableElements();
      if (focusables.length > 0) {
        // Focus first link or close button
        const firstLink = mobileNavDrawer.querySelector('.mobile-nav-link') || focusables[0];
        firstLink.focus();
      }
    });
  }

  function closeMobileNav(returnFocus = true) {
    if (!mobileNavDrawer || !mobileNavDrawer.classList.contains('is-open')) return;
    mobileNavDrawer.classList.remove('is-open');
    mobileNavDrawer.setAttribute('aria-hidden', 'true');
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      if (returnFocus) mobileMenuBtn.focus();
    }
    document.body.classList.remove('mobile-nav-active');
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (mobileNavDrawer && mobileNavDrawer.classList.contains('is-open')) {
        closeMobileNav(false);
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileNavCloseBtn) {
    mobileNavCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileNav(true);
    });
  }

  // Close when clicking drawer backdrop
  if (mobileNavDrawer) {
    mobileNavDrawer.addEventListener('click', (e) => {
      if (e.target === mobileNavDrawer) {
        closeMobileNav(true);
      }
    });
  }

  // Keyboard navigation: Escape key and Focus Trap
  window.addEventListener('keydown', (e) => {
    if (!mobileNavDrawer || !mobileNavDrawer.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeMobileNav(true);
      return;
    }

    if (e.key === 'Tab') {
      const focusables = getFocusableElements();
      if (focusables.length === 0) return;

      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  });

  // Close on mobile link clicks (no returnFocus to burger button)
  const mobLinks = document.querySelectorAll('.mobile-nav-link');
  mobLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav(false);
    });
  });

  // Close automatically on global route changes or history popstate
  window.addEventListener('atlas:route-change', () => {
    closeMobileNav(false);
  });
  window.addEventListener('popstate', () => {
    closeMobileNav(false);
  });
}

export function updateActiveNav(currentPath) {
  const navLinks = document.querySelectorAll('.masthead__nav .nav-link, .mobile-nav-link');
  const cleanPath = currentPath.split('?')[0].replace(/\/+$/, '') || '/';

  navLinks.forEach(link => {
    const route = link.getAttribute('data-route') || link.getAttribute('href');
    if (!route) return;

    let isActive = false;
    if (cleanPath === '/' && route === '/') {
      isActive = true;
    } else if (cleanPath.startsWith('/projects') && route === '/projects') {
      isActive = true;
    } else if (cleanPath === route) {
      isActive = true;
    }

    if (isActive) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('is-active');
      link.removeAttribute('aria-current');
    }
  });
}

export const updateMastheadActiveLink = updateActiveNav;
