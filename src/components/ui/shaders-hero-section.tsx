"use client"

import { PulsingBorder, MeshGradient } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* SVG Filters */}
      <svg className="absolute h-0 w-0">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-strong">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Background Shaders */}
      <div className="absolute inset-0 opacity-60">
        <MeshGradient
          colors={["#000000", "#1a1a2e", "#0a192f", "#99FF33"]}
          speed={0.15}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30">
          <PulsingBorder
            colors={["#99FF33", "#66cc00"]}
            roundness={1}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {children}
    </div>
  )
}

export function PulsingCircle() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
        {/* Pulsing Border Circle */}
        <div className="absolute inset-0 opacity-40">
          <PulsingBorder
            colors={["#99FF33", "#66cc00"]}
            roundness={1}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Rotating Text Around the Pulsing Border */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              />
            </defs>
            <text className="fill-white/30 text-[8px] uppercase tracking-[0.3em] font-body">
              <textPath href="#circlePath">
                Strategy × Execution • Strategy × Execution • Strategy × Execution • Strategy × Execution •
              </textPath>
            </text>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

interface HeroContentProps {
  eyebrow: string
  headline: React.ReactNode
  subheadline: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
}

export function HeroContent({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroContentProps) {
  return (
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
            {eyebrow}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading font-bold text-white leading-[1.1] mb-8"
        >
          {headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={primaryCta.href}
            className="cta-primary inline-flex items-center gap-3 group"
          >
            {primaryCta.text}
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 text-white/70 font-heading font-semibold hover:text-white transition-colors duration-300 px-6 py-4"
            >
              {secondaryCta.text}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          )}
        </motion.div>
      </div>
    </div>
  )
}

interface ShaderHeroProps {
  eyebrow: string
  headline: React.ReactNode
  subheadline: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  showPulsingCircle?: boolean
  logos?: string[]
}

export function ShaderHero({
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  showPulsingCircle = true,
  logos,
}: ShaderHeroProps) {
  return (
    <ShaderBackground>
      {showPulsingCircle && <PulsingCircle />}
      <HeroContent
        eyebrow={eyebrow}
        headline={headline}
        subheadline={subheadline}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />
      
      {/* Trust Indicators */}
      {logos && logos.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-16 left-0 right-0 px-6"
        >
          <div className="max-w-5xl mx-auto pt-12 border-t border-white/10">
            <p className="text-white/40 font-body text-sm mb-6 tracking-wide text-center">
              Trusted by these brands
            </p>
            <div className="flex items-center justify-center gap-12 flex-wrap">
              {logos.map((brand, index) => (
                <motion.span
                  key={brand}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="font-heading font-semibold text-white/50 text-sm tracking-widest hover:text-white/80 transition-colors cursor-default"
                >
                  {brand}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-neon rounded-full"
          />
        </div>
      </motion.div>
    </ShaderBackground>
  )
}
