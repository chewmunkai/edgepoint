const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { name: "About", href: "#about" },
      { name: "Strategy", href: "#strategy" },
      { name: "Services", href: "#services" },
    ],
    resources: [
      { name: "Case Studies", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Newsletter", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#" className="font-heading font-bold text-2xl text-white inline-block mb-6">
                EDGE POINT<span className="text-neon">.</span>
              </a>
              <p className="font-body text-white/50 leading-relaxed">
                Marketing leadership for SMEs. Strategy meets execution.
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-heading font-semibold text-white text-sm tracking-wider uppercase mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-body text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-heading font-semibold text-white text-sm tracking-wider uppercase mb-6">
                Resources
              </h4>
              <ul className="space-y-4">
                {links.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-body text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-white text-sm tracking-wider uppercase mb-6">
                Get in Touch
              </h4>
              <a
                href="mailto:hello@edgepoint.com"
                className="font-body text-neon hover:text-neon/80 transition-colors duration-300"
              >
                hello@edgepoint.com
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-white/40 text-sm">
              © {currentYear} Edge Point. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {links.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-white/40 hover:text-white/70 text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
