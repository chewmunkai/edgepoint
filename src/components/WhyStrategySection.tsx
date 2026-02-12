import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const problemItems = [
  "Ad campaigns that drive traffic to offers nobody wants",
  "Content that gets engagement but doesn't convert",
  "Websites that look great but don't guide visitors toward action",
  "Budgets spread thin across tactics that don't connect to revenue",
];

const solutionItems = [
  "Every dollar has a clear purpose",
  "Tactics work together, not in isolation",
  "You can measure what's working and kill what's not",
  "Marketing becomes a system, not a series of experiments",
];

const WhyStrategySection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-black/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
            Our Philosophy
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
            Why Start With{" "}
            <span className="bg-[#007BFF] text-white px-2 py-0.5 rounded-sm">
              Strategy
            </span>
          </h2>
        </div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 space-y-4"
        >
          <p className="font-body text-base md:text-lg text-black/70 leading-relaxed">
            Most agencies will execute whatever you ask for. Want a rebrand? Done. Run ads? Let's go. Launch a content series? Sure.
          </p>
          <p className="font-body text-base md:text-lg text-black/90 font-semibold leading-relaxed">
            But if those tactics aren't part of a coherent plan, you're just spending money to stay busy.
          </p>
        </motion.div>

        {/* Problem: What happens when you skip strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <h3 className="font-heading text-sm md:text-base tracking-widest uppercase text-black/40 mb-6">
            Here's what happens when you skip strategy:
          </h3>
          <ul className="space-y-4">
            {problemItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                className="flex items-start gap-3 font-body text-base md:text-lg text-black/70"
              >
                <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Solution: Strategy first means */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <h3 className="font-heading text-sm md:text-base tracking-widest uppercase text-black/40 mb-6">
            Strategy first means:
          </h3>
          <ul className="space-y-4">
            {solutionItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
                className="flex items-start gap-3 font-body text-base md:text-lg text-black/90"
              >
                <Check className="w-5 h-5 text-[#99FF33] mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-body text-base md:text-lg text-black/90 font-semibold leading-relaxed border-l-4 border-[#007BFF] pl-5"
        >
          We help you decide what deserves to be built before you build it. Then we execute it with discipline.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyStrategySection;
