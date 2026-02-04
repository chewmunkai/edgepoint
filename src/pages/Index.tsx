import Header from "@/components/Header";
import HeroWithScrollAnimation from "@/components/HeroWithScrollAnimation";
import MarketRealitySection from "@/components/MarketRealitySection";
import DeliberateStrategySection from "@/components/DeliberateStrategySection";
import AboutSection from "@/components/AboutSection";
import StrategySection from "@/components/StrategySection";
import BrandsSection from "@/components/BrandsSection";
import FAQSection from "@/components/FAQSection";
import MarqueeSection from "@/components/MarqueeSection";
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
          {/* Hero with scroll scale/rotate animation */}
          <HeroWithScrollAnimation />
          
          {/* Market Reality - Full stacking cards experience */}
          <MarketRealitySection />
          
          {/* Deliberate Strategy (dark bg) */}
          <section className="bg-black">
            <DeliberateStrategySection />
          </section>
          
          {/* Remaining sections with gradient background */}
          <FlowGradientBackground>
            <AboutSection />
            <BrandsSection />
            <FAQSection />
            <StrategySection />
          </FlowGradientBackground>
          
          {/* Marquee Section */}
          <MarqueeSection />
          
          {/* Final CTA with gradient background */}
          <FlowGradientBackground>
            <FinalCTASection />
          </FlowGradientBackground>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
