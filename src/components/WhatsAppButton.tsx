import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "15551234567"; // Replace with actual number
  const message = "Hi! I'm interested in WIJ Digital's services.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
      style={{
        background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        boxShadow: "0 0 30px rgba(37, 211, 102, 0.5), 0 10px 40px rgba(0, 0, 0, 0.3)",
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" fill="white" />
      
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: "2px solid #25D366",
        }}
        animate={{
          scale: [1, 1.4, 1.4],
          opacity: [0.8, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;
