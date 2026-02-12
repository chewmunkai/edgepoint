import { Feature197 } from "@/components/ui/accordion-feature-section";
import serviceBrand from "@/assets/service-brand.jpg";
import serviceVisibility from "@/assets/service-visibility.jpg";
import servicePerformance from "@/assets/service-performance.jpg";
import serviceEvents from "@/assets/service-events.jpg";

const features = [
  {
    id: 1,
    title: "Brand & Foundation",
    image: serviceBrand,
    description:
      "Before scaling traffic, we build clarity. Brand foundation isn't about logos and colors—it's strategic infrastructure that makes everything else work. Includes branding kit development, brand positioning & messaging, offer structuring, website development, and conversion-focused landing pages.",
  },
  {
    id: 2,
    title: "Visibility & Organic Growth",
    image: serviceVisibility,
    description:
      "Once foundations are set, we build sustainable attention. Organic channels compound over time. We build discoverability where your ideal customers are already searching. Includes SEO strategy & execution, content strategy, social media marketing, and organic funnel structuring.",
  },
  {
    id: 3,
    title: "Performance & Scale",
    image: servicePerformance,
    description:
      "When the system is ready, we accelerate. Performance marketing works when you have clear positioning, a converting funnel, and proven offers. We scale what's already working. Includes performance marketing, paid media strategy, funnel optimization, and campaign tracking & reporting.",
  },
  {
    id: 4,
    title: "Events & Activation",
    image: serviceEvents,
    description:
      "Marketing doesn't only live online. Events are powerful growth channels when integrated with your broader strategy. We turn offline moments into measurable online outcomes. Includes event planning & execution, brand activation campaigns, and offline-online funnel integration.",
  },
];

const CoreServicesSection = () => {
  return (
    <div>
      {/* Header */}
      <section className="pt-16 md:pt-24 pb-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
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
          <p className="text-[#007BFF] font-heading font-semibold tracking-widest uppercase text-xs mt-10">
            Our Core Services
          </p>
        </div>
      </section>

      <Feature197 features={features} />
    </div>
  );
};

export default CoreServicesSection;
