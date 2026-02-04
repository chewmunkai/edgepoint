import Header from "@/components/Header";
import HeroWithScrollAnimation from "@/components/HeroWithScrollAnimation";
import DeliberateStrategySection from "@/components/DeliberateStrategySection";
import AboutSection from "@/components/AboutSection";
import StrategySection from "@/components/StrategySection";
import BrandsSection from "@/components/BrandsSection";
import FAQSection from "@/components/FAQSection";
import MarqueeSection from "@/components/MarqueeSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import { FlowGradientBackground } from "@/components/ui/flow-gradient-hero-section";
import SmoothScroll, { StackingCardSection, StickyHeroSection } from "@/components/ui/smooth-scroll";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero + Market Reality with scroll animation */}
          <HeroWithScrollAnimation />
          
          {/* Deliberate Strategy (dark bg) */}
          <section className="bg-black">
            <DeliberateStrategySection />
          </section>
          
          {/* About Section */}
          <FlowGradientBackground>
            <AboutSection />
          </FlowGradientBackground>

          {/* Sticky Hero for Card Stack */}
          <StickyHeroSection>
            <div className="text-center px-6">
              <p className="text-neon/80 font-body font-medium tracking-[0.2em] uppercase text-xs mb-4">
                Discover More
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight max-w-2xl mx-auto">
                Everything You Need to{" "}
                <span className="bg-neon text-black px-3 py-1 rounded-md">Succeed</span>
              </h2>
              <p className="font-body text-white/50 text-base md:text-lg max-w-xl mx-auto mt-6">
                Scroll to explore our partners, answers, and process.
              </p>
              <div className="mt-8">
                <span className="text-white/30 text-xs font-body tracking-widest uppercase">↓ Scroll to explore</span>
              </div>
            </div>
          </StickyHeroSection>

          {/* Card 1: Brands, FAQ, Our Process */}
          <StackingCardSection isFirst>
            <FlowGradientBackground>
              <BrandsSection />
              <FAQSection />
              <StrategySection />
            </FlowGradientBackground>
          </StackingCardSection>

          {/* Card 2: Marquee Section */}
          <StackingCardSection>
            <MarqueeSection />
          </StackingCardSection>
          
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
