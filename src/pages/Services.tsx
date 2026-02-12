import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Check, ArrowRight } from "lucide-react";
import SmoothScroll from "@/components/ui/smooth-scroll";
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
    title: "Brand & Foundation",
    subtitle: "Before scaling traffic, we build clarity.",
    description:
      "Brand foundation isn't about logos and colors—it's strategic infrastructure that makes everything else work.",
    imageSrc: serviceBrand,
    items: [
      "Branding Kit Development",
      "Brand Positioning & Messaging",
      "Offer Structuring",
      "Website Development",
      "Conversion-Focused Landing Pages",
    ],
  },
  {
    stepNumber: "02",
    title: "Visibility & Organic Growth",
    subtitle: "We build sustainable attention.",
    description:
      "Organic channels compound over time. We build discoverability where your ideal customers are already searching.",
    imageSrc: serviceVisibility,
    items: [
      "SEO Strategy & Execution",
      "Content Strategy",
      "Social Media Marketing",
      "Organic Funnel Structuring",
    ],
  },
  {
    stepNumber: "03",
    title: "Performance & Scale",
    subtitle: "When the system is ready, we accelerate.",
    description:
      "Performance marketing works when you have clear positioning, a converting funnel, and proven offers.",
    imageSrc: servicePerformance,
    items: [
      "Performance Marketing",
      "Paid Media Strategy",
      "Funnel Optimization",
      "Campaign Tracking & Reporting",
    ],
  },
  {
    stepNumber: "04",
    title: "Events & Activation",
    subtitle: "Marketing doesn't only live online.",
    description:
      "Events are powerful growth channels when integrated with your broader strategy.",
    imageSrc: serviceEvents,
    items: [
      "Event Planning & Execution",
      "Brand Activation Campaigns",
      "Offline-Online Funnel Integration",
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
            title="Strategy-Led Services."
            highlightWord="Services."
            description="We don't sell tactics in isolation. Every service we offer is part of a strategic system designed to drive measurable growth."
          />

          <div className="bg-[#f5f5f5]">
            {/* Intro */}
            <section className="py-12 md:py-20">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    Our Framework
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight mb-6">
                    How We Structure <span className="text-neon">Our Work.</span>
                  </h2>
                  <p className="font-body text-foreground/60 text-base leading-relaxed mb-4">
                    Most agencies sell services as standalone deliverables. We don't. At Edge Point, every service is sequenced within a strategic framework—so nothing runs in isolation, and every dollar works harder.
                  </p>
                  <p className="font-body text-foreground/60 text-base leading-relaxed">
                    Our services follow a deliberate order: foundation first, then visibility, then performance. This ensures you're not scaling something that isn't ready.
                  </p>
                </SectionBlock>
              </div>
            </section>

            {/* Service Cards */}
            <section className="py-12 md:py-20 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-5xl">
                <div className="space-y-6">
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
                                    key={item}
                                    className="font-body text-sm text-foreground/70 flex items-start gap-2"
                                  >
                                    <Check className="size-4 text-neon mt-0.5 shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SectionBlock>
                  ))}
                </div>
              </div>
            </section>

            {/* Why This Order Matters */}
            <section className="py-12 md:py-20 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    Why This Order Matters
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight mb-6">
                    Sequence Is <span className="text-neon">Strategy.</span>
                  </h2>
                  <p className="font-body text-foreground/60 text-base leading-relaxed mb-8">
                    Running ads before your brand is clear wastes budget. Publishing content without a funnel wastes effort. We structure services in the right order—so every step compounds on the last.
                  </p>
                </SectionBlock>

                <SectionBlock delay={0.15}>
                  <div className="rounded-2xl border-2 border-neon/30 bg-white p-6 md:p-8 shadow-[4px_4px_0px_0px_hsl(82,100%,60%)]">
                    <h3 className="font-heading text-sm text-neon uppercase tracking-widest mb-5">
                      The Edge Point Difference
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "No service runs without a strategy behind it",
                        "Every deliverable connects to a revenue outcome",
                        "We tell you what not to do—saving you time and money",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="size-5 text-neon mt-0.5 shrink-0" />
                          <span className="font-body text-foreground/70 text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionBlock>
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

export default Services;
