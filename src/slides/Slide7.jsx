import React from "react";

export default function Slide5() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-900 font-sans selection:bg-red-500/10 text-left">
      
      {/* Background Decorative */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/[0.03] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px]"></div>

      {/* Header - KONSISTEN LIGHT MODE */}
      <div className="absolute top-0 left-0 right-0 h-[85px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] shadow-md"></div>
        <div className="relative flex items-center gap-5">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30 text-white shadow-inner">
             <i className="fas fa-server text-2xl"></i>
          </div>
          <div className="text-left leading-none">
            <h1 className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md text-white">MAINTENANCE DOMAIN & HOSTING</h1>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold mt-1">Infrastructure Upgrade • Dewaweb Cloud Ecosystem</div>
          </div>
        </div>
        <div className="ml-auto bg-black/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white">
          Infrastruktur V3.0
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[85px] left-0 right-0 h-[565px] flex px-16 gap-8 items-center z-10 py-8">
        
        {/* LEFT: EXISTING (GUARDIAN) */}
        <div className="w-[42%] h-full flex flex-col">
          <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-7 h-full flex flex-col relative overflow-hidden shadow-sm opacity-80">
            <div className="absolute top-0 right-0 bg-slate-200 text-slate-600 text-[8px] font-black px-5 py-1.5 rounded-bl-xl uppercase tracking-[0.2em]">Current Package</div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white">
                <i className="fas fa-shield-alt text-lg"></i>
              </div>
              <div className="text-left leading-none">
                <h2 className="text-xl font-black text-slate-900 mb-1">GUARDIAN</h2>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest italic">Existing Platform</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 flex-1">
              <SpecItem label="Storage" value="30 GB NVME" />
              <SpecItem label="Memory" value="4 GB RAM" />
              <SpecItem label="CPU Cores" value="4 Cores" />
              <SpecItem label="Addon Domain" value="20 Domain" />
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200">
               <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Core Features:</div>
               <div className="flex flex-wrap gap-1.5">
                 <Badge text="SSL A+" />
                 <Badge text="Anti-DDoS" />
               </div>
            </div>
          </div>
        </div>

        {/* INDICATOR ARROW */}
        <div className="z-30">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <i className="fas fa-chevron-right text-white"></i>
          </div>
        </div>

        {/* RIGHT: UPGRADE PLAN (PALADIN) */}
        <div className="w-[48%] h-full flex flex-col">
          <div className="bg-white border-2 border-red-600 rounded-[2.5rem] p-7 h-full flex flex-col relative overflow-hidden shadow-2xl z-20 scale-105">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[8px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-[0.2em]">Strategic Upgrade</div>
            
            <div className="flex items-center gap-4 mb-4 text-left">
              <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/40">
                <i className="fas fa-crown text-xl"></i>
              </div>
              <div className="text-left leading-none">
                <h2 className="text-3xl font-black text-red-600 italic tracking-tighter mb-1">PALADIN</h2>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Scalable Cloud Hosting</p>
              </div>
            </div>

            {/* UPGRADED SPECS */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 flex-1">
              <SpecItem label="Storage" value="100 GB NVME" highlighted />
              <SpecItem label="Memory" value="8 GB RAM" highlighted />
              <SpecItem label="CPU Cores" value="8 Cores" highlighted />
              <SpecItem label="Addon Domain" value="UNLIMITED" highlighted />
              
              {/* TECHNICAL DEFINITION BOX */}
              <div className="col-span-2 grid grid-cols-2 gap-3 mt-1">
                <div className="bg-slate-900 p-3 rounded-xl border border-white/10 shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                        <i className="fas fa-bolt text-amber-400 text-[10px]"></i>
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">NVME Storage</span>
                    </div>
                    <p className="text-[9px] text-slate-200 font-medium leading-tight bold-italic">Teknologi penyimpanan 10x lebih cepat dari SSD biasa. Mempercepat loading database & transfer file sistem.</p>
                </div>
                <div className="bg-slate-900 p-3 rounded-xl border border-white/10 shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                        <i className="fas fa-microchip text-blue-400 text-[10px]"></i>
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">CPU Cores</span>
                    </div>
                    <p className="text-[9px] text-slate-200 font-medium leading-tight bold-italic">Otak pemrosesan server. Semakin banyak core, semakin banyak antrian transaksi yang bisa diproses serentak.</p>
                </div>
              </div>

              <div className="col-span-2 space-y-2 mt-1">
                <div className="bg-red-50 border border-red-100 p-4 rounded-2xl">
                  <div className="text-[10px] font-black text-red-600 uppercase mb-2 text-left">
                    Premium Paladin Benefits:
                  </div>
                  <div className="grid grid-cols-2 gap-y-1.5">
                    <SuccessPoint text="Daily & Weekly Backup" />
                    <SuccessPoint text="MailChannels SMTP" />
                    <SuccessPoint text="Premium Anti-DDoS" />
                    <SuccessPoint text="SpamExperts Security" />
                    <SuccessPoint text="Premium Addons" />
                    <SuccessPoint text="Domain Selamanya" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
               <div className="text-left leading-none">
                 <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Resource Boost</div>
                 <div className="text-lg font-black text-slate-900 italic uppercase leading-none">+300% Capacity</div>
               </div>
               <div className="bg-slate-900 text-white px-5 py-2 rounded-xl text-[11px] font-black italic shadow-lg flex items-center gap-2">
                  <i className="fas fa-rocket text-red-500"></i> READY TO MIGRATE
               </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar - KONSISTEN */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-slate-50/80 backdrop-blur-md border-t border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-1px] left-0 h-[3px] bg-red-600 shadow-[0_0_10px_rgba(227,30,36,0.3)]" style={{ width: '55.5%' }}></div>
        <div className="flex gap-10 text-slate-500">
           <span className="text-[11px] font-black tracking-widest uppercase">Maintenance Domain</span>
           <span className="text-[11px] font-black tracking-widest uppercase text-red-600 italic leading-none">Infrastructure Performance Roadmap</span>
        </div>
        <div className="bg-slate-900 px-7 py-2 rounded-lg font-black italic shadow-md text-white text-sm tracking-tighter leading-none uppercase">V3.0</div>
      </div>
    </div>
  );
}

/* SUB-COMPONENTS */

function SpecItem({ label, value, highlighted }) {
  return (
    <div className="text-left leading-none">
      <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">{label}</div>
      <div className={`text-base font-black tracking-tight ${highlighted ? 'text-red-600' : 'text-slate-800'}`}>{value}</div>
    </div>
  );
}

function Badge({ text }) {
  return (
    <span className="bg-slate-100 text-slate-500 text-[8px] font-black px-2 py-1 rounded-md border border-slate-200 uppercase tracking-tighter italic">
      {text}
    </span>
  );
}

function SuccessPoint({ text }) {
  return (
    <div className="flex items-center gap-2">
      <i className="fas fa-check-circle text-red-600 text-[10px]"></i>
      <span className="text-[9px] font-bold text-slate-700 uppercase tracking-tighter text-left leading-none whitespace-nowrap">{text}</span>
    </div>
  );
}