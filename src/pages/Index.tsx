import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoreServicesSection from "@/components/CoreServicesSection";
import AboutSection from "@/components/AboutSection";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import FAQSection from "@/components/FAQSection";
import BuildProperlySection from "@/components/BuildProperlySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <div className="relative z-20 bg-[#f5f5f5]">
          <CoreServicesSection />
        </div>
        <AboutSection />
        <div className="relative z-20 bg-[#f5f5f5]">
          <WorkWithUsSection />
          <FAQSection />
          <BuildProperlySection />
          <FinalCTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
