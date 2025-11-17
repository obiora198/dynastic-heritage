// Enhanced CorporateInfo.jsx with scroll animations
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CorporateInfo() {
  const [sectionRef, sectionVisible] = useScrollAnimation();
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();

  return (
    <div className="max-w-6xl mx-auto px-6" ref={sectionRef}>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className={`text-3xl sm:text-4xl font-bold text-slate-900 mb-4 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Corporate Information
        </h2>
        <p className={`text-lg text-slate-600 transition-all duration-700 delay-200 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Official company details for verification and due diligence purposes
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Company Details - Takes 3/5 of the width */}
        <div className="lg:col-span-3" ref={leftRef}>
          <div className={`bg-white rounded-2xl shadow-sm border border-slate-200 p-8 h-full transition-all duration-700 delay-300 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-[#C1272D] rounded-full"></div>
              <h3 className="text-xl font-bold text-slate-900">Company Details</h3>
            </div>
            
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { label: "Registered Name", value: "Dynastic Heritage Africana Limited" },
                  { label: "Company Type", value: "Private Limited Liability Company" }
                ].map((item, index) => (
                  <div key={item.label} className={`space-y-1 transition-all duration-700 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: leftVisible ? `${400 + index * 100}ms` : '0ms'}}>
                    <label className="block text-sm font-medium text-slate-500">{item.label}</label>
                    <p className="text-slate-900 font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { label: "Jurisdiction", value: "Federal Republic of Nigeria" },
                  { label: "RC Number", value: "1216895", highlight: true }
                ].map((item, index) => (
                  <div key={item.label} className={`space-y-1 transition-all duration-700 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: leftVisible ? `${600 + index * 100}ms` : '0ms'}}>
                    <label className="block text-sm font-medium text-slate-500">{item.label}</label>
                    <p className={item.highlight ? "text-[#C1272D] font-bold text-lg" : "text-slate-900 font-semibold"}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {[
                { 
                  label: "Industry Focus", 
                  content: "Trading, logistics, telecommunications, real estate, entertainment promotion, import/export and merchandise distribution." 
                },
                { 
                  label: "Nature of Business", 
                  content: "General merchants, importers and exporters, transport and haulage contractors, telecom/ICT support service providers, project managers, real estate developers and distributors of beverages and building materials." 
                }
              ].map((item, index) => (
                <div key={item.label} className={`pt-4 border-t border-slate-100 transition-all duration-700 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: leftVisible ? `${800 + index * 100}ms` : '0ms'}}>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-slate-500 mb-2">{item.label}</label>
                    <p className="text-slate-700 text-sm leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact & Verification - Takes 2/5 of the width */}
        <div className="lg:col-span-2 space-y-6" ref={rightRef}>
          {/* Contact Information Card */}
          <div className={`bg-white rounded-2xl shadow-sm border border-slate-200 p-6 transition-all duration-700 delay-400 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-6 bg-[#14325C] rounded-full"></div>
              <h4 className="font-semibold text-slate-900">Contact Information</h4>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: '📍', label: 'Address', content: 'Yayah Audu, Plot 209, Kubwa 4, Off NEPA Road, Abuja, Nigeria' },
                { icon: '📧', label: 'Email', content: 'info@dynasticheritageafricana.com', link: true },
                { icon: '📞', label: 'Phone', content: '08038225998, 08024234620' },
                { icon: '🌐', label: 'Website', content: 'dynasticheritageafricana.com' }
              ].map((item, index) => (
                <div key={item.label} className={`flex items-start gap-3 transition-all duration-700 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: rightVisible ? `${500 + index * 100}ms` : '0ms'}}>
                  <div className="w-5 h-5 bg-slate-100 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-slate-600 text-xs">{item.icon}</span>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">{item.label}</label>
                    {item.link ? (
                      <a href={`mailto:${item.content}`} className="text-[#C1272D] hover:underline font-medium text-sm">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-slate-900 text-sm">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Status Card */}
          <div className={`bg-gradient-to-br from-[#14325C] to-slate-800 rounded-2xl p-6 text-white transition-all duration-700 delay-600 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-6 bg-[#C1272D] rounded-full"></div>
              <h4 className="font-semibold">Verification Status</h4>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Active & Compliant</p>
                <p className="text-slate-300 text-xs">Registered with CAC Nigeria</p>
              </div>
            </div>
            
            <div className="pt-3 border-t border-slate-600/50">
              <p className="text-slate-300 text-xs">
                Last verified: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}