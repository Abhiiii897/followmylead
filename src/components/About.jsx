function About() {
  const stats = [
    { value: '2024', label: 'Founded' },
    { value: 'Bengaluru', label: 'Based in JP Nagar' },
    { value: 'Marketing + AI', label: 'Our direction' },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-4">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Built for a changing marketing landscape.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              Founded in 2024, Follow My Lead is a Bangalore-based marketing and advertising firm focused on helping businesses build more meaningful connections with potential customers.
            </p>
            <p>
              As customer journeys become increasingly data-driven, the company is exploring practical ways to combine marketing expertise with machine learning and generative AI.
            </p>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
