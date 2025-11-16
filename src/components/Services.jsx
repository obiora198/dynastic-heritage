const services = [
  {
    title: "Cultural Research & Documentation",
    desc: "Fieldwork, interviews, and archival research focused on African history, heritage sites, oral traditions, and community memory.",
  },
  {
    title: "Heritage Curation & Exhibitions",
    desc: "Design and curation of exhibitions, heritage displays, and cultural experiences for institutions, galleries, and public spaces.",
  },
  {
    title: "Advisory & Consultancy",
    desc: "Strategic advisory to governments, organisations, and cultural projects on heritage preservation, branding, and policy alignment.",
  },
  {
    title: "Training & Capacity Building",
    desc: "Workshops and training programmes on documentation, archiving, storytelling, and heritage management.",
  },
  {
    title: "Digital Archiving & Storytelling",
    desc: "Support for digitising cultural assets and creating multimedia narratives that travel beyond physical borders.",
  },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">
          What We Do
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          We partner with communities, institutions, and brands to protect and
          present African heritage in meaningful and sustainable ways.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-sm font-semibold text-slate-900 mb-2">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
