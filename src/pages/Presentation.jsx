import { useState, useEffect, useRef } from "react";
import { slides } from "../data/slides";
import { motion, AnimatePresence } from "framer-motion";

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const SlideComponent = slides[currentSlide];
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => console.error(e));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;

      const winW = window.visualViewport ? window.visualViewport.width : window.innerWidth;
      const winH = window.visualViewport ? window.visualViewport.height : window.innerHeight;
      
      const isMobile = winW < 1024;
      const isLandscape = winW > winH;

      const safePadding = isMobile ? 0 : 40;

      const scaleW = (winW - safePadding) / 1280;
      const scaleH = (winH - (isMobile && isLandscape ? 40 : 120)) / 720;


      let finalScale = Math.min(scaleW, scaleH);

      setScale(finalScale);
    };

    window.addEventListener("resize", updateScale);
    if (window.visualViewport) window.visualViewport.addEventListener("resize", updateScale);
    
    updateScale();
    setTimeout(updateScale, 100);

    return () => {
      window.removeEventListener("resize", updateScale);
      if (window.visualViewport) window.visualViewport.removeEventListener("resize", updateScale);
    };
  }, [isFullscreen, currentSlide]);

  const paginate = (newDirection) => {
    const nextSlide = currentSlide + newDirection;
    if (nextSlide >= 0 && nextSlide < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(nextSlide);
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "f") toggleFullscreen();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide]);

  return (
    <div className="fixed inset-0 w-full h-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-sans touch-none">
      
      {/* Background Decorative */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-900 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-900 rounded-full blur-[150px]"></div>
      </div>

      {/* CANVAS CONTAINER - Ini yang menahan slide tetap di tengah */}
      <div 
        className="relative flex items-center justify-center z-10"
        style={{ width: "100%", height: "100%" }} 
      >
        <div
          ref={containerRef}
          style={{ 
            width: "1280px", 
            height: "720px", 
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            flexShrink: 0
          }}
          className="relative transition-transform duration-300 ease-out"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={{
                enter: (d) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (d) => ({ x: d < 0 ? 100 : -100, opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute w-full h-full shadow-2xl rounded-xl overflow-hidden bg-[#0f0f0f] border border-white/5"
            >
              <SlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* NAVIGATION - Responsive & Slimmer */}
      <div className={`fixed bottom-4 md:bottom-8 flex items-center gap-4 px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 transition-all ${isFullscreen ? 'opacity-20 hover:opacity-100' : 'opacity-100'}`}>
        <button onClick={toggleFullscreen} className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/50">
          <i className={`fas ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
        </button>

        <div className="w-[1px] h-4 bg-white/10"></div>

        <button onClick={() => paginate(-1)} disabled={currentSlide === 0} className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 shadow-lg shadow-gray-900/20 disabled:opacity-10">
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="text-center min-w-[50px]">
          <span className="text-red-500 font-black italic text-lg">{currentSlide + 1}</span>
          <span className="text-white/20 mx-1">/</span>
          <span className="text-white/40 text-xs">{slides.length}</span>
        </div>

        <button onClick={() => paginate(1)} disabled={currentSlide === slides.length - 1} className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-600 shadow-lg shadow-red-900/20 disabled:opacity-10">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Progress Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-50">
        <div className="h-full bg-red-600 transition-all duration-300" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
      </div>

      {/* PORTRAIT OVERLAY */}
      <div className="md:hidden fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center p-6 text-center landscape:hidden">
        <div className="w-20 h-20 border-2 border-red-500 rounded-2xl flex items-center justify-center mb-6 animate-bounce rotate-90">
          <i className="fas fa-mobile-alt text-4xl text-white"></i>
        </div>
        <h2 className="text-white font-black text-xl uppercase tracking-tighter">Mohon Putar Layar</h2>
        <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-2">Wajib mode landscape untuk melihat halaman penuh</p>
      </div>

    </div>
  );
}