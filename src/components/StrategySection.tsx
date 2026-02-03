import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StrategySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      id: "01",
      title: "Diagnose",
      description: "Deep audit of market position, competitive landscape, and growth blockers.",
    },
    {
      id: "02",
      title: "Design",
      description: "Strategic framework built on data, not assumptions. Clear direction.",
    },
    {
      id: "03",
      title: "Deploy",
      description: "Precision execution across channels with measurable milestones.",
    },
    {
      id: "04",
      title: "Dominate",
      description: "Compound growth through systematic optimization and scaling.",
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
              Framework
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
              Strategy as a system.
            </h2>
            <p className="font-body text-black/60 text-xl mt-6 max-w-2xl mx-auto">
              Repeatable. Scalable. Built for compounding returns.
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

          {/* Abstract Pattern */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 flex justify-center"
          >
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-agency-blue" />
              <div className="w-20 h-px bg-agency-blue/30" />
              <div className="w-3 h-3 rounded-full border-2 border-agency-blue" />
              <div className="w-20 h-px bg-agency-blue/30" />
              <div className="w-3 h-3 rounded-full bg-agency-blue" />
              <div className="w-20 h-px bg-agency-blue/30" />
              <div className="w-3 h-3 rounded-full border-2 border-agency-blue" />
              <div className="w-20 h-px bg-agency-blue/30" />
              <div className="w-3 h-3 rounded-full bg-agency-blue" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
