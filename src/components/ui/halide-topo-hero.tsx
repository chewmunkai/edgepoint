import React, { useEffect, useRef } from 'react';
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

      <div className="relative h-screen w-full overflow-hidden bg-black font-heading">
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

        {/* Top bar: brand left, coordinates right */}
        <div className="relative z-20 flex items-start justify-between px-6 pt-24 sm:px-10 md:px-16">
          <span className="text-sm font-bold tracking-[0.15em] text-white uppercase">
            EDGE_POINT
          </span>
          <div className="text-right text-[11px] tracking-[0.15em] uppercase" style={{ color: 'hsl(0, 70%, 55%)' }}>
            <p>STRATEGIC MARKETING</p>
            <p>PRECISION EXECUTION</p>
          </div>
        </div>

        {/* Centered 3D Topo Canvas */}
        <div className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center">
          <div
            ref={canvasRef}
            className="relative w-[85vw] max-w-[900px] aspect-[16/10]"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            {/* Topo illustration */}
            <div className="absolute inset-0 opacity-50" style={{ transformStyle: 'preserve-3d' }}>
              <img
                src={topoIllustration}
                alt=""
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.7) contrast(1.3) grayscale(0.3)' }}
              />
            </div>
            {/* Topo layers */}
            <div
              ref={(el) => (layersRef.current[0] = el!)}
              className="absolute inset-[8%] border border-white/[0.06] bg-white/[0.02]"
              style={{ transformStyle: 'preserve-3d' }}
            />
            <div
              ref={(el) => (layersRef.current[1] = el!)}
              className="absolute inset-[20%] border border-white/[0.08] bg-white/[0.03]"
              style={{ transformStyle: 'preserve-3d' }}
            />
            <div
              ref={(el) => (layersRef.current[2] = el!)}
              className="absolute inset-[35%] border border-white/[0.12] bg-white/[0.04]"
              style={{ transformStyle: 'preserve-3d' }}
            />
            {/* Flow line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.06]">
              <div
                className="h-1/3 w-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
                style={{ animation: 'flow 4s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>

        {/* Overlapping headline — bottom left, over the canvas */}
        <div className="absolute left-6 bottom-[120px] z-10 sm:left-10 md:left-16 md:bottom-[140px]">
          <h1
            className="text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.85] tracking-tight uppercase"
            style={{ color: 'hsl(82, 100%, 60%)', textShadow: '0 0 60px rgba(153,255,51,0.15)' }}
          >
            HOPE IS
            <br />
            <span className="text-white">NOT A</span>
            <br />
            <span className="text-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)', color: 'transparent' }}>
              PLAN.
            </span>
          </h1>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between px-6 pb-6 sm:px-10 md:px-16 md:pb-8">
          {/* Bottom left metadata */}
          <div className="flex flex-col gap-1 text-[10px] tracking-[0.2em] text-white/50 uppercase font-body">
            <span>[ STRATEGIC AUDIT ]</span>
            <span className="text-white/30">FOCUSED STRATEGY & PRECISION EXECUTION</span>
          </div>

          {/* Bottom right CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-neon hover:shadow-[0_0_30px_rgba(153,255,51,0.3)]"
          >
            BOOK YOUR AUDIT
          </a>
        </div>
      </div>
    </>
  );
};

export default HalideLanding;
