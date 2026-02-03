import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HighlightText } from "@/components/ui/animated-reveal-text";
import { TextReveal } from "@/components/ui/text-reveal-animation";
import LinearCard from "@/components/ui/linear-card";

const StrategySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const frameworkSteps = [
    {
      id: 1,
      url: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" },
      title: "01 — Confront Reality",
      description: "We start with a blunt audit. We analyze your business against your top 3 competitors to see exactly where you stand. This competitive SWOT analysis reveals the truth about your market position.",
      tags: ["Audit", "SWOT", "Analysis"],
    },
    {
      id: 2,
      url: { src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&auto=format&fit=crop&q=80" },
      title: "02 — Design the Customer Path",
      description: "We map out the journey from stranger to customer. We design the Awareness, Interest, and Consideration stages to create a full-funnel strategy that converts.",
      tags: ["Funnel", "Journey", "Strategy"],
    },
    {
      id: 3,
      url: { src: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&auto=format&fit=crop&q=80" },
      title: "03 — Engineer the 'Godfather' Offer",
      description: "We help you build an offer stack the market can't ignore with 'Lead Attraction' and 'North Star' offers that position your business as the obvious choice.",
      tags: ["Offer", "Value", "Positioning"],
    },
    {
      id: 4,
      url: { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" },
      title: "04 — Execute & Optimize",
      description: "Only after the strategy is set do we trigger the tactics—XHS KOC strategy, Google SEO, or Performance Ads. Every tactic is tied to measurable results.",
      tags: ["Execution", "Ads", "SEO"],
    },
  ];

  return (
    <section id="strategy" className="py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
            Our Process
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
            <TextReveal word="Our 4-Step Partnership " className="inline" />
            <HighlightText
              text="Approach"
              as="span"
              textClassName="text-black"
              highlightClassName="rounded-sm"
              duration={1.2}
            />
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <LinearCard items={frameworkSteps} />
        </motion.div>
      </div>
    </section>
  );
};

export default StrategySection;
