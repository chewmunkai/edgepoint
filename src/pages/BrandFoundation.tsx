import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Check, ArrowRight, ChevronDown, Palette, MessageSquare, Package, Globe, FileText, Clock, DollarSign, FolderOpen } from "lucide-react";
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
    description: "This isn't just about making things look pretty. Your visual identity needs to communicate professionalism, consistency, and credibility instantly.",
    items: [
      "Logo design and variations (primary, secondary, icon versions)",
      "Color palette and typography system",
      "Brand guidelines document (so nothing looks off-brand)",
      "Asset library for consistent application across all channels",
    ],
    why: "A polished brand builds trust instantly. A generic one gets ignored.",
  },
  {
    icon: MessageSquare,
    title: "Brand Positioning & Messaging",
    lead: "If you can't articulate who you serve and why in one sentence—you don't have positioning.",
    description: "This is where most businesses lose the game before it even starts. If you can't clearly explain who you serve, what makes you different, and why prospects should care—you have a description, not positioning.",
    items: [
      "Target customer definition (who you're actually built for)",
      "Competitive differentiation framework (what makes you the obvious choice)",
      "Core messaging pillars (the 3-4 things you want burned into people's minds)",
      "Value proposition that actually resonates (not jargon, not fluff—clarity)",
    ],
    why: "Clear positioning cuts through noise. Generic messaging gets ignored. Every day you don't fix this, you're losing deals to competitors who just explain themselves better.",
  },
  {
    icon: Package,
    title: "Offer Structuring",
    lead: "How you package what you sell is as important as what you sell.",
    description: "Most businesses make it way too complicated. Too many options, unclear pricing, no clear \"start here\" path. Prospects get overwhelmed and bail.",
    items: [
      "Offer hierarchy and packaging strategy (entry → mid-tier → premium)",
      "Pricing structure aligned with value perception",
      "Clear pathways that guide prospects from \"just looking\" to \"ready to buy\"",
      "Messaging for each offer level (so people know what to choose)",
    ],
    why: "Confused prospects don't buy. Clear offers remove friction and make \"yes\" the easy answer.",
  },
  {
    icon: Globe,
    title: "Website Development",
    lead: "Your website isn't a brochure. It's a revenue engine.",
    description: "Every page should have a job—educate, build trust, or drive action. If someone lands on your site and leaves without knowing what to do next, that's not their fault. That's yours.",
    items: [
      "Strategic site architecture (logical flow, clear user journeys)",
      "Conversion-optimized page design (CTAs in the right places, messaging that moves people)",
      "Mobile-responsive, fast-loading build (because slow sites kill conversions)",
      "Analytics and tracking setup (so you know what's working)",
    ],
    why: "A strategic website turns visitors into leads. A generic one just exists. Which one do you want?",
  },
  {
    icon: FileText,
    title: "Conversion-Focused Landing Pages",
    lead: "Generic pages convert at 2%. Purpose-built pages convert at 10-15%.",
    description: "When you're running a campaign—an ad, an email, a promo—you need a page that matches that specific intent. Not your homepage. A dedicated page built for one goal.",
    items: [
      "Campaign-specific landing pages (one message, one CTA, no distractions)",
      "A/B testing framework (so you can improve performance over time)",
      "Clear conversion pathways (forms, buttons, whatever gets the action)",
      "Performance tracking setup (you'll know exactly what converts and what doesn't)",
    ],
    why: "You're paying for clicks. Don't waste them on pages that weren't designed to convert.",
  },
];

