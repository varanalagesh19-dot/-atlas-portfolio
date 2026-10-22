/**
 * ATLAS — CINEMATIC MONOGRAM INTRO ANIMATION
 * A memorable animated ATLAS monogram reveal for the About transition.
 * 
 * Features:
 * 1. Initial State: Clean dark cinematic background (Jet Black & Charcoal).
 * 2. Energy Build-Up: Ambient particles & light streaks gathering toward center.
 * 3. Monogram Formation: The iconic letter "A" forms via custom SVG stroke drawing.
 * 4. Impact Moment: Controlled light burst and radial shockwave accent.
 * 5. Wordmark Reveal: "ATLAS" appears with refined typography and smooth tracking expansion.
 * 6. Page Transition: Seamlessly resolves into the existing About page.
 * 
 * Specs:
 * - Brand Colors: Jet Black (#0B0B0B), Charcoal (#151515), Lavender (#CBB3E8),
 *   Chartreuse (#D4FF3F), Hot Pink (#FF2DAB), Warm White (#F8F7F4).
 * - Total duration: ~1.85 seconds (immediately skippable via ESC, Space, or Click).
 * - Respects prefers-reduced-motion.
 * - Prevents duplicate instances and memory leaks.
 */

let activeMonogramInstance = null;

export function isMonogramRevealActive() {
  return activeMonogramInstance !== null;
}

export function skipMonogramReveal() {
  if (activeMonogramInstance && typeof activeMonogramInstance.skip === 'function') {
    activeMonogramInstance.skip();
  }
}

/**
 * Triggers the cinematic ATLAS monogram reveal transition.
 * @param {Object} options
 * @param {Function} options.onMount Callback to mount the About page behind the reveal
 * @param {Function} options.onComplete Callback when the reveal overlay has fully exited
 * @param {number} [options.duration=1850] Total duration in milliseconds
 */
