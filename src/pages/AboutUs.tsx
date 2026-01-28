import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Users, Target, Award, TrendingUp, Zap, Heart } from 'lucide-react';

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to transforming businesses digitally and helping them generate sustainable revenue through innovative solutions."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We prioritize understanding your unique needs and delivering tailored solutions that exceed expectations."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality. Every project receives meticulous attention to detail and rigorous quality assurance."
    },
    {
      icon: TrendingUp,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Time is money. We deliver projects efficiently without sacrificing quality, helping you launch faster than competitors."
    },
    {
      icon: Heart,
      title: "Long-term Partnership",
      description: "We build lasting relationships, providing ongoing support and evolving with your business needs."
    }
  ];

  const team = [
    {
      stat: "23+",
      label: "Projects Delivered",
      description: "Successfully completed digital transformations"
    },
    {
      stat: "100%",
      label: "Client Satisfaction",
      description: "Rated 5-star by our clients"
    },
    {
      stat: "7+ Years",
      label: "Industry Experience",
      description: "Expertise across multiple domains"
    },
    {
      stat: "24/7",
      label: "Support Available",
      description: "Always here when you need us"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Wij Digital | Expert Digital Transformation Agency</title>
        <meta name="description" content="Learn about Wij Digital, a leading digital transformation agency specializing in web development, mobile apps, and digital marketing. Discover our mission, values, and commitment to client success." />
        <meta name="keywords" content="about wij digital, digital agency, web development company, mobile app development team, digital transformation experts, software development agency" />
        <link rel="canonical" href="https://www.wijdigital.com/about-us" />
        <meta property="og:title" content="About Us - Wij Digital | Expert Digital Transformation Agency" />
        <meta property="og:description" content="Learn about Wij Digital, a leading digital transformation agency specializing in web development, mobile apps, and digital marketing." />
        <meta property="og:url" content="https://www.wijdigital.com/about-us" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
        <Navbar />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  About Wij Digital
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                We are a passionate team of digital innovators dedicated to transforming businesses through cutting-edge technology and creative solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Wij Digital was founded with a simple yet powerful vision: to help businesses thrive in the digital age. We recognized that many companies struggle to navigate the complex world of digital transformation, often lacking the technical expertise or resources to create impactful online experiences.
                </p>
                <p>
                  What started as a small team of passionate developers and designers has grown into a full-service digital agency. We've had the privilege of working with businesses across various industries, from startups to established enterprises, helping them achieve their digital goals and drive measurable results.
                </p>
                <p>
                  Today, we pride ourselves on being more than just a service provider – we're your strategic partner in digital success. Our approach combines technical excellence with creative thinking, ensuring that every solution we deliver not only meets your requirements but exceeds your expectations.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Values
                </span>
              </h2>
              <p className="text-gray-300 text-lg">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Track Record
                </span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {item.stat}
                    </div>
                    <div className="text-xl font-semibold text-white mb-2">
                      {item.label}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {item.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your digital goals and drive real results for your business.
              </p>
              <a
                href="https://wa.me/351910481951?text=Hi%20Wij%20Digital!%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Get Started Today
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
