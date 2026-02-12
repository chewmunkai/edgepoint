import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Check, ArrowRight } from "lucide-react";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { useParams, Navigate, Link } from "react-router-dom";
import serviceBrand from "@/assets/service-brand.jpg";
import serviceVisibility from "@/assets/service-visibility.jpg";
import servicePerformance from "@/assets/service-performance.jpg";
import serviceEvents from "@/assets/service-events.jpg";

const SectionBlock = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const serviceData: Record<string, {
  label: string;
  title: string;
  highlightWord: string;
  heroDescription: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  items: { name: string; detail: string }[];
  nextService?: { slug: string; title: string };
}> = {
  "brand-foundation": {
    label: "Service 01",
    title: "Brand & Foundation.",
    highlightWord: "Foundation.",
    heroDescription: "Before scaling traffic, we build clarity. Brand foundation isn't about logos and colors—it's strategic infrastructure that makes everything else work.",
    subtitle: "Before scaling traffic, we build clarity.",
    description: "Brand foundation isn't about logos and colors—it's strategic infrastructure that makes everything else work.",
    imageSrc: serviceBrand,
    items: [
      { name: "Branding Kit Development", detail: "Visual identity that communicates your positioning consistently across all channels" },
      { name: "Brand Positioning & Messaging", detail: "Clear articulation of who you serve, what makes you different, and why prospects should choose you" },
      { name: "Offer Structuring", detail: "Strategic packaging of your products/services to match market demand and support clear buying decisions" },
      { name: "Website Development", detail: "Conversion-focused sites built on strategy, designed to guide visitors toward revenue actions" },
      { name: "Conversion-Focused Landing Pages", detail: "Dedicated pages optimized for a single conversion goal with messaging that matches visitor intent" },
    ],
    nextService: { slug: "visibility-organic-growth", title: "Visibility & Organic Growth" },
  },
  "visibility-organic-growth": {
    label: "Service 02",
    title: "Visibility & Organic Growth.",
    highlightWord: "Organic Growth.",
    heroDescription: "Once foundations are set, we build sustainable attention. Organic channels compound over time—we build discoverability where your ideal customers are already searching.",
    subtitle: "Once foundations are set, we build sustainable attention.",
    description: "Organic channels compound over time. We build discoverability where your ideal customers are already searching.",
    imageSrc: serviceVisibility,
    items: [
      { name: "SEO Strategy & Execution", detail: "Technical optimization and content planning designed to rank for searches that drive revenue, not just traffic" },
      { name: "Content Strategy", detail: "Strategic planning that aligns with your customer journey—every piece serves a purpose: educate, build trust, or convert" },
      { name: "Social Media Marketing", detail: "Platform strategy and execution that builds authority with your ideal customers, not just followers" },
      { name: "Organic Funnel Structuring", detail: "Mapping how prospects discover you organically, then designing touchpoints that guide them toward conversion" },
    ],
    nextService: { slug: "performance-scale", title: "Performance & Scale" },
  },
  "performance-scale": {
    label: "Service 03",
    title: "Performance & Scale.",
    highlightWord: "Scale.",
    heroDescription: "When the system is ready, we accelerate. Performance marketing works when you have clear positioning, a converting funnel, and proven offers.",
    subtitle: "When the system is ready, we accelerate.",
    description: "Performance marketing works when you have clear positioning, a converting funnel, and proven offers. We scale what's already working.",
    imageSrc: servicePerformance,
    items: [
      { name: "Performance Marketing", detail: "Strategic paid campaigns focused on driving qualified leads and revenue, not just clicks or impressions" },
      { name: "Paid Media Strategy", detail: "Channel selection, audience targeting, and budget allocation designed to maximize ROI" },
      { name: "Funnel Optimization", detail: "Continuous testing and refinement of landing pages, ad creative, and conversion paths" },
      { name: "Campaign Tracking & Reporting", detail: "Transparent dashboards and regular reporting tied to revenue outcomes" },
    ],
    nextService: { slug: "events-activation", title: "Events & Activation" },
  },
  "events-activation": {
    label: "Service 04",
    title: "Events & Activation.",
    highlightWord: "Activation.",
    heroDescription: "Marketing doesn't only live online. Events are powerful growth channels when integrated with your broader strategy.",
    subtitle: "Marketing doesn't only live online.",
    description: "Events are powerful growth channels when integrated with your broader strategy. We turn offline moments into measurable online outcomes.",
    imageSrc: serviceEvents,
    items: [
      { name: "Event Planning & Execution", detail: "End-to-end event strategy and logistics designed with clear commercial objectives" },
      { name: "Brand Activation Campaigns", detail: "Memorable brand experiences that generate awareness, drive engagement, and capture leads" },
      { name: "Offline-Online Funnel Integration", detail: "Connecting event attendees to your digital ecosystem and converting offline interest into online conversions" },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>
          <PageHero
            label={service.label}
            title={service.title}
            highlightWord={service.highlightWord}
            description={service.heroDescription}
          />

          <div className="bg-[#f5f5f5]">
            {/* Service Image + Overview */}
            <section className="py-12 md:py-20">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <div className="rounded-2xl overflow-hidden border border-foreground/10 mb-10">
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                  </div>
                </SectionBlock>

                <SectionBlock delay={0.1}>
                  <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    Overview
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight mb-4">
                    {service.subtitle}
                  </h2>
                  <p className="font-body text-foreground/60 text-base leading-relaxed">
                    {service.description}
                  </p>
                </SectionBlock>
              </div>
            </section>

            {/* What's Included - Detailed */}
            <section className="py-12 md:py-20 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    What's Included
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight mb-10">
                    Deliverables & <span className="text-neon">Scope.</span>
                  </h2>
                </SectionBlock>

                <div className="space-y-4">
                  {service.items.map((item, i) => (
                    <SectionBlock key={item.name} delay={0.08 * i}>
                      <div className="rounded-xl border border-foreground/10 bg-white p-5 md:p-6">
                        <div className="flex items-start gap-3">
                          <Check className="size-5 text-neon mt-0.5 shrink-0" />
                          <div>
                            <h3 className="font-body font-semibold text-foreground text-base mb-1">
                              {item.name}
                            </h3>
                            <p className="font-body text-foreground/60 text-sm leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SectionBlock>
                  ))}
                </div>
              </div>
            </section>

            {/* Next Service */}
            {service.nextService && (
              <section className="py-12 md:py-20 border-t border-foreground/10">
                <div className="container mx-auto px-4 max-w-4xl">
                  <SectionBlock>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-foreground/10 bg-white p-6 md:p-8">
                      <div>
                        <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-1">
                          Next Step
                        </p>
                        <h3 className="font-heading text-lg md:text-xl text-foreground font-bold">
                          {service.nextService.title}
                        </h3>
                      </div>
                      <Link
                        to={`/services/${service.nextService.slug}`}
                        className="inline-flex items-center gap-2 font-body text-sm font-semibold text-agency-blue hover:gap-3 transition-all duration-300"
                      >
                        Explore
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </SectionBlock>
                </div>
              </section>
            )}

            {/* CTA */}
            <section className="py-12 md:py-20 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-3xl text-center">
                <SectionBlock>
                  <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    Ready to Start?
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight mb-4">
                    Let's Build Your <span className="text-neon">Growth System.</span>
                  </h2>
                  <p className="font-body text-foreground/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
                    Start with a Strategic Audit to identify what's working, what's not, and what to prioritize next.
                  </p>
                  <LiquidButton href="/contact" size="lg" className="font-heading text-sm md:text-base whitespace-nowrap min-w-[260px] justify-center">
                    Book a Strategic Audit
                    <ArrowRight className="size-4 ml-2" />
                  </LiquidButton>
                </SectionBlock>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default ServiceDetail;
