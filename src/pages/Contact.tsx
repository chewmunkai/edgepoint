import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FlowGradientBackground } from "@/components/ui/flow-gradient-hero-section";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FlowGradientBackground>
          <section className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-3xl">
              <h1 className="font-heading text-4xl md:text-6xl text-white mb-8 tracking-tight">
                CONTACT US
              </h1>
              <p className="font-body text-lg text-white/60 leading-relaxed mb-12">
                Placeholder content — contact form coming soon.
              </p>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 space-y-6">
                <div>
                  <label className="font-body text-sm text-white/60 block mb-2">Name</label>
                  <div className="h-12 rounded-lg border border-white/10 bg-white/5" />
                </div>
                <div>
                  <label className="font-body text-sm text-white/60 block mb-2">Email</label>
                  <div className="h-12 rounded-lg border border-white/10 bg-white/5" />
                </div>
                <div>
                  <label className="font-body text-sm text-white/60 block mb-2">Message</label>
                  <div className="h-32 rounded-lg border border-white/10 bg-white/5" />
                </div>
                <div className="h-12 rounded-lg bg-[#99FF33] w-40" />
              </div>
            </div>
          </section>
        </FlowGradientBackground>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
