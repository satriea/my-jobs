import React from "react";

export default function Slide5() {
  const priceGuardian = 2997000;
  const pricePaladin = 9600000;
  const diff = pricePaladin - priceGuardian;

  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-950 font-sans selection:bg-red-500/10 text-left">
      
      {/* Background Decorative */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/[0.04] rounded-full blur-[120px]"></div>

      {/* Header - HIGH CONTRAST */}
      <div className="absolute top-0 left-0 right-0 h-[80px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#a5161a] shadow-xl"></div>
        <div className="relative flex items-center gap-5 text-white">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/40 shadow-inner">
             <i className="fas fa-file-invoice-dollar text-2xl"></i>
          </div>
          <div className="text-left leading-none">
            <h1 className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md">INVESTASI INFRASTRUKTUR CLOUD</h1>
            <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-90 mt-1">Financial Analysis • V3.0 Scalability Plan</div>
          </div>
        </div>
        <div className="ml-auto bg-black/40 backdrop-blur-md px-5 py-2 rounded-lg border border-white/20 text-[11px] font-black tracking-widest uppercase text-white shadow-lg">
          Cost Analysis
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[80px] left-0 right-0 h-[570px] flex px-16 gap-10 items-center z-10 py-10">
        
        {/* LEFT: PRICING CARDS */}
        <div className="w-[45%] h-full flex flex-col gap-6 justify-center">
          
          {/* Guardian Card - Muted but Readable */}
          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 relative opacity-70">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Existing Plan</span>
              <span className="text-sm font-black text-slate-900 italic">GUARDIAN</span>
            </div>
            <div className="text-3xl font-black text-slate-950 tracking-tighter">
              Rp {priceGuardian.toLocaleString('id-ID')} 
              <span className="text-xs text-slate-500 font-black tracking-normal italic uppercase ml-2">/ Tahun</span>
            </div>
          </div>

          {/* Paladin Card - BOLD RED FOCUS */}
          <div className="bg-white border-[3px] border-red-600 rounded-[2.5rem] p-8 relative shadow-[0_20px_50px_rgba(227,30,36,0.15)] scale-105 z-20">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-[0.2em]">Growth Priority</div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <i className="fas fa-crown text-xl"></i>
                </div>
                <span className="text-2xl font-black text-red-600 italic tracking-tighter uppercase">PALADIN</span>
              </div>
              <div className="text-right">
                <div className="text-[11px] font-black text-slate-500 uppercase leading-none mb-1">New Cost</div>
                <div className="text-4xl font-black text-slate-950 tracking-tighter">
                    Rp {pricePaladin.toLocaleString('id-ID')} 
                    <span className="text-xs text-slate-500 font-black uppercase italic ml-1">/ Thn</span>
                </div>
              </div>
            </div>
            <div className="bg-red-600 p-4 rounded-2xl shadow-inner">
               <div className="flex justify-between items-center text-white">
                  <div className="text-[12px] font-black uppercase tracking-widest">Selisih BIaya:</div>
                  <div className="text-2xl font-black italic tracking-tighter">+ Rp {diff.toLocaleString('id-ID')}</div>
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT: STRATEGIC JUSTIFICATION */}
        <div className="flex-1 h-full flex flex-col justify-center gap-6">
          <div className="text-left">
            <h2 className="text-5xl font-black italic tracking-tighter text-slate-950 uppercase leading-none mb-5">
              MENGAPA <span className="text-red-600">WORTH IT?</span>
            </h2>
            <p className="text-slate-700 font-black text-lg leading-relaxed border-l-[6px] border-red-600 pl-6 text-left uppercase tracking-tight">
              Peningkatan biaya ini adalah fondasi utama untuk mendukung <span className="text-red-600 underline decoration-[3px] underline-offset-4">Produksi E-commerce Nasional</span> Sinar Mas Selluler.
            </p>
          </div>

          <div className="space-y-4">
            <ValueBenefit 
              icon="fa-shopping-bag" 
              title="E-commerce Production Ready" 
              desc="Traffic transaksi membutuhkan kapasitas process limit tinggi agar sistem tidak CRASH saat lonjakan order." 
            />
            <ValueBenefit 
              icon="fa-shield-check" 
              title="Enterprise Stability" 
              desc="Menjamin uptime 24/7 untuk 7+ aplikasi vital tanpa gangguan antrian proses pada server." 
            />
            <ValueBenefit 
              icon="fa-chart-line" 
              title="Future Scalability" 
              desc="Unlimited Addon Domain memungkinkan ekspansi aplikasi baru di masa depan tanpa biaya hosting tambahan." 
            />
          </div>
        </div>

      </div>

      {/* Bottom Bar - KONSISTEN & BOLD */}
      <div className="absolute bottom-0 left-0 right-0 h-[75px] bg-slate-100 border-t-2 border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-2px] left-0 h-[4px] bg-red-600 shadow-[0_0_15px_rgba(227,30,36,0.4)]" style={{ width: '55.5%' }}></div>
        <div className="flex gap-10 text-slate-950">
           <span className="text-[12px] font-black tracking-widest uppercase">Financial Roadmap</span>
           <span className="text-[12px] font-black tracking-widest uppercase italic text-red-600 leading-none">High Performance Investment</span>
        </div>
        <div className="bg-slate-950 px-8 py-2.5 rounded-lg font-black italic shadow-lg text-white text-sm tracking-tighter leading-none uppercase">V3.0</div>
      </div>
    </div>
  );
}

function ValueBenefit({ icon, title, desc }) {
  return (
    <div className="flex gap-5 items-start p-5 rounded-[2rem] bg-white border-2 border-slate-100 shadow-sm hover:border-red-600 transition-all text-left group">
      <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all shadow-lg">
        <i className={`fas ${icon} text-xl`}></i>
      </div>
      <div className="text-left">
        <div className="text-base font-black uppercase text-slate-950 tracking-tight mb-1">{title}</div>
        <div className="text-[12px] text-slate-700 font-black leading-snug uppercase tracking-tight">{desc}</div>
      </div>
    </div>
  );
}