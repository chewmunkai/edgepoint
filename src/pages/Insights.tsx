import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const Insights = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          label="Insights"
          title="Latest Thinking."
          highlightWord="Thinking."
          description="Perspectives on strategy, growth, and building marketing that actually works."
        />
        <section className="bg-[#f5f5f5] py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-foreground/10 bg-white overflow-hidden"
                >
                  <div className="h-48 bg-foreground/[0.03] flex items-center justify-center">
                    <span className="font-body text-xs text-foreground/20 uppercase tracking-widest">Coming Soon</span>
                  </div>
                  <div className="p-6">
                    <span className="font-body text-xs text-agency-blue font-medium uppercase tracking-wider">
                      Category
                    </span>
                    <h3 className="font-body text-lg font-semibold text-foreground mt-2 mb-3">
                      Article Title {i}
                    </h3>
                    <p className="font-body text-sm text-foreground/50">
                      Brief excerpt placeholder text for this blog post.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
