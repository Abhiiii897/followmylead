function HowItWorks() {
  const steps = [
    { number: '01', title: 'Lead Data', description: 'Your existing leads, CRM data, and marketing signals flow in.' },
    { number: '02', title: 'Predictive Intelligence', description: 'Machine learning analyzes patterns to understand lead quality and intent.' },
    { number: '03', title: 'Lead Prioritization', description: 'Leads are scored and ranked so your team focuses on the most promising prospects first.' },
    { number: '04', title: 'Personalized Outreach', description: "Generative AI creates tailored messaging that resonates with each lead's context." },
    { number: '05', title: 'Human Conversation', description: 'Your team steps in at the right moment with the right context for meaningful conversations.' },
  ]

  return (
    <section id="how-it-works" className="section-padding bg-slate-50">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Where marketing meets intelligence.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Modern marketing generates more data than ever. Follow My Lead uses predictive analytics and generative AI to turn that information into practical insights that help teams decide who to contact, when to engage, and what to say.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-8 bottom-8 w-px bg-brand-200 hidden sm:block" aria-hidden="true" />
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-6 md:gap-8 items-start">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center">
                  <span className="text-sm md:text-base font-bold text-brand-600">{step.number}</span>
                </div>
                <div className="pt-2 md:pt-3">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 italic">
            Powered by modern machine learning and generative AI technologies.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
