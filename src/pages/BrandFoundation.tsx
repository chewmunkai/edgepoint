import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Check, ArrowRight, ChevronDown, Palette, MessageSquare, Package, Globe, FileText } from "lucide-react";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { Link } from "react-router-dom";

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

const ExpandableItem = ({
  icon: Icon,
  title,
  children,
  defaultOpen = false,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-foreground/10 bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-5 md:p-6 text-left cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <Icon className="size-5 text-neon shrink-0" />
          <h3 className="font-heading font-semibold text-foreground text-sm md:text-base">
            {title}
          </h3>
        </div>
        <ChevronDown
          className={`size-5 text-foreground/40 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 space-y-4">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const comparisonData = [
  {
    without: "You run ads that drive traffic to a website that doesn't convert",
    with: "Your ads drive traffic to pages designed to convert",
  },
  {
    without: "Your messaging sounds like everyone else's",
    with: "Prospects immediately see why you're different",
  },
  {
    without: "Visitors leave confused about what you do",
    with: "Visitors know exactly what to do next",
  },
  {
    without: "You keep tweaking tactics, nothing moves",
    with: "Your marketing compounds because the base is solid",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We dig into your current positioning, messaging, and market landscape. We look at competitors, customer feedback, and where the real gaps are.",
  },
  {
    number: "02",
    title: "Strategic Framework",
    description:
      "We build your positioning, messaging architecture, and offer structure before any design happens. Strategy first. Always.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "Now we create the visual identity and build the digital assets—all grounded in the strategic framework we just built. No creative whims. Just execution on strategy.",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "We implement, test, and refine based on real performance data. If something isn't working, we fix it. If something's crushing, we double down.",
  },
];

const goodFit = [
  "Your positioning feels generic or unclear",
  "Your website gets traffic but doesn't convert",
  "You're ready to invest in marketing but need foundation first",
  "You're willing to challenge your current approach",
];

const notFit = [
  "You're looking for quick cosmetic changes",
  "You're not willing to rethink your positioning",
  "You need results in 30 days (foundation takes 8-12 weeks)",
  "You just want someone to \"make it pretty\" without strategy",
];

const BrandFoundation = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>
          <PageHero
            label="Service 01"
            title="Build the Foundation Before You Scale."
            highlightWord="Scale."
            description="Look, we get it. You want to run ads, create content, and start generating leads. But here's the truth: if your positioning isn't clear and your website doesn't convert, you're just burning money on traffic that goes nowhere."
          />

          <div className="bg-[#f5f5f5]">
            {/* CTA under hero */}
            <section className="py-10 md:py-14">
              <div className="container mx-auto px-4 max-w-4xl text-center">
                <SectionBlock>
                  <LiquidButton
                    href="/contact"
                    size="lg"
                    className="font-heading text-sm md:text-base whitespace-nowrap min-w-[260px] justify-center"
                  >
                    Book a Strategic Audit
                    <ArrowRight className="size-4 ml-2" />
                  </LiquidButton>
                </SectionBlock>
              </div>
            </section>

            {/* Readiness Calculator CTA */}
            <section className="pb-12 md:pb-20">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <div className="rounded-2xl border border-foreground/10 bg-white p-6 md:p-8 text-center">
                    <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                      Not Sure If You Need This?
                    </p>
                    <p className="font-body text-foreground/70 text-sm md:text-base leading-relaxed mb-5 max-w-2xl mx-auto">
                      Before you dive in, take our Marketing Readiness Calculator—a 2-minute assessment that tells you exactly where your gaps are and which service you actually need first.
                    </p>
                    <LiquidButton
                      href="/contact"
                      size="default"
                      className="font-heading text-xs md:text-sm"
                    >
                      Take the Readiness Calculator
                      <ArrowRight className="size-4 ml-1" />
                    </LiquidButton>
                  </div>
                </SectionBlock>
              </div>
            </section>

            {/* Why Foundation Matters */}
            <section className="py-12 md:py-20 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    Why Foundation Matters
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight mb-6">
                    You can't scale what isn't{" "}
                    <span className="text-neon">clear.</span>
                  </h2>
                  <p className="font-body text-foreground/60 text-base leading-relaxed mb-6">
                    Here's a quick test. Pull up your website right now and ask yourself:
                  </p>
                </SectionBlock>

                <div className="space-y-3 mb-10">
                  {[
                    "Do people immediately understand what you do and why it matters?",
                    "Does your website guide visitors toward a decision, or does it just... exist?",
                    "Can you explain why someone should choose you over a competitor in one sentence?",
                  ].map((q, i) => (
                    <SectionBlock key={i} delay={0.08 * i}>
                      <div className="flex items-start gap-3 rounded-xl border border-foreground/10 bg-white p-4 md:p-5">
                        <span className="text-neon font-heading font-bold text-lg mt-0.5">?</span>
                        <p className="font-body text-foreground/70 text-sm md:text-base leading-relaxed">
                          {q}
                        </p>
                      </div>
                    </SectionBlock>
                  ))}
                </div>

                <SectionBlock delay={0.2}>
                  <p className="font-body text-foreground/60 text-base leading-relaxed mb-2">
                    If you hesitated on any of those, you know what the problem is.
                  </p>
                  <p className="font-body text-foreground/80 text-base leading-relaxed font-semibold mb-8">
                    Here's what happens when you skip foundation:
                  </p>
                </SectionBlock>

                {/* Comparison Table */}
                <SectionBlock delay={0.3}>
                  <div className="rounded-2xl border border-foreground/10 bg-white overflow-hidden">
                    <div className="grid grid-cols-2">
                      <div className="p-4 md:p-5 bg-foreground/5 border-b border-foreground/10">
                        <p className="font-heading font-bold text-xs md:text-sm text-foreground/60 uppercase tracking-wider">
                          Without Foundation
                        </p>
                      </div>
                      <div className="p-4 md:p-5 bg-neon/10 border-b border-foreground/10">
                        <p className="font-heading font-bold text-xs md:text-sm text-neon uppercase tracking-wider">
                          With Foundation
                        </p>
                      </div>
                    </div>
                    {comparisonData.map((row, i) => (
                      <div
                        key={i}
                        className={`grid grid-cols-2 ${i < comparisonData.length - 1 ? "border-b border-foreground/5" : ""}`}
                      >
                        <div className="p-4 md:p-5 border-r border-foreground/5">
                          <p className="font-body text-foreground/50 text-xs md:text-sm leading-relaxed">
                            {row.without}
                          </p>
                        </div>
                        <div className="p-4 md:p-5">
                          <p className="font-body text-foreground/80 text-xs md:text-sm leading-relaxed font-medium">
                            {row.with}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionBlock>

                <SectionBlock delay={0.4}>
                  <p className="font-body text-foreground/60 text-base leading-relaxed mt-8 italic">
                    Foundation isn't the sexy part of marketing. But it's the part that makes everything else actually work.
                  </p>
                </SectionBlock>
              </div>
            </section>

            {/* What's Included — Expandable */}
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
                  <SectionBlock delay={0}>
                    <ExpandableItem icon={Palette} title="Branding Kit Development" defaultOpen>
                      <p className="font-body text-foreground/60 text-sm leading-relaxed">
                        This isn't just about making things look pretty.
                      </p>
                      <p className="font-body text-foreground/60 text-sm leading-relaxed">
                        Your visual identity is the first signal people see—before they read a word, before they click anything. It needs to communicate professionalism, consistency, and credibility instantly.
                      </p>
                      <div>
                        <p className="font-body font-semibold text-foreground text-sm mb-2">What you get:</p>
                        <ul className="space-y-1.5">
                          {[
                            "Logo design and variations (primary, secondary, icon versions)",
                            "Color palette and typography system",
                            "Brand guidelines document (so nothing looks off-brand)",
                            "Asset library for consistent application across all channels",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="size-4 text-neon mt-0.5 shrink-0" />
                              <span className="font-body text-foreground/60 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="font-body text-foreground/60 text-sm leading-relaxed italic">
                        <span className="font-semibold text-foreground not-italic">Why it matters: </span>
                        A polished brand makes people trust you faster. A generic one makes them scroll past. Simple as that.
                      </p>
                    </ExpandableItem>
                  </SectionBlock>

                  <SectionBlock delay={0.08}>
                    <ExpandableItem icon={MessageSquare} title="Brand Positioning & Messaging">
                      <p className="font-body text-foreground/60 text-sm leading-relaxed">
                        This is where most businesses lose the game before it even starts.
                      </p>
                      <p className="font-body text-foreground/60 text-sm leading-relaxed">
                        If you can't articulate who you serve, what makes you different, and why prospects should care—in one clear sentence—you don't have positioning. You have a description.
                      </p>
                      <div>
                        <p className="font-body font-semibold text-foreground text-sm mb-2">What you get:</p>
                        <ul className="space-y-1.5">
                          {[
                            "Target customer definition (who you're actually built for)",
                            "Competitive differentiation framework (what makes you the obvious choice)",
                            "Core messaging pillars (the 3-4 things you want burned into people's minds)",
                            "Value proposition that actually resonates (not jargon, not fluff—clarity)",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="size-4 text-neon mt-0.5 shrink-0" />
                              <span className="font-body text-foreground/60 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="font-body text-foreground/60 text-sm leading-relaxed italic">
                        <span className="font-semibold text-foreground not-italic">Why it matters: </span>
                        Clear positioning cuts through noise. Generic messaging gets ignored. Every day you don't fix this, you're losing deals to competitors who just explain themselves better.
                      </p>
                    </ExpandableItem>
                  </SectionBlock>

                  <SectionBlock delay={0.16}>
                    <ExpandableItem icon={Package} title="Offer Structuring">
                      <p className="font-body text-foreground/60 text-sm leading-relaxed">
                        How you package what you sell is as important as what you sell.
                      </p>
                      <p className="font-body text-foreground/60 text-sm leading-relaxed">
                        Most businesses make it way too complicated. Too many options, unclear pricing, no clear "start here" path. Prospects get overwhelmed and bail.
                      </p>
                      <div>
                        <p className="font-body font-semibold text-foreground text-sm mb-2">What you get:</p>
                        <ul className="space-y-1.5">
                          {[
                            "Offer hierarchy and packaging strategy (entry → mid-tier → premium)",
                            "Pricing structure aligned with value perception",
                            "Clear pathways that guide prospects from \"just looking\" to \"ready to buy\"",
                            "Messaging for each offer level (so people know what to choose)",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="size-4 text-neon mt-0.5 shrink-0" />
                              <span className="font-body text-foreground/60 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="font-body text-foreground/60 text-sm leading-relaxed italic">
                        <span className="font-semibold text-foreground not-italic">Why it matters: </span>
                        Confused prospects don't buy. Clear offers remove friction and make "yes" the easy answer.
                      </p>
                    </ExpandableItem>
                  </SectionBlock>

                  <SectionBlock delay={0.24}>
                    <ExpandableItem icon={Globe} title="Website Development">
                      <p className="font-body text-foreground/60 text-sm leading-relaxed">
                        Your website isn't a brochure. It's a revenue engine.
                      </p>
                      <p className="font-body text-foreground/60 text-sm leading-relaxed">
                        Every page should have a job—educate, build trust, or drive action. If someone lands on your site and leaves without knowing what to do next, that's not their fault. That's yours.
                      </p>
                      <div>
                        <p className="font-body font-semibold text-foreground text-sm mb-2">What you get:</p>
                        <ul className="space-y-1.5">
                          {[
                            "Strategic site architecture (logical flow, clear user journeys)",
                            "Conversion-optimized page design (CTAs in the right places, messaging that moves people)",
                            "Mobile-responsive, fast-loading build (because slow sites kill conversions)",
                            "Analytics and tracking setup (so you know what's working)",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="size-4 text-neon mt-0.5 shrink-0" />
                              <span className="font-body text-foreground/60 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="font-body text-foreground/60 text-sm leading-relaxed italic">
                        <span className="font-semibold text-foreground not-italic">Why it matters: </span>
                        A strategic website turns visitors into leads. A generic one just... exists. Which one do you want?
                      </p>
                    </ExpandableItem>
                  </SectionBlock>

                  <SectionBlock delay={0.32}>
                    <ExpandableItem icon={FileText} title="Conversion-Focused Landing Pages">
                      <p className="font-body text-foreground/60 text-sm leading-relaxed">
                        Generic pages convert at 2%. Purpose-built pages convert at 10-15%.
                      </p>
                      <p className="font-body text-foreground/60 text-sm leading-relaxed">
                        When you're running a campaign—an ad, an email, a promo—you need a page that matches that specific intent. Not your homepage. A dedicated page built for one goal.
                      </p>
                      <div>
                        <p className="font-body font-semibold text-foreground text-sm mb-2">What you get:</p>
                        <ul className="space-y-1.5">
                          {[
                            "Campaign-specific landing pages (one message, one CTA, no distractions)",
                            "A/B testing framework (so you can improve performance over time)",
                            "Clear conversion pathways (forms, buttons, whatever gets the action)",
                            "Performance tracking setup (you'll know exactly what converts and what doesn't)",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="size-4 text-neon mt-0.5 shrink-0" />
                              <span className="font-body text-foreground/60 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="font-body text-foreground/60 text-sm leading-relaxed italic">
                        <span className="font-semibold text-foreground not-italic">Why it matters: </span>
                        You're paying for clicks. Don't waste them on pages that weren't designed to convert.
                      </p>
                    </ExpandableItem>
                  </SectionBlock>
                </div>
              </div>
            </section>

            {/* How We Work — Process */}
            <section className="py-12 md:py-20 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    How We Work
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight mb-10">
                    Our <span className="text-neon">Process.</span>
                  </h2>
                </SectionBlock>

                <div className="space-y-0">
                  {processSteps.map((step, i) => (
                    <SectionBlock key={step.number} delay={0.1 * i}>
                      <div className="relative flex gap-5 md:gap-8 pb-10 last:pb-0">
                        {/* Vertical line */}
                        {i < processSteps.length - 1 && (
                          <div className="absolute left-[22px] md:left-[26px] top-12 bottom-0 w-px bg-foreground/10" />
                        )}
                        {/* Number circle */}
                        <div className="shrink-0 w-11 h-11 md:w-[52px] md:h-[52px] rounded-full bg-foreground flex items-center justify-center">
                          <span className="font-heading font-bold text-xs md:text-sm text-white">
                            {step.number}
                          </span>
                        </div>
                        <div className="pt-1">
                          <h3 className="font-heading font-bold text-foreground text-base md:text-lg mb-1">
                            {step.title}
                          </h3>
                          <p className="font-body text-foreground/60 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </SectionBlock>
                  ))}
                </div>
              </div>
            </section>

            {/* Is This Right For You? */}
            <section className="py-12 md:py-20 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    Is This Right For You?
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight mb-10">
                    Fit <span className="text-neon">Assessment.</span>
                  </h2>
                </SectionBlock>

                <div className="grid md:grid-cols-2 gap-4">
                  <SectionBlock delay={0}>
                    <div className="rounded-2xl border border-neon/30 bg-neon/5 p-5 md:p-6 h-full">
                      <p className="font-heading font-bold text-sm text-neon mb-4 uppercase tracking-wider">
                        ✅ You're a good fit if:
                      </p>
                      <ul className="space-y-3">
                        {goodFit.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="size-4 text-neon mt-0.5 shrink-0" />
                            <span className="font-body text-foreground/70 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SectionBlock>

                  <SectionBlock delay={0.1}>
                    <div className="rounded-2xl border border-foreground/10 bg-white p-5 md:p-6 h-full">
                      <p className="font-heading font-bold text-sm text-foreground/40 mb-4 uppercase tracking-wider">
                        ❌ You're not a fit if:
                      </p>
                      <ul className="space-y-3">
                        {notFit.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-foreground/30 mt-0.5 shrink-0">—</span>
                            <span className="font-body text-foreground/50 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SectionBlock>
                </div>
              </div>
            </section>

            {/* What to Expect */}
            <section className="py-12 md:py-20 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    What To Expect
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight mb-10">
                    Engagement <span className="text-neon">Overview.</span>
                  </h2>
                </SectionBlock>

                <SectionBlock delay={0.1}>
                  <div className="rounded-2xl border border-foreground/10 bg-white p-6 md:p-8 space-y-5">
                    {[
                      { label: "Timeline", value: "8-12 weeks from kickoff to launch", icon: "⏱️" },
                      { label: "Investment", value: "Custom quote based on scope (brand only vs. brand + website)", icon: "💰" },
                      {
                        label: "Deliverables",
                        value:
                          "Brand kit, positioning framework, website, landing pages—everything you need to start marketing with confidence",
                        icon: "📦",
                      },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-start gap-4 ${i < 2 ? "pb-5 border-b border-foreground/5" : ""}`}>
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <p className="font-heading font-bold text-foreground text-sm mb-0.5">
                            {item.label}
                          </p>
                          <p className="font-body text-foreground/60 text-sm leading-relaxed">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                    <p className="font-body text-foreground/50 text-sm leading-relaxed pt-2 italic">
                      Every engagement starts with a Strategic Audit. We assess where you are, identify the gaps, and map the path forward. Then we build it.
                    </p>
                  </div>
                </SectionBlock>
              </div>
            </section>

            {/* Next Service */}
            <section className="py-12 md:py-20 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-4xl">
                <SectionBlock>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-foreground/10 bg-white p-6 md:p-8">
                    <div>
                      <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-1">
                        Next Step
                      </p>
                      <h3 className="font-heading text-lg md:text-xl text-foreground font-bold">
                        Visibility & Organic Growth
                      </h3>
                    </div>
                    <Link
                      to="/services/visibility-organic-growth"
                      className="inline-flex items-center gap-2 font-body text-sm font-semibold text-agency-blue hover:gap-3 transition-all duration-300"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </SectionBlock>
              </div>
            </section>

            {/* Final CTA */}
            <section className="py-12 md:py-20 border-t border-foreground/10">
              <div className="container mx-auto px-4 max-w-3xl text-center">
                <SectionBlock>
                  <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    Ready To Build It Right?
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground leading-tight mb-4">
                    Stop Guessing. Start With{" "}
                    <span className="text-neon">Clarity.</span>
                  </h2>
                  <p className="font-body text-foreground/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
                    Stop wasting budget on marketing that's built on a weak foundation. Let's start with clarity.
                  </p>
                  <LiquidButton
                    href="/contact"
                    size="lg"
                    className="font-heading text-sm md:text-base whitespace-nowrap min-w-[260px] justify-center"
                  >
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

export default BrandFoundation;
