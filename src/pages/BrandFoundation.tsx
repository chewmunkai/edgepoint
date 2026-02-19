import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Check, ArrowRight, ChevronDown, Palette, MessageSquare, Package, Globe, FileText } from "lucide-react";
import { Cta4 } from "@/components/ui/cta-4";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { Link } from "react-router-dom";

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

/* ─── Data ─── */

const deliverables = [
  {
    icon: Palette,
    title: "Branding Kit Development",
    lead: "Your visual identity is the first signal people see—before they read a word.",
    items: [
      "Logo design and variations (primary, secondary, icon)",
      "Color palette and typography system",
      "Brand guidelines document",
      "Asset library for all channels",
    ],
    why: "A polished brand makes people trust you faster. A generic one makes them scroll past.",
  },
  {
    icon: MessageSquare,
    title: "Brand Positioning & Messaging",
    lead: "If you can't articulate who you serve and why in one sentence—you don't have positioning.",
    items: [
      "Target customer definition",
      "Competitive differentiation framework",
      "Core messaging pillars",
      "Value proposition that resonates",
    ],
    why: "Clear positioning cuts through noise. Generic messaging gets ignored.",
  },
  {
    icon: Package,
    title: "Offer Structuring",
    lead: "How you package what you sell is as important as what you sell.",
    items: [
      "Offer hierarchy (entry → mid-tier → premium)",
      "Pricing aligned with value perception",
      "Clear buyer pathways",
      "Messaging for each offer level",
    ],
    why: "Confused prospects don't buy. Clear offers make 'yes' the easy answer.",
  },
  {
    icon: Globe,
    title: "Website Development",
    lead: "Your website isn't a brochure. It's a revenue engine.",
    items: [
      "Strategic site architecture",
      "Conversion-optimized page design",
      "Mobile-responsive, fast-loading build",
      "Analytics and tracking setup",
    ],
    why: "A strategic website turns visitors into leads. A generic one just… exists.",
  },
  {
    icon: FileText,
    title: "Conversion Landing Pages",
    lead: "Generic pages convert at 2%. Purpose-built pages convert at 10-15%.",
    items: [
      "Campaign-specific landing pages",
      "A/B testing framework",
      "Clear conversion pathways",
      "Performance tracking setup",
    ],
    why: "You're paying for clicks. Don't waste them on pages that weren't designed to convert.",
  },
];

const processSteps = [
  { number: "01", title: "Discovery & Audit", description: "We dig into your current positioning, messaging, and market landscape. We look at competitors, customer feedback, and where the real gaps are." },
  { number: "02", title: "Strategic Framework", description: "We build your positioning, messaging architecture, and offer structure before any design happens. Strategy first. Always." },
  { number: "03", title: "Design & Build", description: "Now we create the visual identity and build the digital assets—all grounded in the strategic framework. No creative whims. Just execution on strategy." },
  { number: "04", title: "Launch & Optimize", description: "We implement, test, and refine based on real performance data. If something isn't working, we fix it. If it's crushing, we double down." },
];


