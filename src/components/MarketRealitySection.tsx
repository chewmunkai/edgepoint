const marketRealityData = [
  {
    title: "Execution Without Direction",
    description:
      "Too many businesses jump straight into execution—launching campaigns, running ads, creating content—without a strategic framework. The result? Marketing spend that doesn't compound. Budgets that deliver activity, not outcomes.",
  },
  {
    title: "Wasted Spend, No Journey",
    description:
      "We've seen businesses spend £15K/month on ads with no clear customer journey. Launch rebrands without testing market positioning. Hire agencies that optimize tactics while the strategy drifts.",
  },
  {
    title: "The Missing Piece",
    description:
      "The missing piece isn't more execution. It's direction.",
  },
];

const MarketRealitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-black relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-neon/80 font-body font-medium tracking-[0.2em] uppercase text-xs mb-6">
            The Problem
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
            What Most Businesses{" "}
            <span className="bg-neon text-black px-3 py-1 rounded-md">Get Wrong.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {marketRealityData.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <span className="text-white/20 font-heading text-sm tracking-widest uppercase mb-4 block">
                0{i + 1}
              </span>
              <h3 className="font-heading text-xl font-bold text-white mb-4">{card.title}</h3>
              <p className="font-body text-white/60 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketRealitySection;
