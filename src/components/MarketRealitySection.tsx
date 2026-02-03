import MarketRealityStackingCards from "@/components/ui/stacking-card";

const marketRealityData = [
  {
    title: "The External Noise",
    description:
      "Competition is at an all-time high, and consumers are more skeptical than ever. Simply \"showing up\" with ads isn't enough to win anymore. The market is saturated with messages, making it harder than ever to capture genuine attention and convert it into meaningful engagement.",
    link: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80",
    color: "#99FF33",
  },
  {
    title: "The Internal Gaps",
    description:
      "Often, marketing fails because budgets are spent on execution before the business model or the offer is actually ready. Without a solid foundation, even the best campaigns fall flat. The disconnect between strategy and execution creates costly inefficiencies.",
    link: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    color: "#FFD700",
  },
  {
    title: "The Truth",
    description:
      "To scale, you don't just need more \"activity\"—you need a deliberate strategy that connects every dollar spent to your bottom line. Success comes from precision, not volume. Every action must tie directly to measurable business outcomes.",
    link: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    color: "#FFFFFF",
  },
];

const MarketRealitySection = () => {
  return (
    <section id="market-reality">
      <MarketRealityStackingCards
        projects={marketRealityData}
        eyebrow="Market Reality"
        headline="Scaling Today is a Challenge,"
        highlightedText="Not a Given."
      />
    </section>
  );
};

export default MarketRealitySection;
