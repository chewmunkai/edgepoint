import { AlertTriangle, TrendingDown, Compass } from "lucide-react";
import { Features } from "@/components/ui/features-3";

const marketFeatures = [
  {
    icon: <AlertTriangle className="size-6 text-neon" />,
    title: "Execution Without Direction",
    description:
      "Too many businesses jump straight into execution—launching campaigns, running ads, creating content—without a strategic framework. The result? Marketing spend that doesn't compound. Budgets that deliver activity, not outcomes.",
  },
  {
    icon: <TrendingDown className="size-6 text-neon" />,
    title: "Wasted Spend, No Journey",
    description:
      "We've seen businesses spend RM15K/month on ads with no clear customer journey. Launch rebrands without testing market positioning. Hire agencies that optimize tactics while the strategy drifts.",
  },
  {
    icon: <Compass className="size-6 text-neon" />,
    title: "The Missing Piece",
    description:
      "The missing piece isn't more execution. It's direction.",
  },
];

const MarketRealitySection = () => {
  return (
    <Features
      label="The Problem"
      title="What Most Businesses Get Wrong."
      features={marketFeatures}
    />
  );
};

export default MarketRealitySection;
