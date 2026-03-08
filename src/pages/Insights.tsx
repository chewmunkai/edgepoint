import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar, Terminal } from "lucide-react";
import SmoothScroll from "@/components/ui/smooth-scroll";
import SEOHead from "@/components/SEOHead";
import blogMarketing from "@/assets/blog-why-marketing-plans-fail.jpg";
import blogSeo from "@/assets/blog-seo-2025.jpg";
import blogCost from "@/assets/blog-true-cost-random-marketing.jpg";

export const articles = [
  {
    slug: "why-marketing-plans-fail",
    title: "Why Most Marketing Plans Fail Before They Start",
    excerpt: "The biggest mistake SMEs make isn't choosing the wrong tactic—it's skipping strategy entirely. Here's what that costs you and how to fix it.",
    category: "Strategy",
    date: "January 2025",
    readTime: "7 min read",
    featured: true,
    image: blogMarketing,
  },
  {
    slug: "seo-2025-what-moves-the-needle",
    title: "SEO in 2025: What Actually Moves the Needle",
    excerpt: "Forget keyword stuffing. Here's what search engines really reward now—and how to build an organic strategy that compounds over time.",
    category: "SEO",
    date: "February 2025",
    readTime: "9 min read",
    featured: false,
    image: blogSeo,
  },
  {
    slug: "true-cost-of-random-marketing",
    title: "The True Cost of Random Marketing",
    excerpt: "How disconnected campaigns silently drain your budget and stall growth—and the counterintuitive fix that most businesses overlook.",
    category: "Growth",
    date: "February 2025",
    readTime: "8 min read",
    featured: false,
    image: blogCost,
  },
];

const categoryColors: Record<string, string> = {
  Strategy: "text-agency-blue",
  SEO: "text-neon",
  Growth: "text-orange-500",
};

const categoryBgColors: Record<string, string> = {
  Strategy: "bg-agency-blue/10 border-agency-blue/20",
  SEO: "bg-neon/10 border-neon/20",
  Growth: "bg-orange-500/10 border-orange-500/20",
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

          <section className="bg-foreground py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
              }}
            />
            {/* Grid pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <div className="container mx-auto max-w-5xl relative z-10">

              {/* Featured Article — full-width with image */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-10"
              >
                <Link
                  to={`/insights/${featured.slug}`}
                  className="group grid md:grid-cols-2 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-neon/30 transition-all duration-500 hover:shadow-[0_0_40px_-12px_hsl(var(--neon-green)/0.15)]"
                >
                  {/* Image */}
                  <div className="overflow-hidden h-56 md:h-full relative">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-foreground/40 md:block hidden" />
                    {/* Corner marker */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-heading font-bold uppercase tracking-widest ${categoryBgColors[featured.category]} ${categoryColors[featured.category]}`}>
                        <Terminal className="size-3" />
                        {featured.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-5 font-body text-xs text-white/30">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="size-3" /> {featured.date}
                        </span>
                        <span className="text-white/10">|</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="size-3" /> {featured.readTime}
                        </span>
                      </div>
                      <h2 className="font-heading font-bold text-white text-2xl md:text-3xl leading-tight mb-4 group-hover:text-neon transition-colors duration-300">
                        {featured.title}
                      </h2>
                      <p className="font-body text-white/40 text-base leading-relaxed">
                        {featured.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                      <span className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-neon/60 group-hover:text-neon group-hover:gap-2.5 transition-all duration-300 uppercase tracking-widest">
                        Read article <ArrowRight className="size-3.5" />
                      </span>
                      <span className="font-heading font-bold text-6xl text-white/[0.04] leading-none">01</span>
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
                      className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-neon/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_hsl(var(--neon-green)/0.1)]"
                    >
                      {/* Image */}
                      <div className="overflow-hidden h-48 relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-heading font-bold uppercase tracking-widest ${categoryBgColors[article.category]} ${categoryColors[article.category]}`}>
                            {article.category}
                          </span>
                        </div>
                        <span className="absolute bottom-3 right-3 font-heading font-bold text-5xl text-white/[0.08] leading-none">
                          0{i + 2}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6">
                        <div className="flex items-center gap-3 mb-3 font-body text-xs text-white/25">
                          <span className="flex items-center gap-1.5">
                            <Clock className="size-3" /> {article.readTime}
                          </span>
                          <span className="text-white/10">|</span>
                          <span>{article.date}</span>
                        </div>
                        <h3 className="font-heading font-bold text-white text-lg leading-snug mb-3 group-hover:text-neon transition-colors duration-300">
                          {article.title}
                        </h3>
                        <p className="font-body text-white/35 text-sm leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="px-6 pb-5 pt-0">
                        <span className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-neon/50 group-hover:text-neon group-hover:gap-2.5 transition-all duration-300 uppercase tracking-widest">
                          Read article <ArrowRight className="size-3" />
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
