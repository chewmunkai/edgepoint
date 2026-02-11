import Header from "@/components/Header";
import HeroWithScrollAnimation from "@/components/HeroWithScrollAnimation";
import DeliberateStrategySection from "@/components/DeliberateStrategySection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import StrategySection from "@/components/StrategySection";
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
          {/* Hero + Market Reality with scroll animation */}
          <HeroWithScrollAnimation />
          
          {/* How We're Different quote (dark bg) */}
          <section className="bg-black">
            <DeliberateStrategySection />
          </section>
          
          {/* Main content sections with gradient background */}
          <FlowGradientBackground>
            <AboutSection />
            <HowItWorksSection />
            <WhoWeServeSection />
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
