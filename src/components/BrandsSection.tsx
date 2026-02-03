import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HighlightText } from "@/components/ui/animated-reveal-text";

const BrandsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const brands = [
    "VERTEX",
    "ONWARD",
    "NUCLEUS",
    "STRATUM",
    "AXIOM",
    "PRISM",
  ];

  return (
    <section className="py-10 md:py-14 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-2">
              Brands & Partners
            </p>
            <h2 className="font-heading font-bold text-xl md:text-2xl text-white">
              Trusted by Growing{" "}
              <HighlightText
                text="Businesses"
                as="span"
                textClassName="text-black"
                highlightClassName="rounded-sm"
                duration={1.2}
              />
            </h2>
          </motion.div>

          {/* Brands Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4"
          >
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="flex items-center justify-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                <span className="font-heading font-bold text-sm md:text-base text-white/30 tracking-wider">
                  {brand}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
