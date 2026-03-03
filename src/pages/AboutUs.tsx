import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Check, Target, Zap, BarChart3, Compass } from "lucide-react";
import { FlippingCard } from "@/components/ui/flipping-card";
import SmoothScroll from "@/components/ui/smooth-scroll";
import BrandsCarousel from "@/components/BrandsCarousel";
import { Link } from "react-router-dom";
import teamDaniel from "@/assets/team-daniel.jpg";
import teamTziSheng from "@/assets/team-tzisheng.jpg";
import SEOHead from "@/components/SEOHead";

/* ─── Animation Wrapper ─── */
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── Stats ─── */
const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "60+", label: "Projects Executed" },
  { value: "RM3.6M+", label: "Ads Optimized" },
];

/* ─── Approach Steps ─── */
const approachSteps = [
  {
    icon: Compass,
    num: "01",
    title: "Diagnose First, Prescribe Second",
    body: "We don't lead with what we sell. We start by understanding your business, then recommend what actually needs to happen.",
  },
  {
    icon: Target,
    num: "02",
    title: "Prioritize Ruthlessly",
    body: "You don't have unlimited budget or time. We help you focus on the 20% of activities that drive 80% of results.",
  },
  {
    icon: Zap,
    num: "03",
    title: "Execute With Discipline",
    body: "We handle SEO, web development, and social media in-house. For services outside our scope, we coordinate with specialists—keeping everything aligned.",
  },
  {
    icon: BarChart3,
    num: "04",
    title: "Measure What Matters",
    body: "Pipeline growth. Cost per acquisition. Conversion rates. Revenue. If a tactic doesn't move these numbers, we kill it.",
  },
];

