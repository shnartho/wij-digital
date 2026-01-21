import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/wijdigital-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-1"
    >
      <div className="max-w-7xl mx-auto glass-card px-4 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo} alt="WIJ Digital Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-display font-bold text-lg text-foreground">
              Wij <span className="gradient-text">Digital</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: "0 0 20px hsl(185 100% 50% / 0.3)",
              }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-glass-border"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
