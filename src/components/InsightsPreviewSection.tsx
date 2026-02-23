import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import blogMarketing from "@/assets/blog-why-marketing-plans-fail.jpg";
import blogSeo from "@/assets/blog-seo-2025.jpg";
import blogCost from "@/assets/blog-true-cost-random-marketing.jpg";

const articles = [
  {
    slug: "why-marketing-plans-fail",
    title: "Why Most Marketing Plans Fail Before They Start",
    excerpt: "The biggest mistake SMEs make isn't choosing the wrong tactic—it's skipping strategy entirely.",
    category: "Strategy",
    date: "January 2025",
    readTime: "7 min read",
    image: blogMarketing,
  },
  {
    slug: "seo-2025-what-moves-the-needle",
    title: "SEO in 2025: What Actually Moves the Needle",
    excerpt: "Forget keyword stuffing. Here's what search engines really reward now.",
    category: "SEO",
    date: "February 2025",
    readTime: "9 min read",
    image: blogSeo,
  },
  {
    slug: "true-cost-of-random-marketing",
    title: "The True Cost of Random Marketing",
    excerpt: "How disconnected campaigns silently drain your budget and stall growth.",
    category: "Growth",
    date: "February 2025",
    readTime: "8 min read",
    image: blogCost,
  },
];

const categoryColors: Record<string, string> = {
  Strategy: "text-agency-blue",
  SEO: "text-neon",
  Growth: "text-orange-500",
};

const InsightsPreviewSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                Insights
              </p>
              <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
                Latest{" "}
                <span className="bg-agency-blue text-white px-2 py-0.5 rounded-sm">
                  Thinking
                </span>
              </h2>
            </div>
            <Link
              to="/insights"
              className="hidden md:inline-flex items-center gap-1.5 font-body text-sm font-medium text-agency-blue hover:text-agency-blue/80 transition-colors"
            >
              View all
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to={`/insights/${article.slug}`} className="group flex flex-col h-full">
                  <div className="flex flex-col h-full rounded-xl border border-foreground/10 bg-white overflow-hidden transition-all duration-300 hover:shadow-md hover:border-foreground/20">
                    {/* Article image */}
                    <div className="overflow-hidden h-44">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className={`font-body text-xs font-medium uppercase tracking-wider ${categoryColors[article.category]}`}>
                          {article.category}
                        </span>
                        <span className="text-foreground/20 text-xs">·</span>
                        <span className="font-body text-xs text-foreground/30 flex items-center gap-1">
                          <Clock className="size-3" /> {article.readTime}
                        </span>
                      </div>
                      <h3 className="font-body text-base font-semibold text-foreground mb-2 group-hover:text-agency-blue transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="font-body text-sm text-foreground/50 leading-relaxed flex-1">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 font-body text-xs font-semibold text-foreground/30 group-hover:text-agency-blue group-hover:gap-2 transition-all duration-300 mt-4">
                        Read article <ArrowRight className="size-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <Link
            to="/insights"
            className="md:hidden inline-flex items-center gap-1.5 font-body text-sm font-medium text-agency-blue hover:text-agency-blue/80 transition-colors mt-6"
          >
            View all insights
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsPreviewSection;
