import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Python3DLogo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        setIsLoading(false);
        return;
      }
    } catch (e) {
      setHasWebGL(false);
      setIsLoading(false);
      return;
    }

    const container = containerRef.current;
    let width = container.clientWidth || 380;
    let height = container.clientHeight || 340;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0.5, 7.2);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.warn('WebGL init failed, using fallback', err);
      setHasWebGL(false);
      setIsLoading(false);
      return;
    }

    // Master Group
    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // Python Colors matching reference
    const BLUE_COLOR = 0x2b5b84; // Deep rich Python blue
    const YELLOW_COLOR = 0xf5b025; // Golden warm amber yellow

    // Materials with realistic studio sheen
    const blueMaterial = new THREE.MeshStandardMaterial({
      color: BLUE_COLOR,
      roughness: 0.28,
      metalness: 0.18,
    });

    const yellowMaterial = new THREE.MeshStandardMaterial({
      color: YELLOW_COLOR,
      roughness: 0.28,
      metalness: 0.18,
    });

    const eyeBlueMaterial = new THREE.MeshBasicMaterial({ color: BLUE_COLOR });
    const eyeYellowMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // Helper to create Python Snake Shape
    const createSnakeHalf = (isYellow: boolean) => {
      const shape = new THREE.Shape();
      // Draw Python snake silhouette (curved head, notched neck, sweeping body and tail)
      shape.moveTo(0, 0.95);
      // Head curve
      shape.bezierCurveTo(0.55, 0.95, 0.95, 0.65, 0.95, 0.25);
      shape.lineTo(0.95, 0.05);
      shape.lineTo(0.35, 0.05);
      shape.bezierCurveTo(0.2, 0.05, 0.08, -0.05, 0.08, -0.2);
      shape.lineTo(0.08, -0.85);
      shape.bezierCurveTo(0.08, -0.98, -0.05, -1.05, -0.2, -1.05);
      shape.lineTo(-0.7, -1.05);
      shape.bezierCurveTo(-1.1, -1.05, -1.2, -0.7, -1.2, -0.3);
      shape.lineTo(-1.2, -0.05);
      shape.lineTo(-0.6, -0.05);
      shape.bezierCurveTo(-0.45, -0.05, -0.35, 0.08, -0.35, 0.2);
      shape.lineTo(-0.35, 0.65);
      shape.bezierCurveTo(-0.35, 0.85, -0.15, 0.95, 0, 0.95);

      const extrudeSettings: THREE.ExtrudeGeometryOptions = {
        steps: 2,
        depth: 0.42,
        bevelEnabled: true,
        bevelThickness: 0.08,
        bevelSize: 0.07,
        bevelOffset: 0,
        bevelSegments: 4
      };

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geometry.center();
      const mesh = new THREE.Mesh(geometry, isYellow ? yellowMaterial : blueMaterial);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      // Add eye dot
      const eyeGeom = new THREE.CylinderGeometry(0.09, 0.09, 0.46, 16);
      const eyeMesh = new THREE.Mesh(eyeGeom, isYellow ? eyeBlueMaterial : eyeYellowMaterial);
      eyeMesh.rotation.x = Math.PI / 2;
      eyeMesh.position.set(-0.15, 0.55, 0.22);
      mesh.add(eyeMesh);

      return mesh;
    };

    // Top Blue Snake
    const blueSnake = createSnakeHalf(false);
    blueSnake.position.set(-0.25, 0.35, 0.05);
    logoGroup.add(blueSnake);

    // Bottom Yellow Snake (rotated 180 deg)
    const yellowSnake = createSnakeHalf(true);
    yellowSnake.rotation.z = Math.PI;
    yellowSnake.position.set(0.25, -0.35, -0.05);
    logoGroup.add(yellowSnake);

    // Pedestal Base (Illuminated Dark Disc matching screenshot)
    const pedestalGroup = new THREE.Group();
    const discGeom = new THREE.CylinderGeometry(2.2, 2.5, 0.25, 48);
    const discMat = new THREE.MeshStandardMaterial({
      color: 0x180f0a,
      roughness: 0.4,
      metalness: 0.5,
    });
    const pedestal = new THREE.Mesh(discGeom, discMat);
    pedestal.position.set(0, -1.8, 0);
    pedestal.receiveShadow = true;
    pedestalGroup.add(pedestal);

    // Glowing rim ring around pedestal
    const ringGeom = new THREE.TorusGeometry(2.25, 0.03, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff650a,
      transparent: true,
      opacity: 0.7
    });
    const rimRing = new THREE.Mesh(ringGeom, ringMat);
    rimRing.rotation.x = Math.PI / 2;
    rimRing.position.set(0, -1.67, 0);
    pedestalGroup.add(rimRing);

    logoGroup.add(pedestalGroup);

    // Subtle background warm particles
    const particleCount = 28;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4 - 1;
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xff7a18,
      size: 0.04,
      transparent: true,
      opacity: 0.45
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // Lighting setup
    // 1. Warm Amber backlight behind logo (cinematic spotlight)
    const backLight = new THREE.PointLight(0xff650a, 4.5, 12);
    backLight.position.set(0, 0.5, -2.8);
    scene.add(backLight);

    // 2. Warm ambient floor glow
    const floorGlow = new THREE.PointLight(0xb9470b, 2.5, 8);
    floorGlow.position.set(0, -2, 1);
    scene.add(floorGlow);

    // 3. Front Key Light (crisp white/amber highlight)
    const keyLight = new THREE.DirectionalLight(0xfff4e6, 2.0);
    keyLight.position.set(4, 5, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // 4. Fill Cool Light (subtle contrast)
    const fillLight = new THREE.DirectionalLight(0x7fb3d5, 0.7);
    fillLight.position.set(-5, 2, 4);
    scene.add(fillLight);

    // 5. Ambient Light
    const ambientLight = new THREE.AmbientLight(0x3a2318, 0.9);
    scene.add(ambientLight);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0.2;
    let currentRotationX = 0;
    let currentRotationY = 0.2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.45 + 0.15;
      targetRotationX = -y * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    setIsLoading(false);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating and subtle idle breath
      logoGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.08 + 0.2;

      // Inertia interpolation toward mouse target
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      // Slow continuous spin + mouse delta
      const autoSpin = Math.sin(elapsedTime * 0.3) * 0.15;
      logoGroup.rotation.y = currentRotationY + autoSpin;
      logoGroup.rotation.x = currentRotationX * 0.5;

      // Slow particle drift
      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer?.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center select-none overflow-hidden">
      {/* Warm volumetric radial backdrop glow behind 3D logo */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none opacity-80" />
      <div 
        className="absolute w-[280px] h-[280px] rounded-full blur-[80px] pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,101,10,0.45) 0%, rgba(185,71,11,0.2) 60%, transparent 100%)'
        }}
      />

      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full relative z-10 flex items-center justify-center cursor-grab active:cursor-grabbing"
      />

      {/* Static Fallback if WebGL is disabled or fails */}
      {(!hasWebGL || isLoading) && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <img
            src="/images/hero-python-3d.png"
            alt="3D Python Logo Artwork"
            className="w-auto h-[260px] sm:h-[300px] object-contain drop-shadow-[0_20px_40px_rgba(255,101,10,0.35)]"
          />
        </div>
      )}
    </div>
  );
};
