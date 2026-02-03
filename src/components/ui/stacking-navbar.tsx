"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";

interface NavItem {
  href: string;
  label: string;
}

interface StackingNavbarProps {
  items: NavItem[];
  className?: string;
}

const StackingNavbar = ({ items, className }: StackingNavbarProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav className={className}>
      <ul
        className="relative flex cursor-pointer flex-row-reverse"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {items.map((item, index) => (
          <StackingNavbarItem
            key={item.label}
            href={item.href}
            expanded={expanded}
            index={index}
          >
            {item.label}
          </StackingNavbarItem>
        ))}
      </ul>
    </nav>
  );
};

interface StackingNavbarItemProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  expanded: boolean;
  index: number;
}

const StackingNavbarItem = ({
  href,
  children,
  style,
  expanded,
  index,
}: StackingNavbarItemProps) => {
  return (
    <motion.li
      className="relative"
      style={style}
      initial={false}
      animate={{
        x: expanded ? 0 : index * 45,
        opacity: expanded ? 1 : index === 0 ? 1 : 0.7,
        scale: expanded ? 1 : 1 - index * 0.05,
        zIndex: 10 - index,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25,
      }}
    >
      <a
        href={href}
        className="relative block whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all hover:scale-105 duration-300"
        style={{ backdropFilter: 'blur(12px)' }}
      >
        {children}
      </a>
    </motion.li>
  );
};

export { StackingNavbar, type NavItem };