export function playMonogramReveal({ onMount, onComplete, duration = 1850 }) {
  // If an instance is already running, skip it immediately to avoid duplicates
  if (activeMonogramInstance) {
    try {
      activeMonogramInstance.skip();
    } catch (e) {
      console.warn('Error clearing previous monogram reveal:', e);
    }
  }

  // 1. Accessibility: Check for reduced motion preference
  const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion) {
    if (typeof onMount === 'function') onMount();
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  // Lifecycle flags
  let isMounted = false;
  let isDone = false;
  let animFrameId = null;
  let startTime = null;
  let audioCtx = null;

  // Mount callback invoker (guaranteed single execution)
  const callMountOnce = () => {
    if (!isMounted) {
      isMounted = true;
      if (typeof onMount === 'function') {
        try {
          onMount();
        } catch (err) {
          console.error('Error mounting page during Monogram reveal:', err);
        }
      }
    }
  };

  // 2. Build Overlay DOM Structure
  const overlay = document.createElement('div');
  overlay.id = 'monogram-reveal-overlay';
  overlay.className = 'monogram-reveal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Cinematic ATLAS Monogram Reveal');

  overlay.innerHTML = `
    <!-- 1. Deep Atmospheric Backdrop -->
    <div class="monogram-backdrop" aria-hidden="true"></div>
    <div class="monogram-ambient-aura" aria-hidden="true"></div>

    <!-- 2. Light Streaks & Fine Particle Canvas -->
    <canvas class="monogram-canvas" aria-hidden="true"></canvas>

    <!-- 3. Center Focal Stage: Custom ATLAS Geometric Monogram -->
    <div class="monogram-stage" aria-hidden="true">
      <div class="monogram-impact-ring" aria-hidden="true"></div>

      <!-- Custom Architectural Letter A Monogram (Vector SVG) -->
      <svg class="monogram-svg" viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Coordinate Framing Orbit Ring -->
        <circle cx="150" cy="140" r="115" class="monogram-orbit-ring" />
        <line x1="150" y1="18" x2="150" y2="28" class="monogram-guide-grid" />
        <line x1="150" y1="252" x2="150" y2="262" class="monogram-guide-grid" />
        <line x1="28" y1="140" x2="38" y2="140" class="monogram-guide-grid" />
        <line x1="262" y1="140" x2="272" y2="140" class="monogram-guide-grid" />

        <!-- Diagonal Outer Guide Rays (Lavender) -->
        <line x1="150" y1="48" x2="68" y2="225" stroke="#CBB3E8" stroke-opacity="0.25" stroke-width="1" stroke-dasharray="2,4" />
        <line x1="150" y1="48" x2="232" y2="225" stroke="#CBB3E8" stroke-opacity="0.25" stroke-width="1" stroke-dasharray="2,4" />

        <!-- Left Diagonal Pillar of A (Chartreuse) -->
        <path d="M150,48 L68,225" class="monogram-stroke-left" />

        <!-- Right Diagonal Pillar of A (Chartreuse) -->
        <path d="M150,48 L232,225" class="monogram-stroke-right" />

        <!-- Inner High-Precision Core Beam (Warm White) -->
        <path d="M150,56 L76,218 M150,56 L224,218" class="monogram-stroke-core" />

        <!-- Floating Architectural Crossbar (Lavender) -->
        <line x1="96" y1="152" x2="204" y2="152" class="monogram-crossbar" />

        <!-- Center Crossbar Node (Hot Pink Energy Diamond) -->
        <polygon points="150,144 157,152 150,160 143,152" class="monogram-center-node" />
        <circle cx="150" cy="152" r="2" fill="#F8F7F4" />

        <!-- Apex Energy Conduit Pip (Warm White) -->
        <circle cx="150" cy="48" r="4.5" class="monogram-apex-pip" />
      </svg>

      <!-- Typography Wordmark: ATLAS -->
      <div class="monogram-wordmark-wrap">
        <h2 class="monogram-brand-title">ATLAS</h2>
        <div class="monogram-sub-row">
          <span class="monogram-sub-line"></span>
          <p class="monogram-brand-sub">
            ALAGESH VARAN <span class="monogram-brand-accent">//</span> IDENTITY
          </p>
          <span class="monogram-sub-line"></span>
        </div>
      </div>
    </div>

    <!-- 4. Controlled Light Flash Curtain -->
    <div class="monogram-flash" aria-hidden="true"></div>

    <!-- 5. Telemetry Bar & Skip Button -->
    <div class="monogram-meta-bar">
      <div class="monogram-status-label">
        <span class="monogram-status-dot"></span>
        <span>ATLAS // MONOGRAM REVEAL</span>
      </div>
      <button type="button" class="monogram-skip-btn" id="monogram-skip-action" aria-label="Skip monogram intro animation">
        <span>Skip [ESC]</span>
      </button>
    </div>
  `;

  document.body.appendChild(overlay);

  // Grab interactive elements
  const stage = overlay.querySelector('.monogram-stage');
  const flash = overlay.querySelector('.monogram-flash');
  const canvas = overlay.querySelector('.monogram-canvas');
  const skipBtn = overlay.querySelector('#monogram-skip-action');
  const ctx = canvas ? canvas.getContext('2d') : null;

  // 3. Canvas Setup with High-DPI support
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

  // 4. Gathering Ambient Particles & Light Streaks System
  const particles = [];
  const PARTICLE_COUNT = 45;
  const colors = ['#D4FF3F', '#CBB3E8', '#F8F7F4', '#FF2DAB'];

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * Math.min(width, height) * 0.45 + 50;
    particles.push({
      x: width * 0.5 + Math.cos(angle) * dist,
      y: height * 0.45 + Math.sin(angle) * dist,
      targetX: width * 0.5,
      targetY: height * 0.45,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      size: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.6 + 0.2,
      decay: Math.random() * 0.01 + 0.005
    });
  }

  // Radial spark explosion on monogram completion
  const triggerImpactBurst = () => {
    const cx = width * 0.5;
    const cy = height * 0.45;
    for (let i = 0; i < 35; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 7 + 2.5;
      particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: Math.random() * 0.025 + 0.02
      });
    }
  };

  // 5. Subtle Procedural Web Audio Ambient Swell (Zero external files)
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
      if (audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
      }

      // Deep harmonic ambient swell
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(55, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, audioCtx.currentTime + 0.95);
      osc.frequency.exponentialRampToValueAtTime(45, audioCtx.currentTime + 1.4);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.06, audioCtx.currentTime + 0.95);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.45);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 1.5);
    }
  } catch (e) {
    // Autoplay restrictions or audio disabled is smoothly ignored
  }

  // 6. Teardown and Cleanup Routine
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
      activeMonogramInstance = null;
      if (typeof onComplete === 'function') {
        try { onComplete(); } catch (e) {}
      }
    }, 280);
  };

  // Skip handler (immediately mounts and fades out)
  const skip = () => {
    callMountOnce();
    teardown();
  };

  // 7. Skip Listeners: Keyboard and Clicks
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

  // Clicking anywhere on the screen also dismisses
  overlay.addEventListener('click', () => {
    skip();
  });

  // 8. Animation Timeline Loop
  let impactTriggered = false;
  let revealedTriggered = false;

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

    // Timeline Phase 1: 0ms - 900ms (Particles swirl toward center monogram)
    const cx = width * 0.5;
    const cy = height * 0.45;

    // Timeline Phase 2: 950ms (Impact Moment — light burst & shockwave)
    if (elapsed >= 950 && !impactTriggered) {
      impactTriggered = true;
      if (stage) stage.classList.add('is-impact');
      if (flash) flash.classList.add('is-flashing');
      overlay.classList.add('is-impacting');
      setTimeout(() => overlay.classList.remove('is-impacting'), 180);
      triggerImpactBurst();
    }

    // Timeline Phase 3: 1100ms (Wordmark Reveal: ATLAS appears)
    if (elapsed >= 1100 && !revealedTriggered) {
      revealedTriggered = true;
      if (stage) stage.classList.add('is-revealed');
    }

    // Timeline Phase 4: 1400ms (Mount About page behind the scene)
    if (elapsed >= 1400 && !isMounted) {
      callMountOnce();
    }

    // Render Canvas Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];

      if (!impactTriggered) {
        // Gravitate toward center
        const dx = cx - p.x;
        const dy = cy - p.y;
        p.vx += dx * 0.0012;
        p.vy += dy * 0.0012;
        p.vx *= 0.94;
        p.vy *= 0.94;
      }

      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // Timeline Phase 5: 1850ms (Transition complete)
    if (elapsed >= duration) {
      callMountOnce();
      teardown();
      return;
    }

    animFrameId = requestAnimationFrame(render);
  };

  animFrameId = requestAnimationFrame(render);

  // Safety hard timeout (guarantees completion even if tab is unfocused)
  const safetyTimer = setTimeout(() => {
    if (!isDone) {
      callMountOnce();
      teardown();
    }
  }, duration + 500);

  activeMonogramInstance = {
    skip: () => {
      clearTimeout(safetyTimer);
      skip();
    }
  };

  return activeMonogramInstance;
}
