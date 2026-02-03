"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { FlowGradientBackground } from "@/components/ui/flow-gradient-hero-section"
import { HeroScrollWrapper } from "@/components/ui/hero-scroll-animation"
import { HighlightText } from "@/components/ui/animated-reveal-text"
import logo from "@/assets/logo.png"

const HeroSection = () => {
  return (
    <HeroScrollWrapper className="relative">
      <FlowGradientBackground className="min-h-[90vh]">
        <section className="relative min-h-[90vh] overflow-hidden">
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center min-h-[90vh] px-4 md:px-6 pt-12">
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
                  Marketing Agency
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="font-heading font-bold text-white leading-[1.1] text-2xl md:text-4xl lg:text-5xl">
                  Build a Marketing System That Actually{" "}
                  <HighlightText
                    text="Scales Your Business."
                    as="span"
                    textClassName="text-black"
                    highlightClassName="rounded-sm"
                    duration={1.2}
                  />
                </h1>
              </motion.div>

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
                <LiquidButton href="#contact" size="lg" variant="dark" className="font-heading text-sm md:text-base whitespace-nowrap min-w-[220px] justify-center">
                  Start Our Growth Journey <ArrowRight className="w-4 h-4 flex-shrink-0 ml-1" />
                </LiquidButton>
                
                <LiquidButton href="#strategy" size="lg" variant="dark" className="font-heading text-sm md:text-base whitespace-nowrap min-w-[220px] justify-center">
                  See the Framework <ArrowRight className="w-4 h-4 flex-shrink-0 ml-1" />
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
      </FlowGradientBackground>
    </HeroScrollWrapper>
  )
}

export default HeroSection
