import React, { useEffect, useRef, ReactNode } from 'react';
import { Volume2, ShieldAlert, DollarSign, Target } from 'lucide-react';

interface BentoItemProps {
  className?: string;
  children: ReactNode;
}

const BentoItem = ({ className = '', children }: BentoItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
    };

    item.addEventListener('mousemove', handleMouseMove);

    return () => {
      item.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`
        group relative overflow-hidden rounded-2xl
        bg-white/5 border border-white/10
        p-6 transition-all duration-500
        hover:border-neon/30 hover:bg-white/10
        before:pointer-events-none before:absolute before:inset-0
        before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500
        hover:before:opacity-100
        before:bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(153,255,51,0.1),transparent_40%)]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface MarketRealityBentoGridProps {
  eyebrow?: string;
  headline: string;
  highlightedText: string;
}

export const MarketRealityBentoGrid = ({ 
  eyebrow = "Market Reality",
  headline = "Scaling Today is a Challenge,",
  highlightedText = "Not a Given."
}: MarketRealityBentoGridProps) => {
  return (
    <section id="reality" className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-neon font-body font-medium tracking-widest uppercase text-sm mb-4">
            {eyebrow}
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            {headline}{" "}
            <span className="text-gradient-neon">{highlightedText}</span>
          </h2>
        </div>

        {/* Intro Text */}
        <p className="font-body text-white/60 text-lg md:text-xl text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Before we talk about tactics, we have to look at the reality of the market. Growth usually stalls because of two specific gaps:
        </p>

        {/* Bento Grid - Two Main Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* External Noise */}
          <BentoItem className="min-h-[280px]">
            <div className="h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors">
                <Volume2 className="w-6 h-6 text-neon" />
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                The External Noise
              </h3>
              <p className="font-body text-white/60 text-lg leading-relaxed">
                Competition is at an all-time high, and consumers are more skeptical than ever. Simply "showing up" with ads isn't enough to win anymore.
              </p>
            </div>
          </BentoItem>

          {/* Internal Gaps */}
          <BentoItem className="min-h-[280px]">
            <div className="h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors">
                <ShieldAlert className="w-6 h-6 text-neon" />
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                The Internal Gaps
              </h3>
              <p className="font-body text-white/60 text-lg leading-relaxed">
                Often, marketing fails because budgets are spent on execution before the business model or the offer is actually ready.
              </p>
            </div>
          </BentoItem>
        </div>

        {/* The Truth - Bottom Statement */}
        <BentoItem className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 p-4">
            <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon/20 transition-colors">
              <Target className="w-6 h-6 text-neon" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2">
                The Truth
              </h3>
              <p className="font-body text-white/60 leading-relaxed text-lg">
                To scale, you don't just need more "activity"—you need a{" "}
                <span className="text-neon font-semibold">deliberate strategy</span>{" "}
                that connects every dollar spent to your bottom line.
              </p>
            </div>
          </div>
        </BentoItem>
      </div>
    </section>
  );
};

export { BentoItem };
