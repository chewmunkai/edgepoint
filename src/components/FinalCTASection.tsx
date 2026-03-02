import { useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const FinalCTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    competitors: "",
    bestProduct: "",
    bottleneck: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-enquiry", {
        body: { ...formData, source: "Homepage CTA" },
      });
      if (error) throw error;
      toast({ title: "Enquiry sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", company: "", competitors: "", bestProduct: "", bottleneck: "" });
    } catch (err) {
      console.error("Submit error:", err);
      toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-12 md:py-16 pb-16 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-black/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
              Start With a Strategic Audit
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-black leading-tight mb-4">
              Ready to See Where{" "}
              <span className="bg-[#007BFF] text-white px-2 py-0.5 rounded-sm">Your Marketing Stands?</span>
            </h2>
            <p className="font-body text-black/50 text-base max-w-xl mx-auto leading-relaxed">
              Book a Strategic Audit. We'll map your current reality, identify the gaps, and show you the highest-impact moves for the next 90 days.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl p-6 md:p-8 space-y-4 bg-white border border-black/10"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="font-body font-medium text-sm text-black">Name</Label>
                <Input id="name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="company" className="font-body font-medium text-sm text-black">Company Name</Label>
                <Input id="company" name="company" type="text" placeholder="Your company" value={formData.company} onChange={handleChange} className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="competitors" className="font-body font-medium text-sm text-black">Who are your top 3 competitors?</Label>
              <Input id="competitors" name="competitors" type="text" placeholder="e.g., Company A, Company B, Company C" value={formData.competitors} onChange={handleChange} className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="bestProduct" className="font-body font-medium text-sm text-black">What is your best-selling product/service?</Label>
              <Input id="bestProduct" name="bestProduct" type="text" placeholder="Describe your main offering" value={formData.bestProduct} onChange={handleChange} className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="bottleneck" className="font-body font-medium text-sm text-black">Biggest growth bottleneck?</Label>
              <Textarea id="bottleneck" name="bottleneck" placeholder="Tell us about your main challenge..." value={formData.bottleneck} onChange={handleChange} className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 min-h-[100px] text-sm text-black placeholder:text-black/40" required />
            </div>

            <div className="pt-2">
              <LiquidButton type="submit" size="lg" variant="dark" disabled={isSubmitting} className="w-full md:w-auto font-heading text-sm whitespace-nowrap min-w-[280px] justify-center text-white bg-black hover:bg-black/90">
                {isSubmitting ? "Sending..." : "Book Your Strategic Audit"}
              </LiquidButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
