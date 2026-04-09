export default function Slide1() {
  return (
    <div className="w-[1280px] h-[720px] relative overflow-hidden bg-[#0f0f0f] text-white font-sans selection:bg-red-500/30">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px]"></div>

      {/* Header - Fixed Height: 90px */}
      <div className="absolute top-0 left-0 right-0 h-[90px] z-20 flex items-center px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#8b1216] opacity-95 shadow-xl"></div>
        <div className="relative flex items-center gap-5">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/30">
             <i className="fas fa-shield-alt text-2xl text-white"></i>
          </div>
          <div>
            <div className="text-2xl font-black tracking-tighter italic uppercase">Sistem Membership</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-semibold text-left">Corporate Infrastructure</div>
          </div>
        </div>
        <div className="ml-auto relative">
          <div className="bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-xs font-medium">
            UPGRADE <span className="text-red-400 font-bold">V2</span> <i className="fas fa-arrow-right mx-2 text-[10px]"></i> <span className="text-green-400 font-bold">V3</span>
            <span className="mx-3 text-white/30">|</span>
            INTEGRASI PROTEKSI BCA
          </div>
        </div>
      </div>

      {/* Content Area - Definitive Height Calculation */}
      {/* h = 720px - 90px (header) - 70px (bottom bar) = 560px */}
      <div className="absolute top-[90px] left-0 right-0 h-[560px] flex px-16 gap-16 items-center z-10">

        {/* Left Panel */}
        <div className="flex-[1.2] flex flex-col justify-center h-full py-4">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-[2px] w-10 bg-red-600"></div>
                <span className="text-red-500 font-bold tracking-[0.3em] text-[10px] uppercase">Project Roadmap 2026</span>
              </div>
              <h1 className="text-[52px] text-left font-black leading-[1.05] tracking-tight">
                Pengembangan <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  Sistem Membership
                </span>
                <br />
                <span className="text-white/90">V2 ke V3</span>
              </h1>
              <p className="mt-4 text-gray-400 text-base max-w-[480px] leading-relaxed border-l-2 border-red-600/30 pl-5 text-left">
                Integrasi Proteksi BCA, API Meta WhatsApp, Webhook Monitoring, dan Optimasi Notifikasi Email
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 max-w-[500px]">
              <Feature icon="fa-shield-alt" title="Proteksi BCA" desc="Security Layer" />
              <Feature icon="fa-message" title="API Meta" desc="Direct Integration" />
              <Feature icon="fa-database" title="Real-time" desc="Webhook Monitoring" />
              <Feature icon="fa-envelope" title="Email System" desc="Notification Opt." />
            </div>

            {/* Status Badge - Posisinya sekarang terkunci di atas bottom bar */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 p-1 pr-5 rounded-full group hover:border-red-500/50 transition-all">
                <div className="bg-red-600 p-1.5 rounded-full shadow-[0_0_10px_rgba(227,30,36,0.4)]">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-gray-300">
                  STATUS: <span className="text-white uppercase">Dalam Pengembangan Aktif</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Visual Area */}
        <div className="flex-1 flex items-center justify-center relative h-full">
          <div className="absolute w-[300px] h-[300px] bg-red-600/20 rounded-full blur-[80px] animate-pulse"></div>
          <div className="relative w-[400px] h-[400px] flex items-center justify-center scale-90">
            <div className="absolute w-[400px] h-[400px] border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-[340px] h-[340px] border border-red-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute w-[280px] h-[280px] border-2 border-red-600/40 rounded-full animate-[spin_10s_linear_infinite]"></div>
            
            <div className="relative group">
               <div className="absolute inset-0 bg-red-600 rounded-full blur-2xl opacity-40"></div>
               <div className="relative w-[180px] h-[180px] bg-gradient-to-br from-[#E31E24] via-[#c41a1f] to-[#8b1216] rounded-[40px] rotate-[15deg] flex flex-col items-center justify-center shadow-2xl border border-white/20 transform hover:rotate-0 transition-all duration-500">
                  <div className="-rotate-[15deg] group-hover:rotate-0 transition-all duration-500 flex flex-col items-center">
                    <i className="fas fa-users text-5xl mb-3 text-white"></i>
                    <span className="text-[10px] font-black tracking-[0.3em] text-white/90">MEMBERSHIP</span>
                    <div className="mt-2 h-[3px] w-8 bg-white/40 rounded-full"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Fixed Height: 70px */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-16 z-20">
        <div className="flex gap-10">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><i className="fas fa-calendar-alt text-red-500 text-xs"></i></div>
            <span className="text-[11px] font-bold tracking-widest text-gray-400">APRIL 2026</span>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><i className="fas fa-user text-red-500 text-xs"></i></div>
            <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">IT Development Team</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="text-[10px] font-bold text-gray-500 tracking-[0.2em]">DOCUMENT VERSION</div>
           <div className="bg-gradient-to-r from-red-600 to-red-800 px-6 py-1.5 rounded-md font-black italic shadow-lg text-sm uppercase">V3.0</div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-4 bg-white/[0.03] border border-white/5 p-4 rounded-xl">
      <div className="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center border border-red-600/20">
        <i className={`fas ${icon} text-red-500 text-lg`}></i>
      </div>
      <div className="text-left">
        <div className="text-sm font-bold text-white tracking-wide leading-none mb-1">{title}</div>
        <div className="text-[9px] font-medium text-gray-500 uppercase tracking-wider">{desc}</div>
      </div>
    </div>
  );
}