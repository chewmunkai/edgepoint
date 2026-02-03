import Header from "@/components/Header";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";
import AboutSection from "@/components/AboutSection";
import PositioningSection from "@/components/PositioningSection";
import StrategySection from "@/components/StrategySection";
import ServicesSection from "@/components/ServicesSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Interactive Accordion */}
        <InteractiveImageAccordion
          eyebrow="Marketing Leadership for SMEs"
          headline="Most SME marketing fails before any ad is even run."
          description="Not because of effort or budget — but because no one is deciding what marketing should actually do."
          ctaText="Start With Strategy"
          ctaHref="#contact"
        />
        
        <AboutSection />
        <PositioningSection />
        <StrategySection />
        <ServicesSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
