import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import {
  Check, ArrowRight, ChevronDown, BarChart2, Target,
  RefreshCw, LineChart,
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
import serviceBrand from "@/assets/service-brand.jpg";
import serviceVisibility from "@/assets/service-visibility.jpg";
import serviceEvents from "@/assets/service-events.jpg";

/* ─── Animation Wrapper ─── */
const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
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
const pillars = [
  {
    num: "01",
    title: "Proven Offers",
    subtitle: "Test before you scale.",
    body: "You need proof that your offer converts organically before you pour budget into it. If it doesn't sell without ads, ads won't fix it—they'll just amplify the problem.",
  },
  {
    num: "02",
    title: "Converting Funnels",
    subtitle: "Fix the leak before you add pressure.",
    body: "A 2% conversion rate costs twice as much per lead as 4%. Small improvements in your funnel compound into massive ROI gains when you scale.",
  },
  {
    num: "03",
    title: "Strategic Targeting",
    subtitle: "Reach the right people, not just more people.",
    body: "Generic targeting burns budgets. Strategic audience segmentation based on clear positioning ensures your ads reach prospects who actually convert.",
  },
  {
    num: "04",
    title: "Continuous Optimization",
    subtitle: "Scale what works. Kill what doesn't.",
    body: "Performance marketing isn't \"set and forget.\" It's constant testing, refinement, and reallocation based on data—not opinions or gut feelings.",
  },
];

const deliverables = [
  {
    icon: BarChart2,
    title: "Performance Marketing",
    lead: "Strategic paid campaigns focused on qualified leads and revenue, not just clicks.",
    description: "Clicks are cheap. Revenue isn't. Every campaign we run is built around a clear commercial objective—qualified leads, pipeline, and cost per acquisition—not vanity metrics.",
    items: [
      "Campaign strategy across Google, Meta, LinkedIn, or other platforms",
      "Audience targeting and segmentation",
      "Ad creative development and testing",
      "Budget allocation and bid management",
      "Ongoing optimization based on performance",
    ],
    why: "Ads without strategy burn budgets. Strategic campaigns with clear targeting and offers deliver predictable ROI.",
  },
  {
    icon: Target,
    title: "Paid Media Strategy",
    lead: "Channel selection and budget allocation designed to maximize ROI.",
    description: "Not every platform works for every business. We only recommend channels where your ideal customers actually make purchasing decisions—and avoid the rest.",
    items: [
      "Platform audit and recommendation (where to spend, where to avoid)",
      "Customer persona and targeting strategy",
      "Budget modeling and forecasting",
      "Creative strategy aligned with customer journey stage",
    ],
    why: "Not every platform works for every business. We only recommend channels where your ideal customers actually make decisions.",
  },
  {
    icon: RefreshCw,
    title: "Funnel Optimization",
    lead: "Continuous testing and refinement to improve cost per acquisition.",
    description: "Most paid campaigns underperform not because of bad ads—but because of leaky funnels. We identify and fix every friction point between click and conversion.",
    items: [
      "A/B testing framework for ads and landing pages",
      "Conversion rate optimization (CRO) sprints",
      "User experience analysis and friction removal",
      "Performance dashboards with actionable insights",
    ],
    why: "A 2% conversion rate costs twice as much per lead as 4%. Small improvements compound into massive ROI gains.",
  },
  {
    icon: LineChart,
    title: "Campaign Tracking & Reporting",
    lead: "Transparent dashboards tied to revenue outcomes.",
    description: "You should never have to wonder where your money is going. Every dashboard we build is tied to business outcomes—not vanity metrics.",
    items: [
      "Real-time performance dashboards",
      "Attribution modeling (which channels drive conversions)",
      "Monthly performance reviews with strategic recommendations",
      "Budget reallocation recommendations based on data",
    ],
    why: "You should always know: what's working, what's not, where your money is going, and what your actual ROI is.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Foundation Audit",
    description:
      "We assess whether your positioning, offers, and funnel are ready for paid scale. If not, we fix them first. Scaling broken systems wastes money.",
  },
  {
    number: "02",
    title: "Channel Strategy",
    description:
      "We select platforms, define audiences, and model budget scenarios based on your goals and constraints. No guessing—just data-driven recommendations.",
  },
  {
    number: "03",
    title: "Launch & Test",
    description:
      "We launch campaigns with built-in testing frameworks—creative, audiences, messaging—and iterate quickly based on performance.",
  },
  {
    number: "04",
    title: "Scale & Optimize",
    description:
      "We double down on what works, kill what doesn't, and continuously refine for better performance. What gets measured gets improved.",
  },
];

const faqs = [
  {
    question: "How much should we budget for ads?",
    answer:
      "Minimum RM5K/month for proper testing. Below that, you're not giving campaigns enough data to optimize. Most clients start at RM10K-15K/month once foundation is solid.",
  },
  {
    question: "How long until we see ROI?",
    answer:
      "Expect 4-8 weeks of testing before campaigns hit optimal performance. First month is learning. Second month is refinement. Month 3+ is where ROI becomes predictable.",
  },
  {
    question: "What if our current ads aren't working?",
    answer:
      "We audit what's broken—targeting, creative, funnel, or offer—then fix it. Most underperforming campaigns fail because of strategy, not execution.",
  },
  {
    question: "Do we need to pause our current campaigns?",
    answer:
      "Not necessarily. We'll audit what's running, keep what's working, fix what's broken, and test new approaches in parallel.",
  },
  {
    question: "Can you manage ads if we don't use your other services?",
    answer:
      "Yes, but we'll be honest if your foundation (positioning, website, offers) is the real problem. We won't take your money to optimize ads when the funnel is broken.",
  },
];

const brands = [
  "VERTEX", "ONWARD", "NUCLEUS", "STRATUM", "AXIOM", "PRISM",
  "HELIX", "NOVA", "CIPHER", "VORTEX", "APEX", "ZENITH", "FLUX", "ORBIT", "QUANTUM",
];

const nextServices = [
  {
    slug: "brand-foundation",
    title: "Brand & Foundation",
    description:
      "Build the strategic infrastructure that makes all marketing effective—positioning, messaging, offers, and a converting website.",
    image: serviceBrand,
  },
  {
    slug: "visibility-organic-growth",
    title: "Visibility & Organic Growth",
    description:
      "Build sustainable attention through SEO, content, and social media—channels that compound over time without constant ad spend.",
    image: serviceVisibility,
  },
  {
    slug: "events-activation",
    title: "Events & Activation",
    description:
      "Turn offline moments into measurable outcomes with strategic event planning and execution.",
    image: serviceEvents,
  },
];

/* ─── Expandable Card ─── */
const DeliverableCard = ({
  item,
  index,
}: {
  item: (typeof deliverables)[0];
  index: number;
}) => {
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
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  open ? "bg-neon/20" : "bg-foreground/5"
                }`}
              >
                <Icon
                  className={`size-5 ${open ? "text-neon" : "text-foreground/60"}`}
                />
              </div>
              <h3 className="font-heading font-bold text-base md:text-lg">
                {item.title}
              </h3>
            </div>
            <ChevronDown
              className={`size-5 shrink-0 mt-1 transition-transform duration-300 ${
                open ? "rotate-180 text-white/60" : "text-foreground/30"
              }`}
            />
          </div>
          <p
            className={`font-body text-sm leading-relaxed ${
              open ? "text-white/70" : "text-foreground/50"
            }`}
          >
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
                <span className="text-neon not-italic font-semibold">
                  Why it matters:{" "}
                </span>
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl p-6 md:p-8 space-y-4 bg-white border border-black/10"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="ps-name" className="font-body font-medium text-sm text-black">
            Name *
          </Label>
          <Input
            id="ps-name" name="name" type="text" placeholder="Your name"
            value={formData.name} onChange={handleChange}
            className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40"
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ps-email" className="font-body font-medium text-sm text-black">
            Email *
          </Label>
          <Input
            id="ps-email" name="email" type="email" placeholder="you@company.com"
            value={formData.email} onChange={handleChange}
            className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40"
            required
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ps-company" className="font-body font-medium text-sm text-black">
          Company Name
        </Label>
        <Input
          id="ps-company" name="company" type="text" placeholder="Your company"
          value={formData.company} onChange={handleChange}
          className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ps-spend" className="font-body font-medium text-sm text-black">
          Current Monthly Marketing Spend
        </Label>
        <Input
          id="ps-spend" name="spend" type="text" placeholder="e.g. RM10,000/month"
          value={formData.spend} onChange={handleChange}
          className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ps-challenge" className="font-body font-medium text-sm text-black">
          Biggest Marketing Challenge Right Now
        </Label>
        <Textarea
          id="ps-challenge" name="challenge"
          placeholder="Tell us about your main challenge..."
          value={formData.challenge} onChange={handleChange}
          className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 min-h-[100px] text-sm text-black placeholder:text-black/40"
        />
      </div>
      <div className="pt-2">
        <LiquidButton
          type="submit" size="lg" variant="dark"
          className="w-full md:w-auto font-heading text-sm whitespace-nowrap min-w-[260px] justify-center text-white bg-black hover:bg-black/90"
        >
          Book Strategic Audit
        </LiquidButton>
      </div>
    </form>
  );
};

/* ─── Page ─── */
const PerformanceScale = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>

          {/* ══ 1. HERO ══ */}
          <PageHero
            label="Service 03"
            title="Scale What's Already Working."
            highlightWord="Working."
            description="Most businesses throw money at ads before they're ready. No clear positioning. No converting funnel. No proven offers. Then they wonder why their cost per lead keeps climbing and ROI keeps dropping."
          />

          {/* ══ 2. PROBLEM STATEMENT — white bg ══ */}
          <section className="bg-background">
            <div className="container mx-auto px-4 py-20 md:py-28 max-w-6xl">
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
                {/* Left */}
                <FadeIn className="lg:sticky lg:top-32">
                  <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                    The Cost of Scaling Broken Funnels
                  </p>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05]">
                    Most businesses think "more traffic = more revenue."
                  </h2>
                  <p className="font-body text-foreground/40 text-sm mt-4 leading-relaxed">
                    So they turn on ads and wait for results.
                  </p>
                </FadeIn>

                {/* Right */}
                <FadeIn delay={0.15}>
                  <p className="font-body text-foreground/55 text-base md:text-lg leading-[1.85] mb-8">
                    But here's what actually happens: You spend RM15K/month on ads that drive clicks to pages that don't convert. Your cost per lead is 3x what it should be because your funnel leaks. You're targeting the wrong audience because your positioning isn't clear. You scale spend, but revenue doesn't follow.
                  </p>
                  <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 md:p-8">
                    <p className="font-heading font-bold text-foreground text-lg md:text-xl leading-relaxed mb-2">
                      The problem isn't the ads. It's what happens{" "}
                      <span className="text-neon">after the click.</span>
                    </p>
                    <p className="font-body text-foreground/45 text-sm md:text-base leading-relaxed">
                      Performance marketing only works when you have clear positioning, a converting funnel, and proven offers. Without that foundation, you're not scaling growth—you're scaling waste.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ══ 3. WHY PERFORMANCE REQUIRES FOUNDATION — dark bg ══ */}
          <section className="bg-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32 max-w-6xl">
              <FadeIn>
                <p className="text-neon font-body font-medium tracking-widest uppercase text-xs mb-4">
                  Why Performance Requires Foundation
                </p>
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight mb-4 max-w-2xl">
                  Four pillars that turn ad spend into predictable revenue.
                </h2>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 mt-14">
                {pillars.map((pillar, i) => (
                  <FadeIn key={pillar.num} delay={0.1 * i}>
                    <div
                      className={`bg-foreground p-8 md:p-10 h-full flex flex-col ${
                        i === 0 ? "rounded-tl-2xl" :
                        i === 1 ? "rounded-tr-2xl" :
                        i === 2 ? "rounded-bl-2xl" :
                        "rounded-br-2xl"
                      }`}
                    >
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
                  Everything you need to scale with confidence.
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
                  Performance marketing works best<br />with the right foundation.
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
                    Ready to Scale With Confidence?
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-black leading-tight mb-4">
                    Stop scaling spend on a{" "}
                    <span className="bg-[#007BFF] text-white px-2 py-0.5 rounded-sm">
                      funnel that leaks.
                    </span>
                  </h2>
                  <p className="font-body text-black/50 text-base leading-relaxed max-w-xl mx-auto">
                    Start with a Strategic Audit—we'll assess where you are, identify the gaps, and show you exactly what needs to happen next.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="text-center mb-6">
                  <p className="font-heading font-bold text-black text-lg">
                    Book Your Strategic Audit
                  </p>
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

export default PerformanceScale;
