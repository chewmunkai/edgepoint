import { useState } from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const budgetOptions = [
  "Less than RM15,000",
  "RM15,000 - RM40,000",
  "RM40,000 - RM100K",
  "RM100K - RM300K",
  "RM300K - RM1 mil",
  "RM1 mil and above",
];

const FinalCTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    spend: "",
    challenge: "",
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
      setFormData({ name: "", company: "", phone: "", email: "", spend: "", challenge: "" });
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
                <Label htmlFor="name" className="font-body font-medium text-sm text-black">Name *</Label>
                <Input id="name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="company" className="font-body font-medium text-sm text-black">Company Name *</Label>
                <Input id="company" name="company" type="text" placeholder="Your company" value={formData.company} onChange={handleChange} className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="font-body font-medium text-sm text-black">Phone *</Label>
                <Input id="phone" name="phone" type="tel" placeholder="012-345 6789" value={formData.phone} onChange={handleChange} className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="font-body font-medium text-sm text-black">Email *</Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black placeholder:text-black/40" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="spend" className="font-body font-medium text-sm text-black">Annual Marketing Budget</Label>
              <Select value={formData.spend} onValueChange={(val) => setFormData((prev) => ({ ...prev, spend: val }))}>
                <SelectTrigger className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-black data-[placeholder]:text-black/40">
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="challenge" className="font-body font-medium text-sm text-black">Biggest Bottleneck / Challenge</Label>
              <Textarea id="challenge" name="challenge" placeholder="Tell us about your main challenge..." value={formData.challenge} onChange={handleChange} className="bg-black/5 border-black/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 min-h-[100px] text-sm text-black placeholder:text-black/40" />
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
