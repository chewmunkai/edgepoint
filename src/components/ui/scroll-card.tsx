'use client';
import React, { forwardRef } from 'react';

interface ArticleCardData {
  title: string;
  description: string;
  color: string;
  rotation: string;
}

interface ScrollCardProps {
  cards: ArticleCardData[];
  className?: string;
}

const ScrollCard = forwardRef<HTMLDivElement, ScrollCardProps>(({ cards, className }, ref) => {
  return (
    <div ref={ref} className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Stacking Cards */}
        <div className="relative h-[600px] md:h-[700px]">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`sticky top-24 h-[180px] md:h-[200px] ${card.rotation}`}
              style={{
                paddingTop: `${i * 32}px`,
              }}
            >
              <div
                className="h-full rounded-2xl p-6 md:p-8 shadow-lg border border-white/10"
                style={{ backgroundColor: card.color }}
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold text-black mb-3">
                  {card.title}
                </h3>
                <p className="text-black/70 font-body text-sm md:text-base leading-relaxed line-clamp-3">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Content */}
        <div className="sticky top-24 h-fit flex items-center justify-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              What We{' '}
              <br className="hidden md:block" />
              Have Now😎
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
});

ScrollCard.displayName = 'ScrollCard';

export default ScrollCard;
export { ScrollCard };
