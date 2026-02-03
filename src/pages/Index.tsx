import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
        {/* Hero Section with Shader Animation */}
        <HeroSection />
        
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
