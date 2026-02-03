import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { MarketRealityFeature } from "@/components/ui/feature";
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
        
        <MarketRealityFeature />
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
