export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // ── L&T Standard Palette (lntcmb.com) ─────────────────────────
        'lt-blue':   { DEFAULT:'#003087', dark:'#002065', light:'#1A4BA0', pale:'#EBF0FA' },
        'lt-yellow': { DEFAULT:'#FFA800', dark:'#E09400', light:'#FFB733', pale:'#FFF8EC' },
        'lt-navy':   { DEFAULT:'#1B2A4A', dark:'#0F1A30', light:'#2A3F6F' },
        'lt-gray':   { DEFAULT:'#6B7280', light:'#9CA3AF', bg:'#F7F8FA', border:'#E5E7EB', dark:'#374151' },
        'lt-white':  { DEFAULT:'#FFFFFF', off:'#F9FAFB' },
      },
      fontFamily: {
        display: ['"Barlow Condensed"','sans-serif'],
        body:    ['"DM Sans"','sans-serif'],
      },
      boxShadow: {
        'card':      '0 2px 12px rgba(0,0,0,0.07)',
        'card-hover':'0 8px 30px rgba(0,0,0,0.12)',
        'nav':       '0 2px 20px rgba(0,0,0,0.08)',
        'blue':      '0 4px 20px rgba(0,48,135,0.20)',
        'yellow':    '0 4px 20px rgba(255,168,0,0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: { from:{opacity:'0',transform:'translateY(20px)'}, to:{opacity:'1',transform:'translateY(0)'} },
        fadeIn: { from:{opacity:'0'}, to:{opacity:'1'} },
      },
    },
  },
  plugins: [],
}
