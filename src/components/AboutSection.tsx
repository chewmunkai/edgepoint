import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full px-4 py-12 md:py-16 border-t border-white/10">
      <div className="mx-auto max-w-4xl font-body">
        <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-8">
          {/* Left column */}
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-white/50">
              <span className="text-lg text-neon">✱</span>
              <span className="font-body font-medium tracking-widest">WHO WE ARE</span>
            </div>

            <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border-2 border-white/20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Stats */}
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-2xl font-bold text-white font-heading">5+</span>
                <span>Years experience</span>
                <span className="text-white/30">|</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-2xl font-bold text-white font-heading">60+</span>
                <span>Projects executed</span>
              </div>
            </div>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-2xl font-bold text-white font-heading">RM5 Million</span>
                <span>Ads Optimized</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Your Strategic Partner.{" "}
                <span className="bg-neon text-black px-2 py-0.5 rounded-sm">Not Just Another Agency.</span>
              </h2>

              <div className="mt-6 grid gap-4 text-base leading-relaxed text-white/70 md:grid-cols-2">
                <p>
                  We didn't start Edge Point to be just another agency on your
                  monthly expense list. We started it because we saw too many
                  business owners losing money on marketing that had no clear
                  direction or ownership.
                </p>
                <p>
                  Think of us as your marketing partners in the trenches—we
                  focus on one thing: <span className="text-neon font-semibold">Topline Revenue</span>. Every strategy,
                  every campaign, every dollar spent is tied directly to growth.
                </p>
              </div>
            </div>

            <div className="rounded-xl border-2 border-white/20 bg-white/5 p-6 shadow-[4px_4px_0px_0px_hsl(82,100%,60%)]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">EDGE POINT</h3>
                  <p className="text-sm text-white/60">Growth Partners | Revenue Focused</p>
                </div>
                <p className="text-sm text-white/80 md:max-w-xs">
                  Ready to see where your marketing stands—and where it could go?
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-neon px-5 py-2.5 font-heading text-sm font-semibold text-black transition-all hover:shadow-[0_0_20px_rgba(153,255,51,0.5)]"
                >
                  BOOK STRATEGIC AUDIT <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
