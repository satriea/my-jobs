import { useState, useEffect, useRef } from "react";
import { slides } from "../data/slides";
import { motion, AnimatePresence } from "framer-motion";

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false); // State untuk status fullscreen
  const SlideComponent = slides[currentSlide];
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Fungsi Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable fullscreen: ${e.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Pantau perubahan fullscreen (jika user tekan Esc)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Auto-scaling logic - Dioptimalkan untuk Fullscreen
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const winW = window.innerWidth;
        const winH = window.innerHeight;
        
        // Jika fullscreen, kita kurangi padding agar slide lebih besar
        const padding = isFullscreen ? 20 : 60;
        
        const scaleW = (winW - padding) / 1280;
        const scaleH = (winH - (isFullscreen ? 100 : 200)) / 720;
        
        setScale(Math.min(scaleW, scaleH));
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [isFullscreen]); // Re-run saat status fullscreen berubah

  const paginate = (newDirection) => {
    const nextSlide = currentSlide + newDirection;
    if (nextSlide >= 0 && nextSlide < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(nextSlide);
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.key === "ArrowRight" || e.key === " ")) paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "f") toggleFullscreen(); // Shortcut 'f' untuk fullscreen
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide]);

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? "100%" : "-100%", opacity: 0 }),
  };

  return (
    <div className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* Decorative Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-900 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-900 rounded-full blur-[150px]"></div>
      </div>

      {/* Slide Canvas Container */}
      <div 
        ref={containerRef}
        className="relative flex items-center justify-center z-10 transition-transform duration-500 ease-out"
        style={{ 
          width: "1280px", 
          height: "720px", 
          transform: `scale(${scale})`,
          transformOrigin: "center center"
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute w-full h-full shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] rounded-2xl overflow-hidden border border-white/5"
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Modern Navigation */}
      <div className="fixed bottom-8 flex items-center gap-4 md:gap-6 px-5 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50">
        
        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition-all text-white/50 hover:text-white"
          title="Toggle Fullscreen (F)"
        >
          <i className={`fas ${isFullscreen ? 'fa-compress-arrows-alt' : 'fa-expand'}`}></i>
        </button>

        <div className="h-6 w-[1px] bg-white/10 mx-1 hidden md:block"></div>

        {/* Prev Button */}
        <button
          onClick={() => paginate(-1)}
          disabled={currentSlide === 0}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-red-600 disabled:opacity-10 transition-all active:scale-90"
        >
          <i className="fas fa-chevron-left text-white"></i>
        </button>

        <div className="flex flex-col items-center min-w-[80px] md:min-w-[100px]">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-black text-white italic tracking-tighter leading-none">
              {currentSlide + 1}
            </span>
            <span className="text-white/20">/</span>
            <span className="text-sm font-bold text-white/40">{slides.length}</span>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={() => paginate(1)}
          disabled={currentSlide === slides.length - 1}
          className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-red-600 shadow-lg shadow-red-900/20 disabled:opacity-10 transition-all active:scale-90"
        >
          <i className="fas fa-chevron-right text-white"></i>
        </button>
      </div>

      {/* Global Progress Line (Top) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
        <motion.div 
          className="h-full bg-red-600 shadow-[0_0_15px_#E31E24]"
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Mobile Landscape Hint */}
      <div className="md:hidden fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center p-10 text-center landscape:hidden">
        <div className="w-16 h-16 border-2 border-red-500 rounded-xl flex items-center justify-center mb-6 animate-pulse">
          <i className="fas fa-mobile-alt text-3xl rotate-90 text-red-500"></i>
        </div>
        <p className="text-white font-bold uppercase tracking-widest text-sm">Putar Layar ke Landscape</p>
      </div>

    </div>
  );
}