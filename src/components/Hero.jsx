function Hero() {
  return (
    <section className="section-padding pt-32 md:pt-40 lg:pt-44 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-narrow">
        <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-6">
          Marketing × Intelligence
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight max-w-3xl">
          Turn more leads into meaningful conversations.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          Follow My Lead combines marketing expertise, data-driven insights, and AI-powered workflows to help businesses prioritize promising leads and create more relevant outreach.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors shadow-sm"
          >
            Talk to Us
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
              <FlowStep label="Your leads" />
              <FlowArrow />
              <FlowStep label="Intelligence layer" />
              <FlowArrow />
              <FlowStep label="Priority insights" />
              <FlowArrow />
              <FlowStep label="Relevant outreach" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FlowStep({ label }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="w-14 h-14 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
        <div className="w-3 h-3 rounded-full bg-brand-500" />
      </div>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </div>
  )
}

function FlowArrow() {
  return (
    <div className="text-slate-300 hidden md:block">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  )
}

export default Hero
