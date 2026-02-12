import { ArrowRight } from "lucide-react";
import { LiquidCard } from "@/components/ui/liquid-glass-card";

const services = [
  {
    number: "01",
    title: "Brand & Foundation",
    lead: "Before scaling traffic, we build clarity.",
    description:
      "Brand foundation isn't about logos and colors—it's strategic infrastructure that makes everything else work.",
    items: [
      "Branding Kit Development",
      "Brand Positioning & Messaging",
      "Offer Structuring",
      "Website Development",
      "Conversion-Focused Landing Pages",
    ],
  },
  {
    number: "02",
    title: "Visibility & Organic Growth",
    lead: "Once foundations are set, we build sustainable attention.",
    description:
      "Organic channels compound over time. We build discoverability where your ideal customers are already searching.",
    items: [
      "SEO Strategy & Execution",
      "Content Strategy",
      "Social Media Marketing",
      "Organic Funnel Structuring",
    ],
  },
  {
    number: "03",
    title: "Performance & Scale",
    lead: "When the system is ready, we accelerate.",
    description:
      "Performance marketing works when you have clear positioning, a converting funnel, and proven offers. We scale what's already working.",
    items: [
      "Performance Marketing",
      "Paid Media Strategy",
      "Funnel Optimization",
      "Campaign Tracking & Reporting",
    ],
  },
  {
    number: "04",
    title: "Events & Activation",
    lead: "Marketing doesn't only live online.",
    description:
      "Events are powerful growth channels when integrated with your broader strategy. We turn offline moments into measurable online outcomes.",
    items: [
      "Event Planning & Execution",
      "Brand Activation Campaigns",
      "Offline-Online Funnel Integration",
    ],
  },
];

const CoreServicesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-black/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
            How We Structure Our Work
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-black leading-tight mb-4">
            Strategy drives everything.
          </h2>
          <p className="font-body text-black/50 text-base leading-relaxed max-w-2xl">
            We define your positioning, customer journey, and growth priorities
            first — then execute across channels that actually move the needle.
          </p>
        </div>

        {/* Section label */}
        <p className="text-[#007BFF] font-heading font-semibold tracking-widest uppercase text-xs mb-6">
          Our Core Services
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <LiquidCard
              key={service.number}
              className="group p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/30 backdrop-blur-md"
            >
              {/* Number badge */}
              <span className="font-heading text-xs font-bold text-[#007BFF]/60 mb-4">
                {service.number}
              </span>

              <h3 className="font-heading font-bold text-lg text-black mb-2">
                {service.title}
              </h3>
              <p className="font-body text-black/70 text-sm font-medium mb-2">
                {service.lead}
              </p>
              <p className="font-body text-black/45 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Included items */}
              <div className="mt-auto">
                <p className="font-heading text-[10px] font-semibold tracking-widest uppercase text-black/30 mb-2">
                  What's included
                </p>
                <ul className="space-y-1.5 mb-5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="font-body text-sm text-black/60 flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#99FF33] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="/services"
                  className="inline-flex items-center gap-1.5 font-heading text-xs font-semibold text-[#007BFF] hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </LiquidCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
