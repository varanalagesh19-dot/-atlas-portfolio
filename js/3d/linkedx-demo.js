/**
 * ATLAS 2.0 — LINKEDX 3D VISUAL-ANALYSIS DEMONSTRATION
 * Interactive Three.js Computer Vision & AI Caption Intelligence Demonstration featuring:
 * - Floating 3D image analysis canvas with procedural system architecture rendering
 * - Vertical animated laser scanning beam with glowing leading edge
 * - Dynamic 3D computer-vision bounding boxes snapping around detected elements
 * - Holographic node-link particle connectors streaming to an AI feature core
 * - Multi-stage state machine (Ingest -> Scan -> Extract -> Synthesize -> Preview)
 * - Working controls: Play Animation, Pause, Replay, Show Analysis, Show Generated Preview
 */

export class LinkedxDemo {
  constructor(canvasContainer, options = {}) {
    this.container = typeof canvasContainer === 'string' ? document.getElementById(canvasContainer) : canvasContainer;
    this.options = options;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.rafId = null;

    // Simulation State
    this.isPlaying = true;
    this.stage = 1; // 1: Ingest/Scan, 2: Feature Detection/Bounding Boxes, 3: Tag Extraction, 4: Caption Synthesis
    this.stageTime = 0;
    this.scanY = 1.6;
    this.scanDirection = -1;
    this.showBoundingBoxes = true;
    this.showGeneratedPreview = false;

    // 3D Elements
    this.imageMesh = null;
    this.scanLine = null;
    this.boundingBoxesGroup = null;
    this.featureParticles = null;
    this.aiCoreMesh = null;

    this.onStateChange = options.onStateChange || (() => {});

    this.init();
  }

