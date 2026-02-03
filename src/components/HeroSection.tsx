"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import logo from "@/assets/logo.png"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Shader Background */}
      <ShaderAnimation />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <img src={logo} alt="Edge Point" className="h-20 md:h-28 w-auto" />
          </motion.div>

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
          >
            <span className="text-white/80 text-xs md:text-sm font-body font-medium tracking-wide">
              Growth Partnership for Ambitious Businesses
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-bold text-white leading-[1.1] mb-6 text-2xl md:text-4xl lg:text-5xl"
          >
            Build a Marketing System That Actually{" "}
            <span className="text-white">Scales Your Business.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            You've done the hard work of building a great product. Now, let's build the marketing engine it deserves.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <LiquidButton href="#contact" size="lg" variant="dark" className="font-heading text-sm md:text-base">
              Start Our Growth Journey
              <ArrowRight className="w-4 h-4" />
            </LiquidButton>
            
            <LiquidButton href="#strategy" size="lg" variant="dark" className="font-heading text-sm md:text-base">
              See the Framework
              <ArrowRight className="w-4 h-4" />
            </LiquidButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-neon rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
