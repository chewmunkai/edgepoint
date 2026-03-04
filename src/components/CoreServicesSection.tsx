import { ArrowRight } from "lucide-react";
import serviceBrand from "@/assets/service-brand.jpg";
import serviceVisibility from "@/assets/service-visibility.jpg";
import servicePerformance from "@/assets/service-performance.jpg";
import serviceEvents from "@/assets/service-events.jpg";

interface Step {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  items?: string[];
}

const steps: Step[] = [
  {
    id: "brand",
    stepNumber: "01",
    title: "Brand & Foundation",
    subtitle: "Before scaling traffic, we build clarity",
    description:
      "Brand foundation isn't about logos and colors—it's strategic infrastructure that makes everything else work.",
    imageSrc: serviceBrand,
    items: [
      "Branding Kit Development",
      "Brand Positioning & Messaging",
      "Offer Structuring",
      "Website Development",
      "Conversion-Focused Landing Pages",
    ],
  },
  {
    id: "visibility",
    stepNumber: "02",
    title: "Visibility & Organic Growth",
    subtitle: "We build sustainable attention",
    description:
      "Organic channels compound over time. We build discoverability where your ideal customers are already searching.",
    imageSrc: serviceVisibility,
    items: [
      "SEO Strategy & Execution",
      "Content Strategy",
      "Social Media Marketing",
      "Organic Funnel Structuring",
    ],
  },
  {
    id: "performance",
    stepNumber: "03",
    title: "Performance & Scale",
    subtitle: "When the system is ready, we accelerate",
    description:
      "Performance marketing works when you have clear positioning, a converting funnel, and proven offers.",
    imageSrc: servicePerformance,
    items: [
      "Performance Marketing",
      "Paid Media Strategy",
      "Funnel Optimization",
      "Campaign Tracking & Reporting",
    ],
  },
  {
    id: "events",
    stepNumber: "04",
    title: "Events & Activation",
    subtitle: "Marketing doesn't only live online",
    description:
      "Events are powerful growth channels when integrated with your broader strategy.",
    imageSrc: serviceEvents,
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
        <div className="text-center sm:text-left mb-8 md:mb-10">
          <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-2">
            Our Framework
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
            How We Structure Our Work
          </h2>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((step) => (
            <div key={step.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-3">
                <img
                  src={step.imageSrc}
                  alt={step.title}
                  width={307}
                  height={384}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
                  {/* Top: Title & Description */}
                  <div>
                    <p className="font-heading font-bold text-base lg:text-lg text-white">
                      {step.title}
                    </p>
                    <p className="text-white/60 text-xs lg:text-sm mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {/* Bottom: Bullet items */}
                  {step.items && step.items.length > 0 && (
                    <div>
                      <p className="font-body text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-1.5">
                        What's included
                      </p>
                      <ul className="space-y-1">
                        {step.items.map((item) => (
                          <li
                            key={item}
                            className="font-body text-xs font-medium text-white/80 flex items-start gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-neon mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <a
                    href="/services"
                    className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-agency-blue hover:gap-3 transition-all duration-300 mt-3"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full font-body">
                  {step.stepNumber}
                </span>
                <p className="font-body font-semibold text-foreground text-sm">
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
