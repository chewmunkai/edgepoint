import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarketRealitySection from "@/components/MarketRealitySection";
import DeliberateStrategySection from "@/components/DeliberateStrategySection";
import AboutSection from "@/components/AboutSection";
import StrategySection from "@/components/StrategySection";
import BrandsSection from "@/components/BrandsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import { FlowGradientBackground } from "@/components/ui/flow-gradient-hero-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with Gradient Animation */}
        <HeroSection />
        
        {/* Market Reality - Stacking Cards (keeps dark bg) */}
        <MarketRealitySection />
        
        {/* Deliberate Strategy Quote (keeps dark bg) */}
        <DeliberateStrategySection />
        
        {/* Remaining sections with gradient background */}
        <FlowGradientBackground className="min-h-screen">
          <AboutSection />
          <BrandsSection />
          <FAQSection />
          <StrategySection />
          <FinalCTASection />
        </FlowGradientBackground>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
