import TextMarquee from "@/components/ui/text-marquee";

const BuildProperlySection = () => {
  return (
    <section className="py-10 md:py-14 bg-[#f5f5f5] overflow-hidden">
      <div className="space-y-2">
        <TextMarquee baseVelocity={-3} className="font-heading font-bold text-3xl md:text-6xl lg:text-8xl text-[#99FF33]/20 uppercase tracking-tight">
          Let's Build It Properly
        </TextMarquee>
        <TextMarquee baseVelocity={3} className="font-heading font-bold text-3xl md:text-6xl lg:text-8xl text-[#99FF33]/20 uppercase tracking-tight">
          Let's Build It Properly
        </TextMarquee>
      </div>
    </section>
  );
};

export default BuildProperlySection;
