import React from "react";

export default function Slide6CostComparison() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-[#0f0f0f] text-white font-sans selection:bg-red-500/30">
      
      {/* Background Decorative */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-green-600/5 rounded-full blur-[100px]"></div>

      {/* Header - KONSISTEN */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] opacity-95 shadow-xl"></div>
        <div className="relative flex items-center gap-5 text-left">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30">
             <i className="fas fa-file-invoice-dollar text-2xl text-white"></i>
          </div>
          <div>
            <div className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md leading-none mb-1 text-left">ANALISIS BIAYA & SKALABILITAS</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-semibold text-left">Flat Rate Unofficial vs Pay-as-you-go Official</div>
          </div>
        </div>
        <div className="ml-auto bg-black/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-[10px] font-bold tracking-widest uppercase">
          Financial Roadmap
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[90px] left-0 right-0 h-[560px] flex flex-col justify-between py-8 px-16 z-10">
        
        <div className="grid grid-cols-2 gap-10 h-[380px]">
          
          {/* LEFT: PIHAK KE-3 (BIAYA TETAP / MURAH TAPI BERISIKO) */}
          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 flex flex-col relative overflow-hidden group hover:bg-white/[0.04] transition-all">
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600/20 rounded-xl flex items-center justify-center text-red-500 border border-red-500/20">
                  <i className="fas fa-history text-lg"></i>
                </div>
                <div className="text-left">
                  <div className="font-black uppercase tracking-tight text-sm">Pihak Ke-3 (Sistem Lama)</div>
                  <div className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Flat Rate Subscription</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-gray-500 uppercase font-bold">Total / Tahun</div>
                <div className="text-2xl font-black text-red-500 tracking-tighter italic">Rp 1.200.000</div>
              </div>
            </div>

            <div className="space-y-3">
              <CostItem title="Biaya Berlangganan" price="1.200.000" desc="Akses API Unofficial (Watzap.id)" />
              <div className="bg-red-500/10 p-4 rounded-2xl border border-red-500/20 space-y-2">
                <div className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1 text-left">Risiko Tersembunyi (Hidden Risks):</div>
                <RiskPoint text="Nomor rawan Banned/Blokir oleh Meta" />
                <RiskPoint text="Server vendor sering Down/Maintenance" />
                <RiskPoint text="Koneksi bergantung pada HP yang Standby" />
                <RiskPoint text="Data Privacy tidak terjamin" />
              </div>
            </div>

            <div className="mt-auto pt-4 flex items-center gap-2 text-red-400/60 italic text-[10px] font-bold uppercase tracking-widest">
              Biaya Murah = Keamanan & Stabilitas Rendah
            </div>
          </div>

          {/* RIGHT: META API (BIAYA PER PESAN / PROFESIONAL & AMAN) */}
          <div className="bg-green-500/[0.02] border border-green-500/10 rounded-3xl p-6 flex flex-col relative overflow-hidden group hover:bg-green-500/[0.05] transition-all">
            <div className="flex items-center justify-between mb-6 border-b border-green-500/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600/20 rounded-xl flex items-center justify-center text-green-500 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <i className="fas fa-check-double text-lg"></i>
                </div>
                <div className="text-left">
                  <div className="font-black uppercase tracking-tight text-sm text-green-500">Meta API (Official)</div>
                  <div className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Pay-as-you-go Model</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-gray-500 uppercase font-bold">Biaya Langganan</div>
                <div className="text-2xl font-black text-green-500 tracking-tighter italic uppercase">FREE</div>
              </div>
            </div>

            <div className="space-y-3">
              <CostItem title="Subscription Fee" price="0" desc="Tanpa Biaya Tahunan / Bulanan" isMeta />
              <div className="bg-green-500/10 p-4 rounded-2xl border border-green-500/20 space-y-3">
                <div className="text-[10px] font-black text-green-500 uppercase tracking-widest mb-1 text-left">Keuntungan Investasi:</div>
                <div className="flex justify-between items-center">
                   <div className="text-[11px] font-bold text-white text-left italic">Biaya per OTP/Notif: <span className="text-green-500 font-black">Rp 300 - 600</span></div>
                </div>
                <SuccessPoint text="Official Infrastructure (Zero Downtime)" />
                <SuccessPoint text="Nomor Aman & Terdaftar Resmi" />
                <SuccessPoint text="Sangat Fleksibel & Scalable" />
                <SuccessPoint text="Keamanan Data End-to-End" />
              </div>
            </div>

            <div className="mt-auto pt-4 flex items-center gap-2 text-green-500/80 italic text-[10px] font-bold uppercase tracking-widest text-left">
              <i className="fas fa-shield-check"></i>
              Membayar untuk Kualitas, Keamanan & Nama Baik Perusahaan
            </div>
          </div>

        </div>

        {/* BOTTOM SUMMARY: THE STRATEGIC VALUE */}
        <div className="bg-gradient-to-r from-red-600/10 via-white/5 to-green-600/10 border border-white/10 rounded-2xl p-3 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-8">
            <div className="text-left">
               <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Strategic Shift</div>
               <div className="text-lg font-black italic tracking-tighter uppercase">Dari "Biaya Murah" Ke <span className="text-green-500">"Sistem Berkualitas"</span></div>
            </div>
            <div className="h-10 w-[1px] bg-white/10"></div>
            <p className="text-[11px] text-gray-400 font-medium text-left max-w-xl leading-snug">
              Mengalihkan anggaran langganan tahunan vendor yang berisiko menjadi saldo deposit pesan Meta yang <span className="text-white font-bold underline">Resmi, Aman, dan Terpantau Real-time.</span>
            </p>
          </div>
          <div className="bg-red-600 px-6 py-2 rounded-xl font-black italic shadow-lg text-sm uppercase tracking-tighter shadow-red-900/40">
             V3.0 UPGRADE
          </div>
        </div>

      </div>

      {/* Bottom Bar - KONSISTEN */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-16 z-20">
        <div className="absolute top-0 left-0 h-[2px] bg-red-600 shadow-[0_0_15px_#E31E24]" style={{ width: '75%' }}></div>
        {/* ... (Footer items same as before) ... */}
        <div className="flex gap-10 text-gray-400">
          <div className="flex items-center gap-2">
            <i className="fas fa-calendar-alt text-red-500 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans">April 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-user text-red-500 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans text-left">IT Development Team</span>
          </div>
        </div>
        <div className="bg-red-600 px-6 py-1.5 rounded-md font-black italic shadow-lg text-white text-sm uppercase tracking-tighter">V3.0</div>
      </div>
    </div>
  );
}

function CostItem({ title, price, desc, isMeta }) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-xl border border-white/5 ${isMeta ? 'bg-green-500/5' : 'bg-white/5'}`}>
      <div className="text-left leading-none">
        <div className="text-[11px] font-black uppercase text-white mb-1">{title}</div>
        <div className="text-[9px] text-gray-500 font-bold uppercase tracking-tight">{desc}</div>
      </div>
      <div className="text-right leading-none">
        <div className={`text-sm font-black ${isMeta ? 'text-green-500' : 'text-red-500'}`}>
          {price === "FREE" || price === "0" ? price : `Rp ${price}`}
        </div>
      </div>
    </div>
  );
}

function RiskPoint({ text }) {
  return (
    <div className="flex items-center gap-2">
      <i className="fas fa-times text-red-500 text-[8px]"></i>
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight text-left leading-none">{text}</span>
    </div>
  );
}

function SuccessPoint({ text }) {
  return (
    <div className="flex items-center gap-2">
      <i className="fas fa-check text-green-500 text-[8px]"></i>
      <span className="text-[10px] font-bold text-gray-200 uppercase tracking-tight text-left leading-none">{text}</span>
    </div>
  );
}