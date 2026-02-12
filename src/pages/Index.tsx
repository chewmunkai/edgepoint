import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoreServicesSection from "@/components/CoreServicesSection";
import AboutSection from "@/components/AboutSection";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import FAQSection from "@/components/FAQSection";
import BuildProperlySection from "@/components/BuildProperlySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import { Case } from "@/components/ui/cases-with-infinite-scroll";

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
        </div>
        <Case />
        <div className="relative z-20 bg-[#f5f5f5]">
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
