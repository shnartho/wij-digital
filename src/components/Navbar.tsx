import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const logo = "/wijdigital-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop Navbar - Logo and Menu Separated */}
      <div className="fixed top-4 left-4 z-50 hidden md:block">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-1 glass-card px-3 py-1.5 rounded-full"
          whileHover={{ scale: 1.05 }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={logo} alt="Wij Digital Logo" className="w-6 h-6 rounded" />
          <span className="font-display font-bold text-sm text-foreground">
            Wij <span className="gradient-text">Digital</span>
          </span>
        </motion.a>
      </div>

      <div className="fixed top-4 right-4 z-50 hidden md:block">
        {/* Desktop Navigation */}
        <motion.div
          className="flex items-center gap-3 glass-card px-3 py-1.5 rounded-full"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: "0 0 20px hsl(185 100% 50% / 0.3)",
            }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>

      {/* Mobile Navbar - Logo and Menu Separated */}
      <div className="md:hidden fixed top-2 left-2 z-50">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 glass-card px-2 py-1 rounded-full bg-background/95 backdrop-blur-sm">
          <img src={logo} alt="Wij Digital Logo" className="w-5 h-5 rounded" />
          <span className="font-display font-bold text-xs text-foreground">
            Wij <span className="gradient-text">Digital</span>
          </span>
        </a>
      </div>

      <div className="md:hidden fixed top-2 right-2 z-50">
        {/* Menu Button */}
        <button
          className="glass-card p-1.5 rounded-full bg-background/95 backdrop-blur-sm text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute top-12 right-0 glass-card p-3 rounded-lg min-w-48 bg-background/95 backdrop-blur-sm border border-border"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium py-1.5"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-center text-sm mt-1"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
