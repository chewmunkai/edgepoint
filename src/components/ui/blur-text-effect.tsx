'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BlurTextEffectProps {
  children: string;
  className?: string;
}

export const BlurTextEffect: React.FC<BlurTextEffectProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const chars = el.querySelectorAll('span.char');

      gsap.set(chars, { opacity: 0, y: 20, filter: 'blur(10px)' });

      gsap.to(chars, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        // 1.5x faster vs previous (0.5s / 1.5 = ~0.33s)
        duration: 0.33,
        ease: 'power2.out',
        // 1.5x faster stagger (0.02 / 1.5 = ~0.013)
        stagger: 0.013,
        clearProps: 'filter',
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [children]);

  return (
    <span className={`inline ${className}`} ref={containerRef}>
      {children.split('').map((char, i) => (
        <span key={`${char}-${i}`} className="char inline-block" style={{ whiteSpace: 'pre' }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};
