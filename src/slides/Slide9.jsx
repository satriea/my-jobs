import React from "react";

export default function SlideFinalBudget() {
  const hostingPaladin = 9600000;
  const waDepositBase = 5000000; // Asumsi deposit awal untuk saldo Meta
  const grandTotal = hostingPaladin + waDepositBase;

  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-900 font-sans selection:bg-red-500/10">
      
      {/* Background Decorative */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-600/[0.03] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-slate-100 rounded-full blur-[100px]"></div>

      {/* Header - KONSISTEN */}
      <div className="absolute top-0 left-0 right-0 h-[80px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] shadow-md"></div>
        <div className="relative flex items-center gap-4 text-left">
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md border border-white/30 text-white shadow-inner">
             <i className="fas fa-file-signature text-xl"></i>
          </div>
          <div className="text-left leading-none text-white">
            <h1 className="text-xl font-black tracking-tighter italic uppercase drop-shadow-md">RINGKASAN ANGGARAN V3.0</h1>
            <div className="text-[9px] uppercase tracking-[0.2em] opacity-80 font-bold mt-1">Total Project Investment & Operational Cost</div>
          </div>
        </div>
        <div className="ml-auto bg-black/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-[10px] font-black tracking-widest uppercase text-white">
          Final Executive Summary
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[80px] left-0 right-0 h-[570px] flex px-16 gap-10 items-center z-10 py-10">
        
        {/* LEFT: ITEMIZED BUDGET */}
        <div className="w-[55%] h-full flex flex-col justify-center gap-4">
            <div className="text-left mb-2">
                <h2 className="text-3xl font-black italic tracking-tighter text-slate-900 uppercase">Rincian Anggaran</h2>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Alokasi Dana Pengembangan & Infrastruktur</p>
            </div>

            <BudgetItem 
                icon="fa-server" 
                title="Upgrade Hosting Paladin" 
                desc="Infrastruktur Cloud Dewaweb (1 Tahun)" 
                price={hostingPaladin}
                tag="FIXED COST"
            />
            
            <BudgetItem 
                icon="fa-whatsapp" 
                title="Saldo Deposit Meta API" 
                desc="Estimasi awal saldo pesan (Utility & Marketing)" 
                price={waDepositBase}
                tag="VARIABLE COST"
                isVariable
            />

            <div className="mt-4 p-6 bg-slate-900 rounded-[2rem] border-l-8 border-red-600 shadow-2xl flex justify-between items-center">
                <div className="text-left leading-none">
                    <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-2">Grand Total Investment</div>
                    <div className="text-4xl font-black text-white tracking-tighter italic">
                        Rp {grandTotal.toLocaleString('id-ID')}
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1 text-right">Estimasi Kebutuhan</div>
                    <div className="text-[10px] font-black text-white bg-white/10 px-3 py-1 rounded-full uppercase italic">V3.0 Production Ready</div>
                </div>
            </div>
        </div>

        {/* RIGHT: STRATEGIC NOTE */}
        <div className="flex-1 h-full flex flex-col justify-center gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 shadow-sm text-left">
                <h3 className="text-slate-900 font-black uppercase text-sm mb-6 flex items-center gap-3">
                    <i className="fas fa-lightbulb text-red-600"></i>
                    Catatan Strategis
                </h3>
                
                <div className="space-y-6">
                    <NotePoint 
                        title="Efisiensi Hybrid" 
                        desc="Biaya variabel WhatsApp dikontrol ketat melalui filter 'Only Buyer' dan penggunaan notifikasi Email gratis." 
                    />
                    <NotePoint 
                        title="Infrastruktur Terpusat" 
                        desc="Satu biaya hosting Paladin menampung seluruh ekosistem (7+ aplikasi) tanpa biaya tambahan per domain." 
                    />
                    <NotePoint 
                        title="Produksi E-commerce" 
                        desc="Anggaran ini memastikan peluncuran E-commerce Sinar Mas Selluler berjalan stabil tanpa kendala teknis." 
                    />
                </div>
            </div>

            <div className="bg-red-50 border-2 border-dashed border-red-200 p-5 rounded-2xl">
                <p className="text-[11px] text-red-800 font-bold leading-relaxed text-left">
                    * Biaya WhatsApp bersifat <span className="font-black italic underline text-red-600">Pay-as-you-go</span>. Saldo hanya akan berkurang saat sistem mengirim pesan resmi ke pelanggan.
                </p>
            </div>
        </div>

      </div>

      {/* Bottom Bar - KONSISTEN */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-slate-50/80 backdrop-blur-md border-t border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-1px] left-0 h-[3px] bg-red-600 shadow-[0_0_10px_rgba(227,30,36,0.3)]" style={{ width: '100%' }}></div>
        <div className="flex gap-10 text-slate-500">
           <span className="text-[11px] font-black tracking-widest uppercase">Project Conclusion</span>
           <span className="text-[11px] font-black tracking-widest uppercase italic text-red-600 leading-none">V3.0 Infrastructure Upgrade</span>
        </div>
        <div className="bg-slate-900 px-7 py-2 rounded-lg font-black italic shadow-md text-white text-sm tracking-tighter leading-none uppercase">APPROVED V3</div>
      </div>
    </div>
  );
}

function BudgetItem({ icon, title, desc, price, tag, isVariable }) {
  return (
    <div className="bg-white border border-slate-200 p-5 rounded-[2rem] flex justify-between items-center hover:border-red-500 transition-all shadow-sm">
        <div className="flex items-center gap-5">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${isVariable ? 'bg-green-600' : 'bg-slate-800'}`}>
                <i className={`fas ${icon} text-lg`}></i>
            </div>
            <div className="text-left leading-tight">
                <div className="text-sm font-black text-slate-800 uppercase tracking-tight">{title}</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{desc}</div>
            </div>
        </div>
        <div className="text-right">
            <div className="text-[8px] font-black text-slate-400 uppercase tracking-tighter mb-1">{tag}</div>
            <div className="text-xl font-black text-slate-900 italic tracking-tighter">Rp {price.toLocaleString('id-ID')}</div>
        </div>
    </div>
  );
}

function NotePoint({ title, desc }) {
    return (
        <div className="border-l-2 border-red-600 pl-4 text-left">
            <div className="text-[11px] font-black text-slate-800 uppercase tracking-widest mb-1">{title}</div>
            <p className="text-[10px] text-slate-500 font-medium leading-relaxed uppercase">{desc}</p>
        </div>
    );
}