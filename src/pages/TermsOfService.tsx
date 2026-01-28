import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Wij Digital</title>
        <meta name="description" content="Read our terms of service to understand the rules and regulations for using Wij Digital's services." />
        <link rel="canonical" href="https://www.wijdigital.com/terms-of-service" />
        <meta property="og:title" content="Terms of Service | Wij Digital" />
        <meta property="og:description" content="Read our terms of service to understand the rules and regulations for using Wij Digital's services." />
        <meta property="og:url" content="https://www.wijdigital.com/terms-of-service" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Terms of Service</span>
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: January 25, 2026</p>

            <div className="space-y-8 text-foreground/90">
              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Agreement to Terms</h2>
                <p className="leading-relaxed mb-4">
                  By accessing and using the Wij Digital website and services, you agree to be bound by these Terms 
                  of Service and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using or accessing this site.
                </p>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Services Description</h2>
                <p className="leading-relaxed mb-4">
                  Wij Digital provides comprehensive digital solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Website development and design</li>
                  <li>Mobile application development (iOS and Android)</li>
                  <li>Digital marketing and SEO services</li>
                  <li>Brand identity and design</li>
                  <li>Custom software solutions</li>
                  <li>AI and automation services</li>
                  <li>Blockchain and crypto solutions</li>
                  <li>Video production and content creation</li>
                </ul>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Use License</h2>
                <p className="leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on Wij Digital's website 
                  for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
                  transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on Wij Digital's website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Project Terms and Payment</h2>
                <p className="leading-relaxed mb-4">
                  All project terms, deliverables, timelines, and payment schedules will be outlined in a separate 
                  project agreement or contract. Standard terms include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment terms are typically 50% upfront and 50% upon completion, unless otherwise agreed.</li>
                  <li>Project timelines are estimates and may be adjusted based on scope changes or client feedback delays.</li>
                  <li>Clients are responsible for providing necessary content, assets, and timely feedback.</li>
                  <li>Additional work outside the original scope may incur additional charges.</li>
                  <li>Refund policies are outlined in individual project agreements.</li>
                </ul>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Intellectual Property</h2>
                <p className="leading-relaxed mb-4">
                  Upon full payment, clients receive ownership of the final deliverables. However, Wij Digital 
                  retains the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the project in our portfolio and marketing materials</li>
                  <li>Retain ownership of any pre-existing intellectual property, templates, or code libraries</li>
                  <li>Reuse general development techniques and methodologies</li>
                </ul>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Warranties and Disclaimers</h2>
                <p className="leading-relaxed mb-4">
                  The materials on Wij Digital's website and our services are provided on an 'as is' basis. 
                  Wij Digital makes no warranties, expressed or implied, and hereby disclaims and negates all 
                  other warranties including, without limitation, implied warranties or conditions of merchantability, 
                  fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Limitations of Liability</h2>
                <p className="leading-relaxed mb-4">
                  In no event shall Wij Digital or its suppliers be liable for any damages (including, without 
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                  the use or inability to use the materials on Wij Digital's website or services, even if Wij Digital 
                  or a Wij Digital authorized representative has been notified orally or in writing of the possibility 
                  of such damage.
                </p>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Revisions and Errata</h2>
                <p className="leading-relaxed mb-4">
                  The materials appearing on Wij Digital's website could include technical, typographical, or 
                  photographic errors. Wij Digital does not warrant that any of the materials on its website are 
                  accurate, complete, or current. Wij Digital may make changes to the materials contained on its 
                  website at any time without notice.
                </p>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Governing Law</h2>
                <p className="leading-relaxed mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of Portugal, 
                  and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Contact Information</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="leading-relaxed">
                  <strong>Email:</strong> shnartho@gmail.com<br />
                  <strong>Phone:</strong> +351 910 481 951<br />
                  <strong>WhatsApp:</strong> <a href="https://wa.me/351910481951" className="text-primary hover:opacity-80 transition-opacity">+351 910 481 951</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
    </>
  );
};

export default TermsOfService;
