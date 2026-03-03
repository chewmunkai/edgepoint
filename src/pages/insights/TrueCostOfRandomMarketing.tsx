import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import blogImage from "@/assets/blog-true-cost-random-marketing.jpg";
import SEOHead, { createArticleSchema } from "@/components/SEOHead";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
};

const relatedArticles = [
  { slug: "why-marketing-plans-fail", title: "Why Most Marketing Plans Fail Before They Start", category: "Strategy" },
  { slug: "seo-2025-what-moves-the-needle", title: "SEO in 2025: What Actually Moves the Needle", category: "SEO" },
];

const TrueCostOfRandomMarketing = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <SEOHead
          title="The True Cost of Random Marketing | Edge Point"
          description="How disconnected campaigns silently drain your budget and stall growth—and the counterintuitive fix most businesses overlook."
          ogType="article"
          jsonLd={createArticleSchema({ title: "The True Cost of Random Marketing", description: "How disconnected campaigns silently drain your budget and stall growth.", datePublished: "2025-02-15", slug: "true-cost-of-random-marketing" })}
        />
        <Header />
        <main>

          {/* ── Hero ── */}
          <section className="bg-foreground pt-32 pb-20 md:pt-40 md:pb-28">
            <div className="container mx-auto px-4 max-w-3xl">
              <FadeIn>
                <Link to="/insights" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 font-body text-sm transition-colors mb-8">
                  <ArrowLeft className="size-4" /> Back to Insights
                </Link>
                <span className="inline-block font-body text-xs font-medium text-neon uppercase tracking-widest mb-5">Growth</span>
                <h1 className="font-heading font-bold text-3xl md:text-5xl text-white leading-[1.08] mb-6">
                  The True Cost of Random Marketing
                </h1>
                <p className="font-body text-white/50 text-lg leading-relaxed mb-8">
                  How disconnected campaigns silently drain your budget and stall growth—and what to do instead.
                </p>
                <div className="flex items-center gap-5 text-white/30 font-body text-sm">
                  <span className="flex items-center gap-1.5"><Calendar className="size-3.5" /> February 2025</span>
                  <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> 8 min read</span>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ── Hero Image ── */}
          <div className="container mx-auto px-4 max-w-3xl -mt-12 relative z-10">
            <FadeIn>
              <img src={blogImage} alt="The True Cost of Random Marketing" className="w-full rounded-2xl shadow-2xl aspect-[16/9] object-cover" />
            </FadeIn>
          </div>

          {/* ── Body ── */}
          <section className="bg-background">
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">

              <FadeIn>
                <div className="font-body text-foreground/70 leading-relaxed space-y-6">

                  <p className="text-foreground/80 text-xl leading-relaxed font-medium">
                    There's a type of marketing that looks productive—meetings are happening, content is being published, ads are running, campaigns are launching—but nothing is actually moving. Revenue stays flat. Leads stay expensive. The team stays busy. This is what random marketing looks like from the inside.
                  </p>

                  <p>
                    The problem with random marketing isn't that any individual tactic is wrong. It's that tactics without a connecting strategy don't reinforce each other. They compete for budget, confuse prospects with inconsistent messaging, and produce results that are impossible to attribute or optimize.
                  </p>

                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    What Random Marketing Actually Costs
                  </h2>

                  <p>
                    Most businesses underestimate the true cost of their disconnected approach because they only count direct spend. But the real cost has four components:
                  </p>

                  <div className="space-y-5 my-8">
                    {[
                      {
                        num: "01",
                        title: "The Direct Spend That Goes Nowhere",
                        body: "The most obvious cost: money spent on campaigns that don't convert. Google Ads driving traffic to a non-converting website. Social media spend building followers who don't buy. SEO content attracting visitors who bounce. Each of these represents real budget producing no revenue.",
                      },
                      {
                        num: "02",
                        title: "The Opportunity Cost of Distraction",
                        body: "Every tactic you're running requires attention, management, and creative resource. When you're running six disconnected channels, you're spreading that resource across six different initiatives—none of which gets the focused investment needed to perform well. The opportunity cost of \"trying everything\" is never doing anything well.",
                      },
                      {
                        num: "03",
                        title: "The Brand Confusion Tax",
                        body: "When your ads say one thing, your website says another, and your social content says a third, prospects get confused—and confused prospects don't buy. Inconsistent messaging forces every prospect to do more cognitive work to understand your value proposition. Most won't bother.",
                      },
                      {
                        num: "04",
                        title: "The Compounding Damage of Bad Data",
                        body: "When campaigns aren't connected to a unified strategy, the data they produce is misleading. You optimize the wrong things, cut channels that are actually working, and scale channels that aren't. Bad strategy produces bad data, which produces worse strategy.",
                      },
                    ].map((item) => (
                      <div key={item.num} className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-6">
                        <div className="flex items-start gap-4">
                          <span className="font-heading font-bold text-3xl text-destructive/20 shrink-0">{item.num}</span>
                          <div>
                            <h3 className="font-heading font-bold text-foreground text-base mb-2">{item.title}</h3>
                            <p className="font-body text-foreground/55 text-sm leading-relaxed">{item.body}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl bg-foreground text-white p-8 md:p-10 my-10">
                    <p className="font-heading font-bold text-xl md:text-2xl leading-relaxed text-white mb-3">
                      "Most businesses aren't losing to better competitors. They're losing to their own lack of strategic clarity."
                    </p>
                    <p className="font-body text-white/50 text-sm">
                      The competitor with a clearer message, a tighter funnel, and a focused channel strategy will almost always win—regardless of budget.
                    </p>
                  </div>

                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    The Anatomy of a Connected Strategy
                  </h2>

                  <p>
                    A connected marketing strategy isn't complicated. It's just intentional. Every element serves the same goal, speaks to the same customer, and feeds the same funnel.
                  </p>

                  <p>
                    Here's what that looks like in practice:
                  </p>

                  <ul className="space-y-4 list-none pl-0 my-6">
                    {[
                      {
                        label: "One clear positioning statement",
                        desc: "Every piece of marketing starts from the same foundation—who you serve, what you do, why you're different. No deviation across channels.",
                      },
                      {
                        label: "A defined customer journey",
                        desc: "You know how prospects discover you, what they need to believe before they buy, and what the conversion path looks like. Every tactic is mapped to a stage in that journey.",
                      },
                      {
                        label: "Two or three focused channels",
                        desc: "Not eight. Not everything. The channels where your ideal customers make decisions—run well, with adequate investment, with consistent messaging.",
                      },
                      {
                        label: "A unified measurement framework",
                        desc: "One set of metrics that everyone agrees matters. Pipeline generated. Cost per acquisition. Revenue influenced. Not vanity metrics that look good in reports.",
                      },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 rounded-lg border border-foreground/8 bg-white p-4">
                        <span className="font-heading font-bold text-neon text-lg mt-0.5 shrink-0">→</span>
                        <div>
                          <span className="font-heading font-bold text-foreground text-sm block mb-1">{item.label}</span>
                          <span className="font-body text-foreground/55 text-sm">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    The Counterintuitive Fix
                  </h2>

                  <p>
                    The instinct when marketing isn't working is to do more: more channels, more content, more campaigns, more budget. It feels like the answer must be more activity.
                  </p>

                  <p>
                    The actual answer is almost always less—but better. Cut the channels that aren't producing. Tighten the message. Invest more in fewer, better-chosen tactics. Give them time to work.
                  </p>

                  <p>
                    The businesses that consistently win at marketing aren't doing the most. They're doing the right things, consistently, with enough investment to actually see results. That requires strategy—deciding what not to do as much as what to do.
                  </p>

                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    How to Stop the Randomness
                  </h2>

                  <p>
                    If you recognize the random marketing pattern in your business, the fix starts with an honest audit of what's actually working. Not what feels productive—what's actually driving pipeline and revenue.
                  </p>

                  <p>
                    That means looking at every channel and asking: "If we stopped this tomorrow, would it measurably affect revenue?" If the answer is no, you have your first cut.
                  </p>

                  <p>
                    From there, build a strategy from the output back: what revenue do you need, what conversion rate does that require, how much pipeline does that mean, which channels can generate that pipeline efficiently? Work backwards from the goal, not forwards from "what should we try next."
                  </p>

                </div>
              </FadeIn>

              {/* CTA */}
              <FadeIn delay={0.1}>
                <div className="mt-16 rounded-2xl bg-foreground p-8 md:p-10 text-center">
                  <p className="font-body text-white/40 text-xs uppercase tracking-widest mb-3">Stop the Random Marketing Cycle</p>
                  <h3 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">
                    Start with a Strategic Audit.
                  </h3>
                  <p className="font-body text-white/50 text-base leading-relaxed mb-6 max-w-md mx-auto">
                    We'll audit what's working, cut what's not, and build a connected strategy that focuses your budget on the highest-impact moves.
                  </p>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 bg-neon text-black font-heading font-bold text-sm px-6 py-3 rounded-lg hover:bg-neon/90 transition-colors">
                    Book a Strategic Audit
                  </Link>
                </div>
              </FadeIn>

              {/* Related */}
              <FadeIn delay={0.15}>
                <div className="mt-16 pt-12 border-t border-foreground/10">
                  <p className="font-body text-foreground/30 text-xs uppercase tracking-widest mb-6">Related Articles</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {relatedArticles.map((a) => (
                      <Link key={a.slug} to={`/insights/${a.slug}`}
                        className="group rounded-xl border border-foreground/10 bg-white p-5 hover:border-foreground/25 transition-colors">
                        <span className="font-body text-xs text-agency-blue font-medium uppercase tracking-wider">{a.category}</span>
                        <h4 className="font-heading font-bold text-foreground text-base mt-2 group-hover:text-neon transition-colors leading-snug">
                          {a.title}
                        </h4>
                        <span className="inline-flex items-center gap-1 font-body text-xs text-foreground/30 mt-3 group-hover:text-neon group-hover:gap-2 transition-all">
                          Read article <ArrowRight className="size-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>

            </div>
          </section>

        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default TrueCostOfRandomMarketing;
