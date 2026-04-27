import React from "react";

export default function Slide4() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-900 font-sans selection:bg-red-500/10 text-left">
      
      {/* Background Decorative Elements - Softer for Light Mode */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-500/[0.03] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-500/[0.03] rounded-full blur-[100px]"></div>

      {/* Header - KONSISTEN LIGHT MODE */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] shadow-md"></div>
        <div className="relative flex items-center gap-5">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30 text-white">
             <i className="fab fa-whatsapp text-2xl"></i>
          </div>
          <div className="text-left">
            <div className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md text-white">DEVELOPMENT API META</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold">Official WhatsApp Business Integration</div>
          </div>
        </div>
        <div className="ml-auto relative">
          <div className="bg-black/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase text-white">
            Direct Meta Infrastructure • No Third Party
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[90px] left-0 right-0 h-[560px] flex px-16 gap-10 items-center z-10 py-10">

        {/* Left Panel - Strategic Objective */}
        <div className="w-[30%]">
          <div className="relative p-[1px] rounded-3xl bg-slate-200">
            <div className="bg-slate-50 backdrop-blur-xl rounded-[23px] p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-5 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-md">
                  <i className="fas fa-bullseye text-lg"></i>
                </div>
                <div className="text-left leading-none">
                  <div className="font-black uppercase tracking-tight text-lg mb-1 text-slate-900">Tujuan</div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Strategic Goal</div>
                </div>
              </div>

              <p className="text-[13px] text-slate-600 mb-6 leading-relaxed text-left font-medium">
                Mengalihkan seluruh trafik pesan dari sistem lama ke infrastruktur resmi Cloud API Meta untuk keamanan maksimal.
              </p>

              <div className="space-y-3">
                <Objective text="Integrasi Meta Cloud API Resmi" />
                <Objective text="Eliminasi Ketergantungan Vendor" />
                <Objective text="Sistem Scalable & Real-time" />
                <Objective text="Kontrol Keamanan End-to-End" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Grid System */}
        <div className="flex-1 flex flex-col justify-center gap-4 h-full">
          
          {/* Comparison Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm text-left">
            <div className="flex items-center gap-3 mb-4 border-b border-slate-200 pb-2">
              <div className="w-7 h-7 bg-red-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                <i className="fas fa-exchange-alt text-xs"></i>
              </div>
              <div className="font-black text-[11px] uppercase tracking-widest text-left text-slate-800">Analisis Perubahan Arsitektur</div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Kolom Kiri - Kondisi Sebelumnya (V2) */}
              <div className="space-y-2">
                <div className="text-[10px] font-black text-red-600 uppercase tracking-tighter mb-2 flex items-center gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                  Pihak Ke-3 (Watzap.id)
                </div>
                <div className="space-y-1.5">
                  <OldCondition text="Bergantung pada server pihak ketiga" />
                  <OldCondition text="Biaya tetap tahunan Rp 800.000" />
                  <OldCondition text="Nomor rawan terblokir (Unofficial)" />
                  <OldCondition text="Sering terjadi downtime & antrian" />
                  <OldCondition text="Akses API terbatas hanya fitur vendor" />
                </div>
              </div>

              {/* Kolom Kanan - Keuntungan Mandiri (V3) */}
              <div className="space-y-2">
                <div className="text-[10px] font-black text-green-600 uppercase tracking-tighter mb-2 flex items-center gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
                  Meta Cloud API (V3)
                </div>
                <div className="space-y-1.5 text-left">
                  <Benefit text="Langsung terhubung ke Server Meta" />
                  <Benefit text="Skema Bayar Sesuai Pemakaian" />
                  <Benefit text="Nomor Resmi (Official Business)" />
                  <Benefit text="Uptime 99.9% Tanpa Maintenance Vendor" />
                  <Benefit text="Kontrol penuh Webhook & Metadata" />
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Estimation Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                  <i className="fas fa-receipt text-xs"></i>
                </div>
                <div className="font-black text-[11px] uppercase tracking-widest text-left text-slate-800">Struktur Biaya Meta (Estimasi)</div>
              </div>
              <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-md border border-slate-200">IDR / Message</div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-left">
              <Cost title="Verifikasi Bisnis" price="FREE" desc="Otoritas Resmi Meta" isFree />
              <Cost title="Utility Messages" price="± Rp 350" desc="Notifikasi Transaksi" />
              <Cost title="Authentication" price="± Rp 450" desc="Keamanan OTP / Auth" />
              <Cost title="Marketing" price="± Rp 580" desc="Broadcast & Promo" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - KONSISTEN LIGHT MODE */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-slate-50/80 backdrop-blur-md border-t border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-1px] left-0 h-[3px] bg-red-600 shadow-[0_0_10px_rgba(227,30,36,0.3)]" style={{ width: '44.4%' }}></div>
        <div className="flex gap-10 text-slate-500">
          <div className="flex items-center gap-2">
            <i className="fas fa-calendar-alt text-red-600 text-xs"></i>
            <span className="text-[11px] font-black tracking-widest uppercase">April 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-building text-red-600 text-xs"></i>
            <span className="text-[11px] font-black tracking-widest uppercase">Sinar Mas Selluler</span>
          </div>
        </div>
        <div className="bg-slate-900 px-7 py-2 rounded-lg font-black italic shadow-md text-white text-sm uppercase tracking-tighter">V3.0</div>
      </div>
    </div>
  );
}

{/* SUB-COMPONENTS */}

function Objective({ text }) {
  return (
    <div className="flex gap-3 items-center group">
      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center border border-red-200 group-hover:bg-red-600 transition-all duration-300">
        <i className="fas fa-check text-[8px] text-red-600 group-hover:text-white"></i>
      </div>
      <div className="text-[11px] text-slate-600 font-bold group-hover:text-slate-900 transition-colors text-left uppercase tracking-tight leading-none">{text}</div>
    </div>
  );
}

function Benefit({ text }) {
  return (
    <div className="flex gap-3 items-center bg-white border border-slate-200 p-2 px-3 rounded-xl hover:bg-green-50 hover:border-green-300 transition-all group">
      <i className="fas fa-check-double text-green-600 text-[10px] group-hover:scale-110 transition-transform"></i>
      <div className="text-[10px] text-slate-500 font-bold text-left leading-tight uppercase tracking-tighter group-hover:text-slate-800">{text}</div>
    </div>
  );
}

function Cost({ title, price, desc, isFree }) {
  return (
    <div className={`flex items-center justify-between p-2.5 px-4 rounded-xl border transition-all group ${isFree ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200 hover:border-red-400 hover:shadow-sm'}`}>
      <div className="text-left leading-none">
        <div className={`text-[10px] font-black uppercase tracking-tight mb-1 ${isFree ? 'text-green-700' : 'text-slate-800 group-hover:text-red-600'}`}>{title}</div>
        <div className="text-[8px] text-slate-400 uppercase font-black tracking-widest">{desc}</div>
      </div>
      <div className="text-right leading-none">
        <div className={`font-black text-[14px] tracking-tighter italic ${isFree ? 'text-green-600' : 'text-red-600'}`}>{price}</div>
      </div>
    </div>
  );
}

function OldCondition({ text }) {
  return (
    <div className="flex gap-3 items-start bg-red-50 border border-red-100 p-2 px-3 rounded-xl group transition-all">
      <i className="fas fa-times-circle text-red-500 text-[10px] mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity"></i>
      <div className="text-[10px] text-slate-500 font-bold text-left leading-tight group-hover:text-slate-800 uppercase tracking-tighter">{text}</div>
    </div>
  );
}