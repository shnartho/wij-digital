import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Fireworks from "@/components/Fireworks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Fireworks />
      <Navbar />
      <main>
        <HeroSection />
        <ComparisonSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
