import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const { t } = useLanguage();
  const services = t('services.items');

  return (
    <section id="services" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service: any, index: number) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              weOffer={service.weOffer}
              competitorsDont={service.competitorsDont}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
