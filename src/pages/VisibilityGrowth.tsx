import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import {
  Check, ArrowRight, ChevronDown, Search, FileText,
  Smartphone, Target,
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
import BrandsCarousel from "@/components/BrandsCarousel";
import serviceBrand from "@/assets/service-brand.jpg";
import servicePerformance from "@/assets/service-performance.jpg";
import serviceEvents from "@/assets/service-events.jpg";
import SEOHead, { createFaqSchema } from "@/components/SEOHead";

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
    icon: Search,
    title: "SEO Strategy & Execution",
    lead: "Rank for searches that drive revenue, not just traffic.",
    description: "Most SEO work chases volume. We chase intent. Every keyword we target is mapped to commercial outcomes—prospects who are actively looking for a solution like yours.",
    items: [
      "Technical SEO audit and fixes",
      "Keyword research focused on commercial intent",
      "On-page optimization for target pages",
      "Content roadmap mapped to search demand",
      "Link building and authority development",
    ],
    why: "Ranking for \"industry news\" gets you visitors. Ranking for \"best [solution] for [customer]\" gets you revenue.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    lead: "Every piece serves a purpose: educate, build trust, or convert.",
    description: "Random content gets random results. We build a content system where every piece is mapped to a stage of the customer journey and designed to move prospects toward a decision.",
    items: [
      "Content themes mapped to customer journey stages",
      "Editorial calendar with strategic focus",
      "Content formats optimized for each channel",
      "Repurposing framework to maximize ROI",
    ],
    why: "Strategic content moves prospects from awareness to decision with intention. Random content just fills a calendar.",
  },
  {
    icon: Smartphone,
    title: "Social Media Marketing",
    lead: "Build authority with your ideal customers, not just followers.",
    description: "Follower counts are vanity. We care about building a presence that makes your ideal prospects think \"these people know what they're talking about\"—and then reach out.",
    items: [
      "Platform selection based on where your buyers are",
      "Content strategy aligned with business goals",
      "Posting cadence and engagement approach",
      "Performance tracking tied to pipeline, not likes",
    ],
    why: "10,000 followers who aren't your customers is worthless. 500 engaged prospects is a revenue channel.",
  },
  {
    icon: Target,
    title: "Organic Funnel Structuring",
    lead: "Turn discovery into conversion.",
    description: "Organic traffic without a funnel is just website stats. We map how prospects discover you, then design the touchpoints that guide them from awareness to action.",
    items: [
      "Organic discovery pathway mapping",
      "Content-to-conversion journey design",
      "Lead capture and nurture integration",
      "Measurement framework for organic attribution",
    ],
    why: "Organic traffic without a funnel is just website stats. A structured funnel turns discovery into revenue.",
  },
];

const processSteps = [
  { number: "01", title: "Audit & Opportunity Analysis", description: "We analyze your current organic presence, competitive landscape, and untapped opportunities—then identify which channels and topics will drive the most commercial impact." },
  { number: "02", title: "Strategic Roadmap", description: "We prioritize channels, keywords, and content themes based on revenue potential—not volume. We focus on what converts, not what trends." },
  { number: "03", title: "Execution & Optimization", description: "We implement SEO fixes, create content, and manage social presence with ongoing refinement based on performance. What works gets more investment. What doesn't gets cut." },
  { number: "04", title: "Scale What Works", description: "We double down on channels and topics that drive pipeline, and kill what doesn't. No vanity metrics. Just revenue outcomes." },
];

const faqs = [
  {
    question: "How long until we see results?",
    answer: "SEO and organic growth take 3-6 months to gain traction. Month 1-2 is foundation work. Month 3-6 is where you start seeing traffic and conversions compound.",
  },
  {
    question: "Do we need to do all four services, or can we start with just SEO?",
    answer: "You can start with one channel, but they work better together. SEO without content is limited. Social without a funnel wastes attention. The Strategic Audit identifies your biggest opportunity.",
  },
  {
    question: "What if we've tried content marketing before and it didn't work?",
    answer: "Most content strategies fail because they're not tied to commercial outcomes. Random blog posts don't drive revenue. Strategic content mapped to your customer journey does.",
  },
  {
    question: "Can you work with our existing content team?",
    answer: "Yes. We can provide the strategy and let your team execute, or handle everything in-house—depends on your preference and their capabilities.",
  },
  {
    question: "What's the time commitment on our end?",
    answer: "Minimal after the initial strategy phase. We need 2-3 hours for interviews and access to your analytics. After that, monthly check-ins (30-60 minutes) to review performance and adjust priorities.",
  },
];



