import React from "react";

export default function Slide7() {
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
              { icon: "fa-envelope", title: "Email Notif", desc: "Membership & Claim" },
              { icon: "fa-bell", title: "WhatsApp", desc: "OTP & Verifikasi" },
              { icon: "fa-server", title: "Hosting", desc: "Sinar Mas Selluler" },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center text-center group hover:bg-red-600 transition-all duration-300">
                <i className={`fas ${item.icon} text-red-500 group-hover:text-white mb-3 text-lg`}></i>
                <div className="text-[10px] font-black uppercase text-white mb-1 leading-none">{item.title}</div>
                <div className="text-[8px] font-bold text-gray-500 group-hover:text-white/70 uppercase tracking-tighter leading-none">{item.desc}</div>
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
        <div className="absolute top-0 left-0 h-[2px] bg-red-600 shadow-[0_0_15px_#E31E24]" style={{ width: '87.5%' }}></div>
        
        <div className="flex gap-10 text-gray-400">
          <div className="flex items-center gap-2">
            <i className="fas fa-calendar-alt text-red-500 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans">April 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-user text-red-500 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans uppercase">IT Development Team</span>
          </div>
        </div>

        <div className="bg-red-600 px-6 py-1.5 rounded-md font-black italic shadow-lg shadow-red-900/20 text-sm uppercase tracking-tighter">V3.0</div>
      </div>
    </div>
  );
}