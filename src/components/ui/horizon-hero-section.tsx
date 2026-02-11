import React, { useEffect, useRef, useState } from 'react';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

gsap.registerPlugin(ScrollTrigger);

interface ThreeRefs {
  scene: THREE.Scene | null;
  camera: THREE.PerspectiveCamera | null;
  renderer: THREE.WebGLRenderer | null;
  composer: EffectComposer | null;
  stars: THREE.Points[];
  nebula: THREE.Mesh | null;
  mountains: THREE.Mesh[];
  animationId: number | null;
  targetCameraX?: number;
  targetCameraY?: number;
  targetCameraZ?: number;
  locations?: number[];
}

export const HorizonHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const smoothCameraPos = useRef({ x: 0, y: 30, z: 100 });

  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const totalSections = 2;

  const threeRefs = useRef<ThreeRefs>({
    scene: null,
    camera: null,
    renderer: null,
    composer: null,
    stars: [],
    nebula: null,
    mountains: [],
    animationId: null,
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    const initThree = () => {
      const refs = threeRefs.current;

      refs.scene = new THREE.Scene();
      refs.scene.fog = new THREE.FogExp2(0x000000, 0.00025);

      refs.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
      refs.camera.position.z = 100;
      refs.camera.position.y = 20;

      refs.renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current!, antialias: true, alpha: true });
      refs.renderer.setSize(window.innerWidth, window.innerHeight);
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      refs.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      refs.renderer.toneMappingExposure = 0.5;

      refs.composer = new EffectComposer(refs.renderer);
      refs.composer.addPass(new RenderPass(refs.scene, refs.camera));
      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.8, 0.4, 0.85);
      refs.composer.addPass(bloomPass);

      createStarField(refs);
      createNebula(refs);
      createMountains(refs);
      createAtmosphere(refs);
      getLocations(refs);
      animate(refs);
      setIsReady(true);
    };

    const createStarField = (refs: ThreeRefs) => {
      const starCount = 5000;
      for (let i = 0; i < 3; i++) {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);

        for (let j = 0; j < starCount; j++) {
          const radius = 200 + Math.random() * 800;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(Math.random() * 2 - 1);
          positions[j * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[j * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[j * 3 + 2] = radius * Math.cos(phi);

          const color = new THREE.Color();
          const c = Math.random();
          if (c < 0.7) color.setHSL(0, 0, 0.8 + Math.random() * 0.2);
          else if (c < 0.9) color.setHSL(0.08, 0.5, 0.8);
          else color.setHSL(0.6, 0.5, 0.8);
          colors[j * 3] = color.r;
          colors[j * 3 + 1] = color.g;
          colors[j * 3 + 2] = color.b;
          sizes[j] = Math.random() * 2 + 0.5;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
          uniforms: { time: { value: 0 }, depth: { value: i } },
          vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            uniform float time;
            uniform float depth;
            void main() {
              vColor = color;
              vec3 pos = position;
              float angle = time * 0.05 * (1.0 - depth * 0.3);
              mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
              pos.xy = rot * pos.xy;
              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = size * (300.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            void main() {
              float dist = length(gl_PointCoord - vec2(0.5));
              if (dist > 0.5) discard;
              float opacity = 1.0 - smoothstep(0.0, 0.5, dist);
              gl_FragColor = vec4(vColor, opacity);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

        const stars = new THREE.Points(geometry, material);
        refs.scene!.add(stars);
        refs.stars.push(stars);
      }
    };

    const createNebula = (refs: ThreeRefs) => {
      const geometry = new THREE.PlaneGeometry(8000, 4000, 100, 100);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color(0x0033ff) },
          color2: { value: new THREE.Color(0xff0066) },
          opacity: { value: 0.3 },
        },
        vertexShader: `
          varying vec2 vUv;
          varying float vElevation;
          uniform float time;
          void main() {
            vUv = uv;
            vec3 pos = position;
            float elevation = sin(pos.x * 0.01 + time) * cos(pos.y * 0.01 + time) * 20.0;
            pos.z += elevation;
            vElevation = elevation;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          uniform float opacity;
          uniform float time;
          varying vec2 vUv;
          varying float vElevation;
          void main() {
            float mixFactor = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
            vec3 color = mix(color1, color2, mixFactor * 0.5 + 0.5);
            float alpha = opacity * (1.0 - length(vUv - 0.5) * 2.0);
            alpha *= 1.0 + vElevation * 0.01;
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const nebula = new THREE.Mesh(geometry, material);
      nebula.position.z = -1050;
      refs.scene!.add(nebula);
      refs.nebula = nebula;
    };

    const createMountains = (refs: ThreeRefs) => {
      const layers = [
        { distance: -50, height: 60, color: 0x1a1a2e, opacity: 1 },
        { distance: -100, height: 80, color: 0x16213e, opacity: 0.8 },
        { distance: -150, height: 100, color: 0x0f3460, opacity: 0.6 },
        { distance: -200, height: 120, color: 0x0a4668, opacity: 0.4 },
      ];

      layers.forEach((layer, index) => {
        const points: THREE.Vector2[] = [];
        const segments = 50;
        for (let i = 0; i <= segments; i++) {
          const x = (i / segments - 0.5) * 1000;
          const y = Math.sin(i * 0.1) * layer.height + Math.sin(i * 0.05) * layer.height * 0.5 + Math.random() * layer.height * 0.2 - 100;
          points.push(new THREE.Vector2(x, y));
        }
        points.push(new THREE.Vector2(5000, -300));
        points.push(new THREE.Vector2(-5000, -300));

        const shape = new THREE.Shape(points);
        const geometry = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshBasicMaterial({ color: layer.color, transparent: true, opacity: layer.opacity, side: THREE.DoubleSide });

        const mountain = new THREE.Mesh(geometry, material);
        mountain.position.z = layer.distance;
        mountain.position.y = layer.distance;
        mountain.userData = { baseZ: layer.distance, index };
        refs.scene!.add(mountain);
        refs.mountains.push(mountain);
      });
    };

    const createAtmosphere = (refs: ThreeRefs) => {
      const geometry = new THREE.SphereGeometry(600, 32, 32);
      const material = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 } },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          uniform float time;
          void main() {
            float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            vec3 atmosphere = vec3(0.3, 0.6, 1.0) * intensity;
            float pulse = sin(time * 2.0) * 0.1 + 0.9;
            atmosphere *= pulse;
            gl_FragColor = vec4(atmosphere, intensity * 0.25);
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
      });
      refs.scene!.add(new THREE.Mesh(geometry, material));
    };

    const getLocations = (refs: ThreeRefs) => {
      refs.locations = refs.mountains.map((m) => m.position.z);
    };

    const animate = (refs: ThreeRefs) => {
      refs.animationId = requestAnimationFrame(() => animate(refs));
      const time = Date.now() * 0.001;

      refs.stars.forEach((s) => {
        if ((s.material as THREE.ShaderMaterial).uniforms) {
          (s.material as THREE.ShaderMaterial).uniforms.time.value = time;
        }
      });

      if (refs.nebula && (refs.nebula.material as THREE.ShaderMaterial).uniforms) {
        (refs.nebula.material as THREE.ShaderMaterial).uniforms.time.value = time * 0.5;
      }

      if (refs.camera && refs.targetCameraX !== undefined) {
        const sf = 0.05;
        smoothCameraPos.current.x += (refs.targetCameraX - smoothCameraPos.current.x) * sf;
        smoothCameraPos.current.y += (refs.targetCameraY! - smoothCameraPos.current.y) * sf;
        smoothCameraPos.current.z += (refs.targetCameraZ! - smoothCameraPos.current.z) * sf;

        const floatX = Math.sin(time * 0.1) * 2;
        const floatY = Math.cos(time * 0.15) * 1;

        refs.camera.position.x = smoothCameraPos.current.x + floatX;
        refs.camera.position.y = smoothCameraPos.current.y + floatY;
        refs.camera.position.z = smoothCameraPos.current.z;
        refs.camera.lookAt(0, 10, -600);
      }

      refs.mountains.forEach((mountain, i) => {
        const pf = 1 + i * 0.5;
        mountain.position.x = Math.sin(time * 0.1) * 2 * pf;
        mountain.position.y = 50 + Math.cos(time * 0.15) * 1 * pf;
      });

      if (refs.composer) refs.composer.render();
    };

    initThree();

    const handleResize = () => {
      const refs = threeRefs.current;
      if (refs.camera && refs.renderer && refs.composer) {
        refs.camera.aspect = window.innerWidth / window.innerHeight;
        refs.camera.updateProjectionMatrix();
        refs.renderer.setSize(window.innerWidth, window.innerHeight);
        refs.composer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      const refs = threeRefs.current;
      if (refs.animationId) cancelAnimationFrame(refs.animationId);
      window.removeEventListener('resize', handleResize);
      refs.stars.forEach((s) => { s.geometry.dispose(); (s.material as THREE.Material).dispose(); });
      refs.mountains.forEach((m) => { m.geometry.dispose(); (m.material as THREE.Material).dispose(); });
      if (refs.nebula) { refs.nebula.geometry.dispose(); (refs.nebula.material as THREE.Material).dispose(); }
      if (refs.renderer) refs.renderer.dispose();
    };
  }, []);

  // GSAP entry animations
  useEffect(() => {
    if (!isReady) return;
    gsap.set([menuRef.current, titleRef.current, subtitleRef.current, scrollProgressRef.current], { visibility: 'visible' });

    const tl = gsap.timeline();
    if (menuRef.current) tl.from(menuRef.current, { x: -100, opacity: 0, duration: 1, ease: 'power3.out' });
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.title-char');
      tl.from(chars, { y: 200, opacity: 0, duration: 1.5, stagger: 0.05, ease: 'power4.out' }, '-=0.5');
    }
    if (subtitleRef.current) {
      const lines = subtitleRef.current.querySelectorAll('.subtitle-line');
      tl.from(lines, { y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }, '-=0.8');
    }
    if (scrollProgressRef.current) {
      tl.from(scrollProgressRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power2.out' }, '-=0.5');
    }
    return () => { tl.kill(); };
  }, [isReady]);

  // Scroll handling scoped to hero container
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollY = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const relativeScroll = Math.max(0, scrollY - containerTop);
      const maxScroll = containerHeight - windowHeight;
      const progress = maxScroll > 0 ? Math.min(relativeScroll / maxScroll, 1) : 0;

      setScrollProgress(progress);
      setIsPastHero(progress >= 0.98);

      const newSection = Math.min(Math.floor(progress * totalSections), totalSections - 1);
      setCurrentSection(newSection);

      const refs = threeRefs.current;
      const totalProgress = progress * totalSections;
      const sectionProgress = totalProgress % 1;

      const cameraPositions = [
        { x: 0, y: 30, z: 300 },
        { x: 0, y: 40, z: -50 },
        { x: 0, y: 50, z: -700 },
      ];

      const currentPos = cameraPositions[newSection] || cameraPositions[0];
      const nextPos = cameraPositions[newSection + 1] || currentPos;

      refs.targetCameraX = currentPos.x + (nextPos.x - currentPos.x) * sectionProgress;
      refs.targetCameraY = currentPos.y + (nextPos.y - currentPos.y) * sectionProgress;
      refs.targetCameraZ = currentPos.z + (nextPos.z - currentPos.z) * sectionProgress;

      refs.mountains.forEach((mountain, i) => {
        const speed = 1 + i * 0.9;
        if (refs.nebula) {
          (refs.nebula as THREE.Mesh).position.z = mountain.userData.baseZ + scrollY * speed * 0.5 + progress * speed * 0.01 - 100;
        }
        if (progress > 0.7) {
          mountain.position.z = 600000;
        } else if (refs.locations) {
          mountain.position.z = refs.locations[i];
        }
      });
      if (refs.nebula && refs.mountains[3]) {
        (refs.nebula as THREE.Mesh).position.z = refs.mountains[3].position.z;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalSections]);

  const splitTitle = (text: string) =>
    text.split('').map((char, i) => (
      <span key={i} className="title-char inline-block" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  const fixedOpacity = isPastHero ? 0 : 1;
  const fixedPointer = isPastHero ? 'none' as const : 'auto' as const;

  return (
    <div ref={containerRef} className="relative">
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full"
        style={{ zIndex: 0, opacity: fixedOpacity, transition: 'opacity 0.5s ease', pointerEvents: fixedPointer }}
      />

      {/* Side accent line */}
      <div
        ref={menuRef}
        className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-10"
        style={{ visibility: 'hidden', opacity: fixedOpacity, transition: 'opacity 0.5s ease', pointerEvents: fixedPointer }}
      >
        <div className="flex flex-col items-center gap-5">
          <div className="w-0.5 h-16 bg-white/30" />
          <div className="w-0.5 h-16 bg-white/10" />
          <div className="w-0.5 h-16 bg-white/10" />
        </div>
      </div>

      {/* Main content overlay */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-4 max-w-4xl"
        style={{ opacity: fixedOpacity, transition: 'opacity 0.5s ease', pointerEvents: fixedPointer }}
      >
        <h1
          ref={titleRef}
          className="text-[10vw] md:text-[5vw] lg:text-[4.5vw] font-heading font-bold tracking-[0.05em] leading-[1.1]"
          style={{
            visibility: 'hidden',
           color: 'transparent',
            WebkitTextStroke: '1.5px hsl(82, 100%, 60%)',
            textShadow: '0 0 40px rgba(153, 255, 51, 0.25)',
          }}
        >
          {splitTitle('Hope Is Not a')}
          <br />
          {splitTitle('Marketing Plan.')}
        </h1>

        <div ref={subtitleRef} className="mt-6 md:mt-8" style={{ visibility: 'hidden' }}>
          <div className="inline-block rounded-xl bg-black/50 backdrop-blur-md border border-white/10 px-6 py-4 md:px-8 md:py-5">
            <p className="subtitle-line text-white/80 text-base md:text-lg lg:text-xl font-body leading-relaxed max-w-2xl mx-auto">
              Most SMEs chase tactics without a clear direction. We help you build a focused marketing strategy—then guide or execute it with precision.
            </p>
          </div>
          <div className="subtitle-line mt-8">
            <a href="/contact">
              <LiquidButton variant="dark" size="xl" className="font-heading text-sm md:text-base tracking-wider">
                Book Your Strategic Audit
              </LiquidButton>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <div
        ref={scrollProgressRef}
        className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-4"
        style={{ visibility: 'hidden', opacity: fixedOpacity, transition: 'opacity 0.5s ease', pointerEvents: fixedPointer }}
      >
        <p
          className="text-white/50 text-[10px] tracking-[0.3em]"
          style={{ writingMode: 'vertical-rl' }}
        >
          SCROLL
        </p>
        <div className="w-0.5 h-24 bg-white/10 relative overflow-hidden">
          <div
            className="w-full bg-white absolute top-0 left-0"
            style={{ height: `${scrollProgress * 100}%`, transition: 'height 0.1s linear' }}
          />
        </div>
        <p className="text-white/50 text-[10px] font-mono">
          {String(currentSection + 1).padStart(2, '0')} / {String(totalSections).padStart(2, '0')}
        </p>
      </div>

      {/* Scroll height sections */}
      <div style={{ height: `${(totalSections + 1) * 100}vh` }}>
        {[...Array(2)].map((_, i) => {
          const titles: Record<number, string> = { 1: 'COSMOS', 2: 'INFINITY' };
          const subtitles: Record<number, { line1: string; line2: string }> = {
            1: { line1: 'Beyond the boundaries of imagination,', line2: 'lies the universe of possibilities' },
            2: { line1: 'In the space between thought and creation,', line2: 'we find the essence of true innovation' },
          };

          return (
            <div key={i} className="h-screen flex items-center justify-center" style={{ pointerEvents: 'none' }}>
              <div className="text-center">
                <h2 className="text-[8vw] md:text-[6vw] font-bold text-white tracking-[0.2em] leading-none opacity-0">
                  {titles[i + 1]}
                </h2>
                <div className="mt-6">
                  <p className="text-white/60 text-base md:text-lg tracking-wider opacity-0">
                    {subtitles[i + 1]?.line1}
                  </p>
                  <p className="text-white/60 text-base md:text-lg tracking-wider mt-2 opacity-0">
                    {subtitles[i + 1]?.line2}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizonHero;
