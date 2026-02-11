import TextBlockAnimation from "@/components/ui/text-block-animation";

const DeliberateStrategySection = () => {
  return (
    <section className="bg-black py-8 md:py-12 relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <TextBlockAnimation 
            blockColor="hsl(82 100% 60%)"
            stagger={0.08}
            duration={0.5}
          >
            <p className="font-body text-white text-xl md:text-2xl lg:text-3xl leading-relaxed">
              We don't start with tactics. We start with{" "}
              <span className="text-neon font-semibold">strategy</span>—then
              execute what matters. Our focus:{" "}
              <span className="text-neon font-semibold">Commercial clarity. Revenue accountability. Strategic discipline.</span>
            </p>
          </TextBlockAnimation>
        </div>
      </div>
    </section>
  );
};

export default DeliberateStrategySection;
