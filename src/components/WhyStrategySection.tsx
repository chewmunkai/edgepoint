import { motion } from "framer-motion";
import { CircleCheck, CircleX } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const withoutFeatures = [
  "Ad campaigns that drive traffic to offers nobody wants",
  "Content that gets engagement but doesn't convert",
  "Websites that look great but don't guide visitors toward action",
  "Budgets spread thin across tactics that don't connect to revenue",
];

const withFeatures = [
  "Every dollar has a clear purpose",
  "Tactics work together, not in isolation",
  "You can measure what's working and kill what's not",
  "Marketing becomes a system, not a series of experiments",
];

const WhyStrategySection = () => {
  return (
    <section className="py-20 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <p className="text-white/30 font-body font-medium tracking-widest uppercase text-xs">
            Our Philosophy
          </p>
          <h2 className="text-pretty text-3xl font-bold lg:text-5xl leading-tight text-white">
            Why Start With{" "}
            <span className="bg-agency-blue text-white px-2 py-0.5 rounded-sm">
              Strategy
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl space-y-3"
          >
            <p className="font-body text-base md:text-lg text-white/40 leading-relaxed">
              Most agencies will execute whatever you ask for.
            </p>
            <p className="font-body text-base md:text-lg text-white/80 font-semibold leading-relaxed">
              But if those tactics aren't part of a coherent plan,
              <br />
              you're just spending money to stay busy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mt-10">
            {/* Without Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlowCard
                glowColor="red"
                customSize
                className="w-full !aspect-auto p-6 md:p-8"
              >
                <div className="relative z-10 text-left flex flex-col h-full">
                  <div className="mb-6">
                    <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-red-400 mb-2">
                      Without Strategy
                    </p>
                    <p className="font-body text-sm text-white/30">
                      Execution without direction
                    </p>
                  </div>
                  <div className="h-px w-full bg-white/10 mb-6" />
                  <ul className="space-y-5 flex-1">
                    {withoutFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex items-start gap-3 font-body text-sm text-white/50 leading-relaxed"
                      >
                        <CircleX className="size-4 text-red-400/80 flex-shrink-0 mt-0.5" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </motion.div>

            {/* With Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <GlowCard
                glowColor="blue"
                customSize
                className="w-full !aspect-auto p-6 md:p-8"
              >
                <div className="relative z-10 text-left flex flex-col h-full">
                  <div className="mb-6">
                    <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-agency-blue mb-2">
                      With Strategy
                    </p>
                    <p className="font-body text-sm text-white/30">
                      A system that compounds
                    </p>
                  </div>
                  <div className="h-px w-full bg-agency-blue/20 mb-6" />
                  <ul className="space-y-5 flex-1">
                    {withFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="flex items-start gap-3 font-body text-sm text-white/80 leading-relaxed"
                      >
                        <CircleCheck className="size-4 text-agency-blue flex-shrink-0 mt-0.5" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-base md:text-lg text-white/80 font-semibold leading-relaxed border-l-4 border-agency-blue pl-5 max-w-2xl text-left mt-8"
          >
            We help you decide what deserves to be built before you build it. Then we execute it with discipline.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhyStrategySection;
