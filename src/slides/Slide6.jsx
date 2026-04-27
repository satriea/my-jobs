import React from "react";

export default function Slide7() {
  const mainStats = [
    { label: "Number of Processes", current: "84", total: "100", percent: 84, icon: "fa-microchip", isBottleneck: true },
    { label: "Entry Processes", current: "8", total: "25", percent: 32, icon: "fa-door-open" },
    { label: "Physical Memory Usage", current: "402.23 MB", total: "4 GB", percent: 9.82, icon: "fa-memory" },
    { label: "Disk Usage", current: "3.11 GB", total: "30 GB", percent: 10.38, icon: "fa-hdd" },
  ];

  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-900 font-sans selection:bg-red-500/10 text-left">
      
      {/* Background Decorative */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/[0.03] rounded-full blur-[120px]"></div>

      {/* Header - KONSISTEN LIGHT MODE */}
      <div className="absolute top-0 left-0 right-0 h-[80px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] shadow-md"></div>
        <div className="relative flex items-center gap-4">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30 text-white shadow-inner">
             <i className="fas fa-microchip text-xl"></i>
          </div>
          <div className="text-left leading-none">
            <h1 className="text-xl font-black tracking-tighter italic uppercase drop-shadow-md text-white">IDENTIFIKASI BOTTLENECK SISTEM</h1>
            <div className="text-[9px] uppercase tracking-[0.2em] text-white/80 font-bold mt-1 text-left">Analisis Batasan Resource: Guardian vs Paladin</div>
          </div>
        </div>
        <div className="ml-auto bg-black/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white">
          System Critical Analysis
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[80px] left-0 right-0 h-[570px] flex px-16 gap-10 items-center z-10 py-10">
        
        {/* LEFT: VISUAL STATISTICS */}
        <div className="w-[55%] h-full flex flex-col justify-center">
            <div className="mb-8 text-left">
                <h2 className="text-3xl font-black italic tracking-tighter text-slate-900 uppercase leading-none">Resource Monitor</h2>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-2">Data Real-time Penggunaan Server Dewaweb</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {mainStats.map((stat, idx) => (
                    <div key={idx} className={`p-5 rounded-[2rem] border transition-all ${stat.isBottleneck ? 'bg-red-50 border-red-200 shadow-lg scale-105' : 'bg-slate-50 border-slate-100 opacity-60'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-inner ${stat.isBottleneck ? 'bg-red-600 text-white animate-pulse' : 'bg-white text-slate-400 border border-slate-100'}`}>
                                <i className={`fas ${stat.icon} text-lg`}></i>
                            </div>
                            <div className="text-right">
                                <div className={`text-[9px] font-black uppercase tracking-widest leading-none mb-1 ${stat.isBottleneck ? 'text-red-600' : 'text-slate-400'}`}>{stat.label}</div>
                                <div className="text-lg font-black text-slate-800 tracking-tight">{stat.current} <span className="text-slate-400 font-bold text-xs">/ {stat.total}</span></div>
                            </div>
                        </div>
                        
                        <div className="space-y-1.5">
                            <div className="flex justify-between text-[9px] font-black uppercase">
                                <span className={stat.isBottleneck ? "text-red-600" : "text-slate-500"}>Beban: {stat.percent}%</span>
                                <span className="text-slate-400">Limit</span>
                            </div>
                            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full rounded-full transition-all duration-1000 ${stat.isBottleneck ? 'bg-red-600' : 'bg-slate-400'}`}
                                    style={{ width: `${stat.percent}%` }}
                                ></div>
                            </div>
                        </div>
                        {stat.isBottleneck && (
                            <div className="mt-3 flex items-center gap-2">
                                <i className="fas fa-exclamation-triangle text-red-600 text-[10px]"></i>
                                <span className="text-[8px] font-black text-red-600 uppercase tracking-tighter">Kritis: Mendekati Limitasi Node.js</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* RIGHT: TECHNICAL JUSTIFICATION */}
        <div className="flex-1 h-full flex flex-col justify-center">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden border border-white/10 text-left">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 blur-3xl rounded-full"></div>
                
                <h3 className="text-red-500 font-black uppercase tracking-[0.2em] text-xs mb-2">Technical Insight:</h3>
                <h4 className="text-white font-black text-2xl uppercase tracking-tighter italic leading-none mb-6">Mengapa Harus <span className="text-red-500">Upgrade?</span></h4>
                
                <div className="space-y-6 relative z-10">
                    <div className="border-l-2 border-red-600 pl-4">
                        <p className="text-white text-xs font-black uppercase tracking-widest mb-1 text-left">The Process Limit</p>
                        <p className="text-slate-200 text-[11px] leading-relaxed text-left bold-italic">
                            Backend <span className="text-white font-bold">Node.js</span> membutuhkan slot proses untuk setiap integrasi Webhook & API WhatsApp. Saat ini kita sudah di <span className="text-red-500 font-black">84%</span>. Jika mencapai 100%, sistem akan <span className="text-white underline decoration-red-600">CRASH/FREEZE</span> meskipun RAM & Disk masih sisa banyak.
                        </p>
                    </div>

                    <div className="border-l-2 border-slate-700 pl-4">
                        <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1 text-left text-nowrap">Memory & Disk Are Not The Problem</p>
                        <p className="text-slate-200 text-[11px] leading-relaxed text-left bold-italic">
                            RAM dan Disk saat ini memang masih lega karena data kita sangat efisien, namun hosting Dewaweb paket Guardian membatasi jumlah proses komputasi yang bisa berjalan bersamaan.
                        </p>
                    </div>

                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500">
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="text-left">
                                <p className="text-white text-[10px] font-black uppercase tracking-widest leading-none mb-1 text-left">Solusi Paladin Upgrade:</p>
                                <p className="text-green-500 text-[12px] font-black italic tracking-tighter uppercase text-left">MENINGKATKAN LIMIT PROSES HINGGA 300%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* Bottom Bar - KONSISTEN */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-slate-50/80 backdrop-blur-md border-t border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-1px] left-0 h-[3px] bg-red-600 shadow-[0_0_10px_rgba(227,30,36,0.3)]" style={{ width: '77.7%' }}></div>
        <div className="flex gap-10 text-slate-500">
           <span className="text-[11px] font-black tracking-widest uppercase">Bottleneck Identification</span>
           <span className="text-[11px] font-black tracking-widest uppercase italic text-red-600 leading-none">Security & Stability First</span>
        </div>
        <div className="bg-slate-900 px-7 py-2 rounded-lg font-black italic shadow-md text-white text-sm tracking-tighter uppercase leading-none">V3.0</div>
      </div>
    </div>
  );
}