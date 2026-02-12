import { motion } from "framer-motion";
import { CircleCheck, CircleX } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const withoutFeatures = [
  "Random tactics with no direction",
  "Wasted budget on disconnected efforts",
  "No measurable connection to revenue",
  "Constant pivots without learning",
];

const withFeatures = [
  "Clear system driving every decision",
  "Measured growth tied to outcomes",
  "Revenue-connected execution",
  "Compounding results over time",
];

const WhyStrategySection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          {/* Header */}
          <p className="text-muted-foreground font-body font-medium tracking-widest uppercase text-xs">
            Our Philosophy
          </p>
          <h2 className="text-pretty text-3xl font-bold lg:text-5xl leading-tight">
            Why Start With{" "}
            <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-sm">
              Strategy
            </span>
          </h2>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl space-y-3"
          >
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Most agencies will execute whatever you ask for.
            </p>
            <p className="font-body text-base md:text-lg text-foreground font-semibold leading-relaxed">
              But if those tactics aren't part of a coherent plan,
              <br />
              you're just spending money to stay busy.
            </p>
          </motion.div>

          {/* Side-by-side cards */}
          <div className="flex flex-col items-stretch gap-6 md:flex-row w-full max-w-4xl mt-8">
            {/* Without Strategy Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <Card className="flex h-full flex-col text-left border-destructive/20 bg-destructive/[0.02]">
                <CardHeader>
                  <CardTitle>
                    <p className="font-body text-lg">Without Strategy</p>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-body">
                    Execution without direction
                  </p>

                  {/* Chaos visual */}
                  <div className="relative h-36 mt-4 rounded-lg bg-destructive/[0.04] border border-destructive/10 overflow-hidden flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 3, -2, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-4 left-6 bg-destructive/10 border border-destructive/20 rounded-md px-2.5 py-1 font-body text-xs text-destructive font-medium"
                    >
                      AD SPEND
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [0, -2, 3, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute top-12 right-8 bg-destructive/10 border border-destructive/20 rounded-md px-2.5 py-1 font-body text-xs text-destructive font-medium"
                    >
                      REBRAND
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [0, 2, -3, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-10 left-10 bg-destructive/10 border border-destructive/20 rounded-md px-2.5 py-1 font-body text-xs text-destructive font-medium"
                    >
                      POST
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [0, -3, 2, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                      className="absolute bottom-6 right-6 bg-destructive/10 border border-destructive/20 rounded-md px-2.5 py-1 font-body text-xs text-destructive font-medium"
                    >
                      CONTENT
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <Separator className="mb-6" />
                  <p className="mb-3 text-sm font-semibold font-body text-muted-foreground">
                    What you get:
                  </p>
                  <ul className="space-y-4">
                    {withoutFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                        <CircleX className="size-4 text-destructive flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* With Strategy Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex-1"
            >
              <Card className="flex h-full flex-col text-left border-primary/20 bg-primary/[0.02] ring-2 ring-primary/10">
                <CardHeader>
                  <CardTitle>
                    <p className="font-body text-lg">With Strategy</p>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-body">
                    A system that compounds
                  </p>

                  {/* Order visual */}
                  <div className="relative h-36 mt-4 rounded-lg bg-primary/[0.04] border border-primary/10 overflow-hidden flex items-center justify-center">
                    <div className="flex items-center gap-2 md:gap-3">
                      {[1, 2, 3, 4].map((step, i) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + 0.15 * i }}
                          className="flex items-center gap-2 md:gap-3"
                        >
                          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-body text-sm font-bold text-primary">
                            {step}
                          </div>
                          {i < 3 && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.5 + 0.15 * i }}
                              className="w-3 md:w-5 h-px bg-primary/30 origin-left"
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>
                    <p className="absolute bottom-3 font-body text-xs text-primary/60 tracking-wide">
                      Strategy → Focus → Execution → Compounds
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <Separator className="mb-6" />
                  <p className="mb-3 text-sm font-semibold font-body">
                    What you get:
                  </p>
                  <ul className="space-y-4">
                    {withFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 font-body text-sm">
                        <CircleCheck className="size-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Closing statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-base md:text-lg text-foreground font-semibold leading-relaxed border-l-4 border-primary pl-5 max-w-2xl text-left mt-8"
          >
            We help you decide what deserves to be built before you build it. Then we execute it with discipline.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhyStrategySection;
