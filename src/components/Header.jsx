import { useState } from 'react'

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 rounded-md flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h12M4 10h9M4 14h6" />
              </svg>
            </div>
            <span className="font-bold text-lg text-slate-900">Follow My Lead</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <a href="#services" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">Services</a>
            <a href="#how-it-works" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">How It Works</a>
            <a href="#about" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors">
              Talk to Us
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-100 pt-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-3">
              <a href="#services" className="text-sm text-slate-600 hover:text-slate-900 py-1" onClick={() => setMobileOpen(false)}>Services</a>
              <a href="#how-it-works" className="text-sm text-slate-600 hover:text-slate-900 py-1" onClick={() => setMobileOpen(false)}>How It Works</a>
              <a href="#about" className="text-sm text-slate-600 hover:text-slate-900 py-1" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors mt-2" onClick={() => setMobileOpen(false)}>
                Talk to Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
