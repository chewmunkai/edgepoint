import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "Why Most Marketing Plans Fail Before They Start",
    description: "The biggest mistake SMEs make isn't choosing the wrong tactic—it's skipping strategy entirely.",
    category: "Strategy",
  },
  {
    title: "SEO in 2025: What Actually Moves the Needle",
    description: "Forget keyword stuffing. Here's what search engines really reward now.",
    category: "SEO",
  },
  {
    title: "The True Cost of Random Marketing",
    description: "How disconnected campaigns silently drain your budget and stall growth.",
    category: "Growth",
  },
];

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
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link to="/insights" className="group block">
                  <div className="rounded-xl border border-foreground/10 bg-white overflow-hidden transition-all duration-300 hover:shadow-md hover:border-foreground/20">
                    <div className="aspect-[16/9] bg-foreground/[0.03] flex items-center justify-center">
                      <span className="font-body text-xs text-foreground/20 uppercase tracking-widest">
                        Coming Soon
                      </span>
                    </div>
                    <div className="p-5">
                      <span className="font-body text-xs text-agency-blue font-medium uppercase tracking-wider">
                        {article.category}
                      </span>
                      <h3 className="font-body text-base font-semibold text-foreground mt-2 mb-2 group-hover:text-agency-blue transition-colors">
                        {article.title}
                      </h3>
                      <p className="font-body text-sm text-foreground/50 leading-relaxed">
                        {article.description}
                      </p>
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
