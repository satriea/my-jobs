export default function Slide4() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-[#0f0f0f] text-white font-sans selection:bg-red-500/30">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-600/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px]"></div>

      {/* Header - Konsisten dengan Slide 1, 2, 3 */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] opacity-95 shadow-xl"></div>
        <div className="relative flex items-center gap-5">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30">
             <i className="fab fa-whatsapp text-2xl text-white"></i>
          </div>
          <div className="text-left">
            <div className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md">DEVELOPMENT API META</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-semibold">Official WhatsApp Business Integration</div>
          </div>
        </div>
        <div className="ml-auto relative">
          <div className="bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase">
            Direct Meta Infrastructure • No Third Party
          </div>
        </div>
      </div>

      {/* Main Content Area - Locked Height 560px (720 - 90 header - 70 footer) */}
      <div className="absolute top-[90px] left-0 right-0 h-[560px] flex px-16 gap-10 items-center z-10">

        {/* Left Panel - Strategic Objective */}
        <div className="w-[30%]">
          <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
            <div className="bg-white/[0.03] backdrop-blur-xl rounded-[23px] p-6 border border-white/5">
              <div className="flex items-center gap-4 mb-5 border-b border-white/10 pb-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center text-red-500 shadow-inner">
                  <i className="fas fa-bullseye text-lg"></i>
                </div>
                <div className="text-left">
                  <div className="font-black uppercase tracking-tight text-lg leading-none mb-1">Tujuan</div>
                  <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest text-left">Strategic Goal</div>
                </div>
              </div>

              <p className="text-[13px] text-gray-400 mb-6 leading-relaxed text-left font-medium">
                Menghilangkan ketergantungan pihak ke-3 WhatsApp (Watzap.id) dan langsung terhubung ke infrastruktur API Meta.
              </p>

              <div className="space-y-3">
                <Objective text="WhatsApp Business API resmi" />
                <Objective text="Tanpa pihak ke-3" />
                <Objective text="Sistem lebih fleksibel" />
                <Objective text="Kontrol penuh pada server" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Grid System - Optimized Space */}
        <div className="flex-1 flex flex-col justify-center gap-4 h-full py-4">
          
        {/* Comparison Section - Split 2 Columns */}
        <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 shadow-inner">
          <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-2">
            <div className="w-7 h-7 bg-red-600/20 rounded-lg flex items-center justify-center text-red-500">
              <i className="fas fa-exchange-alt text-xs"></i>
            </div>
            <div className="font-black text-[11px] uppercase tracking-widest text-left text-white/90">Analisis Perubahan Arsitektur</div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            
            {/* Kolom Kiri - Kondisi Sebelumnya */}
            <div className="space-y-2">
              <div className="text-[10px] font-black text-red-500 uppercase tracking-tighter mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                Kondisi Sebelumnya (V2)
              </div>
              <div className="space-y-1.5">
                <OldCondition text="WhatsApp menggunakan pihak ke-3 (bergantung pada vendor)" />
                <OldCondition text="Biaya per tahun (Rp. 1.200.000)" />
                <OldCondition text="Sistem kurang fleksibel" />
                <OldCondition text="Integrasi terbatas" />
                <OldCondition text="Nomor official tidak terdaftar WA Bisnis" />
                <OldCondition text="Sering maintenance & error tiba-tiba" />
              </div>
            </div>

            {/* Kolom Kanan - Keuntungan Mandiri */}
            <div className="space-y-2">
              <div className="text-[10px] font-black text-green-500 uppercase tracking-tighter mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                Keuntungan Arsitektur Mandiri (V3)
              </div>
              <div className="space-y-1.5">
                <Benefit text="Lebih stabil & aman - Direct Official API Meta" />
                <Benefit text="Kontrol penuh server tanpa limitasi vendor" />
                <Benefit text="Sangat fleksibel & scalable (Custom Dev)" />
                <Benefit text="Pengiriman real-time (Latency Minimal)" />
                <Benefit text="Template terverifikasi - Minim risiko blokir" />
                <Benefit text="Official Meta Infrastructure 100%" />
              </div>
            </div>

          </div>
        </div>

          {/* Biaya Section - Table Style */}
          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                  <i className="fas fa-receipt text-xs"></i>
                </div>
                <div className="font-black text-[11px] uppercase tracking-widest text-left text-white/90">Pricing Structure (Estimation)</div>
              </div>
              <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded">IDR</div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <Cost title="Template Marketing" price="Rp 600" desc="Broadcast & Promo" />
              <Cost title="Template Utilitas" price="Rp 350" desc="Transaction & Info" />
              <Cost title="Verification" price="Rp 400" desc="Auth & Security" />
              <Cost title="OTP System" price="Rp 400" desc="One-Time Password" />
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar - Konsisten */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-16 z-20">
        <div className="absolute top-0 left-0 h-[2px] bg-red-600 shadow-[0_0_10px_#E31E24]" style={{ width: '44.4%' }}></div>
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

function Objective({ text }) {
  return (
    <div className="flex gap-3 items-center group">
      <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500 transition-colors">
        <i className="fas fa-check text-[8px] text-red-500 group-hover:text-white"></i>
      </div>
      <div className="text-[12px] text-gray-300 font-medium group-hover:text-white transition-colors text-left">{text}</div>
    </div>
  );
}

function Benefit({ text }) {
  return (
    <div className="flex gap-3 items-center bg-white/[0.02] border border-white/5 p-1.5 px-3 rounded-lg hover:bg-white/[0.05] transition-all">
      <i className="fas fa-check-double text-green-500 text-[10px]"></i>
      <div className="text-[11px] text-gray-400 font-medium text-left leading-tight">{text}</div>
    </div>
  );
}

function Cost({ title, price, desc }) {
  return (
    <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 p-2.5 px-4 rounded-xl hover:border-red-500/30 transition-all group">
      <div className="text-left">
        <div className="text-[10px] font-bold text-white uppercase tracking-tight leading-none mb-1 group-hover:text-red-400 transition-colors">{title}</div>
        <div className="text-[8px] text-gray-500 uppercase font-black tracking-widest leading-none">{desc}</div>
      </div>
      <div className="text-right">
        <div className="text-red-500 font-black text-[13px] tracking-tight">{price}</div>
        <div className="text-[7px] text-white/20 uppercase font-bold leading-none">/ unit</div>
      </div>
    </div>
  );
}

{/* Tambahkan Component ini di bawah atau di luar Slide5/Slide6 function agar rapi */}
function OldCondition({ text }) {
  return (
    <div className="flex gap-2 items-start bg-red-500/5 border border-red-500/10 p-1.5 px-3 rounded-lg group">
      <i className="fas fa-times-circle text-red-500 text-[10px] mt-1 opacity-50 group-hover:opacity-100 transition-opacity"></i>
      <div className="text-[10px] text-gray-400 font-medium text-left leading-tight group-hover:text-gray-200 transition-colors">{text}</div>
    </div>
  );
}