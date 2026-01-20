import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "🌐",
    title: "Website Development",
    weOffer: "High-performance, SEO-optimized websites with modern tech stacks and blazing-fast load times",
    competitorsDont: "Basic templates with slow performance and poor optimization",
  },
  {
    icon: "📱",
    title: "Android Apps",
    weOffer: "Native Android applications with stunning UI, smooth performance, and Play Store deployment",
    competitorsDont: "No mobile app development capabilities",
  },
  {
    icon: "🍎",
    title: "iOS Apps",
    weOffer: "Premium iOS applications with Apple's design guidelines, optimized for App Store success",
    competitorsDont: "No iOS development services",
  },
  {
    icon: "⚡",
    title: "Custom Solutions",
    weOffer: "Streaming chat, real-time systems, AI integrations, and fully custom enterprise solutions",
    competitorsDont: "Only basic website templates, no custom development",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    weOffer: "Data-driven campaigns, SEO, PPC, social media marketing with measurable ROI",
    competitorsDont: "No marketing services or growth strategies",
  },
  {
    icon: "🎨",
    title: "Branding & Design",
    weOffer: "Complete brand identity, logo design, visual systems, and brand strategy",
    competitorsDont: "Generic designs without brand cohesion",
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
            <span className="text-foreground">Why Choose </span>
            <span className="gradient-text">WIJ Digital?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we outperform traditional agencies with comprehensive digital solutions
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
