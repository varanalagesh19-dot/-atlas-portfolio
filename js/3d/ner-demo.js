/**
 * ATLAS 2.0 — NER ACCESS 3D LOGISTICS & ACCESSIBILITY DEMONSTRATION
 * Interactive Three.js Logistics Demonstration featuring:
 * - Light stylized 3D terrain surface with elevation gradients
 * - Origin (Guwahati Hub) and Destination (Tawang Center) nodes
 * - Primary route & Alternative accessible route (CatmullRom curves)
 * - Traveling transit beacon marker animated along the curve
 * - Landslide hazard alert simulation with automatic bypass
 * - Offline-first mesh routing visualization
 * - Emergency SOS assistance state
 * - Full interactive controls: Play, Pause, Reset, Accessible Route, Offline Mode, SOS Trigger
 */

export class NerAccessDemo {
  constructor(canvasContainer, options = {}) {
    this.container = typeof canvasContainer === 'string' ? document.getElementById(canvasContainer) : canvasContainer;
    this.options = options;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.rafId = null;

    // Simulation State
    this.isPlaying = true;
    this.progress = 0; // 0.0 to 1.0 along the active curve
    this.speed = 0.0018;
    this.useAccessibleRoute = false;
    this.isOffline = false;
    this.isEmergencySOS = false;
    this.hazardActive = false;

    // Objects
    this.terrain = null;
    this.primaryLine = null;
    this.accessibleLine = null;
    this.transitMarker = null;
    this.hazardMarker = null;
    this.sosPulseMesh = null;
    this.meshRadioWaves = [];

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
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    this.camera.position.set(0, -6.5, 8.5);
    this.camera.lookAt(0, 0, 0);

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
    const amb = new THREE.AmbientLight(0x1F1A2A, 1.2);
    this.scene.add(amb);

    const dir1 = new THREE.DirectionalLight(0xF8F7F4, 2.6);
    dir1.position.set(8, -10, 14);
    this.scene.add(dir1);

    const goldLight = new THREE.DirectionalLight(0xCBB3E8, 2.8);
    goldLight.position.set(-10, 8, 6);
    this.scene.add(goldLight);

    // 4. Build 3D Components
    this.buildTerrain();
    this.buildRoutes();
    this.buildWaypoints();
    this.buildTransitMarker();
    this.buildHazardMarker();
    this.buildSOSVisualizer();

    // 5. Responsive Resize
    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(this.container);

    // 6. Start Loop
    this.animate();
  }

  buildTerrain() {
    // Stylized elevation terrain grid representing mountainous North East topography
    const size = 9;
    const segs = 36;
    const geo = new THREE.PlaneGeometry(size, size, segs, segs);
    const pos = geo.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      // Realistic mountainous ridge function
      const z = Math.sin(x * 0.9 + 0.4) * Math.cos(y * 0.9) * 0.75 +
                Math.sin(x * 1.8) * 0.25 +
                (x > 1.5 ? (x - 1.5) * 0.35 : 0);
      pos.setZ(i, z);
    }
    geo.computeVertexNormals();

    // Stylized light porcelain terrain surface with delicate contour wireframe
    const terrainMat = new THREE.MeshStandardMaterial({
      color: 0xFAF7F2,
      roughness: 0.5,
      metalness: 0.08,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1
    });
    this.terrain = new THREE.Mesh(geo, terrainMat);
    this.scene.add(this.terrain);

