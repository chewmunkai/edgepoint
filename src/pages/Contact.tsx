import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          label="Get In Touch"
          title="Let's Start With Strategy."
          highlightWord="Strategy."
          description="Ready to make your marketing work smarter? Book a strategic audit and get clarity on what to do next."
        />
        <section className="bg-[#f5f5f5] py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="rounded-2xl border border-foreground/10 bg-white p-8 space-y-6">
              <div>
                <label className="font-body text-sm text-foreground/60 block mb-2">Name</label>
                <div className="h-12 rounded-lg border border-foreground/10 bg-foreground/[0.02]" />
              </div>
              <div>
                <label className="font-body text-sm text-foreground/60 block mb-2">Email</label>
                <div className="h-12 rounded-lg border border-foreground/10 bg-foreground/[0.02]" />
              </div>
              <div>
                <label className="font-body text-sm text-foreground/60 block mb-2">Message</label>
                <div className="h-32 rounded-lg border border-foreground/10 bg-foreground/[0.02]" />
              </div>
              <div className="h-12 rounded-lg bg-neon w-40 flex items-center justify-center font-body text-sm font-semibold text-black">
                Send Message
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
