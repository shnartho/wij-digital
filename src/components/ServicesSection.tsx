import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "🌐",
    title: "Website with Full Payment Setup",
    weOffer: "E-commerce websites with Stripe, PayPal, crypto payments, subscription billing, and complete checkout systems that maximize conversions",
    competitorsDont: "Basic templates without payment processing or limited checkout options",
  },
  {
    icon: "📱",
    title: "iOS & Android Apps That Sell",
    weOffer: "Native mobile apps with in-app purchases, push notifications, real-time features, and app store optimization for maximum downloads",
    competitorsDont: "No mobile development or only basic template apps without monetization",
  },
  {
    icon: "📈",
    title: "Marketing That Brings Customers",
    weOffer: "SEO, Google Ads, Facebook/Instagram campaigns, email automation, content marketing, and analytics that deliver qualified leads",
    competitorsDont: "Generic marketing without results tracking or ROI measurement",
  },
  {
    icon: "🎨",
    title: "Brand That Stands Out",
    weOffer: "Complete brand strategy, logo design, visual identity, brand guidelines, and marketing materials that build recognition",
    competitorsDont: "Generic logo makers without strategic brand positioning",
  },
  {
    icon: "🤖",
    title: "AI Automation That Saves Money",
    weOffer: "AI-powered chatbots, automated workflows, predictive analytics, and machine learning solutions that reduce costs by 60%",
    competitorsDont: "Manual processes without automation or AI capabilities",
  },
  {
    icon: "⛓️",
    title: "Blockchain & Crypto Solutions",
    weOffer: "Smart contracts, DeFi platforms, NFT marketplaces, Web3 apps, crypto payments, and blockchain integration for modern business",
    competitorsDont: "No blockchain expertise or Web3 capabilities",
  },
  {
    icon: "☁️",
    title: "SaaS Platforms That Scale",
    weOffer: "Subscription-based software platforms with multi-tenant architecture, API integrations, and automatic scaling for growing businesses",
    competitorsDont: "One-off custom software without scalability or subscription models",
  },
  {
    icon: "🎬",
    title: "Videos That Go Viral",
    weOffer: "3D logo animations, promotional videos, product demos, motion graphics, and viral marketing content that drives engagement",
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
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">What We Build For Your </span>
            <span className="gradient-text">Business Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just build websites and apps. We build revenue-generating systems that grow your business.
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
