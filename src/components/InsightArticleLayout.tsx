import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar, Terminal } from "lucide-react";

export const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
};

const categoryColors: Record<string, string> = {
  Strategy: "text-agency-blue",
  SEO: "text-neon",
  Growth: "text-orange-500",
};

interface RelatedArticle {
  slug: string;
  title: string;
  category: string;
  image: string;
}

interface ArticleMeta {
  category: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  heroImage: string;
}

interface InsightArticleLayoutProps {
  meta: ArticleMeta;
  seoHead: React.ReactNode;
  children: React.ReactNode;
  relatedArticles: RelatedArticle[];
  ctaLabel: string;
  ctaTitle: string;
  ctaDescription: string;
}

const InsightArticleLayout = ({
  meta,
  seoHead,
  children,
  relatedArticles,
  ctaLabel,
  ctaTitle,
  ctaDescription,
}: InsightArticleLayoutProps) => {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        {seoHead}
        <Header />
        <main>

          {/* ── Retro-Futuristic Hero ── */}
          <section className="bg-foreground relative overflow-hidden pt-28 pb-0 md:pt-36">
            {/* Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)",
              }}
            />
            {/* Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            {/* Neon glow accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-3xl relative z-10">
              <FadeIn>
                <Link to="/insights" className="inline-flex items-center gap-2 text-white/30 hover:text-neon font-heading text-xs uppercase tracking-widest transition-colors mb-8 group">
                  <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform" /> Back to Insights
                </Link>

                {/* Category badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.05] font-heading text-[10px] font-bold uppercase tracking-widest ${categoryColors[meta.category]}`}>
                    <Terminal className="size-3" />
                    {meta.category}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                </div>

                <h1 className="font-heading font-bold text-3xl md:text-[2.75rem] lg:text-5xl text-white leading-[1.08] mb-5">
                  {meta.title}
                </h1>
                <p className="font-body text-white/40 text-lg leading-relaxed mb-8 max-w-2xl">
                  {meta.subtitle}
                </p>

                {/* Meta bar */}
                <div className="flex items-center gap-5 text-white/25 font-heading text-[10px] uppercase tracking-widest pb-8 border-b border-white/5">
                  <span className="flex items-center gap-1.5"><Calendar className="size-3" /> {meta.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="size-3" /> {meta.readTime}</span>
                </div>
              </FadeIn>
            </div>

            {/* Hero Image — full-bleed with fade */}
            <div className="container mx-auto px-4 max-w-4xl mt-8 relative z-10">
              <FadeIn>
                <div className="relative rounded-t-2xl overflow-hidden">
                  <img
                    src={meta.heroImage}
                    alt={meta.title}
                    className="w-full aspect-[2/1] md:aspect-[2.4/1] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" />
                  {/* Scanline on image */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.2) 1px, rgba(0,0,0,0.2) 2px)",
                    }}
                  />
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ── Body ── */}
          <section className="bg-background">
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
              <FadeIn>
                <div className="font-body text-foreground/70 leading-relaxed space-y-6">
                  {children}
                </div>
              </FadeIn>

              {/* CTA */}
              <FadeIn delay={0.1}>
                <div className="mt-16 rounded-2xl bg-foreground p-8 md:p-10 relative overflow-hidden">
                  {/* Grid bg */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <div className="absolute top-0 right-0 w-48 h-48 bg-neon/5 rounded-full blur-[80px] pointer-events-none" />
                  <div className="relative z-10 text-center">
                    <p className="font-heading text-neon/50 text-[10px] uppercase tracking-[0.3em] mb-3">{ctaLabel}</p>
                    <h3 className="font-heading font-bold text-white text-2xl md:text-3xl mb-4">
                      {ctaTitle}
                    </h3>
                    <p className="font-body text-white/40 text-base leading-relaxed mb-6 max-w-md mx-auto">
                      {ctaDescription}
                    </p>
                    <Link to="/contact"
                      className="inline-flex items-center gap-2 bg-neon text-foreground font-heading font-bold text-sm px-6 py-3 rounded-lg hover:bg-neon/90 transition-colors">
                      Book a Strategic Audit
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* Related */}
              <FadeIn delay={0.15}>
                <div className="mt-16 pt-12 border-t border-foreground/10">
                  <p className="font-heading text-foreground/30 text-[10px] uppercase tracking-[0.3em] mb-6">Related Articles</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {relatedArticles.map((a) => (
                      <Link key={a.slug} to={`/insights/${a.slug}`}
                        className="group rounded-xl border border-foreground/10 bg-white overflow-hidden hover:border-foreground/25 transition-all duration-300 hover:shadow-sm">
                        <div className="h-32 overflow-hidden">
                          <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-5">
                          <span className={`font-heading text-[10px] font-bold uppercase tracking-widest ${categoryColors[a.category]}`}>{a.category}</span>
                          <h4 className="font-heading font-bold text-foreground text-sm mt-2 group-hover:text-neon transition-colors leading-snug">
                            {a.title}
                          </h4>
                          <span className="inline-flex items-center gap-1 font-heading text-[10px] text-foreground/30 mt-3 group-hover:text-neon group-hover:gap-2 transition-all uppercase tracking-widest">
                            Read article <ArrowRight className="size-3" />
                          </span>
                        </div>
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

/* ── Reusable styled content blocks ── */

export const ArticleQuote = ({ quote, attribution }: { quote: string; attribution: string }) => (
  <div className="rounded-2xl bg-foreground text-white p-8 md:p-10 my-10 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-1 h-full bg-neon" />
    <div className="absolute top-2 right-4 font-heading text-7xl text-white/[0.04] leading-none select-none">"</div>
    <p className="font-heading font-bold text-xl md:text-2xl leading-relaxed text-white mb-3 relative z-10">
      "{quote}"
    </p>
    <p className="font-body text-white/40 text-sm relative z-10">
      {attribution}
    </p>
  </div>
);

export const NumberedCard = ({ num, title, body }: { num: string; title: string; body: string }) => (
  <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-6 relative overflow-hidden group/card hover:border-foreground/20 transition-colors">
    <div className="absolute top-3 right-4 font-heading font-bold text-5xl text-foreground/[0.04] leading-none select-none">{num}</div>
    <div className="flex items-start gap-4 relative z-10">
      <span className="font-heading font-bold text-sm text-neon/40 shrink-0 mt-0.5">{num}</span>
      <div>
        <h3 className="font-heading font-bold text-foreground text-base mb-2">{title}</h3>
        <p className="font-body text-foreground/55 text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  </div>
);

export const ArticleH2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-4 flex items-center gap-3">
    <span className="w-6 h-px bg-neon/40 shrink-0" />
    {children}
  </h2>
);

export const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 list-none pl-0">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="font-heading font-bold text-neon text-lg mt-0.5 shrink-0">→</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default InsightArticleLayout;
