export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
            Contact & Enquiries
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mb-4">
            For partnerships, collaborations, research support, or general
            enquiries, please reach out using the details below. Our team will
            respond as soon as possible.
          </p>

          <div className="space-y-3 text-sm text-slate-800">
            <div>
              <div className="font-semibold text-slate-900">Email</div>
              <a
                href="mailto:info@dynasticheritageafricana.com"
                className="text-brand-accent hover:underline"
              >
                info@dynasticheritageafricana.com
              </a>
            </div>

            <div>
              <div className="font-semibold text-slate-900">Phone / WhatsApp</div>
              <p>+234 (0) XXX XXX XXXX</p>
            </div>

            <div>
              <div className="font-semibold text-slate-900">Office Address</div>
              <p>
                [Registered Office Address] <br />
                [City], [State], Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">
            Quick Message
          </h3>
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert("This is a static demo form. Connect it to a backend or form handler.");
            }}
          >
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/70 focus:border-brand-accent"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/70 focus:border-brand-accent"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/70 focus:border-brand-accent"
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-slate-950 transition"
            >
              Send Message
            </button>

            <p className="text-[11px] text-slate-500">
              Note: This is a static form. For production, connect to a form
              handler (e.g. Netlify Forms, Formspree, or your own backend).
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
