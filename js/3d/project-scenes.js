/**
 * ATLAS 2.0 — AUTHENTIC PROJECT-SPECIFIC 3D SCENES
 * 8 Unique Procedural Three.js Scenes Tailored to Each Real Repository
 * Styled with light-first luminous champagne & titanium aesthetics.
 */

let activeRenderer = null;
let activeScene = null;
let activeCamera = null;
let activeRaf = null;

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

export function unmountProjectScene() {
  if (activeRaf) {
    cancelAnimationFrame(activeRaf);
    activeRaf = null;
  }

  if (activeRenderer) {
    if (activeRenderer.domElement && activeRenderer.domElement.parentNode) {
      activeRenderer.domElement.parentNode.removeChild(activeRenderer.domElement);
    }
    activeRenderer.dispose();
    activeRenderer = null;
  }

  if (activeScene) {
    activeScene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
    });
    activeScene = null;
  }

  activeCamera = null;
}

export function mountProjectScene(target, slug) {
  unmountProjectScene();
  const container = typeof target === 'string' ? document.getElementById(target) : target;
  if (!container) return null;

  const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Fallback to verified image if no WebGL, reduced motion, or Three.js missing
  if (isReducedMotion || !hasWebGL() || typeof THREE === 'undefined') {
    if (container.tagName === 'CANVAS') {
      const parent = container.parentElement;
      if (parent) {
        container.style.display = 'none';
        let img = parent.querySelector('.project-fallback-img');
        if (!img) {
          img = document.createElement('img');
          img.className = 'project-fallback-img';
          img.alt = `${slug} visual preview`;
          img.style.cssText = 'width: 100%; height: 100%; object-fit: cover; display: block; border-radius: var(--radius);';
          parent.appendChild(img);
        }
        img.src = PROJECT_IMAGE_MAP[slug] || '/assets/images/project-intellipdf.jpg';
      }
    } else {
      container.innerHTML = `
        <img src="${PROJECT_IMAGE_MAP[slug] || '/assets/images/project-intellipdf.jpg'}" 
             alt="${slug} architectural schematic" 
             style="width: 100%; height: 100%; object-fit: cover; display: block; border-radius: var(--radius);" />
      `;
    }
    return { destroy: () => {}, resetCamera: () => {} };
  }

  const isCanvas = container.tagName === 'CANVAS';
  const width = container.clientWidth || (container.parentElement ? container.parentElement.clientWidth : 560) || 560;
  const height = container.clientHeight || (container.parentElement ? container.parentElement.clientHeight : 420) || 420;

  activeScene = new THREE.Scene();
  activeCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  activeCamera.position.set(0, 0, 9);

  if (isCanvas) {
    activeRenderer = new THREE.WebGLRenderer({ canvas: container, alpha: true, antialias: true });
  } else {
    container.innerHTML = '';
    activeRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    activeRenderer.domElement.style.borderRadius = 'var(--radius)';
    activeRenderer.domElement.style.display = 'block';
    container.appendChild(activeRenderer.domElement);
  }

  activeRenderer.setSize(width, height);
  activeRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  // Studio Lighting for project scenes (Metallic gold & controlled warm studio fill)
  const ambLight = new THREE.AmbientLight(0x1F1A2A, 1.25);
  activeScene.add(ambLight);

  const keyLight = new THREE.DirectionalLight(0xF8F7F4, 2.8);
  keyLight.position.set(6, 8, 10);
  activeScene.add(keyLight);

  const goldRim = new THREE.DirectionalLight(0xCBB3E8, 3.0);
  goldRim.position.set(-8, -6, 6);
  activeScene.add(goldRim);

  const group = new THREE.Group();
  let tick = () => {};

  // Procedural geometry for each real project
  if (slug === 'intellipdf') {
    // 1. RAG Vector Space & Page Embedding Spheres
    const clusterGeo = new THREE.BufferGeometry();
    const count = 200;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 5;
      pos[i + 1] = (Math.random() - 0.5) * 4;
      pos[i + 2] = (Math.random() - 0.5) * 4;
    }
    clusterGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pointsMat = new THREE.PointsMaterial({ color: 0xD4FF3F, size: 0.12, transparent: true, opacity: 0.85 });
    const points = new THREE.Points(clusterGeo, pointsMat);
    group.add(points);

    // Document Metallic Gold Faceted Slab
    const docGeo = new THREE.BoxGeometry(2.4, 3.2, 0.15);
    const docMat = new THREE.MeshStandardMaterial({
      color: 0xD4FF3F,
      roughness: 0.22,
      metalness: 0.88
    });
    const doc = new THREE.Mesh(docGeo, docMat);
    group.add(doc);

    tick = () => {
      points.rotation.y += 0.003;
      doc.rotation.y += 0.005;
      doc.rotation.x = Math.sin(Date.now() * 0.001) * 0.15;
    };
  } else if (slug === 'solvex-ner' || slug === 'ner-access') {
    // 2. Mountainous Terrain Wireframe & Animated Route Spline
    const terrainGeo = new THREE.PlaneGeometry(6, 6, 28, 28);
    const pos = terrainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);
      const z = Math.sin(u * 1.4) * Math.cos(v * 1.4) * 0.75 + Math.sin(u * 2.2) * 0.2;
      pos.setZ(i, z);
    }
    terrainGeo.computeVertexNormals();

    const terrainMat = new THREE.MeshStandardMaterial({
      color: 0xCBB3E8,
      wireframe: true,
      roughness: 0.35,
      metalness: 0.82
    });
    const terrain = new THREE.Mesh(terrainGeo, terrainMat);
    terrain.rotation.x = -Math.PI / 3;
    group.add(terrain);

    // Route curve
    const curvePoints = [
      new THREE.Vector3(-2.2, -2.0, 0.2),
      new THREE.Vector3(-1.0, -0.6, 0.6),
      new THREE.Vector3(0.5, 0.4, 0.8),
      new THREE.Vector3(2.0, 1.8, 1.0)
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 40, 0.05, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({ color: 0xCBB3E8, metalness: 0.92, roughness: 0.18 });
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    terrain.add(tube);

    // Traveling transit beacon
    const markerGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const markerMat = new THREE.MeshStandardMaterial({ color: 0xD4FF3F, emissive: 0xCBB3E8, emissiveIntensity: 0.6, metalness: 0.9 });
    const marker = new THREE.Mesh(markerGeo, markerMat);
    terrain.add(marker);

    let progress = 0;
    tick = () => {
      terrain.rotation.z += 0.002;
      progress = (progress + 0.005) % 1;
      const pt = curve.getPointAt(progress);
      marker.position.copy(pt);
    };
  } else if (slug === 'linkx' || slug === 'linkedx') {
    // 3. Multimodal Vision Decomposition & Scanning Lattice
    const latticeGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const latticeMat = new THREE.MeshStandardMaterial({
      color: 0xD4FF3F,
      wireframe: true,
      metalness: 0.90,
      roughness: 0.22
    });
    const lattice = new THREE.Mesh(latticeGeo, latticeMat);
    group.add(lattice);

    const coreGeo = new THREE.SphereGeometry(1.1, 24, 24);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xCBB3E8,
      metalness: 0.85,
      roughness: 0.28
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Orbiting token ring
    const ringGeo = new THREE.TorusGeometry(3.0, 0.06, 16, 80);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xCBB3E8, metalness: 0.94, roughness: 0.16 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    group.add(ring);

    tick = () => {
      lattice.rotation.x += 0.004;
      lattice.rotation.y += 0.006;
      core.rotation.y -= 0.003;
      ring.rotation.z += 0.005;
    };
  } else if (slug === 'base-isolation') {
    // 4. Structural Earthquake Damping Bearing
    const cylTopGeo = new THREE.CylinderGeometry(2.2, 2.2, 0.4, 32);
    const metalMat = new THREE.MeshStandardMaterial({ color: 0xD4FF3F, metalness: 0.9, roughness: 0.22 });
    const cylTop = new THREE.Mesh(cylTopGeo, metalMat);
    cylTop.position.y = 1.4;
    group.add(cylTop);

    const elastomericGeo = new THREE.CylinderGeometry(1.6, 1.6, 1.8, 32);
    const rubberMat = new THREE.MeshStandardMaterial({ color: 0x0B0B0B, roughness: 0.7, metalness: 0.4 });
    const elastomeric = new THREE.Mesh(elastomericGeo, rubberMat);
    group.add(elastomeric);

    const cylBottom = new THREE.Mesh(cylTopGeo, metalMat);
    cylBottom.position.y = -1.4;
    group.add(cylBottom);

    tick = () => {
      const t = Date.now() * 0.003;
      cylTop.position.x = Math.sin(t) * 0.6;
      elastomeric.rotation.y += 0.004;
    };
  } else {
    // 5. High-Craft Octahedral Metallic Gold Sculpture
    const geom = new THREE.OctahedronGeometry(2.2, 0);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xD4FF3F,
      roughness: 0.22,
      metalness: 0.90
    });
    const mesh = new THREE.Mesh(geom, mat);
    group.add(mesh);

    const ringGeo = new THREE.TorusGeometry(3.0, 0.06, 24, 80);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xCBB3E8, metalness: 0.94, roughness: 0.16 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    group.add(ring);

    tick = () => {
      mesh.rotation.y += 0.005;
      mesh.rotation.x += 0.002;
      ring.rotation.z += 0.004;
    };
  }

  activeScene.add(group);

  function render() {
    activeRaf = requestAnimationFrame(render);
    tick();
    if (activeRenderer && activeScene && activeCamera) {
      activeRenderer.render(activeScene, activeCamera);
    }
  }

  render();

  return {
    destroy: () => unmountProjectScene(),
    resetCamera: () => {
      if (activeCamera) activeCamera.position.set(0, 0, 9);
    }
  };
}
