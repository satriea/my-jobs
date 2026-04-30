import React from "react";

export default function Slide6CostComparison() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-white text-slate-950 font-sans selection:bg-red-500/10 text-left">
      
      {/* Background Decorative */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/[0.04] rounded-full blur-[120px]"></div>

      {/* Header - ULTRA HIGH CONTRAST */}
      <div className="absolute top-0 left-0 right-0 h-[80px] z-30 flex items-center px-12 text-left">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#a5161a] shadow-xl"></div>
        <div className="relative flex items-center gap-4 text-white">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border-2 border-white/40 shadow-inner">
             <i className="fas fa-balance-scale text-2xl"></i>
          </div>
          <div className="text-left leading-none">
            <h1 className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md">ANALISIS & OPSI EFISIENSI BIAYA</h1>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white font-black mt-1">Evaluasi Finansial Berdasarkan Data Historis Jan - Mar 2026</div>
          </div>
        </div>
        <div className="ml-auto bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-lg border-2 border-white/20 text-[11px] font-black tracking-widest uppercase text-white shadow-lg">
          Strategic Operational V3.0
        </div>
      </div>

      {/* Main Content Area */}
      <div className="absolute top-[80px] left-0 right-0 h-[570px] flex flex-col px-16 z-10 py-2">
        
        {/* TOP SECTION: THE DATA TABLE (ULTRA THICK) */}
        <div className="bg-white border-[3px] border-slate-950 rounded-[1.5rem] overflow-hidden shadow-2xl mb-2">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 text-white text-[12px] uppercase tracking-widest">
                <th className="p-4 pl-8 border-r border-white/20 italic font-black text-left">Template Category</th>
                <th className="p-4 border-r border-white/20 text-center font-black">Harga</th>
                <th className="p-4 border-r border-white/20 text-center bg-red-800 font-black">Member (7.461)</th>
                <th className="p-4 border-r border-white/20 text-center bg-red-800 font-black text-nowrap">IMEI Scan (8.440)</th>
                <th className="p-4 text-center bg-red-800 font-black">Proteksi (3.614)</th>
              </tr>
            </thead>
            <tbody className="text-[14px] font-black">
              <tr className="border-b-2 border-slate-200 bg-slate-100/50 text-slate-800">
                <td className="p-3 pl-8 uppercase tracking-tight">Marketing Template</td>
                <td className="p-3 text-center border-x-2 border-slate-200">Rp 580</td>
                <td className="p-3 text-center border-r-2 border-slate-200">Rp 4.327.187</td>
                <td className="p-3 text-center border-r-2 border-slate-200">Rp 4.895.200</td>
                <td className="p-3 text-center">Rp 2.096.313</td>
              </tr>
              <tr className="border-b-2 border-slate-950 text-green-900 bg-green-50">
                <td className="p-3 pl-8 uppercase tracking-tight italic">Utility Template (Recommended)</td>
                <td className="p-3 text-center border-x-2 border-slate-200 text-slate-950">Rp 350</td>
                <td className="p-3 text-center border-r-2 border-slate-200">Rp 2.611.233</td>
                <td className="p-3 text-center border-r-2 border-slate-200">Rp 2.954.000</td>
                <td className="p-3 text-center font-black text-nowrap">Rp 1.265.017</td>
              </tr>
              <tr className="bg-yellow-400 text-slate-950">
                <td className="p-4 pl-8 font-black uppercase italic text-[14px]">Gap Penghematan (Per Bulan)</td>
                <td className="p-4 text-center border-x-2 border-black/20 font-black">—</td>
                <td className="p-4 text-center font-black text-xl italic tracking-tighter">Rp 1.715.953</td>
                <td className="p-4 text-center font-black text-xl italic tracking-tighter">Rp 1.941.200</td>
                <td className="p-4 text-center font-black text-xl italic tracking-tighter">Rp 831.297</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* BOTTOM SECTION: STRATEGIC OPTIONS */}
        <div className="grid grid-cols-2 gap-8 items-start text-left">
            <div className="space-y-4">
               <OptionItem 
                  num="1" 
                  title="Full Member Notification" 
                  desc="Biaya operasional bersifat progresif; meningkat signifikan seiring pertumbuhan database member." 
               />
               <OptionItem 
                  num="2" 
                  title="IMEI-Based Notification" 
                  desc="Kurang efisien secara karena volume IMEI > jumlah Member (Rasio 1:2)." 
               />
               <OptionItem 
                  num="3" 
                  title="Protection & Tiering Focus" 
                  desc="Hanya member Diamond/Platinum dengan produk Proteksi yang menerima WA. Efisiensi tertinggi." 
                  isRecommended
               />
            </div>

            <div className="flex flex-col gap-4 text-left">
                <div className="bg-slate-950 rounded-[2rem] p-6 border-l-[14px] border-red-600 shadow-2xl">
                    <p className="text-green-400 text-[12px] font-black uppercase tracking-[0.2em] mb-4 text-left">Hybrid Notification Policy:</p>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between bg-white/10 p-4 px-6 rounded-2xl border-2 border-white/10 shadow-inner">
                            <span className="text-white text-[12px] font-black uppercase tracking-tight">Member Umum / Idle</span>
                            <span className="text-blue-400 font-black text-[12px] italic underline underline-offset-4 uppercase">Email Only (Free)</span>
                        </div>
                        <div className="flex items-center justify-between bg-white/10 p-4 px-6 rounded-2xl border-2 border-white/10 shadow-inner">
                            <span className="text-white text-[12px] font-black uppercase tracking-tight text-left">Diamond & Platinum Protection</span>
                            <span className="text-green-400 font-black text-[12px] italic text-right leading-none uppercase tracking-tighter bg-green-400/20 px-3 py-1.5 rounded-lg border border-green-400/30">Email + WA (Official)</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-4 px-5">
                  <i className="fas fa-info-circle text-red-600 text-lg mt-1"></i>
                  <p className="text-[12px] text-slate-950 font-black leading-relaxed text-left uppercase tracking-tight italic">
                    Strategi ini menjamin efisiensi budget operasional tanpa mengurangi kualitas layanan pada segmen customer prioritas.
                  </p>
                </div>
            </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[75px] bg-slate-100 border-t-[3px] border-slate-300 flex items-center justify-between px-16 z-20 text-left">
        <div className="absolute top-[-3px] left-0 h-[5px] bg-red-600 shadow-[0_0_15px_rgba(227,30,36,0.5)]" style={{ width: '88.8%' }}></div>
        <div className="flex gap-12 text-slate-950">
           <span className="text-[13px] font-black tracking-widest uppercase italic leading-none">Decision Support Matrix - Sinar Mas Selluler V3.0</span>
        </div>
        <div className="bg-slate-950 px-8 py-3 rounded-xl font-black italic shadow-2xl text-white text-sm tracking-tighter uppercase leading-none border-2 border-white/10">WORTH IT</div>
      </div>
    </div>
  );
}

function OptionItem({ num, title, desc, isRecommended }) {
    return (
        <div className={`p-4 px-6 rounded-[1.8rem] border-[3px] transition-all text-left ${isRecommended ? 'bg-red-50 border-red-600 shadow-xl scale-[1.03]' : 'bg-white border-slate-100 opacity-70'}`}>
            <div className="flex items-center gap-4 mb-2 text-left">
                <span className={`text-[14px] font-black ${isRecommended ? 'text-red-700' : 'text-slate-600'}`}>{num}.</span>
                <h4 className={`text-[14px] font-black uppercase tracking-tight ${isRecommended ? 'text-slate-950' : 'text-slate-600'}`}>
                    {title} {isRecommended && <span className="ml-2 bg-red-600 text-white text-[9px] px-3 py-1 rounded-full italic uppercase shadow-md">Recommended</span>}
                </h4>
            </div>
            <p className={`text-[11px] font-black leading-snug text-left uppercase tracking-tighter italic ${isRecommended ? 'text-slate-800' : 'text-slate-400'}`}>
              {desc}
            </p>
        </div>
    );
}