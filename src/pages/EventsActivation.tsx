import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import {
  Check, ArrowRight, ChevronDown, CalendarDays, Sparkles, Link2,
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
import serviceVisibility from "@/assets/service-visibility.jpg";
import servicePerformance from "@/assets/service-performance.jpg";

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
    title: "Strategic Objectives",
    subtitle: "Know what success looks like before the event.",
    body: "Events without clear goals become brand exercises. Define what you're capturing—leads, partnerships, sales—and design everything around that outcome.",
  },
  {
    num: "02",
    title: "Experience Design",
    subtitle: "Create moments worth remembering.",
    body: "Generic events get forgotten. Strategic activations create memorable brand experiences that make attendees think \"I need to work with these people.\"",
  },
  {
    num: "03",
    title: "Lead Capture",
    subtitle: "Turn conversations into pipeline.",
    body: "Paper forms don't work. Digital lead capture systems that feed directly into your CRM ensure every conversation becomes a trackable opportunity.",
  },
  {
    num: "04",
    title: "Follow-Up Funnel",
    subtitle: "Convert interest into action.",
    body: "The event is just the start. Post-event nurture sequences, retargeting campaigns, and sales follow-up turn warm leads into revenue.",
  },
];

const deliverables = [
  {
    icon: CalendarDays,
    title: "Event Planning & Execution",
    lead: "End-to-end event strategy designed with clear commercial objectives.",
    description: "Events without strategy are expensive parties. We plan every element—logistics, experience, and marketing integration—around a clear commercial outcome.",
    items: [
      "Event strategy aligned with business goals",
      "Venue selection, logistics, and vendor coordination",
      "Attendee experience design",
      "Pre-event promotion and post-event follow-up",
      "Lead capture and nurture system integration",
    ],
    why: "Events without strategy are expensive parties. Events with commercial focus are revenue engines.",
  },
  {
    icon: Sparkles,
    title: "Brand Activation Campaigns",
    lead: "Memorable brand experiences that generate awareness and capture leads.",
    description: "We design activations that don't just look good—they create the kind of brand experience that stays with people and moves them toward a decision.",
    items: [
      "Pop-up and activation concept development",
      "Experiential design that reflects brand positioning",
      "On-site engagement tactics and lead capture",
      "Content creation for amplification (photos, video, social)",
    ],
    why: "Brand activations create memorable moments—but only if they're tied to a funnel that converts interest into action.",
  },
  {
    icon: Link2,
    title: "Offline-Online Funnel Integration",
    lead: "Connect event attendees to your digital ecosystem.",
    description: "The event is just the start. We build the systems that ensure every attendee enters your digital funnel and gets nurtured toward a purchasing decision.",
    items: [
      "Lead capture strategy (digital forms, QR codes, CRM integrations)",
      "Post-event email nurture sequences",
      "Retargeting campaigns for event attendees",
      "Attribution tracking (connecting event leads to revenue)",
    ],
    why: "The event is just the start. The real ROI comes from nurturing relationships and converting interest into sales.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Define Objectives",
    description:
      "We clarify what success looks like—leads captured, pipeline generated, revenue influenced—not just \"attendance.\" Every decision flows from clear goals.",
  },
  {
    number: "02",
    title: "Design the Experience",
    description:
      "We plan the event with attendee journey in mind—from pre-event awareness to post-event conversion. Every touchpoint is strategic.",
  },
  {
    number: "03",
    title: "Execute & Capture",
    description:
      "We manage logistics, create memorable experiences, and capture leads with systems that feed directly into your CRM. No paper forms. No lost opportunities.",
  },
  {
    number: "04",
    title: "Nurture & Convert",
    description:
      "We activate post-event campaigns to convert interest into opportunities and revenue. Follow-up isn't optional—it's where the ROI happens.",
  },
];

