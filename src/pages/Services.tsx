import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ServicesSection from '../components/ServicesSection';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Services",
    "description": "Comprehensive digital solutions including websites, mobile apps, marketing, branding, AI automation, blockchain, SaaS platforms, and video production.",
    "provider": {
      "@type": "Organization",
      "name": "Wij Digital"
    },
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Services | Digital Solutions That Drive Results | Wij Digital</title>
        <meta name="description" content="Expert digital services: websites with payment setup, iOS/Android apps, marketing campaigns, branding, AI automation, blockchain solutions, SaaS platforms, and viral videos. Get real results for your business." />
        <meta name="keywords" content="digital services, web development, mobile apps, marketing, branding, AI automation, blockchain, SaaS platforms, video production, business solutions" />
        <link rel="canonical" href="https://www.wijdigital.com/services" />
        <meta property="og:title" content="Our Services | Digital Solutions That Drive Results | Wij Digital" />
        <meta property="og:description" content="Expert digital services: websites with payment setup, iOS/Android apps, marketing campaigns, branding, AI automation, blockchain solutions, SaaS platforms, and viral videos." />
        <meta property="og:url" content="https://www.wijdigital.com/services" />
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
                  Digital Solutions That
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Drive Real Results
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                From websites that sell to apps that engage, we build digital solutions that transform your business and generate revenue.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

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
                Let's discuss your project and create a custom solution that drives real results for your business.
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