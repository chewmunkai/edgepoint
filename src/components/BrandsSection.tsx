import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    <section className="bg-white py-24 border-t border-black/5">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-black/50 font-body font-medium tracking-widest uppercase text-sm mb-4">
              Brands & Partners
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-black">
              Trusted by Growing Businesses
            </h2>
          </motion.div>

          {/* Brands Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center justify-center p-6 bg-white rounded-xl border border-black/10 hover:border-black/20 transition-colors duration-300"
              >
                <span className="font-heading font-bold text-lg text-black/30 tracking-wider">
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
