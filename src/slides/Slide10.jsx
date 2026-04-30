import React from "react";

export default function Slide8() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-900 font-sans selection:bg-red-500/10 text-left">
      
      {/* Background Decorative - Diperhalus untuk Light Mode */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-red-500/[0.03] rounded-full blur-[150px]"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-slate-100 rounded-full blur-[130px]"></div>

      {/* Header - KONSISTEN LIGHT MODE */}
      <div className="absolute top-0 left-0 right-0 h-[80px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] opacity-95 shadow-lg"></div>
        <div className="relative flex items-center gap-5 text-white text-left">
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md border border-white/30 text-white shadow-inner">
             <i className="fas fa-flag-checkered text-xl"></i>
          </div>
          <div className="text-left leading-none">
            <h1 className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md leading-none mb-1 text-left">KESIMPULAN & PENUTUP</h1>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold text-left">Sistem Membership V3 • Next-Gen Infrastructure</div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[80px] left-0 right-0 h-[570px] flex flex-col items-center justify-center z-10 px-16 text-center py-10">
        
        {/* Decorative Badge */}
        <div className="mb-6 inline-flex items-center gap-3 bg-red-50 border border-red-200 px-6 py-2 rounded-full shadow-inner">
           <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping"></span>
           <span className="text-xs font-black tracking-[0.3em] text-red-600 uppercase italic">Ready for Deployment</span>
        </div>

        {/* Big Thank You Title - Gradien KONSISTEN */}
        <h1 className="text-[100px] font-black leading-none tracking-tighter italic mb-4 drop-shadow-[0_10px_30px_rgba(227,30,36,0.15)] uppercase text-slate-900">
          TERIMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">KASIH</span>
        </h1>
        
        <p className="text-xl text-slate-800 max-w-2xl mx-auto leading-relaxed mb-12 uppercase tracking-[0.1em] font-bold">
          Membangun Ekosistem Membership & E-Commerce yang <span className="text-slate-900 font-bold">Aman</span>, <span className="text-slate-900 font-bold">Efisien</span>, dan <span className="text-slate-900 font-bold">Scalable</span>.
        </p>

        {/* Closing Pillars - Tampilan Baru untuk Light Mode */}
        <div className="grid grid-cols-3 gap-8 w-full max-w-4xl text-left">
          {[
            { icon: "fa-shield-alt", title: "Security First", desc: "Proteksi BCA Integrated" },
            { icon: "fa-chart-pie", title: "Cost Optimized", desc: "Meta API & Email Sync" },
            { icon: "fa-sync", title: "Future Ready", desc: "Automated Monitoring" },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-[32px] hover:bg-white hover:border-red-500/50 hover:shadow-xl transition-all group shadow-inner">
              <div className="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mb-4 mx-auto group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
                <i className={`fas ${item.icon} text-xl`}></i>
              </div>
              <div className="text-md font-black text-slate-900 uppercase mb-1 tracking-tight text-center">{item.title}</div>
              <div className="text-[12px] text-slate-800 font-bold uppercase tracking-widest text-center">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar - FULL PROGRESS KONSISTEN LIGHT MODE */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-slate-50/80 backdrop-blur-md border-t border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        {/* Progress Bar - 100% */}
        <div className="absolute top-0 left-0 h-[3px] bg-red-600 shadow-[0_0_15px_rgba(227,30,36,0.3)]" style={{ width: '100%' }}></div>
        
        <div className="flex gap-10 text-slate-500">
          <div className="flex items-center gap-2">
            <i className="fas fa-calendar-alt text-red-600 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans">April 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-building text-red-600 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans">Sinar Mas Selluler</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
           <div className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">End of Presentation V3.0</div>
           <div className="bg-slate-900 px-6 py-2 rounded-md font-black italic shadow-lg text-sm uppercase text-white tracking-tighter">APPROVED FINAL</div>
        </div>
      </div>
    </div>
  );
}