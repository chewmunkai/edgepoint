import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarketRealitySection from "@/components/MarketRealitySection";
import DeliberateStrategySection from "@/components/DeliberateStrategySection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import FAQSection from "@/components/FAQSection";
import StrategySection from "@/components/StrategySection";
import MarqueeSection from "@/components/MarqueeSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        {/* Hero - Three.js horizon scene */}
        <HeroSection />

        {/* Rest of page content - sits above the fixed canvas */}
        <div className="relative z-20 bg-black">
          <MarketRealitySection />
          <DeliberateStrategySection />
          <AboutSection />
          <HowItWorksSection />
          <WhoWeServeSection />
          <FAQSection />
          <StrategySection />
          <MarqueeSection />
          <FinalCTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
