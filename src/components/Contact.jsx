// Enhanced Contact.jsx with scroll animations
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [sectionRef, sectionVisible] = useScrollAnimation();
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();

  return (
    <div className="max-w-7xl mx-auto px-6" ref={sectionRef}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className={`text-xs uppercase tracking-widest text-[#C1272D] font-semibold transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Get In Touch
        </span>
        <h2 className={`text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4 transition-all duration-700 delay-200 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Contact & Enquiries
        </h2>
        <p className={`text-lg text-slate-600 leading-relaxed transition-all duration-700 delay-300 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          For business enquiries, partnerships, logistics support, telecom
          services, supplies or general questions, please reach out using the
          details below.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 items-start">
        <div className="space-y-8" ref={leftRef}>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { 
                icon: "📧", 
                bgColor: "bg-[#14325C]/10", 
                title: "Email", 
                content: "info@dynasticheritageafricana.com",
                link: true
              },
              { 
                icon: "📞", 
                bgColor: "bg-[#C1272D]/10", 
                title: "Phone / WhatsApp", 
                content: "08038225998, 08024234620" 
              }
            ].map((item, index) => (
              <div key={item.title} className={`rounded-2xl bg-white p-6 shadow-lg border border-slate-200 transition-all duration-700 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: leftVisible ? `${400 + index * 100}ms` : '0ms'}}>
                <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                {item.link ? (
                  <a href={`mailto:${item.content}`} className="text-[#C1272D] hover:text-red-700 text-sm transition-colors">
                    {item.content}
                  </a>
                ) : (
                  <p className="text-slate-700 text-sm">{item.content}</p>
                )}
              </div>
            ))}
          </div>

          <div className={`rounded-2xl bg-white p-6 shadow-lg border border-slate-200 transition-all duration-700 delay-600 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Office Address</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Yayah Audu, Plot 209, Kubwa 4, Off NEPA Road, Abuja, Nigeria
            </p>
          </div>

          <div className={`rounded-2xl bg-gradient-to-br from-[#14325C] to-slate-800 p-8 text-white transition-all duration-700 delay-700 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-bold text-lg mb-4">Business Hours</h3>
            <div className="space-y-3 text-sm">
              {[
                { days: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                { days: 'Saturday', hours: '9:00 AM - 4:00 PM' },
                { days: 'Sunday', hours: 'Closed' }
              ].map((item, index) => (
                <div key={item.days} className={`flex justify-between transition-all duration-700 ${leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: leftVisible ? `${800 + index * 100}ms` : '0ms'}}>
                  <span className="text-slate-300">{item.days}</span>
                  <span className="font-semibold">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl border border-slate-200" ref={rightRef}>
          <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="w-2 h-8 bg-[#C1272D] rounded-full"></div>
            <h3 className="text-xl font-bold text-slate-900">Send us a Message</h3>
          </div>
          
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "This is a static demo form. Connect it to Netlify Forms or another handler for production."
              );
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { type: 'text', label: 'Full Name *', placeholder: 'Enter your full name', required: true },
                { type: 'email', label: 'Email Address *', placeholder: 'Enter your email', required: true }
              ].map((field, index) => (
                <div key={field.label} className={`transition-all duration-700 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: rightVisible ? `${300 + index * 100}ms` : '0ms'}}>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C1272D]/50 focus:border-[#C1272D] transition-all duration-300"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </div>
              ))}
            </div>

            <div className={`transition-all duration-700 delay-500 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C1272D]/50 focus:border-[#C1272D] transition-all duration-300"
                placeholder="What is this regarding?"
              />
            </div>

            <div className={`transition-all duration-700 delay-600 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Message *
              </label>
              <textarea
                rows="5"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C1272D]/50 focus:border-[#C1272D] transition-all duration-300"
                placeholder="Tell us about your enquiry..."
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#14325C] to-[#1e4a8a] px-6 py-4 text-base font-semibold text-white hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-md transition-all duration-700 delay-700 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Send Message
              <span className="ml-2">→</span>
            </button>

            <p className={`text-xs text-slate-500 text-center transition-all duration-700 delay-800 ${rightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Note: This is a static form. For production, connect it to a form
              handler such as Netlify Forms, Formspree or your own backend.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}