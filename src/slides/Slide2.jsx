import React from "react";

export default function Slide4() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-950 font-sans selection:bg-red-500/10 text-left">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-500/[0.04] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-500/[0.04] rounded-full blur-[100px]"></div>

      {/* Header - HIGH CONTRAST */}
      <div className="absolute top-0 left-0 right-0 h-[85px] z-30 flex items-center px-12 text-left">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#a5161a] shadow-xl"></div>
        <div className="relative flex items-center gap-5 text-white">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border-2 border-white/40 shadow-inner">
             <i className="fab fa-whatsapp text-2xl"></i>
          </div>
          <div className="text-left leading-none">
            <h1 className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md">DEVELOPMENT API META</h1>
            <div className="text-[11px] uppercase tracking-[0.2em] font-black text-white/90 mt-1">Official WhatsApp Business Integration</div>
          </div>
        </div>
        <div className="ml-auto bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-lg border-2 border-white/20 text-[11px] font-black tracking-widest uppercase text-white shadow-lg">
          Direct Meta Infrastructure • No Third Party
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[85px] left-0 right-0 h-[565px] flex px-16 gap-10 items-center z-10 py-10">

        {/* Left Panel - Strategic Objective (ULTRA BOLD) */}
        <div className="w-[32%]">
          <div className="relative p-[2px] rounded-[2.5rem] bg-slate-950 shadow-2xl">
            <div className="bg-white rounded-[2.3rem] p-8 border-2 border-slate-200">
              <div className="flex items-center gap-4 mb-6 border-b-2 border-slate-100 pb-5">
                <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <i className="fas fa-bullseye text-xl"></i>
                </div>
                <div className="text-left leading-none">
                  <div className="font-black uppercase tracking-tighter text-xl mb-1 text-slate-950">Tujuan</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Strategic Goal</div>
                </div>
              </div>

              <p className="text-[14px] text-slate-900 mb-8 leading-relaxed text-left font-black uppercase tracking-tight italic">
                Mengalihkan seluruh trafik pesan dari sistem lama ke infrastruktur resmi Cloud API Meta untuk keamanan maksimal.
              </p>

              <div className="space-y-4">
                <Objective text="Integrasi Meta Cloud API Resmi" />
                <Objective text="Eliminasi Ketergantungan Vendor" />
                <Objective text="Sistem Scalable & Real-time" />
                <Objective text="Kontrol Keamanan End-to-End" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Grid System */}
        <div className="flex-1 flex flex-col justify-center gap-1 h-full">
          
          {/* Comparison Section (THICK BORDERS) */}
          <div className="bg-white border-[3px] border-slate-200 rounded-[2rem] p-4 shadow-xl text-left">
            <div className="flex items-center gap-4 mb-5 border-b-2 border-slate-100 pb-3">
              <div className="w-8 h-8 bg-slate-950 rounded-xl flex items-center justify-center text-white shadow-md">
                <i className="fas fa-exchange-alt text-sm"></i>
              </div>
              <div className="font-black text-[12px] uppercase tracking-widest text-left text-slate-950">Analisis Perubahan Arsitektur</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Kolom Kiri - Kondisi Sebelumnya (V2) */}
              <div className="space-y-3">
                <div className="text-[11px] font-black text-red-700 uppercase tracking-tight mb-3 flex items-center gap-2 text-left">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_#E31E24]"></span>
                  Pihak Ke-3 (Watzap.id)
                </div>
                <div className="space-y-2">
                  <OldCondition text="Bergantung pada server pihak ketiga" />
                  <OldCondition text="Nomor rawan terblokir (Unofficial)" />
                  <OldCondition text="Sering terjadi downtime & antrian" />
                  <OldCondition text="Akses API terbatas fitur vendor" />
                </div>
              </div>

              {/* Kolom Kanan - Keuntungan Mandiri (V3) */}
              <div className="space-y-3 text-left">
                <div className="text-[11px] font-black text-green-700 uppercase tracking-tight mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-600 shadow-[0_0_10px_#22c55e]"></span>
                  Meta Cloud API (V3)
                </div>
                <div className="space-y-2">
                  <Benefit text="Langsung terhubung ke Server Meta" />
                  <Benefit text="Skema Bayar Sesuai Pemakaian" />
                  <Benefit text="Nomor Resmi (Official Business)" />
                  <Benefit text="Uptime 99.9% Tanpa Vendor" />
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Estimation Section - BOLDER */}
          <div className="bg-white border-[3px] border-slate-200 rounded-[2rem] p-4 shadow-xl">
            <div className="flex items-center justify-between mb-5 border-b-2 border-slate-100 pb-3">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-700 rounded-xl flex items-center justify-center text-white shadow-md">
                  <i className="fas fa-receipt text-sm"></i>
                </div>
                <div className="font-black text-[12px] uppercase tracking-widest text-left text-slate-950">Struktur Biaya Meta (Estimasi)</div>
              </div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-100 px-4 py-1.5 rounded-lg border-2 border-slate-200">IDR / Message</div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-left">
              <Cost title="Verifikasi Bisnis" price="FREE" desc="Otoritas Resmi Meta" isFree />
              <Cost title="Utility Messages" price="± Rp 350" desc="Notifikasi Transaksi" />
              <Cost title="Authentication" price="± Rp 450" desc="Keamanan OTP / Auth" />
              <Cost title="Marketing" price="± Rp 580" desc="Broadcast & Promo" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - BOLD & CONSISTENT */}
      <div className="absolute bottom-0 left-0 right-0 h-[75px] bg-slate-100 border-t-[3px] border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-3px] left-0 h-[5px] bg-red-600 shadow-[0_0_15px_rgba(227,30,36,0.5)]" style={{ width: '44.4%' }}></div>
        <div className="flex gap-12 text-slate-950">
          <div className="flex items-center gap-3">
            <i className="fas fa-calendar-alt text-red-600 text-lg"></i>
            <span className="text-[12px] font-black tracking-widest uppercase">April 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="fas fa-building text-red-600 text-lg"></i>
            <span className="text-[12px] font-black tracking-widest uppercase italic">Sinar Mas Selluler</span>
          </div>
        </div>
        <div className="bg-slate-950 px-8 py-3 rounded-xl font-black italic shadow-2xl text-white text-sm tracking-tighter uppercase leading-none border-2 border-white/10">V3.0</div>
      </div>
    </div>
  );
}

