'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef, forwardRef, ReactNode } from 'react';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
  children: ReactNode;
  className?: string;
}

const HeroSection: React.FC<SectionProps> = ({ scrollYProgress, children, className }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  
  return (
    <motion.div
      style={{ scale, rotate }}
      className={`sticky top-0 h-screen w-full origin-top ${className || ''}`}
    >
      {children}
    </motion.div>
  );
};

interface HeroScrollAnimationProps {
  children: ReactNode;
  className?: string;
}

const HeroScrollAnimation = forwardRef<HTMLDivElement, HeroScrollAnimationProps>(
  ({ children, className }, ref) => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start'],
    });

    return (
      <div ref={ref} className={className}>
        <div ref={container} className="relative h-[150vh]">
          <HeroSection scrollYProgress={scrollYProgress}>
            {children}
          </HeroSection>
        </div>
      </div>
    );
  }
);

HeroScrollAnimation.displayName = 'HeroScrollAnimation';

export default HeroScrollAnimation;
export { HeroSection, HeroScrollAnimation };
