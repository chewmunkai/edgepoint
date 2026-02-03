import { ShaderHero } from "@/components/ui/shaders-hero-section";

const HeroSection = () => {
  const logos = ["VERTEX", "ONWARD", "NUCLEUS", "STRATUM", "AXIOM"];

  return (
    <ShaderHero
      eyebrow="Marketing Leadership for SMEs"
      headline={
        <>
          <span className="block text-4xl md:text-6xl lg:text-7xl">
            Most SME marketing fails
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl mt-2">
            before any ad is{" "}
            <span className="text-gradient-neon">even run.</span>
          </span>
        </>
      }
      subheadline="Not because of effort or budget — but because no one is deciding what marketing should actually do."
      primaryCta={{
        text: "Start With Strategy",
        href: "#contact",
      }}
      secondaryCta={{
        text: "See How We Think",
        href: "#positioning",
      }}
      showPulsingCircle={true}
      logos={logos}
    />
  );
};

export default HeroSection;
