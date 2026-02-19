import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

const defaultItems = [
  "Easy Integration",
  "24/7 Support",
  "Customizable Design",
  "Scalable Performance",
  "Hundreds of Blocks",
];

export const Cta4 = ({
  title = "Call to Action",
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae.",
  buttonText = "Get Started",
  buttonUrl = "https://shadcnblocks.com",
  items = defaultItems,
}: Cta4Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center rounded-lg bg-accent p-6 text-center md:rounded-xl lg:p-16">
          <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:text-left">
            <div className="flex-1">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold md:text-4xl">
                  {title}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {description}
                </p>
                <div className="mt-2">
                  <Button asChild className="w-full sm:w-auto">
                    <a href={buttonUrl}>
                      {buttonText} <ArrowRight className="ml-2 size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col md:w-auto">
              <div className="flex flex-col gap-4">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <Check className="size-4" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
