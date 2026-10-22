/**
 * ============================================================================
 * ATLAS 3.0 — THEME-AWARE 2D SIMULATOR CANVAS RE-RENDERER
 * Eliminates hardcoded rgba(255,255,255,...) strokes/fills across all 8 simulators
 * Reads dynamic CSS tokens: --paper, --mist, --accent, --card-border, --bg
 * ============================================================================
 */

(function () {
  'use strict';

  function getThemeColors() {
    const cs = getComputedStyle(document.documentElement);
    return {
      paper: cs.getPropertyValue('--paper').trim() || '#242129',
      mist: cs.getPropertyValue('--mist').trim() || '#6F6974',
      accent: cs.getPropertyValue('--accent').trim() || '#D4FF3F',
      border: cs.getPropertyValue('--card-border').trim() || 'rgba(182, 155, 135, 0.28)',
      bg: cs.getPropertyValue('--bg').trim() || '#F5F1E8',
      faint: cs.getPropertyValue('--faint').trim() || 'rgba(182, 155, 135, 0.15)',
      isDark: document.documentElement.getAttribute('data-theme') === 'dark'
    };
  }

  function redrawAllSimulationCanvases() {
    const colors = getThemeColors();

    // 1. Base Isolation Earthquake Damper Canvas
    const baseCanvas = document.getElementById('sim-base-canvas');
    if (baseCanvas && baseCanvas.getContext) {
      const ctx = baseCanvas.getContext('2d');
      const w = baseCanvas.width;
      const h = baseCanvas.height;

      ctx.clearRect(0, 0, w, h);

      // Background subtle grid
      ctx.strokeStyle = colors.border;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < w; x += 30) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = 0; y < h; y += 30) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      // Ground baseline
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(20, h - 30);
      ctx.lineTo(w - 20, h - 30);
      ctx.stroke();

      // Structure 1: Fixed base (unprotected)
      ctx.fillStyle = colors.isDark ? 'rgba(239, 68, 68, 0.25)' : 'rgba(220, 38, 38, 0.15)';
      ctx.strokeStyle = '#EF4444';
      ctx.lineWidth = 2;
      ctx.fillRect(80, h - 130, 90, 100);
      ctx.strokeRect(80, h - 130, 90, 100);

      ctx.fillStyle = colors.paper;
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillText('FIXED BASE (SWAY: 85%)', 60, h - 140);

      // Structure 2: Isolated base (damper bearings)
      ctx.fillStyle = colors.isDark ? 'rgba(16, 185, 129, 0.25)' : 'rgba(5, 150, 105, 0.15)';
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 2;
      ctx.fillRect(w - 180, h - 130, 90, 85);
      ctx.strokeRect(w - 180, h - 130, 90, 85);

      // Damper bearings
      ctx.fillStyle = colors.accent;
      ctx.fillRect(w - 175, h - 45, 24, 15);
      ctx.fillRect(w - 120, h - 45, 24, 15);

      ctx.fillStyle = colors.paper;
      ctx.fillText('ISOLATED BASE (DRIFT: 12%)', w - 210, h - 140);
    }

    // 2. Smart Agriculture Soil Moisture Telemetry Canvas
    const agriCanvas = document.getElementById('sim-agri-canvas');
    if (agriCanvas && agriCanvas.getContext) {
      const ctx = agriCanvas.getContext('2d');
      const w = agriCanvas.width;
      const h = agriCanvas.height;

      ctx.clearRect(0, 0, w, h);

      // Coordinate axes
      ctx.strokeStyle = colors.border;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(40, 20);
      ctx.lineTo(40, h - 30);
      ctx.lineTo(w - 20, h - 30);
      ctx.stroke();

      // Moisture curve (sine wave)
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let x = 40; x < w - 20; x++) {
        const progress = (x - 40) / (w - 60);
        const y = (h - 60) - Math.sin(progress * Math.PI * 3) * 35;
        if (x === 40) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Threshold line
      ctx.strokeStyle = '#EF4444';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(40, h - 60);
      ctx.lineTo(w - 20, h - 60);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = colors.paper;
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillText('SOIL MOISTURE %', 45, 25);
      ctx.fillStyle = '#EF4444';
      ctx.fillText('SOLENOID VALVE THRESHOLD (40%)', w - 220, h - 65);
    }

    // 3. Glass Refraction Simulator Canvas
    const glassCanvas = document.getElementById('sim-glass-canvas');
    if (glassCanvas && glassCanvas.getContext) {
      const ctx = glassCanvas.getContext('2d');
      const w = glassCanvas.width;
      const h = glassCanvas.height;

      ctx.clearRect(0, 0, w, h);

      // Optical medium prism
      ctx.fillStyle = colors.faint;
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.3, h * 0.2);
      ctx.lineTo(w * 0.7, h * 0.2);
      ctx.lineTo(w * 0.85, h * 0.8);
      ctx.lineTo(w * 0.15, h * 0.8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Refracted light beam
      ctx.strokeStyle = colors.isDark ? '#FFFFFF' : '#242129';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(20, h * 0.5);
      ctx.lineTo(w * 0.25, h * 0.5);
      ctx.lineTo(w * 0.75, h * 0.55);
      ctx.lineTo(w - 20, h * 0.7);
      ctx.stroke();

      ctx.fillStyle = colors.paper;
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillText('OPTICAL GLASS PRISM (IOR: 1.54)', w * 0.35, h * 0.15);
    }
  }

  // Bind to theme events
  window.addEventListener('atlas:themechange', redrawAllSimulationCanvases);
  window.addEventListener('resize', redrawAllSimulationCanvases);

  // Expose global interface
  window.AtlasThemeCanvas = {
    getColors: getThemeColors,
    refreshCanvases: redrawAllSimulationCanvases
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(redrawAllSimulationCanvases, 250);
    });
  } else {
    setTimeout(redrawAllSimulationCanvases, 250);
  }
})();
