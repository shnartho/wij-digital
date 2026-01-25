import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const PrivacyPolicy = () => {
  return (
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
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: January 25, 2026</p>

            <div className="space-y-8 text-foreground/90">
              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Introduction</h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Wij Digital. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our 
                  website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Information We Collect</h2>
                <p className="leading-relaxed mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you which we have 
                  grouped together as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Identity Data: includes first name, last name, username or similar identifier.</li>
                  <li>Contact Data: includes email address, telephone numbers, and business address.</li>
                  <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                  <li>Usage Data: includes information about how you use our website, products and services.</li>
                  <li>Marketing and Communications Data: includes your preferences in receiving marketing from us and your communication preferences.</li>
                </ul>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your 
                  personal data in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and improve our services to you.</li>
                  <li>To communicate with you about our services.</li>
                  <li>To process your inquiries and respond to your requests.</li>
                  <li>To send you marketing communications (with your consent).</li>
                  <li>To comply with legal obligations.</li>
                  <li>To protect our business interests and legal rights.</li>
                </ul>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Data Security</h2>
                <p className="leading-relaxed mb-4">
                  We have put in place appropriate security measures to prevent your personal data from being 
                  accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, 
                  we limit access to your personal data to those employees, agents, contractors and other third 
                  parties who have a business need to know.
                </p>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Your Legal Rights</h2>
                <p className="leading-relaxed mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request access to your personal data.</li>
                  <li>Request correction of your personal data.</li>
                  <li>Request erasure of your personal data.</li>
                  <li>Object to processing of your personal data.</li>
                  <li>Request restriction of processing your personal data.</li>
                  <li>Request transfer of your personal data.</li>
                  <li>Right to withdraw consent.</li>
                </ul>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Cookies</h2>
                <p className="leading-relaxed mb-4">
                  Our website uses cookies to distinguish you from other users of our website. This helps us to 
                  provide you with a good experience when you browse our website and also allows us to improve our site.
                </p>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Third-Party Links</h2>
                <p className="leading-relaxed mb-4">
                  Our website may include links to third-party websites, plug-ins and applications. Clicking on 
                  those links or enabling those connections may allow third parties to collect or share data about 
                  you. We do not control these third-party websites and are not responsible for their privacy statements.
                </p>
              </section>

              <section className="glass-card p-6">
                <h2 className="font-display text-2xl font-bold mb-4 gradient-text">Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
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
  );
};

export default PrivacyPolicy;