const pillars = [
  {
    num: "01",
    title: "Discoverability",
    subtitle: "Show up where your buyers are searching.",
    body: "Strategic SEO puts you in front of prospects actively looking for solutions. Not vanity rankings—commercial intent keywords that drive qualified traffic.",
  },
  {
    num: "02",
    title: "Authority",
    subtitle: "Build trust before the sales conversation.",
    body: "Content that educates, answers questions, and demonstrates expertise makes prospects think \"these people know what they're talking about.\" Trust accelerates decisions.",
  },
  {
    num: "03",
    title: "Consistency",
    subtitle: "Stay visible without constant ad spend.",
    body: "Every piece of content you create, every ranking you earn, every post that builds authority—works for you continuously. Organic compounds. Ads don't.",
  },
  {
    num: "04",
    title: "Conversion",
    subtitle: "Turn discovery into pipeline.",
    body: "Organic traffic without a funnel is just website stats. Strategic content guides prospects from awareness to decision, with clear paths to conversion at every stage.",
  },
];

const nextServices = [
  {
    slug: "brand-foundation",
    title: "Brand & Foundation",
    description: "Build the strategic infrastructure that makes all marketing effective—positioning, messaging, offers, and a converting website.",
    image: serviceBrand,
  },
  {
    slug: "performance-scale",
    title: "Performance & Scale",
    description: "Once your organic channels are proven, accelerate growth with strategic paid campaigns that scale what's already working.",
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
          <Label htmlFor="vg-name" className="font-body font-medium text-sm text-black">Name *</Label>
          <Input id="vg-name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange}
            className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="vg-email" className="font-body font-medium text-sm text-black">Email *</Label>
          <Input id="vg-email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange}
            className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="vg-company" className="font-body font-medium text-sm text-black">Company Name</Label>
        <Input id="vg-company" name="company" type="text" placeholder="Your company" value={formData.company} onChange={handleChange}
          className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="vg-spend" className="font-body font-medium text-sm text-black">Current Monthly Marketing Spend</Label>
        <Input id="vg-spend" name="spend" type="text" placeholder="e.g. RM2,000/month" value={formData.spend} onChange={handleChange}
          className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="vg-challenge" className="font-body font-medium text-sm text-black">Biggest Marketing Challenge Right Now</Label>
        <Textarea id="vg-challenge" name="challenge" placeholder="Tell us about your main challenge..." value={formData.challenge} onChange={handleChange}
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
const VisibilityGrowth = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <SEOHead
          title="SEO & Organic Growth | Edge Point Services"
          description="Build sustainable visibility through SEO, content strategy, and social media marketing. Organic channels that compound over time."
          jsonLd={createFaqSchema(faqs)}
        />
        <Header />
        <main>

          {/* ══ 1. HERO ══ */}
          <PageHero
            label="Service 02"
            title="Build Visibility That Compounds."
            highlightWord="Compounds."
            description="Paid ads stop working the moment you stop paying. Organic channels—SEO, content, social media—work for you long after they're published. But most businesses treat organic growth like a side project, not a system."
          />

          {/* ══ 2. PROBLEM STATEMENT — white bg ══ */}
          <section className="bg-background">
            <div className="container mx-auto px-4 py-20 md:py-28 max-w-6xl">
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
                {/* Left */}
                <FadeIn className="lg:sticky lg:top-32">
                  <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                    The Cost of Winging Your Organic Strategy
                  </p>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05]">
                    Most businesses post content, hope for traffic, and wonder why nothing sticks.
                  </h2>
                  <p className="font-body text-foreground/40 text-sm mt-4 leading-relaxed">
                    The problem isn't effort. It's direction.
                  </p>
                </FadeIn>

                {/* Right */}
                <FadeIn delay={0.15}>
                  <p className="font-body text-foreground/55 text-base md:text-lg leading-[1.85] mb-8">
                    But here's what actually happens: You publish 50 blog posts that nobody finds. Your Instagram has followers who never buy. Your SEO strategy is "use keywords somewhere." You're creating content, but it's not driving pipeline.
                  </p>
                  <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 md:p-8 mb-8">
                    <p className="font-heading font-bold text-foreground text-lg md:text-xl leading-relaxed mb-2">
                      The problem isn't effort. It's <span className="text-neon">direction.</span>
                    </p>
                    <p className="font-body text-foreground/45 text-sm md:text-base leading-relaxed">
                      Without a clear content strategy, keyword targeting that matches commercial intent, and a funnel that converts organic traffic, you're just busy—not growing.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ══ 3. WHY ORGANIC GROWTH BUILDS LEVERAGE — dark bg ══ */}
          <section className="bg-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32 max-w-6xl">
              <FadeIn>
                <p className="text-neon font-body font-medium tracking-widest uppercase text-xs mb-4">
                  Why Organic Growth Builds Leverage
                </p>
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight mb-4 max-w-2xl">
                  Four pillars that turn attention into revenue.
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
                  Everything you need to grow organically.
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
              <div className="grid md:grid-cols-2 gap-4">
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
                  Organic growth works best<br />with a solid foundation.
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
                    Ready to Build Sustainable Growth?
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-black leading-tight mb-4">
                    Stop wasting budget on content that{" "}
                    <span className="bg-[#007BFF] text-white px-2 py-0.5 rounded-sm">goes nowhere.</span>
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

export default VisibilityGrowth;
