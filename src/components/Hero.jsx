export default function Hero() {
  return (
    <div className="bg-linear-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 lg:py-28 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-accent mb-3">
            CULTURE • HERITAGE • IDENTITY
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Preserving Africa’s past,
            <span className="text-brand-accent"> shaping its legacy</span>.
          </h1>
          <p className="text-sm sm:text-base text-slate-200 mb-6">
            Dynastic Heritage Africana Limited is dedicated to documenting,
            curating, and promoting Africa’s rich cultural and historical
            heritage through research, exhibitions, education, and strategic
            partnerships.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#corporate-info"
              className="inline-flex items-center rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-accent/90 transition"
            >
              View Corporate Details
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-white hover:text-slate-900 transition"
            >
              Our Services
            </a>
          </div>

          <div className="mt-6 text-xs text-slate-300">
            Suitable for corporate profiling, due diligence, and KYC checks.
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5 shadow-xl">
            <h2 className="text-sm font-semibold text-slate-100 mb-3">
              At a Glance
            </h2>
            <dl className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <dt className="text-slate-400">Registered Name</dt>
                <dd className="font-medium text-slate-100">
                  Dynastic Heritage Africana Limited
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-400">Jurisdiction</dt>
                <dd className="font-medium text-slate-100">Federal Republic of Nigeria</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-400">Business Focus</dt>
                <dd className="font-medium text-slate-100">
                  Cultural heritage, research & curation
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-400">Status</dt>
                <dd className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-300">
                  Active
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
