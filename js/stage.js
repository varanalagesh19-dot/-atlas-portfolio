/**
 * ============================================================================
 * ATLAS 3.0 — GLOBAL 3D STAGE & SCULPTURE ENGINE (Three.js r128)
 * Architectural smoked glass & brushed champagne-gold physical sculpture
 * ============================================================================
 */

(function () {
  'use strict';

  let stageRenderer, stageScene, stageCamera, heroSculpture, stageParticles;
  let stageGlassMat, stageChampagneMat, stageSoftGoldMat, stageDarkTitaniumMat;
  let stageAmbientLight, stageKeyLight, stageRimLight, stageSoftFill;

  let is3DRendering = true;
  let isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let targetRotX = 0;
  let targetRotY = 0;
  let currentRoute = '/';
  let isDragging = false;
  let prevMouseX = 0;
  let prevMouseY = 0;

  function initStage() {
    const canvas = document.getElementById('stage-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    try {
      stageScene = new THREE.Scene();

      stageCamera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 1000);
      stageCamera.position.set(0, 0, 16);

      stageRenderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: window.devicePixelRatio < 2,
        powerPreference: 'high-performance'
      });
      stageRenderer.setSize(window.innerWidth, window.innerHeight);
      stageRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Studio Environment Map generation for physically based reflections
      try {
        const envCanvas = document.createElement('canvas');
        envCanvas.width = 512;
        envCanvas.height = 256;
        const eCtx = envCanvas.getContext('2d');
        
        const bgGrad = eCtx.createLinearGradient(0, 0, 0, 256);
        bgGrad.addColorStop(0, '#171819');
        bgGrad.addColorStop(0.5, '#101113');
        bgGrad.addColorStop(1, '#08090A');
        eCtx.fillStyle = bgGrad;
        eCtx.fillRect(0, 0, 512, 256);

        // Key softbox
        const topGrad = eCtx.createRadialGradient(256, 36, 8, 256, 36, 110);
        topGrad.addColorStop(0, 'rgba(245, 241, 232, 0.95)');
        topGrad.addColorStop(0.6, 'rgba(203, 179, 232, 0.40)');
        topGrad.addColorStop(1, 'rgba(8, 9, 10, 0)');
        eCtx.fillStyle = topGrad;
        eCtx.fillRect(100, 0, 312, 90);

        // Left champagne softbox
        const leftGrad = eCtx.createRadialGradient(70, 128, 4, 70, 128, 85);
        leftGrad.addColorStop(0, 'rgba(212, 255, 63, 0.85)');
        leftGrad.addColorStop(1, 'rgba(8, 9, 10, 0)');
        eCtx.fillStyle = leftGrad;
        eCtx.fillRect(0, 40, 150, 180);

        // Right rim softbox
        const rightGrad = eCtx.createRadialGradient(442, 128, 4, 442, 128, 85);
        rightGrad.addColorStop(0, 'rgba(203, 179, 232, 0.60)');
        rightGrad.addColorStop(1, 'rgba(8, 9, 10, 0)');
        eCtx.fillStyle = rightGrad;
        eCtx.fillRect(362, 40, 150, 180);

        const envTexture = new THREE.CanvasTexture(envCanvas);
        envTexture.mapping = THREE.EquirectangularReflectionMapping;
        const pmrem = new THREE.PMREMGenerator(stageRenderer);
        pmrem.compileEquirectangularShader();
        const studioEnv = pmrem.fromEquirectangular(envTexture).texture;
        stageScene.environment = studioEnv;
        envTexture.dispose();
        pmrem.dispose();
      } catch (e) {
        console.warn('Studio environment map generation note:', e);
      }

      // Contact shadow texture
      let shadowTexture = null;
      try {
        const sCanvas = document.createElement('canvas');
        sCanvas.width = 128;
        sCanvas.height = 128;
        const sCtx = sCanvas.getContext('2d');
        const sGrad = sCtx.createRadialGradient(64, 64, 4, 64, 64, 60);
        sGrad.addColorStop(0, 'rgba(0, 0, 0, 0.65)');
        sGrad.addColorStop(0.35, 'rgba(0, 0, 0, 0.35)');
        sGrad.addColorStop(0.7, 'rgba(0, 0, 0, 0.08)');
        sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        sCtx.fillStyle = sGrad;
        sCtx.fillRect(0, 0, 128, 128);
        shadowTexture = new THREE.CanvasTexture(sCanvas);
      } catch (e) {}

      // Architectural Physical Sculpture Group
      heroSculpture = new THREE.Group();

      // Main continuous ribbon loop (translucent smoked glass)
      const glassRibbonGeo = new THREE.TorusKnotGeometry(2.4, 0.70, 160, 32, 2, 3);
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x141517,
        roughness: 0.08,
        metalness: 0.05,
        transmission: 0.88,
        thickness: 3.2,
        transparent: true,
        opacity: 0.92,
        ior: 1.54,
        reflectivity: 0.98,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        attenuationColor: 0x08090A,
        attenuationDistance: 1.8,
        envMapIntensity: 1.8
      });

      // Precision Brushed Champagne Titanium Material (#D4FF3F)
      const champagneTitaniumMat = new THREE.MeshStandardMaterial({
        color: 0xD4FF3F,
        metalness: 0.95,
        roughness: 0.20,
        envMapIntensity: 1.8
      });

      // Machined Soft Metallic Gold Details (#CBB3E8)
      const softGoldMat = new THREE.MeshStandardMaterial({
        color: 0xCBB3E8,
        metalness: 0.92,
        roughness: 0.18,
        envMapIntensity: 1.6
      });

      // Machined Dark Titanium Grey Details
      const darkTitaniumMat = new THREE.MeshStandardMaterial({
        color: 0x1F2124,
        metalness: 0.88,
        roughness: 0.30,
        envMapIntensity: 1.4
      });

      const glassMesh = new THREE.Mesh(glassRibbonGeo, glassMat);
      glassMesh.scale.set(1.0, 1.05, 0.92);

      const titaniumSpineGeo = new THREE.TorusGeometry(3.5, 0.11, 32, 120);
      const titaniumSpine = new THREE.Mesh(titaniumSpineGeo, champagneTitaniumMat);
      titaniumSpine.rotation.set(0.48, 0.22, -0.3);

      const outerRingGeo = new THREE.TorusGeometry(4.7, 0.08, 32, 140);
      const outerRing = new THREE.Mesh(outerRingGeo, softGoldMat);
      outerRing.rotation.set(Math.PI * 0.36, Math.PI * 0.14, 0.2);

      const innerRingGeo = new THREE.TorusGeometry(4.0, 0.06, 24, 120);
      const innerRing = new THREE.Mesh(innerRingGeo, darkTitaniumMat);
      innerRing.rotation.set(-0.55, 0.15, 0.65);

      const hubGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.65, 32, 1, true);
      const hubMesh = new THREE.Mesh(hubGeo, champagneTitaniumMat);
      hubMesh.rotation.set(Math.PI / 4, 0.3, 0);

      heroSculpture.add(glassMesh);
      heroSculpture.add(titaniumSpine);
      heroSculpture.add(outerRing);
      heroSculpture.add(innerRing);
      heroSculpture.add(hubMesh);

      if (shadowTexture) {
        const shadowPlane = new THREE.Mesh(
          new THREE.PlaneGeometry(12, 12),
          new THREE.MeshBasicMaterial({
            map: shadowTexture,
            transparent: true,
            depthWrite: false,
            opacity: 0.55
          })
        );
        shadowPlane.rotation.x = -Math.PI / 2;
        shadowPlane.position.y = -3.8;
        heroSculpture.add(shadowPlane);
      }

      // Studio Lighting System
      const ambientLight = new THREE.AmbientLight(0x101113, 1.2);
      stageScene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xF5F1E8, 2.6);
      keyLight.position.set(14, 18, 16);
      stageScene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0xD4FF3F, 2.0);
      rimLight.position.set(-15, -8, 12);
      stageScene.add(rimLight);

      const softFill = new THREE.DirectionalLight(0x80612F, 0.9);
      softFill.position.set(0, 10, -10);
      stageScene.add(softFill);

      heroSculpture.position.set(4.5, 0.2, 0);
      stageScene.add(heroSculpture);

      stageGlassMat = glassMat;
      stageChampagneMat = champagneTitaniumMat;
      stageSoftGoldMat = softGoldMat;
      stageDarkTitaniumMat = darkTitaniumMat;

      stageAmbientLight = ambientLight;
      stageKeyLight = keyLight;
      stageRimLight = rimLight;
      stageSoftFill = softFill;

      // Initialize theme colors on stage materials
      const initialTheme = document.documentElement.getAttribute('data-theme') || 'light';
      updateStageTheme(initialTheme);

      window.addEventListener('resize', onStageResize);
      onStageResize();

      // Responsive pointer follow: 100% on homepage, 40% on inner pages (Step 2a)
      window.addEventListener('mousemove', (e) => {
        if (isReducedMotion) return;
        const normX = (e.clientX / window.innerWidth) - 0.5;
        const normY = (e.clientY / window.innerHeight) - 0.5;
        const mult = currentRoute === '/' ? 1.0 : 0.40;
        targetRotY = normX * 0.45 * mult;
        targetRotX = normY * 0.35 * mult;
      });

      // Pointer drag interaction: 100% on homepage, 40% on inner routes (Step 2a)
      window.addEventListener('mousedown', (e) => {
        const isTarget = e.target.closest('#stage-canvas, #home-hero-3d-anchor, .home-hero__3d-container');
        if (!isTarget) return;
        isDragging = true;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging || !heroSculpture) return;
        const dx = e.clientX - prevMouseX;
        const dy = e.clientY - prevMouseY;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
        const mult = currentRoute === '/' ? 1.0 : 0.40;
        heroSculpture.rotation.y += dx * 0.005 * mult;
        heroSculpture.rotation.x += dy * 0.005 * mult;
      });

      window.addEventListener('mouseup', () => { isDragging = false; });

      requestAnimationFrame(animateStage);
    } catch (err) {
      console.warn('3D WebGL stage initialization note:', err);
    }
  }

  function onStageResize() {
    if (!stageRenderer || !stageCamera) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    stageCamera.aspect = w / h;
    stageCamera.updateProjectionMatrix();
    stageRenderer.setSize(w, h);
    stageRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (heroSculpture) {
      if (w < 900) {
        heroSculpture.position.set(0, -1.8, -4);
        heroSculpture.scale.setScalar(0.75);
      } else {
        heroSculpture.position.set(currentRoute === '/' ? 4.5 : 2.5, 0.2, 0);
        heroSculpture.scale.setScalar(1.0);
      }
    }
  }

  function animateStage() {
    requestAnimationFrame(animateStage);

    if (document.hidden || !is3DRendering || isReducedMotion) return;

    if (heroSculpture) {
      heroSculpture.rotation.y += 0.0009;
      heroSculpture.rotation.x += 0.0004;

      if (targetRotY || targetRotX) {
        const baseX = window.innerWidth < 900 ? 0 : (currentRoute === '/' ? 4.5 : 2.5);
        const baseY = window.innerWidth < 900 ? -1.8 : 0.2;
        heroSculpture.position.x = baseX + (targetRotY * 0.8);
        heroSculpture.position.y = baseY - (targetRotX * 0.6);
      }
    }

    if (stageParticles) {
      stageParticles.rotation.y -= 0.0003;
    }

    if (stageRenderer && stageScene && stageCamera) {
      stageRenderer.render(stageScene, stageCamera);
    }
  }

  function updateStageTheme(theme) {
    if (!stageGlassMat || !stageChampagneMat) return;

    if (theme === 'light') {
      stageGlassMat.color.setHex(0xFAF8F5);
      stageGlassMat.attenuationColor.setHex(0xEAE5DE);
      stageGlassMat.transmission = 0.90;
      stageGlassMat.roughness = 0.06;
      stageGlassMat.clearcoat = 1.0;
      stageGlassMat.clearcoatRoughness = 0.04;
      stageGlassMat.opacity = 0.94;

      stageChampagneMat.color.setHex(0xB69B87);
      stageChampagneMat.metalness = 0.88;
      stageChampagneMat.roughness = 0.22;

      if (stageSoftGoldMat) {
        stageSoftGoldMat.color.setHex(0xA98242);
        stageSoftGoldMat.metalness = 0.85;
      }
      if (stageDarkTitaniumMat) {
        stageDarkTitaniumMat.color.setHex(0xB7B3AE);
        stageDarkTitaniumMat.metalness = 0.80;
      }
      if (stageAmbientLight) {
        stageAmbientLight.color.setHex(0xFAF8F5);
        stageAmbientLight.intensity = 1.8;
      }
      if (stageKeyLight) {
        stageKeyLight.color.setHex(0xFFFFFF);
        stageKeyLight.intensity = 2.4;
      }
      if (stageRimLight) {
        stageRimLight.color.setHex(0xB69B87);
        stageRimLight.intensity = 1.5;
      }
      if (stageSoftFill) {
        stageSoftFill.color.setHex(0xEAE5DE);
        stageSoftFill.intensity = 1.1;
      }
    } else {
      stageGlassMat.color.setHex(0x141517);
      stageGlassMat.attenuationColor.setHex(0x08090A);
      stageGlassMat.transmission = 0.88;
      stageGlassMat.roughness = 0.08;
      stageGlassMat.clearcoat = 1.0;
      stageGlassMat.clearcoatRoughness = 0.05;
      stageGlassMat.opacity = 0.92;

      stageChampagneMat.color.setHex(0xD4FF3F);
      stageChampagneMat.metalness = 0.95;
      stageChampagneMat.roughness = 0.20;

      if (stageSoftGoldMat) {
        stageSoftGoldMat.color.setHex(0xCBB3E8);
        stageSoftGoldMat.metalness = 0.92;
      }
      if (stageDarkTitaniumMat) {
        stageDarkTitaniumMat.color.setHex(0x1F2124);
        stageDarkTitaniumMat.metalness = 0.88;
      }
      if (stageAmbientLight) {
        stageAmbientLight.color.setHex(0x101113);
        stageAmbientLight.intensity = 1.2;
      }
      if (stageKeyLight) {
        stageKeyLight.color.setHex(0xF5F1E8);
        stageKeyLight.intensity = 2.6;
      }
      if (stageRimLight) {
        stageRimLight.color.setHex(0xD4FF3F);
        stageRimLight.intensity = 2.0;
      }
      if (stageSoftFill) {
        stageSoftFill.color.setHex(0x80612F);
        stageSoftFill.intensity = 0.9;
      }
    }
  }

  function setRoute(route) {
    currentRoute = route;
    if (heroSculpture && window.innerWidth >= 900) {
      heroSculpture.position.set(currentRoute === '/' ? 4.5 : 2.5, 0.2, 0);
    }
  }

  window.AtlasStage = {
    init: initStage,
    updateTheme: updateStageTheme,
    setRoute: setRoute
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStage);
  } else {
    initStage();
  }
})();
