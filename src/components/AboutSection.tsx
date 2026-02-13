import { Stats } from "@/components/ui/stats-section";
import aboutImage from "@/assets/about-retro-futuristic.jpg";

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
                src={aboutImage}
                alt="Retro-futuristic strategy command center"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                Your Strategic Partner.{" "}
                <span className="bg-neon text-black px-2 py-0.5 rounded-sm inline leading-[1.6] box-decoration-clone">Not Just Another Agency.</span>
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
          </div>
        </div>

        {/* Stats Section */}
        <Stats className="mt-10" />
      </div>
    </section>
  );
};

export default AboutSection;