    // Wireframe contours in metallic gold
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xCBB3E8,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const wireMesh = new THREE.Mesh(geo, wireMat);
    this.terrain.add(wireMesh);
  }

  buildRoutes() {
    // Primary Mountain Ridge Route (Steep incline, prone to blockage)
    const primaryPoints = [
      new THREE.Vector3(-3.2, -3.0, 0.1),  // Guwahati Hub (lowland)
      new THREE.Vector3(-1.8, -1.5, 0.45), // Nalbari Foothills
      new THREE.Vector3(-0.4, 0.2, 0.95),  // Bomdila Pass (high altitude)
      new THREE.Vector3(1.2, 1.4, 0.8),   // Sela Ridge Checkpoint
      new THREE.Vector3(3.0, 2.8, 1.35)   // Tawang Medical Center (peak)
    ];
    this.primaryCurve = new THREE.CatmullRomCurve3(primaryPoints);

    const primaryGeo = new THREE.TubeGeometry(this.primaryCurve, 80, 0.045, 8, false);
    const primaryMat = new THREE.MeshStandardMaterial({
      color: 0xD4FF3F, // Champagne Gold primary corridor
      roughness: 0.2,
      metalness: 0.5,
      emissive: 0xD4FF3F,
      emissiveIntensity: 0.2
    });
    this.primaryLine = new THREE.Mesh(primaryGeo, primaryMat);
    this.scene.add(this.primaryLine);

    // Alternative Accessible Route (Low-gradient valley bypass, safer during hazards)
    const accessiblePoints = [
      new THREE.Vector3(-3.2, -3.0, 0.1),  // Guwahati Hub
      new THREE.Vector3(-2.2, -0.8, 0.2),  // Valley Entry
      new THREE.Vector3(-0.8, -0.2, 0.35), // Low Incline River Corridor
      new THREE.Vector3(0.8, 0.5, 0.45),   // Bypass Gap
      new THREE.Vector3(2.0, 1.8, 0.85),   // Switchback Ascent
      new THREE.Vector3(3.0, 2.8, 1.35)    // Tawang Medical Center
    ];
    this.accessibleCurve = new THREE.CatmullRomCurve3(accessiblePoints);

    const accGeo = new THREE.TubeGeometry(this.accessibleCurve, 80, 0.04, 8, false);
    const accMat = new THREE.MeshStandardMaterial({
      color: 0xD4FF3F, // Creative Chartreuse accessible low-gradient bypass
      roughness: 0.2,
      metalness: 0.4,
      emissive: 0xD4FF3F,
      emissiveIntensity: 0.25,
      transparent: true,
      opacity: 0.45
    });
    this.accessibleLine = new THREE.Mesh(accGeo, accMat);
    this.scene.add(this.accessibleLine);
  }

  buildWaypoints() {
    this.waypointsGroup = new THREE.Group();

    const nodes = [
      { name: 'Guwahati Hub', pos: new THREE.Vector3(-3.2, -3.0, 0.15), type: 'origin', color: 0x202124 },
      { name: 'Bomdila Pass', pos: new THREE.Vector3(-0.4, 0.2, 1.0), type: 'waypoint', color: 0xD4FF3F },
      { name: 'Sela Checkpoint', pos: new THREE.Vector3(1.2, 1.4, 0.85), type: 'waypoint', color: 0xD4FF3F },
      { name: 'Tawang Depot', pos: new THREE.Vector3(3.0, 2.8, 1.4), type: 'dest', color: 0xEF4444 }
    ];

    nodes.forEach(n => {
      // Pin base
      const pinGeo = new THREE.CylinderGeometry(0.08, 0.02, 0.3, 16);
      pinGeo.rotateX(Math.PI / 2);
      const pinMat = new THREE.MeshStandardMaterial({ color: n.color, metalness: 0.4 });
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.copy(n.pos);
      this.waypointsGroup.add(pin);

      // Node Sphere
      const sphGeo = new THREE.SphereGeometry(0.14, 16, 16);
      const sphMat = new THREE.MeshStandardMaterial({
        color: n.color,
        emissive: n.color,
        emissiveIntensity: 0.4
      });
      const sph = new THREE.Mesh(sphGeo, sphMat);
      sph.position.set(n.pos.x, n.pos.y, n.pos.z + 0.22);
      this.waypointsGroup.add(sph);

      // Outer Pulsing Halo for Origin and Destination
      if (n.type === 'origin' || n.type === 'dest') {
        const ringGeo = new THREE.RingGeometry(0.2, 0.28, 24);
        const ringMat = new THREE.MeshBasicMaterial({ color: n.color, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.set(n.pos.x, n.pos.y, n.pos.z + 0.05);
        this.waypointsGroup.add(ring);
      }
    });

    this.scene.add(this.waypointsGroup);
  }

  buildTransitMarker() {
    this.transitMarker = new THREE.Group();

    // Vehicle / Drone body
    const bodyGeo = new THREE.ConeGeometry(0.18, 0.36, 8);
    bodyGeo.rotateX(Math.PI / 2);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x202124,
      metalness: 0.8,
      roughness: 0.2
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    this.transitMarker.add(body);

    // Glowing telemetry beacon
    const beaconGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xD4FF3F });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.z = 0.16;
    this.transitMarker.add(beacon);

    // Light beam downward
    const beamGeo = new THREE.CylinderGeometry(0.02, 0.14, 0.5, 12);
    beamGeo.rotateX(Math.PI / 2);
    const beamMat = new THREE.MeshBasicMaterial({ color: 0xD4FF3F, transparent: true, opacity: 0.35 });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.z = -0.22;
    this.transitMarker.add(beam);

    this.scene.add(this.transitMarker);
  }

  buildHazardMarker() {
    this.hazardMarker = new THREE.Group();
    // Warning icon marker at Bomdila Pass
    const pos = new THREE.Vector3(-0.4, 0.2, 1.05);
    this.hazardMarker.position.copy(pos);

    const octGeo = new THREE.OctahedronGeometry(0.22, 0);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0xEF4444,
      emissive: 0xEF4444,
      emissiveIntensity: 0.7,
      roughness: 0.2
    });
    const oct = new THREE.Mesh(octGeo, octMat);
    this.hazardMarker.add(oct);

    this.hazardMarker.visible = false;
    this.scene.add(this.hazardMarker);
  }

  buildSOSVisualizer() {
    // Expanding concentric shockwave rings for Emergency SOS
    const ringGeo = new THREE.RingGeometry(0.1, 0.18, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xEF4444,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    this.sosPulseMesh = new THREE.Mesh(ringGeo, ringMat);
    this.sosPulseMesh.position.set(1.2, 1.4, 0.9);
    this.sosPulseMesh.visible = false;
    this.scene.add(this.sosPulseMesh);
  }

  // Controls API
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

  reset() {
    this.progress = 0;
    this.hazardActive = false;
    if (this.hazardMarker) this.hazardMarker.visible = false;
    this.useAccessibleRoute = false;
    this.isOffline = false;
    this.isEmergencySOS = false;
    if (this.sosPulseMesh) this.sosPulseMesh.visible = false;
    if (this.accessibleLine && this.accessibleLine.material) {
      this.accessibleLine.material.opacity = 0.35;
      this.accessibleLine.material.color.setHex(0x10B981);
    }
    if (this.primaryLine && this.primaryLine.material) {
      this.primaryLine.material.opacity = 1.0;
    }
    this.notifyState();
  }

  toggleAccessibleRoute() {
    this.useAccessibleRoute = !this.useAccessibleRoute;
    if (this.useAccessibleRoute) {
      if (this.accessibleLine && this.accessibleLine.material) {
        this.accessibleLine.material.opacity = 1.0;
        this.accessibleLine.material.color.setHex(0x10B981);
      }
      if (this.primaryLine && this.primaryLine.material) {
        this.primaryLine.material.opacity = 0.35;
      }
    } else {
      if (this.accessibleLine && this.accessibleLine.material) {
        this.accessibleLine.material.opacity = 0.35;
      }
      if (this.primaryLine && this.primaryLine.material) {
        this.primaryLine.material.opacity = 1.0;
      }
    }
    this.notifyState();
    return this.useAccessibleRoute;
  }

  toggleOfflineMode() {
    this.isOffline = !this.isOffline;
    this.notifyState();
    return this.isOffline;
  }

  toggleHazard() {
    this.hazardActive = !this.hazardActive;
    if (this.hazardMarker) this.hazardMarker.visible = this.hazardActive;
    if (this.hazardActive) {
      // Auto route around hazard
      this.useAccessibleRoute = true;
      if (this.accessibleLine && this.accessibleLine.material) {
        this.accessibleLine.material.opacity = 1.0;
      }
      if (this.primaryLine && this.primaryLine.material) {
        this.primaryLine.material.opacity = 0.25;
      }
    }
    this.notifyState();
    return this.hazardActive;
  }

  triggerEmergencySOS() {
    this.isEmergencySOS = !this.isEmergencySOS;
    if (this.sosPulseMesh) this.sosPulseMesh.visible = this.isEmergencySOS;
    this.notifyState();
    return this.isEmergencySOS;
  }

  notifyState() {
    this.onStateChange({
      isPlaying: this.isPlaying,
      progress: Math.round(this.progress * 100),
      useAccessibleRoute: this.useAccessibleRoute,
      isOffline: this.isOffline,
      hazardActive: this.hazardActive,
      isEmergencySOS: this.isEmergencySOS,
      currentLocation: this.getCurrentLocationName()
    });
  }

  getCurrentLocationName() {
    const p = this.progress;
    if (p < 0.2) return 'Guwahati Logistics Hub';
    if (p < 0.45) return this.useAccessibleRoute ? 'Kameng River Valley Corridor' : 'Nalbari Incline Pass';
    if (p < 0.75) return this.useAccessibleRoute ? 'Bypass Low-Elevation Saddle' : 'Bomdila Mountain Pass (Elev 2,217m)';
    if (p < 0.95) return 'Sela Checkpoint Sector';
    return 'Tawang Emergency Receiving Outpost';
  }

  animate() {
    this.rafId = requestAnimationFrame(() => this.animate());

    if (this.isPlaying) {
      this.progress += this.speed;
      if (this.progress > 1.0) {
        this.progress = 0; // Loop transit run
      }
    }

    // Determine active path
    const activeCurve = this.useAccessibleRoute ? this.accessibleCurve : this.primaryCurve;

    if (activeCurve && this.transitMarker) {
      const point = activeCurve.getPointAt(this.progress);
      const tangent = activeCurve.getTangentAt(this.progress);

      this.transitMarker.position.copy(point);
      // Orient toward forward motion
      const lookTarget = point.clone().add(tangent);
      this.transitMarker.lookAt(lookTarget);
    }

    // Animate hazard marker rotation if visible
    if (this.hazardMarker && this.hazardMarker.visible) {
      this.hazardMarker.rotation.x += 0.03;
      this.hazardMarker.rotation.y += 0.02;
    }

    // Animate SOS shockwave pulse if active
    if (this.sosPulseMesh && this.sosPulseMesh.visible) {
      const scale = 1 + (Date.now() % 1500) / 300;
      this.sosPulseMesh.scale.set(scale, scale, scale);
      this.sosPulseMesh.material.opacity = Math.max(0, 1 - (scale - 1) / 4);
    }

    // Gentle camera orbit sway
    const time = Date.now() * 0.0004;
    this.terrain.rotation.z = Math.sin(time) * 0.03;

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
