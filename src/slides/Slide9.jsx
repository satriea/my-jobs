import React from "react";

export default function SlideFinalBudget() {
  const hostingYearly = 9600000;
  const hostingMonthly = 800000;
  const metaMonthly = 1500000;
  const metaYearly = metaMonthly * 12;
  const grandTotalInvestment = hostingYearly + metaYearly;

  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-950 font-sans selection:bg-red-500/10">
      
      {/* Background Decorative */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-600/[0.05] rounded-full blur-[120px]"></div>

      {/* Header - HIGH CONTRAST */}
      <div className="absolute top-0 left-0 right-0 h-[80px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#a5161a] shadow-xl"></div>
        <div className="relative flex items-center gap-4 text-left">
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md border border-white/40 text-white shadow-inner">
             <i className="fas fa-file-invoice-dollar text-2xl"></i>
          </div>
          <div className="text-left leading-none text-white">
            <h1 className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md">RINGKASAN ANGGARAN V3.0</h1>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-90 font-black mt-1">Final Infrastructure & Operational Expenditure</div>
          </div>
        </div>
        <div className="ml-auto bg-black/40 backdrop-blur-md px-5 py-2 rounded-lg border border-white/20 text-[11px] font-black tracking-widest uppercase text-white shadow-lg">
          Executive Summary
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[80px] left-0 right-0 h-[570px] flex px-16 gap-8 items-center z-10 py-10">
        
        {/* LEFT: ITEMIZED BUDGET */}
        <div className="w-[60%] h-full flex flex-col justify-center gap-4">
            <div className="text-left mb-2">
                <h2 className="text-4xl font-black italic tracking-tighter text-slate-900 uppercase leading-none">Rincian Investasi</h2>
                <p className="text-slate-600 text-xs font-black uppercase tracking-widest mt-2 italic">Proyeksi Biaya Infrastruktur & Operasional API</p>
            </div>

            <BudgetItem 
                icon="fa-server" 
                title="Upgrade Hosting Paladin" 
                desc="Infrastruktur Cloud Dewaweb (NVME & 8 Cores)" 
                monthly={hostingMonthly}
                yearly={hostingYearly}
                tag="FIXED"
            />
            
            <BudgetItem 
                icon="fa-whatsapp" 
                title="Meta API Operational" 
                desc="Estimasi Biaya Pesan (Utilitas)" 
                monthly={metaMonthly}
                yearly={metaYearly}
                tag="VARIABLE"
                isDeposit
            />

            <div className="mt-4 p-8 bg-slate-950 rounded-[2.5rem] border-l-[12px] border-red-600 shadow-2xl flex justify-between items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <i className="fas fa-wallet text-7xl text-white"></i>
                </div>
                <div className="text-left leading-none relative z-10">
                    <div className="text-xs font-black text-red-500 uppercase tracking-[0.3em] mb-3">Total Initial Budget (CapEx)</div>
                    <div className="text-5xl font-black text-white tracking-tighter italic">
                        Rp {grandTotalInvestment.toLocaleString('id-ID')}
                    </div>
                </div>
                <div className="text-right relative z-10">
                    <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">Status Sistem</div>
                    <div className="text-[11px] font-black text-white bg-red-600 px-4 py-1.5 rounded-full uppercase italic shadow-lg">Ready to Deploy</div>
                </div>
            </div>
        </div>

        {/* RIGHT: STRATEGIC NOTE */}
        <div className="flex-1 h-full flex flex-col justify-center gap-5">
            <div className="bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] p-8 shadow-md text-left">
                <h3 className="text-slate-950 font-black uppercase text-sm mb-8 flex items-center gap-3">
                    <i className="fas fa-chart-line text-red-600 text-lg"></i>
                    Analisis Keuangan
                </h3>
                
                <div className="space-y-8">
                    <NotePoint 
                        title="Efisiensi Biaya Bulanan" 
                        desc="Total biaya operasional bulanan diestimasikan Rp 2.3jt, sangat kompetitif dibandingkan potensi traffic 8.000+ member aktif." 
                    />
                    <NotePoint 
                        title="Skalabilitas Tanpa Batas" 
                        desc="Hosting Paladin mendukung unlimited addon domain, menghilangkan biaya pendaftaran hosting baru di masa depan." 
                    />
                    <NotePoint 
                        title="ROI E-commerce" 
                        desc="Stabilitas sistem backend Node.js menjamin transaksi e-commerce berjalan 24/7 tanpa risiko downtime server." 
                    />
                </div>
            </div>

            <div className="bg-red-600 p-5 rounded-2xl shadow-xl">
                <p className="text-[11px] text-white font-black leading-relaxed text-left uppercase tracking-tight">
                    * Alokasi dana menjamin performa maksimal sistem untuk mendukung target revenue Sinar Mas Selluler 2026.
                </p>
            </div>
        </div>

      </div>

      {/* Bottom Bar - KONSISTEN */}
      <div className="absolute bottom-0 left-0 right-0 h-[75px] bg-slate-100 border-t-2 border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-2px] left-0 h-[4px] bg-red-600 shadow-[0_0_15px_rgba(227,30,36,0.4)]" style={{ width: '100%' }}></div>
        <div className="flex gap-10 text-slate-900">
           <span className="text-[12px] font-black tracking-widest uppercase italic leading-none">Financial Conclusion</span>
           <span className="text-[12px] font-black tracking-widest uppercase text-red-600 italic leading-none">V3.0 Final Proposal</span>
        </div>
        <div className="bg-slate-950 px-8 py-2.5 rounded-lg font-black italic shadow-lg text-white text-sm tracking-tighter leading-none uppercase">APPROVED V3</div>
      </div>
    </div>
  );
}

function BudgetItem({ icon, title, desc, monthly, yearly, tag, isDeposit }) {
  return (
    <div className="bg-white border-2 border-slate-200 p-5 rounded-[2rem] flex justify-between items-center hover:border-red-600 transition-all shadow-sm group">
        <div className="flex items-center gap-5">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${tag === 'VARIABLE' ? 'bg-green-600' : 'bg-slate-900'} group-hover:scale-105 transition-transform`}>
                <i className={`fas ${icon} text-xl`}></i>
            </div>
            <div className="text-left leading-tight">
                <div className="text-base font-black text-slate-950 uppercase tracking-tight">{title}</div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">{desc}</div>
            </div>
        </div>
        <div className="flex gap-8">
            <div className="text-right border-r border-slate-200 pr-8">
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Per Bulan</div>
                <div className="text-lg font-black text-slate-900 tracking-tighter italic">Rp {monthly.toLocaleString('id-ID')}</div>
            </div>
            <div className="text-right min-w-[140px]">
                <div className="text-[9px] font-black text-red-600 uppercase tracking-widest mb-1 italic">{isDeposit ? 'Per Tahun' : 'Per Tahun'}</div>
                <div className="text-xl font-black text-red-600 tracking-tighter italic">Rp {yearly.toLocaleString('id-ID')}</div>
            </div>
        </div>
    </div>
  );
}

function NotePoint({ title, desc }) {
    return (
        <div className="border-l-4 border-red-600 pl-5 text-left">
            <div className="text-xs font-black text-slate-950 uppercase tracking-widest mb-1.5">{title}</div>
            <p className="text-[11px] text-slate-600 font-black leading-relaxed uppercase tracking-tight">{desc}</p>
        </div>
    );
}