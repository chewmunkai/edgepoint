import React from "react"
import { cn } from "@/lib/utils"

interface PlusCardProps {
  className?: string
  title: string
  description: string
}

const PlusCard: React.FC<PlusCardProps> = ({ className = "", title, description }) => {
  return (
    <div className={cn("group relative border border-white/10 bg-white/[0.02] p-6 md:p-8 transition-colors hover:bg-white/[0.05]", className)}>
      <CornerPlusIcons />
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-3">{title}</h3>
        <p className="font-body text-white/60 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
)

const PlusIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" className={cn("text-white/20", className)}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

export interface RuixenCardData {
  title: string
  description: string
  className?: string
}

interface RuixenBentoGridProps {
  cards: RuixenCardData[]
  className?: string
}

export function RuixenBentoGrid({ cards, className }: RuixenBentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0", className)}>
      {cards.map((card, i) => (
        <PlusCard key={i} title={card.title} description={card.description} className={card.className} />
      ))}
    </div>
  )
}

export default RuixenBentoGrid
