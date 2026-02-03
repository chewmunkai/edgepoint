import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarketRealitySection from "@/components/MarketRealitySection";
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
        {/* Hero Section with Shader Animation */}
        <HeroSection />
        
        {/* Market Reality - Stacking Cards */}
        <MarketRealitySection />
        <AboutSection />
        <BrandsSection />
        <FAQSection />
        <StrategySection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
