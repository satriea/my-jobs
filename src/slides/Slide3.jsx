import React from "react";

export default function Slide6CostComparison() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-900 font-sans selection:bg-red-500/10">
      
      {/* Background Decorative */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/[0.03] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px]"></div>

      {/* Header - KONSISTEN LIGHT MODE */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] shadow-md"></div>
        <div className="relative flex items-center gap-5 text-left">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30 text-white">
             <i className="fas fa-calculator text-2xl"></i>
          </div>
          <div>
            <div className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md leading-none mb-1 text-white">OPTIMALISASI BIAYA META API</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold">Analisis Penghematan & Efisiensi Pengiriman Pesan</div>
          </div>
        </div>
        <div className="ml-auto bg-black/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-[10px] font-bold tracking-widest uppercase text-white">
          Efficiency Roadmap V3.0
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[90px] left-0 right-0 h-[560px] flex px-16 gap-10 items-center z-10 text-left py-10">

      {/* LEFT PANEL: RINCIAN BIAYA (8.000 MEMBER) */}
      <div className="w-[45%] flex flex-col h-full justify-center">
        <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">
            Analisis Unit Biaya
          </div>
          
          <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-5">
            <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <i className="fab fa-whatsapp text-2xl"></i>
            </div>
            <div className="text-left">
              <h3 className="font-black text-xl text-slate-900 leading-none mb-1 text-left">Rincian Biaya V3</h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-left">Base Target: 8.000 Member / Bulan</p>
            </div>
          </div>

          <div className="space-y-4">
            <DetailedCostItem 
              title="Template Marketing" 
              unitPrice="580" 
              quantity="8.000" 
              total="4.640.000" 
              desc="Broadcast, Promo & Re-engagement" 
            />
            <DetailedCostItem 
              title="Template Utilitas" 
              unitPrice="350" 
              quantity="8.000" 
              total="2.800.000" 
              desc="Konfirmasi Transaksi & Notifikasi" 
            />
            
            {/* BAGIAN YANG DIUBAH: TOTAL MENJADI SELISIH */}
            <div className="pt-4 border-t-2 border-dashed border-slate-200 flex justify-between items-end">
              <div className="text-left leading-none">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 text-left">
                  Selisih Biaya Kategori
                </div>
                <div className="text-3xl font-black text-red-600 tracking-tighter italic">
                  Rp 1.840.000
                </div>
              </div>
              <div className="text-right flex flex-col items-end">
                <div className="text-[9px] font-black text-slate-500 uppercase tracking-tighter mb-1">
                  Gap Harga Per 8rb Pesan
                </div>
                <div className="text-[10px] font-black text-red-600 bg-red-50 px-2 py-1 rounded uppercase tracking-tighter italic">
                  Marketing {'>'} Utilitas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* RIGHT PANEL: STRATEGI PENGHEMATAN (FILTER SOLUTION) */}
        <div className="flex-1 h-full flex flex-col justify-center space-y-6">
          <div className="text-left space-y-2">
            <h2 className="text-3xl font-black italic tracking-tighter text-slate-900 uppercase">Solusi Efisiensi Biaya</h2>
            <p className="text-slate-500 font-medium text-sm">Bagaimana cara menekan biaya agar tidak membengkak setiap bulan?</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <SolutionCard 
              icon="fa-filter" 
              title="Filter Member Aktif (Purchasing)" 
              desc="Sistem hanya mengirim pesan WhatsApp otomatis kepada member yang melakukan pembelian (Invoice Generate). Member yang hanya mendaftar/idle hanya akan menerima Email (Gratis)."
            />
            <SolutionCard 
              icon="fa-layer-group" 
              title="Segmentasi Tiering" 
              desc="Hanya member Tier 'Platinum' atau 'Gold' yang mendapatkan notifikasi WhatsApp. Member Regular diarahkan ke aplikasi/email untuk efisiensi budget."
            />
          </div>
        </div>

      </div>

      {/* Bottom Bar - KONSISTEN LIGHT MODE */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-slate-50/80 backdrop-blur-md border-t border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-1px] left-0 h-[3px] bg-red-600 shadow-[0_0_15px_rgba(227,30,36,0.3)]" style={{ width: '88.8%' }}></div>
        <div className="flex gap-10 text-slate-500">
           <span className="text-[11px] font-black tracking-widest uppercase">April 2026</span>
           <span className="text-[11px] font-black tracking-widest uppercase">IT Development Team</span>
        </div>
        <div className="bg-slate-900 px-7 py-2 rounded-lg font-black italic shadow-md text-white text-sm tracking-tighter uppercase leading-none">V3.0</div>
      </div>
    </div>
  );
}

function DetailedCostItem({ title, unitPrice, quantity, total, desc }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200 flex justify-between items-center group hover:border-red-500 transition-all">
      <div className="text-left leading-none">
        <div className="text-[12px] font-black text-slate-800 uppercase mb-1">{title}</div>
        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">{desc}</div>
      </div>
      <div className="text-right leading-none">
        <div className="text-[10px] text-slate-400 font-bold mb-1">{quantity} x Rp {unitPrice}</div>
        <div className="text-lg font-black text-red-600 tracking-tighter italic">Rp {total}</div>
      </div>
    </div>
  );
}

function SolutionCard({ icon, title, desc, saving }) {
  return (
    <div className="bg-white border border-slate-200 p-5 rounded-2xl flex gap-5 items-start hover:shadow-lg transition-all text-left">
      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white shrink-0 shadow-[0_5px_15px_rgba(34,197,94,0.3)]">
        <i className={`fas ${icon} text-lg`}></i>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <h4 className="font-black text-slate-900 uppercase text-xs tracking-tight">{title}</h4>
          <span className="bg-green-100 text-green-700 text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">{saving}</span>
        </div>
        <p className="text-[11px] text-slate-500 font-medium leading-relaxed uppercase">{desc}</p>
      </div>
    </div>
  );
}