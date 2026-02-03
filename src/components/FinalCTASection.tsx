import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HighlightText } from "@/components/ui/animated-reveal-text";

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
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
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-8 md:py-12 pb-0 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <p className="text-white/50 font-body font-medium tracking-widest uppercase text-xs mb-3">
              Get Started
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
              Ready to Grow{" "}
              <HighlightText
                text="Together?"
                as="span"
                textClassName="text-black"
                highlightClassName="rounded-sm"
                duration={1.2}
              />
            </h2>
            <p className="font-body text-white/60 text-base max-w-xl mx-auto leading-relaxed">
              Let's look at your business and find where the leaks are.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="rounded-xl p-6 md:p-8 space-y-4 bg-white/5 border border-white/10 shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.2),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.15),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.1),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.1),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.05)]" style={{ backdropFilter: 'url("#container-glass")' }}>
              <GlassFilter />
              {/* Name & Company Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="font-body font-medium text-sm text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 focus:border-white focus:ring-white/20 text-sm text-white placeholder:text-white/40"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="font-body font-medium text-sm text-white">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 focus:border-white focus:ring-white/20 text-sm text-white placeholder:text-white/40"
                    required
                  />
                </div>
              </div>

              {/* Competitors */}
              <div className="space-y-1.5">
                <Label htmlFor="competitors" className="font-body font-medium text-sm text-white">
                  Who are your top 3 competitors?
                </Label>
                <Input
                  id="competitors"
                  name="competitors"
                  type="text"
                  placeholder="e.g., Company A, Company B, Company C"
                  value={formData.competitors}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 focus:border-white focus:ring-white/20 text-sm text-white placeholder:text-white/40"
                  required
                />
              </div>

              {/* Best Product */}
              <div className="space-y-1.5">
                <Label htmlFor="bestProduct" className="font-body font-medium text-sm text-white">
                  What is your best-selling product/service?
                </Label>
                <Input
                  id="bestProduct"
                  name="bestProduct"
                  type="text"
                  placeholder="Describe your main offering"
                  value={formData.bestProduct}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 focus:border-white focus:ring-white/20 text-sm text-white placeholder:text-white/40"
                  required
                />
              </div>

              {/* Bottleneck */}
              <div className="space-y-1.5">
                <Label htmlFor="bottleneck" className="font-body font-medium text-sm text-white">
                  Biggest growth bottleneck?
                </Label>
                <Textarea
                  id="bottleneck"
                  name="bottleneck"
                  placeholder="Tell us about your main challenge..."
                  value={formData.bottleneck}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 focus:border-white focus:ring-white/20 min-h-[100px] text-sm text-white placeholder:text-white/40"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <LiquidButton type="submit" size="lg" variant="dark" className="w-full md:w-auto font-heading text-sm whitespace-nowrap min-w-[280px] justify-center">
                  Request Strategy Session <ArrowRight className="w-4 h-4 flex-shrink-0 ml-1" />
                </LiquidButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
