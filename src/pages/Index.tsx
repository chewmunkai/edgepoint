import Header from "@/components/Header";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";
import { MarketRealityBentoGrid } from "@/components/ui/cybernetic-bento-grid";
import AboutSection from "@/components/AboutSection";
import StrategySection from "@/components/StrategySection";
import BrandsSection from "@/components/BrandsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Interactive Accordion */}
        <InteractiveImageAccordion
          eyebrow="Growth Partnership for Ambitious Businesses"
          headline="Build a Marketing System That Actually Scales Your Business."
          description="You've done the hard work of building a great product. Now, let's build the marketing engine it deserves. We work alongside you as dedicated partners, turning complex decisions into clear, revenue-driven growth."
          ctaText="Start Our Growth Journey"
          ctaHref="#contact"
          secondaryCtaText="See the Framework"
          secondaryCtaHref="#strategy"
        />
        
        <MarketRealityBentoGrid 
          eyebrow="Market Reality"
          headline="Scaling Today is a Challenge,"
          highlightedText="Not a Given."
        />
        <AboutSection />
        <StrategySection />
        <BrandsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
