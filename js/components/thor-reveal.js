/**
 * ATLAS — CINEMATIC THOR-INSPIRED ABOUT PAGE REVEAL
 * Short, high-performance cinematic transition featuring storm energy,
 * electric-blue branching lightning, glowing ember particles,
 * original stylized lightning-hammer silhouette, shockwave impact,
 * and a clean flash reveal into the About page.
 * 
 * Strict specifications:
 * - Duration: ~1.8 seconds (skip immediately via ESC, Space, or click).
 * - Zero copyrighted movie footage or Marvel film clips (original vector & canvas art).
 * - Respects prefers-reduced-motion (instant clean reveal).
 * - Prevents duplicate instances and memory leaks.
 * - Restores scrolling, focus, and cleans up DOM unconditionally.
 */

let activeRevealInstance = null;

export function isThorRevealActive() {
  return activeRevealInstance !== null;
}

export function skipThorReveal() {
  if (activeRevealInstance && typeof activeRevealInstance.skip === 'function') {
    activeRevealInstance.skip();
  }
}

/**
 * Triggers the Thor-inspired cinematic reveal.
 * @param {Object} options
 * @param {Function} options.onMount Callback to mount the About page behind the flash
 * @param {Function} options.onComplete Callback when the reveal overlay has fully dissipated
 * @param {number} [options.duration=1800] Total duration in milliseconds
 */
