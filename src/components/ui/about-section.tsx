"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { HighlightText } from "@/components/ui/animated-reveal-text";
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
      className="relative w-full px-4 py-8 md:py-12 border-t border-white/10"
    >
      <div className="mx-auto max-w-6xl font-body">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* Header */}
          <div className="space-y-6 md:space-y-8">
            <TimelineContent
              animationNum={0}
              timelineRef={heroRef}
              variants={revealVariants}
            >
              <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-white/50">
                <span className="text-lg text-neon">✱</span>
                <span className="font-body font-medium tracking-widest">
                  WHO WE ARE
                </span>
              </div>
            </TimelineContent>

            <TimelineContent
              animationNum={1}
              timelineRef={heroRef}
              variants={scaleVariants}
            >
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border-2 border-white/20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
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
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-2xl font-bold text-white font-heading">
                    5+
                  </span>
                  <span>Years experience</span>
                  <span className="text-white/30">|</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-2xl font-bold text-white font-heading">
                    60+
                  </span>
                  <span>Projects executed</span>
                </div>
              </div>
              <div className="mt-3 space-y-3 text-sm text-white/70">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-2xl font-bold text-white font-heading">
                    3.5 Million
                  </span>
                  <span>Ads Managed</span>
                  <span className="text-white/30">|</span>
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
              <h1 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                A Different Kind of{" "}
                <HighlightText
                  text="Partnership."
                  as="span"
                  textClassName="text-black"
                  highlightClassName="rounded-sm"
                  duration={1.2}
                />
              </h1>

              <div className="mt-6 grid gap-4 text-base leading-relaxed text-white/70 md:grid-cols-2">
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
              <div className="rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm p-6 shadow-[4px_4px_0px_0px_hsl(82,100%,60%)]">
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
