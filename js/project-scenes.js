/**
 * ============================================================================
 * ATLAS 3.0 — PROJECT-SPECIFIC 3D PROCEDURAL SCENES (Three.js r128)
 * 8 Unique, Authentic 3D Architectural Scenes Built with Procedural Geometry
 * Smoked glass (MeshPhysicalMaterial) & Brushed Champagne Titanium (MeshStandardMaterial)
 * ============================================================================
 */

(function () {
  'use strict';

  let currentRenderer = null;
  let currentScene = null;
  let currentCamera = null;
  let currentRaf = null;
  let activeAnimationCallback = null;
  let activeContainer = null;

  const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Real existing project JPG fallback mapping
  const PROJECT_IMAGE_MAP = {
    'intellipdf': '/assets/images/project-intellipdf.jpg',
    'solvex-ner': '/assets/images/project-ner-access.jpg',
    'ner-access': '/assets/images/project-ner-access.jpg',
    'linkx': '/assets/images/project-linkedx.jpg',
    'linkedx': '/assets/images/project-linkedx.jpg',
    'atlas-ai': '/assets/images/project-atlas-ai.jpg',
    'smart-agriculture': '/assets/images/project-smart-agriculture.jpg',
    'base-isolation': '/assets/images/project-base-isolation.jpg',
    'nvidia-ai-chat': '/assets/images/project-nvidia-ai-chat.jpg',
    'atlas-portfolio': '/assets/images/project-atlas.jpg'
  };

  function hasWebGL() {
    try {
      const c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  function unmountCurrentScene() {
    if (currentRaf) {
      cancelAnimationFrame(currentRaf);
      currentRaf = null;
    }
    activeAnimationCallback = null;

    if (currentRenderer) {
      if (currentRenderer.domElement && currentRenderer.domElement.parentNode) {
        currentRenderer.domElement.parentNode.removeChild(currentRenderer.domElement);
      }
      currentRenderer.dispose();
      currentRenderer = null;
    }

    if (currentScene) {
      currentScene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
      currentScene = null;
    }

    currentCamera = null;
    activeContainer = null;
  }

  function mountProjectScene(container, slug) {
    unmountCurrentScene();
    if (!container) return;
    activeContainer = container;

    // Fallback: If reduced motion or no WebGL, display matching verified project image
    if (isReducedMotion || !hasWebGL() || typeof THREE === 'undefined') {
      const fallbackImg = document.createElement('img');
      fallbackImg.src = PROJECT_IMAGE_MAP[slug] || '/assets/images/project-intellipdf.jpg';
      fallbackImg.alt = `${slug} visual schematic`;
      fallbackImg.className = 'project-detail-scene-fallback';
      fallbackImg.style.display = 'block';
      fallbackImg.style.width = '100%';
      fallbackImg.style.height = '100%';
      fallbackImg.style.objectFit = 'cover';
      container.appendChild(fallbackImg);
      return;
    }

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 440;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: window.devicePixelRatio < 2,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.className = 'project-detail-scene-canvas';
    container.appendChild(renderer.domElement);

    currentRenderer = renderer;
    currentScene = scene;
    currentCamera = camera;

    // Standard Studio Light Rig matching ATLAS Champagne & Titanium aesthetic
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const ambientLight = new THREE.AmbientLight(isDark ? 0x141517 : 0xEAE5DE, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xF5F1E8, 2.4);
    keyLight.position.set(8, 12, 10);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xD4FF3F, 1.8);
    rimLight.position.set(-8, -6, 8);
    scene.add(rimLight);

    // Canonical Materials
    const champagneMat = new THREE.MeshStandardMaterial({
      color: 0xD4FF3F,
      metalness: 0.92,
      roughness: 0.22
    });

    const softGoldMat = new THREE.MeshStandardMaterial({
      color: 0xCBB3E8,
      metalness: 0.88,
      roughness: 0.18
    });

    const smokedGlassMat = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x141517 : 0xF5F1E8,
      roughness: 0.08,
      metalness: 0.05,
      transmission: 0.85,
      thickness: 2.4,
      transparent: true,
      opacity: 0.92,
      ior: 1.52,
      reflectivity: 0.95,
      clearcoat: 1.0
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xD4FF3F,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });

    // Procedural Scene Dispatcher for All 8 Projects
    let updateFn = null;

    switch (slug) {
      // 1. IntelliPDF: Stacked translucent page strata + sweeping gold citation ray
      case 'intellipdf': {
        const root = new THREE.Group();
        const pages = [];
        for (let i = 0; i < 5; i++) {
          const page = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.06, 4.2), smokedGlassMat);
          page.position.y = (i - 2) * 0.35;
          page.rotation.y = (i - 2) * 0.08;
          root.add(page);
          pages.push(page);

          // Golden edge trim
          const trim = new THREE.Mesh(new THREE.BoxGeometry(3.24, 0.02, 4.24), champagneMat);
          trim.position.y = page.position.y;
          trim.rotation.y = page.rotation.y;
          root.add(trim);
        }

        // Sweeping citation ray
        const ray = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 4.2, 16), softGoldMat);
        ray.rotation.x = Math.PI / 2;
        ray.position.set(0, 0, 0);
        root.add(ray);

        scene.add(root);

        updateFn = (time) => {
          root.rotation.y = Math.sin(time * 0.5) * 0.35;
          root.rotation.x = 0.35 + Math.cos(time * 0.4) * 0.1;
          ray.position.x = Math.sin(time * 1.5) * 1.2;
          ray.position.y = Math.cos(time * 1.2) * 0.6;
        };
        break;
      }

      // 2. SOLVEX (NER Platform 2.0): 3D wireframe terrain with animated route & hazard nodes
      case 'solvex-ner':
      case 'ner-access': {
        const root = new THREE.Group();
        const terrainGeo = new THREE.PlaneGeometry(6.5, 6.5, 20, 20);
        const pos = terrainGeo.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const u = pos.getX(i);
          const v = pos.getY(i);
          pos.setZ(i, Math.sin(u * 1.2) * Math.cos(v * 1.2) * 0.75);
        }
        terrainGeo.computeVertexNormals();

        const terrainMesh = new THREE.Mesh(terrainGeo, wireMat);
        terrainMesh.rotation.x = -Math.PI / 3;
        root.add(terrainMesh);

        // Hazard nodes
        const hazards = [];
        for (let i = 0; i < 4; i++) {
          const node = new THREE.Mesh(new THREE.OctahedronGeometry(0.22), softGoldMat);
          node.position.set((i - 1.5) * 1.4, Math.sin(i * 1.5) * 0.8, 0.4);
          root.add(node);
          hazards.push(node);
        }

        scene.add(root);

        updateFn = (time) => {
          root.rotation.z = Math.sin(time * 0.3) * 0.2;
          hazards.forEach((h, idx) => {
            h.rotation.y += 0.02;
            h.position.z = 0.4 + Math.sin(time * 2 + idx) * 0.15;
          });
        };
        break;
      }

      // 3. LINKX: Image-plane beam projecting into text-line rods
      case 'linkx':
      case 'linkedx': {
        const root = new THREE.Group();
        const plane = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.2, 0.08), smokedGlassMat);
        plane.position.set(-1.4, 0, 0);
        plane.rotation.y = 0.35;
        root.add(plane);

        const frame = new THREE.Mesh(new THREE.BoxGeometry(2.48, 3.28, 0.04), champagneMat);
        frame.position.copy(plane.position);
        frame.rotation.copy(plane.rotation);
        root.add(frame);

        // Synthesized text rods
        const rods = [];
        for (let i = 0; i < 6; i++) {
          const width = i % 2 === 0 ? 2.2 : 1.6;
          const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, width, 16), softGoldMat);
          rod.rotation.z = Math.PI / 2;
          rod.position.set(1.4, (2.5 - i) * 0.45, 0);
          root.add(rod);
          rods.push(rod);
        }

        scene.add(root);

        updateFn = (time) => {
          root.rotation.y = Math.sin(time * 0.4) * 0.2;
          rods.forEach((r, idx) => {
            r.position.x = 1.4 + Math.sin(time * 2 + idx * 0.5) * 0.15;
          });
        };
        break;
      }

      // 4. atlasAI Platform: Central core orbited by 3 provider satellites
      case 'atlas-ai': {
        const root = new THREE.Group();
        const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.2, 1), smokedGlassMat);
        root.add(core);

        const coreHalo = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.04, 16, 64), champagneMat);
        coreHalo.rotation.x = Math.PI / 2;
        root.add(coreHalo);

        // 3 satellites (OpenAI, Gemini, Claude)
        const satellites = [];
        const satColors = [0xD4FF3F, 0xCBB3E8, 0xB7B3AE];
        for (let i = 0; i < 3; i++) {
          const satMat = new THREE.MeshStandardMaterial({ color: satColors[i], metalness: 0.9, roughness: 0.2 });
          const sat = new THREE.Mesh(new THREE.OctahedronGeometry(0.35), satMat);
          root.add(sat);
          satellites.push({ mesh: sat, angle: (i * Math.PI * 2) / 3, radius: 2.6, speed: 0.8 + i * 0.2 });
        }

        scene.add(root);

        updateFn = (time) => {
          core.rotation.y += 0.01;
          core.rotation.x += 0.005;
          satellites.forEach(s => {
            const currentAngle = s.angle + time * s.speed;
            s.mesh.position.set(Math.cos(currentAngle) * s.radius, Math.sin(currentAngle * 1.5) * 0.8, Math.sin(currentAngle) * s.radius);
            s.mesh.rotation.y += 0.03;
          });
        };
        break;
      }

      // 5. Smart Agriculture IoT: Soil-layer cross-section with moisture gradient rings
      case 'smart-agriculture': {
        const root = new THREE.Group();
        const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 1.8, 32), smokedGlassMat);
        root.add(cylinder);

        // Soil strata rings
        for (let i = 0; i < 3; i++) {
          const ring = new THREE.Mesh(new THREE.TorusGeometry(2.04, 0.03, 16, 64), champagneMat);
          ring.rotation.x = Math.PI / 2;
          ring.position.y = (i - 1) * 0.6;
          root.add(ring);
        }

        // Moisture rings
        const pulseRings = [];
        for (let i = 0; i < 2; i++) {
          const pRing = new THREE.Mesh(new THREE.TorusGeometry(2.3 + i * 0.4, 0.02, 16, 64), softGoldMat);
          pRing.rotation.x = Math.PI / 2;
          root.add(pRing);
          pulseRings.push(pRing);
        }

        scene.add(root);

        updateFn = (time) => {
          root.rotation.y += 0.008;
          root.rotation.x = 0.35;
          pulseRings.forEach((p, idx) => {
            const scale = 1 + Math.sin(time * 2 + idx) * 0.08;
            p.scale.set(scale, scale, 1);
          });
        };
        break;
      }

      // 6. Base Isolation Earthquake Defense: Two plates decoupling under sine-displaced ground
      case 'base-isolation': {
        const root = new THREE.Group();
        const groundPlate = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.25, 3.2), smokedGlassMat);
        groundPlate.position.y = -1.2;
        root.add(groundPlate);

        const superstructure = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.2, 2.8), wireMat);
        superstructure.position.y = 0.6;
        root.add(superstructure);

        // 4 Base isolator bearings
        const bearings = [];
        const offsets = [[-1.4, -1.0], [1.4, -1.0], [-1.4, 1.0], [1.4, 1.0]];
        offsets.forEach(([ox, oz]) => {
          const bearing = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.7, 16), champagneMat);
          bearing.position.set(ox, -0.65, oz);
          root.add(bearing);
          bearings.push(bearing);
        });

        scene.add(root);

        updateFn = (time) => {
          // Ground shakes rapidly
          const groundDisp = Math.sin(time * 4) * 0.45;
          groundPlate.position.x = groundDisp;
          
          // Superstructure isolated: dampened, phase-lagged movement
          superstructure.position.x = Math.sin(time * 1.5) * 0.08;
          
          // Bearings shear deform
          bearings.forEach(b => {
            b.position.x = groundDisp * 0.5;
            b.rotation.z = (groundDisp - superstructure.position.x) * 0.5;
          });
        };
        break;
      }

      // 7. NVIDIA AI Chat Studio: High-throughput particle stream through accelerator die
      case 'nvidia-ai-chat': {
        const root = new THREE.Group();
        const chipDie = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.25, 3.2), smokedGlassMat);
        root.add(chipDie);

        const chipBezel = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.1, 3.3), champagneMat);
        root.add(chipBezel);

        // Orbiting particle stream
        const particleCount = 80;
        const particleGeo = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
          const angle = (i / particleCount) * Math.PI * 2;
          const r = 2.4 + (i % 3) * 0.3;
          particlePositions[i * 3] = Math.cos(angle) * r;
          particlePositions[i * 3 + 1] = ((i % 5) - 2) * 0.15;
          particlePositions[i * 3 + 2] = Math.sin(angle) * r;
        }
        particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        const particleMat = new THREE.PointsMaterial({ color: 0xD4FF3F, size: 0.12 });
        const particles = new THREE.Points(particleGeo, particleMat);
        root.add(particles);

        scene.add(root);

        updateFn = (time) => {
          root.rotation.x = 0.55;
          root.rotation.y = time * 0.2;
          particles.rotation.y = time * 1.2;
        };
        break;
      }

      // 8. ATLAS 3D Portfolio: Reuses canonical TorusKnot scene
      case 'atlas-portfolio':
      default: {
        const root = new THREE.Group();
        const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.6, 0.45, 120, 24, 2, 3), smokedGlassMat);
        root.add(knot);

        const spine = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.08, 24, 80), champagneMat);
        spine.rotation.x = Math.PI / 3;
        root.add(spine);

        scene.add(root);

        updateFn = (time) => {
          root.rotation.y = time * 0.4;
          root.rotation.x = Math.sin(time * 0.3) * 0.25;
        };
        break;
      }
    }

    activeAnimationCallback = updateFn;

    let startTime = performance.now();
    function animate() {
      currentRaf = requestAnimationFrame(animate);
      if (document.hidden) return;

      const elapsed = (performance.now() - startTime) * 0.001;
      if (activeAnimationCallback) {
        activeAnimationCallback(elapsed);
      }
      renderer.render(scene, camera);
    }
    animate();

    function onResize() {
      if (!currentRenderer || !currentCamera || !container) return;
      const nw = container.clientWidth || 540;
      const nh = container.clientHeight || 440;
      currentCamera.aspect = nw / nh;
      currentCamera.updateProjectionMatrix();
      currentRenderer.setSize(nw, nh);
      currentRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    window.addEventListener('resize', onResize);
  }

  window.AtlasProjectScenes = {
    mount: mountProjectScene,
    unmount: unmountCurrentScene
  };
})();