export function playThorReveal({ onMount, onComplete, duration = 1800 }) {
  // If an instance is already running, skip it immediately before starting
  if (activeRevealInstance) {
    try {
      activeRevealInstance.skip();
    } catch (e) {
      console.warn('Error skipping previous reveal:', e);
    }
  }

  // 1. Check for reduced motion preference
  const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion) {
    if (typeof onMount === 'function') onMount();
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  // State flags
  let isMounted = false;
  let isDone = false;
  let animFrameId = null;
  let startTime = null;
  let audioCtx = null;

  // Safe caller helpers
  const callMountOnce = () => {
    if (!isMounted) {
      isMounted = true;
      if (typeof onMount === 'function') {
        try {
          onMount();
        } catch (err) {
          console.error('Error mounting page during Thor reveal:', err);
        }
      }
    }
  };

  // 2. Build Overlay DOM Structure
  const overlay = document.createElement('div');
  overlay.id = 'thor-reveal-overlay';
  overlay.className = 'thor-reveal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Cinematic About Page Transition');

  overlay.innerHTML = `
    <!-- 1. Deep Storm Atmosphere Backdrop -->
    <div class="thor-storm-backdrop" aria-hidden="true"></div>
    <div class="thor-storm-clouds" aria-hidden="true"></div>

    <!-- 2. High-Performance Lightning & Particle Canvas -->
    <canvas class="thor-canvas" aria-hidden="true"></canvas>

    <!-- 3. Center Focal Stage: Original Stylized Lightning-Hammer Silhouette -->
    <div class="thor-focal-stage" aria-hidden="true">
      <div class="thor-shockwave-ring" aria-hidden="true"></div>
      <div class="thor-shockwave-ring-outer" aria-hidden="true"></div>

      <!-- Original Stylized Geometric Hammer (Bespoke SVG Vector) -->
      <svg class="thor-hammer-silhouette" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Hammer Head Bevels & Metal Faces -->
        <polygon points="40,30 160,30 175,55 160,80 40,80 25,55" class="thor-hammer-head" />
        <polygon points="45,34 155,34 168,55 155,76 45,76 32,55" class="thor-hammer-bevel" />
        
        <!-- Original Central Geometric Runic Lightning Conduit Glyphs -->
        <path d="M100,42 L92,56 L104,56 L96,68" class="thor-hammer-glyph" />
        <line x1="60" y1="55" x2="80" y2="55" stroke="#5DE6FF" stroke-width="1.5" stroke-dasharray="2,3" />
        <line x1="120" y1="55" x2="140" y2="55" stroke="#5DE6FF" stroke-width="1.5" stroke-dasharray="2,3" />

        <!-- Chamfered Metallic Top Plate -->
        <rect x="75" y="24" width="50" height="6" rx="2" fill="#22252F" stroke="#CBB3E8" stroke-width="1.5" />

        <!-- Haft Collar & Shaft -->
        <rect x="91" y="80" width="18" height="12" rx="2" fill="#333846" stroke="#5DE6FF" stroke-width="1" />
        <rect x="94" y="92" width="12" height="110" rx="3" class="thor-hammer-haft" />

        <!-- Leather Grip Diagonal Bands -->
        <line x1="94" y1="108" x2="106" y2="104" class="thor-hammer-wrap" />
        <line x1="94" y1="124" x2="106" y2="120" class="thor-hammer-wrap" />
        <line x1="94" y1="140" x2="106" y2="136" class="thor-hammer-wrap" />
        <line x1="94" y1="156" x2="106" y2="152" class="thor-hammer-wrap" />
        <line x1="94" y1="172" x2="106" y2="168" class="thor-hammer-wrap" />
        <line x1="94" y1="188" x2="106" y2="184" class="thor-hammer-wrap" />

        <!-- Aerodynamic Beveled Pommel & Runic Base -->
        <polygon points="90,202 110,202 114,214 86,214" class="thor-hammer-pommel" />
        <circle cx="100" cy="222" r="5" fill="#151515" stroke="#5DE6FF" stroke-width="1.5" />
      </svg>
    </div>

    <!-- 4. Clean Lightning Flash Curtain -->
    <div class="thor-screen-flash" aria-hidden="true"></div>

    <!-- 5. Status Telemetry & Skip Button -->
    <div class="thor-meta-bar">
      <div class="thor-status-label">
        <span class="thor-status-dot"></span>
        <span>ENERGY CONDUIT // REVEAL</span>
      </div>
      <button type="button" class="thor-skip-btn" id="thor-skip-action" aria-label="Skip cinematic reveal animation">
        <span>Skip [ESC]</span>
      </button>
    </div>
  `;

  document.body.appendChild(overlay);

  // Grab elements
  const canvas = overlay.querySelector('.thor-canvas');
  const hammer = overlay.querySelector('.thor-hammer-silhouette');
  const ringInner = overlay.querySelector('.thor-shockwave-ring');
  const ringOuter = overlay.querySelector('.thor-shockwave-ring-outer');
  const flash = overlay.querySelector('.thor-screen-flash');
  const skipBtn = overlay.querySelector('#thor-skip-action');
  const ctx = canvas ? canvas.getContext('2d') : null;

  // 3. Canvas Sizing with High-DPI support
  let width = window.innerWidth;
  let height = window.innerHeight;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  const resizeCanvas = () => {
    if (!canvas || !ctx) return;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // 4. Particle Sparks System
  const sparks = [];
  const SPARK_COUNT = 55;
  const sparkColors = ['#5DE6FF', '#00C8FF', '#FFFFFF', '#CBB3E8', '#AEEFFF'];

  for (let i = 0; i < SPARK_COUNT; i++) {
    sparks.push({
      x: width * 0.5 + (Math.random() - 0.5) * 80,
      y: height * 0.45 + (Math.random() - 0.5) * 80,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4 - 1,
      size: Math.random() * 2.5 + 1,
      color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
      alpha: Math.random() * 0.7 + 0.3,
      decay: Math.random() * 0.015 + 0.008
    });
  }

  // Radial spark explosion trigger on impact
  const triggerSparkExplosion = () => {
    const cx = width * 0.5;
    const cy = height * 0.45;
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 9 + 3;
      sparks.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3.5 + 1.5,
        color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
        alpha: 1,
        decay: Math.random() * 0.03 + 0.02
      });
    }
  };

  // 5. Procedural Fractal Lightning Generator
  // Creates multi-segmented branching bolt between two coordinates
  function createLightningBolt(x1, y1, x2, y2, displace = 70, branchProb = 0.35, depth = 0) {
    const segments = [];
    
    function subdivide(sx, sy, ex, ey, d, curDepth) {
      if (d < 5 || curDepth > 6) {
        segments.push({ sx, sy, ex, ey });
        return;
      }
      const mx = (sx + ex) / 2;
      const my = (sy + ey) / 2;
      // Perpendicular normal displacement with randomized jitter
      const dx = ex - sx;
      const dy = ey - sy;
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len;
      const ny = dx / len;
      const offset = (Math.random() - 0.5) * d;

      const cx = mx + nx * offset;
      const cy = my + ny * offset;

      subdivide(sx, sy, cx, cy, d * 0.55, curDepth + 1);
      subdivide(cx, cy, ex, ey, d * 0.55, curDepth + 1);

      // Child branch bifurcation
      if (Math.random() < branchProb && curDepth < 4) {
        const branchAngle = (Math.random() - 0.5) * 0.75;
        const bx = cx + (dx * 0.6 * Math.cos(branchAngle) - dy * 0.6 * Math.sin(branchAngle));
        const by = cy + (dx * 0.6 * Math.sin(branchAngle) + dy * 0.6 * Math.cos(branchAngle));
        subdivide(cx, cy, bx, by, d * 0.4, curDepth + 2);
      }
    }

    subdivide(x1, y1, x2, y2, displace, depth);
    return segments;
  }

  // Draw bolt segments with multi-layered electric glow
  function drawBolt(segments, glowColor = '#5DE6FF', coreColor = '#FFFFFF', baseWidth = 2.5) {
    if (!ctx || segments.length === 0) return;

    // 1. Outer Diffuse Glow
    ctx.save();
    ctx.beginPath();
    for (const seg of segments) {
      ctx.moveTo(seg.sx, seg.sy);
      ctx.lineTo(seg.ex, seg.ey);
    }
    ctx.strokeStyle = 'rgba(93, 230, 255, 0.35)';
    ctx.lineWidth = baseWidth * 3.8;
    ctx.stroke();

    // 2. High-Voltage Electric Arc
    ctx.beginPath();
    for (const seg of segments) {
      ctx.moveTo(seg.sx, seg.sy);
      ctx.lineTo(seg.ex, seg.ey);
    }
    ctx.strokeStyle = glowColor;
    ctx.lineWidth = baseWidth * 1.8;
    ctx.stroke();

    // 3. Core White Thermal Arc
    ctx.beginPath();
    for (const seg of segments) {
      ctx.moveTo(seg.sx, seg.sy);
      ctx.lineTo(seg.ex, seg.ey);
    }
    ctx.strokeStyle = coreColor;
    ctx.lineWidth = Math.max(1, baseWidth * 0.75);
    ctx.stroke();
    ctx.restore();
  }

  // 6. Subtle Procedural Web Audio Synthesis (Tasteful, soft, zero external files)
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
      }

      // Soft low sub-bass rumble
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(42, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(26, audioCtx.currentTime + 1.4);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 0.35);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.4);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 1.45);
    }
  } catch (e) {
    // Gracefully ignore if autoplay policy or browser audio is disabled
  }

  // Active procedural lightning bolts in the animation
  let activeBolts = [];
  let nextBoltTime = 120;
  let impactTriggered = false;

  // 7. Cleanup and Teardown Sequence
  const teardown = () => {
    if (isDone) return;
    isDone = true;

    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }

    window.removeEventListener('resize', resizeCanvas);
    document.removeEventListener('keydown', onKeyDown);

    if (audioCtx && audioCtx.state !== 'closed') {
      try { audioCtx.close(); } catch (e) {}
    }

    callMountOnce();

    overlay.classList.add('is-exiting');

    setTimeout(() => {
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
      activeRevealInstance = null;
      if (typeof onComplete === 'function') {
        try { onComplete(); } catch (e) {}
      }
    }, 280);
  };

  // Immediate Skip Handler
  const skip = () => {
    callMountOnce();
    teardown();
  };

  // 8. Event Listeners for Skip
  const onKeyDown = (e) => {
    if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      skip();
    }
  };
  document.addEventListener('keydown', onKeyDown);

  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      skip();
    });
  }

  // Clicking anywhere on the backdrop also immediately completes the reveal
  overlay.addEventListener('click', () => {
    skip();
  });

  // 9. Animation Render Loop (60 FPS)
  const render = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    if (!ctx) {
      callMountOnce();
      teardown();
      return;
    }

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Timeline phases:
    // Phase 1 (0ms - 350ms): Storm clouds gather, hammer fades into view
    if (elapsed > 200 && hammer && !hammer.classList.contains('is-visible')) {
      hammer.classList.add('is-visible');
    }

    // Phase 2 (300ms - 900ms): Atmospheric electric arcs charging toward hammer
    if (elapsed > nextBoltTime && elapsed < 1350) {
      const cx = width * 0.5 + (Math.random() - 0.5) * 120;
      const cy = height * 0.42 + (Math.random() - 0.5) * 80;
      const startX = Math.random() * width;
      const startY = Math.random() * (height * 0.35);

      activeBolts.push({
        segments: createLightningBolt(startX, startY, cx, cy, 55, 0.3),
        createdAt: elapsed,
        duration: Math.random() * 90 + 70,
        color: Math.random() > 0.4 ? '#5DE6FF' : '#CBB3E8',
        width: Math.random() * 2 + 1.5
      });

      nextBoltTime = elapsed + (Math.random() * 110 + 60);
    }

    // Phase 3 (1050ms - 1300ms): Massive Central Impact Strike
    if (elapsed >= 1050 && !impactTriggered) {
      impactTriggered = true;

      // 1. Hammer impact state
      if (hammer) hammer.classList.add('is-impact');

      // 2. Shockwave blast
      if (ringInner) ringInner.classList.add('is-blasting');
      if (ringOuter) ringOuter.classList.add('is-blasting');

      // 3. Screen flash
      if (flash) flash.classList.add('is-flashing');

      // 4. Subtle camera impulse
      overlay.classList.add('thor-impact-shake');
      setTimeout(() => overlay.classList.remove('thor-impact-shake'), 180);

      // 5. Radial particle explosion
      triggerSparkExplosion();

      // 6. Massive central vertical lightning bolts
      const cx = width * 0.5;
      const cy = height * 0.42;
      activeBolts.push({
        segments: createLightningBolt(cx - 80, 0, cx, cy, 90, 0.45),
        createdAt: elapsed,
        duration: 220,
        color: '#FFFFFF',
        width: 4
      });
      activeBolts.push({
        segments: createLightningBolt(cx + 90, 0, cx, cy, 85, 0.45),
        createdAt: elapsed,
        duration: 240,
        color: '#5DE6FF',
        width: 3.5
      });
    }

    // Phase 4 (1300ms): Mount About page behind the white flash
    if (elapsed >= 1280 && !isMounted) {
      callMountOnce();
    }

    // Draw active lightning bolts
    activeBolts = activeBolts.filter(bolt => {
      const age = elapsed - bolt.createdAt;
      if (age < bolt.duration) {
        drawBolt(bolt.segments, bolt.color, '#FFFFFF', bolt.width);
        return true;
      }
      return false;
    });

    // Update and draw spark particles
    for (let i = sparks.length - 1; i >= 0; i--) {
      const p = sparks[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05; // Gentle gravity
      p.vx *= 0.98; // Friction
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > height + 20) {
        sparks.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // Phase 5 (1650ms - 1800ms): Transition complete, fade out and teardown
    if (elapsed >= duration) {
      callMountOnce();
      teardown();
      return;
    }

    animFrameId = requestAnimationFrame(render);
  };

  // Start rendering
  animFrameId = requestAnimationFrame(render);

  // Safety Hard Timeout (guarantees completion even if tab is backgrounded)
  const safetyTimer = setTimeout(() => {
    if (!isDone) {
      callMountOnce();
      teardown();
    }
  }, duration + 500);

  // Store instance controller
  activeRevealInstance = {
    skip: () => {
      clearTimeout(safetyTimer);
      skip();
    }
  };

  return activeRevealInstance;
}
