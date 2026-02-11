import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function TypeTester() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.5 : 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <motion.span
        animate={{ scale }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-4xl font-bold text-foreground"
      >
        Aa
      </motion.span>
    </div>
  )
}

export default function LayoutAnimation() {
  const [layout, setLayout] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const layouts = ["grid-cols-2 grid-rows-2", "grid-cols-3 grid-rows-1", "grid-cols-1 grid-rows-3"]

  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className={`grid ${layouts[layout]} gap-2 w-full h-full transition-all duration-500`}>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            layout
            className="bg-muted rounded-lg"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        ))}
      </div>
    </div>
  )
}

function SpeedIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-2">
      <span className="text-2xl font-bold text-foreground">100ms</span>
      <span className="text-sm text-muted-foreground">Load Time</span>
      <div className="w-3/4 h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Features</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Typography Card */}
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2 overflow-hidden">
                <TypeTester />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold">Typography</h3>
                <p className="text-muted-foreground text-base">
                  Beautiful, responsive type that scales perfectly.
                </p>
              </div>
            </div>

            {/* Layouts Card */}
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2 overflow-hidden">
                <LayoutAnimation />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold">Layouts</h3>
                <p className="text-muted-foreground text-base">
                  Flexible grids that adapt to your content.
                </p>
              </div>
            </div>

            {/* Speed Card */}
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2 overflow-hidden">
                <SpeedIndicator />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold">Speed</h3>
                <p className="text-muted-foreground text-base">
                  Blazing fast pages that keep visitors engaged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
