import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@wij.digital",
      link: "mailto:hello@wij.digital"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+1 (555) 123-4567",
      link: "https://wa.me/15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Serving Clients Worldwide",
      link: null
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM - 6PM EST",
      link: null
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Wij Digital",
      "email": "hello@wij.digital",
      "telephone": "+15551234567",
      "areaServed": "Worldwide"
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Get in Touch with Wij Digital</title>
        <meta name="description" content="Contact Wij Digital for web development, mobile app development, and digital marketing services. Get a free consultation and quote. Email, phone, or WhatsApp us today!" />
        <meta name="keywords" content="contact wij digital, web development inquiry, mobile app quote, digital marketing consultation, get in touch, free consultation" />
        <link rel="canonical" href="https://www.wij.digital/contact" />
        <meta property="og:title" content="Contact Us | Get in Touch with Wij Digital" />
        <meta property="og:description" content="Contact us for web development, mobile app development, and digital marketing services. Free consultation available!" />
        <meta property="og:url" content="https://www.wij.digital/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
                  Let's Build Something Amazing
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business digitally? Get in touch with our team for a free consultation and custom quote.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.content}</p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Send Us a Message
                </span>
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-white mb-2 font-medium">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="ecommerce">E-commerce Solutions</option>
                      <option value="custom">Custom Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-white mb-2 font-medium">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="">Select a range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-medium">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 accent-purple-500"
                  />
                  <label htmlFor="consent" className="text-gray-300 text-sm">
                    I agree to the{' '}
                    <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300 transition-colors">
                      Privacy Policy
                    </a>{' '}
                    and consent to being contacted about my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                >
                  Send Message
                </button>
              </form>

              <p className="text-center text-gray-400 text-sm mt-6">
                We typically respond within 24 hours on business days
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Prefer to Talk Directly?
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Schedule a free 30-minute consultation call with our team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-600/50"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
