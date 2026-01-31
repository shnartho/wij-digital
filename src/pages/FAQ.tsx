import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = t('pages.faq.categories');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap((category: any) => 
      category.questions.map((faq: any) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    )
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | Wij Digital</title>
        <meta name="description" content="Find answers to common questions about Wij Digital's web development, mobile app development, digital marketing services, pricing, timelines, and processes." />
        <meta name="keywords" content="web development faq, mobile app development questions, digital marketing pricing, website cost, app development timeline, seo services" />
        <link rel="canonical" href="https://www.wijdigital.com/faq" />
        <meta property="og:title" content="FAQ - Frequently Asked Questions | Wij Digital" />
        <meta property="og:description" content="Find answers to common questions about our services, pricing, timelines, and processes." />
        <meta property="og:url" content="https://www.wijdigital.com/faq" />
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {t('pages.faq.title')}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                {t('pages.faq.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category: any, categoryIndex: number) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="glass-card p-6 md:p-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {category.category}
                  </span>
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq: any, index: number) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`} className="border-gray-700">
                      <AccordionTrigger className="text-left text-white hover:text-purple-400 transition-colors">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {t('pages.faq.ctaTitle')}
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                {t('pages.faq.ctaDescription')}
              </p>
              <a
                href="https://wa.me/351910481951?text=Hi%20Wij%20Digital!%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                {t('pages.faq.ctaButton')}
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
