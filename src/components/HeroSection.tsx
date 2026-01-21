import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ParticleBackground from "./ParticleBackground";

// YouTube API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Default to false for manual play
  const [mobilePlayer, setMobilePlayer] = useState<any>(null);
  const [desktopPlayer, setDesktopPlayer] = useState<any>(null);
  const [isMuted, setIsMuted] = useState(false);

  // Load YouTube API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }
  }, []);

  // Initialize players when API is ready
  useEffect(() => {
    const initPlayers = () => {
      if (window.YT && window.YT.Player) {
        // Mobile player
        const mobilePlayerInstance = new window.YT.Player('mobile-youtube-player', {
          events: {
            onReady: () => console.log('Mobile YouTube player ready'),
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
                setIsPlaying(false);
              }
            }
          }
        });
        setMobilePlayer(mobilePlayerInstance);

        // Desktop player
        const desktopPlayerInstance = new window.YT.Player('desktop-youtube-player', {
          events: {
            onReady: () => console.log('Desktop YouTube player ready'),
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
                setIsPlaying(false);
              }
            }
          }
        });
        setDesktopPlayer(desktopPlayerInstance);
      }
    };

    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      initPlayers();
    } else {
      // Wait for API to load
      window.onYouTubeIframeAPIReady = initPlayers;
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      
      {/* Mobile Layout - Video Background with Overlay Text */}
      <div className="block lg:hidden relative">
        {/* Sticky Video Background */}
        <div className="sticky top-0 h-screen w-full">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full"
          >
            <iframe
              id="mobile-youtube-player"
              src="https://www.youtube.com/embed/bL7YtQQdSns?loop=1&playlist=bL7YtQQdSns&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&enablejsapi=1"
              title="WIJ Digital Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            {/* Main Headline - Absolutely positioned over video */}
            <div className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 text-center z-30">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg"
              >
                <span className="text-white">Websites, Apps, Marketing,</span>
                <br />
                <span className="text-white">Branding – </span>
                <span className="text-yellow-400">All in One Place</span>
              </motion.h1>
            </div>
            
          </motion.div>
        </div>

        {/* Content that scrolls over the video */}
        <div className="relative z-10 bg-background">
          {/* Rest of content */}
          <div className="px-4 pb-4 pt-4">
            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 text-center"
            >
              Full customization, high performance, long-term support. 
              We build digital experiences that drive growth and leave competitors behind.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            >
              <motion.a
                href="#contact"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg flex items-center gap-2 transition-all duration-300 animate-pulse-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#services"
                className="px-8 py-4 rounded-full glass-card text-foreground font-semibold text-lg border border-glass-border hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:block relative min-h-screen flex items-start justify-center overflow-hidden pt-4">
        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-row items-center justify-between gap-8 py-8">
          {/* Text Content */}
          <div className="flex-[1.8] text-left pt-8 pl-10">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl xl:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-foreground">Websites, Apps, Marketing, Branding</span>
              <br />
              <span className="gradient-text">All in One Place</span>
            </motion.h1>

            {/* Trusted By Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4"
            >
              <div className="flex items-center justify-between gap-8">
                <p className="text-sm text-muted-foreground whitespace-nowrap">Trusted by</p>
                <div className="flex-1 relative overflow-hidden max-w-2xl">
                  <motion.div
                    className="flex items-center gap-12"
                    animate={{
                      x: [0, -800],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25,
                        ease: "linear",
                      },
                    }}
                  >
                    {/* Company Logos */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <img src="/assets/wijdigital-logo.png" alt="Gold Restaurant & Grocery" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Gold Restaurant & Grocery</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <img src="/assets/wijdigital-logo.png" alt="Pasha Kebab" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Pasha Kebab</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <img src="/assets/wijdigital-logo.png" alt="Little India" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Little India</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <img src="/assets/wijdigital-logo.png" alt="TypingMM" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">TypingMM</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <img src="/assets/wijdigital-logo.png" alt="MetasurfAI" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">MetasurfAI</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <img src="/assets/wijdigital-logo.png" alt="Cross Media" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Cross Media</span>
                    </div>
                    
                    {/* Duplicate set for seamless loop */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <img src="/assets/wijdigital-logo.png" alt="Gold Restaurant & Grocery" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Gold Restaurant & Grocery</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <img src="/assets/wijdigital-logo.png" alt="Pasha Kebab" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Pasha Kebab</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <img src="/assets/wijdigital-logo.png" alt="Little India" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Little India</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <img src="/assets/wijdigital-logo.png" alt="TypingMM" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">TypingMM</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <img src="/assets/wijdigital-logo.png" alt="MetasurfAI" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">MetasurfAI</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <img src="/assets/wijdigital-logo.png" alt="Cross Media" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Cross Media</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-4"
            >
              <div className="grid grid-cols-4 gap-4 max-w-4xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Website with Full payment integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Android, iOS App Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Digital Marketing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Brand Identity Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Blockchain Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Web3 Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Crypto Payment Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">3D Logos & Video Production</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-row items-center justify-start gap-4 mb-2"
            >
              <motion.a
                href="#contact"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg flex items-center gap-2 transition-all duration-300 animate-pulse-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#services"
                className="px-8 py-4 rounded-full glass-card text-foreground font-semibold text-lg border border-glass-border hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-4 grid grid-cols-4 gap-8"
            >
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "50+", label: "Global Clients" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-4xl font-bold neon-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Video Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 max-w-none relative flex justify-center"
          >
            <iframe
              id="desktop-youtube-player"
              src="https://www.youtube.com/embed/bL7YtQQdSns?loop=1&playlist=bL7YtQQdSns&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&enablejsapi=1"
              title="WIJ Digital Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-auto h-[500px] aspect-[9/16] rounded-lg shadow-2xl"
            ></iframe>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
