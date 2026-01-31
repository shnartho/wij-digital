import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ComparisonSection = () => {
  const { t } = useLanguage();
  const comparisons = t("comparison.items");

  return (
    <section id="comparison" className="relative py-24 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-[150px] opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(280 100% 65%) 0%, transparent 70%)",
            top: "0%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">{t("comparison.title")}</span>
          </h2>
        </motion.div>

        {/* Header Row - Them vs Us */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-8 mb-8 max-w-6xl mx-auto">
          {/* Left Column - Other Companies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-muted border border-muted-foreground/20 mb-2 md:mb-4">
              <X className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />
            </div>
            <h3 className="font-display text-sm md:text-xl lg:text-2xl font-bold text-foreground mb-1 md:mb-2">
              {t("comparison.builders")}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">{t("comparison.buildersSubtitle")}</p>
          </motion.div>

          {/* Right Column - Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 border border-primary/50 mb-2 md:mb-4"
              style={{
                boxShadow: "0 0 20px hsl(185 100% 50% / 0.3)",
              }}
            >
              <Check className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="font-display text-sm md:text-xl lg:text-2xl font-bold neon-text mb-1 md:mb-2">
              {t("comparison.wijDigital")}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">{t("comparison.wijSubtitle")}</p>
          </motion.div>
        </div>

        {/* Comparison Items */}
        <div className="space-y-4 md:space-y-6 max-w-6xl mx-auto">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-8"
            >
              {/* Them - Left Side */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-3 md:p-6 border border-primary/30 hover:border-primary/60 transition-all duration-500 relative overflow-hidden"
              >
                {/* Cyan glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at center, hsl(185 100% 50% / 0.1) 0%, transparent 70%)",
                  }}
                />
                
                <div className="relative z-10">
                  <h4 className="font-display text-[10px] md:text-xs uppercase tracking-wider text-primary mb-2 md:mb-3 font-semibold">
                    {item.category}
                  </h4>
                  <div className="flex items-start gap-2 md:gap-3">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm lg:text-base text-foreground font-medium leading-relaxed break-words">
                      {item.them}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Us - Right Side */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-3 md:p-6 border border-primary/30 hover:border-primary/60 transition-all duration-500 relative overflow-hidden"
              >
                {/* Cyan glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at center, hsl(185 100% 50% / 0.1) 0%, transparent 70%)",
                  }}
                />
                
                <div className="relative z-10">
                  <h4 className="font-display text-[10px] md:text-xs uppercase tracking-wider text-primary mb-2 md:mb-3 font-semibold">
                    {item.category}
                  </h4>
                  <div className="flex items-start gap-2 md:gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-xs md:text-sm lg:text-base text-foreground font-medium leading-relaxed break-words">
                      {item.us}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
