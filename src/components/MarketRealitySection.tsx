import MarketRealityStackingCards from "@/components/ui/stacking-card";

const marketRealityData = [
  {
    title: "Execution Without Direction",
    description:
      "Too many businesses jump straight into execution—launching campaigns, running ads, creating content—without a strategic framework. The result? Marketing spend that doesn't compound. Budgets that deliver activity, not outcomes.",
    color: "#99FF33",
  },
  {
    title: "Wasted Spend, No Journey",
    description:
      "We've seen businesses spend £15K/month on ads with no clear customer journey. Launch rebrands without testing market positioning. Hire agencies that optimize tactics while the strategy drifts.",
    color: "#E5FF80",
  },
  {
    title: "The Missing Piece",
    description:
      "The missing piece isn't more execution. It's direction.",
    color: "#FFFFFF",
  },
];

const MarketRealitySection = () => {
  return (
    <MarketRealityStackingCards
      projects={marketRealityData}
      eyebrow="The Problem"
      headline="What Most Businesses"
      highlightedText="Get Wrong."
    />
  );
};

export default MarketRealitySection;
