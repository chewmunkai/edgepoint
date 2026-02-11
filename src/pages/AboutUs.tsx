import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FlowGradientBackground } from "@/components/ui/flow-gradient-hero-section";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FlowGradientBackground>
          <section className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <h1 className="font-heading text-4xl md:text-6xl text-white mb-8 tracking-tight">
                ABOUT US
              </h1>
              <p className="font-body text-lg text-white/60 leading-relaxed mb-12">
                Placeholder content — copywriting to follow.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
                  <h3 className="font-heading text-xl text-white mb-4">Our Mission</h3>
                  <p className="font-body text-white/50">Coming soon.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
                  <h3 className="font-heading text-xl text-white mb-4">Our Vision</h3>
                  <p className="font-body text-white/50">Coming soon.</p>
                </div>
              </div>
            </div>
          </section>
        </FlowGradientBackground>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
