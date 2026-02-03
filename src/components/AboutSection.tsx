import { Feature2 } from "@/components/ui/feature-2";

const AboutSection = () => {
  return (
    <section id="about" className="section-light">
      <Feature2
        title="A Different Kind of Partnership"
        description="We didn't start Edge Point to be just another agency on your monthly expense list. We started it because we saw too many business owners losing money on marketing that had no clear direction or ownership. Think of us as your marketing partners in the trenches—we focus on one thing: Topline Revenue."
        imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80"
        imageAlt="Team collaboration and partnership"
        buttonPrimary={{
          label: "See Our Framework",
          href: "#strategy",
        }}
        buttonSecondary={{
          label: "View Case Studies",
          href: "#brands",
        }}
      />
    </section>
  );
};

export default AboutSection;
