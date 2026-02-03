"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  asChild?: boolean
  href?: string
}

const HoverButton = React.forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ className, children, asChild, href, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const [isListening, setIsListening] = React.useState(false)
    const [circles, setCircles] = React.useState<Array<{ id: number; x: number; y: number; color: string; fadeState: string | null }>>([])
    const lastAddedRef = React.useRef(0)

    const createCircle = React.useCallback((x: number, y: number) => {
      const buttonWidth = buttonRef.current?.offsetWidth || 0
      const xPos = x / buttonWidth
      const color = `linear-gradient(to right, var(--circle-start) ${xPos * 100}%, var(--circle-end) ${
        xPos * 100
      }%)`

      setCircles((prev) => [
        ...prev,
        { id: Date.now(), x, y, color, fadeState: null },
      ])
    }, [])

    const handlePointerMove = React.useCallback(
      (event: React.PointerEvent<HTMLElement>) => {
        if (!isListening) return
        
        const currentTime = Date.now()
        if (currentTime - lastAddedRef.current > 100) {
          lastAddedRef.current = currentTime
          const rect = event.currentTarget.getBoundingClientRect()
          const x = event.clientX - rect.left
          const y = event.clientY - rect.top
          createCircle(x, y)
        }
      },
      [isListening, createCircle]
    )

    const handlePointerEnter = React.useCallback(() => {
      setIsListening(true)
    }, [])

    const handlePointerLeave = React.useCallback(() => {
      setIsListening(false)
    }, [])

    React.useEffect(() => {
      circles.forEach((circle) => {
        if (!circle.fadeState) {
          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) =>
                c.id === circle.id ? { ...c, fadeState: "in" } : c
              )
            )
          }, 0)

          setTimeout(() => {
            setCircles((prev) =>
              prev.map((c) =>
                c.id === circle.id ? { ...c, fadeState: "out" } : c
              )
            )
          }, 1000)

          setTimeout(() => {
            setCircles((prev) => prev.filter((c) => c.id !== circle.id))
          }, 2200)
        }
      })
    }, [circles])

    const circleElements = circles.map(({ id, x, y, color, fadeState }) => (
      <div
        key={id}
        className={cn(
          "pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000",
          fadeState === "in" && "opacity-100 scale-100",
          fadeState === "out" && "opacity-0 scale-[3]",
          !fadeState && "opacity-0 scale-0"
        )}
        style={{
          left: x,
          top: y,
          background: color,
        }}
      />
    ))

    const sharedClasses = cn(
      "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 font-heading font-semibold text-black transition-all [--circle-end:hsl(82,100%,50%)] [--circle-start:hsl(82,100%,70%)] bg-neon hover:bg-neon/90",
      className
    )

    if (href) {
      return (
        <a
          href={href}
          className={sharedClasses}
          onPointerMove={handlePointerMove as any}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          {circleElements}
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </a>
      )
    }

    return (
      <button
        ref={buttonRef}
        className={sharedClasses}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        {circleElements}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    )
  }
)

HoverButton.displayName = "HoverButton"

export { HoverButton }
