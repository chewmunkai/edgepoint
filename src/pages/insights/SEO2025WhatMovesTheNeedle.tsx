import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import blogImage from "@/assets/blog-seo-2025.jpg";

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
  { slug: "true-cost-of-random-marketing", title: "The True Cost of Random Marketing", category: "Growth" },
];

const SEO2025WhatMovesTheNeedle = () => {
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
                <span className="inline-block font-body text-xs font-medium text-neon uppercase tracking-widest mb-5">SEO</span>
                <h1 className="font-heading font-bold text-3xl md:text-5xl text-white leading-[1.08] mb-6">
                  SEO in 2025: What Actually Moves the Needle
                </h1>
                <p className="font-body text-white/50 text-lg leading-relaxed mb-8">
                  Forget keyword stuffing. Here's what search engines really reward now—and how to build an organic strategy that compounds over time.
                </p>
                <div className="flex items-center gap-5 text-white/30 font-body text-sm">
                  <span className="flex items-center gap-1.5"><Calendar className="size-3.5" /> February 2025</span>
                  <span className="flex items-center gap-1.5"><Clock className="size-3.5" /> 9 min read</span>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ── Hero Image ── */}
          <div className="container mx-auto px-4 max-w-3xl -mt-12 relative z-10">
            <FadeIn>
              <img src={blogImage} alt="SEO in 2025" className="w-full rounded-2xl shadow-2xl aspect-[16/9] object-cover" />
            </FadeIn>
          </div>

          {/* ── Body ── */}
          <section className="bg-background">
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">

              <FadeIn>
                <div className="font-body text-foreground/70 leading-relaxed space-y-6">

                  <p className="text-foreground/80 text-xl leading-relaxed font-medium">
                    SEO has changed more in the last 18 months than in the previous five years combined. AI-generated content flooded the web, Google's algorithm updates became more aggressive, and the businesses that were "winning" with volume-first content strategies got hit hard.
                  </p>

                  <p>
                    But here's the thing: the fundamentals of SEO haven't changed. What's changed is how strictly they're being enforced—and what it now takes to stand out in a world saturated with AI-assisted mediocrity.
                  </p>

                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    The Death of the Volume Game
                  </h2>

                  <p>
                    For years, the playbook was simple: publish more content, target more keywords, build more links. The businesses that could produce content at scale had an advantage. Then AI made content production essentially free—and overnight, the competitive moat of "we publish more" disappeared.
                  </p>

                  <p>
                    Google's response was to double down on quality signals that AI-generated content struggles to fake: genuine expertise, real author authority, content that demonstrates first-hand experience, and pages that actually satisfy search intent rather than just matching keywords.
                  </p>

                  <div className="rounded-2xl bg-foreground text-white p-8 md:p-10 my-10">
                    <p className="font-heading font-bold text-xl md:text-2xl leading-relaxed text-white mb-3">
                      "Publishing 10 genuinely useful articles will outperform 100 mediocre ones—every time."
                    </p>
                    <p className="font-body text-white/50 text-sm">
                      The volume game is over. The expertise game is just getting started.
                    </p>
                  </div>

                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    What Actually Moves the Needle in 2025
                  </h2>

                  <div className="space-y-6 my-8">
                    {[
                      {
                        num: "01",
                        title: "Commercial Intent Keyword Targeting",
                        body: "Ranking for informational queries is fine, but it's commercial intent keywords—the searches people make when they're close to a purchase decision—that drive revenue. If your keyword strategy isn't mapped to your customer journey and buying stages, you're attracting the wrong traffic.",
                      },
                      {
                        num: "02",
                        title: "Topical Authority Over Keyword Coverage",
                        body: "Google increasingly rewards sites that demonstrate deep expertise on a topic over sites that cover many topics shallowly. A business that comprehensively covers everything related to B2B lead generation will outrank one that has one surface-level article on the same topic—even if the latter has more backlinks.",
                      },
                      {
                        num: "03",
                        title: "Technical Foundations That Actually Matter",
                        body: "Page speed, mobile responsiveness, Core Web Vitals—these matter, but not as much as some agencies would have you believe. What matters more: crawlability, proper internal linking, and ensuring Google can actually index and understand your content hierarchy.",
                      },
                      {
                        num: "04",
                        title: "Content That Earns Links Naturally",
                        body: "The best link-building strategy is creating content that other websites actually want to reference—original research, comprehensive guides, unique data, genuine expert perspectives. Outreach campaigns for generic content have diminishing returns. Remarkable content earns links passively.",
                      },
                      {
                        num: "05",
                        title: "Conversion-Optimised Landing Pages",
                        body: "Organic traffic without a converting destination is wasted. Too many businesses invest in SEO to drive traffic, then send visitors to generic service pages with no clear call to action. Every high-intent keyword should have a dedicated, purpose-built page designed to convert.",
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
                    The Channels That Amplify SEO
                  </h2>

                  <p>
                    SEO doesn't exist in isolation. The businesses seeing the strongest organic growth treat it as part of an integrated system:
                  </p>

                  <ul className="space-y-3 list-none pl-0">
                    {[
                      "Social media amplifies content reach and generates signals that indirectly support rankings",
                      "Email marketing drives repeat visitors and engagement signals to high-priority pages",
                      "PR and thought leadership earn the kind of editorial links that move domain authority",
                      "Paid search data reveals which organic keywords actually convert, not just rank",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="font-heading font-bold text-neon text-lg mt-0.5 shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    The Timeline Reality
                  </h2>

                  <p>
                    If someone promises you SEO results in 30 days, run. Organic search is a compounding channel—it takes time to build, but the returns continue long after the work is done. A realistic timeline:
                  </p>

                  <div className="grid gap-3 my-6">
                    {[
                      { period: "Month 1–2", desc: "Technical fixes, content strategy, initial content production. No visible results yet." },
                      { period: "Month 3–4", desc: "Early rankings for low-competition terms. Traffic starts to trickle in." },
                      { period: "Month 5–6", desc: "Compounding begins. Rankings improve, traffic grows, conversions appear." },
                      { period: "Month 6+", desc: "Exponential returns. Every asset you've created continues working for you." },
                    ].map((row) => (
                      <div key={row.period} className="flex items-start gap-4 rounded-lg border border-foreground/8 bg-white p-4">
                        <span className="font-heading font-bold text-sm text-foreground/40 whitespace-nowrap w-28 shrink-0">{row.period}</span>
                        <p className="font-body text-foreground/60 text-sm leading-relaxed">{row.desc}</p>
                      </div>
                    ))}
                  </div>

                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4">
                    The Question to Ask Before You Start
                  </h2>

                  <p>
                    Before investing in SEO, ask: "Do we have a converting website for organic traffic to land on?" If the answer is no, fix that first. SEO drives discovery. Your website converts that discovery into revenue. One without the other is wasted investment.
                  </p>

                  <p>
                    The businesses winning at organic growth in 2025 aren't the ones publishing the most. They're the ones with the clearest positioning, the most useful content, and the tightest conversion funnels. That's the game worth playing.
                  </p>

                </div>
              </FadeIn>

              {/* CTA */}
              <FadeIn delay={0.1}>
                <div className="mt-16 rounded-2xl bg-foreground p-8 md:p-10 text-center">
                  <p className="font-body text-white/40 text-xs uppercase tracking-widest mb-3">Want an Organic Strategy That Actually Works?</p>
                  <h3 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">
                    Start with a Strategic Audit.
                  </h3>
                  <p className="font-body text-white/50 text-base leading-relaxed mb-6 max-w-md mx-auto">
                    We'll assess your current organic presence, identify your biggest opportunities, and build a roadmap tied to revenue outcomes.
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

export default SEO2025WhatMovesTheNeedle;
