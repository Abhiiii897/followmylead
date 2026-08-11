import { useState } from 'react'

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <rect width="512" height="512" rx="96" fill="#0074c5"/>
              <rect x="120" y="128" width="272" height="40" rx="20" fill="white"/>
              <rect x="120" y="236" width="200" height="40" rx="20" fill="white" opacity="0.9"/>
              <rect x="120" y="344" width="128" height="40" rx="20" fill="white" opacity="0.8"/>
              <circle cx="380" cy="364" r="32" fill="white" opacity="0.95"/>
              <rect x="260" y="352" width="88" height="24" rx="12" fill="white" opacity="0.4"/>
            </svg>
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
