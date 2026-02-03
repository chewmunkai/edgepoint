"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

const defaultTabs: Tab[] = [
  {
    id: "tab1",
    label: "Tab 1",
    content: (
      <div className="flex flex-col md:flex-row gap-8 p-6">
        <img
          src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format"
          className="w-full md:w-1/2 aspect-video object-cover rounded-xl"
          alt="Tab 1"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold text-black mb-2">
            Tab 1
          </h3>
          <p className="text-black/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "tab2",
    label: "Tab 2",
    content: (
      <div className="flex flex-col md:flex-row gap-8 p-6">
        <img
          src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format"
          className="w-full md:w-1/2 aspect-video object-cover rounded-xl"
          alt="Tab 2"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold text-black mb-2">
            Tab 2
          </h3>
          <p className="text-black/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "tab3",
    label: "Tab 3",
    content: (
      <div className="flex flex-col md:flex-row gap-8 p-6">
        <img
          src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format"
          className="w-full md:w-1/2 aspect-video object-cover rounded-xl"
          alt="Tab 3"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold text-black mb-2">
            Tab 3
          </h3>
          <p className="text-black/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
      </div>
    ),
  },
];

const AnimatedTabs = ({
  tabs = defaultTabs,
  defaultTab,
  className,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-wrap gap-2 justify-center p-2 bg-black/5 rounded-xl mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-heading font-medium rounded-lg outline-none transition-colors",
              activeTab === tab.id
                ? "text-black"
                : "text-black/50 hover:text-black/70"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white rounded-lg shadow-sm"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl bg-white border border-black/10">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
