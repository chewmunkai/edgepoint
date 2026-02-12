import { Feature197 } from "@/components/ui/accordion-feature-section";
import engageAdvisory from "@/assets/engage-advisory.jpg";
import engageExecution from "@/assets/engage-execution.jpg";
import engagePartnership from "@/assets/engage-partnership.jpg";

const features = [
  {
    id: 1,
    title: "Strategic Advisory",
    image: engageAdvisory,
    description:
      "We guide your internal team or existing vendors with clear direction and commercial oversight—ensuring execution stays aligned with strategy and revenue goals.",
  },
  {
    id: 2,
    title: "Done-With-You Execution",
    image: engageExecution,
    description:
      "We design the strategy and collaborate with your team to execute it with discipline—providing frameworks, feedback, and accountability throughout.",
  },
  {
    id: 3,
    title: "Full-Service Partnership",
    image: engagePartnership,
    description:
      "We handle both strategic direction and execution end-to-end—from diagnosis and planning to delivery and optimization.",
  },
];

const WorkWithUsSection = () => {
  return (
    <div>
      <section className="pt-16 md:pt-24 pb-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-0">
            <p className="text-black/40 font-body font-medium tracking-widest uppercase text-xs mb-3">
              Engagement Models
            </p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-black leading-tight">
              How You Can{" "}
              <span className="bg-[#007BFF] text-white px-2 py-0.5 rounded-sm">
                Work With Us
              </span>
            </h2>
          </div>
        </div>
      </section>

      <Feature197 features={features} />
    </div>
  );
};

export default WorkWithUsSection;
