// Enhanced Hero.jsx with animations
export default function Hero() {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[1px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="w-2 h-2 bg-[#C1272D] rounded-full animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-slate-200">
              TRADING • TELECOM • LOGISTICS
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1272D] to-red-400 block">
              African Legacy
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            A diversified Nigerian enterprise delivering excellence in trading, telecommunications, 
            logistics, and project support services across multiple sectors.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <a
              href="#corporate-info"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#C1272D] to-red-600 px-8 py-4 text-base font-semibold text-white hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Corporate Details
              <span className="ml-2">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right Side - Simple visual element */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative opacity-0 animate-fade-in-right" style={{animationDelay: '0.5s'}}>
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-[#14325C]/30 to-[#C1272D]/30 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <div className="w-48 h-48 lg:w-60 lg:h-60 bg-gradient-to-br from-[#14325C] to-[#C1272D] rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white text-5xl lg:text-6xl font-bold">DH</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 opacity-0 animate-fade-in-up" style={{animationDelay: '1s'}}>
              <p className="text-slate-200 text-sm">Registered</p>
              <p className="text-[#C1272D] font-bold">RC 1216895</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}