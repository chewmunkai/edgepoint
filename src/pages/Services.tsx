import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          label="What We Do"
          title="Strategy-Led Services."
          highlightWord="Services."
          description="We don't sell tactics in isolation. Every service we offer is part of a strategic system designed to drive measurable growth."
        />
        <section className="bg-[#f5f5f5] py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-3 gap-6">
              {["Strategy", "Creative", "Growth"].map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-foreground/10 bg-white p-8 text-center"
                >
                  <h3 className="font-body text-xl font-semibold text-foreground mb-4">{service}</h3>
                  <p className="font-body text-foreground/50">Details coming soon.</p>
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

export default Services;
