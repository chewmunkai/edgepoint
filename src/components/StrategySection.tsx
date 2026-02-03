import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Map, Gift, Rocket } from "lucide-react";
import { AnimatedTabs } from "@/components/ui/animated-tabs";

const StrategySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const frameworkTabs = [
    {
      id: "step1",
      label: "01. Confront Reality",
      content: (
        <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
            className="w-full md:w-1/2 aspect-video object-cover rounded-lg"
            alt="Competitive Analysis"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-black/60 text-xs uppercase tracking-wider">Competitive SWOT</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-black mb-2">
              Confront Reality
            </h3>
            <p className="font-body text-sm text-black/60 leading-relaxed">
              We start with a blunt audit. We analyze your business against your top 3 competitors to see exactly where you stand.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "step2",
      label: "02. Design the Path",
      content: (
        <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6">
          <img
            src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&auto=format&fit=crop&q=80"
            className="w-full md:w-1/2 aspect-video object-cover rounded-lg"
            alt="Customer Journey"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                <Map className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-black/60 text-xs uppercase tracking-wider">Full Funnel</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-black mb-2">
              Design the Customer Path
            </h3>
            <p className="font-body text-sm text-black/60 leading-relaxed">
              We map out the journey from stranger to customer. We design the Awareness, Interest, and Consideration stages.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "step3",
      label: "03. Engineer the Offer",
      content: (
        <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6">
          <img
            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&auto=format&fit=crop&q=80"
            className="w-full md:w-1/2 aspect-video object-cover rounded-lg"
            alt="Offer Engineering"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-black/60 text-xs uppercase tracking-wider">Offer Stack</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-black mb-2">
              Engineer the "Godfather" Offer
            </h3>
            <p className="font-body text-sm text-black/60 leading-relaxed">
              We help you build an offer stack the market can't ignore with "Lead Attraction" and "North Star" offers.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "step4",
      label: "04. Execute & Optimize",
      content: (
        <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
            className="w-full md:w-1/2 aspect-video object-cover rounded-lg"
            alt="Execution"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-black/60 text-xs uppercase tracking-wider">Tactical Deployment</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-black mb-2">
              Execute & Optimize
            </h3>
            <p className="font-body text-sm text-black/60 leading-relaxed">
              Only after the strategy is set do we trigger the tactics—XHS KOC strategy, Google SEO, or Performance Ads.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="strategy" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <p className="text-black/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
              Our Framework
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
              Our 4-Step Partnership Approach
            </h2>
          </motion.div>

          {/* Animated Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedTabs tabs={frameworkTabs} defaultTab="step1" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
