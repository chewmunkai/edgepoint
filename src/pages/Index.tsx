import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StrategySection from "@/components/StrategySection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import InsightsSection from "@/components/InsightsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StrategySection />
        <ServicesSection />
        <IndustriesSection />
        <InsightsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
