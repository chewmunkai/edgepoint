import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import SEOHead, { businessSchema, servicesSchema, createFaqSchema } from "@/components/SEOHead";

// Lazy-load below-the-fold sections to reduce initial JS bundle
const CoreServicesSection = lazy(() => import("@/components/CoreServicesSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const WhyStrategySection = lazy(() => import("@/components/WhyStrategySection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const InsightsPreviewSection = lazy(() => import("@/components/InsightsPreviewSection"));
const BuildProperlySection = lazy(() => import("@/components/BuildProperlySection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const CaseSection = lazy(() => import("@/components/ui/cases-with-infinite-scroll").then(m => ({ default: m.Case })));

const homeFaqs = [
  { question: "Do you only do strategy, or do you execute too?", answer: "Both. We offer in-house execution for SEO, website development, and social media marketing. For other services, we coordinate with specialists." },
  { question: "How long do engagements typically last?", answer: "The Strategic Audit is a 2-week sprint. Ongoing engagements typically last 6-12 months." },
  { question: "What size business do you work with?", answer: "SMEs doing RM500K–RM10M in revenue, investing RM3K–RM30K/month in marketing." },
  { question: "How do you measure success?", answer: "Pipeline growth, cost per acquisition, lead quality, conversion rates, and topline revenue." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEOHead
        title="Edge Point | Strategy-First Marketing Agency Malaysia"
        description="Stop wasting money on misaligned marketing. Edge Point helps Malaysian SMEs build strategy-first growth systems—brand, SEO, performance, events—tied to revenue."
        jsonLd={[businessSchema, servicesSchema, createFaqSchema(homeFaqs)]}
      />
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={null}>
          <div className="relative z-20 bg-[#f5f5f5]">
            <CoreServicesSection />
          </div>
          <AboutSection />
          <WhyStrategySection />
          <CaseSection />
          <div className="relative z-20 bg-[#f5f5f5]">
            <FAQSection />
            <InsightsPreviewSection />
            <BuildProperlySection />
            <FinalCTASection />
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
