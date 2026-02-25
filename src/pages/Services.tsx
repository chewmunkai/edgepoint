import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Check, ArrowRight } from "lucide-react";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { Link } from "react-router-dom";
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

const services = [
  {
    stepNumber: "01",
    slug: "brand-foundation",
    title: "Brand & Foundation",
    subtitle: "Before scaling traffic, we build clarity.",
    description:
      "Brand foundation isn't about logos and colors—it's strategic infrastructure that makes everything else work.",
    imageSrc: serviceBrand,
    items: [
      { name: "Branding Kit Development", detail: "Visual identity that communicates your positioning consistently across all channels" },
      { name: "Brand Positioning & Messaging", detail: "Clear articulation of who you serve, what makes you different, and why prospects should choose you" },
      { name: "Offer Structuring", detail: "Strategic packaging of your products/services to match market demand and support clear buying decisions" },
      { name: "Website Development", detail: "Conversion-focused sites built on strategy, designed to guide visitors toward revenue actions" },
      { name: "Conversion-Focused Landing Pages", detail: "Dedicated pages optimized for a single conversion goal with messaging that matches visitor intent" },
    ],
  },
  {
    stepNumber: "02",
    slug: "visibility-organic-growth",
    title: "Visibility & Organic Growth",
    subtitle: "Once foundations are set, we build sustainable attention.",
    description:
      "Organic channels compound over time. We build discoverability where your ideal customers are already searching.",
    imageSrc: serviceVisibility,
    items: [
      { name: "SEO Strategy & Execution", detail: "Technical optimization and content planning designed to rank for searches that drive revenue, not just traffic" },
      { name: "Content Strategy", detail: "Strategic planning that aligns with your customer journey—every piece serves a purpose: educate, build trust, or convert" },
      { name: "Social Media Marketing", detail: "Platform strategy and execution that builds authority with your ideal customers, not just followers" },
      { name: "Organic Funnel Structuring", detail: "Mapping how prospects discover you organically, then designing touchpoints that guide them toward conversion" },
    ],
  },
  {
    stepNumber: "03",
    slug: "performance-scale",
    title: "Performance & Scale",
    subtitle: "When the system is ready, we accelerate.",
    description:
      "Performance marketing works when you have clear positioning, a converting funnel, and proven offers. We scale what's already working.",
    imageSrc: servicePerformance,
    items: [
      { name: "Performance Marketing", detail: "Strategic paid campaigns focused on driving qualified leads and revenue, not just clicks or impressions" },
      { name: "Paid Media Strategy", detail: "Channel selection, audience targeting, and budget allocation designed to maximize ROI" },
      { name: "Funnel Optimization", detail: "Continuous testing and refinement of landing pages, ad creative, and conversion paths" },
      { name: "Campaign Tracking & Reporting", detail: "Transparent dashboards and regular reporting tied to revenue outcomes" },
    ],
  },
  {
    stepNumber: "04",
    slug: "events-activation",
    title: "Events & Activation",
    subtitle: "Marketing doesn't only live online.",
    description:
      "Events are powerful growth channels when integrated with your broader strategy. We turn offline moments into measurable online outcomes.",
    imageSrc: serviceEvents,
    items: [
      { name: "Event Planning & Execution", detail: "End-to-end event strategy and logistics designed with clear commercial objectives" },
      { name: "Brand Activation Campaigns", detail: "Memorable brand experiences that generate awareness, drive engagement, and capture leads" },
      { name: "Offline-Online Funnel Integration", detail: "Connecting event attendees to your digital ecosystem and converting offline interest into online conversions" },
    ],
  },
];

const Services = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>
          <PageHero
            label="What We Do"
            title="Strategy First. Execution Done Right."
            highlightWord="Done Right."
            description="We don't sell services in isolation. We design the direction first—then execute what matters. From brand foundations to performance marketing, everything we do connects back to one thing: revenue clarity."
          />

          <div className="bg-[#f5f5f5]">
            {/* Intro */}
            <section className="py-12 md:py-20">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    How We Structure Our Work
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight mb-6">
                    Strategy Drives <span className="text-neon">Everything.</span>
                  </h2>
                  <p className="font-body text-foreground/60 text-base leading-relaxed">
                    We define your positioning, customer journey, and growth priorities first—then execute across channels that actually move the needle.
                  </p>
                </SectionBlock>
              </div>
            </section>

            {/* Service Cards */}
            <section className="py-12 md:py-20 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    Our Core Services
                  </p>
                </SectionBlock>

                <div className="space-y-6 mt-8">
                  {services.map((service, i) => (
                    <SectionBlock key={service.stepNumber} delay={0.1 * i}>
                      <div className="rounded-2xl border border-foreground/10 bg-white overflow-hidden">
                        <div className="grid md:grid-cols-5 gap-0">
                          {/* Image */}
                          <div className="md:col-span-2 relative">
                            <img
                              src={service.imageSrc}
                              alt={service.title}
                              className="w-full h-48 md:h-full object-cover"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full font-body">
                                {service.stepNumber}
                              </span>
                            </div>
                          </div>
                          {/* Content */}
                          <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                            <h3 className="font-heading text-xl md:text-2xl text-foreground font-bold mb-1">
                              {service.title}
                            </h3>
                            <p className="font-body text-neon text-sm font-semibold mb-3">
                              {service.subtitle}
                            </p>
                            <p className="font-body text-foreground/60 text-sm leading-relaxed mb-5">
                              {service.description}
                            </p>
                            <div>
                              <p className="font-body text-[10px] font-semibold tracking-widest uppercase text-foreground/40 mb-2">
                                What's included
                              </p>
                              <ul className="space-y-1.5">
                                {service.items.map((item) => (
                                  <li
                                    key={item.name}
                                    className="font-body text-sm text-foreground/70 flex items-start gap-2"
                                  >
                                    <Check className="size-4 text-neon mt-0.5 shrink-0" />
                                    {item.name}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <Link
                              to={`/services/${service.slug}`}
                              className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-agency-blue hover:gap-3 transition-all duration-300 mt-5"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SectionBlock>
                  ))}
                </div>
              </div>
            </section>

            {/* Final CTA */}
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

export default Services;
