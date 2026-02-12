import { motion } from "motion/react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  id: number;
  tile: string;
  href?: string;
}

interface AnimatedNavigationTabsProps {
  items: NavItem[];
  className?: string;
  onServiceHover?: (left: number) => void;
  onServiceLeave?: () => void;
}

export function AnimatedNavigationTabs({ items, className, onServiceHover, onServiceLeave }: AnimatedNavigationTabsProps) {
  const location = useLocation();
  const currentItem = items.find((item) => item.href === location.pathname) || items[0];
  const [isHover, setIsHover] = useState<NavItem | null>(null);

  const isRoute = (href?: string) => href && href.startsWith("/");

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex h-10 items-center justify-center">
        <div className="flex gap-1 rounded-xl border border-white/20 bg-white/5 px-1.5 py-1 backdrop-blur-sm">
          {items.map((item) => {
            const active = currentItem.id === item.id;
            const isServices = item.tile === "Services";
            const inner = (
              <>
                <span className="relative z-10 font-body">{item.tile}</span>
                {isHover?.id === item.id && (
                  <motion.span
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-lg bg-white/10"
                    transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                  />
                )}
                {active && (
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
              </>
            );

            const classes = cn(
              "relative cursor-pointer rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors",
              active ? "text-white" : "text-white/60 hover:text-white/80"
            );

            return isRoute(item.href) ? (
              <Link
                key={item.id}
                to={item.href!}
                className={classes}
                onMouseEnter={(e) => {
                  setIsHover(item);
                  if (isServices && onServiceHover) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const parent = e.currentTarget.closest('[data-nav-container]');
                    const parentRect = parent?.getBoundingClientRect();
                    const left = parentRect ? rect.left - parentRect.left + rect.width / 2 : rect.width / 2;
                    onServiceHover(left);
                  }
                }}
                onMouseLeave={() => {
                  setIsHover(null);
                  if (isServices && onServiceLeave) onServiceLeave();
                }}
              >
                {inner}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href || `#${item.tile.toLowerCase()}`}
                className={classes}
                onMouseEnter={() => setIsHover(item)}
                onMouseLeave={() => setIsHover(null)}
              >
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export type { NavItem };
