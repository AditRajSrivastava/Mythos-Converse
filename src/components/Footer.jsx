const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 py-3 px-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-sm border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
        {/* Made with love */}
        <div className="flex items-center gap-2 text-amber-100/70">
          <span>Made with</span>
          <span className="text-red-500 animate-pulse">❤️</span>
          <span>by</span>
          <a 
            href="https://portfolio-tau-opal-19.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold text-amber-400 hover:text-amber-300 transition-colors duration-300 hover:underline"
          >
            Aditya Raj Srivastava
          </a>
        </div>

        {/* Tech stack badges */}
        <div className="flex items-center gap-3 text-xs text-amber-100/50">
          <span className="px-2 py-1 rounded bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/20">
            React + Vite
          </span>
          <span className="px-2 py-1 rounded bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20">
            Google Gemini AI
          </span>
          <span className="px-2 py-1 rounded bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/20">
            244 Characters
          </span>
        </div>

        {/* Portfolio link icon */}
        <div className="flex items-center gap-3">
          <a 
            href="https://portfolio-tau-opal-19.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 hover:border-amber-400/50 transition-all duration-300 hover:scale-105"
            title="Visit Portfolio"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
            </svg>
            <span className="text-xs font-medium">Portfolio</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
