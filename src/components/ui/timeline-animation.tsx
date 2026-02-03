'use client'

import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { forwardRef, ReactNode } from "react"

interface TimelineContentProps {
  children: ReactNode
  animationNum: number
  timelineRef: React.RefObject<HTMLElement | null>
  variants?: Variants
  className?: string
}

const TimelineContent = forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ children, animationNum, timelineRef, variants, className }, ref) => {
    const defaultVariants: Variants = {
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
    }

    return (
      <motion.div
        ref={ref}
        custom={animationNum}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, root: timelineRef }}
        variants={variants || defaultVariants}
        className={cn(className)}
      >
        {children}
      </motion.div>
    )
  }
)

TimelineContent.displayName = "TimelineContent"

export { TimelineContent }
