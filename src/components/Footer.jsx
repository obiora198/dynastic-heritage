// Enhanced Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#14325C] to-[#C1272D] flex items-center justify-center text-white font-bold text-lg">
                DH
              </div>
              <div>
                <div className="font-bold text-white text-lg">Dynastic Heritage Africana</div>
                <div className="text-slate-400 text-sm">Limited • RC 1216895</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              A diversified Nigerian company delivering excellence in trading, telecommunications, 
              logistics, and project support services across multiple sectors.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              {['About', 'Services', 'Corporate Info', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block text-slate-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div>📧 info@dynasticheritageafricana.com</div>
              <div>📞 08038225998, 08024234620</div>
              <div>📍 Yayah Audu, Plot 209, Kubwa 4, Abuja</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Dynastic Heritage Africana Limited. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Designed & developed by{" "}
            <span className="font-medium text-white">Obiora Emmanuel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}