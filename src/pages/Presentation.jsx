import { useState, useEffect, useRef } from "react";
import { slides } from "../data/slides";
import { motion, AnimatePresence } from "framer-motion"; // Tambahkan ini

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // Untuk menentukan arah animasi (kanan/kiri)
  const SlideComponent = slides[currentSlide];
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Auto-scaling logic
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const winW = window.innerWidth;
        const winH = window.innerHeight;
        const scaleW = winW / 1280;
        const scaleH = winH / 720;
        setScale(Math.min(scaleW, scaleH) * 0.9);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide]);

  // Varian Animasi
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1], // Cubic-bezier untuk gerakan lebih natural
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* Decorative Glows */}
      <div className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900 rounded-full blur-[150px]"></div>
      </div>

      {/* Slide Canvas Container */}
      <div 
        ref={containerRef}
        className="relative flex items-center justify-center"
        style={{ 
          width: "1280px", 
          height: "720px", 
          transform: `scale(${scale})`,
          transformOrigin: "center center"
        }}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide} // Sangat penting agar Framer Motion tahu elemen berubah
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] rounded-2xl overflow-hidden"
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Modern Navigation */}
      <div className="fixed bottom-8 flex items-center gap-6 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl z-50">
        <button
          onClick={() => paginate(-1)}
          disabled={currentSlide === 0}
          className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-red-600 disabled:opacity-10 transition-all active:scale-90"
        >
          <i className="fas fa-chevron-left text-white text-lg"></i>
        </button>

        <div className="flex flex-col items-center min-w-[100px]">
          <div className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase mb-1">Roadmap</div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-white italic tracking-tighter">
              {currentSlide + 1}
            </span>
            <span className="text-white/20">/</span>
            <span className="text-sm font-bold text-white/40">{slides.length}</span>
          </div>
        </div>

        <button
          onClick={() => paginate(1)}
          disabled={currentSlide === slides.length - 1}
          className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 hover:bg-red-600 disabled:opacity-10 transition-all active:scale-90 shadow-xl"
        >
          <i className="fas fa-chevron-right text-white text-lg"></i>
        </button>
      </div>

      {/* Global Progress Line (Top) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
        <motion.div 
          className="h-full bg-red-600"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

    </div>
  );
}