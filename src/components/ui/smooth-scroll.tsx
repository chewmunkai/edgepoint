'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef, ReactNode } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = forwardRef<HTMLDivElement, SmoothScrollProps>(({ children }, ref) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div ref={ref}>
        {children}
      </div>
    </ReactLenis>
  );
});

SmoothScroll.displayName = 'SmoothScroll';

interface StackingCardSectionProps {
  children: ReactNode;
  className?: string;
  isFirst?: boolean;
}

const StackingCardSection = forwardRef<HTMLDivElement, StackingCardSectionProps>(
  ({ children, className = '', isFirst = false }, ref) => {
    return (
      <div 
        ref={ref}
        className={`relative z-10 ${isFirst ? '-mt-20' : '-mt-16'}`}
      >
        <div className={`bg-black rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden ${className}`}>
          {children}
        </div>
      </div>
    );
  }
);

StackingCardSection.displayName = 'StackingCardSection';

interface StickyHeroSectionProps {
  children: ReactNode;
}

const StickyHeroSection = forwardRef<HTMLDivElement, StickyHeroSectionProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="sticky top-0 h-screen w-full bg-black grid place-content-center z-0">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);

StickyHeroSection.displayName = 'StickyHeroSection';

export default SmoothScroll;
export { SmoothScroll, StackingCardSection, StickyHeroSection };
