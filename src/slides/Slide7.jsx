import React from "react";

export default function Slide5() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-950 font-sans selection:bg-red-500/10 text-left">
      
      {/* Background Decorative */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/[0.04] rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px]"></div>

      {/* Header - HIGH CONTRAST */}
      <div className="absolute top-0 left-0 right-0 h-[85px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#a5161a] shadow-xl"></div>
        <div className="relative flex items-center gap-5 text-white">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/40 shadow-inner">
             <i className="fas fa-server text-2xl"></i>
          </div>
          <div className="text-left leading-none">
            <h1 className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md">MAINTENANCE DOMAIN & HOSTING</h1>
            <div className="text-[10px] uppercase tracking-[0.2em] font-black opacity-90 mt-1">Infrastructure Upgrade • Dewaweb Cloud Ecosystem</div>
          </div>
        </div>
        <div className="ml-auto bg-black/30 backdrop-blur-md px-5 py-2 rounded-lg border border-white/20 text-[11px] font-black tracking-widest uppercase text-white shadow-lg">
          Infrastruktur V3.0
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[85px] left-0 right-0 h-[565px] flex px-16 gap-8 items-center z-10 py-8">
        
        {/* LEFT: EXISTING (GUARDIAN) */}
        <div className="w-[42%] h-full flex flex-col">
          <div className="bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] p-7 h-full flex flex-col relative overflow-hidden opacity-70">
            <div className="absolute top-0 right-0 bg-slate-300 text-slate-800 text-[9px] font-black px-5 py-1.5 rounded-bl-xl uppercase tracking-[0.2em]">Current Package</div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                <i className="fas fa-shield-alt text-lg"></i>
              </div>
              <div className="text-left leading-none">
                <h2 className="text-xl font-black text-slate-950 mb-1">GUARDIAN</h2>
                <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest italic">Existing Platform</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5 flex-1">
              <SpecItem label="Storage" value="30 GB NVME" />
              <SpecItem label="Memory" value="4 GB RAM" />
              <SpecItem label="CPU Cores" value="4 Cores" />
              <SpecItem label="Addon Domain" value="20 Domain" />
            </div>

            <div className="mt-4 pt-4 border-t-2 border-slate-200">
               <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Core Features:</div>
               <div className="flex flex-wrap gap-2">
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
          <div className="bg-white border-[3px] border-red-600 rounded-[2.5rem] p-7 h-full flex flex-col relative overflow-hidden shadow-[0_20px_50px_rgba(227,30,36,0.1)] z-20 scale-105">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-[0.2em]">Strategic Upgrade</div>
            
            <div className="flex items-center gap-4 mb-5 text-left">
              <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-500/40">
                <i className="fas fa-crown text-xl"></i>
              </div>
              <div className="text-left leading-none">
                <h2 className="text-3xl font-black text-red-600 italic tracking-tighter mb-1 uppercase">PALADIN</h2>
                <p className="text-[11px] text-slate-500 font-black uppercase tracking-widest">Scalable Cloud Hosting</p>
              </div>
            </div>

            {/* UPGRADED SPECS */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 flex-1">
              <SpecItem label="Storage" value="100 GB NVME" highlighted />
              <SpecItem label="Memory" value="8 GB RAM" highlighted />
              <SpecItem label="CPU Cores" value="8 Cores" highlighted />
              <SpecItem label="Addon Domain" value="UNLIMITED" highlighted />
              
              {/* TECHNICAL DEFINITION BOX - HIGH CONTRAST */}
              <div className="col-span-2 grid grid-cols-2 gap-3">
                <div className="bg-slate-950 p-3.5 rounded-2xl border border-white/10 shadow-xl">
                    <div className="flex items-center gap-2 mb-1.5">
                        <i className="fas fa-bolt text-amber-400 text-[11px]"></i>
                        <span className="text-[11px] font-black text-white uppercase tracking-widest">NVME Storage</span>
                    </div>
                    <p className="text-[10px] text-slate-200 font-black leading-tight italic">Teknologi penyimpanan 10x lebih cepat. Mempercepat loading database & transfer file sistem.</p>
                </div>
                <div className="bg-slate-950 p-3.5 rounded-2xl border border-white/10 shadow-xl">
                    <div className="flex items-center gap-2 mb-1.5">
                        <i className="fas fa-microchip text-blue-400 text-[11px]"></i>
                        <span className="text-[11px] font-black text-white uppercase tracking-widest">CPU Cores</span>
                    </div>
                    <p className="text-[10px] text-slate-200 font-black leading-tight italic">Otak pemrosesan server. Menangani antrian transaksi serentak tanpa risiko crash.</p>
                </div>
              </div>

              <div className="col-span-2 space-y-2">
                <div className="bg-red-50 border-2 border-red-100 p-4 rounded-2xl shadow-sm">
                  <div className="text-[11px] font-black text-red-600 uppercase mb-3 text-left tracking-widest">
                    Premium Paladin Benefits:
                  </div>
                  <div className="grid grid-cols-2 gap-y-2">
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

            <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between">
               <div className="text-left leading-none">
                 <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Resource Boost</div>
                 <div className="text-xl font-black text-slate-950 italic uppercase leading-none">+300% Capacity</div>
               </div>
               <div className="bg-slate-950 text-white px-6 py-2.5 rounded-xl text-[12px] font-black italic shadow-xl flex items-center gap-2">
                  <i className="fas fa-rocket text-red-500"></i> READY TO MIGRATE
               </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar - BOLD & CONSISTENT */}
      <div className="absolute bottom-0 left-0 right-0 h-[75px] bg-slate-100 border-t-2 border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-2px] left-0 h-[4px] bg-red-600 shadow-[0_0_15px_rgba(227,30,36,0.4)]" style={{ width: '55.5%' }}></div>
        <div className="flex gap-12 text-slate-950">
           <span className="text-[12px] font-black tracking-widest uppercase">Maintenance Domain</span>
           <span className="text-[12px] font-black tracking-widest uppercase text-red-600 italic leading-none underline underline-offset-4">Performance Roadmap</span>
        </div>
        <div className="bg-slate-950 px-8 py-2.5 rounded-lg font-black italic shadow-lg text-white text-sm tracking-tighter uppercase leading-none">V3.0</div>
      </div>
    </div>
  );
}

/* SUB-COMPONENTS */

function SpecItem({ label, value, highlighted }) {
  return (
    <div className="text-left leading-none">
      <div className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2">{label}</div>
      <div className={`text-lg font-black tracking-tight ${highlighted ? 'text-red-600' : 'text-slate-950'}`}>{value}</div>
    </div>
  );
}

function Badge({ text }) {
  return (
    <span className="bg-slate-200 text-slate-800 text-[9px] font-black px-3 py-1.5 rounded-lg border-2 border-slate-300 uppercase tracking-tighter italic">
      {text}
    </span>
  );
}

function SuccessPoint({ text }) {
  return (
    <div className="flex items-center gap-3">
      <i className="fas fa-check-circle text-red-600 text-[11px]"></i>
      <span className="text-[10px] font-black text-slate-900 uppercase tracking-tight text-left leading-none whitespace-nowrap">{text}</span>
    </div>
  );
}