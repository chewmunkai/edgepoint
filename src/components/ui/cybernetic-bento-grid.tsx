import React, { useEffect, useRef, ReactNode } from 'react';
import { AlertCircle, TrendingDown, Users, Target, BarChart3, Zap } from 'lucide-react';

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

interface ProblemBentoGridProps {
  eyebrow?: string;
  headline: string;
  highlightedText: string;
}

export const ProblemBentoGrid = ({ 
  eyebrow = "The Problem",
  headline = "Where Most SME Marketing",
  highlightedText = "Goes Wrong"
}: ProblemBentoGridProps) => {
  const problems = [
    {
      icon: Target,
      title: "No Clear Objective",
      description: "Marketing activities pile up without a clear objective or measurable outcome.",
      size: "large"
    },
    {
      icon: Users,
      title: "Conflicting Advice",
      description: "Different agencies or staff give conflicting advice.",
      size: "small"
    },
    {
      icon: TrendingDown,
      title: "Scattered Spending",
      description: "Money is spent across channels with no single owner of outcomes.",
      size: "small"
    },
    {
      icon: BarChart3,
      title: "Results Without Change",
      description: "Results are reviewed, but direction never changes.",
      size: "small"
    },
    {
      icon: Zap,
      title: "Missing Leadership",
      description: "The issue isn't effort — it's the absence of clear marketing leadership.",
      size: "medium"
    },
    {
      icon: AlertCircle,
      title: "Tactical Over Strategic",
      description: "Focus on tactics without a cohesive strategy leads to wasted resources.",
      size: "small"
    },
  ];

  return (
    <section id="about" className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-neon font-body font-medium tracking-widest uppercase text-sm mb-4">
            {eyebrow}
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            {headline}{" "}
            <span className="text-gradient-neon">{highlightedText}</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Large Item - First Problem */}
          {(() => {
            const FirstIcon = problems[0].icon;
            return (
              <BentoItem className="md:col-span-2 md:row-span-2">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors">
                      <FirstIcon className="w-6 h-6 text-neon" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                      {problems[0].title}
                    </h3>
                    <p className="font-body text-white/60 text-lg leading-relaxed">
                      {problems[0].description}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="font-body text-white/40 text-sm">
                      This is the pattern we see repeatedly in SME marketing.
                    </p>
                  </div>
                </div>
              </BentoItem>
            );
          })()}

          {/* Small Items */}
          {problems.slice(1, 4).map((problem, index) => {
            const Icon = problem.icon;
            return (
              <BentoItem key={index}>
                <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center mb-4 group-hover:bg-neon/20 transition-colors">
                  <Icon className="w-5 h-5 text-neon" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {problem.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {problem.description}
                </p>
              </BentoItem>
            );
          })}

          {/* Medium Item - Key Insight */}
          {(() => {
            const InsightIcon = problems[4].icon;
            return (
              <BentoItem className="md:col-span-2">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon/20 transition-colors">
                    <InsightIcon className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2">
                      {problems[4].title}
                    </h3>
                    <p className="font-body text-white/60 leading-relaxed">
                      {problems[4].description}
                    </p>
                  </div>
                </div>
              </BentoItem>
            );
          })()}

          {/* Last Small Item */}
          {(() => {
            const LastIcon = problems[5].icon;
            return (
              <BentoItem>
                <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center mb-4 group-hover:bg-neon/20 transition-colors">
                  <LastIcon className="w-5 h-5 text-neon" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {problems[5].title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {problems[5].description}
                </p>
              </BentoItem>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export { BentoItem };
