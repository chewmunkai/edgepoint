import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import {
  Check, ArrowRight, ChevronDown, Palette, MessageSquare,
  Package, Globe, FileText,
} from "lucide-react";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn-carousel";
import { useEffect } from "react";
import serviceVisibility from "@/assets/service-visibility.jpg";
import servicePerformance from "@/assets/service-performance.jpg";
import serviceEvents from "@/assets/service-events.jpg";

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

const faqs = [
  {
    question: "How long does this take?",
    answer: "8-12 weeks from kickoff to launch. Foundation work takes time to do right—rushing it defeats the purpose.",
  },
  {
    question: "Do I need everything, or can I pick individual services?",
    answer: "We recommend the full foundation if you're starting from scratch or have significant gaps. The Strategic Audit identifies your biggest weaknesses so we can prioritize.",
  },
  {
    question: "What if I already have a logo or website?",
    answer: "We assess what's salvageable and what needs rebuilding. Sometimes a refresh works. Sometimes you need to start over. We'll be honest about which one it is.",
  },
  {
    question: "Can you work with our existing team or agency?",
    answer: "Yes. We can provide strategic foundation and let your team execute, or handle everything in-house—depends on your preference and their capabilities.",
  },
  {
    question: "What happens after foundation is complete?",
    answer: "Most clients move into Visibility & Organic Growth (SEO, content, social) or Performance & Scale (paid media) once foundation is solid. We'll recommend the right next step based on your goals.",
  },
];

const brands = ["VERTEX", "ONWARD", "NUCLEUS", "STRATUM", "AXIOM", "PRISM", "HELIX", "NOVA", "CIPHER", "VORTEX", "APEX", "ZENITH", "FLUX", "ORBIT", "QUANTUM"];

const pillars = [
  {
    num: "01",
    title: "Clarity",
    subtitle: "Know who you serve and why you matter.",
    body: "Clear positioning on who you're built for, what makes you different, and why prospects should choose you. Without this, your messaging sounds generic.",
  },
  {
    num: "02",
    title: "Credibility",
    subtitle: "Look the part before you ask for trust.",
    body: "Your visual identity signals professionalism before a word is read. Polished brands build trust instantly. Generic ones get scrolled past.",
  },
  {
    num: "03",
    title: "Structure",
    subtitle: "Make buying decisions easy.",
    body: "Clear offer hierarchy, logical pricing, and obvious next steps. Confused prospects don't buy. Clear offers make \"yes\" easy.",
  },
  {
    num: "04",
    title: "Conversion",
    subtitle: "Turn visitors into revenue.",
    body: "Your website and landing pages are revenue engines, not brochures. Strategic pages convert at 10-15%. Generic ones convert at 2%.",
  },
];

