import MarketRealityStackingCards from "@/components/ui/stacking-card";

const marketRealityData = [
  {
    title: "The External Noise",
    description:
      "Competition is at an all-time high, and consumers are more skeptical than ever. Simply showing up with ads isn't enough anymore—standing out demands strategic precision and authentic value.",
    color: "#99FF33",
  },
  {
    title: "The Internal Gaps",
    description:
      "Marketing often fails because budgets are spent on execution before the business model is ready. Without a solid foundation, even the best campaigns fall flat.",
    color: "#E5FF80",
  },
  {
    title: "The Truth",
    description:
      "Success comes from precision, not volume. The winners aren't those who spend the most—they're those who build systems that compound over time.",
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
