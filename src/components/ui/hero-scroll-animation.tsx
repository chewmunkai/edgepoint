'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef, forwardRef, ReactNode } from 'react';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
  children: ReactNode;
  className?: string;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress, children, className }) => {
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

const Section2: React.FC<SectionProps> = ({ scrollYProgress, children, className }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className={`relative w-full origin-top ${className || ''}`}
    >
      {children}
    </motion.div>
  );
};

interface HeroScrollAnimationProps {
  heroContent: ReactNode;
  secondaryContent: ReactNode;
  className?: string;
}

const HeroScrollAnimation = forwardRef<HTMLDivElement, HeroScrollAnimationProps>(
  ({ heroContent, secondaryContent, className }, ref) => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end'],
    });

    return (
      <div ref={ref} className={className}>
        <div ref={container} className="relative h-[200vh]">
          <Section1 scrollYProgress={scrollYProgress}>
            {heroContent}
          </Section1>
          <Section2 scrollYProgress={scrollYProgress}>
            {secondaryContent}
          </Section2>
        </div>
      </div>
    );
  }
);

HeroScrollAnimation.displayName = 'HeroScrollAnimation';

export default HeroScrollAnimation;
export { Section1, Section2, HeroScrollAnimation };
