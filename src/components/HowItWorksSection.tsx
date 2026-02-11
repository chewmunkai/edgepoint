import { MapPin, MessageSquare, BarChart3, Rocket, Handshake, Users, Network } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const HowItWorksSection = () => {
  const features = [
    {
      Icon: MapPin,
      name: "Map the Customer Journey",
      description: "We map your customer journey and identify where prospects drop off.",
      href: "/contact",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: MessageSquare,
      name: "Align Offer & Messaging",
      description: "We align your offer and messaging to actual market demand.",
      href: "/contact",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: BarChart3,
      name: "Prioritize Channels & Budget",
      description: "We prioritize which channels and tactics deserve budget—and which don't.",
      href: "/contact",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: Rocket,
      name: "Focused Execution Roadmap",
      description: "We create a focused execution roadmap with clear ownership.",
      href: "/contact",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Handshake,
      name: "Need Execution?",
      description: "We handle SEO, website development, and social media marketing in-house.",
      href: "/contact",
      cta: "Get started",
      background: <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: Users,
      name: "Have a Team Already?",
      description: "We guide them with strategic clarity and oversight.",
      href: "/contact",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
  ];

  return (
    <section className="py-12 md:py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
              How Edge Point Works
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
              The Strategic Framework{" "}
              <span className="bg-neon text-black px-2 py-0.5 rounded-sm">Most SMEs Are Missing.</span>
            </h2>
            <p className="font-body text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
              We start with strategy, then help you execute it—whether that's through our in-house team, your existing resources, or a combination of both.
            </p>
          </div>

          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>

          <div className="mt-8 rounded-xl border-2 border-white/20 bg-white/5 p-6 text-center">
            <p className="font-body text-white/80 text-base">
              <span className="font-semibold text-white">Our role:</span> Strategic direction and execution support.
            </p>
            <p className="font-body text-white/80 text-base mt-1">
              <span className="font-semibold text-white">The outcome:</span> Marketing that's built on a plan designed to win.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
