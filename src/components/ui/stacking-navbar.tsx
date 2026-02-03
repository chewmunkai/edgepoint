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
        className="relative block whitespace-nowrap rounded-full border border-white/20 bg-black/80 backdrop-blur-xl px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-colors hover:bg-white/10 hover:border-white/40"
      >
        {children}
      </a>
    </motion.li>
  );
};

export { StackingNavbar, type NavItem };
