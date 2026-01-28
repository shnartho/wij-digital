import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Code, Smartphone, Palette, TrendingUp, ShoppingCart, Wrench, Check, LucideIcon } from 'lucide-react';

interface ServiceDetail {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  process: { step: string; description: string }[];
  faq: { q: string; a: string }[];
  metaDescription: string;
  keywords: string;
}

const services: ServiceDetail[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    icon: Code,
    description: 'Build powerful, scalable websites and web applications',
    longDescription: 'Transform your business with custom web development solutions. We create high-performance websites and web applications that drive engagement, conversions, and revenue growth. From simple landing pages to complex enterprise applications, we deliver excellence.',
    features: [
      'Custom Website Development',
      'Progressive Web Apps (PWA)',
      'E-commerce Platforms',
      'Content Management Systems',
      'API Development & Integration',
      'Database Design & Optimization',
      'Cloud Deployment & Scaling',
      'Performance Optimization'
    ],
    benefits: [
      'Increase online visibility and reach',
      'Improve user engagement and conversion rates',
      'Scale effortlessly as your business grows',
      'Reduce operational costs with automation',
      'Mobile-responsive across all devices',
      'SEO-optimized for better rankings'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'],
    process: [
      { step: 'Discovery', description: 'We analyze your requirements, target audience, and business goals' },
      { step: 'Planning', description: 'Create detailed project roadmap, wireframes, and technical architecture' },
      { step: 'Design', description: 'Craft beautiful, user-friendly interfaces aligned with your brand' },
      { step: 'Development', description: 'Build robust, scalable solutions using modern technologies' },
      { step: 'Testing', description: 'Rigorous QA to ensure flawless functionality and performance' },
      { step: 'Launch', description: 'Deploy to production with monitoring and optimization' },
      { step: 'Support', description: 'Ongoing maintenance, updates, and feature enhancements' }
    ],
    faq: [
      { q: 'How long does web development take?', a: 'Timeline varies by project complexity. Simple websites take 2-4 weeks, while complex applications can take 8-16 weeks. We provide accurate estimates during consultation.' },
      { q: 'What technologies do you use?', a: 'We use modern, industry-standard technologies like React, Next.js, Node.js, and cloud platforms. We choose the best stack for your specific needs.' },
      { q: 'Will my website be mobile-friendly?', a: 'Absolutely! All our websites are fully responsive and optimized for mobile, tablet, and desktop devices.' }
    ],
    metaDescription: 'Professional web development services. Custom websites, web applications, and e-commerce solutions. React, Next.js, Node.js. Fast, scalable, SEO-optimized.',
    keywords: 'web development, custom website, web application development, react development, nextjs development, nodejs backend, progressive web app, pwa development'
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: Smartphone,
    description: 'Native and cross-platform mobile applications for iOS and Android',
    longDescription: 'Reach your customers wherever they are with powerful mobile applications. We develop native and cross-platform apps that deliver exceptional user experiences, drive engagement, and help you achieve your business objectives.',
    features: [
      'Native iOS App Development',
      'Native Android App Development',
      'Cross-Platform Development',
      'Mobile UI/UX Design',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
      'Third-party Integrations'
    ],
    benefits: [
      'Reach mobile-first audiences effectively',
      'Enhance customer engagement and loyalty',
      'Increase revenue with mobile commerce',
      'Leverage device capabilities (camera, GPS, etc.)',
      'Build brand presence on app stores',
      'Enable offline access to your services'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL', 'Redux', 'Jest'],
    process: [
      { step: 'Ideation', description: 'Define app concept, features, and target audience' },
      { step: 'UX/UI Design', description: 'Create intuitive, engaging mobile interfaces' },
      { step: 'Development', description: 'Build native or cross-platform apps with quality code' },
      { step: 'Testing', description: 'Comprehensive testing on real devices and scenarios' },
      { step: 'Deployment', description: 'App store submission and approval management' },
      { step: 'Marketing', description: 'App Store Optimization for better visibility' },
      { step: 'Maintenance', description: 'Regular updates, bug fixes, and new features' }
    ],
    faq: [
      { q: 'Native or cross-platform - which is better?', a: 'Native apps offer best performance and platform-specific features. Cross-platform (React Native/Flutter) reduces costs and time while maintaining quality. We recommend based on your needs.' },
      { q: 'How much does a mobile app cost?', a: 'Costs vary widely based on features and complexity. Basic apps start around $10,000-$20,000, while complex apps can range from $50,000-$200,000+.' },
      { q: 'Do you handle app store submissions?', a: 'Yes! We manage the entire submission process for both Apple App Store and Google Play Store, including assets and descriptions.' }
    ],
    metaDescription: 'Expert mobile app development for iOS and Android. Native and cross-platform apps. React Native, Flutter, Swift, Kotlin. User-friendly, high-performance mobile solutions.',
    keywords: 'mobile app development, ios app development, android app development, react native, flutter, cross platform app, native app development, mobile application'
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: Palette,
    description: 'Beautiful, intuitive interfaces that users love',
    longDescription: 'Great design is more than aesthetics - it\'s about creating seamless experiences that delight users and drive results. Our UI/UX design services combine creativity with data-driven insights to craft interfaces that are both beautiful and highly functional.',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Interactive Prototypes',
      'Usability Testing',
      'Design Systems',
      'Responsive Design',
      'Accessibility Compliance'
    ],
    benefits: [
      'Improve user satisfaction and retention',
      'Increase conversion rates significantly',
      'Reduce development costs with clear designs',
      'Build strong brand identity',
      'Decrease support costs with intuitive design',
      'Stay ahead of competitors with modern UX'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer', 'Miro', 'Hotjar'],
    process: [
      { step: 'Research', description: 'Understand users, competitors, and market trends' },
      { step: 'Information Architecture', description: 'Organize content and structure logically' },
      { step: 'Wireframing', description: 'Create low-fidelity layouts and user flows' },
      { step: 'Visual Design', description: 'Apply brand colors, typography, and imagery' },
      { step: 'Prototyping', description: 'Build interactive prototypes for testing' },
      { step: 'User Testing', description: 'Validate designs with real users' },
      { step: 'Handoff', description: 'Deliver design specs and assets to developers' }
    ],
    faq: [
      { q: 'What\'s the difference between UI and UX?', a: 'UX (User Experience) focuses on overall user journey and satisfaction. UI (User Interface) deals with visual elements and interactions. Both are crucial for great products.' },
      { q: 'How long does UI/UX design take?', a: 'Typically 2-4 weeks for websites and 4-8 weeks for complex applications, depending on scope and rounds of revisions.' },
      { q: 'Do you provide design files?', a: 'Yes! You receive all design files, assets, style guides, and documentation for seamless development handoff.' }
    ],
    metaDescription: 'Professional UI/UX design services. User research, wireframing, prototyping, visual design. Create intuitive, beautiful interfaces that convert. Figma, Adobe XD experts.',
    keywords: 'ui ux design, user interface design, user experience design, web design, app design, wireframing, prototyping, figma design, adobe xd'
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: TrendingUp,
    description: 'Data-driven strategies to grow your online presence',
    longDescription: 'Amplify your brand and reach your target audience with comprehensive digital marketing strategies. We combine SEO, content marketing, social media, and paid advertising to drive traffic, generate leads, and maximize your ROI.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click Advertising (PPC)',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Conversion Rate Optimization',
      'Analytics & Reporting',
      'Marketing Automation'
    ],
    benefits: [
      'Increase website traffic organically',
      'Generate high-quality leads consistently',
      'Improve brand awareness and authority',
      'Achieve measurable ROI on marketing spend',
      'Build engaged social media community',
      'Outrank competitors in search results'
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEMrush', 'Ahrefs', 'HubSpot', 'Mailchimp', 'Hootsuite'],
    process: [
      { step: 'Audit', description: 'Analyze current online presence and competitors' },
      { step: 'Strategy', description: 'Develop comprehensive marketing roadmap' },
      { step: 'Implementation', description: 'Execute SEO, content, and advertising campaigns' },
      { step: 'Optimization', description: 'Continuously improve based on data insights' },
      { step: 'Reporting', description: 'Provide detailed performance reports and recommendations' },
      { step: 'Scaling', description: 'Expand successful campaigns for maximum growth' }
    ],
    faq: [
      { q: 'How long until I see SEO results?', a: 'SEO is long-term. Initial improvements appear in 2-3 months, with significant results typically in 4-6 months. We provide monthly progress reports.' },
      { q: 'What\'s included in digital marketing?', a: 'We offer SEO, PPC, social media marketing, content creation, email marketing, and analytics. We create integrated strategies tailored to your goals.' },
      { q: 'How do you measure success?', a: 'We track KPIs like traffic, conversions, leads, ROI, engagement, and rankings. You receive detailed monthly reports with actionable insights.' }
    ],
    metaDescription: 'Results-driven digital marketing services. SEO, PPC, social media marketing, content strategy. Increase traffic, generate leads, grow revenue. Data-driven approach.',
    keywords: 'digital marketing, seo services, ppc advertising, social media marketing, content marketing, email marketing, google ads, facebook ads, search engine optimization'
  },
  {
    slug: 'ecommerce-solutions',
    title: 'E-commerce Solutions',
    icon: ShoppingCart,
    description: 'Complete online store solutions that drive sales',
    longDescription: 'Launch and grow your online business with powerful e-commerce solutions. We build secure, scalable online stores that provide seamless shopping experiences and maximize conversions. From product management to payment processing, we handle everything.',
    features: [
      'Custom E-commerce Development',
      'Shopping Cart & Checkout',
      'Payment Gateway Integration',
      'Inventory Management',
      'Product Catalog Management',
      'Order & Shipping Management',
      'Customer Account Management',
      'Analytics & Reporting'
    ],
    benefits: [
      'Sell 24/7 without geographical limits',
      'Reduce operational costs significantly',
      'Scale easily with growing inventory',
      'Provide secure payment processing',
      'Track sales and customer behavior',
      'Automate order fulfillment processes'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'React', 'Node.js', 'Stripe', 'PayPal', 'MongoDB'],
    process: [
      { step: 'Consultation', description: 'Understand your products, target market, and goals' },
      { step: 'Platform Selection', description: 'Choose the best e-commerce platform for your needs' },
      { step: 'Design', description: 'Create compelling product pages and user flows' },
      { step: 'Development', description: 'Build secure, high-converting online store' },
      { step: 'Integration', description: 'Connect payment gateways, shipping, and tools' },
      { step: 'Testing', description: 'Ensure smooth checkout and payment processes' },
      { step: 'Launch & Optimization', description: 'Go live and continuously improve conversion rates' }
    ],
    faq: [
      { q: 'Which e-commerce platform is best?', a: 'Depends on your needs. Shopify is great for quick setup, WooCommerce for WordPress integration, and custom solutions for unique requirements. We recommend based on your situation.' },
      { q: 'How secure are payment transactions?', a: 'We implement industry-standard security measures including SSL, PCI compliance, and secure payment gateways like Stripe and PayPal to protect customer data.' },
      { q: 'Can you migrate my existing store?', a: 'Yes! We handle complete store migrations including products, customers, orders, and data, with zero downtime and data integrity.' }
    ],
    metaDescription: 'Professional e-commerce development services. Custom online stores, Shopify, WooCommerce, shopping cart, payment integration. Secure, scalable e-commerce solutions.',
    keywords: 'ecommerce development, online store, shopify development, woocommerce, shopping cart, payment gateway integration, ecommerce website, online shop'
  },
  {
    slug: 'custom-solutions',
    title: 'Custom Solutions',
    icon: Wrench,
    description: 'Tailored software solutions for unique business needs',
    longDescription: 'Every business is unique, and sometimes off-the-shelf solutions don\'t cut it. We develop custom software solutions perfectly tailored to your specific workflows, requirements, and goals. From automation tools to enterprise systems, we bring your vision to life.',
    features: [
      'Custom Software Development',
      'Business Process Automation',
      'Legacy System Modernization',
      'Third-party Integrations',
      'API Development',
      'Database Solutions',
      'Cloud Migration',
      'Enterprise Applications'
    ],
    benefits: [
      'Automate repetitive tasks and save time',
      'Improve operational efficiency',
      'Gain competitive advantage with unique features',
      'Scale solutions as your business grows',
      'Integrate seamlessly with existing systems',
      'Own your software completely'
    ],
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
    process: [
      { step: 'Discovery', description: 'Deep dive into your business processes and pain points' },
      { step: 'Requirements', description: 'Document detailed functional and technical requirements' },
      { step: 'Architecture', description: 'Design scalable, maintainable system architecture' },
      { step: 'Development', description: 'Build custom solution with agile methodology' },
      { step: 'Testing', description: 'Comprehensive QA including user acceptance testing' },
      { step: 'Deployment', description: 'Launch with minimal disruption to operations' },
      { step: 'Training & Support', description: 'Train your team and provide ongoing support' }
    ],
    faq: [
      { q: 'When should I choose custom development?', a: 'When off-the-shelf solutions don\'t meet your unique needs, or when you need specific features, workflows, or integrations that standard products can\'t provide.' },
      { q: 'How much does custom development cost?', a: 'Costs vary based on complexity and scope. Projects typically range from $20,000 for simple tools to $200,000+ for enterprise systems. We provide detailed estimates.' },
      { q: 'Who owns the custom software?', a: 'You do! You receive full ownership of the source code, documentation, and intellectual property rights.' }
    ],
    metaDescription: 'Custom software development services. Tailored solutions, business automation, API development, legacy modernization. Build exactly what your business needs.',
    keywords: 'custom software development, custom solutions, business automation, api development, enterprise software, legacy modernization, bespoke software'
  }
];

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const Icon = service.icon;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
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
        <title>{service.title} Services | Wij Digital</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="keywords" content={service.keywords} />
        <link rel="canonical" href={`https://www.wijdigital.com/services/${service.slug}`} />
        <meta property="og:title" content={`${service.title} Services | Wij Digital`} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={`https://www.wijdigital.com/services/${service.slug}`} />
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
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {service.title}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {service.longDescription}
              </p>
              <a
                href="https://wa.me/351910481951?text=Hi%20Wij%20Digital!%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
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
                  What We Offer
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <Check className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <p className="text-white">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass-card p-8"
              >
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Key Benefits
                  </span>
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="glass-card p-8"
              >
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Technologies
                  </span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-white text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                  Our Process
                </span>
              </h2>
              <p className="text-gray-300 text-lg">
                How we deliver exceptional results
              </p>
            </motion.div>

            <div className="space-y-6">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card p-6 flex items-start gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.step}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Common Questions
                </span>
              </h2>
              <div className="space-y-6">
                {service.faq.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.a}</p>
                  </div>
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
                  Ready to Get Started?
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
                Contact Us Today
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
