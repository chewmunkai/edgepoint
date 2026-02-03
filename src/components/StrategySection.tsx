import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { StepCarousel, Step } from "@/components/ui/carousel";
import { HighlightText } from "@/components/ui/animated-reveal-text";

const StrategySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const frameworkSteps: Step[] = [
    {
      id: "step1",
      stepNumber: "01",
      title: "Confront Reality",
      subtitle: "Competitive SWOT",
      description: "We start with a blunt audit. We analyze your business against your top 3 competitors to see exactly where you stand.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "step2",
      stepNumber: "02",
      title: "Design the Customer Path",
      subtitle: "Full Funnel",
      description: "We map out the journey from stranger to customer. We design the Awareness, Interest, and Consideration stages.",
      imageSrc: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "step3",
      stepNumber: "03",
      title: "Engineer the 'Godfather' Offer",
      subtitle: "Offer Stack",
      description: "We help you build an offer stack the market can't ignore with 'Lead Attraction' and 'North Star' offers.",
      imageSrc: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: "step4",
      stepNumber: "04",
      title: "Execute & Optimize",
      subtitle: "Tactical Deployment",
      description: "Only after the strategy is set do we trigger the tactics—XHS KOC strategy, Google SEO, or Performance Ads.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="strategy" className="bg-background py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-black/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
            Our Process
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
            Our 4-Step Partnership{" "}
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
        >
          <StepCarousel steps={frameworkSteps} />
        </motion.div>
      </div>
    </section>
  );
};

export default StrategySection;
