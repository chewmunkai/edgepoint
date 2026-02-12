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
            description="We exist to stop businesses from wasting money on misaligned marketing. Edge Point is a strategy-first marketing partner for SME owners who want direction to lead execution — not the other way around."
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
                <p className="font-body text-white/60 text-base leading-relaxed mb-8">
                  Too many businesses rush into marketing with no direction. They spend on content, ads, and agencies—without a clear view of what's working or why. We started Edge Point to solve that problem. To give business owners a smarter way to grow — one rooted in strategy, sequence, and commercial sense.
                </p>
              </SectionBlock>

              <SectionBlock delay={0.2}>
                <h3 className="font-heading text-lg text-white mb-5">We believe:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Strategy should lead, not follow execution.",
                    "Every dollar spent should be tied to topline growth.",
                    "Clarity beats volume.",
                    "Marketing should be measured by impact, not activity.",
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
                    <TextReveal word="Not Another Vendor " className="inline" />
                    <HighlightText
                      text="Selling on Autopilot."
                      as="span"
                      textClassName="text-black"
                      highlightClassName="rounded-sm"
                      duration={1.2}
                    />
                  </h2>
                  <p className="font-body text-white/60 text-base leading-relaxed mb-10">
                    Edge Point operates as your senior marketing partner — deciding what needs to be done, in what order, and how it connects to revenue.
                  </p>
                </SectionBlock>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* What we're not */}
                  <SectionBlock delay={0.1}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 h-full">
                      <h3 className="font-heading text-sm text-white/40 uppercase tracking-widest mb-4">
                        What we're not
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "A content factory that churns without context",
                          "An ad buyer chasing clicks without a strategy",
                          "A generalist agency that never says no",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <X className="size-4 text-red-400 mt-0.5 shrink-0" />
                            <span className="font-body text-white/60 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SectionBlock>

                  {/* Who we're built for */}
                  <SectionBlock delay={0.2}>
                    <div className="rounded-2xl border-2 border-neon/30 bg-white/5 backdrop-blur-sm p-6 shadow-[4px_4px_0px_0px_hsl(82,100%,60%)] h-full">
                      <h3 className="font-heading text-sm text-neon uppercase tracking-widest mb-4">
                        Who we're built for
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "SMEs already investing in marketing but unsure what's working",
                          "In-house teams without strategic leadership",
                          "Owners who want to stop reacting and start leading",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="size-4 text-neon mt-0.5 shrink-0" />
                            <span className="font-body text-white/70 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SectionBlock>

                  {/* Who we're not for */}
                  <SectionBlock delay={0.3}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 h-full">
                      <h3 className="font-heading text-sm text-white/40 uppercase tracking-widest mb-4">
                        Who we're not for
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Businesses chasing quick wins with no foundation",
                          "Clients looking for low-cost, hands-off execution",
                          "Businesses looking to scale before addressing foundational gaps",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <X className="size-4 text-white/30 mt-0.5 shrink-0" />
                            <span className="font-body text-white/50 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SectionBlock>
                </div>
              </div>
            </section>
          </FlowGradientBackground>

          {/* Meet the Leadership Team */}
          <section className="bg-black py-12 md:py-20 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
              <SectionBlock>
                <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
                  Leadership
                </p>
                <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-10">
                  Meet the <span className="text-neon">Team.</span>
                </h2>
              </SectionBlock>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <SectionBlock delay={0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 h-full">
                    <h3 className="font-heading text-xl text-white font-bold mb-1">
                      Daniel Chew Wen Kai
                    </h3>
                    <p className="font-heading text-xs text-neon uppercase tracking-widest mb-3">
                      CEO — Strategic, Growth, Training
                    </p>
                    <p className="font-body text-white/60 text-sm italic leading-relaxed">
                      "Most businesses don't need more ideas. They need better decisions."
                    </p>
                  </div>
                </SectionBlock>

                <SectionBlock delay={0.2}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 h-full">
                    <h3 className="font-heading text-xl text-white font-bold mb-1">
                      Yeoh Tzi Sheng
                    </h3>
                    <p className="font-heading text-xs text-neon uppercase tracking-widest mb-3">
                      COO — Operation, Performance, Strategic
                    </p>
                    <p className="font-body text-white/60 text-sm italic leading-relaxed">
                      "Do less, but do it right — that's how we scale."
                    </p>
                  </div>
                </SectionBlock>
              </div>

              <SectionBlock delay={0.3}>
                <p className="font-body text-white/50 text-sm text-center italic">
                  Together, they bring balance — vision and performance, strategy and systems — to ensure every client engagement is grounded and growth-focused.
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

                <div className="space-y-8">
                  {/* Diagnose */}
                  <SectionBlock delay={0.1}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
                      <h3 className="font-heading text-lg md:text-xl text-white font-bold mb-3">
                        We Diagnose Before Prescribing
                      </h3>
                      <p className="font-body text-white/60 text-sm leading-relaxed mb-3">
                        We don't lead with what we sell. We lead with understanding your business: your market position, your customer journey, your current marketing efforts, and where the gaps are.
                      </p>
                      <p className="font-body text-white/60 text-sm leading-relaxed">
                        Only after we've diagnosed the reality do we prescribe the solution — whether that's repositioning your offer, rebuilding your funnel, or reallocating budget to higher-impact channels.
                      </p>
                    </div>
                  </SectionBlock>

                  {/* Focus */}
                  <SectionBlock delay={0.2}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
                      <h3 className="font-heading text-lg md:text-xl text-white font-bold mb-3">
                        We Help You Focus on What Matters
                      </h3>
                      <p className="font-body text-white/60 text-sm leading-relaxed mb-3">
                        You don't have unlimited budget or time. So we help you focus on the 20% of activities that will drive 80% of your results.
                      </p>
                      <p className="font-body text-white/60 text-sm leading-relaxed">
                        That means saying no to shiny objects, killing underperforming tactics, and doubling down on what actually moves the revenue needle. Our job isn't to do everything. It's to help you do the right things.
                      </p>
                    </div>
                  </SectionBlock>

                  {/* Strategy + Execution */}
                  <SectionBlock delay={0.3}>
                    <div className="rounded-2xl border-2 border-neon/30 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-[4px_4px_0px_0px_hsl(82,100%,60%)]">
                      <h3 className="font-heading text-lg md:text-xl text-white font-bold mb-3">
                        We Lead with Strategy, Then Guide Execution
                      </h3>
                      <p className="font-body text-white/60 text-sm leading-relaxed mb-5">
                        Depending on your needs, we either:
                      </p>

                      <div className="space-y-4 mb-5">
                        <div className="flex items-start gap-3">
                          <Check className="size-4 text-neon mt-0.5 shrink-0" />
                          <p className="font-body text-white/70 text-sm">
                            <span className="font-semibold text-white">Provide strategic direction</span> and guide your existing team or agency to execute with clarity
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Check className="size-4 text-neon mt-0.5 shrink-0" />
                          <div className="font-body text-white/70 text-sm">
                            <span className="font-semibold text-white">Execute in-house</span> across a full spectrum of services:
                            <ul className="mt-2 ml-4 space-y-1 text-white/50">
                              <li>• Branding kit development</li>
                              <li>• Website development</li>
                              <li>• SEO</li>
                              <li>• Social Media Marketing</li>
                              <li>• Performance Marketing</li>
                              <li>• Event Planning & Execution</li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Check className="size-4 text-neon mt-0.5 shrink-0" />
                          <p className="font-body text-white/70 text-sm">
                            <span className="font-semibold text-white">Connect you with trusted specialists</span> for niche channels outside our core scope
                          </p>
                        </div>
                      </div>

                      <p className="font-body text-white/80 text-sm font-medium">
                        Either way, you get strategic clarity and accountable execution.
                      </p>
                    </div>
                  </SectionBlock>
                </div>
              </div>
            </section>
          </FlowGradientBackground>

          {/* Final CTA */}
          <section className="bg-black py-12 md:py-20 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="container mx-auto px-4 max-w-3xl relative z-10 text-center">
              <SectionBlock>
                <h2 className="font-heading font-bold text-2xl md:text-4xl text-white leading-tight mb-4">
                  Let's Start With <span className="text-neon">Strategy.</span>
                </h2>
                <p className="font-body text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
                  Ready to make your marketing work smarter? Get clarity, stop the guesswork, and lead your growth with intent.
                </p>
                <LiquidButton href="#contact" size="lg" variant="dark" className="font-heading text-sm md:text-base whitespace-nowrap min-w-[260px] justify-center">
                  Book a Strategic Audit
                </LiquidButton>
                <p className="font-body text-white/30 text-xs mt-8 tracking-widest uppercase">
                  © Edge Point. Strategy First, Always.
                </p>
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