const faqs = [
  {
    question: "How far in advance should we start planning?",
    answer:
      "8-12 weeks minimum for most events. Larger conferences or activations may need 3-6 months. The earlier we start, the better the outcome.",
  },
  {
    question: "Do you handle everything, or do we need an event coordinator?",
    answer:
      "We handle strategy, experience design, and marketing integration. For large-scale logistics (catering, AV, security), we coordinate with your vendors or recommend trusted partners.",
  },
  {
    question: "What if we're attending an event, not hosting one?",
    answer:
      "We can still help. We'll design your booth experience, pre-event promotion, lead capture system, and post-event follow-up to maximize ROI from your participation.",
  },
  {
    question: "How do you measure event success?",
    answer:
      "We track: leads captured, cost per lead, pipeline generated, conversion rate from event leads, and revenue influenced. Not just \"how many people showed up.\"",
  },
  {
    question: "Can events work for B2B companies?",
    answer:
      "Absolutely. Industry conferences, client appreciation events, executive roundtables, and thought leadership activations are all powerful for B2B. We just make sure they're tied to pipeline, not just networking.",
  },
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
    slug: "performance-scale",
    title: "Performance & Scale",
    description:
      "Accelerate growth with strategic paid campaigns once your foundation and funnel are proven.",
    image: servicePerformance,
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
                <Icon className={`size-5 ${open ? "text-neon" : "text-foreground/60"}`} />
              </div>
              <h3 className="font-heading font-bold text-base md:text-lg">{item.title}</h3>
            </div>
            <ChevronDown
              className={`size-5 shrink-0 mt-1 transition-transform duration-300 ${
                open ? "rotate-180 text-white/60" : "text-foreground/30"
              }`}
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
              <p className="font-body text-white/50 text-sm leading-relaxed">{item.description}</p>
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
          <Label htmlFor="ea-name" className="font-body font-medium text-sm text-black">Name *</Label>
          <Input id="ea-name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange}
            className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ea-email" className="font-body font-medium text-sm text-black">Email *</Label>
          <Input id="ea-email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange}
            className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ea-company" className="font-body font-medium text-sm text-black">Company Name</Label>
        <Input id="ea-company" name="company" type="text" placeholder="Your company" value={formData.company} onChange={handleChange}
          className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ea-spend" className="font-body font-medium text-sm text-black">Current Monthly Marketing Spend</Label>
        <Input id="ea-spend" name="spend" type="text" placeholder="e.g. RM5,000/month" value={formData.spend} onChange={handleChange}
          className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ea-challenge" className="font-body font-medium text-sm text-black">Biggest Marketing Challenge Right Now</Label>
        <Textarea id="ea-challenge" name="challenge" placeholder="Tell us about your main challenge..." value={formData.challenge} onChange={handleChange}
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
const EventsActivation = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>

          {/* ══ 1. HERO ══ */}
          <PageHero
            label="Service 04"
            title="Turn Offline Moments Into Online Revenue."
            highlightWord="Revenue."
            description="Most businesses treat events as 'brand awareness exercises' with no clear path to revenue. They spend RM20K on an event, capture leads on paper, and never follow up. Then they wonder why events don't drive growth."
          />

          {/* ══ 2. PROBLEM STATEMENT — white bg ══ */}
          <section className="bg-background">
            <div className="container mx-auto px-4 py-20 md:py-28 max-w-6xl">
              <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
                {/* Left */}
                <FadeIn className="lg:sticky lg:top-32">
                  <p className="text-foreground/30 font-body font-medium tracking-widest uppercase text-xs mb-4">
                    The Cost of Events Without Strategy
                  </p>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.05]">
                    Most businesses launch events without a clear commercial plan.
                  </h2>
                  <p className="font-body text-foreground/40 text-sm mt-4 leading-relaxed">
                    The problem isn't the event. It's what happens before and after.
                  </p>
                </FadeIn>

                {/* Right */}
                <FadeIn delay={0.15}>
                  <p className="font-body text-foreground/55 text-base md:text-lg leading-[1.85] mb-8">
                    But here's what actually happens: You spend RM30K on an event that generates "buzz" but zero pipeline. Leads get captured on paper forms and never make it into your CRM. Attendees have a good time, then disappear. You measure success by "how many people showed up," not "how many became customers."
                  </p>
                  <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 md:p-8">
                    <p className="font-heading font-bold text-foreground text-lg md:text-xl leading-relaxed mb-2">
                      Events are powerful—but only when they're{" "}
                      <span className="text-neon">integrated with your strategy.</span>
                    </p>
                    <p className="font-body text-foreground/45 text-sm md:text-base leading-relaxed">
                      Without lead capture systems, follow-up funnels, and clear conversion paths, events are just expensive parties.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* ══ 3. WHY EVENTS NEED SYSTEMS — dark bg ══ */}
          <section className="bg-foreground">
            <div className="container mx-auto px-4 py-20 md:py-32 max-w-6xl">
              <FadeIn>
                <p className="text-neon font-body font-medium tracking-widest uppercase text-xs mb-4">
                  Why Events Need Systems
                </p>
                <h2 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight mb-4 max-w-2xl">
                  Four pillars that turn attendance into revenue.
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
                  Everything you need to turn events into growth channels.
                </h2>
                <p className="font-body text-white/40 text-base md:text-lg leading-relaxed mb-14 max-w-xl">
                  Click any card to explore the deliverables and understand why each one matters.
                </p>
              </FadeIn>
              <div className="grid md:grid-cols-3 gap-4">
                {deliverables.map((item, i) => (
                  <DeliverableCard key={item.title} item={item} index={i} />
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
                  Events work best when integrated<br />with your broader strategy.
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
                    Ready to Make Events a Revenue Channel?
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-4xl text-black leading-tight mb-4">
                    Stop running events that generate{" "}
                    <span className="bg-[#007BFF] text-white px-2 py-0.5 rounded-sm">buzz but no pipeline.</span>
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

export default EventsActivation;
