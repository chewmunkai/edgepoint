"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn-carousel";

const brands = [
  "VERTEX", "ONWARD", "NUCLEUS", "STRATUM", "AXIOM", "PRISM",
  "HELIX", "NOVA", "CIPHER", "VORTEX", "APEX", "ZENITH",
  "FLUX", "ORBIT", "QUANTUM",
];

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <section className="w-full py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <h2 className="font-heading text-xl md:text-2xl tracking-wider text-center text-white/50 uppercase">
            Brands We've Worked With
          </h2>
          <div className="w-full">
            <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {brands.map((brand, index) => (
                  <CarouselItem className="basis-1/3 sm:basis-1/4 lg:basis-1/6" key={index}>
                    <div className="flex rounded-lg aspect-square bg-white/5 border border-white/10 items-center justify-center p-4">
                      <span className="font-heading font-bold text-sm md:text-base text-white/30 tracking-widest">
                        {brand}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Case };
