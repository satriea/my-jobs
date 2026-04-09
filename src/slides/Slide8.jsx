import React from "react";

export default function Slide8() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-[#0f0f0f] text-white font-sans selection:bg-red-500/30">
      
      {/* Background Ultra Glow - Memberikan kesan masa depan/berhasil */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[130px]"></div>

      {/* Header - KONSISTEN */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] opacity-95 shadow-xl"></div>
        <div className="relative flex items-center gap-5 text-left">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30 text-white">
             <i className="fas fa-flag-checkered text-2xl"></i>
          </div>
          <div>
            <div className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md leading-none mb-1 text-left">KESIMPULAN & PENUTUP</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-semibold text-left">Sistem Membership V3 • Next-Gen Infrastructure</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[90px] left-0 right-0 h-[560px] flex flex-col items-center justify-center z-10 px-16 text-center">
        
        {/* Decorative Badge */}
        <div className="mb-6 inline-flex items-center gap-3 bg-red-600/10 border border-red-500/30 px-6 py-2 rounded-full backdrop-blur-md">
           <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
           <span className="text-xs font-black tracking-[0.3em] text-red-500 uppercase italic">Ready for Deployment</span>
        </div>

        {/* Big Thank You Title */}
        <h1 className="text-[100px] font-black leading-none tracking-tighter italic mb-4 drop-shadow-[0_10px_30px_rgba(227,30,36,0.3)] uppercase">
          TERIMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">KASIH</span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12 uppercase tracking-[0.1em] font-medium">
          Membangun Ekosistem Membership yang <span className="text-white font-bold">Aman</span>, <span className="text-white font-bold">Efisien</span>, dan <span className="text-white font-bold">Scalable</span>.
        </p>

        {/* Closing Pillars */}
        <div className="grid grid-cols-3 gap-8 w-full max-w-4xl">
          {[
            { icon: "fa-shield-alt", title: "Security First", desc: "Proteksi BCA Integrated" },
            { icon: "fa-chart-pie", title: "Cost Optimized", desc: "Meta API & Email Sync" },
            { icon: "fa-sync", title: "Future Ready", desc: "Automated Monitoring" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/[0.03] border border-white/10 p-6 rounded-[32px] hover:bg-white/[0.08] hover:border-red-500/50 transition-all group">
              <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-500 mb-4 mx-auto group-hover:bg-red-600 group-hover:text-white transition-all shadow-lg">
                <i className={`fas ${item.icon} text-xl`}></i>
              </div>
              <div className="text-sm font-black text-white uppercase mb-1 tracking-tight">{item.title}</div>
              <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar - FULL PROGRESS */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-16 z-20">
        {/* Progress Bar - 100% */}
        <div className="absolute top-0 left-0 h-[2px] bg-red-600 shadow-[0_0_20px_#E31E24]" style={{ width: '100%' }}></div>
        
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

        <div className="flex items-center gap-6">
           <div className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">End of Presentation</div>
           <div className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-2 rounded-md font-black italic shadow-lg shadow-red-900/20 text-sm uppercase">V3.0 FINAL</div>
        </div>
      </div>
    </div>
  );
}