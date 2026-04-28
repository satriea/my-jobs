import React from "react";

export default function Slide7() {
  const mainStats = [
    { label: "Number of Processes", current: "84", total: "100", percent: 84, icon: "fa-microchip", isBottleneck: true },
    { label: "Entry Processes", current: "8", total: "25", percent: 32, icon: "fa-door-open" },
    { label: "Physical Memory Usage", current: "402.23 MB", total: "4 GB", percent: 9.82, icon: "fa-memory" },
    { label: "Disk Usage", current: "3.11 GB", total: "30 GB", percent: 10.38, icon: "fa-hdd" },
  ];

  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-950 font-sans selection:bg-red-500/10 text-left">
      
      {/* Background Decorative */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/[0.04] rounded-full blur-[120px]"></div>

      {/* Header - HIGH CONTRAST */}
      <div className="absolute top-0 left-0 right-0 h-[80px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#a5161a] shadow-xl"></div>
        <div className="relative flex items-center gap-4">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/40 text-white shadow-inner">
             <i className="fas fa-microchip text-2xl"></i>
          </div>
          <div className="text-left leading-none">
            <h1 className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md text-white">IDENTIFIKASI BOTTLENECK SISTEM</h1>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white font-black mt-1 text-left">Analisis Batasan Resource: Guardian vs Paladin</div>
          </div>
        </div>
        <div className="ml-auto bg-black/30 backdrop-blur-md px-5 py-2 rounded-lg border border-white/20 text-[11px] font-black tracking-widest uppercase text-white shadow-lg">
          System Critical Analysis
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[80px] left-0 right-0 h-[570px] flex px-16 gap-10 items-center z-10 py-10">
        
        {/* LEFT: VISUAL STATISTICS */}
        <div className="w-[55%] h-full flex flex-col justify-center">
            <div className="mb-8 text-left">
                <h2 className="text-4xl font-black italic tracking-tighter text-slate-950 uppercase leading-none">Resource Monitor</h2>
                <p className="text-slate-600 text-[11px] font-black uppercase tracking-widest mt-2">Data Real-time Penggunaan Server Dewaweb</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {mainStats.map((stat, idx) => (
                    <div key={idx} className={`p-6 rounded-[2.5rem] border-2 transition-all ${stat.isBottleneck ? 'bg-red-50 border-red-600 shadow-[0_15px_40px_rgba(227,30,36,0.1)] scale-105' : 'bg-slate-50 border-slate-200 opacity-60'}`}>
                        <div className="flex justify-between items-start mb-5">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${stat.isBottleneck ? 'bg-red-600 text-white animate-pulse' : 'bg-slate-900 text-white'}`}>
                                <i className={`fas ${stat.icon} text-xl`}></i>
                            </div>
                            <div className="text-right">
                                <div className={`text-[10px] font-black uppercase tracking-widest leading-none mb-2 ${stat.isBottleneck ? 'text-red-700' : 'text-slate-500'}`}>{stat.label}</div>
                                <div className="text-2xl font-black text-slate-950 tracking-tight">{stat.current} <span className="text-slate-500 font-black text-sm">/ {stat.total}</span></div>
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <div className="flex justify-between text-[11px] font-black uppercase">
                                <span className={stat.isBottleneck ? "text-red-600" : "text-slate-700"}>Beban: {stat.percent}%</span>
                                <span className="text-slate-500">Resource Limit</span>
                            </div>
                            <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden shadow-inner">
                                <div 
                                    className={`h-full rounded-full transition-all duration-1000 ${stat.isBottleneck ? 'bg-red-600' : 'bg-slate-900'}`}
                                    style={{ width: `${stat.percent}%` }}
                                ></div>
                            </div>
                        </div>
                        {stat.isBottleneck && (
                            <div className="mt-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-xl shadow-lg">
                                <i className="fas fa-exclamation-triangle text-xs"></i>
                                <span className="text-[10px] font-black uppercase tracking-tighter italic">Status: Kritis (Limitasi Node.js)</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* RIGHT: TECHNICAL JUSTIFICATION - BOLDER VERSION */}
        <div className="flex-1 h-full flex flex-col justify-center">
            <div className="bg-slate-950 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden border border-white/10 text-left">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 blur-3xl rounded-full"></div>
                
                <h3 className="text-red-500 font-black uppercase tracking-[0.2em] text-[11px] mb-2">Technical Insight:</h3>
                <h4 className="text-white font-black text-3xl uppercase tracking-tighter italic leading-none mb-8">Mengapa Harus <span className="text-red-600 underline decoration-[3px] underline-offset-4">Upgrade?</span></h4>
                
                <div className="space-y-8 relative z-10">
                    <div className="border-l-[4px] border-red-600 pl-5">
                        <p className="text-white text-xs font-black uppercase tracking-widest mb-2 text-left">The Process Limit</p>
                        <p className="text-slate-200 text-[12px] font-black leading-relaxed text-left uppercase tracking-tight italic">
                            Backend <span className="text-white font-black underline decoration-red-600">Node.js</span> membutuhkan slot proses untuk integrasi API & Webhook. Saat ini di <span className="text-red-500 font-black px-1 bg-white rounded">84%</span>. Jika mencapai 100%, sistem akan <span className="text-white underline decoration-red-600 decoration-2">FREEZE / CRASH</span>.
                        </p>
                    </div>

                    <div className="border-l-[4px] border-slate-700 pl-5">
                        <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2 text-left text-nowrap">RAM & Disk Are Not The Problem</p>
                        <p className="text-slate-300 text-[12px] font-black leading-relaxed text-left uppercase tracking-tight">
                            Memori dan Disk masih lega karena efisiensi data, namun hosting <span className="text-white">Guardian</span> membatasi jumlah proses komputasi yang berjalan bersamaan.
                        </p>
                    </div>

                    <div className="bg-white/10 p-5 rounded-3xl border-2 border-white/10 shadow-inner">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                                <i className="fas fa-check-double"></i>
                            </div>
                            <div className="text-left">
                                <p className="text-white text-[11px] font-black uppercase tracking-[0.1em] leading-none mb-1.5 text-left">Solusi Upgrade Paladin:</p>
                                <p className="text-green-500 text-[14px] font-black italic tracking-tighter uppercase text-left leading-none underline">
                                  MENINGKATKAN LIMIT PROSES HINGGA 300%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* Bottom Bar - HIGH CONTRAST */}
      <div className="absolute bottom-0 left-0 right-0 h-[75px] bg-slate-100 border-t-2 border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-2px] left-0 h-[4px] bg-red-600 shadow-[0_0_15px_rgba(227,30,36,0.4)]" style={{ width: '77.7%' }}></div>
        <div className="flex gap-12 text-slate-950">
           <span className="text-[12px] font-black tracking-widest uppercase">System Stability Analysis</span>
           <span className="text-[12px] font-black tracking-widest uppercase italic text-red-600 leading-none underline underline-offset-4">Security First</span>
        </div>
        <div className="bg-slate-950 px-8 py-2.5 rounded-lg font-black italic shadow-lg text-white text-sm tracking-tighter uppercase leading-none">V3.0</div>
      </div>
    </div>
  );
}