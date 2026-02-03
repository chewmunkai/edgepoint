import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HighlightText } from "@/components/ui/animated-reveal-text";
import { TextReveal } from "@/components/ui/text-reveal-animation";

interface MarketCardData {
  title: string;
  description: string;
  color: string;
}

const marketRealityData: MarketCardData[] = [
  {
    title: "The External Noise",
    description:
      "Competition is at an all-time high, and consumers are more skeptical than ever. Simply \"showing up\" with ads isn't enough to win anymore. The market is saturated with messages.",
    color: "#99FF33",
  },
  {
    title: "The Internal Gaps",
    description:
      "Often, marketing fails because budgets are spent on execution before the business model or the offer is actually ready. Without a solid foundation, even the best campaigns fall flat.",
    color: "#FFD700",
  },
  {
    title: "The Truth",
    description:
      "Success comes from precision, not volume. Every action must tie directly to measurable business outcomes. The winners aren't those who spend the most—they're those who spend the smartest.",
    color: "#FFFFFF",
  },
];

const MarketRealitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="market-reality" className="py-8 md:py-12" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
            Market Reality
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
            <TextReveal word="Scaling Today is a Challenge, " className="inline" />
            <HighlightText
              text="Not a Given."
              as="span"
              textClassName="text-black"
              highlightClassName="rounded-sm"
              duration={1.2}
            />
          </h2>
        </motion.div>

        {/* Stacking Cards - Full height container for scroll effect */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[150vh]">
            {marketRealityData.map((card, i) => (
              <div
                key={i}
                className="sticky h-[200px] md:h-[220px]"
                style={{
                  top: `calc(20% + ${i * 50}px)`,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? 2 : -2 }}
                  animate={isInView ? { opacity: 1, y: 0, rotate: i % 2 === 0 ? 2 : -2 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="h-full rounded-xl p-6 md:p-8 shadow-xl border border-black/10"
                  style={{ 
                    backgroundColor: card.color,
                    transform: `rotate(${i % 2 === 0 ? 2 : -2}deg)`,
                  }}
                >
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-black mb-3">
                    {card.title}
                  </h3>
                  <p className="text-black/70 font-body text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketRealitySection;
