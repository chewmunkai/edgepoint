import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HighlightText } from "@/components/ui/animated-reveal-text";
import { TextReveal } from "@/components/ui/text-reveal-animation";
import { MapPin, MessageSquare, BarChart3, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const points = [
    {
      icon: MapPin,
      text: "We map your customer journey and identify where prospects drop off",
    },
    {
      icon: MessageSquare,
      text: "We align your offer and messaging to actual market demand",
    },
    {
      icon: BarChart3,
      text: "We prioritize which channels and tactics deserve budget—and which don't",
    },
    {
      icon: Rocket,
      text: "We create a focused execution roadmap with clear ownership",
    },
  ];

  const execOptions = [
    {
      label: "Need execution?",
      desc: "We handle SEO, website development, and social media marketing in-house",
    },
    {
      label: "Have a team already?",
      desc: "We guide them with strategic clarity and oversight",
    },
    {
      label: "Need specialists?",
      desc: "We'll connect you with trusted partners for areas outside our scope",
    },
  ];

  return (
    <section className="py-8 md:py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
              How Edge Point Works
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
              <TextReveal word="The Strategic Framework " className="inline" />
              <HighlightText
                text="Most SMEs Are Missing."
                as="span"
                textClassName="text-black"
                highlightClassName="rounded-sm"
                duration={1.2}
              />
            </h2>
            <p className="font-body text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
              We start with strategy, then help you execute it—whether that's through our in-house team, your existing resources, or a combination of both.
            </p>
          </motion.div>

          {/* What it looks like */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10"
          >
            <h3 className="font-heading text-lg text-white mb-6">
              Here's what that looks like in practice:
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
                >
                  <point.icon className="size-5 text-neon mt-0.5 shrink-0" />
                  <p className="font-body text-white/70 text-sm leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Then we help you act */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-heading text-lg text-white mb-6">
              Then we help you act on it:
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {execOptions.map((opt, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
                >
                  <p className="font-heading text-sm text-neon mb-2 font-semibold">
                    {opt.label}
                  </p>
                  <p className="font-body text-white/60 text-sm leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm p-6 text-center">
              <p className="font-body text-white/80 text-base">
                <span className="font-semibold text-white">Our role:</span> Strategic direction and execution support.
              </p>
              <p className="font-body text-white/80 text-base mt-1">
                <span className="font-semibold text-white">The outcome:</span> Marketing that's built on a plan designed to win.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
