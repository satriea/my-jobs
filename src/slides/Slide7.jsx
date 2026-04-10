import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide7() {
const [showEmailModal, setShowEmailModal] = useState(false);

  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-[#0f0f0f] text-white font-sans selection:bg-red-500/30">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px]"></div>

      {/* Header - KONSISTEN */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] opacity-95 shadow-xl"></div>
        <div className="relative flex items-center gap-5 text-left">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30 text-white">
             <i className="fas fa-envelope text-2xl"></i>
          </div>
          <div>
            <div className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md leading-none mb-1 text-left">PENYESUAIAN NOTIFIKASI EMAIL</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-semibold text-left">Optimasi Biaya & Efisiensi Infrastruktur</div>
          </div>
        </div>
        <div className="ml-auto relative">
          <div className="bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase">
            Cost-Efficiency Roadmap
          </div>
        </div>
      </div>

      {/* Main Content Area - Locked Height 560px */}
      <div className="absolute top-[90px] left-0 right-0 h-[560px] flex px-16 gap-8 items-center z-10 py-10">
        
        {/* LEFT CARD - Problem Analysis */}
        <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-3xl p-8 h-full flex flex-col shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <i className="fas fa-exclamation-triangle text-8xl"></i>
          </div>

          <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-500 border border-red-500/20">
              <i className="fas fa-exclamation-triangle text-xl"></i>
            </div>
            <div className="text-left">
              <div className="text-lg font-black uppercase tracking-tight leading-none mb-1">Latar Belakang Masalah</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Analisis Beban Operasional</div>
            </div>
          </div>

          <div className="bg-red-500/10 border-l-4 border-red-500 rounded-2xl p-6 mb-8">
            <p className="text-sm text-gray-200 leading-relaxed text-left">
              <span className="text-red-500 font-black uppercase tracking-wider">Meta menerapkan biaya per pesan WhatsApp.</span>
              <br className="mb-2" />
              Penggunaan WhatsApp untuk seluruh notifikasi akan meningkatkan beban operasional secara signifikan bagi perusahaan.
            </p>
          </div>

          {/* Comparison Cost Mini-Table */}
          <div className="grid grid-cols-2 gap-4 mt-auto">
            <div className="bg-black/40 border border-white/5 p-4 rounded-2xl group hover:border-red-500/50 transition-all">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 text-left">WA per pesan</div>
              <div className="text-xl font-black text-red-500 tracking-tighter text-left">Rp 300 - 600</div>
            </div>
            <div className="bg-black/40 border border-white/5 p-4 rounded-2xl group hover:border-green-500/50 transition-all">
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 text-left">Email Notification</div>
              <div className="text-xl font-black text-green-500 tracking-tighter text-left italic uppercase text-sm leading-none">FREE (1000/JAM)</div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD - Implementation & Solution */}
        <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-3xl p-8 h-full flex flex-col shadow-2xl relative overflow-hidden">
          
          <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-500 border border-green-500/20">
              <i className="fas fa-cogs text-xl"></i>
            </div>
            <div className="text-left">
              <div className="text-lg font-black uppercase tracking-tight leading-none mb-1">Implementasi & Manfaat</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Strategi Efisiensi V3</div>
            </div>
          </div>

          {/* Strategy Icons */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { icon: "fa-envelope", title: "Email Notif", desc: "Membership & Claim", clickable: true },
                  { icon: "fa-bell", title: "WhatsApp", desc: "OTP & Verifikasi" },
                  { icon: "fa-server", title: "Hosting", desc: "Sinar Mas Selluler" },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    onClick={() => item.clickable && setShowEmailModal(true)}
                    className={`bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center group transition-all duration-300 ${item.clickable ? 'cursor-pointer hover:bg-red-600 shadow-lg hover:shadow-red-900/20' : 'hover:bg-white/10'}`}
                  >
                    <i className={`fas ${item.icon} text-red-500 group-hover:text-white mb-3 text-lg`}></i>
                    <div className="text-[10px] font-black uppercase text-white mb-1 leading-none">
                      {item.title}
                    </div>
                    <div className="text-[8px] font-bold text-gray-500 group-hover:text-white/70 uppercase tracking-tighter leading-none">
                      {item.desc}
                    </div>
                    {item.clickable && (
                      <div className="mt-2 text-[7px] text-red-500 group-hover:text-white font-black animate-pulse uppercase">Click to Preview</div>
                    )}
                  </div>
                ))}
              </div>

          {/* Benefits Checklist */}
          <div className="space-y-3 mt-auto">
            {[
              { text: "Mengurangi biaya WhatsApp secara signifikan", accent: "text-green-500" },
              { text: "Email efisiensi tinggi (Free 1000 email/jam)", accent: "text-green-500" },
              { text: "Infrastruktur stabil di Hosting Sinar Mas Selluler", accent: "text-green-500" },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-4 items-center bg-white/5 p-3 rounded-2xl border-l-4 border-green-500 hover:bg-white/10 transition-all">
                <i className={`fas fa-check-circle ${benefit.accent}`}></i>
                <div className="text-xs font-medium text-gray-300 text-left leading-snug">{benefit.text}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM BAR - KONSISTEN */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-16 z-20">
        {/* Progress Bar - 87.5% (Slide 7 dari 8) */}
        <div className="absolute top-0 left-0 h-[2px] bg-red-600 shadow-[0_0_15px_#E31E24]" style={{ width: '77.7%' }}></div>
        
        <div className="flex gap-10 text-gray-400">
          <div className="flex items-center gap-2">
            <i className="fas fa-calendar-alt text-red-500 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans">April 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-mobile text-red-500 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans">Sinar Mas Selluler</span>
          </div>
        </div>

        <div className="bg-red-600 px-6 py-1.5 rounded-md font-black italic shadow-lg shadow-red-900/20 text-sm uppercase tracking-tighter">V3.0</div>
      </div>

      {/* MODAL ANIMASI PREMIUM */}
          <AnimatePresence>
            {showEmailModal && (
              <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 lg:p-12">
                {/* Backdrop dengan Blur mendalam */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowEmailModal(false)}
                  className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                />

                {/* Konten Modal */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: 20, rotateX: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 20, rotateX: -15 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative bg-[#0f0f0f] border border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Glow Decorative */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/20 blur-[80px] rounded-full pointer-events-none"></div>
                  
                  {/* Header Modal */}
                  <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(227,30,36,0.5)]">
                        <i className="fas fa-envelope-open-text text-white"></i>
                      </div>
                      <div className="text-left leading-none">
                        <h3 className="text-white font-black uppercase tracking-tighter text-lg italic">Email Preview</h3>
                        <p className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">Sinar Mas Selluler Architecture V3.0</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setShowEmailModal(false)}
                      className="group w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-red-600 transition-all duration-300 active:scale-90"
                    >
                      <i className="fas fa-times text-white group-hover:rotate-90 transition-transform"></i>
                    </button>
                  </div>

                  {/* Area Gambar dengan Batasan Ukuran agar Tidak Terlalu Besar */}
                  <div className="p-8 bg-black/40 flex justify-center">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-inner max-h-[80vh] max-w-[300px] overflow-y-auto custom-scrollbar bg-white">
                      <img 
                        src="/emails.jpeg" 
                        alt="Email Template V3" 
                        className="w-full h-auto block object-top"
                      />
                    </div>
                  </div>

                  {/* Footer Modal */}
                  <div className="px-8 py-4 bg-white/[0.02] border-t border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                      <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Email Template</span>
                    </div>
                    <button 
                      onClick={() => setShowEmailModal(false)}
                      className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-black italic rounded-xl text-xs uppercase tracking-tighter transition-all active:scale-95 shadow-lg shadow-red-900/20"
                    >
                      Close Preview
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

    </div>
  );
}