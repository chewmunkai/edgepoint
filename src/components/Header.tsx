import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedNavigationTabs } from "@/components/ui/animated-navigation-tabs";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import logo from "@/assets/logo.png";

const serviceSubPages = [
  { title: "Brand & Foundation", href: "/services/brand-foundation" },
  { title: "Visibility & Organic Growth", href: "/services/visibility-organic-growth" },
  { title: "Performance & Scale", href: "/services/performance-scale" },
  { title: "Events & Activation", href: "/services/events-activation" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [servicesLeft, setServicesLeft] = useState(0);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { id: 1, tile: "Home", href: "/" },
    { id: 2, tile: "About Us", href: "/about" },
    { id: 3, tile: "Services", href: "/services" },
    { id: 4, tile: "Insights", href: "/insights" },
    { id: 5, tile: "Contact Us", href: "/contact" },
  ];

  const handleDropdownEnter = (left?: number) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    if (left !== undefined) setServicesLeft(left);
    setDesktopDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDesktopDropdown(false), 200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300" style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)' }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-20">
          {/* Logo */}
          <Link to="/" className="z-10">
            <img src={logo} alt="Edge Point" className="h-[72px] w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative" data-nav-container>
              <AnimatedNavigationTabs
                items={navItems}
                onServiceHover={handleDropdownEnter}
                onServiceLeave={handleDropdownLeave}
              />
              
              {/* Desktop Services Dropdown */}
              <AnimatePresence>
                {desktopDropdown && (
                  <motion.div
                    id="services-dropdown"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-64 rounded-xl border border-white/10 bg-black/95 backdrop-blur-xl py-2 shadow-2xl"
                    style={{ left: `${servicesLeft}px`, transform: 'translateX(-50%)' }}
                    onMouseEnter={() => handleDropdownEnter()}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {serviceSubPages.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block px-4 py-2.5 text-sm font-body text-white/60 hover:text-white hover:bg-white/5 transition-colors duration-200"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
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
                <motion.div
                  key={item.tile}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.tile === "Services" ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="text-white/70 hover:text-white font-body text-lg tracking-wide transition-colors duration-300 flex items-center gap-2 w-full"
                      >
                        Services
                        <ChevronDown className={`size-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pt-3 flex flex-col gap-3">
                              <Link
                                to="/services"
                                onClick={() => setIsOpen(false)}
                                className="text-white/50 hover:text-white font-body text-base transition-colors duration-300"
                              >
                                All Services
                              </Link>
                              {serviceSubPages.map((sub) => (
                                <Link
                                  key={sub.href}
                                  to={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="text-white/50 hover:text-white font-body text-base transition-colors duration-300"
                                >
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-white/70 hover:text-white font-body text-lg tracking-wide transition-colors duration-300 block"
                    >
                      {item.tile}
                    </Link>
                  )}
                </motion.div>
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
