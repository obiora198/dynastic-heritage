// Enhanced Navbar.jsx
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#14325C] to-[#C1272D] flex items-center justify-center text-white font-bold text-lg shadow-md">
            DH
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm sm:text-base tracking-tight">
              DYNASTIC HERITAGE AFRICANA
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              Limited • RC 1216895
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="#home" className="hover:text-[#C1272D] transition-all duration-300 relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C1272D] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="hover:text-[#C1272D] transition-all duration-300 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C1272D] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#services" className="hover:text-[#C1272D] transition-all duration-300 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C1272D] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#corporate-info" className="hover:text-[#C1272D] transition-all duration-300 relative group">
            Corporate
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C1272D] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="hover:text-[#C1272D] transition-all duration-300 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C1272D] group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#14325C] to-[#1e4a8a] px-5 py-2.5 text-sm font-semibold text-white hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-md"
          >
            <span className="mr-2">📞</span>
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}