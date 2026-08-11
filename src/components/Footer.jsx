function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 px-6 py-12 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-brand-600 rounded-md flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 6h12M4 10h9M4 14h6" />
                </svg>
              </div>
              <span className="font-bold text-white">Follow My Lead</span>
            </div>
            <p className="text-sm max-w-xs">
              A modern marketing and advertising firm using data and AI to make customer acquisition more intelligent.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="text-sm font-semibold text-slate-200 mb-3">Navigate</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-200 mb-3">Location</h4>
              <p className="text-sm">JP Nagar, Bangalore</p>
              <p className="text-sm">Karnataka 560029</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Follow My Lead. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
