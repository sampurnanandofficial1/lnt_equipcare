export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'lt-red':   { DEFAULT:'#C8102E', dark:'#9E0B24', light:'#E8294A' },
        'lt-blue':  { DEFAULT:'#003087', dark:'#001D5E', light:'#1A4BA0' },
        'lt-gold':  { DEFAULT:'#F5A623', dark:'#D4891A', light:'#F7BA52' },
        'lt-navy':  { DEFAULT:'#0A1628', 800:'#0D1F38', 700:'#112544', 600:'#163060' },
        'lt-gray':  { DEFAULT:'#4A5568', light:'#8A94A6', muted:'#A0AEC0' },
        'lt-surface':{ DEFAULT:'#111827', card:'#1A2744', border:'#1E3A5F' },
      },
      fontFamily: {
        display: ['"Barlow Condensed"','sans-serif'],
        body:    ['"DM Sans"','sans-serif'],
        mono:    ['"JetBrains Mono"','monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.5s ease forwards',
        'fade-in':    'fadeIn 0.4s ease forwards',
        'slide-right':'slideRight 0.5s ease forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp:     { from:{opacity:'0',transform:'translateY(24px)'}, to:{opacity:'1',transform:'translateY(0)'} },
        fadeIn:     { from:{opacity:'0'}, to:{opacity:'1'} },
        slideRight: { from:{opacity:'0',transform:'translateX(-24px)'}, to:{opacity:'1',transform:'translateX(0)'} },
        pulseGlow:  { '0%,100%':{boxShadow:'0 0 0 0 rgba(200,16,46,0)'}, '50%':{boxShadow:'0 0 20px 4px rgba(200,16,46,0.3)'} },
        float:      { '0%,100%':{transform:'translateY(0)'}, '50%':{transform:'translateY(-10px)'} },
        shimmer:    { '0%':{backgroundPosition:'-200% 0'}, '100%':{backgroundPosition:'200% 0'} },
      },
    },
  },
  plugins: [],
}
