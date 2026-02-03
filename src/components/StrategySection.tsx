import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StrategySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      id: "01",
      title: "Confront Reality",
      description: "We assess competitors, customer behaviour, internal limitations, and offer strength to understand the real commercial battlefield.",
    },
    {
      id: "02",
      title: "Design the Full Funnel",
      description: "We map how strangers become customers, clearly defining the role of awareness, trust, consideration, and conversion.",
    },
    {
      id: "03",
      title: "Engineer the Offer Structure",
      description: "We design entry offers, core revenue offers, and urgency mechanics that make sense for your market and margins.",
    },
    {
      id: "04",
      title: "Deploy Only Relevant Execution",
      description: "We select channels and tactics based on funnel needs, budget constraints, and execution capability — not trends.",
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
              Our Process
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
              How We Bring Control to{" "}
              <span className="text-gradient-blue">Marketing Decisions</span>
            </h2>
            <p className="font-body text-black/60 text-xl mt-6 max-w-3xl mx-auto">
              We follow a fixed decision sequence so marketing is deliberate, not reactive.
            </p>
          </motion.div>

          {/* Framework Visualization */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-agency-blue/20 to-transparent hidden lg:block" />

            {/* Pillars Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="bg-white border border-black/5 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-agency-blue/10 hover:border-agency-blue/20">
                    {/* Number */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-heading font-bold text-agency-blue text-sm">
                        {pillar.id}
                      </span>
                      <div className="h-px flex-1 bg-black/10" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-2xl text-black mb-4">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-black/60 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Hover Indicator */}
                    <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-agency-blue/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 rounded-full bg-agency-blue" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Warning Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="font-body text-lg text-black/80 bg-agency-blue/5 inline-block px-8 py-4 rounded-full">
              <span className="font-semibold text-agency-blue">Skipping any step</span>{" "}
              leads to wasted spend.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
