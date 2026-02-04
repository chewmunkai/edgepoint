"use client"

import { motion } from "framer-motion"
import { HeroScrollAnimation } from "@/components/ui/hero-scroll-animation"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { FlowGradientBackground } from "@/components/ui/flow-gradient-hero-section"
import { HighlightText } from "@/components/ui/animated-reveal-text"
import { TextReveal } from "@/components/ui/text-reveal-animation"
import MarketRealityStackingCards from "@/components/ui/stacking-card"
import logo from "@/assets/logo.png"

const marketRealityData = [
  {
    title: "The External Noise",
    description:
      "Competition is at an all-time high, and consumers are more skeptical than ever. Simply showing up with ads isn't enough anymore—standing out demands strategic precision and authentic value.",
    color: "#99FF33",
  },
  {
    title: "The Internal Gaps",
    description:
      "Marketing often fails because budgets are spent on execution before the business model is ready. Without a solid foundation, even the best campaigns fall flat.",
    color: "#E5FF80",
  },
  {
    title: "The Truth",
    description:
      "Success comes from precision, not volume. The winners aren't those who spend the most—they're those who build systems that compound over time.",
    color: "#FFFFFF",
  },
];

const HeroContent = () => (
  <FlowGradientBackground className="h-screen">
    <section className="relative h-screen overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-6 pt-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <img src={logo} alt="Edge Point" className="h-20 md:h-28 w-auto" />
          </motion.div>

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
          >
            <span className="text-white/80 text-xs md:text-sm font-body font-medium tracking-wide">
              Marketing Agency
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="font-heading font-bold text-white leading-[1.1] text-2xl md:text-4xl lg:text-5xl">
              <TextReveal word="Build a Marketing System That " className="inline" />
              <span className="whitespace-nowrap">
                <TextReveal word="Actually " className="inline" />
              </span>
              <HighlightText
                text="Scales Your Business."
                as="span"
                textClassName="text-black"
                highlightClassName="rounded-sm"
                duration={1.2}
              />
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            You've done the hard work of building a great product. Now, let's build the marketing engine it deserves.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <LiquidButton href="#contact" size="lg" variant="dark" className="font-heading text-sm md:text-base whitespace-nowrap min-w-[220px] justify-center">
              Start Our Growth Journey
            </LiquidButton>
            
            <LiquidButton href="#strategy" size="lg" variant="dark" className="font-heading text-sm md:text-base whitespace-nowrap min-w-[220px] justify-center">
              See the Framework
            </LiquidButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-neon rounded-full"
          />
        </div>
      </motion.div>
    </section>
  </FlowGradientBackground>
);

const MarketRealityContent = () => (
  <MarketRealityStackingCards
    projects={marketRealityData}
    eyebrow="Market Reality"
    headline="Scaling Today is a Challenge,"
    highlightedText="Not a Given."
  />
);

const HeroWithScrollAnimation = () => {
  return (
    <HeroScrollAnimation
      heroContent={<HeroContent />}
      secondaryContent={<MarketRealityContent />}
    />
  );
};

export default HeroWithScrollAnimation;
