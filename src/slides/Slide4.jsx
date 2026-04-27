import React from "react";

export default function Slide4() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-900 font-sans">
      
      {/* Background Decorative - Sangat Soft */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px]"></div>

      {/* Header - KONSISTEN LIGHT MODE */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] shadow-md"></div>
        <div className="relative flex items-center gap-5">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30 text-white">
             <i className="fas fa-paper-plane text-2xl"></i>
          </div>
          <div className="text-left leading-none">
            <h1 className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md text-white text-left">PREVIEW NOTIFIKASI EMAIL</h1>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold mt-1 text-left">Sinar Mas Selluler Service V3.0</div>
          </div>
        </div>
        <div className="ml-auto bg-black/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-[10px] font-bold tracking-widest uppercase text-white">
          Hybrid Infrastructure
        </div>
      </div>

      {/* Full Content Area - Hanya Gambar dengan Alamat Pengirim */}
      <div className="absolute top-[90px] left-0 right-0 bottom-[70px] flex items-center justify-center p-12 z-10">
        <div className="relative w-full h-full max-w-4xl bg-slate-50 rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-2xl flex items-center justify-center group">
          
          {/* Label Preview & Sender Info */}
          <div className="absolute top-6 left-8 z-20 flex flex-col gap-2">
            <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-sm self-start">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-700">Live Email Template Design</span>
            </div>
            {/* ALAMAT EMAIL PENGIRIM */}
            <div className="bg-slate-900 px-4 py-2 rounded-2xl shadow-lg border border-white/10 flex items-center gap-3">
               <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-at text-[10px] text-white"></i>
               </div>
               <div className="text-left leading-none">
                  <div className="text-[8px] font-black text-red-500 uppercase tracking-widest">Sender Address:</div>
                  <div className="text-[12px] font-bold text-white tracking-tight">noreply@sinarmasselluler.com</div>
               </div>
            </div>
          </div>

          {/* Menampilkan Gambar */}
          <img 
            src="/emails.jpeg" 
            alt="Email Template V3" 
            className="w-full h-full object-contain object-top hover:scale-[1.02] transition-transform duration-700"
          />

          {/* Efek Glass Overlay samar di bagian bawah */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 to-transparent z-20"></div>
        </div>
      </div>

      {/* Bottom Bar - KONSISTEN LIGHT MODE */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-slate-50/80 backdrop-blur-md border-t border-slate-200 flex items-center justify-between px-16 z-20">
        <div className="absolute top-[-1px] left-0 h-[3px] bg-red-600 shadow-[0_0_10px_rgba(227,30,36,0.3)]" style={{ width: '44.4%' }}></div>
        <div className="flex gap-10 text-slate-500 text-left">
           <span className="text-[11px] font-black tracking-widest uppercase">IT Development</span>
           <span className="text-[11px] font-black tracking-widest uppercase text-red-600 italic leading-none">Official Release 2026</span>
        </div>
        <div className="bg-slate-900 px-7 py-2 rounded-lg font-black italic shadow-md text-white text-sm uppercase tracking-tighter leading-none">V3.0</div>
      </div>
    </div>
  );
}