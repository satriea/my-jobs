import React from "react";

export default function Slide5() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-[#0f0f0f] text-white font-sans selection:bg-red-500/30">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px]"></div>

      {/* Header - Konsisten dengan Slide sebelumnya */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-30 flex items-center px-12 text-left">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] opacity-95 shadow-xl"></div>
        <div className="relative flex items-center gap-5">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30 text-white">
             <i className="fas fa-server text-2xl"></i>
          </div>
          <div>
            <div className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md leading-none mb-1">WEBHOOK WHATSAPP</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-semibold">Monitoring Chat Customer Real-time</div>
          </div>
        </div>
        <div className="ml-auto relative">
          <div className="bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase text-white/90">
            Direct Meta Synchronization
          </div>
        </div>
      </div>

      {/* Main Content Area - Locked Height dengan Padding Bawah yang Lega */}
      <div className="absolute top-[90px] left-0 right-0 h-[560px] flex flex-col px-16 z-10 pt-8 pb-12">
        
        {/* UPPER SECTION: FLOW - Dengan Margin Bottom (mb-10) untuk memisahkan card */}
        <div className="bg-white/[0.03] border border-white/5 rounded-3xl p-6 shadow-inner relative overflow-hidden h-[250px] flex flex-col justify-center mb-10">
          <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-3">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 flex items-center justify-center text-red-500 text-sm border border-red-600/20">
              <i className="fas fa-project-diagram"></i>
            </div>
            <div className="text-left">
              <div className="font-black uppercase tracking-tight text-sm">Arsitektur Alur Webhook</div>
              <div className="text-[9px] text-gray-500 uppercase tracking-widest italic font-bold">Data Flow Real-time via Official Meta API</div>
            </div>
          </div>

          {/* Flow Diagram with Bright Arrows */}
          <div className="flex items-center justify-between relative px-4">
            {[
              { icon: "fa-user", title: "Customer Chat", desc: "Pesan masuk" },
              { icon: "fa-whatsapp", title: "Meta API", desc: "Terima pesan", brand: true },
              { icon: "fa-server", title: "Webhook Server", desc: "Proses data" },
              { icon: "fa-database", title: "Database", desc: "Simpan data" },
              { icon: "fa-chart-line", title: "Dashboard", desc: "Monitoring" },
            ].map((step, index) => (
              <React.Fragment key={index}>
                <div className="relative z-10 flex flex-col items-center gap-2 min-w-[140px] group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:border-red-500 transition-all duration-500 shadow-xl">
                    <i className={`${step.brand ? "fab" : "fas"} ${step.icon} text-lg group-hover:text-white`}></i>
                  </div>
                  <div className="text-center">
                    <div className="text-white text-[10px] font-black uppercase tracking-wider leading-none mb-1 group-hover:text-red-400 transition-colors">{step.title}</div>
                    <div className="text-gray-500 text-[8px] font-bold uppercase tracking-tighter">{step.desc}</div>
                  </div>
                </div>

                {index < 4 && (
                  <div className="flex flex-col items-center justify-center px-2">
                    <div className="relative w-12 flex items-center justify-center">
                      <div className="absolute w-full h-[2px] bg-red-500/20 blur-sm"></div>
                      <div className="w-full h-[2px] bg-gradient-to-r from-red-600 via-white to-red-600 rounded-full"></div>
                      <i className="fas fa-caret-right absolute right-[-6px] text-white text-lg animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"></i>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* LOWER SECTION: FUNGSI & MANFAAT - Grid dengan sisa ruang yang aman */}
        <div className="grid grid-cols-2 gap-8 h-[320px]">
          <InfoCard 
            icon="fa-cogs" 
            title="Fungsi Webhook" 
            accentColor="text-red-500"
            items={[
              { bold: "Menerima pesan masuk & keluar", desc: "Monitoring komunikasi customer" },
              { bold: "Tracking komunikasi", desc: "Simpan history chat secara otomatis" },
              { bold: "Integrasi dashboard", desc: "Real-time monitoring via panel" }
            ]}
          />

          <InfoCard 
            icon="fa-chart-bar" 
            title="Manfaat Bisnis" 
            accentColor="text-green-500"
            items={[
              { bold: "Monitoring real-time", desc: "Data chat tersimpan & terpusat" },
              { bold: "Mudah dianalisa", desc: "Customer journey lebih terkontrol" },
              { bold: "Terintegrasi CRM", desc: "Pantau langsung di aplikasi CRM Utama" }
            ]}
          />
        </div>
      </div>

      {/* Bottom Bar - Konsisten */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-16 z-20">
        <div className="absolute top-0 left-0 h-[2px] bg-red-600 shadow-[0_0_15px_#E31E24]" style={{ width: '62.5%' }}></div>
        <div className="flex gap-10 text-gray-400">
          <div className="flex items-center gap-2">
            <i className="fas fa-calendar-alt text-red-500 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans">April 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-mobile text-red-500 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans">Sinar Mas Selluler</span>
          </div>
        </div>
        <div className="bg-red-600 px-6 py-1.5 rounded-md font-black italic shadow-lg text-white text-sm">V3.0</div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, items, accentColor }) {
  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-5 flex flex-col h-full hover:bg-white/[0.05] transition-all group overflow-hidden">
      <div className="flex items-center gap-3 mb-3 border-b border-white/5 pb-2">
        <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center ${accentColor} text-sm border border-white/10 group-hover:bg-red-600 group-hover:text-white transition-colors`}>
          <i className={`fas ${icon}`}></i>
        </div>
        <div className="text-white text-[13px] font-black uppercase tracking-widest text-left">
          {title}
        </div>
      </div>

      <div className="space-y-2 flex-1 flex flex-col justify-center">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white/[0.02] p-2 px-4 rounded-xl border border-white/5 flex flex-col items-start hover:border-red-500/20 transition-all group/item">
            <div className={`${accentColor} font-black text-[10px] uppercase tracking-tighter leading-none mb-1 group-hover/item:scale-105 transition-transform origin-left`}>
              {item.bold}
            </div>
            <div className="text-gray-400 text-[11px] leading-tight text-left">
              - {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}