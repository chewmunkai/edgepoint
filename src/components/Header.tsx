import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { StackingNavbar } from "@/components/ui/stacking-navbar";
import { HoverButton } from "@/components/ui/hover-button";
import logoDark from "@/assets/logo-dark-bg.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Framework", href: "#strategy" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="z-10">
            <img src={logoDark} alt="Edge Point" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Navigation - Stacking Navbar */}
          <div className="hidden md:flex items-center gap-6">
            <StackingNavbar items={navItems} />
            
            {/* Desktop CTA */}
            <HoverButton href="#contact" className="px-6 py-2.5 text-sm">
              Start Our Growth Journey
            </HoverButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 z-10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white font-body text-lg tracking-wide transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-4">
                <HoverButton href="#contact" className="w-full justify-center" onClick={() => setIsOpen(false)}>
                  Start Our Growth Journey
                  <ArrowRight className="w-4 h-4" />
                </HoverButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
