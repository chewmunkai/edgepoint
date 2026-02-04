import TextMarquee from "@/components/ui/text-marquee";

const MarqueeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-black overflow-hidden">
      <div className="space-y-4">
        <TextMarquee 
          baseVelocity={-3} 
          className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight"
          scrollDependent
        >
          WE FIND THE EDGE. WE GET TO THE POINT. •
        </TextMarquee>
        <TextMarquee 
          baseVelocity={3} 
          className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-neon tracking-tight"
          scrollDependent
          delay={200}
        >
          WE FIND THE EDGE. WE GET TO THE POINT. •
        </TextMarquee>
      </div>
    </section>
  );
};

export default MarqueeSection;
