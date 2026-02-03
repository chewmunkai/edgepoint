import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "So… are you a marketing agency?",
      answer: "Short answer: not in the usual sense. When we work with clients, we're not thinking about posts, ads, or platforms first. We focus on what your marketing is supposed to achieve, and what should happen before anyone executes anything. Execution only makes sense once those decisions are clear."
    },
    {
      question: "Do you actually run ads, create content, or manage social media?",
      answer: "Yes, we can — but that's never where we start. In most cases, we help owners decide whether those things are even the right move right now, and what they're meant to do. Running ads or posting content without that clarity is usually why money gets wasted."
    },
    {
      question: "We already have an in-house team. What would you even do?",
      answer: "This is actually one of the most common situations. Your team might be capable, but someone still needs to decide priorities, direction, and trade-offs. We work with your team to align everyone around the same plan, instead of each person executing based on their own assumptions."
    },
    {
      question: "How is this different from hiring a consultant or strategist?",
      answer: "Most consultants give advice, deliver a deck, and move on. When we work with a business, we stay involved as decisions turn into execution. If something isn't working, we adjust direction instead of pretending the original plan was perfect."
    },
    {
      question: "If you're not just running campaigns, how do we know this is working?",
      answer: "A simple test: marketing starts to feel more controlled and explainable. You know what you're spending on, why you're spending it, and what success actually looks like. Less random activity, fewer conflicting opinions, and clearer priorities — that's progress."
    },
    {
      question: "Is this suitable for very small or early-stage businesses?",
      answer: "Honestly, not always. This works best if you're already spending on marketing and want to spend more deliberately. If you're looking for cheap execution or quick hacks, we're probably not the right fit — and that's okay."
    },
  ];

  return (
    <section id="faq" className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className="relative z-10 container mx-auto px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-neon font-body font-medium tracking-widest uppercase text-sm mb-4">
              FAQ
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Frequently Asked{" "}
              <span className="text-gradient-neon">Questions</span>
            </h2>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 overflow-hidden hover:border-neon/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="font-heading font-semibold text-lg text-white hover:text-neon transition-colors py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-white/60 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
