import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      category: "Core Idea",
      them: "😴 They just build your website and stop. Project finishes, they disappear.",
      us: "🧠 We help you grow your business. Website and apps are only tools in a complete growth system.",
    },
    {
      category: "Focus",
      them: "🎨 Only the look of your site. Colors, template, layout. No thought to sales or customers.",
      us: "💰 Our focus is revenue growth and bringing real customers to you. Everything is built around that.",
    },
    {
      category: "Planning",
      them: "🤷 No strategy. You tell them what to build, they do it. No consideration for growth or traffic.",
      us: "🗺️ We first understand how your business makes money and who your customers are, then plan all digital assets accordingly.",
    },
    {
      category: "Website",
      them: "💤 Generic template used everywhere. Looks okay but does not attract customers or sales.",
      us: "🎯 Custom website built to showcase your offer, guide visitors, and convert them into leads or buyers.",
    },
    {
      category: "Apps & Systems",
      them: "😂 Not included. If you need apps, dashboards, booking, or automation, you figure it out yourself.",
      us: "📱 Full professional apps, dashboards, booking systems, and automation built to fit your business needs.",
    },
    {
      category: "Traffic",
      them: "👻 No plan for visitors. Your site exists but nobody sees it.",
      us: "🔍 SEO and marketing built in to attract organic traffic consistently.",
    },
    {
      category: "Customers",
      them: "🚫 No thinking about how visitors become customers.",
      us: "👥 Clear steps to guide visitors to call, message, book, or buy.",
    },
    {
      category: "Sales",
      them: "😐 Website online but no revenue.",
      us: "💳 System set up to generate leads, bookings, and direct sales automatically.",
    },
    {
      category: "Payments",
      them: "🤦 Not handled. You pay extra or figure it out yourself.",
      us: "💰 All payments, subscriptions, and integrations professionally implemented.",
    },
    {
      category: "Tracking",
      them: "🙈 No tracking. No data. You have no idea what works or doesn't.",
      us: "📊 Full tracking of visitors, leads, and sales so we continuously improve results.",
    },
    {
      category: "After Launch",
      them: "🏃 Project finished. No support. No updates.",
      us: "🔧 Continuous support and optimization to increase customers, sales, and business growth.",
    },
    {
      category: "End Result",
      them: "🗑️ A website that looks nice but does nothing for your business.",
      us: "🚀 A complete digital system that grows your business long-term.",
    },
  ];

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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="gradient-text">Anyone Can Build a Website, Few Can Build a Business</span>
          </h2>
        </motion.div>

        {/* Header Row - Them vs Us */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-8 mb-8 max-w-6xl mx-auto">
          {/* Left Column - Other Companies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-muted border border-muted-foreground/20 mb-2 md:mb-4">
              <X className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />
            </div>
            <h3 className="font-display text-sm md:text-xl lg:text-2xl font-bold text-foreground mb-1 md:mb-2">
              Typical Web Builders 🤡
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">Just Making Websites</p>
          </motion.div>

          {/* Right Column - Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
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
              Wij Digital 🚀
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">Building Revenue Machines</p>
          </motion.div>
        </div>

        {/* Comparison Items */}
        <div className="space-y-4 md:space-y-6 max-w-6xl mx-auto">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
