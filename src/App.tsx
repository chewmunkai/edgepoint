import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import BoxLoader from "@/components/ui/box-loader";

// Eagerly load the homepage for fastest FCP
import Index from "./pages/Index";

// Lazy-load all other pages to reduce initial JS bundle
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const BrandFoundation = lazy(() => import("./pages/BrandFoundation"));
const VisibilityGrowth = lazy(() => import("./pages/VisibilityGrowth"));
const PerformanceScale = lazy(() => import("./pages/PerformanceScale"));
const EventsActivation = lazy(() => import("./pages/EventsActivation"));
const Insights = lazy(() => import("./pages/Insights"));
const WhyMarketingPlansFail = lazy(() => import("./pages/insights/WhyMarketingPlansFail"));
const SEO2025WhatMovesTheNeedle = lazy(() => import("./pages/insights/SEO2025WhatMovesTheNeedle"));
const TrueCostOfRandomMarketing = lazy(() => import("./pages/insights/TrueCostOfRandomMarketing"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
    <BoxLoader />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
