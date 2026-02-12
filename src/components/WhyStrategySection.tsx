import { motion } from "framer-motion";

const withoutItems = [
  "Random tactics",
  "Wasted budget",
  "No connection",
];

const withItems = [
  "Clear system",
  "Measured growth",
  "Revenue outcomes",
];

const WhyStrategySection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-black/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
            Our Philosophy
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
            Why Start With{" "}
            <span className="bg-[hsl(211,100%,50%)] text-white px-2 py-0.5 rounded-sm">
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
          className="text-center mb-12 md:mb-16 max-w-2xl mx-auto space-y-4"
        >
          <p className="font-body text-base md:text-lg text-black/60 leading-relaxed">
            Most agencies will execute whatever you ask for.
          </p>
          <p className="font-body text-base md:text-lg text-black/90 font-semibold leading-relaxed">
            But if those tactics aren't part of a coherent plan,
            <br />
            you're just spending money to stay busy.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-black/10 mb-12 md:mb-16" />

        {/* Side by side comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Without Strategy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h3 className="font-heading text-xs md:text-sm tracking-widest uppercase text-black/40 mb-8">
              Without Strategy
            </h3>

            {/* Chaotic visual */}
            <div className="relative h-48 md:h-56 mb-8 rounded-xl bg-black/[0.03] border border-black/5 overflow-hidden p-6 flex items-center justify-center">
              {/* Scattered elements */}
              <motion.div
                animate={{ rotate: [0, 3, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-8 bg-red-100 border border-red-200 rounded-md px-3 py-1.5 font-body text-xs text-red-600 font-medium shadow-sm"
              >
                AD SPEND
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -2, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-16 right-10 bg-orange-100 border border-orange-200 rounded-md px-3 py-1.5 font-body text-xs text-orange-600 font-medium shadow-sm"
              >
                REBRAND
              </motion.div>
              <motion.div
                animate={{ rotate: [0, 2, -3, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 left-12 bg-yellow-100 border border-yellow-200 rounded-md px-3 py-1.5 font-body text-xs text-yellow-600 font-medium shadow-sm"
              >
                POST
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -3, 2, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute bottom-8 right-8 bg-purple-100 border border-purple-200 rounded-md px-3 py-1.5 font-body text-xs text-purple-600 font-medium shadow-sm"
              >
                CONTENT
              </motion.div>
              {/* Scattered lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 200">
                <line x1="60" y1="40" x2="180" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-black/30" />
                <line x1="200" y1="60" x2="100" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-black/30" />
                <line x1="80" y1="130" x2="220" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-black/30" />
              </svg>
            </div>

            {/* Labels */}
            <ul className="space-y-3">
              {withoutItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  className="flex items-center gap-3 font-body text-sm md:text-base text-black/50"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* With Strategy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <h3 className="font-heading text-xs md:text-sm tracking-widest uppercase text-black/40 mb-8">
              With Strategy
            </h3>

            {/* Ordered visual */}
            <div className="relative h-48 md:h-56 mb-8 rounded-xl bg-[hsl(211,100%,50%)]/[0.03] border border-[hsl(211,100%,50%)]/10 overflow-hidden p-6 flex items-center justify-center">
              <div className="flex items-center gap-3 md:gap-4">
                {[1, 2, 3, 4].map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + 0.15 * i }}
                    className="flex items-center gap-3 md:gap-4"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[hsl(211,100%,50%)]/10 border border-[hsl(211,100%,50%)]/20 flex items-center justify-center font-heading text-sm md:text-base font-bold text-[hsl(211,100%,50%)]">
                      {step}
                    </div>
                    {i < 3 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + 0.15 * i }}
                        className="w-4 md:w-6 h-px bg-[hsl(211,100%,50%)]/30 origin-left"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
              {/* Downward arrows */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <p className="font-body text-xs text-[hsl(211,100%,50%)]/60 tracking-wide text-center leading-relaxed">
                  Strategy → Focus → Execution → Compounds
                </p>
              </div>
            </div>

            {/* Labels */}
            <ul className="space-y-3">
              {withItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                  className="flex items-center gap-3 font-body text-sm md:text-base text-black/90 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[hsl(211,100%,50%)] flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Arrow connector row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="hidden md:grid grid-cols-2 gap-12 mb-12"
        >
          <div className="flex items-center justify-end">
            <span className="font-body text-sm text-black/30">chaos</span>
          </div>
          <div className="flex items-center justify-start gap-3">
            <span className="text-black/20">→</span>
            <span className="font-body text-sm text-black/70 font-medium">clarity</span>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-body text-base md:text-lg text-black/90 font-semibold leading-relaxed border-l-4 border-[hsl(211,100%,50%)] pl-5 max-w-2xl"
        >
          We help you decide what deserves to be built before you build it. Then we execute it with discipline.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyStrategySection;
