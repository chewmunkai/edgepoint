import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { GlassButtonLink } from "@/components/ui/glass-button";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              About Edge Point
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight max-w-4xl">
              A Different Kind of{" "}
              <span className="text-gradient-blue">Partnership</span>
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="font-body text-xl text-black/80 leading-relaxed">
                We didn't start Edge Point to be just another agency on your monthly expense list. We started it because we saw too many business owners losing money on marketing that had no clear direction or ownership.
              </p>
              
              <p className="font-body text-xl text-black/80 leading-relaxed">
                Think of us as your <span className="text-black font-semibold">marketing partners in the trenches</span>. We don't hide behind technical jargon or vanity metrics like "impressions" and "clicks."
              </p>

              {/* CTA */}
              <div className="pt-4">
                <GlassButtonLink
                  href="#strategy"
                  size="default"
                  className="glass-button-light"
                >
                  See Our Framework
                  <ArrowRight className="w-4 h-4" />
                </GlassButtonLink>
              </div>
            </motion.div>

            {/* Right Column - Key Message */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:sticky lg:top-32"
            >
              <div className="bg-black rounded-2xl p-10 text-white">
                <p className="font-body text-xl text-white/80 leading-relaxed mb-6">
                  We focus on one thing:
                </p>
                <p className="font-heading font-bold text-3xl md:text-4xl leading-tight mb-6">
                  <span className="text-neon">Topline Revenue.</span>
                </p>
                <p className="font-body text-white/60 leading-relaxed">
                  We treat your marketing budget as if it were our own—meaning we only move forward when the logic is sound and the path to ROI is clear. We grow when you grow.
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
