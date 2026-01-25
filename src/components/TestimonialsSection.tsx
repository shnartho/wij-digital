import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Navpreet Singh",
    role: "CEO, Gold Restaurant and Grocery",
    content: "Wij Digital completely changed our way of operation. Our website, Android, and iOS apps at www.goldrg.com now allow people to order food online. Our business is growing, digital marketing is driving revenue up, and we're getting permanent customers with better visibility.",
    rating: 5,
  },
  {
    name: "Romulo Cruz",
    role: "CEO, Cross Midia",
    content: "Our strategic partnership with Wij Digital has transformed our business. They've helped improve our SEO, organic reach, and raised our business standards. Check out our website at https://romulocruz.com/ to see the results.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "CEO, British Innovations",
    content: "Wij Digital delivered exactly what we needed for our digital transformation. Their expertise in web development and marketing strategies helped us scale our operations and reach new markets effectively.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-24 px-4 overflow-hidden">
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
            <span className="text-foreground">Businesses We've </span>
            <span className="gradient-text">Helped Grow</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
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
