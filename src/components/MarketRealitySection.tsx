import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HighlightText } from "@/components/ui/animated-reveal-text";

interface MarketCardData {
  title: string;
  description: string;
  color: string;
  rotation: string;
}

const marketRealityData: MarketCardData[] = [
  {
    title: "The External Noise",
    description:
      "Competition is at an all-time high, and consumers are more skeptical than ever. Simply \"showing up\" with ads isn't enough to win anymore. The market is saturated with messages.",
    color: "#99FF33",
    rotation: "rotate-3",
  },
  {
    title: "The Internal Gaps",
    description:
      "Often, marketing fails because budgets are spent on execution before the business model or the offer is actually ready. Without a solid foundation, even the best campaigns fall flat.",
    color: "#FFD700",
    rotation: "rotate-0",
  },
  {
    title: "The Truth",
    description:
      "Success comes from precision, not volume. Every action must tie directly to measurable business outcomes. The winners aren't those who spend the most—they're those who spend the smartest.",
    color: "#FFFFFF",
    rotation: "-rotate-3",
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
            Scaling Today is a Challenge,{" "}
            <HighlightText
              text="Not a Given."
              as="span"
              textClassName="text-black"
              highlightClassName="rounded-sm"
              duration={1.2}
            />
          </h2>
        </motion.div>

        {/* Stacking Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Stacking Cards */}
          <div className="relative h-[500px] md:h-[550px]">
            {marketRealityData.map((card, i) => (
              <div
                key={i}
                className={`sticky top-24 h-[140px] md:h-[160px] ${card.rotation}`}
                style={{
                  paddingTop: `${i * 28}px`,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="h-full rounded-xl p-5 md:p-6 shadow-lg border border-white/10"
                  style={{ backgroundColor: card.color }}
                >
                  <h3 className="text-lg md:text-xl font-heading font-bold text-black mb-2">
                    {card.title}
                  </h3>
                  <p className="text-black/70 font-body text-sm leading-relaxed line-clamp-3">
                    {card.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="sticky top-24 h-fit flex items-center justify-center lg:justify-start"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
                The Modern{" "}
                <br className="hidden md:block" />
                <span className="text-neon">Challenge</span> 🎯
              </h2>
              <p className="mt-4 text-white/60 font-body text-base max-w-sm">
                Scroll down to discover the realities of scaling in today's market.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketRealitySection;
