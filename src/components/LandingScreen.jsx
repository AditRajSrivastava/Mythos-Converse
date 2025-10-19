const LandingScreen = ({ onBegin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pb-20 fade-in bg-pattern bg-animated bg-mandala relative overflow-hidden">
      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 text-6xl opacity-20 animate-pulse" style={{color: '#DDA15E', animationDuration: '3s'}}>
        🪔
      </div>
      <div className="absolute top-8 right-8 text-6xl opacity-20 animate-pulse" style={{color: '#DDA15E', animationDuration: '3s', animationDelay: '1s'}}>
        🪔
      </div>
      <div className="absolute bottom-8 left-8 text-6xl opacity-20 animate-pulse" style={{color: '#DDA15E', animationDuration: '3s', animationDelay: '2s'}}>
        🕉️
      </div>
      <div className="absolute bottom-8 right-8 text-6xl opacity-20 animate-pulse" style={{color: '#DDA15E', animationDuration: '3s', animationDelay: '1.5s'}}>
        🕉️
      </div>

      {/* Ornate Border Frame */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        background: `
          linear-gradient(to right, rgba(221, 161, 94, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(221, 161, 94, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, transparent 0%, transparent 20%, rgba(188, 108, 37, 0.05) 50%, transparent 80%, transparent 100%)
        `,
        backgroundSize: '40px 40px, 40px 40px, 100% 100%'
      }}></div>
      
      <div className="text-center max-w-5xl relative z-10">
        {/* Decorative Top Border */}
        <div className="flex items-center justify-center mb-8 slide-up" style={{animationDelay: '0.1s'}}>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent w-full max-w-md"></div>
          <div className="mx-4 text-3xl" style={{color: '#DDA15E'}}>✦</div>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent w-full max-w-md"></div>
        </div>

        {/* Title with enhanced styling */}
        <div className="relative inline-block mb-6">
          <h1 className="font-epic text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-amber-400 to-yellow-600 glow-effect relative z-10 tracking-wider">
            MYTHOS
          </h1>
          <h1 className="font-epic text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 glow-effect relative z-10 tracking-wider -mt-4">
            CONVERSE
          </h1>
          {/* Glowing backdrop */}
          <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 -z-10 animate-pulse" style={{animationDuration: '4s'}}></div>
        </div>

        {/* Subtitle with icon */}
        <div className="flex items-center justify-center gap-3 mb-8 slide-up" style={{animationDelay: '0.2s'}}>
          <span className="text-2xl" style={{color: '#DDA15E'}}>✦</span>
          <p className="text-2xl md:text-3xl font-semibold text-amber-200 tracking-wide">
            Explore India's Rich Heritage Across Time
          </p>
          <span className="text-2xl" style={{color: '#DDA15E'}}>✦</span>
        </div>

        {/* Glass card for description */}
        <div className="glass rounded-2xl p-8 mb-8 max-w-3xl mx-auto slide-up border border-amber-600/30" style={{
          animationDelay: '0.3s',
          background: 'rgba(188, 108, 37, 0.05)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px 0 rgba(188, 108, 37, 0.2)'
        }}>
          <p className="text-lg text-gray-200 mb-4 leading-relaxed">
            Journey through <span className="text-amber-400 font-semibold">ancient mythology</span>, <span className="text-amber-400 font-semibold">glorious empires</span>, and the <span className="text-amber-400 font-semibold">freedom struggle</span>. 
            Engage in meaningful conversations with legendary figures who shaped India's culture, history, and destiny.
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-4"></div>
          <p className="text-base text-gray-300 leading-relaxed">
            From epic battles of <span className="text-yellow-400 font-medium">dharma</span> to mighty emperors building civilizations, 
            from revolutionaries fighting for freedom to sages imparting timeless wisdom—<span className="text-amber-300 font-medium italic">experience Indian heritage through the voices of those who lived it</span>.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto slide-up" style={{animationDelay: '0.4s'}}>
          <div className="glass rounded-lg p-6 border border-amber-600/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-3">📜</div>
            <h3 className="text-amber-400 font-bold text-lg mb-2">Epic Mythology</h3>
            <p className="text-gray-400 text-sm">Mahabharata, Ramayana & Puranas</p>
          </div>
          <div className="glass rounded-lg p-6 border border-amber-600/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105" style={{animationDelay: '0.1s'}}>
            <div className="text-4xl mb-3">👑</div>
            <h3 className="text-amber-400 font-bold text-lg mb-2">Great Empires</h3>
            <p className="text-gray-400 text-sm">Maurya, Gupta, Chola, Maratha & more</p>
          </div>
          <div className="glass rounded-lg p-6 border border-amber-600/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl mb-3">⚔️</div>
            <h3 className="text-amber-400 font-bold text-lg mb-2">Freedom Struggle</h3>
            <p className="text-gray-400 text-sm">Revolutionaries & Freedom Fighters</p>
          </div>
        </div>

        {/* CTA Button with enhanced styling */}
        <button 
          onClick={onBegin}
          className="btn-primary btn-pulse px-16 py-5 rounded-xl text-2xl font-bold text-gray-900 slide-up breathe-animation relative overflow-hidden group"
          style={{
            animationDelay: '0.5s',
            background: 'linear-gradient(135deg, #DDA15E 0%, #BC6C25 50%, #DDA15E 100%)',
            boxShadow: '0 10px 40px rgba(221, 161, 94, 0.4)',
            border: '2px solid rgba(254, 250, 224, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 15px 50px rgba(221, 161, 94, 0.6)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)'
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(221, 161, 94, 0.4)'
          }}
        >
          <span className="relative z-10 flex items-center gap-3">
            <span>Begin Your Journey</span>
            <span className="text-3xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </span>
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shine"></div>
        </button>

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center mt-12 slide-up" style={{animationDelay: '0.6s'}}>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent w-full max-w-md"></div>
          <div className="mx-4 text-2xl" style={{color: '#DDA15E'}}>✦</div>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent w-full max-w-md"></div>
        </div>
      </div>
    </div>
  )
}

export default LandingScreen
