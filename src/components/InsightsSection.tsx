import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, ArrowUpRight } from "lucide-react";

const InsightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const insights = [
    {
      category: "Strategy",
      title: "Why Most Marketing Plans Fail Before They Start",
      readTime: "5 min read",
      featured: true,
    },
    {
      category: "Growth",
      title: "The Compound Effect in Paid Media",
      readTime: "4 min read",
      featured: false,
    },
    {
      category: "Operations",
      title: "Building Marketing Systems That Scale",
      readTime: "6 min read",
      featured: false,
    },
    {
      category: "Positioning",
      title: "Differentiation in Saturated Markets",
      readTime: "4 min read",
      featured: false,
    },
  ];

  return (
    <section id="insights" className="section-light py-32 bg-gray-50">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <p className="text-agency-blue font-body font-medium tracking-widest uppercase text-sm mb-4">
                Insights
              </p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-black leading-tight">
                Thinking output.
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-agency-blue font-heading font-semibold hover:gap-4 transition-all duration-300"
            >
              View All
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Insights Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Article */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-2xl hover:shadow-agency-blue/10 transition-all duration-500 lg:row-span-2"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-agency-blue/10 to-agency-blue/5 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-agency-blue/20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-agency-blue" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-agency-blue font-body font-medium text-sm">
                    {insights[0].category}
                  </span>
                  <span className="text-black/30">•</span>
                  <span className="text-black/50 font-body text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {insights[0].readTime}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-black mb-4 group-hover:text-agency-blue transition-colors duration-300">
                  {insights[0].title}
                </h3>
                <p className="font-body text-black/60 leading-relaxed mb-6">
                  The gap between strategy and execution is where most growth initiatives fail. 
                  Learn how to bridge it with systems thinking.
                </p>
                <div className="flex items-center text-agency-blue font-heading font-semibold text-sm">
                  Read Article
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>
              </div>
            </motion.article>

            {/* Other Articles */}
            <div className="space-y-6">
              {insights.slice(1).map((insight, index) => (
                <motion.article
                  key={insight.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group bg-white rounded-2xl p-6 border border-black/5 hover:shadow-xl hover:shadow-agency-blue/10 transition-all duration-500 cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-agency-blue font-body font-medium text-sm">
                      {insight.category}
                    </span>
                    <span className="text-black/30">•</span>
                    <span className="text-black/50 font-body text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {insight.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-black group-hover:text-agency-blue transition-colors duration-300">
                    {insight.title}
                  </h3>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
