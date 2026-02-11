import { Check } from "lucide-react";

const WhoWeServeSection = () => {
  const planningFit = [
    "Already spending RM4K–RM30K/month on marketing",
    "Frustrated by inconsistent results or unclear ROI",
    "Looking for a strategic partner to guide your team's execution",
  ];

  const executionFit = [
    "Doing RM1M–RM10M in revenue",
    "Ready to invest in marketing as a system, not one-off tactics",
    "Looking for an integrated partner who thinks strategically and executes with discipline",
  ];

  return (
    <section className="py-12 md:py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
              Who We're Built For
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight">
              Edge Point Works With{" "}
              <span className="bg-neon text-black px-2 py-0.5 rounded-sm">Two Types of SME Owners:</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
              <h3 className="font-heading text-xl text-white mb-3 font-bold">Strategic Planning Only</h3>
              <p className="font-body text-white/60 text-sm leading-relaxed mb-5">
                You already have a marketing team or agency, but need strategic direction and commercial oversight to ensure their work drives revenue.
              </p>
              <p className="font-heading text-xs text-neon uppercase tracking-widest mb-3">You're a fit if you're:</p>
              <ul className="space-y-3">
                {planningFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="size-4 text-neon mt-0.5 shrink-0" />
                    <span className="font-body text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-neon/30 bg-white/5 p-6 md:p-8 shadow-[4px_4px_0px_0px_hsl(82,100%,60%)]">
              <h3 className="font-heading text-xl text-white mb-3 font-bold">Strategy + Execution</h3>
              <p className="font-body text-white/60 text-sm leading-relaxed mb-5">
                You need both the plan and the hands to execute it—SEO, website development, social media marketing, and ongoing optimization.
              </p>
              <p className="font-heading text-xs text-neon uppercase tracking-widest mb-3">You're a fit if you're:</p>
              <ul className="space-y-3">
                {executionFit.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="size-4 text-neon mt-0.5 shrink-0" />
                    <span className="font-body text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-body text-white/40 text-sm text-center italic">
            Not a fit? We're not built for early-stage startups still finding product-market fit, or enterprises with dedicated strategy teams already in place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
