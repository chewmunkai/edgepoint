import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";

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
  { slug: "seo-2025-what-moves-the-needle", title: "SEO in 2025: What Actually Moves the Needle", category: "SEO" },
  { slug: "true-cost-of-random-marketing", title: "The True Cost of Random Marketing", category: "Growth" },
];

const WhyMarketingPlansFail = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>

          {/* ── Hero ── */}
          <section className="bg-foreground pt-32 pb-20 md:pt-40 md:pb-28">
            <div className="container mx-auto px-4 max-w-3xl">
              <FadeIn>
                <Link to="/insights" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 font-body text-sm transition-colors mb-8">
                  <ArrowLeft className="size-4" /> Back to Insights
                </Link>
                <span className="inline-block font-body text-xs font-medium text-neon uppercase tracking-widest mb-5">Strategy</span>
                <h1 className="font-heading font-bold text-3xl md:text-5xl text-white leading-[1.08] mb-6">
                  Why Most Marketing Plans Fail Before They Start
                </h1>
                <p className="font-body text-white/50 text-lg leading-relaxed mb-8">
                  The biggest mistake SMEs make isn't choosing the wrong tactic—it's skipping strategy entirely.
                </p>
                <div className="flex items-center gap-5 text-white/30 font-body text-sm">
                  <span className="flex items-center gap-1.5"><Calendar className="size-3.5" /> January 2025</span>
                  <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> 7 min read</span>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ── Body ── */}
          <section className="bg-background">
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">

              <FadeIn>
                <div className="prose prose-lg max-w-none font-body text-foreground/70 leading-relaxed space-y-6">

                  <p className="text-foreground/80 text-xl leading-relaxed font-medium">
                    Every year, thousands of SMEs invest heavily in marketing—ads, content, social media, SEO—and walk away with disappointing results. The instinct is to blame the execution: the agency wasn't good enough, the creative wasn't compelling, the targeting was off.
                  </p>

                  <p>
                    But in most cases, the execution isn't the problem. The problem is that there was never a coherent strategy to execute against.
                  </p>

                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    The Tactic-First Trap
                  </h2>

                  <p>
                    Here's how it typically unfolds. A business decides it needs more leads. Someone suggests running Google Ads. They hire an agency or freelancer, set a budget, and launch campaigns. Six months later, the cost per lead is too high, the leads that do come in aren't converting, and the whole experiment gets shut down.
                  </p>

                  <p>
                    The business concludes: "Google Ads doesn't work for us." But that's usually the wrong conclusion.
                  </p>

                  <p>
                    What actually happened is: they drove traffic to a website that wasn't designed to convert. Their messaging didn't differentiate them from competitors. Their offer structure confused prospects. And there was no follow-up system to nurture leads that weren't ready to buy immediately.
                  </p>

                  <div className="rounded-2xl bg-foreground text-white p-8 md:p-10 my-10">
                    <p className="font-heading font-bold text-xl md:text-2xl leading-relaxed text-white mb-3">
                      "The tactic wasn't wrong. The foundation it was built on was broken."
                    </p>
                    <p className="font-body text-white/50 text-sm">
                      Fixing the tactic without fixing the foundation just accelerates the problem.
                    </p>
                  </div>

                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    What a Marketing Strategy Actually Is
                  </h2>

                  <p>
                    Strategy is not a document. It's not a brand guideline PDF or a 40-slide PowerPoint deck. A marketing strategy is a set of clear decisions about:
                  </p>

                  <ul className="space-y-3 list-none pl-0">
                    {[
                      "Who exactly you're building for (not \"businesses\" or \"people who need X\"—a specific customer with specific problems)",
                      "What makes you the obvious choice over every alternative (including doing nothing)",
                      "Which channels your ideal customers use to make decisions",
                      "What your offer hierarchy looks like and how you move people from discovery to purchase",
                      "How you measure success in terms of revenue outcomes, not activity metrics",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-heading font-bold text-neon text-lg mt-0.5 shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p>
                    Without clear answers to these questions, every marketing decision becomes a guess. And guessing with budget is expensive.
                  </p>

                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    The Three Warning Signs
                  </h2>

                  <p>
                    Most businesses in the tactic-first trap share the same warning signs. If you're experiencing any of these, strategy—not execution—is your real problem.
                  </p>

                  <div className="space-y-5 my-8">
                    {[
                      {
                        num: "01",
                        title: "You can't explain your positioning in one sentence",
                        body: "If someone asks why they should choose you over a competitor and you need more than 15 seconds to answer—you don't have positioning. You have a description. Descriptions don't win business.",
                      },
                      {
                        num: "02",
                        title: "Your website doesn't have a clear conversion goal",
                        body: "Most SME websites are digital brochures. They list services, include a contact page, and hope visitors figure out what to do next. Strategic websites guide visitors toward a specific action at every stage.",
                      },
                      {
                        num: "03",
                        title: "You're measuring effort instead of revenue",
                        body: "Follower growth, page views, email open rates—these are activity metrics. If your marketing reporting doesn't include pipeline generated, cost per acquisition, and revenue influenced, you're optimizing for the wrong thing.",
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

                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    The Right Order of Operations
                  </h2>

                  <p>
                    The businesses that see consistent, compounding returns from marketing follow a different order. They build foundation first, then layer tactics on top.
                  </p>

                  <p>
                    Foundation means: clear positioning, a converting website, structured offers, and a defined customer journey. With foundation in place, every tactic—ads, SEO, content, social—has a clear job to do and a system to feed into.
                  </p>

                  <p>
                    Without foundation, you're sending traffic into a broken funnel. With foundation, you're directing qualified prospects through a system designed to convert them.
                  </p>

                  <p>
                    The irony is that most businesses spend RM50K on tactics hoping to fix a RM5K foundation problem. The solution is almost always the opposite: invest in foundation first, then scale with confidence.
                  </p>

                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    What to Do Next
                  </h2>

                  <p>
                    Before your next marketing investment—whether it's ads, content, an agency retainer, or a new channel—answer these three questions honestly:
                  </p>

                  <ol className="space-y-3 list-none pl-0">
                    {[
                      "Can you articulate in one sentence who you serve, what you do, and why they should choose you?",
                      "Does your website guide visitors toward a clear action, or does it just exist?",
                      "Do you know your current cost per acquisition and what a good one looks like for your business model?",
                    ].map((q, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-heading font-bold text-foreground/20 text-xl shrink-0">{i + 1}.</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ol>

                  <p>
                    If you hesitated on any of those, you already know what to work on. Fix the foundation. Then scale.
                  </p>
                </div>
              </FadeIn>

              {/* CTA */}
              <FadeIn delay={0.1}>
                <div className="mt-16 rounded-2xl bg-foreground p-8 md:p-10 text-center">
                  <p className="font-body text-white/40 text-xs uppercase tracking-widest mb-3">Ready to Fix the Foundation?</p>
                  <h3 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">
                    Start with a Strategic Audit.
                  </h3>
                  <p className="font-body text-white/50 text-base leading-relaxed mb-6 max-w-md mx-auto">
                    We'll map your current reality, identify the gaps, and show you the highest-impact moves for the next 90 days.
                  </p>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 bg-neon text-black font-heading font-bold text-sm px-6 py-3 rounded-lg hover:bg-neon/90 transition-colors">
                    Book a Strategic Audit <ArrowRight className="size-4" />
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

export default WhyMarketingPlansFail;
