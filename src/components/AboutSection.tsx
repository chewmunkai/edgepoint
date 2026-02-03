import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    "Marketing activities pile up without a clear objective",
    "Different agencies or staff give conflicting advice",
    "Money is spent across channels with no single owner of outcomes",
    "Results are reviewed, but direction never changes",
  ];

  return (
    <section id="about" className="section-light py-32">
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
              The Problem
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight max-w-4xl">
              Where Most SME Marketing{" "}
              <span className="text-gradient-blue">Goes Wrong</span>
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="font-body text-xl text-black/80 leading-relaxed">
                This is the pattern we see repeatedly:
              </p>
              
              {/* Problems List */}
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <AlertCircle className="w-5 h-5 text-agency-blue mt-0.5 flex-shrink-0" />
                    <p className="font-body text-black/70 leading-relaxed">
                      {problem}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:sticky lg:top-32"
            >
              <div className="bg-black rounded-2xl p-10 text-white">
                <p className="font-body text-xl text-white/80 leading-relaxed mb-6">
                  The issue isn't effort.
                </p>
                <p className="font-heading font-bold text-3xl md:text-4xl leading-tight">
                  It's the absence of clear{" "}
                  <span className="text-neon">marketing leadership.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
