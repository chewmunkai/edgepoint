'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';
import { cn } from '@/lib/utils';

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
      className="h-[60vh] flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={cn(
          'flex flex-col relative -top-1/4 w-[90%] md:w-[80%] lg:w-[70%] rounded-2xl p-6 md:p-10 origin-top',
          'border-2 border-black shadow-[4px_4px_0px_0px_#000]'
        )}
      >
        <h2 className="text-center m-0 text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-black">
          {title}
        </h2>
        <div className="mt-6 md:mt-8">
          <p className="text-base md:text-lg first-letter:text-3xl first-letter:font-heading font-body text-black/80 leading-relaxed text-center max-w-2xl mx-auto">
            {description}
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
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="text-center px-4 relative z-10">
              <p className="text-neon font-body font-medium tracking-widest uppercase text-sm mb-4">
                {eyebrow}
              </p>
              <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
                {headline}{" "}
                <span className="bg-neon text-black px-2 rounded-sm">
                  {highlightedText}
                </span>
              </h1>
              <p className="font-body text-white/60 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
                Before we talk about tactics, we have to look at the reality of the market. 
                Growth usually stalls because of two specific gaps. Scroll to explore.
              </p>
              <div className="mt-6 animate-bounce">
                <span className="text-white/40 text-sm font-body">↓ Scroll</span>
              </div>
            </div>
          </section>

          {/* Stacking Cards */}
          <section ref={container} className="relative">
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
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
