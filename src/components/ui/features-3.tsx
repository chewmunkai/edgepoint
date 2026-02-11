import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface FeatureItem {
  icon: ReactNode
  title: string
  description: string
}

interface FeaturesProps {
  label?: string
  title: string
  subtitle?: string
  features: FeatureItem[]
  className?: string
}

export function Features({ label, title, subtitle, features, className }: FeaturesProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-black relative", className)}>
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          {label && (
            <p className="text-neon/80 font-body font-medium tracking-[0.2em] uppercase text-xs mb-6">
              {label}
            </p>
          )}
          <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mx-auto">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-6 font-body text-white/60 text-base md:text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y border-white/10 divide-white/10 overflow-hidden rounded-xl border shadow-zinc-950/5 *:text-center md:mt-16">
          {features.map((feature, i) => (
            <Card key={i} className="border-none bg-white/5 rounded-none shadow-none">
              <CardHeader className="pb-3">
                <CardDecorator>{feature.icon}</CardDecorator>
                <h3 className="font-heading text-xl font-bold text-white mt-2">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:theme(colors.white/0.1)] before:absolute before:inset-0 before:mx-auto before:aspect-square before:rounded-full before:border-t before:border-[--color-border] after:absolute after:inset-4 after:mx-auto after:aspect-square after:rounded-full after:border-t after:border-[--color-border]">
    <div className="absolute z-1 mx-auto flex size-12 -translate-y-4 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-lg inset-0 my-auto">
      {children}
    </div>
  </div>
)
