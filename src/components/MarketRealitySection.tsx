import MarketRealityStackingCards from "@/components/ui/stacking-card";

const marketRealityData = [
  {
    title: "The External Noise",
    description:
      "Competition is at an all-time high, and consumers are more skeptical than ever. Simply \"showing up\" with ads isn't enough to win anymore. The market is saturated with messages, and standing out requires more than just visibility—it demands strategic precision and authentic value.",
    color: "#99FF33",
  },
  {
    title: "The Internal Gaps",
    description:
      "Often, marketing fails because budgets are spent on execution before the business model or the offer is actually ready. Without a solid foundation, even the best campaigns fall flat. The disconnect between strategy and implementation creates expensive leaks in your growth engine.",
    color: "#FFD700",
  },
  {
    title: "The Truth",
    description:
      "Success comes from precision, not volume. Every action must tie directly to measurable business outcomes. The winners aren't those who spend the most—they're those who spend the smartest, building systems that compound over time rather than chasing quick wins.",
    color: "#FFFFFF",
  },
];

const MarketRealitySection = () => {
  return (
    <MarketRealityStackingCards
      projects={marketRealityData}
      eyebrow="Market Reality"
      headline="Scaling Today is a Challenge,"
      highlightedText="Not a Given."
    />
  );
};

export default MarketRealitySection;
