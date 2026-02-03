import { Button } from "@/components/ui/button";

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
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-96 w-full rounded-xl object-cover md:w-1/2"
          />
          <div className="flex flex-col items-center md:items-start">
            <h2 className="mb-4 max-w-xl text-center font-heading text-4xl font-bold md:text-left md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mb-8 max-w-xl text-center font-body text-lg text-muted-foreground md:text-left">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <a href={buttonPrimary.href}>
                  {buttonPrimary.label}
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={buttonSecondary.href}>
                  {buttonSecondary.label}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
