import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import SmoothScroll from "@/components/ui/smooth-scroll";
import SEOHead from "@/components/SEOHead";

export const articles = [
  {
    slug: "why-marketing-plans-fail",
    title: "Why Most Marketing Plans Fail Before They Start",
    excerpt: "The biggest mistake SMEs make isn't choosing the wrong tactic—it's skipping strategy entirely. Here's what that costs you and how to fix it.",
    category: "Strategy",
    date: "January 2025",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "seo-2025-what-moves-the-needle",
    title: "SEO in 2025: What Actually Moves the Needle",
    excerpt: "Forget keyword stuffing. Here's what search engines really reward now—and how to build an organic strategy that compounds over time.",
    category: "SEO",
    date: "February 2025",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "true-cost-of-random-marketing",
    title: "The True Cost of Random Marketing",
    excerpt: "How disconnected campaigns silently drain your budget and stall growth—and the counterintuitive fix that most businesses overlook.",
    category: "Growth",
    date: "February 2025",
    readTime: "8 min read",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Strategy: "text-agency-blue",
  SEO: "text-neon",
  Growth: "text-orange-500",
};

const Insights = () => {
  const [featured, ...rest] = articles;

  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <SEOHead
          title="Marketing Insights & Articles | Edge Point"
          description="Perspectives on strategy, growth, SEO, and building marketing that actually works for Malaysian SMEs."
        />
        <Header />
        <main>
          <PageHero
            label="Insights"
            title="Latest Thinking."
            highlightWord="Thinking."
            description="Perspectives on strategy, growth, and building marketing that actually works."
          />

          <section className="bg-[#f5f5f5] py-16 md:py-24 px-4">
            <div className="container mx-auto max-w-5xl">

              {/* Featured Article */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-10"
              >
                <Link
                  to={`/insights/${featured.slug}`}
                  className="group grid md:grid-cols-[1.5fr_1fr] rounded-2xl border border-foreground/10 bg-white overflow-hidden hover:border-foreground/25 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <span className={`font-body text-xs font-medium uppercase tracking-widest ${categoryColors[featured.category]}`}>
                          {featured.category}
                        </span>
                        <span className="text-foreground/20 text-xs">·</span>
                        <span className="font-body text-xs text-foreground/30 flex items-center gap-1.5">
                          <Calendar className="size-3" /> {featured.date}
                        </span>
                        <span className="font-body text-xs text-foreground/30 flex items-center gap-1.5">
                          <Clock className="size-3" /> {featured.readTime}
                        </span>
                      </div>
                      <h2 className="font-heading font-bold text-foreground text-2xl md:text-3xl leading-tight mb-4 group-hover:text-neon transition-colors duration-300">
                        {featured.title}
                      </h2>
                      <p className="font-body text-foreground/50 text-base leading-relaxed">
                        {featured.excerpt}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-foreground/40 group-hover:text-neon group-hover:gap-2.5 transition-all duration-300 mt-8">
                      Read article <ArrowRight className="size-4" />
                    </span>
                  </div>
                  <div className="hidden md:flex bg-foreground/[0.04] items-center justify-center min-h-[280px] border-l border-foreground/10">
                    <div className="text-center p-8">
                      <span className="font-heading font-bold text-8xl text-foreground/5 block leading-none">01</span>
                      <span className={`font-body text-sm font-medium uppercase tracking-widest ${categoryColors[featured.category]}`}>
                        Featured
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Article Grid */}
              <div className="grid sm:grid-cols-2 gap-5">
                {rest.map((article, i) => (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <Link
                      to={`/insights/${article.slug}`}
                      className="group flex flex-col h-full rounded-2xl border border-foreground/10 bg-white overflow-hidden hover:border-foreground/25 transition-all duration-300 hover:shadow-sm"
                    >
                      <div className="flex-1 p-7">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`font-body text-xs font-medium uppercase tracking-widest ${categoryColors[article.category]}`}>
                            {article.category}
                          </span>
                          <span className="text-foreground/20 text-xs">·</span>
                          <span className="font-body text-xs text-foreground/30 flex items-center gap-1.5">
                            <Clock className="size-3" /> {article.readTime}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-foreground text-lg leading-snug mb-3 group-hover:text-neon transition-colors duration-300">
                          {article.title}
                        </h3>
                        <p className="font-body text-foreground/50 text-sm leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="px-7 pb-6 pt-0">
                        <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-foreground/40 group-hover:text-neon group-hover:gap-2.5 transition-all duration-300">
                          Read article <ArrowRight className="size-3.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Insights;
