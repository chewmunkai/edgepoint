"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { Zap } from "lucide-react";
import { useRef } from "react";

export default function AboutSection2() {
  const heroRef = useRef(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 1.5,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };
  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  return (
    <div
      ref={heroRef}
      className="relative w-full py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-12 md:gap-16">
          {/* Content */}
          <div className="w-full max-w-4xl flex flex-col gap-8 md:gap-12">
            <TimelineContent
              animationNum={0}
              timelineRef={heroRef}
              variants={textVariants}
            >
              <p className="font-body text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed text-center">
                We find{" "}
                <span className="font-semibold text-neon">
                  the edge
                </span>{" "}
                that matters, then get to the point where{" "}
                <span className="font-semibold text-neon">
                  outcomes
                </span>{" "}
                are{" "}
                <span className="font-semibold text-neon">
                  decided.
                </span>
              </p>
            </TimelineContent>

            <div className="flex flex-col items-center gap-6">
              <TimelineContent
                animationNum={1}
                timelineRef={heroRef}
                variants={revealVariants}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="font-heading text-white/50 text-sm md:text-base tracking-widest uppercase">
                    We are Edge Point and we will
                  </span>
                </div>
              </TimelineContent>

              <TimelineContent
                animationNum={2}
                timelineRef={heroRef}
                variants={revealVariants}
              >
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight">
                  take you further
                </h2>
              </TimelineContent>
            </div>

            <TimelineContent
              animationNum={3}
              timelineRef={heroRef}
              variants={textVariants}
            >
              <div className="flex items-center justify-center gap-2 text-neon">
                <Zap className="w-5 h-5" />
                <span className="font-body text-sm md:text-base font-medium tracking-wide">
                  About Edge Point
                </span>
              </div>
            </TimelineContent>
          </div>
        </div>
      </div>
    </div>
  );
}