  hasWebGL() {
    try {
      const c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  init() {
    if (!this.container || typeof THREE === 'undefined' || !this.hasWebGL()) return;

    this.container.innerHTML = '';
    const width = this.container.clientWidth || 640;
    const height = this.container.clientHeight || 420;

    // 1. Scene & Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 7.5);

    // 2. Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.borderRadius = 'var(--radius)';
    this.container.appendChild(this.renderer.domElement);

    // 3. Lighting (Warm studio gold illumination with deep contrast)
    const amb = new THREE.AmbientLight(0x1F1A2A, 1.25);
    this.scene.add(amb);

    const dir = new THREE.DirectionalLight(0xF8F7F4, 2.6);
    dir.position.set(5, 5, 8);
    this.scene.add(dir);

    const goldAccent = new THREE.DirectionalLight(0xCBB3E8, 3.0);
    goldAccent.position.set(-6, -4, 4);
    this.scene.add(goldAccent);

    // 4. Build 3D Components
    this.buildImageSurface();
    this.buildScanBar();
    this.buildBoundingBoxes();
    this.buildAICore();
    this.buildParticleStreams();

    // 5. Responsive Resize
    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(this.container);

    // 6. Start Loop
    this.animate();
  }

  buildImageSurface() {
    // Generate a sleek technical schematic texture on a canvas
    const cvs = document.createElement('canvas');
    cvs.width = 720;
    cvs.height = 480;
    const ctx = cvs.getContext('2d');

    // Clean porcelain-slate background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, 720, 480);

    // Draw architectural diagram elements
    ctx.strokeStyle = 'rgba(203, 179, 232, 0.45)';
    ctx.lineWidth = 2;
    ctx.strokeRect(30, 30, 660, 420);

    // Header banner in diagram
    ctx.fillStyle = '#202124';
    ctx.fillRect(50, 50, 620, 50);
    ctx.fillStyle = '#CBB3E8';
    ctx.font = 'bold 20px "Space Grotesk", sans-serif';
    ctx.fillText('MULTIMODAL VISION DECOMPOSITION ENGINE', 75, 82);

    // 3 Architecture modules
    const modules = [
      { x: 60, y: 130, w: 180, h: 140, title: 'Input Frame', tag: 'IMAGE / OCR' },
      { x: 270, y: 130, w: 180, h: 140, title: 'Gemini Vision', tag: 'FEATURE EXTRACTION' },
      { x: 480, y: 130, w: 180, h: 140, title: 'Content Synthesizer', tag: 'THOUGHT LEADERSHIP' }
    ];

    modules.forEach(m => {
      ctx.fillStyle = '#F5F3EE';
      ctx.fillRect(m.x, m.y, m.w, m.h);
      ctx.strokeStyle = '#CBB3E8';
      ctx.strokeRect(m.x, m.y, m.w, m.h);

      ctx.fillStyle = '#CBB3E8';
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      ctx.fillText(m.tag, m.x + 12, m.y + 26);

      ctx.fillStyle = '#202124';
      ctx.font = 'bold 16px "Space Grotesk", sans-serif';
      ctx.fillText(m.title, m.x + 12, m.y + 55);

      // Mini simulated data lines
      ctx.strokeStyle = '#696969';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(m.x + 12, m.y + 75);
      ctx.lineTo(m.x + m.w - 12, m.y + 75);
      ctx.moveTo(m.x + 12, m.y + 95);
      ctx.lineTo(m.x + m.w - 30, m.y + 95);
      ctx.stroke();
    });

    // Connecting arrows
    ctx.strokeStyle = '#CBB3E8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(240, 200);
    ctx.lineTo(270, 200);
    ctx.moveTo(450, 200);
    ctx.lineTo(480, 200);
    ctx.stroke();

    // Metric box bottom
    ctx.fillStyle = '#202124';
    ctx.fillRect(60, 300, 600, 120);
    ctx.fillStyle = '#10B981';
    ctx.font = 'bold 13px "JetBrains Mono", monospace';
    ctx.fillText('STATUS: INFERENCE LATENCY 34ms | TOKENS: 412/sec | TONE: EXECUTIVE', 85, 340);
    ctx.fillStyle = '#F5F3EE';
    ctx.font = '14px "Inter", sans-serif';
    ctx.fillText('Decomposing visual components into structured professional LinkedIn draft...', 85, 375);

    const texture = new THREE.CanvasTexture(cvs);
    texture.generateMipmaps = true;

    // 3D Glass Image Slab
    const slabGeo = new THREE.BoxGeometry(4.8, 3.2, 0.12);
    const slabMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.25,
      metalness: 0.1
    });
    this.imageMesh = new THREE.Mesh(slabGeo, slabMat);
    this.scene.add(this.imageMesh);

    // Subtle champagne outer frame
    const frameGeo = new THREE.BoxGeometry(4.9, 3.3, 0.1);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xCBB3E8,
      metalness: 0.8,
      roughness: 0.2
    });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.z = -0.02;
    this.imageMesh.add(frame);
  }

  buildScanBar() {
    this.scanLine = new THREE.Group();

    // Laser bar
    const barGeo = new THREE.BoxGeometry(4.8, 0.04, 0.14);
    const barMat = new THREE.MeshBasicMaterial({ color: 0xCBB3E8 });
    const bar = new THREE.Mesh(barGeo, barMat);
    this.scanLine.add(bar);

    // Cyan/Gold Laser Glow Ribbon
    const glowGeo = new THREE.PlaneGeometry(4.8, 0.4);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xCBB3E8,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.y = 0.2;
    this.scanLine.add(glow);

    this.scanLine.position.set(0, this.scanY, 0.1);
    this.scene.add(this.scanLine);
  }

  buildBoundingBoxes() {
    this.boundingBoxesGroup = new THREE.Group();

    const boxes = [
      { x: -1.4, y: 0.25, w: 1.3, h: 1.0, label: 'OCR: INPUT MODULE' },
      { x: 0.0, y: 0.25, w: 1.3, h: 1.0, label: 'GEMINI VISION' },
      { x: 1.4, y: 0.25, w: 1.3, h: 1.0, label: 'CONTENT SYNTHESIS' },
      { x: 0.0, y: -0.9, w: 4.2, h: 0.9, label: 'METRIC TELEMETRY: 34ms' }
    ];

    boxes.forEach(b => {
      const geo = new THREE.EdgesGeometry(new THREE.BoxGeometry(b.w, b.h, 0.06));
      const mat = new THREE.LineBasicMaterial({
        color: 0xCBB3E8, // Creative Lavender AI bounding box
        linewidth: 2,
        transparent: true,
        opacity: 0.95
      });
      const boxMesh = new THREE.LineSegments(geo, mat);
      boxMesh.position.set(b.x, b.y, 0.1);

      // Corner target pips
      const cornerGeo = new THREE.BoxGeometry(0.08, 0.08, 0.08);
      const cornerMat = new THREE.MeshBasicMaterial({ color: 0xCBB3E8 });
      const c1 = new THREE.Mesh(cornerGeo, cornerMat);
      c1.position.set(b.x - b.w / 2, b.y + b.h / 2, 0.12);
      const c2 = new THREE.Mesh(cornerGeo, cornerMat);
      c2.position.set(b.x + b.w / 2, b.y - b.h / 2, 0.12);

      this.boundingBoxesGroup.add(boxMesh);
      this.boundingBoxesGroup.add(c1);
      this.boundingBoxesGroup.add(c2);
    });

    this.scene.add(this.boundingBoxesGroup);
  }

  buildAICore() {
    this.aiCoreMesh = new THREE.Group();

    // Floating Feature Extractor Octahedron
    const octGeo = new THREE.OctahedronGeometry(0.35, 0);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0xD4FF3F,
      metalness: 0.90,
      roughness: 0.20,
      emissive: 0xCBB3E8,
      emissiveIntensity: 0.4
    });
    const oct = new THREE.Mesh(octGeo, octMat);
    this.aiCoreMesh.add(oct);

    // Orbiting ring
    const ringGeo = new THREE.TorusGeometry(0.55, 0.02, 16, 60);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x202124 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    this.aiCoreMesh.add(ring);

    this.aiCoreMesh.position.set(2.6, 1.6, 0.5);
    this.scene.add(this.aiCoreMesh);
  }

  buildParticleStreams() {
    // 60 particle nodes streaming semantic tokens
    const count = 50;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 4.5;
      positions[i + 1] = (Math.random() - 0.5) * 3.0;
      positions[i + 2] = 0.15 + Math.random() * 0.4;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xCBB3E8,
      size: 0.08,
      transparent: true,
      opacity: 0.8
    });

    this.featureParticles = new THREE.Points(geo, mat);
    this.scene.add(this.featureParticles);
  }

  // Interactive Controls API
  play() {
    this.isPlaying = true;
    this.notifyState();
  }

  pause() {
    this.isPlaying = false;
    this.notifyState();
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    this.notifyState();
    return this.isPlaying;
  }

  replay() {
    this.stage = 1;
    this.stageTime = 0;
    this.scanY = 1.6;
    this.scanDirection = -1;
    this.isPlaying = true;
    this.showBoundingBoxes = true;
    this.showGeneratedPreview = false;
    if (this.boundingBoxesGroup) this.boundingBoxesGroup.visible = true;
    this.notifyState();
  }

  showAnalysis() {
    this.stage = 2;
    this.showBoundingBoxes = true;
    if (this.boundingBoxesGroup) this.boundingBoxesGroup.visible = true;
    this.showGeneratedPreview = false;
    this.notifyState();
  }

  showPreview() {
    this.stage = 4;
    this.showGeneratedPreview = true;
    this.notifyState();
  }

  notifyState() {
    this.onStateChange({
      isPlaying: this.isPlaying,
      stage: this.stage,
      stageName: this.getStageName(),
      showBoundingBoxes: this.showBoundingBoxes,
      showGeneratedPreview: this.showGeneratedPreview
    });
  }

  getStageName() {
    switch (this.stage) {
      case 1: return 'Visual Ingestion & Raster Scan';
      case 2: return 'Computer Vision Bounding Box Detection';
      case 3: return 'Semantic Concept & OCR Extraction';
      case 4: return 'Executive LinkedIn Caption Synthesis';
      default: return 'Visual Analysis Pipeline';
    }
  }

  animate() {
    this.rafId = requestAnimationFrame(() => this.animate());

    if (this.isPlaying) {
      // Stage timing advance
      this.stageTime += 0.016;
      if (this.stageTime > 4.0) {
        this.stageTime = 0;
        this.stage = (this.stage % 4) + 1;
        this.notifyState();
      }

      // Vertical Laser Scan movement
      this.scanY += this.scanDirection * 0.025;
      if (this.scanY < -1.6) {
        this.scanY = -1.6;
        this.scanDirection = 1;
      } else if (this.scanY > 1.6) {
        this.scanY = 1.6;
        this.scanDirection = -1;
      }
      if (this.scanLine) {
        this.scanLine.position.y = this.scanY;
      }

      // Pulse bounding boxes
      if (this.boundingBoxesGroup && this.showBoundingBoxes) {
        const pulse = 0.8 + Math.sin(Date.now() * 0.005) * 0.2;
        this.boundingBoxesGroup.children.forEach(c => {
          if (c.material) c.material.opacity = pulse;
        });
      }

      // Rotate AI Core
      if (this.aiCoreMesh) {
        this.aiCoreMesh.rotation.y += 0.02;
        this.aiCoreMesh.rotation.x += 0.01;
      }

      // Particle float
      if (this.featureParticles) {
        const pos = this.featureParticles.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          let z = pos.getZ(i) + 0.002;
          if (z > 0.6) z = 0.15;
          pos.setZ(i, z);
        }
        pos.needsUpdate = true;
      }
    }

    // Camera micro-sway
    const t = Date.now() * 0.0006;
    if (this.imageMesh) {
      this.imageMesh.rotation.y = Math.sin(t) * 0.04;
      this.imageMesh.rotation.x = Math.cos(t * 0.8) * 0.03;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  handleResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    if (w && h) {
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    }
  }

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      this.renderer.dispose();
    }
    if (this.scene) {
      this.scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
    }
  }
}
