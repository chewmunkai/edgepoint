import LinearCard from "@/components/ui/linear-card";

const StrategySection = () => {
  const frameworkSteps = [
    {
      id: 1,
      url: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80" },
      title: "01 — Diagnose Reality",
      description: "We audit your market position, customer funnel, and current marketing efforts. No sugarcoating—we identify what's working, what's broken, and what's missing.",
      tags: ["Audit", "Analysis", "Clarity"],
    },
    {
      id: 2,
      url: { src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&auto=format&fit=crop&q=80" },
      title: "02 — Design the Path to Revenue",
      description: "We map how customers move from first awareness to conversion, then design a marketing system that supports each stage.",
      tags: ["Journey", "Funnel", "System"],
    },
    {
      id: 3,
      url: { src: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&auto=format&fit=crop&q=80" },
      title: "03 — Build the Execution Roadmap",
      description: "We prioritize initiatives by impact and feasibility, then create a 90-day action plan with clear ownership and success metrics.",
      tags: ["Roadmap", "90-Day Plan", "Priorities"],
    },
    {
      id: 4,
      url: { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80" },
      title: "04 — Execute or Guide Execution",
      description: "Depending on your needs, we either execute the plan through our in-house services (SEO, web development, social media) or guide your team to execute with strategic oversight and monthly reviews.",
      tags: ["Execution", "SEO", "Oversight"],
    },
  ];

  return (
    <section id="strategy" className="py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">Our Process</p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
            The 4-Step Fix for{" "}
            <span className="bg-neon text-black px-2 py-0.5 rounded-sm">Scattered Marketing</span>
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <LinearCard items={frameworkSteps} />
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
