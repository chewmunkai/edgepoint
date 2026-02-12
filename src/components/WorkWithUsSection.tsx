const tiers = [
  {
    title: "Strategic Advisory",
    description:
      "We guide your internal team or existing vendors with clear direction and commercial oversight—ensuring execution stays aligned with strategy and revenue goals.",
    accent: "bg-[#99FF33]",
  },
  {
    title: "Done-With-You Execution",
    description:
      "We design the strategy and collaborate with your team to execute it with discipline—providing frameworks, feedback, and accountability throughout.",
    accent: "bg-[#007BFF]",
  },
  {
    title: "Full-Service Partnership",
    description:
      "We handle both strategic direction and execution end-to-end—from diagnosis and planning to delivery and optimization.",
    accent: "bg-black",
  },
];

const WorkWithUsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-black/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
            Engagement Models
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
            How You Can{" "}
            <span className="bg-[#007BFF] text-white px-2 py-0.5 rounded-sm">
              Work With Us
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className="group relative bg-white border border-black/10 rounded-xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1"
            >
              {/* Accent bar */}
              <div
                className={`w-8 h-1 rounded-full ${tier.accent} mb-5`}
              />
              <h3 className="font-heading font-bold text-lg text-black mb-3">
                {tier.title}
              </h3>
              <p className="font-body text-black/50 text-sm leading-relaxed">
                {tier.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
