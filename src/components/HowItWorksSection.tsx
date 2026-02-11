import { RuixenBentoGrid, type RuixenCardData } from "@/components/ui/ruixen-bento-cards";

const strategyCards: RuixenCardData[] = [
  {
    title: "Map the Customer Journey",
    description: "We map your customer journey and identify where prospects drop off.",
  },
  {
    title: "Align Offer & Messaging",
    description: "We align your offer and messaging to actual market demand.",
  },
  {
    title: "Prioritize Channels & Budget",
    description: "We prioritize which channels and tactics deserve budget—and which don't.",
    className: "lg:col-span-3",
  },
  {
    title: "Focused Execution Roadmap",
    description: "We create a focused execution roadmap with clear ownership.",
    className: "lg:col-span-3",
  },
];

const executionCards: RuixenCardData[] = [
  {
    title: "Need Execution?",
    description: "We handle SEO, website development, and social media marketing in-house.",
  },
  {
    title: "Have a Team Already?",
    description: "We guide them with strategic clarity and oversight.",
  },
  {
    title: "Need Specialists?",
    description: "We'll connect you with trusted partners for areas outside our scope.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
              How Edge Point Works
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
              The Strategic Framework{" "}
              <span className="bg-neon text-black px-2 py-0.5 rounded-sm">Most SMEs Are Missing.</span>
            </h2>
            <p className="font-body text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
              We start with strategy, then help you execute it—whether that's through our in-house team, your existing resources, or a combination of both.
            </p>
          </div>

          {/* Strategy Phase */}
          <div className="mb-12">
            <h3 className="font-heading text-lg text-white mb-6">
              Here's what that looks like in practice:
            </h3>
            <RuixenBentoGrid cards={strategyCards} />
          </div>

          {/* Execution Phase */}
          <div className="mb-8">
            <h3 className="font-heading text-lg text-white mb-6">
              Then we help you act on it:
            </h3>
            <RuixenBentoGrid cards={executionCards} />
          </div>

          {/* Bottom Statement */}
          <div className="mt-8 text-center">
            <p className="font-body text-white/60 text-base">
              <span className="font-semibold text-white">Our role:</span> Strategic direction and execution support.
            </p>
            <p className="font-body text-white/60 text-base mt-1">
              <span className="font-semibold text-white">The outcome:</span> Marketing that's built on a plan designed to win.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
