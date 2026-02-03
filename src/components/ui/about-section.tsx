"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function AboutSection3() {
  const heroRef = useRef<HTMLElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-white px-4 py-12 md:py-16 border-t border-black/5"
    >
      <div className="mx-auto max-w-6xl font-body">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Header with social icons */}
          <div className="space-y-6 md:space-y-8">
            <TimelineContent
              animationNum={0}
              timelineRef={heroRef}
              variants={revealVariants}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-black/50">
                  <span className="text-lg text-neon">✱</span>
                  <span className="font-body font-medium tracking-widest">
                    WHO WE ARE
                  </span>
                </div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex size-8 items-center justify-center rounded-full border border-black/20 transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex size-8 items-center justify-center rounded-full border border-black/20 transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex size-8 items-center justify-center rounded-full border border-black/20 transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex size-8 items-center justify-center rounded-full border border-black/20 transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </TimelineContent>

            <TimelineContent
              animationNum={1}
              timelineRef={heroRef}
              variants={scaleVariants}
            >
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  className="h-full w-full object-cover"
                />
              </div>
            </TimelineContent>

            {/* Stats */}
            <TimelineContent
              animationNum={2}
              timelineRef={heroRef}
              variants={revealVariants}
            >
              <div className="space-y-3 text-sm text-black/70">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-2xl font-bold text-black font-heading">
                    10+
                  </span>
                  <span>years of experience</span>
                  <span className="text-black/30">|</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-2xl font-bold text-black font-heading">
                    $50M+
                  </span>
                  <span>in client revenue generated</span>
                </div>
              </div>
              <div className="mt-3 space-y-3 text-sm text-black/70">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-2xl font-bold text-black font-heading">
                    100+
                  </span>
                  <span>brands scaled</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-2xl font-bold text-black font-heading">
                    30%
                  </span>
                  <span>average ROI improvement</span>
                  <span className="text-black/30">|</span>
                </div>
              </div>
            </TimelineContent>
          </div>

          {/* Main Content */}
          <div className="flex flex-col justify-between gap-8">
            <TimelineContent
              animationNum={3}
              timelineRef={heroRef}
              variants={revealVariants}
            >
              <h1 className="font-heading text-3xl font-bold leading-tight text-black md:text-4xl lg:text-5xl">
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.025}
                  transition={{ type: "spring", stiffness: 200, damping: 21 }}
                >
                  A Different Kind of Partnership.
                </VerticalCutReveal>
              </h1>

              <div className="mt-6 grid gap-4 text-base leading-relaxed text-black/70 md:grid-cols-2">
                <TimelineContent
                  animationNum={4}
                  timelineRef={heroRef}
                  variants={revealVariants}
                >
                  <p>
                    We didn't start Edge Point to be just another agency on your
                    monthly expense list. We started it because we saw too many
                    business owners losing money on marketing that had no clear
                    direction or ownership.
                  </p>
                </TimelineContent>
                <TimelineContent
                  animationNum={5}
                  timelineRef={heroRef}
                  variants={revealVariants}
                >
                  <p>
                    Think of us as your marketing partners in the trenches—we
                    focus on one thing: <span className="text-neon font-semibold">Topline Revenue</span>. Every strategy,
                    every campaign, every dollar spent is tied directly to
                    growth.
                  </p>
                </TimelineContent>
              </div>
            </TimelineContent>

            <TimelineContent
              animationNum={6}
              timelineRef={heroRef}
              variants={revealVariants}
            >
              <div className="rounded-xl border-2 border-black bg-black p-6 shadow-[4px_4px_0px_0px_hsl(82,100%,60%)]">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      EDGE POINT
                    </h3>
                    <p className="text-sm text-white/60">
                      Growth Partners | Revenue Focused
                    </p>
                  </div>

                  <p className="text-sm text-white/80 md:max-w-xs">
                    Ready to transform your marketing into measurable results?
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-neon px-5 py-2.5 font-heading text-sm font-semibold text-black transition-all hover:shadow-[0_0_20px_rgba(153,255,51,0.5)]"
                  >
                    LET'S COLLABORATE <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  );
}
