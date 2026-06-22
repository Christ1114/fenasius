"use client";

import { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ParticlesScene = ({ models = ['/animate/uterus.glb'] }) => {
  const mountRef = useRef(null);

  useLayoutEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      const size = 5; 
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.4, 'rgba(255, 182, 213, 0.9)'); 
      gradient.addColorStop(0.8, 'rgba(255, 105, 180, 0.5)');
      gradient.addColorStop(1, 'rgba(255, 105, 180, 0)');
          ctx.beginPath();
      ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const texture = createParticleTexture();

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08  ,
      map: texture,
      transparent: true,
      alphaTest: 0.01,
      blending: THREE.AdditiveBlending, 
      opacity: 0.8,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const loader = new GLTFLoader();
    const particleMeshes = [];

    models.forEach((modelPath) => {
      loader.load(
        modelPath,
        (gltf) => {
          const model = gltf.scene;
          const scale = 75;
          model.scale.set(scale, scale, scale);
          model.rotation.x = 1;
          model.rotation.z = 2;
          model.traverse((child) => { if (child.isMesh) child.visible = false; });
          scene.add(model);

          model.traverse((child) => {
            if (!child.isMesh) return;

            const geometry = child.geometry;
            const count = geometry.attributes.position.count;

            
            const step = 2; 
            const reducedCount = Math.floor(count / step);

            const posArray = new Float32Array(reducedCount * 3);
            const finalPositions = new Float32Array(reducedCount * 3);

            for (let i = 0; i < reducedCount; i++) {
              const src = i * step;
              finalPositions[i*3]   = geometry.attributes.position.getX(src) * scale;
              finalPositions[i*3+1] = geometry.attributes.position.getY(src) * scale;
              finalPositions[i*3+2] = geometry.attributes.position.getZ(src) * scale;

              const theta = Math.random() * Math.PI * 2;
              const phi = Math.acos(2 * Math.random() - 1);
              const radius = 8 + Math.random() * 2;
              posArray[i*3]   = radius * Math.sin(phi) * Math.cos(theta);
              posArray[i*3+1] = radius * Math.sin(phi) * Math.sin(theta);
              posArray[i*3+2] = radius * Math.cos(phi);
            }

            const particlesGeometry = new THREE.BufferGeometry();
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            particlesGeometry.setAttribute('finalPosition', new THREE.BufferAttribute(finalPositions, 3));

            const mesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(mesh);
            particleMeshes.push({ mesh, startTime: Date.now() });
          });
        },
        undefined,
        (error) => console.error('Erreur chargement modèle :', error)
      );
    });

   
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    camera.position.set(0, 0, 20);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    let animFrameId;

    const animateParticles = () => {
      const currentTime = Date.now();

      particleMeshes.forEach(({ mesh, startTime }) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / 3000, 1);

        const positions = mesh.geometry.attributes.position.array;
        const finalPositions = mesh.geometry.attributes.finalPosition.array;

        if (progress < 0.5) {
          const sp = progress / 0.5;
          for (let i = 0; i < positions.length / 3; i++) {
            const i3 = i * 3;
            const angle = Math.atan2(positions[i3+2], positions[i3]);
            const radius = Math.sqrt(positions[i3]**2 + positions[i3+2]**2);
            const newRadius = radius * (1 - sp * 0.04);
            const newAngle = angle + 0.03;
            positions[i3]   = Math.cos(newAngle) * newRadius;
            positions[i3+2] = Math.sin(newAngle) * newRadius;
            positions[i3+1] *= 0.97;
          }
        } else {
        
          const tp = (progress - 0.5) / 0.5;
          const eased = 1 - Math.pow(1 - tp, 3);
          for (let i = 0; i < positions.length / 3; i++) {
            const i3 = i * 3;
            positions[i3]   = THREE.MathUtils.lerp(positions[i3],   finalPositions[i3],   eased);
            positions[i3+1] = THREE.MathUtils.lerp(positions[i3+1], finalPositions[i3+1], eased);
            positions[i3+2] = THREE.MathUtils.lerp(positions[i3+2], finalPositions[i3+2], eased);

          
            if (tp > 0.95) {
              const t = currentTime * 0.001;
              positions[i3]   += Math.sin(t * 2 + i) * 0.008;
              positions[i3+1] += Math.cos(t * 1.5 + i) * 0.008;
              positions[i3+2] += Math.sin(t * 1.8 + i) * 0.008;
            }
          }
        }

        mesh.geometry.attributes.position.needsUpdate = true;

        mesh.rotation.y += 0.005;
      });

      renderer.render(scene, camera);
      animFrameId = requestAnimationFrame(animateParticles);
    };

    animateParticles();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      particleMeshes.forEach(({ mesh }) => {
        mesh.geometry.dispose();
      });
      particlesMaterial.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, [models]);

  return <div className="bg-transparent mt-30" ref={mountRef} />;
};

export default ParticlesScene;