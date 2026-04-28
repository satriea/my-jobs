import React from "react";

export default function Slide1() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-950 font-sans selection:bg-red-500/10">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/[0.04] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-slate-200 rounded-full blur-[100px]"></div>

      {/* Header - HIGH CONTRAST */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-20 flex items-center px-12 text-left">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#a5161a] shadow-xl"></div>
        <div className="relative flex items-center gap-5 text-white">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border-2 border-white/40 shadow-inner">
             <i className="fas fa-file-invoice-dollar text-2xl"></i>
          </div>
          <div className="text-left leading-none">
            <div className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md">Analisis Anggaran</div>
            <div className="text-[11px] uppercase tracking-[0.2em] font-black text-white/90 mt-1">Financial & Infrastructure</div>
          </div>
        </div>
        <div className="ml-auto bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-lg border-2 border-white/20 text-[11px] font-black tracking-widest uppercase text-white shadow-lg">
          Perbandingan Biaya <span className="text-red-300 underline decoration-red-400 decoration-2">Watzap.id</span> vs <span className="text-green-400">Meta API</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="absolute top-[90px] left-0 right-0 h-[560px] flex px-16 gap-16 items-center z-10">

        {/* Left Panel - ULTRA BOLD TEXT */}
        <div className="flex-[1.2] flex flex-col justify-center h-full py-4 text-left">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[3px] w-12 bg-red-600"></div>
                <span className="text-red-700 font-black tracking-[0.3em] text-[11px] uppercase">Financial Roadmap 2026</span>
              </div>
              <h1 className="text-[40px] font-black leading-[1.05] tracking-tighter text-slate-950 uppercase italic">
                Komparasi Biaya <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                  Watzap.id vs Meta
                </span>
                <br />
                <span className="text-slate-900">& Maintenance Domain</span>
              </h1>
              <p className="mt-6 text-slate-800 text-lg max-w-[540px] leading-relaxed border-l-[6px] border-red-600 pl-6 italic font-black uppercase tracking-tight">
                Evaluasi efisiensi biaya penggunaan API WhatsApp pihak ketiga dibandingkan Official Meta Cloud API serta biaya infrastruktur tahunan.
              </p>
            </div>

            {/* Features Grid - BOLDER STYLE */}
            <div className="grid grid-cols-2 gap-5 max-w-[580px]">
              <Feature icon="fa-calculator" title="Efisiensi Biaya" desc="Perbandingan OpEx" />
              <Feature icon="fa-globe" title="Biaya Domain" desc="Annual Maintenance" />
              <Feature icon="fa-comments" title="Official Meta" desc="Direct API Usage" />
              <Feature icon="fa-chart-area" title="Scalability" desc="ROI & Financial Impact" />
            </div>
          </div>
        </div>

        {/* Right Panel - Visual Area */}
        <div className="flex-1 flex items-center justify-center relative h-full">
          <div className="absolute w-[300px] h-[300px] bg-red-600/10 rounded-full blur-[80px]"></div>
          <div className="relative w-[400px] h-[400px] flex items-center justify-center scale-95">
            <div className="absolute w-[400px] h-[400px] border-[3px] border-dashed border-slate-300 rounded-full animate-[spin_25s_linear_infinite]"></div>
            <div className="absolute w-[340px] h-[340px] border-[2px] border-red-600/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            
            <div className="relative group">
               <div className="absolute inset-0 bg-red-600/30 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
               <div className="relative w-[200px] h-[200px] bg-gradient-to-br from-[#E31E24] via-[#c41a1f] to-[#8b1216] rounded-[50px] rotate-[15deg] flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(227,30,36,0.3)] border-2 border-white/40 transform hover:rotate-0 transition-all duration-700 cursor-pointer">
                  <div className="-rotate-[15deg] group-hover:rotate-0 transition-all duration-700 flex flex-col items-center">
                    <i className="fas fa-hand-holding-usd text-7xl mb-4 text-white drop-shadow-lg"></i>
                    <span className="text-[12px] font-black tracking-[0.3em] text-white">FINANCIAL</span>
                    <div className="mt-4 h-[5px] w-12 bg-white/40 rounded-full"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - BOLDER & DARKER */}
      <div className="absolute bottom-0 left-0 right-0 h-[75px] bg-slate-100 border-t-2 border-slate-200 flex items-center justify-between px-16 z-20">
        <div className="absolute top-[-2px] left-0 h-[4px] bg-red-600 shadow-[0_0_15px_rgba(227,30,36,0.4)]" style={{ width: '11.1%' }}></div>
        <div className="flex gap-12">
          <div className="flex gap-4 items-center">
            <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center shadow-md"><i className="fas fa-calendar-alt text-red-500 text-sm"></i></div>
            <span className="text-[12px] font-black tracking-widest text-slate-900 uppercase">APRIL 2026</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center shadow-md"><i className="fas fa-user-tie text-red-500 text-sm"></i></div>
            <span className="text-[12px] font-black tracking-widest text-slate-900 uppercase">IT Development</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
           <div className="text-[11px] font-black text-slate-500 tracking-[0.2em] uppercase">Cost Comparison Report</div>
           <div className="bg-slate-950 px-8 py-2.5 rounded-xl font-black italic shadow-2xl text-sm text-white tracking-tighter border border-white/10">V3.0</div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-4 bg-white border-2 border-slate-200 p-5 rounded-2xl hover:border-red-600 hover:shadow-xl transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center shadow-lg group-hover:bg-red-600 transition-colors">
        <i className={`fas ${icon} text-red-500 group-hover:text-white text-xl`}></i>
      </div>
      <div className="text-left">
        <div className="text-[14px] font-black text-slate-950 tracking-tight leading-none mb-1.5 uppercase">{title}</div>
        <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{desc}</div>
      </div>
    </div>
  );
}