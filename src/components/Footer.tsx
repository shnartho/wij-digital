import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <img src="/wijdigital-logo.png" alt="Wij Digital Logo" className="h-10 w-auto" />
            </motion.div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              {t("footer.brand")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">{t("footer.services")}</h4>
            <ul className="space-y-3">
              {[t("footer.web"), t("footer.apps"), t("footer.marketing"), t("footer.branding"), t("footer.solutions")].map((item) => (
                <li key={item}>
                  <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about-us" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.caseStudies")}
                </a>
              </li>
              <li>
                <span className="text-muted-foreground">{t("footer.careers")}</span>
              </li>
              <li>
                <a href="https://wa.me/351910481951?text=Hi%20Wij%20Digital!%20I'm%20interested%20in%20learning%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Wij Digital. {t("footer.rights")}.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="/terms-of-service" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
