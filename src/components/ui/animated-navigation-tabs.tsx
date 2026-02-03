import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: number;
  tile: string;
  href?: string;
}

interface AnimatedNavigationTabsProps {
  items: NavItem[];
  className?: string;
}

export function AnimatedNavigationTabs({ items, className }: AnimatedNavigationTabsProps) {
  const [active, setActive] = useState<NavItem>(items[0]);
  const [isHover, setIsHover] = useState<NavItem | null>(null);

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex h-10 items-center justify-center">
        <div className="flex gap-1 rounded-xl border border-white/20 bg-white/5 px-1.5 py-1 backdrop-blur-sm">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href || `#${item.tile.toLowerCase()}`}
              className={cn(
                "relative cursor-pointer rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors",
                active.id === item.id ? "text-white" : "text-white/60 hover:text-white/80"
              )}
              onClick={() => setActive(item)}
              onMouseEnter={() => setIsHover(item)}
              onMouseLeave={() => setIsHover(null)}
            >
              <span className="relative z-10 font-body">{item.tile}</span>
              {isHover?.id === item.id && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 rounded-lg bg-white/10"
                  transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                />
              )}
              {active.id === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-lg bg-white/20"
                  transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                />
              )}
              {isHover?.id === item.id && (
                <motion.span
                  layoutId="nav-shadow"
                  className="absolute inset-0 rounded-lg shadow-[0_0_12px_rgba(255,255,255,0.15)]"
                  transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export type { NavItem };
