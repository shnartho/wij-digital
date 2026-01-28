import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ParticleBackground from "./ParticleBackground";

// YouTube API types
declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        options: {
          videoId: string;
          playerVars?: Record<string, any>;
          events?: {
            onReady?: (event: { target: YTPlayer }) => void;
            onStateChange?: (event: { target: YTPlayer; data: number }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  getPlayerState: () => number;
  destroy: () => void;
}

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Default to false for manual play
  const [mobilePlayer, setMobilePlayer] = useState<YTPlayer | null>(null);
  const [desktopPlayer, setDesktopPlayer] = useState<YTPlayer | null>(null);
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
            className="font-display text-4xl font-bold leading-tight text-foreground mb-4 text-center"
          >
            <span className="gradient-text">We Transform Your Business Digitally to Drive Revenue</span>
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
                  <img src="/wijdigital-logo.png" alt="Gold Restaurant & Grocery" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Gold Restaurant</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/wijdigital-logo.png" alt="Pasha Kebab" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Pasha Kebab</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/wijdigital-logo.png" alt="Little India" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Little India</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/wijdigital-logo.png" alt="TypingMM" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">TypingMM</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/wijdigital-logo.png" alt="MetasurfAI" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">MetasurfAI</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/wijdigital-logo.png" alt="Cross Media" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Cross Media</span>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/wijdigital-logo.png" alt="Gold Restaurant & Grocery" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Gold Restaurant</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/wijdigital-logo.png" alt="Pasha Kebab" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Pasha Kebab</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/wijdigital-logo.png" alt="Little India" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Little India</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/wijdigital-logo.png" alt="TypingMM" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">TypingMM</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/wijdigital-logo.png" alt="MetasurfAI" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">MetasurfAI</span>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <img src="/wijdigital-logo.png" alt="Cross Media" className="h-8 w-auto opacity-70" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">Cross Media</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Video Content - On Top */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4"
          >
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                id="mobile-youtube-player"
                src="https://www.youtube.com/embed/0Cb4NCHG9Do?autoplay=1&mute=1&loop=1&playlist=0Cb4NCHG9Do&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1"
                title="Wij Digital Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </motion.div>

          {/* Services List - Below Video in 2 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-4"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">Website with Full Payment Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">iOS & Android Apps That Sell</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">Marketing That Brings Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">Brand That Stands Out</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">AI Automation That Saves Money</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">Blockchain & Crypto Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">SaaS Platforms That Scale</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">Videos That Go Viral</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col gap-2 items-center mb-6"
          >
            <motion.a
              href="https://wa.me/351910481951?text=Hi!%20I'd%20like%20to%20schedule%20a%20consultation%20with%20Wij%20Digital."
              target="_blank"
              rel="noopener noreferrer"
              className="group px-4 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Revenue Plan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/services"
              className="px-4 py-3 rounded-full glass-card text-foreground font-semibold text-sm border border-glass-border hover:border-primary/50 transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Solutions
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
              { value: "400%", label: "Revenue Growth" },
              { value: "7+", label: "Business Clients" },
              { value: "24/7", label: "Tech Support" },
              { value: "2hrs", label: "Response Time" },
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
      <div className="hidden lg:block relative min-h-screen flex flex-col items-center overflow-hidden pt-4">
        <div className="relative z-10 w-full mx-auto px-4 flex flex-row items-center justify-between gap-8 py-8">
          {/* Text Content - Made Bigger */}
          <div className="flex-[0.35] text-left pt-8 pl-10">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl xl:text-6xl font-bold leading-tight mb-4"
            >
              <span className="gradient-text">We Transform Your Business Digitally to Drive Revenue</span>
            </motion.h1>

            {/* Trusted By Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground whitespace-nowrap">Trusted by</p>
                <div className="flex-1 relative overflow-hidden max-w-xl">
                  <motion.div
                    className="flex items-center gap-8"
                    animate={{
                      x: [0, -600],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                      },
                    }}
                  >
                    {/* Company Logos */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <img src="/wijdigital-logo.png" alt="Gold Restaurant & Grocery" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Gold Restaurant</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <img src="/wijdigital-logo.png" alt="Pasha Kebab" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Pasha Kebab</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <img src="/wijdigital-logo.png" alt="Little India" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Little India</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <img src="/wijdigital-logo.png" alt="TypingMM" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">TypingMM</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <img src="/wijdigital-logo.png" alt="MetasurfAI" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">MetasurfAI</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <img src="/wijdigital-logo.png" alt="Cross Media" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Cross Media</span>
                    </div>
                    
                    {/* Duplicate set for seamless loop */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <img src="/wijdigital-logo.png" alt="Gold Restaurant & Grocery" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Gold Restaurant</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <img src="/wijdigital-logo.png" alt="Pasha Kebab" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Pasha Kebab</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <img src="/wijdigital-logo.png" alt="Little India" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">Little India</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <img src="/wijdigital-logo.png" alt="TypingMM" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">TypingMM</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <img src="/wijdigital-logo.png" alt="MetasurfAI" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">MetasurfAI</span>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <img src="/wijdigital-logo.png" alt="Cross Media" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
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
              <div className="grid grid-cols-2 gap-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-base text-muted-foreground">Website with Full Payment Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-base text-muted-foreground">iOS & Android Apps That Sell</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-base text-muted-foreground">Marketing That Brings Customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-base text-muted-foreground">Brand That Stands Out</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-base text-muted-foreground">AI Automation That Saves Money</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-base text-muted-foreground">Blockchain & Crypto Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-base text-muted-foreground">SaaS Platforms That Scale</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-base text-muted-foreground">Videos That Go Viral</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Video Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-[6.5] max-w-none relative"
          >
            <iframe
              id="desktop-youtube-player"
              src="https://www.youtube.com/embed/0Cb4NCHG9Do?autoplay=1&mute=1&loop=1&playlist=0Cb4NCHG9Do&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1"
              title="Wij Digital Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full aspect-video rounded-lg shadow-2xl"
            ></iframe>
            
          </motion.div>
        </div>

        {/* Stats and Buttons in Same Row - Mirroring Top Layout */}
        <div className="mt-2 w-full max-w-none flex flex-row items-start justify-between gap-8 px-4">
          {/* Empty space to match left text area */}
          <div className="flex-[0.35]"></div>

          {/* Content aligned with video area */}
          <div className="flex-[6.5] flex flex-row items-start justify-start gap-12">
            {/* Buttons on the Left */}
            <div className="flex flex-row items-center gap-4">
              <motion.a
                href="https://wa.me/351910481951?text=Hi!%20I'd%20like%20to%20schedule%20a%20consultation%20with%20Wij%20Digital."
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-base flex items-center gap-2 transition-all duration-300 animate-pulse-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Revenue Plan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/services"
                className="px-5 py-2.5 rounded-full glass-card text-foreground font-semibold text-base border border-glass-border hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Solutions
              </motion.a>
            </div>

            {/* Stats on the Right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-4 gap-6"
            >
              {[
                { value: "400%", label: "Revenue Growth" },
                { value: "7+", label: "Business Clients" },
                { value: "24/7", label: "Tech Support" },
                { value: "2hrs", label: "Response Time" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-3xl font-bold neon-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
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
                src="https://www.youtube.com/embed/0Cb4NCHG9Do?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=1"
                title="Wij Digital Video"
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
