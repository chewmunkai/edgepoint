import React from "react";
import { cn } from "@/lib/utils";

interface FlippingCardProps {
  className?: string;
  height?: number;
  width?: number;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
}

export function FlippingCard({
  className,
  frontContent,
  backContent,
  height = 300,
  width = 350,
}: FlippingCardProps) {
  return (
    <div
      className={cn("group [perspective:1000px]", className)}
      style={{ height, width }}
    >
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="h-full w-full overflow-hidden rounded-2xl">
            {frontContent}
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="h-full w-full overflow-hidden rounded-2xl">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}
