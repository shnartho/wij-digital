import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { ExternalLink, Code, Smartphone, TrendingUp, ShoppingCart } from 'lucide-react';

export default function Portfolio() {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = t('pages.portfolio.projects');
  const stats = t('pages.portfolio.stats');

  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies | Wij Digital Success Stories</title>
        <meta name="description" content="Explore Wij Digital's portfolio of successful web development, mobile app, and digital marketing projects. Real client success stories and measurable results." />
        <meta name="keywords" content="portfolio, case studies, web development projects, mobile app projects, client success stories, digital transformation examples" />
        <link rel="canonical" href="https://www.wijdigital.com/portfolio" />
        <meta property="og:title" content="Portfolio & Case Studies | Wij Digital Success Stories" />
        <meta property="og:description" content="Explore our portfolio of successful projects and real client success stories with measurable results." />
        <meta property="og:url" content="https://www.wijdigital.com/portfolio" />
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
                  {t('pages.portfolio.title')}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                {t('pages.portfolio.subtitle')}
              </p>
            </motion.div>
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
              className="glass-card p-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {projects.map((project: any, index: number) => {
              const iconMap: any = { ShoppingCart, Code, TrendingUp };
              const Icon = iconMap[project.icon] || Code;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 md:p-8 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-purple-400 font-semibold">{project.category}</p>
                        </div>
                        {project.link !== "#" && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-105 transition-all duration-300 self-start"
                          >
                            {t('pages.portfolio.visitSite')}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Results */}
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">{t('pages.portfolio.keyResults')}</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <span className="text-green-400 mt-1">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-white text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Images */}
                      {project.images && (
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-white mb-3">{t('pages.portfolio.screenshots')}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.images.map((img: string, idx: number) => (
                              <img key={idx} src={img} alt={`${project.title} screenshot ${idx+1}`} className="rounded-lg shadow-lg w-full h-auto" />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Client */}
                      <p className="text-gray-400 italic">
                        {t('pages.portfolio.client')} {project.client}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Testimonial Highlight */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              <div className="text-5xl text-purple-400 mb-4">"</div>
              <p className="text-xl md:text-2xl text-gray-300 mb-6 italic">
                {t('pages.portfolio.testimonialQuote')}
              </p>
              <p className="text-white font-semibold">{t('pages.portfolio.testimonialAuthor')}</p>
              <p className="text-gray-400">{t('pages.portfolio.testimonialRole')}</p>
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
                  {t('pages.portfolio.ctaTitle')}
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                {t('pages.portfolio.ctaDescription')}
              </p>
              <a
                href="https://wa.me/351910481951?text=Hi%20Wij%20Digital!%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                {t('pages.portfolio.ctaButton')}
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
