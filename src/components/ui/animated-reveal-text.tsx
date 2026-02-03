import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HighlightTextProps extends React.HTMLAttributes<HTMLElement> {
  text: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  textClassName?: string
  highlightClassName?: string
  duration?: number
  highlightColor?: string
  ease?: "easeIn" | "easeOut" | "easeInOut" | "linear"
}

const HighlightText = React.forwardRef<HTMLElement, HighlightTextProps>(
  ({
    text,
    as: Component = "h1",
    className,
    textClassName,
    highlightClassName,
    duration = 1.5,
    highlightColor = "#99FF33",
    ease = "easeInOut",
    ...props
  }, ref) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLHeadingElement>}
        className={cn("relative inline-block", className)}
        {...props}
      >
        <motion.span
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration, ease }}
          className={cn(
            "absolute inset-0 z-0",
            highlightClassName
          )}
          style={{ backgroundColor: highlightColor }}
        />
        <span className={cn("relative z-10", textClassName)}>
          {text}
        </span>
      </Component>
    )
  }
)
HighlightText.displayName = "HighlightText"

export { HighlightText }
