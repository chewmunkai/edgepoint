"use client"

import { motion } from "framer-motion"
import { GlassButtonLink } from "@/components/ui/glass-button"
import { ArrowRight } from "lucide-react"
import { ShaderAnimation } from "@/components/ui/shader-animation"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Shader Background */}
      <ShaderAnimation />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-neon/30 bg-neon/5 backdrop-blur-sm"
          >
            <span className="text-neon text-sm font-body font-medium tracking-wide">
              Growth Partnership for Ambitious Businesses
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-bold text-white leading-[1.1] mb-8 text-4xl md:text-6xl lg:text-7xl"
          >
            Build a Marketing System That Actually{" "}
            <span className="text-gradient-neon">Scales Your Business.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            You've done the hard work of building a great product. Now, let's build the marketing engine it deserves. We work alongside you as dedicated partners, turning complex decisions into clear, revenue-driven growth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <GlassButtonLink
              href="#contact"
              size="lg"
              className="glass-button-primary"
            >
              Start Our Growth Journey
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </GlassButtonLink>
            
            <GlassButtonLink
              href="#strategy"
              size="lg"
            >
              See the Framework
              <ArrowRight className="w-4 h-4" />
            </GlassButtonLink>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-neon rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
