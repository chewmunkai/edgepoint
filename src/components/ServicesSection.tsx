import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatWeDo = [
    "Set direction and priorities",
    "Define what success actually looks like",
    "Coordinate execution across in-house teams or vendors",
    "Adjust decisions based on real performance",
  ];

  const worksIf = [
    "Want clarity before scaling spend",
    "Care about sales, not vanity metrics",
    "Are open to uncomfortable but necessary decisions",
  ];

  const wontWork = [
    "Just want content posted",
    "Are looking for the cheapest option",
    "Expect marketing to fix weak business fundamentals",
  ];

  return (
    <section id="services" className="section-light py-32 bg-gray-50">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-agency-blue font-body font-medium tracking-widest uppercase text-sm mb-4">
              How This Works
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight max-w-4xl">
              Strategy, Execution{" "}
              <span className="text-gradient-blue">& Fit</span>
            </h2>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-12"
          >
            <p className="font-body text-xl text-black/80 leading-relaxed max-w-3xl">
              Most agencies force a false choice:{" "}
              <span className="text-black font-semibold">Strategy decks with no follow-through</span>{" "}
              or{" "}
              <span className="text-black font-semibold">execution with no direction</span>.
            </p>
            <p className="font-heading font-bold text-2xl text-agency-blue mt-4">
              Edge Point connects both.
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 mb-8"
          >
            <h3 className="font-heading font-bold text-xl text-black mb-6">
              We:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {whatWeDo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-agency-blue" />
                  </div>
                  <p className="font-body text-black/70">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fit Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Works If */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              <h3 className="font-heading font-bold text-lg text-black mb-6">
                This works if you:
              </h3>
              <div className="space-y-4">
                {worksIf.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-neon/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-neon" />
                    </div>
                    <p className="font-body text-black/70">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Won't Work */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-100 rounded-2xl p-8"
            >
              <h3 className="font-heading font-bold text-lg text-black/50 mb-6">
                This won't work if you:
              </h3>
              <div className="space-y-4">
                {wontWork.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-black/40" />
                    </div>
                    <p className="font-body text-black/50">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Filtering Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center font-body text-black/40 text-sm mt-8 italic"
          >
            Filtering is intentional.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
