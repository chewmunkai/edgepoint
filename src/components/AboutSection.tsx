import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "94%", label: "Client Retention" },
    { value: "3.2x", label: "Avg. ROI Increase" },
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
            className="mb-20"
          >
            <p className="text-agency-blue font-body font-medium tracking-widest uppercase text-sm mb-4">
              About
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight max-w-4xl">
              We remove the noise.{" "}
              <span className="text-gradient-blue">You get clarity.</span>
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="font-body text-xl text-black/80 leading-relaxed">
                Most agencies sell you tactics. We deliver systems that compound.
              </p>
              <p className="font-body text-lg text-black/60 leading-relaxed">
                Our approach strips away complexity to reveal what actually drives 
                growth: strategic positioning, precise execution, and measurable outcomes. 
                No fluff. No vanity metrics. Just direction.
              </p>
              <div className="pt-4">
                <a
                  href="#strategy"
                  className="inline-flex items-center gap-2 text-agency-blue font-heading font-semibold hover:gap-4 transition-all duration-300"
                >
                  Explore Our Framework
                  <span className="text-xl">→</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid gap-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-baseline gap-6 pb-8 border-b border-black/10 last:border-0"
                >
                  <span className="font-heading font-bold text-5xl md:text-6xl text-black">
                    {stat.value}
                  </span>
                  <span className="font-body text-black/60 text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
