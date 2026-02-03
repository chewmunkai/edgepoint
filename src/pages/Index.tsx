import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PositioningSection from "@/components/PositioningSection";
import StrategySection from "@/components/StrategySection";
import ServicesSection from "@/components/ServicesSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PositioningSection />
        <StrategySection />
        <ServicesSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
