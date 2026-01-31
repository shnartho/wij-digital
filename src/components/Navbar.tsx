import { motion } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const logo = "/wijdigital-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileLangDropdownOpen, setMobileLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setMobileLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: t("nav.about"), href: "/about-us" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.whyUs"), href: "/why-us" },
    { label: t("nav.portfolio"), href: "/portfolio" },
    { label: t("nav.faq"), href: "/faq" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navbar - Logo and Menu Separated */}
      <div className="fixed top-4 left-4 z-50 hidden md:block">
        {/* Logo */}
        <motion.a
          href="/"
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
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 pl-2 border-l border-border">
            <div className="relative" ref={desktopDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="px-2 py-1 rounded text-sm font-medium text-muted-foreground hover:text-primary flex items-center gap-1"
              >
                <Globe size={12} />
                {language === 'pt' ? (
                  <svg width="16" height="12" viewBox="0 0 20 15" className="rounded-sm">
                    <rect width="8" height="15" fill="#006600"/>
                    <rect x="8" width="12" height="15" fill="#FF0000"/>
                    <circle cx="10" cy="7.5" r="3" fill="#FFFF00" stroke="#FFFFFF" strokeWidth="0.5"/>
                    <circle cx="10" cy="7.5" r="2" fill="none" stroke="#FFFFFF" strokeWidth="0.3"/>
                    <path d="M8 6 L12 6 L12 9 L8 9 Z" fill="#FFFFFF"/>
                    <path d="M9 7 L11 7 M10 6 L10 9" stroke="#FF0000" strokeWidth="0.5"/>
                  </svg>
                ) : (
                  <svg width="16" height="12" viewBox="0 0 20 15" className="rounded-sm">
                    <rect width="20" height="15" fill="#012169"/>
                    <path d="M0 0L20 15M20 0L0 15" stroke="#FFFFFF" strokeWidth="2"/>
                    <path d="M10 0V15M0 7.5H20" stroke="#FFFFFF" strokeWidth="3"/>
                    <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="1"/>
                    <path d="M0 0L20 15M20 0L0 15" stroke="#C8102E" strokeWidth="1"/>
                  </svg>
                )}
                <ChevronDown size={12} />
              </button>
              {langDropdownOpen && (
                <div className="absolute top-full mt-1 right-0 glass-card p-1 rounded min-w-20 bg-background/95 backdrop-blur-sm border border-border">
                  <button
                    onClick={() => {
                      setLanguage('pt');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full px-2 py-1 text-left text-sm hover:bg-secondary/20 rounded flex items-center ${language === 'pt' ? 'bg-primary/20' : ''}`}
                  >
                    <svg width="16" height="12" viewBox="0 0 20 15" className="rounded-sm">
                      <rect width="8" height="15" fill="#006600"/>
                      <rect x="8" width="12" height="15" fill="#FF0000"/>
                      <circle cx="10" cy="7.5" r="3" fill="#FFFF00" stroke="#FFFFFF" strokeWidth="0.5"/>
                      <circle cx="10" cy="7.5" r="2" fill="none" stroke="#FFFFFF" strokeWidth="0.3"/>
                      <path d="M8 6 L12 6 L12 9 L8 9 Z" fill="#FFFFFF"/>
                      <path d="M9 7 L11 7 M10 6 L10 9" stroke="#FF0000" strokeWidth="0.5"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full px-2 py-1 text-left text-sm hover:bg-secondary/20 rounded flex items-center ${language === 'en' ? 'bg-primary/20' : ''}`}
                  >
                    <svg width="16" height="12" viewBox="0 0 20 15" className="rounded-sm">
                      <rect width="20" height="15" fill="#012169"/>
                      <path d="M0 0L20 15M20 0L0 15" stroke="#FFFFFF" strokeWidth="2"/>
                      <path d="M10 0V15M0 7.5H20" stroke="#FFFFFF" strokeWidth="3"/>
                      <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="1"/>
                      <path d="M0 0L20 15M20 0L0 15" stroke="#C8102E" strokeWidth="1"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          <motion.a
            href="https://wa.me/351910481951?text=Hi%20Wij%20Digital!%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: "0 0 20px hsl(185 100% 50% / 0.3)",
            }}
          >
            {t("nav.getStarted")}
          </motion.a>
        </motion.div>
      </div>

      {/* Mobile Navbar - Logo and Menu Separated */}
      <div className="md:hidden fixed top-2 left-2 z-50">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 glass-card px-2 py-1 rounded-full bg-background/95 backdrop-blur-sm">
          <img src={logo} alt="Wij Digital Logo" className="w-5 h-5 rounded" />
          <span className="font-display font-bold text-xs text-foreground">
            Wij <span className="gradient-text">Digital</span>
          </span>
        </a>
      </div>

      {/* Mobile Language Selector */}
      <div className="md:hidden fixed top-2 right-[3rem] z-50">
        <div className="flex items-center gap-1 glass-card p-1.5 rounded-full bg-background/95 backdrop-blur-sm">
          <div className="relative" ref={mobileDropdownRef}>
            <button
              onClick={() => setMobileLangDropdownOpen(!mobileLangDropdownOpen)}
              className="text-xs font-medium text-muted-foreground hover:text-primary flex items-center gap-1 px-1.5 py-0.5"
            >
              <Globe size={10} />
              {language === 'pt' ? (
                <svg width="12" height="9" viewBox="0 0 20 15" className="rounded-sm">
                  <rect width="8" height="15" fill="#006600"/>
                  <rect x="8" width="12" height="15" fill="#FF0000"/>
                  <circle cx="10" cy="7.5" r="3" fill="#FFFF00" stroke="#FFFFFF" strokeWidth="0.5"/>
                  <circle cx="10" cy="7.5" r="2" fill="none" stroke="#FFFFFF" strokeWidth="0.3"/>
                  <path d="M8 6 L12 6 L12 9 L8 9 Z" fill="#FFFFFF"/>
                  <path d="M9 7 L11 7 M10 6 L10 9" stroke="#FF0000" strokeWidth="0.5"/>
                </svg>
              ) : (
                <svg width="12" height="9" viewBox="0 0 20 15" className="rounded-sm">
                  <rect width="20" height="15" fill="#012169"/>
                  <path d="M0 0L20 15M20 0L0 15" stroke="#FFFFFF" strokeWidth="2"/>
                  <path d="M10 0V15M0 7.5H20" stroke="#FFFFFF" strokeWidth="3"/>
                  <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="1"/>
                  <path d="M0 0L20 15M20 0L0 15" stroke="#C8102E" strokeWidth="1"/>
                </svg>
              )}
              <ChevronDown size={10} />
            </button>
            {mobileLangDropdownOpen && (
              <div className="absolute top-full mt-1 right-0 glass-card p-1 rounded min-w-16 bg-background/95 backdrop-blur-sm border border-border">
                <button
                  onClick={() => {
                    setLanguage('pt');
                    setMobileLangDropdownOpen(false);
                  }}
                  className={`w-full px-2 py-1 text-left text-xs hover:bg-secondary/20 rounded flex items-center ${language === 'pt' ? 'bg-primary/20' : ''}`}
                >
                  <svg width="12" height="9" viewBox="0 0 20 15" className="rounded-sm">
                    <rect width="8" height="15" fill="#006600"/>
                    <rect x="8" width="12" height="15" fill="#FF0000"/>
                    <circle cx="10" cy="7.5" r="3" fill="#FFFF00" stroke="#FFFFFF" strokeWidth="0.5"/>
                    <circle cx="10" cy="7.5" r="2" fill="none" stroke="#FFFFFF" strokeWidth="0.3"/>
                    <path d="M8 6 L12 6 L12 9 L8 9 Z" fill="#FFFFFF"/>
                    <path d="M9 7 L11 7 M10 6 L10 9" stroke="#FF0000" strokeWidth="0.5"/>
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setLanguage('en');
                    setMobileLangDropdownOpen(false);
                  }}
                  className={`w-full px-2 py-1 text-left text-xs hover:bg-secondary/20 rounded flex items-center ${language === 'en' ? 'bg-primary/20' : ''}`}
                >
                  <svg width="12" height="9" viewBox="0 0 20 15" className="rounded-sm">
                    <rect width="20" height="15" fill="#012169"/>
                    <path d="M0 0L20 15M20 0L0 15" stroke="#FFFFFF" strokeWidth="2"/>
                    <path d="M10 0V15M0 7.5H20" stroke="#FFFFFF" strokeWidth="3"/>
                    <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="1"/>
                    <path d="M0 0L20 15M20 0L0 15" stroke="#C8102E" strokeWidth="1"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
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
                href="https://wa.me/351910481951?text=Hi%20Wij%20Digital!%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-center text-sm mt-1"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.getStarted")}
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
