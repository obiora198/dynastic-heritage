// Enhanced About.jsx with scroll animations
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [sectionRef, sectionVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  return (
    <div id="about" className="bg-white py-20 lg:py-28" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className={`space-y-4 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-xs uppercase tracking-widest text-[#C1272D] font-semibold">
                About Our Company
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Building Legacy Through <span className="text-[#14325C]">Diversified Excellence</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className={`text-lg transition-all duration-700 delay-200 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Dynastic Heritage Africana Limited is a Nigerian private limited liability company 
                established to operate as a diversified trading, logistics, services and project 
                support organisation.
              </p>
              
              <p className={`transition-all duration-700 delay-300 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Our business spans entertainment and fashion promotion, general contracting, 
                transportation and haulage, real estate and property development, import/export 
                of goods, distribution of beverages and building materials, and telecommunication/ICT 
                support services.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 pt-4" ref={statsRef}>
              <div className={`flex items-center gap-3 transition-all duration-700 delay-400 ${statsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="w-10 h-10 bg-[#14325C] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">10+</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Years Experience</p>
                  <p className="text-slate-600 text-sm">Industry expertise</p>
                </div>
              </div>
              
              <div className={`flex items-center gap-3 transition-all duration-700 delay-500 ${statsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="w-10 h-10 bg-[#C1272D] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">50+</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Projects</p>
                  <p className="text-slate-600 text-sm">Completed successfully</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative" ref={imageRef}>
            <div className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 delay-300 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Business team meeting"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className={`absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg border border-slate-200 transition-all duration-700 delay-700 ${imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#14325C] to-[#C1272D] rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">✓</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Trusted Partner</p>
                  <p className="text-slate-600 text-sm">Since 2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}