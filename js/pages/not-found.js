/**
 * ATLAS 2.0 — 404 NOT FOUND PAGE
 * Displayed when an unknown route is visited.
 */
export function renderNotFoundPage() {
  const container = document.createElement('div');
  container.className = 'page-container page-not-found';

  container.innerHTML = `
    <div class="empty-state glass-panel" style="margin: 6rem auto; max-width: 640px; text-align: center; padding: 4rem 2rem;">
      <div class="not-found-code" style="font-family: var(--font-heading); font-size: 5rem; font-weight: 700; color: var(--champagne-gold); line-height: 1;">
        404
      </div>
      <div class="page-badge" style="margin: 1.5rem auto;"><span class="badge-dot"></span>COORDINATE UNRESOLVED</div>
      <h1 class="page-title" style="font-size: 2rem; margin-bottom: 1rem;">Architectural Vector Not Found</h1>
      <p class="page-lead" style="margin: 0 auto 2.5rem; max-width: 480px; font-size: 1rem;">
        The requested URL does not match any route or project in ATLAS 2.0. 
        Select a verified waypoint below.
      </p>
      <div class="not-found-actions" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="/" class="btn-primary" data-route="/">Return to Home</a>
        <a href="/projects" class="btn-secondary" data-route="/projects">Explore Projects &rarr;</a>
        <a href="/tools" class="btn-secondary" data-route="/tools">Developer Tools</a>
      </div>
    </div>
  `;

  return {
    element: container,
    cleanup: () => {}
  };
}
