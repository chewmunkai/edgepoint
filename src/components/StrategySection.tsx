import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Map, Gift, Rocket } from "lucide-react";

const StrategySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      id: "01",
      icon: Eye,
      title: "Confront Reality",
      subtitle: "Competitive SWOT",
      description: "We start with a blunt audit. We analyze your business against your top 3 competitors to see exactly where you stand. If your product or price isn't competitive, we fix the offer before we spend a cent on ads.",
    },
    {
      id: "02",
      icon: Map,
      title: "Design the Customer Path",
      subtitle: "Full Funnel",
      description: "We map out the journey from stranger to customer. We don't \"hope\" people buy; we design the Awareness, Interest, and Consideration stages so the conversion becomes the logical next step.",
    },
    {
      id: "03",
      icon: Gift,
      title: "Engineer the \"Godfather\" Offer",
      subtitle: "Offer Stack",
      description: "We help you build an offer stack the market can't ignore. We develop a low-barrier \"Lead Attraction\" offer to get people in the door and your \"North Star\" offer to drive core revenue.",
    },
    {
      id: "04",
      icon: Rocket,
      title: "Execute & Optimize",
      subtitle: "Tactical Deployment",
      description: "Only after the strategy is set do we trigger the tactics—whether that's XHS KOC strategy, Google SEO, or Performance Ads. We stay alongside you to adjust the plan based on real-world sales data.",
    },
  ];

  return (
    <section id="strategy" className="section-light py-32 overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-agency-blue font-body font-medium tracking-widest uppercase text-sm mb-4">
              Our Framework
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
              Our 4-Step Partnership{" "}
              <span className="text-gradient-blue">Approach</span>
            </h2>
          </motion.div>

          {/* Framework Visualization */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-agency-blue/20 to-transparent hidden lg:block" />

            {/* Steps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                    className="relative group"
                  >
                    {/* Card */}
                    <div className="bg-white border border-black/5 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-agency-blue/10 hover:border-agency-blue/20">
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-heading font-bold text-agency-blue text-sm">
                          Step {step.id}
                        </span>
                        <div className="w-10 h-10 rounded-lg bg-agency-blue/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-agency-blue" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-xl text-black mb-2">
                        {step.title}
                      </h3>
                      
                      {/* Subtitle */}
                      <p className="font-body text-agency-blue text-sm font-medium mb-4">
                        {step.subtitle}
                      </p>

                      {/* Description */}
                      <p className="font-body text-black/60 leading-relaxed text-sm">
                        {step.description}
                      </p>

                      {/* Hover Indicator */}
                      <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-agency-blue/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 rounded-full bg-agency-blue" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
