import { AnimatedFeatureSpotlight } from "@/components/ui/feature-spotlight";
import buildVisual from "@/assets/build-properly-visual.jpg";

const BuildProperlySection = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <AnimatedFeatureSpotlight
        preheaderText="Ready to Grow?"
        heading={
          <>
            Let's Build It{" "}
            <span className="bg-neon text-black px-2 py-0.5 rounded-sm">
              Properly
            </span>
          </>
        }
        description="If you're serious about growth, let's start with clarity. We'll diagnose what's working, what's not, and build a plan designed to win."
        buttonText="Book a Strategic Audit"
        buttonProps={{
          className: "bg-neon text-black hover:bg-neon/90 font-heading text-sm",
          onClick: () => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          },
        }}
        imageUrl={buildVisual}
        imageAlt="Strategic growth visualization"
      />
    </section>
  );
};

export default BuildProperlySection;
