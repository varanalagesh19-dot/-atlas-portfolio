/**
 * ATLAS 3.0 — GLOBAL 3D SPATIAL ARCHITECTURE & SCENE ENGINE
 * Luminous Champagne Gold & Architectural Translucent Crystal
 * Responsive Studio Lighting with ACESFilmic Tone Mapping.
 * Shared WebGL Pipeline with Page-Specific Spatial Compositions:
 *   - / (Home): Luminous Champagne Ribbon & Concentric Rings
 *   - /about: Spatial Milestone Constellation
 *   - /projects: Ambient Prismatic Depth & Crystalline Polyhedra
 *   - /skills: Dimensional Technology Neural Network
 *   - /tools: Cybernetic Isometric Grid & Data Matrices
 *   - /contact: Harmonic Wave Transmission Field
 */

export class HeroStage {
  constructor(canvasId = 'stage-canvas') {
    this.canvas = document.getElementById(canvasId);
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.pmremGenerator = null;

    // Studio Lighting
    this.ambientLight = null;
    this.keyLight = null;
    this.champagneRim = null;
    this.softFill = null;

    // Page Compositions
    this.groups = {};
    this.activeRoute = '/';
    this.targetGroupKey = 'home';
    this.currentGroupKey = 'home';
    this.transitionProgress = 1.0;

    // Animation & Parallax
    this.rafId = null;
    this.clock = typeof THREE !== 'undefined' ? new THREE.Clock() : null;
    this.targetRotX = 0;
    this.targetRotY = 0;
    this.currentRotX = 0;
    this.currentRotY = 0;
    this.currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    this.isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    if (!this.canvas || typeof THREE === 'undefined' || !this.hasWebGL()) return;

    try {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.camera.position.set(0, 0, 16);

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: true,
        antialias: window.devicePixelRatio < 2,
        powerPreference: 'high-performance'
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      // Luminous Tone Mapping — preserves deep bronze shadows and specular highlights
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.08;
      if (THREE.sRGBEncoding) {
        this.renderer.outputEncoding = THREE.sRGBEncoding;
      }

      // Studio Reflection Environment Map
      this.buildStudioEnvironment(this.currentTheme);

      // Studio Lighting — Radiant & Balanced
      this.setupStudioLighting();

      // Build Page-Specific Compositions
      this.buildHomeSculpture();
      this.buildAboutConstellation();
      this.buildProjectsPrisms();
      this.buildSkillsTopology();
      this.buildToolsGrid();
      this.buildContactHarmonics();

      // Set initial route
      this.setRoute(window.location.pathname || '/');

      // Bind events
      this.bindEvents();

      // Start animation loop
      this.animate();
    } catch (e) {
      console.warn('ATLAS 3D Stage initialization note:', e);
    }
  }

  setupStudioLighting() {
    const isDark = this.currentTheme === 'dark';

    // 1. Controlled Ambient: Preserves deep bronze shadows & contrast against light ivory
    this.ambientLight = new THREE.AmbientLight(isDark ? 0x14101E : 0x2A2038, isDark ? 0.9 : 1.25);
    this.scene.add(this.ambientLight);

    // 2. Warm Golden Key Light (Top-Right)
    this.keyLight = new THREE.DirectionalLight(0xF8F7F4, isDark ? 2.6 : 3.0);
    this.keyLight.position.set(14, 18, 16);
    this.scene.add(this.keyLight);

    // 3. Deep Gold Silhouette Rim Light (Separates metallic shapes from background)
    this.champagneRim = new THREE.DirectionalLight(0xCBB3E8, isDark ? 3.0 : 3.4);
    this.champagneRim.position.set(-14, 12, -14);
    this.scene.add(this.champagneRim);

    // 4. Neutral Fill Light (Preserves geometry detail in shadows)
    this.softFill = new THREE.DirectionalLight(0xF8F7F4, isDark ? 1.0 : 1.3);
    this.softFill.position.set(-12, -8, 10);
    this.scene.add(this.softFill);

    // 5. Subtle Creative Lavender Specular Fill (Creative Technology Accent)
    this.lavenderLight = new THREE.DirectionalLight(0xCBB3E8, isDark ? 0.95 : 0.7);
    this.lavenderLight.position.set(-14, -12, 10);
    this.scene.add(this.lavenderLight);

    // 6. Refined Creative Chartreuse Point Accent (Data & AI Signal)
    this.chartreuseLight = new THREE.PointLight(0xD4FF3F, isDark ? 0.95 : 0.75, 32, 2);
    this.chartreuseLight.position.set(12, -6, -8);
    this.scene.add(this.chartreuseLight);
  }

