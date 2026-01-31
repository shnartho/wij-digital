import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: t('pages.contact.contactInfo.email'),
      content: "shnartho@gmail.com",
      link: "mailto:shnartho@gmail.com"
    },
    {
      icon: Phone,
      title: t('pages.contact.contactInfo.phone'),
      content: "+351 910 481 951",
      link: "tel:+351910481951"
    },
    {
      icon: MessageCircle,
      title: t('pages.contact.contactInfo.whatsapp'),
      content: "+351 910 481 951",
      link: "https://wa.me/351910481951"
    },
    {
      icon: MapPin,
      title: t('pages.contact.contactInfo.location'),
      content: t('pages.contact.contactInfo.locationValue'),
      link: null
    },
    {
      icon: Clock,
      title: t('pages.contact.contactInfo.businessHours'),
      content: t('pages.contact.contactInfo.businessHoursValue'),
      link: null
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Wij Digital",
      "email": "shnartho@gmail.com",
      "telephone": "+351910481951",
      "areaServed": "Worldwide"
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Get in Touch with Wij Digital</title>
        <meta name="description" content="Contact Wij Digital for web development, mobile app development, and digital marketing services. Get a free consultation and quote. Email, phone, or WhatsApp us today!" />
        <meta name="keywords" content="contact wij digital, web development inquiry, mobile app quote, digital marketing consultation, get in touch, free consultation" />
        <link rel="canonical" href="https://www.wijdigital.com/contact" />
        <meta property="og:title" content="Contact Us | Get in Touch with Wij Digital" />
        <meta property="og:description" content="Contact us for web development, mobile app development, and digital marketing services. Free consultation available!" />
        <meta property="og:url" content="https://www.wijdigital.com/contact" />
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
                  {t('pages.contact.title')}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                {t('pages.contact.subtitle')}
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
                  {t('pages.contact.form.title')}
                </span>
              </h2>

              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const service = formData.get('service');
                const budget = formData.get('budget');
                const message = formData.get('message');

                const whatsappMessage = `*New Contact Form Submission*%0A%0A*${t('contact.formLabels.name')}:* ${name}%0A*${t('contact.contactInfo.email')}:* ${email}%0A*${t('contact.contactInfo.phone')}:* ${phone}%0A*Service:* ${service}%0A*Budget:* ${budget}%0A*${t('contact.formLabels.message')}:* ${message}`;

                window.open(`https://wa.me/351910481951?text=${whatsappMessage}`, '_blank');
              }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 font-medium">
                      {t('pages.contact.form.name')} *
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
                      {t('pages.contact.form.email')} *
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
                      {t('pages.contact.form.phone')}
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
                      {t('pages.contact.form.service')} *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                    >
                      <option value="">{t('pages.contact.form.servicePlaceholder')}</option>
                      <option value="web-development">{t('pages.contact.form.serviceOptions.webDev')}</option>
                      <option value="mobile-app">{t('pages.contact.form.serviceOptions.mobileApp')}</option>
                      <option value="ui-ux-design">{t('pages.contact.form.serviceOptions.uiux')}</option>
                      <option value="digital-marketing">{t('pages.contact.form.serviceOptions.marketing')}</option>
                      <option value="ecommerce">{t('pages.contact.form.serviceOptions.ecommerce')}</option>
                      <option value="custom">{t('pages.contact.form.serviceOptions.custom')}</option>
                      <option value="other">{t('pages.contact.form.serviceOptions.other')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-white mb-2 font-medium">
                    {t('pages.contact.form.budget')}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="">{t('pages.contact.form.budgetPlaceholder')}</option>
                    <option value="under-5k">{t('pages.contact.form.budgetOptions.under5k')}</option>
                    <option value="5k-10k">{t('pages.contact.form.budgetOptions.5k-10k')}</option>
                    <option value="10k-25k">{t('pages.contact.form.budgetOptions.10k-25k')}</option>
                    <option value="25k-50k">{t('pages.contact.form.budgetOptions.25k-50k')}</option>
                    <option value="50k-plus">{t('pages.contact.form.budgetOptions.50k-plus')}</option>
                    <option value="not-sure">{t('pages.contact.form.budgetOptions.notSure')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-medium">
                    {t('pages.contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder={t('pages.contact.form.messagePlaceholder')}
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
                    {t('pages.contact.form.consent')}{' '}
                    <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300 transition-colors">
                      {t('pages.contact.form.privacyPolicy')}
                    </a>{' '}
                    {t('pages.contact.form.consentText')}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                >
                  {t('pages.contact.form.submit')}
                </button>
              </form>

              <p className="text-center text-gray-400 text-sm mt-6">
                {t('pages.contact.form.responseTime')}
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
                  {t('pages.contact.quickContact.title')}
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                {t('pages.contact.quickContact.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+351910481951"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                >
                  {t('pages.contact.quickContact.callNow')}
                </a>
                <a
                  href="https://wa.me/351910481951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-600/50"
                >
                  {t('pages.contact.quickContact.whatsappUs')}
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