const processSteps = [
  { number: "01", title: "Discovery & Audit", description: "We audit your positioning, messaging, and market landscape—then identify where competitors are winning and where you're leaving money on the table." },
  { number: "02", title: "Strategic Framework", description: "We define your positioning, messaging, and offers before any design happens. No logo until we know what it needs to communicate." },
  { number: "03", title: "Design & Build", description: "We create your visual identity and build your digital assets—grounded in strategy, not designer preferences." },
  { number: "04", title: "Launch & Optimize", description: "We launch, test, and optimize. What works gets scaled. What doesn't gets killed. No ego, just data." },
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
              <p className="font-body text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>
              <p className="font-body text-white/60 text-xs font-medium tracking-widest uppercase">
                What you get:
              </p>
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
          {/* ── Hero ── */}
          <PageHero
            label="Service 01"
            title="Build the Foundation Before You Scale."
            highlightWord="Scale."
            description="Look, we get it. You want to run ads, create content, and start generating leads. But here's the truth: if your positioning isn't clear and your website doesn't convert, you're just burning money on traffic that goes nowhere."
          />

          {/* ═══ THE PROBLEM WITH SKIPPING FOUNDATION ═══ */}
          <section className="bg-background overflow-hidden">
            <div className="container mx-auto px-4 py-20 md:py-28">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
                  {/* Left — sticky title */}
                  <div className="lg:sticky lg:top-32">
                    <FadeIn>
                      <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                        The Problem With Skipping Foundation
                      </p>
                      <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05]">
                        Most businesses want to jump straight to ads and content.
                      </h2>
                      <p className="font-body text-foreground/40 text-sm mt-4 leading-relaxed">
                        We get it—foundation work isn't exciting.
                      </p>
                    </FadeIn>
                  </div>

                  {/* Right — Prose */}
                  <div>
                    <FadeIn delay={0.15}>
                      <p className="font-body text-foreground/50 text-base md:text-lg leading-[1.8] mb-6">
                        But here's what we see all the time:
                      </p>
                      <p className="font-body text-foreground/50 text-base md:text-lg leading-[1.8] mb-8">
                        Businesses spending £10K/month on ads that drive traffic to websites that don't convert. Messaging that sounds exactly like their competitors'. Prospects who visit and leave confused. Constant tactical tweaks that never move the needle.
                      </p>

                      <div className="rounded-2xl border border-foreground/10 p-6 md:p-8">
                        <p className="font-heading font-bold text-foreground text-lg md:text-xl leading-relaxed mb-2">
                          The problem isn't execution. It's <span className="text-neon">clarity.</span>
                        </p>
                        <p className="font-body text-foreground/40 text-sm leading-relaxed">
                          Before you can scale, you need clarity on who you serve, what makes you different, and why prospects should choose you. Without that foundation, every marketing dollar is a gamble.
                        </p>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ CAN YOU ANSWER THESE THREE QUESTIONS? ═══ */}
          <section className="bg-background overflow-hidden">
            <div className="container mx-auto px-4 pb-20 md:pb-32">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-end mb-16">
                  <FadeIn>
                    <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                      Can You Answer These Three Questions?
                    </p>
                    <h2 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.95]">
                      You can't scale
                      <br />
                      what you can't
                      <span className="relative inline-block ml-3">
                        <span className="text-neon">explain.</span>
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
                      Now that you know the stakes, here's the test. Pull up your website right now and answer these three questions without hesitating:
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

                <FadeIn delay={0.4}>
                  <p className="font-body text-foreground/30 text-sm mt-6 text-center">
                    If you hesitated on any of those, you already know what needs to happen.
                  </p>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ═══ WHAT'S INCLUDED (dark) ═══ */}
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

          {/* ═══ HOW WE WORK (light) ═══ */}
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

          {/* ═══ WHAT TO EXPECT ═══ */}
          <section className="bg-foreground">
            <div className="container mx-auto px-4 py-20 md:py-28">
              <div className="max-w-6xl mx-auto">
                <FadeIn>
                  <p className="text-neon font-body font-medium tracking-widest uppercase text-xs mb-4">
                    What To Expect
                  </p>
                </FadeIn>
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  {[
                    { icon: Clock, label: "Timeline", value: "8-12 weeks" },
                    { icon: DollarSign, label: "Investment", value: "Custom quote based on scope" },
                    { icon: FolderOpen, label: "Deliverables", value: "Brand kit, positioning framework, website, landing pages" },
                  ].map((item, i) => (
                    <FadeIn key={i} delay={0.1 * i}>
                      <div className="rounded-2xl border border-white/10 p-6 md:p-8 h-full">
                        <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center mb-4">
                          <item.icon className="size-5 text-neon" />
                        </div>
                        <p className="font-body text-white/40 text-xs font-medium tracking-widest uppercase mb-2">
                          {item.label}
                        </p>
                        <p className="font-heading font-bold text-white text-base md:text-lg leading-snug">
                          {item.value}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
                <FadeIn delay={0.4}>
                  <p className="font-body text-white/40 text-sm leading-relaxed">
                    Every engagement starts with a <span className="text-neon font-medium">Strategic Audit</span> to assess where you are and map the path forward.
                  </p>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ═══ FINAL CTA ═══ */}
          <section className="bg-background">
            <div className="container mx-auto px-4 py-20 md:py-32">
              <div className="max-w-4xl mx-auto text-center">
                <FadeIn>
                  <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                    Stop Guessing. Start With Clarity.
                  </p>
                  <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground leading-tight mb-5">
                    Stop wasting budget on marketing<br />built on a weak <span className="text-neon">foundation.</span>
                  </h2>
                  <p className="font-body text-foreground/50 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                    Book a Strategic Audit and find out what actually needs to happen—before you spend another dollar.
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