  buildStudioEnvironment(theme) {
    try {
      const isDark = theme === 'dark';
      const envCanvas = document.createElement('canvas');
      envCanvas.width = 512;
      envCanvas.height = 256;
      const ctx = envCanvas.getContext('2d');

      const bgGrad = ctx.createLinearGradient(0, 0, 0, 256);
      if (isDark) {
        bgGrad.addColorStop(0, '#151515');
        bgGrad.addColorStop(0.5, '#111116');
        bgGrad.addColorStop(1, '#0B0B0B');
      } else {
        // Rich Studio Gradient with Deep Bronze base and Warm Gold reflections
        bgGrad.addColorStop(0, '#FFFDF8');
        bgGrad.addColorStop(0.4, '#F7EFE2');
        bgGrad.addColorStop(1, '#CBB3E8');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 512, 256);

      // Top Warm Gold Key Softbox
      const topGrad = ctx.createRadialGradient(256, 36, 10, 256, 36, 140);
      topGrad.addColorStop(0, 'rgba(212, 255, 63, 0.95)');
      topGrad.addColorStop(0.5, 'rgba(203, 179, 232, 0.85)');
      topGrad.addColorStop(1, isDark ? 'rgba(26, 24, 21, 0)' : 'rgba(247, 239, 226, 0)');
      ctx.fillStyle = topGrad;
      ctx.fillRect(60, 0, 392, 110);

      // Left Rich Metallic Gold Softbox
      const leftGrad = ctx.createRadialGradient(80, 128, 6, 80, 128, 100);
      leftGrad.addColorStop(0, 'rgba(203, 179, 232, 0.90)');
      leftGrad.addColorStop(0.6, 'rgba(212, 255, 63, 0.75)');
      leftGrad.addColorStop(1, isDark ? 'rgba(26, 24, 21, 0)' : 'rgba(247, 239, 226, 0)');
      ctx.fillStyle = leftGrad;
      ctx.fillRect(0, 25, 180, 200);

      // Right Champagne Highlight Softbox
      const rightGrad = ctx.createRadialGradient(432, 128, 6, 432, 128, 100);
      rightGrad.addColorStop(0, 'rgba(255, 45, 171, 0.85)');
      rightGrad.addColorStop(0.6, 'rgba(203, 179, 232, 0.65)');
      rightGrad.addColorStop(1, isDark ? 'rgba(26, 24, 21, 0)' : 'rgba(247, 239, 226, 0)');
      ctx.fillStyle = rightGrad;
      ctx.fillRect(332, 25, 180, 200);

      const envTexture = new THREE.CanvasTexture(envCanvas);
      envTexture.mapping = THREE.EquirectangularReflectionMapping;

      if (!this.pmremGenerator) {
        this.pmremGenerator = new THREE.PMREMGenerator(this.renderer);
        this.pmremGenerator.compileEquirectangularShader();
      }

      const envRenderTarget = this.pmremGenerator.fromEquirectangular(envTexture);
      this.scene.environment = envRenderTarget.texture;
      envTexture.dispose();
    } catch (e) {
      console.warn('Environment texture generator notice:', e);
    }
  }

