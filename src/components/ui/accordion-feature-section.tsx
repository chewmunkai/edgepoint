"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface Feature197Props {
  features: FeatureItem[];
}

const Feature197 = ({ features }: Feature197Props) => {
  const [activeTabId, setActiveTabId] = useState(1);
  const [activeImage, setActiveImage] = useState(features[0]?.image || "");

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Accordion Side */}
          <div className="w-full md:w-1/2">
            <Accordion
              type="single"
              defaultValue={`item-${features[0]?.id}`}
              onValueChange={(value) => {
                const id = Number(value.replace("item-", ""));
                const feature = features.find((f) => f.id === id);
                if (feature) {
                  setActiveImage(feature.image);
                  setActiveTabId(feature.id);
                }
              }}
            >
              {features.map((tab) => (
                <AccordionItem
                  key={tab.id}
                  value={`item-${tab.id}`}
                  className="border-0 border-b border-black/10 rounded-none"
                >
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 !no-underline transition bg-transparent border-0 rounded-none [&[data-state=open]]:border-0 [&[data-state=open]]:rounded-none"
                  >
                    <span className="font-heading text-lg font-bold text-black">
                      {tab.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-body text-black/60 text-sm leading-relaxed mb-4">
                      {tab.description}
                    </p>
                    <div className="block md:hidden rounded-xl overflow-hidden">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="w-full h-auto object-cover rounded-xl"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Image Side */}
          <div className="hidden md:block w-full md:w-1/2">
            <img
              src={activeImage}
              alt="Feature preview"
              className="w-full h-auto rounded-xl object-cover aspect-[4/3] transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature197 };
