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
        <div className="flex flex-col md:flex-row gap-8 p-8">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
            className="w-full md:w-1/2 aspect-video object-cover rounded-xl"
            alt="Competitive Analysis"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-agency-blue/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-agency-blue" />
              </div>
              <span className="font-heading font-bold text-agency-blue text-sm">Competitive SWOT</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-black mb-4">
              Confront Reality
            </h3>
            <p className="font-body text-black/70 leading-relaxed">
              We start with a blunt audit. We analyze your business against your top 3 competitors to see exactly where you stand. If your product or price isn't competitive, we fix the offer before we spend a cent on ads.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "step2",
      label: "02. Design the Path",
      content: (
        <div className="flex flex-col md:flex-row gap-8 p-8">
          <img
            src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&auto=format&fit=crop&q=80"
            className="w-full md:w-1/2 aspect-video object-cover rounded-xl"
            alt="Customer Journey"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-agency-blue/10 flex items-center justify-center">
                <Map className="w-6 h-6 text-agency-blue" />
              </div>
              <span className="font-heading font-bold text-agency-blue text-sm">Full Funnel</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-black mb-4">
              Design the Customer Path
            </h3>
            <p className="font-body text-black/70 leading-relaxed">
              We map out the journey from stranger to customer. We don't "hope" people buy; we design the Awareness, Interest, and Consideration stages so the conversion becomes the logical next step.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "step3",
      label: "03. Engineer the Offer",
      content: (
        <div className="flex flex-col md:flex-row gap-8 p-8">
          <img
            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&auto=format&fit=crop&q=80"
            className="w-full md:w-1/2 aspect-video object-cover rounded-xl"
            alt="Offer Engineering"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-agency-blue/10 flex items-center justify-center">
                <Gift className="w-6 h-6 text-agency-blue" />
              </div>
              <span className="font-heading font-bold text-agency-blue text-sm">Offer Stack</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-black mb-4">
              Engineer the "Godfather" Offer
            </h3>
            <p className="font-body text-black/70 leading-relaxed">
              We help you build an offer stack the market can't ignore. We develop a low-barrier "Lead Attraction" offer to get people in the door and your "North Star" offer to drive core revenue.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "step4",
      label: "04. Execute & Optimize",
      content: (
        <div className="flex flex-col md:flex-row gap-8 p-8">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
            className="w-full md:w-1/2 aspect-video object-cover rounded-xl"
            alt="Execution"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-agency-blue/10 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-agency-blue" />
              </div>
              <span className="font-heading font-bold text-agency-blue text-sm">Tactical Deployment</span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-black mb-4">
              Execute & Optimize
            </h3>
            <p className="font-body text-black/70 leading-relaxed">
              Only after the strategy is set do we trigger the tactics—whether that's XHS KOC strategy, Google SEO, or Performance Ads. We stay alongside you to adjust the plan based on real-world sales data.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="strategy" className="section-light py-32 overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-agency-blue font-body font-medium tracking-widest uppercase text-sm mb-4">
              Our Framework
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight">
              Our 4-Step Partnership{" "}
              <span className="text-gradient-blue">Approach</span>
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
