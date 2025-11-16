export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
            About Dynastic Heritage Africana Limited
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            Dynastic Heritage Africana Limited is a heritage-focused organisation
            committed to documenting, preserving, and elevating Africa’s diverse
            cultural identities. We work with communities, institutions, and
            stakeholders to protect stories, artefacts, traditions, and spaces
            that define our collective memory.
          </p>
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            Through research, curation, exhibitions, training, and advisory
            services, we bridge the gap between the past and the present, ensuring
            that cultural assets are not only preserved, but also positioned for
            education, tourism, and sustainable development.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-2">
              Mission
            </h3>
            <p className="text-sm text-slate-700">
              To preserve, document, and showcase Africa’s cultural and historical
              heritage in ways that inspire pride, knowledge, and sustainable
              value for present and future generations.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-2">
              Vision
            </h3>
            <p className="text-sm text-slate-700">
              To be a leading African heritage brand recognised globally for
              authenticity, impact, and excellence in cultural preservation and
              storytelling.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-2">
              Core Values
            </h3>
            <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
              <li>Authenticity</li>
              <li>Respect for communities and traditions</li>
              <li>Excellence and professionalism</li>
              <li>Collaboration and partnership</li>
              <li>Sustainable impact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
