import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the type for a single report item
export interface Report {
  id: string;
  quarter: string;
  period: string;
  imageSrc: string;
  isNew?: boolean;
}

// Define the props for the main component
interface ShareholderReportsProps {
  reports: Report[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const ShareholderReports = React.forwardRef<
  HTMLDivElement,
  ShareholderReportsProps
>(({ reports, title = "Shareholders' Letter and Results", subtitle = "Powering India's changing lifestyles", className, ...props }, ref) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  // Function to handle scrolling and update arrow visibility
  const checkScrollability = React.useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollability();
      container.addEventListener("scroll", checkScrollability);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollability);
      }
    };
  }, [reports, checkScrollability]);

  // Scroll handler for navigation buttons
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
        <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
          {title}
        </h2>

        <div className="flex items-center gap-2">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={cn(
              "p-2 rounded-full border border-border bg-card text-card-foreground transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted"
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={cn(
              "p-2 rounded-full border border-border bg-card text-card-foreground transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted"
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reports.map((report) => (
          <div
            key={report.id}
            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
          >
            {/* Report Card */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-3">
                <img
                  src={report.imageSrc}
                  alt={`${report.quarter} Report`}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white">
                    <p className="font-heading font-semibold text-sm opacity-80">
                      Shareholders' Letter and Results
                    </p>
                    <p className="font-body text-xs opacity-60 mt-1">
                      {report.period}
                    </p>
                  </div>
                  <p className="text-white/80 text-xs mt-2">{subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-heading font-bold text-foreground">
                  {report.quarter}
                </p>
                {report.isNew && (
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

ShareholderReports.displayName = "ShareholderReports";

// Step Carousel types and component for Strategy Section
export interface Step {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  items?: string[];
}

interface StepCarouselProps {
  steps: Step[];
  title?: string;
  className?: string;
}

export const StepCarousel = React.forwardRef<HTMLDivElement, StepCarouselProps>(
  ({ steps, title = "Our 4-Step Partnership Approach", className, ...props }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    const checkScrollability = React.useCallback(() => {
      const container = scrollContainerRef.current;
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    }, []);

    React.useEffect(() => {
      const container = scrollContainerRef.current;
      if (container) {
        checkScrollability();
        container.addEventListener("scroll", checkScrollability);
      }
      return () => {
        if (container) {
          container.removeEventListener("scroll", checkScrollability);
        }
      };
    }, [steps, checkScrollability]);

    const scroll = (direction: "left" | "right") => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollAmount = container.clientWidth * 0.8;
        container.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
          <div className="text-center sm:text-left">
            <p className="text-muted-foreground font-body font-medium tracking-widest uppercase text-xs mb-2">
              Our Framework
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
              {title}
            </h2>
          </div>

          <div className="flex items-center gap-2 justify-center sm:justify-end">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={cn(
                "p-2 rounded-full border border-border bg-card text-card-foreground transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={cn(
                "p-2 rounded-full border border-border bg-card text-card-foreground transition-opacity duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
            >
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-3">
                  <img
                    src={step.imageSrc}
                    alt={step.title}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-heading font-bold text-xs uppercase tracking-wider text-white/70 mb-1">
                      {step.subtitle}
                    </p>
                    <p className="font-heading font-bold text-lg text-white">
                      {step.title}
                    </p>
                    <p className="text-white/60 text-sm mt-2">
                      {step.description}
                    </p>
                    {step.items && step.items.length > 0 && (
                      <div className="mt-3">
                        <p className="font-heading text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-1.5">
                          What's included
                        </p>
                        <ul className="space-y-1">
                          {step.items.map((item) => (
                            <li
                              key={item}
                              className="font-body text-xs text-white/70 flex items-start gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-[#99FF33] mt-1.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {step.stepNumber}
                  </span>
                  <p className="font-heading font-semibold text-foreground text-sm">
                    {step.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

StepCarousel.displayName = "StepCarousel";
