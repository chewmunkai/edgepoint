import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
    <section id="market-reality" className="w-full py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div>
                <Badge className="bg-black text-white border-black hover:bg-black/90 font-body">
                  {eyebrow}
                </Badge>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black">
                  {headline}{" "}
                  <span className="text-black">{highlightedText}</span>
                </h2>
                <p className="font-body text-lg text-black/60 max-w-xl leading-relaxed">
                  {description}
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-lg font-semibold text-black">
                      {feature.title}
                    </h3>
                    <p className="font-body text-black/50 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden border border-black/10">
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