  // ==========================================
  // COMPOSITION 1: HOME — METALLIC GOLD SCULPTURE
  // ==========================================
  buildHomeSculpture() {
    const group = new THREE.Group();
    group.name = 'homeGroup';

    // Shared Palette Materials
    const metallicGoldMat = new THREE.MeshStandardMaterial({
      color: 0xCBB3E8,       // Metallic Gold
      metalness: 0.90,
      roughness: 0.24,
      envMapIntensity: 2.4
    });

    const deepGoldMat = new THREE.MeshStandardMaterial({
      color: 0xCBB3E8,       // Deep Gold
      metalness: 0.88,
      roughness: 0.30,
      envMapIntensity: 2.0
    });

    const champagneMat = new THREE.MeshStandardMaterial({
      color: 0xD4FF3F,       // Champagne Highlight
      metalness: 0.94,
      roughness: 0.16,
      envMapIntensity: 2.6
    });

    const bronzeMat = new THREE.MeshStandardMaterial({
      color: 0x0B0B0B,       // Bronze Shadow
      metalness: 0.82,
      roughness: 0.36,
      envMapIntensity: 1.6
    });

    // 1. Central Faceted Metallic Gold Torus Knot
    const knotGeo = new THREE.TorusKnotGeometry(2.2, 0.58, 140, 32, 2, 3);
    const knotMesh = new THREE.Mesh(knotGeo, metallicGoldMat);
    knotMesh.scale.set(1.0, 1.04, 0.96);
    group.add(knotMesh);

    // 2. Deep Gold Structural Spine
    const spineGeo = new THREE.TorusGeometry(3.5, 0.12, 32, 120);
    const chartreuseMat = new THREE.MeshStandardMaterial({ color: 0xD4FF3F, metalness: 0.72, roughness: 0.18, envMapIntensity: 2.8 });
    const spineMesh = new THREE.Mesh(spineGeo, chartreuseMat);
    spineMesh.rotation.set(0.48, 0.22, -0.3);
    group.add(spineMesh);

    // 3. Concentric Champagne & Bronze Stabilizer Rings
    const outerRingGeo = new THREE.TorusGeometry(4.4, 0.09, 32, 140);
    const outerRingMesh = new THREE.Mesh(outerRingGeo, champagneMat);
    outerRingMesh.rotation.set(Math.PI * 0.36, Math.PI * 0.14, 0.2);
    group.add(outerRingMesh);

    const innerRingGeo = new THREE.TorusGeometry(3.8, 0.08, 24, 120);
    const innerRingMesh = new THREE.Mesh(innerRingGeo, bronzeMat);
    innerRingMesh.rotation.set(-0.4, 0.6, 0.5);
    group.add(innerRingMesh);

    // 4. Subtle Creative Technology Orbital Accent Ring (Lavender specular)
    const creativeRingMat = new THREE.MeshStandardMaterial({
      color: 0xCBB3E8,
      metalness: 0.88,
      roughness: 0.22,
      transparent: true,
      opacity: 0.82
    });
    const creativeRingGeo = new THREE.TorusGeometry(4.0, 0.05, 20, 100);
    const creativeRingMesh = new THREE.Mesh(creativeRingGeo, creativeRingMat);
    creativeRingMesh.rotation.set(0.2, -0.4, 0.7);
    group.add(creativeRingMesh);
    group.userData.creativeRing = creativeRingMesh;

    this.scene.add(group);
    this.groups.home = group;
  }