{/* SUB-COMPONENTS - OPTIMIZED FOR CONTRAST */}

function Objective({ text }) {
  return (
    <div className="flex gap-4 items-center group">
      <div className="w-6 h-6 rounded-xl bg-red-600 flex items-center justify-center shadow-md">
        <i className="fas fa-check text-[10px] text-white"></i>
      </div>
      <div className="text-[12px] text-slate-950 font-black uppercase tracking-tight leading-none group-hover:text-red-700 transition-colors">{text}</div>
    </div>
  );
}

function Benefit({ text }) {
  return (
    <div className="flex gap-4 items-center bg-white border-2 border-slate-200 p-2.5 px-4 rounded-xl hover:border-green-500 transition-all group">
      <i className="fas fa-check-double text-green-600 text-[11px] font-black"></i>
      <div className="text-[11px] text-slate-950 font-black text-left leading-tight uppercase tracking-tighter">{text}</div>
    </div>
  );
}

function Cost({ title, price, desc, isFree }) {
  return (
    <div className={`flex items-center justify-between p-3 px-5 rounded-2xl border-[2.5px] transition-all group ${isFree ? 'bg-green-50 border-green-500 shadow-md' : 'bg-white border-slate-200 hover:border-red-600 shadow-sm'}`}>
      <div className="text-left leading-none">
        <div className={`text-[11px] font-black uppercase tracking-tight mb-1.5 ${isFree ? 'text-green-800' : 'text-slate-950 group-hover:text-red-600'}`}>{title}</div>
        <div className={`text-[9px] font-black tracking-widest uppercase ${isFree ? 'text-green-600' : 'text-slate-500'}`}>{desc}</div>
      </div>
      <div className="text-right leading-none">
        <div className={`font-black text-[16px] tracking-tighter italic ${isFree ? 'text-green-700' : 'text-red-600'}`}>{price}</div>
      </div>
    </div>
  );
}

function OldCondition({ text }) {
  return (
    <div className="flex gap-4 items-center bg-red-50 border-2 border-red-100 p-2.5 px-4 rounded-xl group transition-all">
      <i className="fas fa-times-circle text-red-600 text-[11px] font-black"></i>
      <div className="text-[11px] text-slate-800 font-black text-left leading-tight uppercase tracking-tighter italic">{text}</div>
    </div>
  );
}