import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import topoIllustration from '@/assets/topo-illustration.png';

const HalideLanding: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;

      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 15;
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';

    const timeout = setTimeout(() => {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }
      `}</style>

      <div className="relative min-h-screen w-full overflow-hidden bg-black font-heading">
        {/* SVG Filter for Grain */}
        <svg className="hidden">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        {/* Background grain texture */}
        <div
          className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03]"
          style={{ filter: 'url(#grain)' }}
        />

        {/* Left content panel */}
        <div className="relative z-10 flex min-h-screen flex-col justify-between p-6 sm:p-8 md:p-12 lg:w-1/2">
          <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] text-white/40 uppercase">
            <span>EDGE POINT</span>
            <span className="h-px w-8 bg-white/20" />
            <span>STRATEGIC MARKETING</span>
          </div>

          <div className="my-auto max-w-lg">
            <h1
              className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[0.9] tracking-tight text-white"
              style={{ color: 'hsl(82, 100%, 60%)' }}
            >
              HOPE IS
              <br />
              NOT A
              <br />
              <span className="text-white">MARKETING</span>
              <br />
              <span className="text-white">PLAN.</span>
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1 text-[10px] tracking-[0.2em] text-white/40 uppercase">
                <span>[ STRATEGIC AUDIT ]</span>
                <span className="text-white/25">FOCUSED STRATEGY & PRECISION EXECUTION</span>
              </div>
            </div>
            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 border border-white/10 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm transition-all duration-500 hover:border-[hsl(82,100%,60%)]/40 hover:bg-[hsl(82,100%,60%)]/10 hover:text-white"
            >
              BOOK YOUR STRATEGIC AUDIT
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* 3D Topo Canvas */}
        <div className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center overflow-hidden lg:left-[30%]">
          <div
            ref={canvasRef}
            className="relative h-[500px] w-[500px] sm:h-[600px] sm:w-[600px] md:h-[700px] md:w-[700px]"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            {/* Topo illustration base layer */}
            <div
              className="absolute inset-0 opacity-40"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={topoIllustration}
                alt=""
                className="w-full h-full object-cover rounded-sm"
                style={{ filter: 'brightness(0.8) contrast(1.2)' }}
              />
            </div>
            {/* Topo layers */}
            <div
              ref={(el) => (layersRef.current[0] = el)}
              className="absolute inset-[10%] rounded-sm border border-neon/[0.08] bg-neon/[0.02]"
              style={{ transformStyle: 'preserve-3d' }}
            />
            <div
              ref={(el) => (layersRef.current[1] = el)}
              className="absolute inset-[25%] rounded-sm border border-neon/[0.12] bg-neon/[0.03]"
              style={{ transformStyle: 'preserve-3d' }}
            />
            <div
              ref={(el) => (layersRef.current[2] = el)}
              className="absolute inset-[40%] rounded-sm border border-neon/[0.18] bg-neon/[0.04]"
              style={{ transformStyle: 'preserve-3d' }}
            />
            {/* Flow line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-neon/[0.08]">
              <div
                className="h-1/3 w-full bg-gradient-to-b from-transparent via-neon/20 to-transparent"
                style={{ animation: 'flow 4s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>

        {/* Bottom subtitle bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.06] bg-black/40 px-6 py-4 backdrop-blur-sm sm:px-8 md:px-12">
          <p className="max-w-xl text-xs leading-relaxed tracking-wide text-white/40 sm:text-sm font-body">
            Most SMEs chase tactics without a clear direction. We help you build a focused marketing strategy—then guide or execute it with precision.
          </p>
        </div>
      </div>
    </>
  );
};

export default HalideLanding;
