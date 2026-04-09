export default function Slide3() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-[#0f0f0f] text-white font-sans selection:bg-red-500/30">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px]"></div>

      {/* Header - KONSISTEN dengan Slide 1 & 2 */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-30 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] opacity-95 shadow-xl"></div>
        <div className="relative flex items-center gap-5">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30">
             <i className="fas fa-exchange-alt text-2xl text-white"></i>
          </div>
          <div className="text-left">
            <div className="text-2xl font-black tracking-tighter italic uppercase drop-shadow-md">PERBANDINGAN SISTEM</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-semibold">Membership V2 vs V3 Upgrade</div>
          </div>
        </div>
        <div className="ml-auto relative">
          <div className="bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-xs font-medium tracking-widest uppercase">
            Integrasi Proteksi BCA & Form Claim
          </div>
        </div>
      </div>

      {/* Main Content Area - Locked Height 560px */}
      <div className="absolute top-[90px] left-0 right-0 h-[560px] flex flex-col justify-center px-16 z-10">
        
        {/* Comparison Row - Height Restricted to 380px */}
        <div className="flex gap-8 items-stretch h-[380px]">
          
          {/* LEFT - V2 Card */}
          <ComparisonCard
            icon="fa-history"
            title="Membership V2 (Sebelumnya)"
            subtitle="Sistem Basic - Sebelum Upgrade"
            status="Status: Sistem Lama"
            statusColor="red"
            features={[
              "Sistem membership masih basic - Belum terintegrasi",
              "Belum ada data gender, tempat lahir, No. KTP",
              "Notifikasi hanya via WhatsApp saja",
              "Detail info belum menampilkan Member ID",
              "Claim proteksi belum ada - Form belum terstruktur",
              "Monitoring terbatas - Tracking belum real-time"
            ]}
            check={false}
          />

          {/* Versus Divider - Slimmer */}
          <div className="flex flex-col items-center justify-center">
            <div className="h-full w-[1px] bg-white/10"></div>
            <div className="my-2 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center italic font-black text-white/30 text-[10px] bg-black">
              VS
            </div>
            <div className="h-full w-[1px] bg-white/10"></div>
          </div>

          {/* RIGHT - V3 Card */}
          <ComparisonCard
            icon="fa-check-circle"
            title="Membership V3 (Saat Ini)"
            subtitle="Sistem Terintegrasi - Setelah Upgrade"
            status="Status: Sistem Baru"
            statusColor="green"
            features={[
              "Sistem membership lebih terintegrasi - Data lengkap",
              "Data pendukung claim lengkap (Identitas lengkap)",
              "Form input claim tersedia (CRM Kepala Toko)",
              "Notifikasi email real-time ke customer",
              "Monitoring claim real-time - Dashboard jelas",
              "Pengambilan data lebih cepat & terkontrol"
            ]}
            check={true}
            highlight={true}
          />
        </div>

        {/* Benefits Area - Fixed spacing from bottom bar */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          <Benefit icon="fa-hand-holding-heart" title="Mempermudah Proses Claim" desc="Proses klaim lebih cepat" />
          <Benefit icon="fa-shield-alt" title="Mengurangi Human Error" desc="Data lebih akurat" />
          <Benefit icon="fa-chart-line" title="Monitoring Transparan" desc="Real-time tracking" />
        </div>
      </div>

      {/* Bottom Bar - Fixed Height 70px */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-16 z-20">
        <div className="absolute top-0 left-0 h-[2px] bg-red-600 shadow-[0_0_10px_#E31E24]" style={{ width: '37.5%' }}></div>
        <div className="flex gap-10 text-gray-400">
          <div className="flex items-center gap-2">
            <i className="fas fa-calendar-alt text-red-500 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans">April 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-user text-red-500 text-xs"></i>
            <span className="text-[11px] font-bold tracking-widest uppercase font-sans">IT Development Team</span>
          </div>
        </div>
        <div className="bg-red-600 px-5 py-1 rounded text-sm font-black italic shadow-lg shadow-red-900/20 uppercase tracking-tighter">V3.0</div>
      </div>
    </div>
  );
}

/* Updated Comparison Card - More Compact */
function ComparisonCard({ icon, title, subtitle, features, status, statusColor, check, highlight }) {
  return (
    <div className={`flex-1 rounded-2xl p-5 border transition-all ${highlight ? 'bg-white/[0.05] border-red-500/30' : 'bg-white/[0.02] border-white/10'}`}>
      <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${statusColor === 'green' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
          <i className={`fas ${icon}`}></i>
        </div>
        <div className="text-left">
          <div className="font-bold text-base leading-none mb-1 uppercase tracking-tight">{title}</div>
          <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{subtitle}</div>
        </div>
      </div>

      <div className="space-y-2.5">
        {features.map((item, index) => (
          <div key={index} className="flex gap-3 items-start">
            <i className={`fas ${check ? "fa-check-circle text-green-500" : "fa-times-circle text-red-500/40"} text-[10px] mt-1`}></i>
            <p className="text-[12px] text-gray-400 text-left leading-tight">{item}</p>
          </div>
        ))}
      </div>

      <div className={`mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider border ${statusColor === 'green' ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${statusColor === 'green' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
        {status.toUpperCase()}
      </div>
    </div>
  );
}

/* Updated Benefit - More Compact */
function Benefit({ icon, title, desc }) {
  return (
    <div className="bg-white/[0.03] border border-white/5 rounded-xl p-3.5 flex items-center gap-4 hover:border-red-500/30 transition-all">
      <div className="w-9 h-9 rounded-lg bg-red-600/10 flex items-center justify-center text-red-500 border border-red-600/20 shadow-lg">
        <i className={`fas ${icon} text-sm`}></i>
      </div>
      <div className="text-left leading-tight">
        <h4 className="text-[12px] font-bold text-white uppercase mb-0.5 tracking-wide">{title}</h4>
        <p className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">{desc}</p>
      </div>
    </div>
  );
}