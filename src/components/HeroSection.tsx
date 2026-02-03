import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-dark overflow-hidden flex items-center">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg animate-grid opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-neon font-body font-medium tracking-widest uppercase text-sm mb-8"
          >
            Strategy × Execution
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-bold text-white leading-[1.1] mb-8"
          >
            <span className="block text-4xl md:text-6xl lg:text-7xl">
              We don't just build brands.
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl mt-2">
              We engineer{" "}
              <span className="text-gradient-neon">market dominance.</span>
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Strategic clarity meets execution precision. For businesses ready to 
            stop guessing and start growing with intent.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="cta-primary inline-flex items-center gap-3 group"
            >
              Book Your Audit
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 pt-12 border-t border-white/10"
          >
            <p className="text-white/40 font-body text-sm mb-6 tracking-wide">
              Trusted by growth-focused brands
            </p>
            <div className="flex items-center justify-center gap-12 flex-wrap">
              {["VERTEX", "ONWARD", "NUCLEUS", "STRATUM", "AXIOM"].map((brand, index) => (
                <motion.span
                  key={brand}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="font-heading font-semibold text-white/50 text-sm tracking-widest hover:text-white/80 transition-colors cursor-default"
                >
                  {brand}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-neon rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
