import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { MapPin, Building2, FileText } from "lucide-react";
import SmoothScroll from "@/components/ui/smooth-scroll";
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

const Contact = () => {
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
        body: { ...formData, source: "Contact Page" },
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

  const pillars = [
    {
      icon: Building2,
      title: "Company",
      detail: "Edge Point Solutions Sdn Bhd",
    },
    {
      icon: FileText,
      title: "Registration",
      detail: "Co. No: 1547673-W",
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "B-2-01, Street Mall, One South, Jalan OS, Taman Serdang Perdana 6, 43300 Seri Kembangan, Selangor.",
    },
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Header />
        <main>
          <PageHero
            label="Get In Touch"
            title="Let's Start With Strategy."
            highlightWord="Strategy."
            description="Ready to make your marketing work smarter? Book a strategic audit and get clarity on what to do next."
          />

          <section className="bg-[#f5f5f5] py-16 md:py-24 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12">
                {pillars.map((pillar, i) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={i}
                      className="group relative rounded-2xl border border-foreground/10 bg-white p-6 md:p-8 text-center flex flex-col items-center gap-4 hover:border-neon/30 transition-all duration-300 hover:shadow-[4px_4px_0px_0px_hsl(82,100%,60%)]"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-neon/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                        <Icon className="size-6 text-neon" />
                      </div>
                      <h3 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-foreground/30">
                        {pillar.title}
                      </h3>
                      <p className="font-body text-foreground/70 text-sm leading-relaxed">
                        {pillar.detail}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <p className="text-foreground/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
                    Start With a Strategic Audit
                  </p>
                  <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight mb-4">
                    Ready to See Where{" "}
                    <span className="bg-[#007BFF] text-white px-2 py-0.5 rounded-sm">Your Marketing Stands?</span>
                  </h2>
                  <p className="font-body text-foreground/50 text-base max-w-xl mx-auto leading-relaxed">
                    Book a Strategic Audit. We'll map your current reality, identify the gaps, and show you the highest-impact moves for the next 90 days.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="rounded-xl p-6 md:p-8 space-y-4 bg-white border border-foreground/10"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="ct-name" className="font-body font-medium text-sm text-foreground">Name *</Label>
                      <Input id="ct-name" name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange}
                        className="bg-foreground/5 border-foreground/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-foreground placeholder:text-foreground/40" required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="ct-company" className="font-body font-medium text-sm text-foreground">Company Name *</Label>
                      <Input id="ct-company" name="company" type="text" placeholder="Your company" value={formData.company} onChange={handleChange}
                        className="bg-foreground/5 border-foreground/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-foreground placeholder:text-foreground/40" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="ct-phone" className="font-body font-medium text-sm text-foreground">Phone *</Label>
                      <Input id="ct-phone" name="phone" type="tel" placeholder="012-345 6789" value={formData.phone} onChange={handleChange}
                        className="bg-foreground/5 border-foreground/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-foreground placeholder:text-foreground/40" required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="ct-email" className="font-body font-medium text-sm text-foreground">Email *</Label>
                      <Input id="ct-email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange}
                        className="bg-foreground/5 border-foreground/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-foreground placeholder:text-foreground/40" required />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="ct-spend" className="font-body font-medium text-sm text-foreground">Annual Marketing Budget</Label>
                    <Select value={formData.spend} onValueChange={(val) => setFormData((prev) => ({ ...prev, spend: val }))}>
                      <SelectTrigger className="bg-foreground/5 border-foreground/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 text-sm text-foreground data-[placeholder]:text-foreground/40">
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
                    <Label htmlFor="ct-challenge" className="font-body font-medium text-sm text-foreground">Biggest Bottleneck / Challenge</Label>
                    <Textarea id="ct-challenge" name="challenge" placeholder="Tell us about your main challenge..." value={formData.challenge} onChange={handleChange}
                      className="bg-foreground/5 border-foreground/15 focus:border-[#007BFF] focus:ring-[#007BFF]/20 min-h-[100px] text-sm text-foreground placeholder:text-foreground/40" />
                  </div>
                  <div className="pt-2">
                    <LiquidButton type="submit" size="lg" variant="dark" disabled={isSubmitting}
                      className="w-full md:w-auto font-heading text-sm whitespace-nowrap min-w-[260px] justify-center text-white bg-foreground hover:bg-foreground/90">
                      {isSubmitting ? "Sending..." : "Book Your Strategic Audit"}
                    </LiquidButton>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Contact;