const nextServices = [
  {
    slug: "visibility-organic-growth",
    title: "Visibility & Organic Growth",
    description: "Build sustainable attention through SEO, content, and social media—channels that compound over time.",
    image: serviceVisibility,
  },
  {
    slug: "performance-scale",
    title: "Performance & Scale",
    description: "Accelerate growth with strategic paid campaigns once your foundation and funnel are proven.",
    image: servicePerformance,
  },
  {
    slug: "events-activation",
    title: "Events & Activation",
    description: "Turn offline moments into measurable outcomes with strategic event planning and execution.",
    image: serviceEvents,
  },
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

/* ─── Brands Carousel ─── */
const BrandsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {brands.map((brand, index) => (
          <CarouselItem className="basis-1/3 sm:basis-1/4 lg:basis-1/6" key={index}>
            <div className="flex rounded-lg aspect-square bg-white/5 border border-white/10 items-center justify-center p-4">
              <span className="font-heading font-bold text-sm md:text-base text-white/30 tracking-widest">
                {brand}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

/* ─── Contact Form ─── */
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    spend: "",
    challenge: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-xl p-6 md:p-8 space-y-4 bg-white border border-black/10">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="bf-name" className="font-body font-medium text-sm text-black">Name *</Label>
          <Input id="bf-name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange}
            className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="bf-email" className="font-body font-medium text-sm text-black">Email *</Label>
          <Input id="bf-email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange}
            className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="bf-company" className="font-body font-medium text-sm text-black">Company Name</Label>
        <Input id="bf-company" name="company" type="text" placeholder="Your company" value={formData.company} onChange={handleChange}
          className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="bf-spend" className="font-body font-medium text-sm text-black">Current Monthly Marketing Spend</Label>
        <Input id="bf-spend" name="spend" type="text" placeholder="e.g. £2,000/month" value={formData.spend} onChange={handleChange}
          className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="bf-challenge" className="font-body font-medium text-sm text-black">Biggest Marketing Challenge Right Now</Label>
        <Textarea id="bf-challenge" name="challenge" placeholder="Tell us about your main challenge..." value={formData.challenge} onChange={handleChange}
          className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 min-h-[100px] text-sm text-black placeholder:text-black/40" />
      </div>
      <div className="pt-2">
        <LiquidButton type="submit" size="lg" variant="dark"
          className="w-full md:w-auto font-heading text-sm whitespace-nowrap min-w-[260px] justify-center text-white bg-black hover:bg-black/90">
          Book Strategic Audit
        </LiquidButton>
      </div>
    </form>
  );
};

/* ─── Page ─── */
const BrandFoundation = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>

          {/* ══ 1. HERO ══ */}
          <PageHero
            label="Service 01"
            title="Build the Foundation Before You Scale."
            highlightWord="Scale."
            description="Look, we get it. You want to run ads, create content, and start generating leads. But here's the truth: if your positioning isn't clear and your website doesn't convert, you're just burning money on traffic that goes nowhere."
          />

          {/* ══ 2. PROBLEM STATEMENT — white bg ══ */}
          <section className="bg-background">
            <div className="container mx-auto px-4 py-20 md:py-28 max-w-6xl">
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
                {/* Left */}
                <FadeIn className="lg:sticky lg:top-32">
                  <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                    The Cost of Skipping Foundation
                  </p>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05]">
                    Most businesses jump straight to ads and content.
                  </h2>
                  <p className="font-body text-foreground/40 text-sm mt-4 leading-relaxed">
                    We get it—foundation work isn't exciting.
                  </p>
                </FadeIn>

                {/* Right */}
                <FadeIn delay={0.15}>
                  <p className="font-body text-foreground/55 text-base md:text-lg leading-[1.85] mb-8">
                    But here's what happens: You spend RM10K/month on ads that drive traffic to websites that don't convert. Your messaging sounds exactly like your competitors'. Prospects visit and leave confused. You keep tweaking tactics, but nothing moves.
                  </p>
                  <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 md:p-8 mb-8">
                    <p className="font-heading font-bold text-foreground text-lg md:text-xl leading-relaxed mb-2">
                      The problem isn't execution. It's <span className="text-neon">clarity.</span>
                    </p>
                    <p className="font-body text-foreground/45 text-sm md:text-base leading-relaxed">
                      Without clear positioning, a converting website, and structured offers, every marketing dollar is a gamble.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ══ 3. WHY FOUNDATION COMES FIRST — dark bg ══ */}
          <section className="bg-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32 max-w-6xl">
              <FadeIn>
                <p className="text-neon font-body font-medium tracking-widest uppercase text-xs mb-4">
                  Why Foundation Comes First
                </p>
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight mb-4 max-w-2xl">
                  Four pillars that separate guessing from growth.
                </h2>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 mt-14">
                {pillars.map((pillar, i) => (
                  <FadeIn key={pillar.num} delay={0.1 * i}>
                    <div className={`bg-foreground p-8 md:p-10 h-full flex flex-col ${
                      i === 0 ? "rounded-tl-2xl" :
                      i === 1 ? "rounded-tr-2xl" :
                      i === 2 ? "rounded-bl-2xl" :
                      "rounded-br-2xl"
                    }`}>
                      <span className="font-heading font-bold text-4xl md:text-5xl text-destructive/25 mb-6 block">
                        {pillar.num}
                      </span>
                      <h3 className="font-heading font-bold text-white text-xl md:text-2xl mb-1">
                        {pillar.title}
                      </h3>
                      <p className="font-body text-neon/80 text-sm mb-4 font-medium">
                        {pillar.subtitle}
                      </p>
                      <p className="font-body text-white/50 text-sm leading-relaxed mt-auto">
                        {pillar.body}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* ══ 4. WHAT'S INCLUDED — dark bg ══ */}
          <section className="bg-foreground border-t border-white/5">
            <div className="container mx-auto px-4 py-20 md:py-32 max-w-6xl">
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
          </section>

          {/* ══ 5. HOW WE WORK — light bg ══ */}
          <section className="bg-background">
            <div className="container mx-auto px-4 py-20 md:py-32 max-w-6xl">
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
          </section>

          {/* ══ 6. FAQ — light bg ══ */}
          <section className="bg-background border-t border-foreground/10">
            <div className="container mx-auto px-4 py-20 md:py-28 max-w-6xl">
              <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start">
                <FadeIn className="lg:sticky lg:top-32">
                  <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                    FAQ
                  </p>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground leading-tight">
                    Questions we always get asked.
                  </h2>
                </FadeIn>
                <FadeIn delay={0.15}>
                  <Accordion type="single" collapsible className="space-y-3 w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="w-full bg-white border border-foreground/10 rounded-xl overflow-hidden"
                      >
                        <AccordionTrigger className="text-base text-foreground/80 hover:text-foreground transition-colors hover:no-underline text-left font-medium px-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-foreground/55 leading-relaxed px-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ══ 7. BRANDS — dark bg ══ */}
          <section className="bg-black py-16 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <FadeIn>
                <div className="text-center mb-10">
                  <p className="text-white/30 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    Brands We've Worked With
                  </p>
                  <h2 className="font-heading font-bold text-xl md:text-2xl text-white/70">
                    Trusted by growing SMEs across industries.
                  </h2>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <BrandsCarousel />
              </FadeIn>
            </div>
          </section>

          {/* ══ 8. EXPLORE OTHER SERVICES — light bg ══ */}
          <section className="bg-background">
            <div className="container mx-auto px-4 py-20 md:py-28 max-w-6xl">
              <FadeIn>
                <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                  Explore Other Services
                </p>
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground leading-tight mb-14">
                  Once your foundation is solid,<br />here's what comes next.
                </h2>
              </FadeIn>
              <div className="grid md:grid-cols-3 gap-5">
                {nextServices.map((svc, i) => (
                  <FadeIn key={svc.slug} delay={0.1 * i}>
                    <Link
                      to={`/services/${svc.slug}`}
                      className="group block rounded-2xl border border-foreground/10 bg-white overflow-hidden hover:border-foreground/25 transition-colors duration-300"
                    >
                      <div className="overflow-hidden h-44">
                        <img
                          src={svc.image}
                          alt={svc.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading font-bold text-foreground text-base md:text-lg mb-2 group-hover:text-neon transition-colors duration-300">
                          {svc.title}
                        </h3>
                        <p className="font-body text-foreground/50 text-sm leading-relaxed mb-4">
                          {svc.description}
                        </p>
                        <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-foreground/40 group-hover:text-neon group-hover:gap-2.5 transition-all duration-300">
                          Learn More <ArrowRight className="size-3.5" />
                        </span>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* ══ 9. CTA + CONTACT FORM — light bg ══ */}
          <section className="bg-[#f5f5f5] border-t border-foreground/10">
            <div className="container mx-auto px-4 py-20 md:py-28 max-w-2xl">
              <FadeIn>
                <div className="text-center mb-10">
                  <p className="text-black/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    Ready to Build It Right?
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-black leading-tight mb-4">
                    Stop wasting budget on marketing built on a{" "}
                    <span className="bg-[#007BFF] text-white px-2 py-0.5 rounded-sm">weak foundation.</span>
                  </h2>
                  <p className="font-body text-black/50 text-base leading-relaxed max-w-xl mx-auto">
                    Start with a Strategic Audit—we'll assess where you are, identify the gaps, and show you exactly what needs to happen next.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="text-center mb-6">
                  <p className="font-heading font-bold text-black text-lg">Book Your Strategic Audit</p>
                </div>
                <ContactForm />
              </FadeIn>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default BrandFoundation;
