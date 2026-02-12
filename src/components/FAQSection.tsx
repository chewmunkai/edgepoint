import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do you only do strategy, or do you execute too?",
      answer: "Both. We offer in-house execution for SEO, website development, and social media marketing. For other services (like paid ads or email marketing), we can guide your existing team or connect you with trusted specialists."
    },
    {
      question: "How long do engagements typically last?",
      answer: "The Strategic Audit is a 2-week sprint. If we continue working together, engagements typically last 6-12 months—either as your strategic partner guiding execution, or as your integrated team handling both strategy and delivery."
    },
    {
      question: "What size business do you work with?",
      answer: "We're built for SMEs doing £500K–£10M in revenue, already investing (or ready to invest) £3K–£30K/month in marketing."
    },
    {
      question: "What if we already have a marketing team or agency?",
      answer: "Perfect. We can work with them as your strategic layer—ensuring their execution is focused, aligned to revenue, and built on a clear plan. We don't replace good teams; we make them more effective."
    },
    {
      question: "What's included in ongoing work after the audit?",
      answer: "It depends on your needs. For strategy-only clients: monthly strategy sessions, performance reviews, and roadmap updates. For strategy + execution clients: everything above, plus hands-on delivery of SEO, web, and social media."
    },
    {
      question: "How do you measure success?",
      answer: "By the metrics that matter to your business: pipeline growth, cost per acquisition, lead quality, conversion rates, and ultimately topline revenue. We tie every initiative to a measurable outcome."
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">FAQ</p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
              Frequently Asked{" "}
              <span className="bg-neon text-black px-2 py-0.5 rounded-sm">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="w-full max-w-full bg-white/5 border border-white/10 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="text-base text-white/90 hover:text-white transition-colors hover:no-underline text-left font-medium bg-white/5 border-white/10">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