/* ─── Expandable Card ─── */
const DeliverableCard = ({ item, index }: { item: typeof deliverables[0]; index: number }) => {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <FadeIn delay={index * 0.08}>
      <div
        className={`group relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
          open
            ? "bg-foreground text-white border-foreground"
            : "bg-white border-foreground/10 hover:border-foreground/30"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${open ? "bg-neon/20" : "bg-foreground/5"}`}>
                <Icon className={`size-5 ${open ? "text-neon" : "text-foreground/60"}`} />
              </div>
              <h3 className="font-heading font-bold text-base md:text-lg">{item.title}</h3>
            </div>
            <ChevronDown
              className={`size-5 shrink-0 mt-1 transition-transform duration-300 ${open ? "rotate-180 text-white/60" : "text-foreground/30"}`}
            />
          </div>
          <p className={`font-body text-sm leading-relaxed ${open ? "text-white/70" : "text-foreground/50"}`}>
            {item.lead}
          </p>
          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pt-5 mt-5 border-t border-white/10 space-y-4">
              <ul className="grid gap-2">
                {item.items.map((li, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="size-4 text-neon mt-0.5 shrink-0" />
                    <span className="font-body text-white/70 text-sm">{li}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-white/50 text-sm italic leading-relaxed">
                <span className="text-neon not-italic font-semibold">Why it matters: </span>
                {item.why}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </FadeIn>
  );
};

/* ─── Page ─── */
const BrandFoundation = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* ── Hero (kept) ── */}
          <PageHero
            label="Service 01"
            title="Build the Foundation Before You Scale."
            highlightWord="Scale."
            description="Look, we get it. You want to run ads, create content, and start generating leads. But here's the truth: if your positioning isn't clear and your website doesn't convert, you're just burning money on traffic that goes nowhere."
          />

          {/* ═══ WHY FOUNDATION MATTERS (light) ═══ */}
          <section className="bg-background overflow-hidden">
            <div className="container mx-auto px-4 py-20 md:py-32">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-end mb-20">
                  <FadeIn>
                    <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                      Why Foundation Matters
                    </p>
                    <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.95]">
                      You can't scale
                      <br />
                      what isn't
                      <span className="relative inline-block ml-3">
                        <span className="text-neon">clear.</span>
                        <motion.span
                          className="absolute -bottom-2 left-0 w-full h-[3px] bg-neon origin-left"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        />
                      </span>
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <p className="font-body text-foreground/50 text-base md:text-lg leading-relaxed lg:pb-2">
                      Pull up your website right now and ask yourself these three questions. If you hesitate on any of them, you already know the answer.
                    </p>
                  </FadeIn>
                </div>

                {/* Question cards */}
                <div className="grid md:grid-cols-3 gap-0 border border-foreground/10 rounded-2xl overflow-hidden">
                  {[
                    { q: "Do people immediately understand what you do and why it matters?", num: "01" },
                    { q: "Does your website guide visitors toward a decision, or does it just… exist?", num: "02" },
                    { q: "Can you explain why someone should choose you over a competitor in one sentence?", num: "03" },
                  ].map((item, i) => (
                    <FadeIn key={i} delay={0.1 * i}>
                      <div className={`p-8 md:p-10 h-full flex flex-col ${i < 2 ? "md:border-r border-b md:border-b-0 border-foreground/10" : ""}`}>
                        <span className="font-heading font-bold text-5xl md:text-6xl text-destructive/20 mb-6 block">
                          {item.num}
                        </span>
                        <p className="font-body text-foreground/60 text-sm md:text-base leading-relaxed mt-auto">
                          {item.q}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ DELIVERABLES (dark) — KEPT ═══ */}
          <section className="bg-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32">
              <div className="max-w-6xl mx-auto">
                <FadeIn>
                  <p className="text-neon font-body font-medium tracking-widest uppercase text-xs mb-4">
                    What's Included
                  </p>
                  <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight mb-4 max-w-2xl">
                    Everything you need to market with confidence.
                  </h2>
                  <p className="font-body text-white/40 text-base md:text-lg leading-relaxed mb-14 max-w-xl">
                    Click any card to explore the deliverables and understand why each one matters.
                  </p>
                </FadeIn>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {deliverables.slice(0, 2).map((item, i) => (
                    <DeliverableCard key={item.title} item={item} index={i} />
                  ))}
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {deliverables.slice(2).map((item, i) => (
                    <DeliverableCard key={item.title} item={item} index={i + 2} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ HOW WE WORK (light) — KEPT ═══ */}
          <section className="bg-background">
            <div className="container mx-auto px-4 py-20 md:py-32">
              <div className="max-w-6xl mx-auto">
                <FadeIn>
                  <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                    How We Work
                  </p>
                  <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground leading-tight mb-16">
                    Four phases.<br />Zero guesswork.
                  </h2>
                </FadeIn>
                <div className="grid md:grid-cols-4 gap-px bg-foreground/10 rounded-2xl overflow-hidden border border-foreground/10">
                  {processSteps.map((step, i) => (
                    <FadeIn key={step.number} delay={0.1 * i}>
                      <div className="bg-background p-6 md:p-8 h-full flex flex-col">
                        <span className="font-heading font-bold text-4xl md:text-5xl text-foreground/10 mb-6">
                          {step.number}
                        </span>
                        <h3 className="font-heading font-bold text-foreground text-base md:text-lg mb-3">
                          {step.title}
                        </h3>
                        <p className="font-body text-foreground/50 text-sm leading-relaxed mt-auto">
                          {step.description}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══ THE PROBLEM WITH SKIPPING FOUNDATION (dark) ═══ */}
          <section className="bg-foreground overflow-hidden">
            <div className="container mx-auto px-4 py-20 md:py-32">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <FadeIn>
                  <p className="text-neon font-body font-medium tracking-widest uppercase text-xs mb-4">
                    The Problem With Skipping Foundation
                  </p>
                  <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-20 items-end mb-20">
                    <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-[0.95]">
                      Most businesses want to jump straight to ads and content.
                    </h2>
                    <p className="font-body text-white/40 text-base md:text-lg leading-relaxed lg:pb-1">
                      We get it—foundation work isn't exciting. But here's what happens when you skip it:
                    </p>
                  </div>
                </FadeIn>

                {/* What happens list */}
                <div className="space-y-0 mb-20">
                  {[
                    "You spend RM10K/month on ads that send traffic to a website that doesn't convert.",
                    "Your messaging sounds exactly like your competitors'.",
                    "Prospects visit your site and leave confused.",
                    "You keep trying new tactics, but nothing really moves.",
                  ].map((item, i) => (
                    <FadeIn key={i} delay={0.08 * i}>
                      <div className="flex items-start gap-5 py-6 border-b border-white/[0.06]">
                        <span className="font-heading font-bold text-white/[0.06] text-3xl md:text-4xl shrink-0 w-12 mt-[-4px]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="font-body text-white/50 text-base md:text-lg leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* The clarity pivot */}
                <FadeIn delay={0.4}>
                  <div className="max-w-3xl mx-auto text-center mb-20">
                    <p className="font-heading font-bold text-white text-xl md:text-2xl leading-relaxed mb-2">
                      The issue isn't execution. It's <span className="text-neon">clarity.</span>
                    </p>
                    <p className="font-body text-white/35 text-base leading-relaxed">
                      Before you can scale, you need to answer three questions clearly:
                    </p>
                  </div>
                </FadeIn>

                {/* Three questions */}
                <div className="grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-white/10">
                  {[
                    { num: "01", q: "Who are you built for?" },
                    { num: "02", q: "What makes you different?" },
                    { num: "03", q: "Why should someone choose you?" },
                  ].map((item, i) => (
                    <FadeIn key={i} delay={0.5 + 0.1 * i}>
                      <div className={`p-8 md:p-10 h-full flex flex-col ${i < 2 ? "md:border-r border-b md:border-b-0 border-white/10" : ""}`}>
                        <span className="font-heading font-bold text-5xl md:text-6xl text-white/[0.04] mb-6 block">
                          {item.num}
                        </span>
                        <p className="font-body text-white/70 text-base md:text-lg leading-relaxed mt-auto font-medium">
                          {item.q}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                <FadeIn delay={0.8}>
                  <p className="font-body text-white/25 text-sm text-center mt-16">
                    If you can't answer those in one sentence each, you're not ready to scale. <span className="text-neon/50 font-medium">You need foundation.</span>
                  </p>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ═══ NOT SURE WHERE TO START? ═══ */}
          <section className="bg-foreground">
            <div className="container mx-auto px-4 py-20 md:py-28">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
                  <div className="flex-1 max-w-xl">
                    <FadeIn>
                      <h3 className="font-heading font-bold text-2xl md:text-4xl text-white mb-4">
                        Not Sure Where To Start?
                      </h3>
                      <p className="font-body text-white/50 text-base leading-relaxed">
                        Take our 2-minute Marketing Readiness Calculator—find out exactly where your gaps are and which service you actually need first.
                      </p>
                    </FadeIn>
                  </div>
                  <FadeIn delay={0.2}>
                    <div className="flex flex-col gap-5">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        {[
                          "Takes only 2 minutes",
                          "Identifies your biggest gaps",
                          "Tells you which service to start with",
                          "Completely free, no commitment",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="size-4 text-neon shrink-0" />
                            <span className="font-body text-white text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                      <LiquidButton
                        href="/contact"
                        size="lg"
                        variant="dark"
                        className="font-heading text-sm whitespace-nowrap w-fit bg-neon text-foreground hover:bg-neon/90 font-bold"
                      >
                        Take the Readiness Calculator
                      </LiquidButton>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ FINAL CTA (light) ═══ */}
          <section className="bg-background">
            <div className="container mx-auto px-4 py-20 md:py-32">
              <div className="max-w-4xl mx-auto text-center">
                <FadeIn>
                  <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                    Ready To Build It Right?
                  </p>
                  <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground leading-tight mb-5">
                    Stop Guessing.<br />Start With <span className="text-neon">Clarity.</span>
                  </h2>
                  <p className="font-body text-foreground/50 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                    Stop wasting budget on marketing that's built on a weak foundation.
                  </p>
                  <LiquidButton
                    href="/contact"
                    size="lg"
                    className="font-heading text-sm md:text-base whitespace-nowrap min-w-[260px] justify-center"
                  >
                    Book a Strategic Audit
                  </LiquidButton>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="mt-16 pt-10 border-t border-foreground/10">
                    <Link
                      to="/services/visibility-organic-growth"
                      className="group inline-flex items-center gap-4 text-left"
                    >
                      <div>
                        <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-1">
                          Next Service
                        </p>
                        <p className="font-heading font-bold text-foreground text-lg md:text-xl group-hover:text-neon transition-colors">
                          Visibility & Organic Growth
                        </p>
                      </div>
                      <ArrowRight className="size-5 text-foreground/30 group-hover:text-neon group-hover:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default BrandFoundation;
