import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { FlowGradientBackground } from "@/components/ui/flow-gradient-hero-section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { HighlightText } from "@/components/ui/animated-reveal-text";
import { TextReveal } from "@/components/ui/text-reveal-animation";
import { Check, X, ArrowRight } from "lucide-react";
import SmoothScroll from "@/components/ui/smooth-scroll";

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

const AboutUs = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>
          <PageHero
            label="About Edge Point"
            title="Built for Clarity. Driven by Growth."
            highlightWord="Growth."
            description="We exist to stop businesses from wasting money on misaligned marketing. Edge Point is a strategy-first marketing partner for SME owners who want direction to lead execution, not execution without direction."
          />

          {/* Why We Exist */}
          <section className="bg-black py-12 md:py-20 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
              <SectionBlock>
                <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
                  Why We Exist
                </p>
                <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-6">
                  Marketing Without Direction Is Just <span className="text-neon">Noise.</span>
                </h2>
                <p className="font-body text-white/60 text-base leading-relaxed mb-4">
                  Too many businesses rush into marketing with no direction. They spend on content, ads, and agencies—without a clear view of what's working or why.
                </p>
                <p className="font-body text-white/60 text-base leading-relaxed mb-8">
                  We started Edge Point to give business owners a smarter way to grow—one rooted in strategy, sequence, and commercial sense.
                </p>
              </SectionBlock>

              <SectionBlock delay={0.2}>
                <h3 className="font-body text-lg text-white font-semibold mb-5">We believe:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Strategy should lead, not follow execution",
                    "Every dollar spent should be tied to topline growth",
                    "Clarity beats volume",
                    "Marketing should be measured by impact, not activity",
                  ].map((belief, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
                    >
                      <Check className="size-5 text-neon mt-0.5 shrink-0" />
                      <p className="font-body text-white/70 text-sm leading-relaxed">{belief}</p>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            </div>
          </section>

          {/* How We're Different */}
          <FlowGradientBackground>
            <section className="py-12 md:py-20">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    How We're Different
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-4">
                    <TextReveal word="Not Another Vendor. " className="inline" />
                    <HighlightText
                      text="Your Senior Marketing Partner."
                      as="span"
                      textClassName="text-black"
                      highlightClassName="rounded-sm"
                      duration={1.2}
                    />
                  </h2>
                  <p className="font-body text-white/60 text-base leading-relaxed mb-10">
                    We're not another vendor selling services on autopilot. Edge Point operates as your senior marketing partner—deciding what needs to be done, in what order, and how it connects to revenue.
                  </p>
                </SectionBlock>

                <SectionBlock delay={0.15}>
                  <div className="rounded-2xl border-2 border-neon/30 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-[4px_4px_0px_0px_hsl(82,100%,60%)]">
                    <h3 className="font-heading text-sm text-neon uppercase tracking-widest mb-5">
                      We're built for
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "SMEs already investing in marketing but unsure what's working",
                        "In-house teams without strategic leadership",
                        "Owners who want to stop reacting and start leading",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="size-5 text-neon mt-0.5 shrink-0" />
                          <span className="font-body text-white/70 text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionBlock>
              </div>
            </section>
          </FlowGradientBackground>

          {/* Meet the Leadership Team */}
          <section className="bg-black py-12 md:py-20 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
              <SectionBlock>
                <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
                  Meet the Leadership Team
                </p>
                <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-10">
                  The People Behind <span className="text-neon">Edge Point.</span>
                </h2>
              </SectionBlock>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <SectionBlock delay={0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 h-full">
                    <h3 className="font-heading text-xl text-white font-bold mb-1">
                      Daniel Chew Wen Kai
                    </h3>
                    <p className="font-heading text-xs text-neon uppercase tracking-widest mb-4">
                      CEO — Strategic, Growth, Training
                    </p>
                    <p className="font-body text-white/60 text-sm italic leading-relaxed border-l-2 border-neon/40 pl-4">
                      "Most businesses don't need more ideas. They need better decisions."
                    </p>
                  </div>
                </SectionBlock>

                <SectionBlock delay={0.2}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 h-full">
                    <h3 className="font-heading text-xl text-white font-bold mb-1">
                      Yeoh Tzi Sheng
                    </h3>
                    <p className="font-heading text-xs text-neon uppercase tracking-widest mb-4">
                      COO — Operation, Performance, Strategic
                    </p>
                    <p className="font-body text-white/60 text-sm italic leading-relaxed border-l-2 border-neon/40 pl-4">
                      "Do less, but do it right—that's how we scale."
                    </p>
                  </div>
                </SectionBlock>
              </div>

              <SectionBlock delay={0.3}>
                <p className="font-body text-white/50 text-sm text-center leading-relaxed">
                  Together, they bring balance—vision and performance, strategy and systems—to ensure every client engagement is grounded and growth-focused.
                </p>
              </SectionBlock>
            </div>
          </section>

          {/* Our Approach */}
          <FlowGradientBackground>
            <section className="py-12 md:py-20">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    Our Approach
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-10">
                    <TextReveal word="How We " className="inline" />
                    <HighlightText
                      text="Work."
                      as="span"
                      textClassName="text-black"
                      highlightClassName="rounded-sm"
                      duration={1.2}
                    />
                  </h2>
                </SectionBlock>

                <div className="space-y-6">
                  {[
                    {
                      title: "We diagnose first, prescribe second.",
                      body: "We don't lead with what we sell. We start by understanding your business, then recommend what actually needs to happen.",
                    },
                    {
                      title: "We prioritize ruthlessly.",
                      body: "You don't have unlimited budget or time. We help you focus on the 20% of activities that drive 80% of results.",
                    },
                    {
                      title: "We execute with discipline.",
                      body: "We handle SEO, web development, and social media in-house. For services outside our scope, we coordinate with specialists—keeping everything aligned to the strategic plan.",
                    },
                    {
                      title: "We measure what matters.",
                      body: "Pipeline growth. Cost per acquisition. Conversion rates. Revenue. If a tactic doesn't move these numbers, we kill it.",
                    },
                  ].map((item, i) => (
                    <SectionBlock key={i} delay={0.1 * (i + 1)}>
                      <div className={`rounded-2xl border ${i === 2 ? "border-2 border-neon/30 shadow-[4px_4px_0px_0px_hsl(82,100%,60%)]" : "border-white/10"} bg-white/5 backdrop-blur-sm p-6 md:p-8`}>
                        <h3 className="font-body text-lg md:text-xl text-white font-bold mb-3">
                          {item.title}
                        </h3>
                        <p className="font-body text-white/60 text-sm leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </SectionBlock>
                  ))}
                </div>
              </div>
            </section>
          </FlowGradientBackground>

          {/* Final CTA */}
          <section className="bg-black py-12 md:py-20 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
              <SectionBlock>
                <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
                  Let's Start With Strategy
                </p>
                <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-4">
                  Ready to Make Your Marketing <span className="text-neon">Work Smarter?</span>
                </h2>
                <p className="font-body text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
                  Start with a Strategic Audit—and gain clarity before your next dollar is spent.
                </p>
                <LiquidButton href="#contact" size="lg" variant="dark" className="font-heading text-sm md:text-base whitespace-nowrap min-w-[260px] justify-center">
                  Book a Strategic Audit
                  <ArrowRight className="size-4 ml-2" />
                </LiquidButton>
              </SectionBlock>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default AboutUs;
