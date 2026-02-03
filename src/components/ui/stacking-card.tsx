'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { BlurTextEffect } from '@/components/ui/blur-text-effect';

interface ProjectData {
  title: string;
  description: string;
  color: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[55vh] flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 30}px)`,
        }}
        className={cn(
          'flex flex-col relative -top-1/4 w-[92%] md:w-[75%] lg:w-[60%] rounded-3xl p-8 md:p-12 lg:p-14 origin-top',
          'shadow-2xl shadow-black/20'
        )}
      >
        {/* Card Number */}
        <span className="text-black/20 font-heading text-sm tracking-widest uppercase mb-4">
          0{i + 1}
        </span>
        
        {/* Title with Blur Effect */}
        <h2 className="m-0 text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-black leading-tight">
          <BlurTextEffect>{title}</BlurTextEffect>
        </h2>
        
        {/* Description with Blur Effect */}
        <div className="mt-5 md:mt-6">
          <p className="text-base md:text-lg font-body text-black/70 leading-relaxed max-w-xl">
            <BlurTextEffect>{description}</BlurTextEffect>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

interface MarketRealityStackingCardsProps {
  projects: ProjectData[];
  eyebrow?: string;
  headline?: string;
  highlightedText?: string;
}

const MarketRealityStackingCards = forwardRef<HTMLDivElement, MarketRealityStackingCardsProps>(
  ({ projects, eyebrow = "Market Reality", headline = "Scaling Today is a Challenge,", highlightedText = "Not a Given." }, ref) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end'],
    });

    return (
      <ReactLenis root>
        <main ref={ref} className="bg-black">
          {/* Header Section */}
          <section className="h-[50vh] w-full bg-black grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="text-center px-6 relative z-10">
              <p className="text-neon/80 font-body font-medium tracking-[0.2em] uppercase text-xs mb-6">
                {eyebrow}
              </p>
              <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
                {headline}{" "}
                <span className="bg-neon text-black px-3 py-1 rounded-md">
                  {highlightedText}
                </span>
              </h1>
              <p className="font-body text-white/50 text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed">
                Before we talk about tactics, we have to look at the reality of the market.
              </p>
              <div className="mt-8">
                <span className="text-white/30 text-xs font-body tracking-widest uppercase">↓ Scroll to explore</span>
              </div>
            </div>
          </section>

          {/* Stacking Cards */}
          <section ref={container} className="relative">
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.04;
              return (
                <Card
                  key={`p_${i}`}
                  i={i}
                  title={project.title}
                  description={project.description}
                  color={project.color}
                  progress={scrollYProgress}
                  range={[i * (1 / projects.length), 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </section>
        </main>
      </ReactLenis>
    );
  }
);

MarketRealityStackingCards.displayName = 'MarketRealityStackingCards';

export default MarketRealityStackingCards;