  // ==========================================
  // COMPOSITION 2: ABOUT — METALLIC GOLD EMBLEM SCULPTURE
  // ==========================================
  buildAboutConstellation() {
    const group = new THREE.Group();
    group.name = 'aboutGroup';
    group.visible = false;
    group.scale.set(0.001, 0.001, 0.001);

    const metallicGoldMat = new THREE.MeshStandardMaterial({
      color: 0xCBB3E8,
      metalness: 0.90,
      roughness: 0.24,
      envMapIntensity: 2.4
    });

    const deepGoldMat = new THREE.MeshStandardMaterial({
      color: 0xCBB3E8,
      metalness: 0.88,
      roughness: 0.28,
      envMapIntensity: 2.0
    });

    const champagneMat = new THREE.MeshStandardMaterial({
      color: 0xD4FF3F,
      metalness: 0.94,
      roughness: 0.16,
      envMapIntensity: 2.6
    });

    const bronzeMat = new THREE.MeshStandardMaterial({
      color: 0x0B0B0B,
      metalness: 0.82,
      roughness: 0.36,
      envMapIntensity: 1.6
    });

    // 1. Central Faceted Gold Icosahedron Core
    const coreGeo = new THREE.IcosahedronGeometry(1.65, 0);
    const coreMesh = new THREE.Mesh(coreGeo, metallicGoldMat);
    group.add(coreMesh);
    group.userData.core = coreMesh;

    // 1b. Deep Gold Interlocking Wireframe Cage
    const wireMat = new THREE.MeshStandardMaterial({ color: 0xD4FF3F, metalness: 0.88, roughness: 0.20, wireframe: true });
    const wireMesh = new THREE.Mesh(coreGeo, wireMat);
    wireMesh.scale.set(1.003, 1.003, 1.003);
    coreMesh.add(wireMesh);

    // 2. Precision Champagne & Bronze Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(2.7, 0.08, 24, 120);
    const ring1 = new THREE.Mesh(ring1Geo, champagneMat);
    ring1.rotation.set(0.6, 0.3, 0.2);
    group.add(ring1);
    group.userData.ring1 = ring1;

    const ring2Geo = new THREE.TorusGeometry(3.6, 0.07, 24, 140);
    const ring2 = new THREE.Mesh(ring2Geo, bronzeMat);
    ring2.rotation.set(-0.4, 0.7, -0.3);
    group.add(ring2);
    group.userData.ring2 = ring2;

    // 3. Four Floating Milestone Waypoint Beacons
    const beaconCoords = [
      [-2.4, 1.5, 0.8],
      [2.2, -1.4, -0.6],
      [-1.8, -1.8, 1.0],
      [2.5, 1.6, -0.8]
    ];
    const beaconGeo = new THREE.SphereGeometry(0.18, 20, 20);

    const beaconsGroup = new THREE.Group();
    beaconCoords.forEach((coord, i) => {
      const bMesh = new THREE.Mesh(beaconGeo, metallicGoldMat);
      bMesh.position.set(...coord);

      const haloGeo = new THREE.TorusGeometry(0.38, 0.03, 16, 40);
      const haloMesh = new THREE.Mesh(haloGeo, i % 2 === 0 ? champagneMat : deepGoldMat);
      haloMesh.rotation.set(0.4 * i, 0.6 * i, 0);
      bMesh.add(haloMesh);

      beaconsGroup.add(bMesh);
    });
    group.add(beaconsGroup);
    group.userData.beacons = beaconsGroup;

    // 4. Ambient Floating Golden Stardust Points
    const dustCount = 48;
    const dustGeo = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 10;
      dustPositions[i + 1] = (Math.random() - 0.5) * 8;
      dustPositions[i + 2] = (Math.random() - 0.5) * 6;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMat = new THREE.PointsMaterial({
      color: 0xCBB3E8,
      size: 0.08,
      transparent: true,
      opacity: 0.75
    });
    const dustPoints = new THREE.Points(dustGeo, dustMat);
    group.add(dustPoints);

    this.scene.add(group);
    this.groups.about = group;
  }

  // ==========================================
  // COMPOSITION 3: PROJECTS — AMBIENT GOLD PRISMS
  // ==========================================
  buildProjectsPrisms() {
    const group = new THREE.Group();
    group.name = 'projectsGroup';
    group.visible = false;
    group.scale.set(0.001, 0.001, 0.001);

    const goldSolidMat = new THREE.MeshStandardMaterial({
      color: 0xCBB3E8,
      metalness: 0.88,
      roughness: 0.26,
      envMapIntensity: 2.2
    });
    const deepGoldWireMat = new THREE.MeshStandardMaterial({
      color: 0xCBB3E8,
      metalness: 0.90,
      roughness: 0.24,
      wireframe: true
    });

    // 1. Center Icosahedron Prism
    const icoGeo = new THREE.IcosahedronGeometry(2.0, 0);
    const icoMesh = new THREE.Mesh(icoGeo, goldSolidMat);
    const icoWire = new THREE.Mesh(icoGeo, deepGoldWireMat);
    icoWire.scale.set(1.003, 1.003, 1.003);
    icoMesh.add(icoWire);
    group.add(icoMesh);
    group.userData.ico = icoMesh;

    // 2. Floating Octahedrons in depth
    const octaPositions = [
      [4.2, 2.2, -3],
      [-4.0, -1.8, -2],
      [3.5, -2.5, -1],
      [-3.2, 2.5, -4]
    ];
    octaPositions.forEach(pos => {
      const octGeo = new THREE.OctahedronGeometry(0.85, 0);
      const octMesh = new THREE.Mesh(octGeo, goldSolidMat);
      const octWire = new THREE.Mesh(octGeo, deepGoldWireMat);
      octMesh.add(octWire);
      octMesh.position.set(...pos);
      group.add(octMesh);
    });

    this.scene.add(group);
    this.groups.projects = group;
  }

