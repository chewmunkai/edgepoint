import TextBlockAnimation from "@/components/ui/text-block-animation";

const DeliberateStrategySection = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <TextBlockAnimation 
            blockColor="hsl(82 100% 60%)"
            stagger={0.08}
            duration={0.5}
          >
            <p className="font-body text-white text-xl md:text-2xl lg:text-3xl leading-relaxed">
              To scale, you don't just need more "activity"—you need a{" "}
              <span className="text-neon font-semibold">deliberate strategy</span>{" "}
              that connects every dollar spent to your bottom line.
            </p>
          </TextBlockAnimation>
        </div>
      </div>
    </section>
  );
};

export default DeliberateStrategySection;
