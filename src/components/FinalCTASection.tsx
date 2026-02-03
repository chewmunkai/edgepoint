import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative section-light py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-agency-blue font-body font-medium tracking-widest uppercase text-sm mb-4">
              Get Started
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black leading-tight mb-6">
              Ready to Grow{" "}
              <span className="text-gradient-blue">Together?</span>
            </h2>
            <p className="font-body text-black/60 text-xl max-w-2xl mx-auto leading-relaxed">
              We're not interested in a sales pitch. We're interested in your data. Let's look at your business and find where the leaks are.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-lg space-y-6">
              {/* Name & Company Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-body font-medium text-black">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 focus:border-agency-blue focus:ring-agency-blue/20"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="font-body font-medium text-black">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200 focus:border-agency-blue focus:ring-agency-blue/20"
                    required
                  />
                </div>
              </div>

              {/* Competitors */}
              <div className="space-y-2">
                <Label htmlFor="competitors" className="font-body font-medium text-black">
                  Who are your top 3 competitors?
                </Label>
                <Input
                  id="competitors"
                  name="competitors"
                  type="text"
                  placeholder="e.g., Company A, Company B, Company C"
                  value={formData.competitors}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-200 focus:border-agency-blue focus:ring-agency-blue/20"
                  required
                />
              </div>

              {/* Best Product */}
              <div className="space-y-2">
                <Label htmlFor="bestProduct" className="font-body font-medium text-black">
                  What is your best-selling product/service?
                </Label>
                <Input
                  id="bestProduct"
                  name="bestProduct"
                  type="text"
                  placeholder="Describe your main offering"
                  value={formData.bestProduct}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-200 focus:border-agency-blue focus:ring-agency-blue/20"
                  required
                />
              </div>

              {/* Bottleneck */}
              <div className="space-y-2">
                <Label htmlFor="bottleneck" className="font-body font-medium text-black">
                  What is your biggest growth bottleneck right now?
                </Label>
                <Textarea
                  id="bottleneck"
                  name="bottleneck"
                  placeholder="Tell us about your main challenge..."
                  value={formData.bottleneck}
                  onChange={handleChange}
                  className="bg-gray-50 border-gray-200 focus:border-agency-blue focus:ring-agency-blue/20 min-h-[120px]"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <GlassButton
                  type="submit"
                  size="lg"
                  className="glass-button-light w-full md:w-auto"
                >
                  Request Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </GlassButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
