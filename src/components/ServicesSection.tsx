import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "🌐",
    title: "Website with Full Payment Integration",
    weOffer: "High-performance websites with Stripe, PayPal, crypto payments, subscription billing, and complete e-commerce solutions",
    competitorsDont: "Basic templates without payment systems or limited checkout options",
  },
  {
    icon: "📱",
    title: "Android & iOS App Development",
    weOffer: "Native & cross-platform mobile apps with stunning UI, real-time features, push notifications, and full store deployment",
    competitorsDont: "No mobile app development or only basic template apps",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    weOffer: "SEO optimization, Google Ads, Facebook/Instagram campaigns, content marketing, email automation, and analytics tracking",
    competitorsDont: "No marketing expertise or generic campaigns without results",
  },
  {
    icon: "🎨",
    title: "Brand Identity Design",
    weOffer: "Complete brand strategy, logo design, color systems, typography, brand guidelines, and visual identity packages",
    competitorsDont: "Generic logo makers without strategic brand thinking",
  },
  {
    icon: "⛓️",
    title: "Blockchain Development",
    weOffer: "Smart contracts, DeFi platforms, NFT marketplaces, blockchain integration, and decentralized applications",
    competitorsDont: "No blockchain expertise or Web3 capabilities",
  },
  {
    icon: "🔮",
    title: "Web3 Solutions",
    weOffer: "Wallet integration, decentralized storage, Web3 authentication, DAO platforms, and blockchain-based applications",
    competitorsDont: "Stuck in Web2, no understanding of decentralized tech",
  },
  {
    icon: "💰",
    title: "Crypto Payment Integration",
    weOffer: "Accept Bitcoin, Ethereum, stablecoins, and 100+ cryptocurrencies with automatic conversion and secure wallets",
    competitorsDont: "Only traditional payment methods, missing global crypto audience",
  },
  {
    icon: "🎬",
    title: "3D Logos & Video Production",
    weOffer: "Stunning 3D logo animations, promotional videos, product demos, motion graphics, and brand video content",
    competitorsDont: "Only static designs without video or animation capabilities",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Enterprise Solutions for </span>
            <span className="gradient-text">Your Business Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Senior software engineers delivering cutting-edge technology solutions. From websites to blockchain, we build everything your business needs to succeed in the digital era.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
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
