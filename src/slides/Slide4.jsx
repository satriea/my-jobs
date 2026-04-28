import React from "react";

export default function Slide4() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-950 font-sans selection:bg-red-500/10 text-left">
      
      {/* Background Decorative - Sangat Soft */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px]"></div>

      {/* Header - KONSISTEN LIGHT MODE */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] shadow-xl"></div>
        <div className="relative flex items-center gap-5">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30 text-white">
             <i className="fas fa-paper-plane text-2xl"></i>
          </div>
          <div className="text-left leading-none">
            <h1 className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md text-white text-left">PREVIEW NOTIFIKASI EMAIL</h1>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white font-black mt-1 text-left">Sinar Mas Selluler Service V3.0</div>
          </div>
        </div>
        <div className="ml-auto bg-black/20 backdrop-blur-md px-5 py-2.5 rounded-lg border border-white/20 text-[11px] font-black tracking-widest uppercase text-white shadow-lg">
          Hybrid Infrastructure
        </div>
      </div>

      {/* Full Content Area - Hanya Gambar dengan Alamat Pengirim */}
      <div className="absolute top-[90px] left-0 right-0 bottom-[70px] flex items-center justify-center p-12 z-10 py-16">
        <div className="relative w-full h-full max-w-4xl bg-white rounded-[2.5rem] border-4 border-slate-200 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex items-center justify-center group">
          
          {/* Label Preview & Sender Info - BOLDER */}
          <div className="absolute top-6 left-8 z-20 flex flex-col gap-3">
            <div className="bg-white/95 backdrop-blur-md px-5 py-2 rounded-full border-2 border-slate-200 shadow-md self-start">
               <span className="text-[11px] font-black uppercase tracking-widest text-slate-800">Live Email Template Design</span>
            </div>
            {/* ALAMAT EMAIL PENGIRIM */}
            <div className="bg-slate-950 px-5 py-3 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4">
               <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-at text-xs text-white"></i>
               </div>
               <div className="text-left leading-none">
                  <div className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-1">Sender Address:</div>
                  <div className="text-[14px] font-black text-white tracking-tight leading-none">noreply@sinarmasselluler.com</div>
               </div>
            </div>
          </div>

          {/* Menampilkan Gambar - DENGAN FILTER PERTAJAM */}
          <img 
            src="/emails.jpeg" 
            alt="Email Template V3" 
            className="w-full h-full object-contain object-top hover:scale-[1.03] transition-transform duration-1000 contrast-125 brightness-110 saturate-110"
          />

          {/* Efek Glass Overlay samar di bagian bawah */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-20"></div>
        </div>
      </div>

      {/* Bottom Bar - KONSISTEN LIGHT MODE */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-slate-100 backdrop-blur-md border-t-2 border-slate-200 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-2px] left-0 h-[4px] bg-red-600 shadow-[0_0_15px_rgba(227,30,36,0.5)]" style={{ width: '44.4%' }}></div>
        <div className="flex gap-12 text-slate-900 text-left">
           <span className="text-[12px] font-black tracking-widest uppercase">IT Development Team</span>
           <span className="text-[12px] font-black tracking-widest uppercase text-red-600 italic leading-none underline decoration-red-600 decoration-2 underline-offset-4">Official Release 2026</span>
        </div>
        <div className="bg-slate-950 px-8 py-2 rounded-lg font-black italic shadow-lg text-white text-sm uppercase tracking-tighter leading-none border border-white/10">V3.0</div>
      </div>
    </div>
  );
}