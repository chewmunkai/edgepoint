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
import SmoothScroll from "@/components/ui/smooth-scroll";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section with Gradient Animation */}
          <HeroSection />
          
          {/* Market Reality - Full stacking cards experience */}
          <MarketRealitySection />
          
          {/* Deliberate Strategy (dark bg) */}
          <section className="bg-black">
            <DeliberateStrategySection />
          </section>
          
          {/* Remaining sections with gradient background */}
          <FlowGradientBackground className="pb-0">
            <AboutSection />
            <BrandsSection />
            <FAQSection />
            <StrategySection />
            <FinalCTASection />
          </FlowGradientBackground>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
