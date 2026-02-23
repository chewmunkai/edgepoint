import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/shadcn-carousel";

import veterinary from "@/assets/brands/veterinary.png";
import mxClinic from "@/assets/brands/mx-clinic.png";
import faceBar from "@/assets/brands/face-bar.png";
import elsevier from "@/assets/brands/elsevier.png";
import unusual from "@/assets/brands/unusual.png";
import iconDental from "@/assets/brands/icon-dental.png";
import anjoe from "@/assets/brands/anjoe.png";
import ckp from "@/assets/brands/ckp.png";
import chiroCore from "@/assets/brands/chiro-core.png";
import nadi from "@/assets/brands/nadi.png";

const brandLogos = [
  { name: "Veterinary Essential Services", src: veterinary },
  { name: "MX Clinic", src: mxClinic },
  { name: "Face Bar Tokyo", src: faceBar },
  { name: "Elsevier", src: elsevier },
  { name: "UnUsUaL Limited", src: unusual },
  { name: "Icon Dental", src: iconDental },
  { name: "Anjoe Raw Beauté", src: anjoe },
  { name: "CKP", src: ckp },
  { name: "Chiro Core", src: chiroCore },
  { name: "NADI", src: nadi },
];

const BrandsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {brandLogos.map((brand, index) => (
          <CarouselItem className="basis-1/3 sm:basis-1/4 lg:basis-1/5" key={index}>
            <div className="flex rounded-lg aspect-[3/2] bg-white items-center justify-center p-4">
              <img
                src={brand.src}
                alt={brand.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default BrandsCarousel;
