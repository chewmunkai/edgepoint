import { motion } from "framer-motion";
import { CircleCheck, CircleX } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs">
            Our Philosophy
          </p>
          <h2 className="text-pretty text-3xl font-bold lg:text-5xl leading-tight text-foreground">
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
            <p className="font-body text-base md:text-lg text-foreground/50 leading-relaxed">
              Most agencies will execute whatever you ask for.
            </p>
            <p className="font-body text-base md:text-lg text-foreground/90 font-semibold leading-relaxed">
              But if those tactics aren't part of a coherent plan,
              <br />
              you're just spending money to stay busy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full max-w-4xl mt-8 rounded-xl overflow-hidden border border-foreground/10">
            {/* Without Strategy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-foreground/[0.02] p-6 md:p-8 text-left md:border-r border-b md:border-b-0 border-foreground/10"
            >
              <div className="mb-6">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-foreground/30 mb-1">
                  Without Strategy
                </p>
                <p className="font-body text-sm text-foreground/40">
                  Execution without direction
                </p>
              </div>
              <Separator className="mb-6 bg-foreground/5" />
              <ul className="space-y-5">
                {withoutFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start gap-3 font-body text-sm text-foreground/50 leading-relaxed"
                  >
                    <CircleX className="size-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* With Strategy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-agency-blue/[0.03] p-6 md:p-8 text-left"
            >
              <div className="mb-6">
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-agency-blue mb-1">
                  With Strategy
                </p>
                <p className="font-body text-sm text-foreground/40">
                  A system that compounds
                </p>
              </div>
              <Separator className="mb-6 bg-agency-blue/10" />
              <ul className="space-y-5">
                {withFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start gap-3 font-body text-sm text-foreground/90 leading-relaxed"
                  >
                    <CircleCheck className="size-4 text-agency-blue flex-shrink-0 mt-0.5" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-base md:text-lg text-foreground/90 font-semibold leading-relaxed border-l-4 border-agency-blue pl-5 max-w-2xl text-left mt-8"
          >
            We help you decide what deserves to be built before you build it. Then we execute it with discipline.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhyStrategySection;
