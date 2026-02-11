import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { HighlightText } from "@/components/ui/animated-reveal-text";

interface MarketRealityFeatureProps {
  eyebrow?: string;
  headline?: string;
  highlightedText?: string;
  description?: string;
  features?: {
    title: string;
    description: string;
  }[];
  imageSrc?: string;
}

function MarketRealityFeature({
  eyebrow = "Market Reality",
  headline = "Scaling Today is a Challenge,",
  highlightedText = "Not a Given.",
  description = "Before we talk about tactics, we have to look at the reality of the market. Growth usually stalls because of two specific gaps:",
  features = [
    {
      title: "The External Noise",
      description: "Competition is at an all-time high, and consumers are more skeptical than ever. Simply \"showing up\" with ads isn't enough to win anymore."
    },
    {
      title: "The Internal Gaps",
      description: "Often, marketing fails because budgets are spent on execution before the business model or the offer is actually ready."
    },
    {
      title: "The Truth",
      description: "To scale, you don't just need more \"activity\"—you need a deliberate strategy that connects every dollar spent to your bottom line."
    }
  ],
  imageSrc = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
}: MarketRealityFeatureProps) {
  return (
    <section id="market-reality" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div>
                <Badge className="bg-black text-white border-black hover:bg-black/90 font-body text-xs">
                  {eyebrow}
                </Badge>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black">
                  {headline}{" "}
                  <HighlightText
                    text={highlightedText}
                    as="span"
                    textClassName="text-black"
                    highlightClassName="rounded-sm"
                    duration={1.2}
                  />
                </h2>
                <p className="font-body text-base text-black/60 max-w-xl leading-relaxed">
                  {description}
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-heading text-base font-semibold text-black">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm text-black/50 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-black/10">
            <img
              src={imageSrc}
              alt="Market Reality"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://placehold.co/800x600/f5f5f5/000000?text=Market+Reality';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { MarketRealityFeature };
