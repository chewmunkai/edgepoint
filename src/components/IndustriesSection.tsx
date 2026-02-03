import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    {
      name: "SMEs & Startups",
      description: "Scaling businesses ready for systematic growth",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
    {
      name: "F&B & Hospitality",
      description: "Restaurants, hotels, and experience-driven brands",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    },
    {
      name: "Professional Services",
      description: "Law firms, consultancies, and B2B service providers",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    },
    {
      name: "E-Commerce",
      description: "Direct-to-consumer and retail digital brands",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="industries" className="section-light py-32">
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
              Verticals
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
              Deep understanding.{" "}
              <span className="text-gradient-blue">Not limitation.</span>
            </h2>
            <p className="font-body text-black/60 text-xl mt-6 max-w-2xl mx-auto">
              Specialized experience that translates to faster results and smarter strategy.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
                    {industry.name}
                  </h3>
                  <p className="font-body text-white/70">
                    {industry.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-4 flex items-center text-white font-heading font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    View Case Studies
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
