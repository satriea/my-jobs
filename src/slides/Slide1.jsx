export default function Slide1() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-900 font-sans selection:bg-red-500/10">
      
      {/* Background Decorative Elements - Soft Glows for Light Mode */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/[0.03] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-slate-200 rounded-full blur-[100px]"></div>

      {/* Header - Fixed Height: 90px */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-20 flex items-center px-12 text-left">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] shadow-md"></div>
        <div className="relative flex items-center gap-5">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30 text-white">
             <i className="fas fa-file-invoice-dollar text-2xl"></i>
          </div>
          <div>
            <div className="text-2xl font-black tracking-tighter italic uppercase text-white leading-tight">Analisis Anggaran</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold">Financial & Infrastructure</div>
          </div>
        </div>
        <div className="ml-auto relative text-white">
          <div className="bg-black/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide">
            Perbandingan Biaya <span className="text-white underline decoration-red-400">Watzap.id</span> vs <span className="text-green-300 font-black">Meta API</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="absolute top-[90px] left-0 right-0 h-[560px] flex px-16 gap-16 items-center z-10">

        {/* Left Panel */}
        <div className="flex-[1.2] flex flex-col justify-center h-full py-4">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-[2px] w-10 bg-red-600"></div>
                <span className="text-red-600 font-black tracking-[0.3em] text-[10px] uppercase text-left">Financial Roadmap 2026</span>
              </div>
              <h1 className="text-[52px] text-left font-black leading-[1.05] tracking-tight text-slate-900">
                Komparasi Biaya <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                  Watzap.id vs Meta
                </span>
                <br />
                <span className="text-slate-800/90">& Maintenance Domain</span>
              </h1>
              <p className="mt-5 text-slate-500 text-base max-w-[520px] leading-relaxed border-l-3 border-red-600/20 pl-6 text-left italic font-medium">
                Evaluasi efisiensi biaya penggunaan API WhatsApp pihak ketiga dibandingkan Official Meta Cloud API serta biaya tahunan infrastruktur domain.
              </p>
            </div>

            {/* Features Grid - Light Mode Style */}
            <div className="grid grid-cols-2 gap-4 max-w-[550px]">
              <Feature icon="fa-calculator" title="Efisiensi Biaya" desc="Perbandingan OpEx" />
              <Feature icon="fa-globe" title="Biaya Domain" desc="Annual Maintenance" />
              <Feature icon="fa-comments" title="Official Meta" desc="Direct API Usage" />
              <Feature icon="fa-chart-area" title="Scalability" desc="ROI & Financial Impact" />
            </div>
          </div>
        </div>

        {/* Right Panel - Visual Area */}
        <div className="flex-1 flex items-center justify-center relative h-full">
          {/* Softer Glow for Light Mode */}
          <div className="absolute w-[300px] h-[300px] bg-red-600/5 rounded-full blur-[80px]"></div>
          <div className="relative w-[400px] h-[400px] flex items-center justify-center scale-90">
            <div className="absolute w-[400px] h-[400px] border border-dashed border-slate-200 rounded-full animate-[spin_25s_linear_infinite]"></div>
            <div className="absolute w-[340px] h-[340px] border border-red-600/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            
            <div className="relative group">
               <div className="absolute inset-0 bg-red-600/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
               <div className="relative w-[190px] h-[190px] bg-gradient-to-br from-[#E31E24] via-[#c41a1f] to-[#8b1216] rounded-[45px] rotate-[15deg] flex flex-col items-center justify-center shadow-2xl border border-white/30 transform hover:rotate-0 transition-all duration-700 cursor-pointer">
                  <div className="-rotate-[15deg] group-hover:rotate-0 transition-all duration-700 flex flex-col items-center">
                    <i className="fas fa-hand-holding-usd text-6xl mb-3 text-white"></i>
                    <span className="text-[11px] font-black tracking-[0.3em] text-white/95">FINANCIAL</span>
                    <div className="mt-3 h-[4px] w-10 bg-white/30 rounded-full"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Fixed Height: 70px */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-slate-50/80 backdrop-blur-md border-t border-slate-200 flex items-center justify-between px-16 z-20">
        <div className="absolute top-[-1px] left-0 h-[3px] bg-red-600 shadow-[0_0_10px_rgba(227,30,36,0.3)]" style={{ width: '11.1%' }}></div>
        <div className="flex gap-12">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 rounded-lg bg-slate-200/50 flex items-center justify-center shadow-sm"><i className="fas fa-calendar-alt text-red-600 text-xs"></i></div>
            <span className="text-[11px] font-black tracking-widest text-slate-600">APRIL 2026</span>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 rounded-lg bg-slate-200/50 flex items-center justify-center shadow-sm"><i className="fas fa-user-tie text-red-600 text-xs"></i></div>
            <span className="text-[11px] font-black tracking-widest text-slate-600 uppercase">IT Development Team</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
           <div className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">Cost Comparison Report</div>
           <div className="bg-slate-900 px-7 py-2 rounded-lg font-black italic shadow-md text-sm text-white tracking-tighter">V3.0</div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300">
      <div className="w-11 h-11 rounded-xl bg-red-600 flex items-center justify-center shadow-inner">
        <i className={`fas ${icon} text-white text-lg`}></i>
      </div>
      <div className="text-left">
        <div className="text-[13px] font-black text-slate-900 tracking-tight leading-none mb-1.5 uppercase">{title}</div>
        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{desc}</div>
      </div>
    </div>
  );
}