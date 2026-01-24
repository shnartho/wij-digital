import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  weOffer: string;
  competitorsDont: string;
  delay?: number;
  children?: ReactNode;
}

const ServiceCard = ({
  icon,
  title,
  weOffer,
  competitorsDont,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -15, 
        rotateY: 5,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      className="perspective-1000"
    >
      <div className="glass-card-hover p-6 md:p-8 h-full preserve-3d">
        {/* Icon */}
        <div className="text-5xl mb-6">{icon}</div>
        
        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">
          {title}
        </h3>
        
        {/* Comparison */}
        <div className="space-y-4">
          {/* We offer */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10 border border-primary/20">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-primary" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-primary font-semibold">
                Wij Digital
              </span>
              <p className="text-sm text-foreground mt-1">{weOffer}</p>
            </div>
          </div>
          
          {/* Competitors */}
          <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/10">
            <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <X className="w-4 h-4 text-destructive" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Competitors
              </span>
              <p className="text-sm text-muted-foreground mt-1">{competitorsDont}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
