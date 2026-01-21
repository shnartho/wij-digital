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
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
      
      {/* Mobile Layout - Video beside services */}
      <div className="block lg:hidden relative min-h-screen flex items-center justify-center px-3 pt-12 pb-3">
        <div className="w-full max-w-6xl">
          {/* Main Headline - Full Width */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl font-bold leading-tight text-foreground mb-4 text-center"
          >
            <span className="text-foreground">Websites, Apps, Marketing, Branding</span>
            <br />
            <span className="gradient-text">All in One Place</span>
          </motion.h1>

          {/* Trusted By Section - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <p className="text-sm text-muted-foreground whitespace-nowrap">Trusted by</p>
            </div>
            <div className="relative overflow-hidden w-full">
              <motion.div
                className="flex items-center gap-6"
                animate={{
                  x: [0, -500],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 18,
                    ease: "linear",
                  },
                }}
              >
                {/* Company Logos - Mobile */}
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/assets/wijdigital-logo.png" alt="Gold Restaurant & Grocery" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Gold Restaurant</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/assets/wijdigital-logo.png" alt="Pasha Kebab" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Pasha Kebab</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/assets/wijdigital-logo.png" alt="Little India" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Little India</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/assets/wijdigital-logo.png" alt="TypingMM" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">TypingMM</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/assets/wijdigital-logo.png" alt="MetasurfAI" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">MetasurfAI</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/assets/wijdigital-logo.png" alt="Cross Media" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Cross Media</span>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/assets/wijdigital-logo.png" alt="Gold Restaurant & Grocery" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Gold Restaurant</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/assets/wijdigital-logo.png" alt="Pasha Kebab" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Pasha Kebab</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/assets/wijdigital-logo.png" alt="Little India" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Little India</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/assets/wijdigital-logo.png" alt="TypingMM" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">TypingMM</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/assets/wijdigital-logo.png" alt="MetasurfAI" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">MetasurfAI</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/assets/wijdigital-logo.png" alt="Cross Media" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Cross Media</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Services + Video Row */}
          <div className="flex flex-row items-start justify-between gap-3 mb-4">
            {/* Features List - Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1"
            >
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Website with Full payment integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Android, iOS App Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Digital Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Brand Identity Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Blockchain Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Web3 Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Crypto Payment Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">3D Logos & Video Production</span>
                </div>
              </div>
            </motion.div>

            {/* Video Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-shrink-0"
            >
              <div
                className="relative w-32 aspect-[9/16] rounded-lg overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <iframe
                  id="mobile-youtube-player"
                  src="https://www.youtube.com/embed/bL7YtQQdSns?controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&enablejsapi=1"
                  title="WIJ Digital Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>

                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-primary ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 5v10l8-5-8-5z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-2 items-center mb-6"
          >
            <motion.a
              href="#contact"
              className="group px-4 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#services"
              className="px-4 py-3 rounded-full glass-card text-foreground font-semibold text-sm border border-glass-border hover:border-primary/50 transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Stats Section - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Global Clients" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-2xl font-bold neon-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
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

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video iframe */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/bL7YtQQdSns?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=1"
                title="WIJ Digital Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
