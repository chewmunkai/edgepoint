import { motion } from "framer-motion";
import { Scene } from "@/components/ui/neon-raymarcher";

interface PageHeroProps {
  label: string;
  title: string;
  highlightWord?: string;
  description: string;
}

const PageHero = ({ label, title, highlightWord, description }: PageHeroProps) => {
  const renderTitle = () => {
    if (!highlightWord) {
      return <>{title}</>;
    }
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-neon">{highlightWord}</span>
        {parts[1] || ""}
      </>
    );
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
      <Scene />
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
        >
          <span className="text-white/80 text-xs md:text-sm font-body font-medium tracking-wide">
            {label}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6"
        >
          {renderTitle()}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
