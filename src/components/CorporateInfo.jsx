export default function CorporateInfo() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
        Corporate Information
      </h2>
      <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-2xl">
        The following information is provided to support due diligence, vendor
        onboarding, and KYC (Know Your Customer) verification processes.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2 text-sm text-slate-800">
          <div>
            <span className="font-semibold text-slate-900">Registered Name:</span>{" "}
            Dynastic Heritage Africana Limited
          </div>
          <div>
            <span className="font-semibold text-slate-900">Jurisdiction:</span>{" "}
            Federal Republic of Nigeria
          </div>
          <div>
            <span className="font-semibold text-slate-900">Company Type:</span>{" "}
            Limited Liability Company
          </div>
          <div>
            <span className="font-semibold text-slate-900">RC Number:</span>{" "}
            {/* TODO: Update with real RC */}
            RC XXXXXXX
          </div>
          <div>
            <span className="font-semibold text-slate-900">Industry Focus:</span>{" "}
            Cultural heritage, research, curation, and advisory
          </div>
        </div>

        <div className="space-y-2 text-sm text-slate-800">
          <div>
            <span className="font-semibold text-slate-900">Registered Address:</span>{" "}
            {/* TODO: Update with real address */}
            [Registered Office Address, City, State, Nigeria]
          </div>
          <div>
            <span className="font-semibold text-slate-900">Official Email:</span>{" "}
            <a
              href="mailto:info@dynasticheritageafricana.com"
              className="text-brand-accent hover:underline"
            >
              info@dynasticheritageafricana.com
            </a>
          </div>
          <div>
            <span className="font-semibold text-slate-900">Official Phone:</span>{" "}
            +234 (0) XXX XXX XXXX
          </div>
          <div>
            <span className="font-semibold text-slate-900">Website:</span>{" "}
            <span className="text-slate-700">
              {/* Netlify or custom domain */}
              https://www.dynasticheritageafricana.com
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs sm:text-sm text-emerald-900">
        <p className="font-semibold mb-1">KYC & Compliance Note</p>
        <p>
          This website is maintained for corporate communication and verification
          purposes. All information provided is accurate to the best of our
          knowledge and may be updated periodically to reflect changes in company
          status or structure.
        </p>
      </div>
    </div>
  );
}
