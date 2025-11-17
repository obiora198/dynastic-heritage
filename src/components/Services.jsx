// Enhanced Services.jsx with scroll animations
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    title: "Entertainment & Fashion Promotion",
    desc: "Promotion and support services for entertainment brands, hair designers, fashion designers and creative entrepreneurs.",
    icon: "🎭",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "General Contracting & Project Support",
    desc: "Execution of general contracts and supply projects, including coordination of procurement, materials, logistics and vendor management.",
    icon: "🏗️",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Transportation & Haulage (Road)",
    desc: "Road transportation, light and heavy-duty haulage, logistics and cartage services for goods and passengers across Nigeria.",
    icon: "🚛",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Real Estate & Property Development",
    desc: "Acquisition, leasing, renovation and development of land and buildings for commercial, industrial and residential purposes.",
    icon: "🏢",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Import, Export & General Merchandise",
    desc: "Buying, selling, importing and exporting general goods, raw materials, beverages and finished consumer products.",
    icon: "🌍",
    image: "https://images.unsplash.com/photo-1565374397055-913de1b59d96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Beverages & Building Materials Distribution",
    desc: "Wholesale and retail distribution of beverages and a wide range of building materials across different markets.",
    icon: "🏭",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Telecommunication & ICT Services",
    desc: "Telecom and ICT support services including site and tower support, network cabling, equipment installation, site maintenance, ICT procurement and related digital infrastructure services.",
    icon: "📡",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
];

export default function Services() {
  const [sectionRef, sectionVisible] = useScrollAnimation();

  return (
    <div id="services" className="bg-slate-50 py-20 lg:py-28" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs uppercase tracking-widest text-[#C1272D] font-semibold transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Services
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4 transition-all duration-700 delay-200 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Comprehensive Business Solutions
          </h2>
          <p className={`text-lg text-slate-600 leading-relaxed transition-all duration-700 delay-300 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We provide diversified services across multiple sectors, delivering excellence 
            and reliability in every project we undertake.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-[#14325C]/20 ${
                sectionVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: sectionVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl shadow-lg">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#14325C] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#14325C] to-[#C1272D] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}