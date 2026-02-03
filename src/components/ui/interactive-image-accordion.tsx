import React, { useState } from 'react';
import { GlassButtonLink } from "@/components/ui/glass-button";
import { ArrowRight } from "lucide-react";

// --- Data for the image accordion ---
interface AccordionItemData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const defaultAccordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'Confront Reality',
    description: 'Deep audit of market position and competition',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop',
  },
  {
    id: 2,
    title: 'Design the Funnel',
    description: 'Map the customer journey from stranger to buyer',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop',
  },
  {
    id: 3,
    title: 'Engineer the Offer',
    description: 'Structure offers that drive conversions',
    imageUrl: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=1000&fit=crop',
  },
  {
    id: 4,
    title: 'Deploy Execution',
    description: 'Strategic channel selection and deployment',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=1000&fit=crop',
  },
];

// --- Accordion Item Component ---
interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`
        relative overflow-hidden cursor-pointer
        transition-all duration-500 ease-out
        ${isActive ? 'flex-[4]' : 'flex-[1]'}
        min-w-[60px] h-[450px] md:h-[500px]
        rounded-2xl
      `}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://placehold.co/400x450/1a1a2e/99FF33?text=Edge+Point';
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className={`
        absolute inset-0 transition-opacity duration-500
        ${isActive ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent' : 'bg-black/60'}
      `} />

      {/* Caption Text */}
      <div className={`
        absolute bottom-0 left-0 right-0 p-6
        transition-all duration-500
        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-70'}
      `}>
        <h3 className={`
          font-heading font-bold text-white
          transition-all duration-500
          ${isActive ? 'text-2xl md:text-3xl mb-2' : 'text-lg [writing-mode:vertical-rl] rotate-180 whitespace-nowrap'}
        `}>
          {item.title}
        </h3>
        {isActive && (
          <p className="font-body text-white/70 text-sm md:text-base animate-fade-in">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

// --- Main Component ---
interface InteractiveImageAccordionProps {
  eyebrow?: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  items?: AccordionItemData[];
}

export function InteractiveImageAccordion({
  eyebrow,
  headline,
  description,
  ctaText,
  ctaHref,
  items = defaultAccordionItems,
}: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-8">
            {eyebrow && (
              <p className="text-neon font-body font-medium tracking-widest uppercase text-sm">
                {eyebrow}
              </p>
            )}

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              {headline}
            </h1>

            <p className="font-body text-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
              {description}
            </p>

            <div className="pt-4">
              <GlassButtonLink
                href={ctaHref}
                size="lg"
                className="glass-button-primary"
              >
                {ctaText}
                <ArrowRight className="w-5 h-5" />
              </GlassButtonLink>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full">
            <div className="flex gap-3 md:gap-4">
              {items.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { type AccordionItemData };
