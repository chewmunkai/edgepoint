"use client";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  word: string;
  className?: string;
  charClassName?: string;
  delay?: number;
}

export function TextReveal({ word, className, charClassName, delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShouldAnimate(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <span ref={ref} className={cn("inline-flex overflow-hidden", className)}>
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={shouldAnimate ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.03,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={cn("inline-block", charClassName)}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default TextReveal;
