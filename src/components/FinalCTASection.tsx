import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { GlassButtonLink } from "@/components/ui/glass-button";

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative bg-dark py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg animate-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neon/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-neon font-body font-medium tracking-widest uppercase text-sm mb-8"
          >
            Start With Strategy
          </motion.p>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8"
          >
            Marketing shouldn't rely on{" "}
            <span className="text-gradient-neon">opinions, trends, or hope.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-white/60 text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            It needs ownership and direction.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <GlassButtonLink
              href="#"
              size="lg"
              className="glass-button-primary"
            >
              Book a Strategy Session
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </GlassButtonLink>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 flex justify-center items-center gap-6"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-neon/50" />
            <div className="w-3 h-3 rounded-full bg-neon" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-neon/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
