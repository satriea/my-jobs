import React from "react";

export default function Slide2() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-[#0a0a0a] text-white font-sans">
      
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]"></div>

      {/* Header - Dibuat lebih ramping (px-10) agar tidak mepet tepi */}
      <div className="absolute top-0 left-0 right-0 h-[80px] z-30 flex items-center px-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#b91c1c] via-[#E31E24] to-[#b91c1c] opacity-95 border-b border-red-500/20"></div>
        <div className="relative flex items-center gap-4 text-left">
          <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md border border-white/20 text-white">
             <i className="fas fa-th-list text-xl"></i>
          </div>
          <div>
            <div className="text-xl font-black tracking-tighter italic uppercase leading-none mb-1 text-left">STRATEGIC AGENDA</div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-white/70 font-bold text-left text-nowrap">Membership V3.0 • Roadmap & Key Milestones</div>
          </div>
        </div>
        <div className="ml-auto relative hidden md:block">
          <div className="bg-black/40 px-4 py-2 rounded-lg text-[9px] font-bold tracking-widest uppercase border border-white/10">
            9 Key Tech Pillars
          </div>
        </div>
      </div>

      {/* Content Area - Padding horizontal ditambah (px-20) agar konten menjauh dari tepi layar */}
      <div className="absolute top-[80px] left-0 right-0 h-[570px] flex px-20 gap-10 items-center z-10 py-6">

        {/* Left Panel - Ramping (w-[28%]) */}
        <div className="w-[28%] flex flex-col gap-5">
          <SidebarCard
            icon="fa-briefcase"
            title="Objektif"
            text="Transformasi menyeluruh arsitektur Membership: Migrasi V2 ke V3, Integrasi BCA Security Layer, & Optimasi API Meta Resmi."
          />

          <SidebarCard
            icon="fa-user-clock"
            title="Alokasi Waktu"
            text={
              <div className="space-y-2 mt-1 text-left">
                <div className="flex justify-between items-center border-b border-white/5 pb-1">
                   <span className="text-gray-500 text-[11px]">Presentasi</span>
                   <span className="text-white font-black text-sm">20 <span className="text-[9px] text-gray-500 uppercase">Min</span></span>
                </div>
                <div className="flex justify-between items-center">
                   <span className="text-gray-500 text-[11px]">Sesi Q&A</span>
                   <span className="text-white font-black text-sm">10 <span className="text-[9px] text-gray-500 uppercase">Min</span></span>
                </div>
              </div>
            }
          />
        </div>

        {/* Right Panel - Agenda List - Dibuat lebih ramping agar arrow tidak terpotong */}
        <div className="flex-1 h-full flex flex-col justify-center space-y-5 pl-6 border-l border-white/5 relative">
            
            <div className="absolute top-0 left-[-1px] w-[1px] h-full bg-red-600/10">
              <div className="absolute top-0 left-0 w-full bg-red-600 shadow-[0_0_10px_#E31E24]" style={{ height: '22%' }}></div>
            </div>

            <AgendaItem no="01" title="Membership V2 vs V3" desc="Komparasi Fitur & Arsitektur Keamanan" />
            <AgendaItem no="02" title="Development API Meta" desc="Alur Integrasi Resmi Direct API" />
            <AgendaItem no="03" title="Webhook Monitoring" desc="Sistem Pelacakan Pesan Real-time" />
            <AgendaItem no="04" title="BCA Security Layer" desc="Proteksi Kredensial & Sinkronisasi BCA" />
            <AgendaItem no="05" title="Notifikasi Email" desc="Optimasi Biaya & Pengiriman Pesan" />
            <AgendaItem no="06" title="Business Impact" desc="Efisiensi & Efek Bisnis Jangka Panjang" />
            <AgendaItem no="07" title="Implementation Timeline" desc="Tahapan Milestone & Implementasi" />
            <AgendaItem no="08" title="Financial Roadmap" desc="Analisis Biaya & Skalabilitas Sistem" />
            <AgendaItem no="09" title="Closing & Next Steps" desc="Kesimpulan & Rencana Aksi Strategis" />
            
        </div>

      </div>

      {/* Bottom Bar - Disesuaikan agar Progress Line tidak terlihat putus */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-[#080808] border-t border-white/5 flex items-center justify-between px-16 z-20">
        <div className="absolute top-[-1px] left-0 h-[2px] bg-red-600 shadow-[0_0_15px_#E31E24]" style={{ width: '22.2%' }}></div>

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

        <div className="bg-red-600 px-5 py-1 rounded text-sm font-black italic shadow-lg shadow-red-900/20 uppercase tracking-tighter">V3.0</div>
      </div>
    </div>
  );
}

function SidebarCard({ icon, title, text }) {
  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 relative overflow-hidden text-left">
      <div className="absolute top-0 left-0 w-[2px] h-full bg-red-600"></div>
      <div className="flex items-center gap-3 font-black text-[9px] tracking-[0.2em] uppercase mb-3 text-white/70">
        <i className={`fas ${icon} text-red-500 text-xs`}></i>
        {title}
      </div>
      <div className="text-gray-400 text-[11px] leading-relaxed font-medium tracking-tight uppercase">
        {text}
      </div>
    </div>
  );
}

function AgendaItem({ no, title, desc }) {
  return (
    <div className="group flex items-center gap-4 bg-transparent hover:bg-white/[0.03] p-1.5 px-4 rounded-xl transition-all border-b border-white/[0.02] last:border-0">
      <div className="text-lg font-black italic text-red-500 group-hover:text-white w-6 text-left">{no}</div>
      <div className="flex-1 text-left leading-none">
        <div className="text-[12px] font-extrabold text-white group-hover:text-red-400 transition-colors tracking-tight uppercase">{title}</div>
        <div className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">{desc}</div>
      </div>
      {/* Panah diperkecil agar tidak terdorong keluar frame */}
      <div className="flex items-center justify-center w-6 h-6 bg-red-600/10 border border-red-500/20 rounded-lg group-hover:bg-red-600 transition-all">
         <i className="fas fa-arrow-right text-[10px] text-red-500 group-hover:text-white"></i>
      </div>
    </div>
  );
}