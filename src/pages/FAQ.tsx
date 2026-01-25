import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What services does Wij Digital offer?",
          a: "We offer comprehensive digital services including custom web development, mobile app development (iOS & Android), UI/UX design, digital marketing, e-commerce solutions, and custom software development. We provide end-to-end solutions tailored to your business needs."
        },
        {
          q: "How long does it take to complete a project?",
          a: "Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications or mobile apps can take 8-16 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
        },
        {
          q: "Do you work with businesses of all sizes?",
          a: "Yes! We work with startups, small businesses, and established enterprises. Our solutions are scalable and tailored to fit your budget and requirements, whether you're just starting out or looking to upgrade existing systems."
        },
        {
          q: "What is your pricing model?",
          a: "We offer flexible pricing based on project scope, complexity, and timeline. We provide detailed quotes after understanding your requirements. We also offer monthly retainer packages for ongoing support and maintenance."
        }
      ]
    },
    {
      category: "Web Development",
      questions: [
        {
          q: "What technologies do you use for web development?",
          a: "We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, and various backend frameworks. We choose the best tech stack for your specific needs, ensuring scalability, performance, and maintainability."
        },
        {
          q: "Will my website be mobile-friendly?",
          a: "Absolutely! All our websites are fully responsive and optimized for mobile, tablet, and desktop devices. With over 60% of web traffic coming from mobile devices, we ensure your site looks perfect on every screen size."
        },
        {
          q: "Do you provide website hosting?",
          a: "Yes, we can handle hosting setup and management. We work with reliable hosting providers and can recommend the best solution for your needs. We also offer managed hosting services with ongoing maintenance and security updates."
        },
        {
          q: "Can you redesign my existing website?",
          a: "Yes! We specialize in website redesigns and modernization. We'll analyze your current site, understand your goals, and create a modern, high-performing website that better serves your business objectives."
        }
      ]
    },
    {
      category: "Mobile App Development",
      questions: [
        {
          q: "Do you develop for both iOS and Android?",
          a: "Yes, we develop native apps for both iOS and Android platforms. We also offer cross-platform development using React Native or Flutter, which can reduce costs and development time while maintaining high quality."
        },
        {
          q: "How much does a mobile app cost?",
          a: "Mobile app costs vary widely based on features, complexity, and platform. A basic app starts around $10,000-$20,000, while complex apps with advanced features can range from $50,000-$200,000+. We provide detailed estimates after understanding your requirements."
        },
        {
          q: "Will you help with app store submission?",
          a: "Yes! We handle the entire app store submission process for both Apple App Store and Google Play Store, including preparing assets, writing descriptions, and managing the review process."
        },
        {
          q: "Do you provide app maintenance after launch?",
          a: "Yes, we offer ongoing maintenance and support packages. This includes bug fixes, OS updates, performance optimization, and feature additions to keep your app running smoothly."
        }
      ]
    },
    {
      category: "Digital Marketing",
      questions: [
        {
          q: "What digital marketing services do you offer?",
          a: "We offer SEO (Search Engine Optimization), PPC advertising, social media marketing, content marketing, email marketing, and conversion rate optimization. We create integrated strategies that drive traffic and generate leads."
        },
        {
          q: "How long does it take to see SEO results?",
          a: "SEO is a long-term investment. You can expect to see initial improvements in 2-3 months, with significant results typically appearing in 4-6 months. We provide monthly reports showing progress and rankings."
        },
        {
          q: "Do you manage social media accounts?",
          a: "Yes, we offer full social media management including content creation, posting schedules, community engagement, and paid advertising campaigns across platforms like Facebook, Instagram, LinkedIn, and Twitter."
        },
        {
          q: "How do you measure marketing success?",
          a: "We track KPIs like website traffic, conversion rates, lead generation, ROI, engagement rates, and keyword rankings. You'll receive detailed monthly reports with actionable insights and recommendations."
        }
      ]
    },
    {
      category: "Process & Support",
      questions: [
        {
          q: "What is your development process?",
          a: "We follow an agile methodology: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development, 4) Testing & QA, 5) Launch, 6) Ongoing Support. You'll be involved at every stage with regular updates and feedback sessions."
        },
        {
          q: "How do you handle communication during projects?",
          a: "We maintain transparent communication through your preferred channels (email, phone, video calls, Slack, WhatsApp). You'll have a dedicated project manager and receive regular progress updates and reports."
        },
        {
          q: "What happens after my project launches?",
          a: "We provide post-launch support to ensure everything runs smoothly. We offer various maintenance packages for ongoing updates, security patches, performance monitoring, and feature additions."
        },
        {
          q: "Do you sign NDAs?",
          a: "Yes, we're happy to sign Non-Disclosure Agreements (NDAs) to protect your confidential information. We take data security and privacy very seriously."
        }
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(category => 
      category.questions.map(faq => ({
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
        <link rel="canonical" href="https://www.wij.digital/faq" />
        <meta property="og:title" content="FAQ - Frequently Asked Questions | Wij Digital" />
        <meta property="og:description" content="Find answers to common questions about our services, pricing, timelines, and processes." />
        <meta property="og:url" content="https://www.wij.digital/faq" />
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
                  Frequently Asked Questions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Find answers to common questions about our services, processes, and pricing
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, categoryIndex) => (
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
                  {category.questions.map((faq, index) => (
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
                  Still Have Questions?
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We're here to help! Contact us for personalized answers to your specific questions.
              </p>
              <a
                href="/#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
