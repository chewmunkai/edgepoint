import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { HighlightText } from "@/components/ui/animated-reveal-text";

interface Feature2Props {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttonPrimary: {
    label: string;
    href: string;
  };
  buttonSecondary: {
    label: string;
    href: string;
  };
}

export const Feature2 = ({
  title = "Blocks built with Shadcn & Tailwind",
  description = "Hundreds of finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  imageSrc = "https://shadcnblocks.com/images/block/placeholder-1.svg",
  imageAlt = "placeholder hero",
  buttonPrimary = {
    label: "Get Started",
    href: "https://shadcnblocks.com",
  },
  buttonSecondary = {
    label: "Learn More",
    href: "https://shadcnblocks.com",
  },
}: Feature2Props) => {
  // Split title to highlight last part
  const titleParts = title.split(" ");
  const highlightWord = titleParts.pop() || "";
  const mainTitle = titleParts.join(" ");

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-72 md:max-h-80 w-full rounded-xl object-cover md:w-1/2"
          />
          <div className="flex flex-col items-center md:items-start">
            <h2 className="mb-3 max-w-xl text-center font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-black md:text-left">
              {mainTitle}{" "}
              <HighlightText
                text={highlightWord}
                as="span"
                textClassName="text-black"
                highlightClassName="rounded-sm"
                duration={1.2}
              />
            </h2>
            <p className="mb-6 max-w-xl text-center font-body text-base text-black/60 md:text-left leading-relaxed">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <LiquidButton href={buttonPrimary.href} size="default" className="font-heading text-sm text-black">
                {buttonPrimary.label}
              </LiquidButton>
              <LiquidButton href={buttonSecondary.href} size="default" className="font-heading text-sm text-black">
                {buttonSecondary.label}
              </LiquidButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
