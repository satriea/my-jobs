import React from "react";

export default function SlideExistingEcosystem() {
  const platforms = [
    { name: "Membership System", url: "membership.simassell.id", icon: "fa-users-cog", status: "High Traffic" },
    { name: "Corporate CRM", url: "simassell.id/dashboard", icon: "fa-chart-pie", status: "Critical Data" },
    { name: "I-Absen", url: "i-absen.simassell.id", icon: "fa-clock", status: "Daily Active" },
    { name: "Web Karir", url: "info-karir.sinarmasselluler.com", icon: "fa-briefcase", status: "Active" },
    { name: "My-Principle", url: "my-principle.sinarmasselluler.com", icon: "fa-handshake", status: "External Sync" },
    { name: "Official Ecommerce", url: "sinarmasselluler.com", icon: "fa-shopping-cart", status: "In Development", highlight: true },
  ];

  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-900 font-sans selection:bg-red-500/10">
      
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M10 10L90 90M90 10L10 90\' stroke=\'%23000\' stroke-width=\'0.3\'/%3E%3C/svg%3E")' }}></div>

      {/* Header - 80px */}
      <div className="absolute top-0 left-0 right-0 h-[80px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] shadow-md"></div>
        <div className="relative flex items-center gap-4 text-left">
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md border border-white/30 text-white shadow-inner">
             <i className="fas fa-network-wired text-xl"></i>
          </div>
          <div className="text-left leading-none">
            <h1 className="text-xl font-black tracking-tighter italic uppercase text-white">EKOSISTEM DIGITAL EXISTING</h1>
            <div className="text-[9px] uppercase tracking-[0.2em] text-white/70 font-bold mt-1">Infrastructure Load Analysis 2026</div>
          </div>
        </div>
        
        {/* DOMAIN INFO TAGS */}
        <div className="ml-auto flex gap-2">
          <div className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-left">
            <div className="text-[9px] font-black text-red-300 uppercase leading-none mb-1">Main Domain</div>
            <div className="text-[11px] font-bold text-white leading-none">sinarmasselluler.com</div>
          </div>
          <div className="bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-left">
            <div className="text-[9px] font-black text-amber-300 uppercase leading-none mb-1">Addon Domain</div>
            <div className="text-[11px] font-bold text-white leading-none">simassell.id</div>
          </div>
          <div className="bg-green-500/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-green-500/30 flex items-center gap-2">
            <i className="fab fa-node-js text-green-600 font-bold text-xs"></i>
            <span className="text-[9px] font-black text-white uppercase tracking-widest">Node.js</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[80px] left-0 right-0 h-[570px] flex flex-col px-16 z-10 py-6 text-left">
        
        {/* Intro Section */}
        <div className="flex justify-between items-start mb-6">
            <div className="max-w-2xl text-left">
                <h2 className="text-3xl font-black italic tracking-tighter text-slate-900 uppercase leading-none mb-2">
                    INFRASTRUKTUR <span className="text-red-600">GUARDIAN</span>
                </h2>
                <p className="text-slate-500 font-bold text-sm leading-snug border-l-4 border-red-600 pl-4">
                    Pusat kendali 6 platform utama Sinar Mas Selluler. Backend <span className="text-slate-900 font-black">Node.js</span> menjamin stabilitas koneksi <span className="text-green-600 font-black italic underline">24 Jam Tanpa Putus</span>.
                </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-2xl flex items-center gap-3 shadow-sm">
                <div className="w-6 h-6 rounded-full border-2 border-green-500 border-t-transparent animate-spin"></div>
                <div className="text-left leading-tight">
                    <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Runtime Status</div>
                    <div className="text-[10px] font-black text-slate-800 tracking-tight text-nowrap">SERVER ALWAYS ONLINE</div>
                </div>
            </div>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-left">
            {platforms.map((item, index) => (
                <div key={index} className={`group bg-white border p-4 rounded-[1.5rem] flex flex-col gap-3 transition-all duration-300 border-b-4 ${item.highlight ? 'border-amber-400 bg-amber-50/30' : 'border-slate-100 hover:border-red-600 hover:shadow-lg'}`}>
                    <div className="flex justify-between items-center">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-inner transition-all ${item.highlight ? 'bg-amber-100 text-amber-600' : 'bg-slate-50 text-red-600 group-hover:bg-red-600 group-hover:text-white'}`}>
                            <i className={`fas ${item.icon} text-lg`}></i>
                        </div>
                        <span className={`text-[7px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${item.highlight ? 'bg-amber-200 text-amber-800 animate-pulse' : 'bg-slate-100 text-slate-500'}`}>
                            {item.status}
                        </span>
                    </div>
                    
                    <div className="text-left">
                        <div className="text-[13px] font-black uppercase text-slate-800 tracking-tight mb-1">{item.name}</div>
                        <div className={`flex items-center gap-2 font-bold text-[11px] p-1.5 px-2 rounded-lg border ${item.highlight ? 'bg-white border-amber-200 text-amber-700' : 'bg-red-50/50 border-red-100/50 text-red-600/60'}`}>
                            <i className="fas fa-link text-[7px]"></i>
                            <span className="truncate uppercase">{item.url}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* FUTURE ROADMAP TOOLTIP */}
        <div className="bg-amber-100/50 border border-amber-200 rounded-2xl p-3 mb-4 flex items-center gap-4 text-left">
            <div className="bg-amber-500 text-white w-8 h-8 rounded-lg flex items-center justify-center shadow-md shrink-0">
                <i className="fas fa-chart-line text-xs"></i>
            </div>
            <div className="text-left">
                <p className="text-[13px] font-black text-amber-900 uppercase tracking-tight leading-none mb-1">Phase 2 Production: Sales Performance Monitoring</p>
                <p className="text-[11px] font-bold text-amber-700 uppercase tracking-widest leading-none">
                    Setelah E-commerce Production, sistem akan diintegrasikan dengan Dashboard Monitoring Penjualan & Stock Real-time.
                </p>
            </div>
        </div>

        {/* CAPACITY ALERT */}
        <div className="mt-auto bg-slate-900 rounded-2xl p-4 flex items-center justify-between shadow-xl border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"></div>
            <div className="relative flex items-center gap-4 text-left">
                <div className="flex items-center">
                    <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></div>
                    <div className="w-2.5 h-2.5 bg-red-600 rounded-full absolute"></div>
                </div>
                <div className="text-left leading-tight">
                    <p className="text-white text-[12px] font-black uppercase tracking-widest mb-1">
                        WARNING: KAPASITAS MENDEKATI LIMITASI MAKSIMAL
                    </p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                        Pertumbuhan data member & transaksi E-commerce memerlukan upgrade resource ke paket Paladin segera.
                    </p>
                </div>
            </div>
            <div className="relative text-white/20 font-black italic text-sm pr-2">V2 RESOURCE CRITICAL</div>
        </div>

      </div>

      {/* Bottom Bar - 70px */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-slate-50/80 backdrop-blur-md border-t border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-1px] left-0 h-[2px] bg-red-600 shadow-[0_0_10px_rgba(227,30,36,0.3)]" style={{ width: '48%' }}></div>
        <div className="flex gap-10 text-slate-500">
           <div className="flex items-center gap-2">
                <i className="fab fa-node-js text-green-600 text-lg"></i>
                <span className="text-[10px] font-black text-slate-600 tracking-widest uppercase">Node.js Engine</span>
           </div>
           <span className="text-[10px] font-black tracking-widest uppercase italic text-red-600">Ecosystem & Roadmap</span>
        </div>
        <div className="bg-slate-900 px-6 py-1.5 rounded-lg font-black italic shadow-md text-white text-xs tracking-tighter uppercase leading-none">V3.0</div>
      </div>
    </div>
  );
}