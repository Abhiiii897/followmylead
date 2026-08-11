function Services() {
  const services = [
    {
      title: 'Lead Intelligence',
      description: 'Understand who your best prospects are using data-driven analysis that goes beyond basic demographics.',
    },
    {
      title: 'Predictive Lead Scoring',
      description: 'Prioritize your pipeline with machine learning models that identify which leads are most likely to convert.',
    },
    {
      title: 'Personalized Outreach',
      description: "Generate relevant, human-sounding communications tailored to each prospect's context and stage.",
    },
    {
      title: 'Campaign Strategy',
      description: 'End-to-end marketing campaign planning and execution that aligns messaging with audience intent.',
    },
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Marketing expertise, amplified by intelligence.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We help businesses move from mass outreach to meaningful engagement by combining traditional marketing skills with modern data capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-5">
                <div className="w-3 h-3 rounded-full bg-brand-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
