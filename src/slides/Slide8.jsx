import React from "react";

export default function Slide5() {
  const priceGuardian = 2997000;
  const pricePaladin = 9600000;
  const diff = pricePaladin - priceGuardian;

  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-900 font-sans selection:bg-red-500/10 text-left">
      
      {/* Background Decorative */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/[0.03] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px]"></div>

      {/* Header - KONSISTEN LIGHT MODE */}
      <div className="absolute top-0 left-0 right-0 h-[85px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] shadow-md"></div>
        <div className="relative flex items-center gap-5">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30 text-white shadow-inner">
             <i className="fas fa-file-invoice-dollar text-2xl"></i>
          </div>
          <div className="text-left leading-none text-white">
            <h1 className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md">INVESTASI INFRASTRUKTUR CLOUD</h1>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-bold mt-1 text-left">Financial Analysis • V3.0 Scalability Plan</div>
          </div>
        </div>
        <div className="ml-auto bg-black/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-[10px] font-black tracking-widest uppercase text-white">
          Cost Analysis
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[85px] left-0 right-0 h-[565px] flex px-16 gap-10 items-center z-10 py-10">
        
        {/* LEFT: PRICING CARDS */}
        <div className="w-[45%] h-full flex flex-col gap-6 justify-center">
          
          {/* Guardian Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 relative opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Existing Plan</span>
              <span className="text-xs font-black text-slate-800 italic">GUARDIAN</span>
            </div>
            <div className="text-3xl font-black text-slate-900 tracking-tighter">Rp {priceGuardian.toLocaleString('id-ID')} <span className="text-xs text-slate-400 font-bold tracking-normal italic uppercase">/ Tahun</span></div>
          </div>

          {/* Paladin Card */}
          <div className="bg-white border-2 border-red-600 rounded-[2.5rem] p-8 relative shadow-2xl scale-105 z-20">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-[0.2em]">Growth Priority</div>
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <i className="fas fa-crown"></i>
                </div>
                <span className="text-xl font-black text-red-600 italic tracking-tighter uppercase">PALADIN</span>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">New Investment</div>
                <div className="text-3xl font-black text-slate-900 tracking-tighter">Rp {pricePaladin.toLocaleString('id-ID')} <span className="text-xs text-slate-400 font-bold uppercase italic">/ Thn</span></div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-4 mt-4">
               <div className="flex justify-between items-center text-red-600">
                  <div className="text-[11px] font-black uppercase tracking-widest">Selisih Investasi:</div>
                  <div className="text-xl font-black italic tracking-tighter">+ Rp {diff.toLocaleString('id-ID')}</div>
               </div>
            </div>
          </div>

        </div>

        {/* RIGHT: STRATEGIC JUSTIFICATION */}
        <div className="flex-1 h-full flex flex-col justify-center gap-6">
          <div className="text-left">
            <h2 className="text-4xl font-black italic tracking-tighter text-slate-900 uppercase leading-none mb-4">
              MENGAPA <span className="text-red-600">WORTH IT?</span>
            </h2>
            <p className="text-slate-500 font-bold text-base leading-relaxed border-l-4 border-red-600 pl-6 text-left">
              Peningkatan biaya ini bukan sekadar "pengeluaran", melainkan fondasi utama untuk mendukung <span className="text-slate-900 underline decoration-red-600 decoration-2">Produksi E-commerce Nasional</span> Sinar Mas Selluler.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <ValueBenefit 
              icon="fa-shopping-bag" 
              title="E-commerce Production Ready" 
              desc="Traffic transaksi e-commerce membutuhkan process limit & storage tinggi (100GB) agar tidak terjadi 'Crash' saat promo besar." 
            />
            <ValueBenefit 
              icon="fa-shield-check" 
              title="Enterprise Stability" 
              desc="Menjamin uptime 24/7 untuk 7+ aplikasi vital (CRM, Membership, Ecommerce) tanpa gangguan antrian proses server." 
            />
            <ValueBenefit 
              icon="fa-chart-line" 
              title="Future Scalability" 
              desc="Unlimited Addon Domain memungkinkan pengembangan aplikasi monitoring penjualan di masa depan tanpa biaya hosting tambahan." 
            />
          </div>
        </div>

      </div>

      {/* Bottom Bar - KONSISTEN */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-slate-50/80 backdrop-blur-md border-t border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-1px] left-0 h-[3px] bg-red-600 shadow-[0_0_10px_rgba(227,30,36,0.3)]" style={{ width: '55.5%' }}></div>
        <div className="flex gap-10 text-slate-500">
           <span className="text-[11px] font-black tracking-widest uppercase">Financial Roadmap</span>
           <span className="text-[11px] font-black tracking-widest uppercase italic text-red-600 leading-none">High Performance Investment</span>
        </div>
        <div className="bg-slate-900 px-7 py-2 rounded-lg font-black italic shadow-md text-white text-sm tracking-tighter leading-none uppercase">V3.0</div>
      </div>
    </div>
  );
}

function ValueBenefit({ icon, title, desc }) {
  return (
    <div className="flex gap-5 items-start p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-red-600 transition-all text-left group">
      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
        <i className={`fas ${icon} text-lg`}></i>
      </div>
      <div className="text-left">
        <div className="text-sm font-black uppercase text-slate-800 tracking-tight mb-1">{title}</div>
        <div className="text-[11px] text-slate-500 font-medium leading-snug uppercase">{desc}</div>
      </div>
    </div>
  );
}