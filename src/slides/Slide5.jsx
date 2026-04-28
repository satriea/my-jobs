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
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-950 font-sans selection:bg-red-500/10">
      
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M10 10L90 90M90 10L10 90\' stroke=\'%23000\' stroke-width=\'0.3\'/%3E%3C/svg%3E")' }}></div>

      {/* Header - HIGH CONTRAST */}
      <div className="absolute top-0 left-0 right-0 h-[80px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#a5161a] shadow-xl"></div>
        <div className="relative flex items-center gap-4 text-left">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/40 text-white shadow-inner">
             <i className="fas fa-network-wired text-2xl"></i>
          </div>
          <div className="text-left leading-none">
            <h1 className="text-2xl font-black tracking-tighter italic uppercase text-white drop-shadow-md">EKOSISTEM DIGITAL EXISTING</h1>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white font-black mt-1">Infrastructure Load Analysis 2026</div>
          </div>
        </div>
        
        {/* DOMAIN INFO TAGS - BOLDER */}
        <div className="ml-auto flex gap-3">
          <div className="bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-left shadow-lg">
            <div className="text-[10px] font-black text-red-300 uppercase leading-none mb-1">Main Domain</div>
            <div className="text-[12px] font-black text-white leading-none">sinarmasselluler.com</div>
          </div>
          <div className="bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-left shadow-lg">
            <div className="text-[10px] font-black text-amber-300 uppercase leading-none mb-1">Addon Domain</div>
            <div className="text-[12px] font-black text-white leading-none">simassell.id</div>
          </div>
          <div className="bg-green-600/30 backdrop-blur-md px-4 py-2 rounded-lg border border-green-400/40 flex items-center gap-2 shadow-lg">
            <i className="fab fa-node-js text-green-400 font-black text-sm"></i>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Node.js</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[80px] left-0 right-0 h-[570px] flex flex-col px-16 z-10 py-2 text-left">
        
        {/* Intro Section - ULTRA BOLD */}
        <div className="flex justify-between items-start">
            <div className="max-w-3xl text-left">
                <h2 className="text-3xl font-black italic tracking-tighter text-slate-950 uppercase leading-none mb-1">
                    INFRASTRUKTUR <span className="text-red-600">GUARDIAN</span>
                </h2>
                <p className="text-slate-800 font-black text-lg leading-tight border-l-[6px] border-red-600 pl-4 uppercase tracking-tight">
                    Pusat kendali 6 platform utama Sinar Mas Selluler.
                </p>
            </div>
            
            <div className="bg-slate-100 border-2 border-slate-300 px-5 py-3 rounded-2xl flex items-center gap-4 shadow-md">
                <div className="w-8 h-8 rounded-full border-[4px] border-green-600 border-t-transparent animate-spin"></div>
                <div className="text-left leading-none">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Runtime Status</div>
                    <div className="text-[12px] font-black text-slate-950 tracking-tight text-nowrap">SERVER ALWAYS ONLINE</div>
                </div>
            </div>
        </div>

        {/* Platform Grid - HIGH CONTRAST CARDS */}
        <div className="grid grid-cols-3 gap-2 mb-6">
            {platforms.map((item, index) => (
                <div key={index} className={`group bg-white border-2 p-5 rounded-[2rem] flex flex-col gap-4 transition-all duration-300 border-b-[6px] shadow-sm ${item.highlight ? 'border-amber-500 bg-amber-50/50' : 'border-slate-200 hover:border-red-600 hover:shadow-xl'}`}>
                    <div className="flex justify-between items-center">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all ${item.highlight ? 'bg-amber-500 text-white' : 'bg-slate-900 text-white group-hover:bg-red-600'}`}>
                            <i className={`fas ${item.icon} text-xl`}></i>
                        </div>
                        <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm ${item.highlight ? 'bg-amber-200 text-amber-900 animate-pulse' : 'bg-slate-200 text-slate-800'}`}>
                            {item.status}
                        </span>
                    </div>
                    
                    <div className="text-left">
                        <div className="text-[15px] font-black uppercase text-slate-950 tracking-tight mb-2 leading-none">{item.name}</div>
                        <div className={`flex items-center gap-2 font-black text-[12px] p-2 px-3 rounded-xl border-2 ${item.highlight ? 'bg-white border-amber-300 text-amber-800' : 'bg-red-50 border-red-100 text-red-700'}`}>
                            <i className="fas fa-link text-[8px]"></i>
                            <span className="truncate uppercase">{item.url}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* FUTURE ROADMAP TOOLTIP - ULTRA BOLD */}
        <div className="bg-amber-100 border-[3px] border-amber-400 rounded-[2rem] p-2 mb-2 flex items-center gap-2 shadow-lg">
            <div className="bg-amber-600 text-white w-10 h-10 rounded-2xl flex items-center justify-center shadow-xl shrink-0">
                <i className="fas fa-chart-line text-lg"></i>
            </div>
            <div className="text-left">
                <p className="text-[15px] font-black text-amber-950 uppercase tracking-tight leading-none mb-1">Phase 2 Production: Sales Performance Monitoring</p>
                <p className="text-[12px] font-black text-amber-800 uppercase tracking-wide leading-tight">
                    Integrasi Dashboard Monitoring Penjualan & Stock Real-time segera setelah rilis E-commerce Production.
                </p>
            </div>
        </div>

        {/* CAPACITY ALERT - CRITICAL BOLD */}
        <div className="mt-auto bg-slate-950 rounded-[2rem] p-5 flex items-center justify-between shadow-2xl border-l-[12px] border-red-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
            <div className="relative flex items-center gap-5 text-left">
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                    <div className="w-4 h-4 bg-red-600 rounded-full absolute shadow-[0_0_15px_#f87171]"></div>
                </div>
                <div className="text-left leading-tight">
                    <p className="text-white text-[14px] font-black uppercase tracking-[0.1em] mb-1">
                        WARNING: KAPASITAS MENDEKATI LIMITASI MAKSIMAL
                    </p>
                    <p className="text-slate-300 text-[11px] font-black uppercase tracking-widest">
                        Pertumbuhan data member & transaksi E-commerce memerlukan upgrade segera ke paket Paladin.
                    </p>
                </div>
            </div>
            <div className="relative text-white/30 font-black italic text-xl pr-4 tracking-tighter">V2 CRITICAL</div>
        </div>

      </div>

      {/* Bottom Bar - BOLDER */}
      <div className="absolute bottom-0 left-0 right-0 h-[75px] bg-slate-100 border-t-[3px] border-slate-300 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-3px] left-0 h-[5px] bg-red-600 shadow-[0_0_15px_rgba(227,30,36,0.5)]" style={{ width: '48%' }}></div>
        <div className="flex gap-12 text-slate-900">
           <div className="flex items-center gap-3">
                <i className="fab fa-node-js text-green-700 text-2xl"></i>
                <span className="text-[12px] font-black tracking-widest uppercase">Node.js Performance Engine</span>
           </div>
           <span className="text-[12px] font-black tracking-widest uppercase italic text-red-600 underline underline-offset-4">Sinar Mas Selluler Ecosystem</span>
        </div>
        <div className="bg-slate-950 px-8 py-2.5 rounded-xl font-black italic shadow-2xl text-white text-sm tracking-tighter uppercase leading-none border border-white/20">V3.0</div>
      </div>
    </div>
  );
}