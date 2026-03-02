import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import BoxLoader from "@/components/ui/box-loader";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import BrandFoundation from "./pages/BrandFoundation";
import VisibilityGrowth from "./pages/VisibilityGrowth";
import PerformanceScale from "./pages/PerformanceScale";
import EventsActivation from "./pages/EventsActivation";
import Insights from "./pages/Insights";
import WhyMarketingPlansFail from "./pages/insights/WhyMarketingPlansFail";
import SEO2025WhatMovesTheNeedle from "./pages/insights/SEO2025WhatMovesTheNeedle";
import TrueCostOfRandomMarketing from "./pages/insights/TrueCostOfRandomMarketing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RouteTransitionLoader = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
        <BoxLoader />
      </div>
    );
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteTransitionLoader>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/brand-foundation" element={<BrandFoundation />} />
            <Route path="/services/visibility-organic-growth" element={<VisibilityGrowth />} />
            <Route path="/services/performance-scale" element={<PerformanceScale />} />
            <Route path="/services/events-activation" element={<EventsActivation />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/why-marketing-plans-fail" element={<WhyMarketingPlansFail />} />
            <Route path="/insights/seo-2025-what-moves-the-needle" element={<SEO2025WhatMovesTheNeedle />} />
            <Route path="/insights/true-cost-of-random-marketing" element={<TrueCostOfRandomMarketing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RouteTransitionLoader>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
