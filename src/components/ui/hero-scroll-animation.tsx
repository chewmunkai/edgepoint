'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useRef, forwardRef } from 'react';

interface HeroScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
}

interface ScrollSectionProps {
  scrollYProgress: MotionValue<number>;
  children: React.ReactNode;
  className?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ scrollYProgress, children, className }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  return (
    <motion.div
      style={{ scale, rotate, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const HeroScrollWrapper = forwardRef<HTMLDivElement, HeroScrollWrapperProps>(
  ({ children, className }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end start'],
    });

    return (
      <div ref={containerRef} className={className}>
        <ScrollSection scrollYProgress={scrollYProgress} className="sticky top-0">
          {children}
        </ScrollSection>
      </div>
    );
  }
);

HeroScrollWrapper.displayName = 'HeroScrollWrapper';

export { HeroScrollWrapper, ScrollSection };
