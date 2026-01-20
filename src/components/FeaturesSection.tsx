import { motion } from "framer-motion";
import { Zap, Shield, Rocket, HeartHandshake, TrendingUp, Settings } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Blazing-fast load times with optimized code and modern infrastructure",
  },
  {
    icon: Settings,
    title: "Full Customization",
    description: "Every pixel tailored to your brand. No templates, no compromises",
  },
  {
    icon: Rocket,
    title: "Business Growth",
    description: "Strategic solutions designed to scale with your business goals",
  },
  {
    icon: TrendingUp,
    title: "Increased Visibility",
    description: "SEO-first approach to maximize your online presence and reach",
  },
  {
    icon: Shield,
    title: "Long-term Support",
    description: "Dedicated partnership with ongoing maintenance and updates",
  },
  {
    icon: HeartHandshake,
    title: "Sales Strategy",
    description: "Convert visitors into customers with proven conversion techniques",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(185 100% 50%) 0%, transparent 70%)",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Web3-Tech</span>
            <span className="text-foreground"> Power</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology meets business strategy for unstoppable digital growth
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="glass-card p-8 h-full border border-glass-border hover:border-primary/30 transition-all duration-500">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at center, hsl(185 100% 50% / 0.05) 0%, transparent 70%)",
                  }}
                />
                
                {/* Icon */}
                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-500"
                  style={{
                    boxShadow: "0 0 20px hsl(185 100% 50% / 0.1)",
                  }}
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