  // ==========================================
  // COMPOSITION 4: SKILLS — NEURAL GOLD TOPOLOGY
  // ==========================================
  buildSkillsTopology() {
    const group = new THREE.Group();
    group.name = 'skillsGroup';
    group.visible = false;
    group.scale.set(0.001, 0.001, 0.001);

    const nodeCount = 18;
    const nodeCoords = [];
    const phiSpan = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phiSpan * i;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      nodeCoords.push(new THREE.Vector3(x * 3.4, y * 3.0, z * 2.8));
    }

    const nodeGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({ color: 0xD4FF3F, metalness: 0.85, roughness: 0.18, envMapIntensity: 2.5 });

    nodeCoords.forEach(pos => {
      const m = new THREE.Mesh(nodeGeo, nodeMat);
      m.position.copy(pos);
      group.add(m);
    });

    // Connecting bronze filaments
    const lineIndices = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodeCoords[i].distanceTo(nodeCoords[j]) < 2.8) {
          lineIndices.push(nodeCoords[i].x, nodeCoords[i].y, nodeCoords[i].z);
          lineIndices.push(nodeCoords[j].x, nodeCoords[j].y, nodeCoords[j].z);
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(lineIndices, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xCBB3E8,
      transparent: true,
      opacity: 0.55
    });
    const networkLines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(networkLines);

    this.scene.add(group);
    this.groups.skills = group;
  }

  // ==========================================
  // COMPOSITION 5: TOOLS — CYBERNETIC GOLD GRID
  // ==========================================
  buildToolsGrid() {
    const group = new THREE.Group();
    group.name = 'toolsGroup';
    group.visible = false;
    group.scale.set(0.001, 0.001, 0.001);

    // Subtle 3D Depth Floor Grid with Gold Accent
    const gridHelper = new THREE.GridHelper(24, 24, 0xD4FF3F, 0x2A2236);
    gridHelper.position.y = -3.2;
    gridHelper.rotation.x = 0.15;
    if (gridHelper.material) {
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.40;
    }
    group.add(gridHelper);

    // Floating Data Matrices
    const matrixMat = new THREE.MeshStandardMaterial({
      color: 0xCBB3E8,
      metalness: 0.88,
      roughness: 0.26,
      wireframe: true
    });
    const boxGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    for (let i = 0; i < 6; i++) {
      const box = new THREE.Mesh(boxGeo, matrixMat);
      box.position.set((i % 2 === 0 ? 1 : -1) * (3.5 + (i * 0.4)), -1.0 + (i * 0.8), -2 - i);
      box.rotation.set(0.2 * i, 0.3 * i, 0.1 * i);
      group.add(box);
    }

    this.scene.add(group);
    this.groups.tools = group;
  }

  // ==========================================
  // COMPOSITION 6: CONTACT — HARMONIC GOLD WAVES
  // ==========================================
  buildContactHarmonics() {
    const group = new THREE.Group();
    group.name = 'contactGroup';
    group.visible = false;
    group.scale.set(0.001, 0.001, 0.001);

    const countX = 24;
    const countZ = 24;
    const total = countX * countZ;
    const positions = new Float32Array(total * 3);
    let idx = 0;
    for (let ix = 0; ix < countX; ix++) {
      for (let iz = 0; iz < countZ; iz++) {
        positions[idx] = (ix - countX / 2) * 0.55;
        positions[idx + 1] = 0;
        positions[idx + 2] = (iz - countZ / 2) * 0.55;
        idx += 3;
      }
    }

    const waveGeo = new THREE.BufferGeometry();
    waveGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const waveMat = new THREE.PointsMaterial({ color: 0xD4FF3F, size: 0.12, transparent: true, opacity: 0.85 });
    const waveMesh = new THREE.Points(waveGeo, waveMat);
    waveMesh.position.set(0, -1.5, 0);
    waveMesh.rotation.x = 0.45;
    group.add(waveMesh);
    group.userData.waveMesh = waveMesh;

    this.scene.add(group);
    this.groups.contact = group;
  }

  // ==========================================
  // ROUTE CHANGE & SEAMLESS TRANSITIONS
  // ==========================================
  setRoute(path) {
    this.activeRoute = path;
    let target = 'home';
    if (path.startsWith('/about')) target = 'about';
    else if (path.startsWith('/projects')) target = 'projects';
    else if (path.startsWith('/skills')) target = 'skills';
    else if (path.startsWith('/tools')) target = 'tools';
    else if (path.startsWith('/contact')) target = 'contact';
    else if (path.startsWith('/resume')) target = 'none';

    if (this.targetGroupKey === target) return;

    this.targetGroupKey = target;
    this.transitionProgress = 0.0;
  }

  setTheme(theme) {
    this.currentTheme = theme;
    if (!this.scene) return;
    const isDark = theme === 'dark';

    // Rebuild studio reflection map
    this.buildStudioEnvironment(theme);

    // Update lights
    if (this.ambientLight) {
      this.ambientLight.intensity = isDark ? 0.9 : 1.25;
      this.ambientLight.color.setHex(isDark ? 0x14101E : 0x2A2038);
    }
    if (this.keyLight) {
      this.keyLight.intensity = isDark ? 2.6 : 2.8;
      this.keyLight.color.setHex(0xF8F7F4);
    }
    if (this.champagneRim) {
      this.champagneRim.intensity = isDark ? 3.0 : 3.2;
    }
    if (this.softFill) {
      this.softFill.intensity = isDark ? 1.0 : 1.3;
    }
    if (this.lavenderLight) {
      this.lavenderLight.intensity = isDark ? 0.95 : 0.7;
    }
    if (this.chartreuseLight) {
      this.chartreuseLight.intensity = isDark ? 0.95 : 0.85;
    }
  }

  updateResponsivePosition() {
    const w = window.innerWidth;
    const homeGrp = this.groups.home;
    if (!homeGrp) return;

    if (w > 1100) {
      // Desktop: Keep sculpture offset to right half so text is 100% readable!
      homeGrp.position.x = 3.8;
      homeGrp.position.y = 0.2;
      homeGrp.scale.set(1.0, 1.0, 1.0);
    } else if (w > 768) {
      homeGrp.position.x = 2.8;
      homeGrp.position.y = 0.5;
      homeGrp.scale.set(0.85, 0.85, 0.85);
    } else {
      homeGrp.position.x = 0;
      homeGrp.position.y = 0.8;
      homeGrp.scale.set(0.65, 0.65, 0.65);
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      if (!this.camera || !this.renderer) return;
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.updateResponsivePosition();
    });

    window.addEventListener('mousemove', (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      this.targetRotY = normX * 0.35;
      this.targetRotX = normY * 0.25;
    });

    // Listen for custom SPA route events
    window.addEventListener('atlas:route-change', (e) => {
      if (e.detail && e.detail.path) {
        this.setRoute(e.detail.path);
      }
    });

    // Pause WebGL rendering loop when tab is backgrounded to eliminate unnecessary GPU/CPU cycles
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (this.rafId) {
          cancelAnimationFrame(this.rafId);
          this.rafId = null;
        }
      } else {
        if (!this.rafId) {
          if (this.clock) this.clock.getDelta(); // flush delta to avoid large jump
          this.animate();
        }
      }
    });

    // Listen for theme change events
    window.addEventListener('atlas:theme-change', (e) => {
      if (e.detail && e.detail.theme) {
        this.setTheme(e.detail.theme);
      }
    });
    window.addEventListener('atlas:themechange', (e) => {
      if (e.detail && e.detail.theme) {
        this.setTheme(e.detail.theme);
      }
    });
  }


  animate() {
    this.rafId = requestAnimationFrame(() => this.animate());

    const delta = this.clock ? this.clock.getDelta() : 0.016;
    const elapsed = this.clock ? this.clock.getElapsedTime() : Date.now() * 0.001;

    // Smooth route composition transition
    if (this.currentGroupKey !== this.targetGroupKey) {
      this.transitionProgress += delta * 3.5; // ~280ms transition
      if (this.transitionProgress >= 1.0) {
        this.transitionProgress = 1.0;
        // Hide old group completely
        if (this.groups[this.currentGroupKey]) {
          this.groups[this.currentGroupKey].visible = false;
          this.groups[this.currentGroupKey].scale.set(0.001, 0.001, 0.001);
        }
        this.currentGroupKey = this.targetGroupKey;
      } else {
        // Cross fade/scale
        const curr = this.groups[this.currentGroupKey];
        const next = this.groups[this.targetGroupKey];
        if (curr) {
          const s = Math.max(0.001, (1.0 - this.transitionProgress));
          curr.scale.set(s, s, s);
        }
        if (next) {
          next.visible = true;
          const s = Math.min(1.0, this.transitionProgress);
          next.scale.set(s, s, s);
        }
      }
    } else {
      const active = this.groups[this.currentGroupKey];
      if (active) {
        active.visible = true;
        if (this.currentGroupKey === 'home') {
          this.updateResponsivePosition();
        } else {
          active.scale.set(1.0, 1.0, 1.0);
        }
      }
    }

    // Parallax damping
    this.currentRotX += (this.targetRotX - this.currentRotX) * 0.05;
    this.currentRotY += (this.targetRotY - this.currentRotY) * 0.05;

    // Subtle individual animations
    if (!this.isReducedMotion) {
      // Home sculpture rotation
      const home = this.groups.home;
      if (home && home.visible) {
        home.rotation.y += 0.0022;
        home.rotation.x += 0.0011;
        if (home.userData.creativeRing) {
          home.userData.creativeRing.rotation.z += 0.0016;
        }
        const basePosX = window.innerWidth > 1100 ? 3.8 : (window.innerWidth > 768 ? 2.8 : 0);
        home.position.x = basePosX + this.currentRotY * 0.8;
      }

      // About orbital sculpture
      const about = this.groups.about;
      if (about && about.visible) {
        about.rotation.y = elapsed * 0.04 + this.currentRotY * 0.4;
        about.rotation.x = Math.sin(elapsed * 0.15) * 0.05 + this.currentRotX * 0.3;

        if (about.userData.core) {
          about.userData.core.rotation.y -= 0.003;
          about.userData.core.rotation.x += 0.002;
        }
        if (about.userData.ring1) {
          about.userData.ring1.rotation.z += 0.003;
        }
        if (about.userData.ring2) {
          about.userData.ring2.rotation.y -= 0.002;
        }
        if (about.userData.beacons) {
          about.userData.beacons.rotation.y = -elapsed * 0.06;
        }

        const baseAboutX = window.innerWidth > 1100 ? 3.8 : (window.innerWidth > 768 ? 2.6 : 0);
        const baseAboutY = window.innerWidth > 768 ? 0.3 : 1.2;
        about.position.x = baseAboutX + this.currentRotY * 0.7;
        about.position.y = baseAboutY + this.currentRotX * 0.5;
      }

      // Projects prisms
      const proj = this.groups.projects;
      if (proj && proj.visible) {
        proj.rotation.y += 0.003;
        if (proj.userData.ico) {
          proj.userData.ico.rotation.x += 0.004;
          proj.userData.ico.rotation.y += 0.005;
        }
      }

      // Skills topology
      const skills = this.groups.skills;
      if (skills && skills.visible) {
        skills.rotation.y = elapsed * 0.04 + this.currentRotY * 0.4;
        skills.rotation.x = Math.cos(elapsed * 0.3) * 0.08 + this.currentRotX * 0.3;
      }

      // Tools grid
      const tools = this.groups.tools;
      if (tools && tools.visible) {
        tools.rotation.y = this.currentRotY * 0.2;
      }

      // Contact harmonics
      const contact = this.groups.contact;
      if (contact && contact.visible && contact.userData.waveMesh) {
        const pos = contact.userData.waveMesh.geometry.attributes.position;
        const arr = pos.array;
        for (let i = 0; i < arr.length; i += 3) {
          const u = arr[i];
          const w = arr[i + 2];
          arr[i + 1] = Math.sin(u * 0.8 + elapsed * 1.5) * 0.25 + Math.cos(w * 0.8 + elapsed * 1.2) * 0.25;
        }
        pos.needsUpdate = true;
      }
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.pmremGenerator) {
      this.pmremGenerator.dispose();
      this.pmremGenerator = null;
    }
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }
    this.scene = null;
    this.camera = null;
  }
}
