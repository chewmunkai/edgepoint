import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FlowGradientBackground } from "@/components/ui/flow-gradient-hero-section";

const Insights = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FlowGradientBackground>
          <section className="pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-5xl">
              <h1 className="font-heading text-4xl md:text-6xl text-white mb-8 tracking-tight">
                INSIGHTS
              </h1>
              <p className="font-body text-lg text-white/60 leading-relaxed mb-12">
                Placeholder content — blog posts coming soon.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
                  >
                    <div className="h-48 bg-white/5" />
                    <div className="p-6">
                      <span className="font-body text-xs text-white/40 uppercase tracking-wider">
                        Category
                      </span>
                      <h3 className="font-heading text-lg text-white mt-2 mb-3">
                        Article Title {i}
                      </h3>
                      <p className="font-body text-sm text-white/50">
                        Brief excerpt placeholder text for this blog post.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FlowGradientBackground>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
