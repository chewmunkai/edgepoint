import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AnimatedNavigationTabs } from "@/components/ui/animated-navigation-tabs";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, tile: "About", href: "#about" },
    { id: 2, tile: "Framework", href: "#strategy" },
    { id: 3, tile: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="z-10">
            <img src={logo} alt="Edge Point" className="h-[72px] w-auto" />
          </a>

          {/* Desktop Navigation - Animated Tabs */}
          <div className="hidden md:flex items-center gap-6">
            <AnimatedNavigationTabs items={navItems} />
            
            {/* Desktop CTA */}
            <LiquidButton href="#contact" size="default" className="font-heading text-sm text-white">
              Start Our Growth Journey
            </LiquidButton>
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
                  key={item.tile}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white font-body text-lg tracking-wide transition-colors duration-300"
                >
                  {item.tile}
                </motion.a>
              ))}
              <div className="mt-4">
                <LiquidButton href="#contact" size="lg" className="w-full justify-center font-heading text-black" onClick={() => setIsOpen(false)}>
                  Start Our Growth Journey
                </LiquidButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
