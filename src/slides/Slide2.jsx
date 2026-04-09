export default function Slide2() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-[#0f0f0f] text-white font-sans selection:bg-red-500/30">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px]"></div>

      {/* Header - Konsisten dengan Slide 1 */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-20 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] opacity-95 shadow-xl"></div>
        <div className="relative flex items-center gap-5">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30">
             <i className="fas fa-list-alt text-2xl text-white"></i>
          </div>
          <div>
            <div className="text-2xl font-black tracking-tighter italic uppercase text-left">DAFTAR ISI</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-semibold text-left">Agenda & Key Highlights</div>
          </div>
        </div>
        <div className="ml-auto relative">
          <div className="bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-xs font-medium tracking-widest uppercase">
            8 Poin Utama Presentasi
          </div>
        </div>
      </div>

      {/* Content Area - Tinggi disesuaikan (720 - 90 - 70 = 560px) */}
      <div className="absolute top-[90px] left-0 right-0 h-[560px] flex px-16 gap-12 items-center z-10">

        {/* Left Panel - Information Summary */}
        <div className="w-[32%] flex flex-col gap-6">
          <SidebarCard
            icon="fa-info-circle"
            title="Ringkasan"
            text="Fokus utama pada migrasi infrastruktur V2 ke V3, penguatan security layer BCA, serta efisiensi biaya melalui integrasi direct API Meta."
          />

          <SidebarCard
            icon="fa-clock"
            title="Estimasi Durasi"
            text={
              <div className="space-y-2 mt-1">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                   <span className="text-gray-400">Presentasi</span>
                   <span className="text-white font-bold">20 Menit</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                   <span className="text-gray-400">Sesi Q&A</span>
                   <span className="text-white font-bold">10 Menit</span>
                </div>
              </div>
            }
          />
        </div>

        {/* Right Panel - Agenda Grid */}
        <div className="flex-1 h-full py-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <AgendaItem no="01" icon="fa-exchange-alt" title="Membership V2 vs V3" desc="Komparasi fitur & security" />
            <AgendaItem no="02" icon="fa-message" title="Development API Meta" desc="Direct official integration" />
            <AgendaItem no="03" icon="fa-server" title="Webhook Monitoring" desc="Real-time message tracking" />
            <AgendaItem no="04" icon="fa-project-diagram" title="Analisis Efisiensi" desc="Meta vs Third Party" />
            <AgendaItem no="05" icon="fa-envelope" title="Notifikasi Email" desc="Cost & Delivery optimization" />
            <AgendaItem no="06" icon="fa-chart-line" title="Business Impact" desc="Manfaat & efek jangka panjang" />
            <AgendaItem no="07" icon="fa-calendar-alt" title="Implementation" desc="Timeline & deployment steps" />
            <AgendaItem no="08" icon="fa-flag-checkered" title="Closing" desc="Kesimpulan & Next Steps" />
          </div>
        </div>

      </div>

      {/* Bottom Bar - Konsisten dengan Slide 1 */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-16 z-20">
        
        {/* Progress Line */}
        <div className="absolute top-0 left-0 h-[2px] bg-red-600 shadow-[0_0_10px_#E31E24] transition-all duration-1000" style={{ width: '25%' }}></div>

        <div className="flex gap-10">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
               <i className="fas fa-user text-red-500 text-xs"></i>
            </div>
            <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">IT Development Team</span>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
               <i className="fas fa-calendar text-red-500 text-xs"></i>
            </div>
            <span className="text-[11px] font-bold tracking-widest text-gray-400">APRIL 2026</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
            <span className="text-[10px] font-bold text-gray-400 tracking-wider">READY TO START</span>
          </div>
          <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-md text-sm font-black italic">
            <span className="text-red-500">2</span> <span className="text-white/30 mx-1">/</span> 8
          </div>
        </div>
      </div>
    </div>
  );
}

/* Sidebar Card - Premium Design */
function SidebarCard({ icon, title, text }) {
  return (
    <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
      <div className="flex items-center gap-3 font-black text-xs tracking-[0.2em] uppercase mb-4 text-white/90">
        <i className={`fas ${icon} text-red-500 text-base`}></i>
        {title}
      </div>
      <div className="text-gray-400 text-[13px] leading-relaxed text-left">
        {text}
      </div>
    </div>
  );
}

/* Agenda Item - Compact & Professional */
function AgendaItem({ no, title, desc, icon }) {
  return (
    <div className="group flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 p-4 rounded-xl transition-all duration-300 hover:translate-y-[-2px] hover:border-red-500/30">
      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center border border-red-600/20 group-hover:bg-red-600 transition-all duration-300">
           <span className="text-xs font-black text-red-500 group-hover:text-white">{no}</span>
        </div>
      </div>
      
      <div className="flex-1 text-left">
        <div className="text-[13px] font-bold text-white tracking-wide group-hover:text-red-400 transition-colors">
          {title}
        </div>
        <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mt-0.5">
          {desc}
        </div>
      </div>

      <div className="text-white/20 group-hover:text-red-500/50 transition-colors pr-2">
        <i className={`fas ${icon} text-lg`}></i>
      </div>
    </div>
  );
}