const AboutUs = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <SEOHead
          title="About Edge Point | Strategy-First Marketing Partner"
          description="Built for clarity, driven by growth. Edge Point is a strategy-first marketing partner for Malaysian SMEs who want direction before execution."
        />
        <Header />
        <main>
          <PageHero
            label="About Edge Point"
            title="Built for Clarity. Driven by Growth."
            highlightWord="Growth."
            description="We exist to stop businesses from wasting money on misaligned marketing. Edge Point is a strategy-first marketing partner for SME owners who want direction to lead execution."
          />

          {/* ══ STATS BAR ══ */}
          <section className="bg-foreground">
            <div className="container mx-auto px-4 py-10 md:py-14">
              <div className="grid grid-cols-3 gap-3 md:gap-10 max-w-4xl mx-auto">
                {stats.map((stat, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="text-center">
                      <p className="font-heading font-bold text-xl sm:text-2xl md:text-4xl text-neon whitespace-nowrap">{stat.value}</p>
                      <p className="font-body text-white/50 text-xs sm:text-sm mt-1">{stat.label}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          <div className="bg-[#f5f5f5]">
            {/* ══ WHY WE EXIST — Split Layout ══ */}
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
                  <FadeIn className="lg:sticky lg:top-32">
                    <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                      Why We Exist
                    </p>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05]">
                      Marketing Without Direction Is Just{" "}
                      <span className="text-neon">Noise.</span>
                    </h2>
                  </FadeIn>

                  <FadeIn delay={0.15}>
                    <p className="font-body text-foreground/55 text-base md:text-lg leading-[1.85] mb-8">
                      Too many businesses rush into marketing with no direction. They spend on content, ads, and agencies—without a clear view of what's working or why. We started Edge Point to give business owners a smarter way to grow—one rooted in strategy, sequence, and commercial sense.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Strategy should lead, not follow execution",
                        "Every dollar spent should be tied to topline growth",
                        "Clarity beats volume",
                        "Marketing should be measured by impact, not activity",
                      ].map((belief, i) => (
                        <div key={i} className="flex items-start gap-3 rounded-xl border border-foreground/10 bg-white p-5">
                          <Check className="size-5 text-neon mt-0.5 shrink-0" />
                          <p className="font-body text-foreground/70 text-sm leading-relaxed">{belief}</p>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                </div>
              </div>
            </section>

            {/* ══ HOW WE'RE DIFFERENT — Dark section ══ */}
            <section className="bg-foreground py-16 md:py-24">
              <div className="container mx-auto px-4 max-w-6xl">
                <FadeIn>
                  <div className="max-w-2xl mb-12">
                    <p className="text-white/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                      How We're Different
                    </p>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-[1.05]">
                      Not Another Vendor.{" "}
                      <span className="text-neon">Your Senior Marketing Partner.</span>
                    </h2>
                    <p className="font-body text-white/50 text-base mt-6 leading-relaxed">
                      We operate as your senior marketing partner—deciding what needs to be done, in what order, and how it connects to revenue.
                    </p>
                  </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "SMEs Already Investing", body: "Businesses already spending on marketing but unsure what's working or where the money is going." },
                    { title: "Teams Without Strategic Lead", body: "In-house teams executing tactics without a senior marketing strategist guiding the direction." },
                    { title: "Owners Ready to Lead", body: "Business owners who want to stop reacting to trends and start leading with intentional, revenue-focused marketing." },
                  ].map((card, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 h-full">
                        <div className="w-10 h-10 rounded-xl bg-neon/20 flex items-center justify-center mb-4">
                          <Check className="size-5 text-neon" />
                        </div>
                        <h3 className="font-heading font-bold text-white text-lg mb-3">{card.title}</h3>
                        <p className="font-body text-white/50 text-sm leading-relaxed">{card.body}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </section>

            {/* ══ OUR APPROACH — Numbered Steps ══ */}
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 max-w-6xl">
                <FadeIn>
                  <div className="max-w-2xl mb-12">
                    <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                      Our Approach
                    </p>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05]">
                      How We <span className="text-neon">Work.</span>
                    </h2>
                  </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-6">
                  {approachSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <FadeIn key={i} delay={i * 0.1}>
                        <div className="group relative rounded-2xl border border-foreground/10 bg-white p-6 md:p-8 h-full hover:border-neon/30 transition-all duration-300 hover:shadow-[4px_4px_0px_0px_hsl(82,100%,60%)]">
                          <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center gap-2">
                              <span className="font-heading text-3xl font-bold text-neon/30">{step.num}</span>
                              <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-neon/10 transition-colors">
                                <Icon className="size-5 text-foreground/60 group-hover:text-neon transition-colors" />
                              </div>
                            </div>
                            <div>
                              <h3 className="font-heading font-bold text-foreground text-lg mb-2">{step.title}</h3>
                              <p className="font-body text-foreground/55 text-sm leading-relaxed">{step.body}</p>
                            </div>
                          </div>
                        </div>
                      </FadeIn>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ══ LEADERSHIP TEAM — Flipping Cards ══ */}
            <section className="py-16 md:py-24 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-6xl">
                <FadeIn>
                  <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                      Meet the Leadership Team
                    </p>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05]">
                      The People Behind <span className="text-neon">Edge Point.</span>
                    </h2>
                  </div>
                </FadeIn>

                <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
                  {[
                    {
                      name: "Daniel Chew Wen Kai",
                      role: "CEO — Strategic, Growth, Training",
                      quote: "Most businesses don't need more ideas. They need better decisions.",
                      image: teamDaniel,
                    },
                    {
                      name: "Yeoh Tzi Sheng",
                      role: "COO — Operation, Performance, Strategic",
                      quote: "Do less, but do it right—that's how we scale.",
                      image: teamTziSheng,
                    },
                  ].map((person, i) => (
                    <FadeIn key={i} delay={i * 0.15}>
                      <FlippingCard
                        width={320}
                        height={400}
                        className="w-full max-w-[320px]"
                        frontContent={
                          <div className="relative h-full w-full">
                            <img
                              src={person.image}
                              alt={person.name}
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h3 className="font-heading text-xl text-white font-bold mb-1">{person.name}</h3>
                              <p className="font-heading text-xs text-neon uppercase tracking-widest">{person.role}</p>
                            </div>
                          </div>
                        }
                        backContent={
                          <div className="h-full w-full bg-foreground flex flex-col items-center justify-center p-8 text-center">
                            <div className="w-14 h-14 rounded-full bg-neon/20 flex items-center justify-center mb-6">
                              <span className="font-heading font-bold text-neon text-2xl">{person.name[0]}</span>
                            </div>
                            <h3 className="font-heading text-lg text-white font-bold mb-2">{person.name}</h3>
                            <p className="font-heading text-xs text-neon uppercase tracking-widest mb-6">{person.role}</p>
                            <p className="font-body text-white/60 text-sm italic leading-relaxed border-l-2 border-neon/40 pl-4 text-left">
                              "{person.quote}"
                            </p>
                          </div>
                        }
                      />
                    </FadeIn>
                  ))}
                </div>

                <FadeIn delay={0.3}>
                  <p className="font-body text-foreground/50 text-sm text-center leading-relaxed max-w-xl mx-auto">
                    Together, they bring balance—vision and performance, strategy and systems—to ensure every client engagement is grounded and growth-focused.
                  </p>
                </FadeIn>
              </div>
            </section>

            {/* ══ BRANDS ══ */}
            <section className="py-12 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-6xl">
                <FadeIn>
                  <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-6 text-center">
                    Brands We've Worked With
                  </p>
                </FadeIn>
                <BrandsCarousel />
              </div>
            </section>

            {/* ══ FAQ ══ */}
            <FAQSection />

            {/* ══ FINAL CTA ══ */}
            <section className="py-16 md:py-24 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-3xl text-center">
                <FadeIn>
                  <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    Let's Start With Strategy
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight mb-4">
                    Ready to Make Your Marketing{" "}
                    <span className="bg-[#007BFF] text-white px-2 py-0.5 rounded-sm">Work Smarter?</span>
                  </h2>
                  <p className="font-body text-foreground/50 text-base leading-relaxed mb-8 max-w-xl mx-auto">
                    Start with a Strategic Audit—and gain clarity before your next dollar is spent.
                  </p>
                  <Link to="/contact">
                    <LiquidButton size="lg" className="font-heading text-sm md:text-base whitespace-nowrap min-w-[260px] justify-center">
                      Book a Strategic Audit
                    </LiquidButton>
                  </Link>
                </FadeIn>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default AboutUs;
