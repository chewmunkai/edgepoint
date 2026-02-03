import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Target, 
  TrendingUp, 
  Globe, 
  Code, 
  Layers, 
  Zap 
} from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Target,
      title: "Strategic Positioning",
      description: "Market analysis, competitive mapping, and brand positioning that cuts through noise.",
      size: "large",
    },
    {
      icon: TrendingUp,
      title: "Paid Growth",
      description: "Performance marketing with precision targeting and measurable ROI.",
      size: "small",
    },
    {
      icon: Globe,
      title: "SEO & Organic",
      description: "Technical SEO, content strategy, and sustainable organic growth.",
      size: "small",
    },
    {
      icon: Code,
      title: "Web Infrastructure",
      description: "High-performance websites and digital platforms built to convert.",
      size: "medium",
    },
    {
      icon: Layers,
      title: "Brand Systems",
      description: "Visual identity, messaging frameworks, and brand guidelines.",
      size: "medium",
    },
    {
      icon: Zap,
      title: "Growth Operations",
      description: "Analytics, automation, and systems that scale with your business.",
      size: "small",
    },
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
              Capabilities
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight max-w-3xl">
              Execution that compounds.
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isLarge = service.size === "large";
              const isMedium = service.size === "medium";

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className={`bento-card ${isLarge ? "lg:col-span-2 lg:row-span-2" : ""} ${
                    isMedium ? "lg:row-span-1" : ""
                  }`}
                >
                  <div className="h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-agency-blue/10 flex items-center justify-center mb-6 group-hover:bg-agency-blue/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-agency-blue" />
                    </div>

                    {/* Title */}
                    <h3 className={`font-heading font-bold text-black mb-4 ${
                      isLarge ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                    }`}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className={`font-body text-black/60 leading-relaxed flex-1 ${
                      isLarge ? "text-lg" : ""
                    }`}>
                      {service.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className="mt-6 flex items-center text-agency-blue font-heading font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Learn more
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
