import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";

const PositioningSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const weAreNot = [
    "Another agency",
    "Another content vendor",
    "Another ad buyer",
  ];

  const weAre = [
    "The team that decides what should be done",
    "In what order",
    "With what expectation",
    "And how all execution connects back to revenue",
  ];

  return (
    <section id="positioning" className="section-light py-32 bg-gray-50">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-agency-blue font-body font-medium tracking-widest uppercase text-sm mb-4">
              Our Role
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight max-w-4xl mx-auto">
              Edge Point is the marketing brain SMEs don't have —{" "}
              <span className="text-gradient-blue">and the execution controller they need.</span>
            </h2>
          </motion.div>

          {/* Two Column Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* We Are Not */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              <h3 className="font-heading font-bold text-xl text-black/50 mb-6 uppercase tracking-wide">
                We are not
              </h3>
              <div className="space-y-4">
                {weAreNot.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-black/30" />
                    </div>
                    <p className="font-body text-lg text-black/50 line-through">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* We Are */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-black rounded-2xl p-8"
            >
              <h3 className="font-heading font-bold text-xl text-neon mb-6 uppercase tracking-wide">
                We are
              </h3>
              <div className="space-y-4">
                {weAre.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-neon/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-neon" />
                    </div>
                    <p className="font-body text-lg text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <p className="font-body text-xl text-black/60 max-w-3xl mx-auto leading-relaxed">
              Most marketing fails before execution even starts —{" "}
              <span className="text-black font-semibold">at the decision level.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
