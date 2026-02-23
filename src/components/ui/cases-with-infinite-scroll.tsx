"use client";

import BrandsCarousel from "@/components/BrandsCarousel";

function Case() {
  return (
    <section className="w-full py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <h2 className="font-heading text-xl md:text-2xl tracking-wider text-center text-white/50 uppercase">
            Brands We've Worked With
          </h2>
          <div className="w-full">
            <BrandsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Case };
