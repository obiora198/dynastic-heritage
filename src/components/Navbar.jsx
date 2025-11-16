export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-brand-accent/10 border border-brand-accent flex items-center justify-center text-brand-accent font-bold text-lg">
            DH
          </div>
          <div>
            <div className="font-semibold text-slate-900 text-sm sm:text-base">
              Dynastic Heritage Africana Limited
            </div>
            <div className="text-xs text-slate-500">
              Preserving Africa’s cultural legacy
            </div>
          </div>
        </div>

        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-700">
          <a href="#home" className="hover:text-brand-accent transition">Home</a>
          <a href="#about" className="hover:text-brand-accent transition">About</a>
          <a href="#services" className="hover:text-brand-accent transition">Services</a>
          <a href="#corporate-info" className="hover:text-brand-accent transition">Corporate Info</a>
          <a href="#contact" className="hover:text-brand-accent transition">Contact</a>
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-full border border-brand-accent px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-accent hover:bg-brand-accent hover:text-white transition"
        >
          Get in Touch
        </a>
      </nav>
    </header>
  );
}
