import { LiquidButton } from "@/components/ui/liquid-glass-button";

const BuildProperlySection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-black leading-tight mb-4">
            Let's Build It{" "}
            <span className="bg-[#99FF33] text-black px-2 py-0.5 rounded-sm">
              Properly
            </span>
          </h2>
          <p className="font-body text-black/50 text-base mb-8 leading-relaxed">
            If you're serious about growth, let's start with clarity.
          </p>
          <a href="#contact">
            <LiquidButton
              variant="dark"
              size="lg"
              className="font-heading text-sm"
            >
              Book a Strategic Audit
            </LiquidButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BuildProperlySection;
