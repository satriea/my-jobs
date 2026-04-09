import React from "react";

export default function Slide6() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-[#0f0f0f] text-white font-sans selection:bg-red-500/30">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px]"></div>

      {/* Header - KONSISTEN */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] opacity-95 shadow-xl"></div>
        <div className="relative flex items-center gap-5 text-left">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30 text-white text-2xl">
             <i className="fas fa-project-diagram"></i>
          </div>
          <div>
            <div className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md leading-none mb-1">BAGAN PERBANDINGAN</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-semibold text-left">Analisis Infrastruktur: Vendor vs Meta API</div>
          </div>
        </div>
        <div className="ml-auto relative">
          <div className="bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase">
            Efficiency Analysis V2 vs V3
          </div>
        </div>
      </div>

      {/* Main Content Area - Locked Height 560px */}
      <div className="absolute top-[90px] left-0 right-0 h-[560px] flex flex-col justify-center px-16 z-10 py-6">
        
        {/* FLOW COMPARISON SECTION */}
        <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-6 shadow-2xl mb-6 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-3">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 flex items-center justify-center text-red-500 text-sm border border-red-600/20">
              <i className="fas fa-exchange-alt"></i>
            </div>
            <div className="text-left font-black uppercase tracking-tight text-sm">Perbandingan Alur Sistem</div>
          </div>

          <div className="grid grid-cols-2 gap-8 relative">
            {/* Vertical Divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden lg:block"></div>

            {/* PIHAK KE 3 (LAMA) */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="text-xs font-black uppercase tracking-widest text-red-500">Pihak Ke-3 (Sistem Lama)</div>
              </div>
              <div className="flex items-center justify-between bg-black/40 p-4 rounded-2xl border border-white/5">
                {[
                  { icon: "fa-user", text: "Customer" },
                  { icon: "fa-whatsapp", text: "WhatsApp", brand: true },
                  { icon: "fa-building", text: "Vendor" },
                  { icon: "fa-server", text: "Server" },
                ].map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center gap-1.5 min-w-[60px]">
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                        <i className={`${step.brand ? "fab" : "fas"} ${step.icon} text-sm`}></i>
                      </div>
                      <span className="text-[9px] font-bold text-white/30 uppercase">{step.text}</span>
                    </div>
                    {index < 3 && <i className="fas fa-chevron-right text-[10px] text-white/10"></i>}
                  </React.Fragment>
                ))}
              </div>
              <div className="text-[11px] text-red-400 italic bg-red-500/5 py-2 px-4 rounded-lg border border-red-500/10 text-center">
                ● Alur lebih panjang, ketergantungan pihak ketiga tinggi
              </div>
            </div>

            {/* META API (BARU) */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="text-xs font-black uppercase tracking-widest text-green-500">Meta API (Sistem Baru)</div>
              </div>
              <div className="flex items-center justify-between bg-red-600/5 p-4 rounded-2xl border border-red-500/20">
                {[
                  { icon: "fa-user", text: "Customer" },
                  { icon: "fa-whatsapp", text: "WhatsApp", brand: true },
                  { icon: "fa-cloud", text: "Meta API" },
                  { icon: "fa-database", text: "Server DB" },
                ].map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center gap-1.5 min-w-[60px] group">
                      <div className="w-9 h-9 rounded-xl bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                        <i className={`${step.brand ? "fab" : "fas"} ${step.icon} text-sm`}></i>
                      </div>
                      <span className="text-[9px] font-bold text-white uppercase">{step.text}</span>
                    </div>
                    {index < 3 && <i className="fas fa-chevron-right text-[10px] text-red-500 animate-pulse"></i>}
                  </React.Fragment>
                ))}
              </div>
              <div className="text-[11px] text-green-400 italic bg-green-500/5 py-2 px-4 rounded-lg border border-green-500/10 text-center">
                ● Alur ringkas, tanpa vendor, kontrol penuh infrastruktur
              </div>
            </div>
          </div>
        </div>

        {/* COMPARISON TABLE SECTION */}
        <div className="grid grid-cols-2 gap-8">
          {/* LEFT TABLE */}
          <div className="space-y-2">
            {[
              "Lebih panjang - Alur lebih kompleks",
              "Biaya vendor - Beban biaya tahunan",
              "Bergantung vendor - Maintenance terbatas",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/[0.02] border border-white/5 p-3 rounded-xl hover:bg-white/[0.05] transition-all">
                <i className="fas fa-times-circle text-red-500/50"></i>
                <div className="text-gray-400 text-xs text-left">{text}</div>
              </div>
            ))}
          </div>

          {/* RIGHT TABLE */}
          <div className="space-y-2">
            {[
              "Lebih pendek - Alur jauh lebih efisien",
              "Tanpa vendor - Optimasi biaya per pesan",
              "Kontrol penuh - Maintenance mandiri & scalable",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 bg-red-600/5 border border-red-600/10 p-3 rounded-xl hover:border-red-600/30 transition-all">
                <i className="fas fa-check-circle text-green-500"></i>
                <div className="text-white text-xs font-medium text-left">{text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CONCLUSION - Floating Badge */}
        <div className="mt-8 relative h-12">
          <div className="absolute inset-0 bg-red-600/20 blur-xl rounded-full"></div>
          <div className="relative h-full bg-gradient-to-r from-red-600 to-[#8b1216] border border-white/20 rounded-2xl flex items-center justify-center px-8 shadow-2xl">
            <i className="fas fa-lightbulb text-white mr-3 animate-bounce"></i>
            <span className="text-sm font-black uppercase tracking-[0.1em]">
              Kesimpulan: Meta API lebih <span className="text-yellow-400 italic">efisien</span> & <span className="text-yellow-400 italic">scalable</span> untuk sistem membership
            </span>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR - KONSISTEN */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-16 z-20">
        <div className="absolute top-0 left-0 h-[2px] bg-red-600 shadow-[0_0_15px_#E31E24]" style={{ width: '75%' }}></div>
        <div className="flex gap-10 text-gray-400">
          <div className="flex items-center gap-2">
            <i className="fas fa-calendar-alt text-red-500 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans">April 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-user text-red-500 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans">IT Development Team</span>
          </div>
        </div>
        <div className="bg-red-600 px-6 py-1.5 rounded-md font-black italic shadow-lg text-white text-sm">V3.0</div>
      </div>
    </div>
  );
}