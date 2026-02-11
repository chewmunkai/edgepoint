import { useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const FinalCTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    competitors: "",
    bestProduct: "",
    bottleneck: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-12 md:py-16 pb-16 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
              Start With a Strategic Audit
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
              Ready to See Where{" "}
              <span className="bg-neon text-black px-2 py-0.5 rounded-sm">Your Marketing Stands?</span>
            </h2>
            <p className="font-body text-white/60 text-base max-w-xl mx-auto leading-relaxed">
              Book a Strategic Audit. We'll map your current reality, identify the gaps, and show you the highest-impact moves for the next 90 days.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl p-6 md:p-8 space-y-4 bg-white/5 border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="font-body font-medium text-sm text-white">Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} className="bg-white/10 border-white/20 focus:border-white focus:ring-white/20 text-sm text-white placeholder:text-white/40" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="company" className="font-body font-medium text-sm text-white">Company Name</Label>
                <Input id="company" name="company" type="text" placeholder="Your company" value={formData.company} onChange={handleChange} className="bg-white/10 border-white/20 focus:border-white focus:ring-white/20 text-sm text-white placeholder:text-white/40" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="competitors" className="font-body font-medium text-sm text-white">Who are your top 3 competitors?</Label>
              <Input id="competitors" name="competitors" type="text" placeholder="e.g., Company A, Company B, Company C" value={formData.competitors} onChange={handleChange} className="bg-white/10 border-white/20 focus:border-white focus:ring-white/20 text-sm text-white placeholder:text-white/40" required />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="bestProduct" className="font-body font-medium text-sm text-white">What is your best-selling product/service?</Label>
              <Input id="bestProduct" name="bestProduct" type="text" placeholder="Describe your main offering" value={formData.bestProduct} onChange={handleChange} className="bg-white/10 border-white/20 focus:border-white focus:ring-white/20 text-sm text-white placeholder:text-white/40" required />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="bottleneck" className="font-body font-medium text-sm text-white">Biggest growth bottleneck?</Label>
              <Textarea id="bottleneck" name="bottleneck" placeholder="Tell us about your main challenge..." value={formData.bottleneck} onChange={handleChange} className="bg-white/10 border-white/20 focus:border-white focus:ring-white/20 min-h-[100px] text-sm text-white placeholder:text-white/40" required />
            </div>

            <div className="pt-2">
              <LiquidButton type="submit" size="lg" variant="dark" className="w-full md:w-auto font-heading text-sm whitespace-nowrap min-w-[280px] justify-center">
                Book Your Strategic Audit
              </LiquidButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
