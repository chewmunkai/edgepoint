import { StepCarousel, type Step } from "@/components/ui/carousel";
import serviceBrand from "@/assets/service-brand.jpg";
import serviceVisibility from "@/assets/service-visibility.jpg";
import servicePerformance from "@/assets/service-performance.jpg";
import serviceEvents from "@/assets/service-events.jpg";

const steps: Step[] = [
  {
    id: "brand",
    stepNumber: "01",
    title: "Brand & Foundation",
    subtitle: "Before scaling traffic, we build clarity",
    description:
      "Brand foundation isn't about logos and colors—it's strategic infrastructure that makes everything else work.",
    imageSrc: serviceBrand,
  },
  {
    id: "visibility",
    stepNumber: "02",
    title: "Visibility & Organic Growth",
    subtitle: "We build sustainable attention",
    description:
      "Organic channels compound over time. We build discoverability where your ideal customers are already searching.",
    imageSrc: serviceVisibility,
  },
  {
    id: "performance",
    stepNumber: "03",
    title: "Performance & Scale",
    subtitle: "When the system is ready, we accelerate",
    description:
      "Performance marketing works when you have clear positioning, a converting funnel, and proven offers.",
    imageSrc: servicePerformance,
  },
  {
    id: "events",
    stepNumber: "04",
    title: "Events & Activation",
    subtitle: "Marketing doesn't only live online",
    description:
      "Events are powerful growth channels when integrated with your broader strategy.",
    imageSrc: serviceEvents,
  },
];

const CoreServicesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <StepCarousel
          steps={steps}
          title="How We Structure Our Work"
        />
      </div>
    </section>
  );
};

export default CoreServicesSection;
