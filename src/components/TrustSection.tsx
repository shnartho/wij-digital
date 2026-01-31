import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-16 px-4">
      <div className="relative max-w-6xl mx-auto">
        {/* SVG Badges - Side by Side Large with Text in Middle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
          <div className="flex flex-col items-center gap-4 glass-card px-8 py-6 rounded-2xl">
            <img
              src="/money_back_guarantee.svg"
              alt="Money Back Guarantee"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <div className="text-center">
              <div className="font-bold text-foreground text-lg">{t("trust.moneyBack")}</div>
              <div className="text-sm text-muted-foreground">{t("trust.riskFree")}</div>
            </div>
          </div>

          <div className="text-center px-4 md:px-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
              <span className="gradient-text">{t("trust.title")}</span>
            </h2>
          </div>

          <div className="flex flex-col items-center gap-4 glass-card px-8 py-6 rounded-2xl">
            <img
              src="/trusted_company_transparent.svg"
              alt="Trusted Company"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <div className="text-center">
              <div className="font-bold text-foreground text-lg">{t("trust.trusted")}</div>
              <div className="text-sm text-muted-foreground">{t("trust.clients")}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;