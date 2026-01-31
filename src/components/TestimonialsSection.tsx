import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Navpreet Singh",
      role: "CEO, Gold Restaurant and Grocery",
      website: "https://www.goldrg.com",
      content: "Wij Digital completely changed our way of operation. Our website, Android, and iOS apps at www.goldrg.com now allow people to order food online. Our business is growing, digital marketing is driving revenue up, and we're getting permanent customers with better visibility.",
      rating: 5,
    },
    {
      name: "Romulo Cruz",
      role: "CEO, Cross Midia",
      website: "https://www.romulocruz.com",
      content: "Our strategic partnership with Wij Digital transformed our business. They improved our SEO, expanded organic reach, and elevated our business standards. From website development to marketing strategies, they've driven our growth. Visit www.romulocruz.com to see the results.",
      rating: 5,
    },
    {
      name: "Shahadat Nayem",
      role: "CEO, MetasurfAI",
      website: "https://www.metasurfai.com",
      content: "Wij Digital built our complex webapp and continues development. Our B2C model needed strategic marketing, and they've delivered exceptional results. Their technical expertise and strategies helped us scale effectively. I highly recommend their professional services.",
      rating: 5,
    },
  ];
  return (
    <section id="testimonials" className="relative py-24 px-4 overflow-hidden">
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
            <span className="text-foreground">{t("testimonials.title")} </span>
            <span className="gradient-text">{t("testimonials.titleHighlight")}</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="perspective-1000"
            >
              <div className="glass-card p-8 h-full relative preserve-3d">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 leading-relaxed mb-8 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    {testimonial.website && (
                      <a
                        href={testimonial.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs gradient-text hover:opacity-80 transition-opacity duration-200 mt-1 block font-medium"
                      >
                        www.{testimonial.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
