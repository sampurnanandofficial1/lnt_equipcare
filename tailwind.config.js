/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // L&T Brand Colors
        'lt-red':    { DEFAULT: '#C8102E', dark: '#9E0B24', light: '#E8294A' },
        'lt-blue':   { DEFAULT: '#003087', dark: '#001D5E', light: '#1A4BA0' },
        'lt-gold':   { DEFAULT: '#F5A623', dark: '#D4891A', light: '#F7BA52' },
        'lt-dark':   { DEFAULT: '#1A1A2E', 900: '#0D0D1A', 800: '#1A1A2E', 700: '#252540' },
        'lt-gray':   { DEFAULT: '#4A4A6A', light: '#8A8AAA', bg: '#F4F5F9' },
      },
      fontFamily: {
        'display': ['"Barlow Condensed"', 'sans-serif'],
        'body':    ['"DM Sans"', 'sans-serif'],
        'mono':    ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'lt-gradient':    'linear-gradient(135deg, #003087 0%, #C8102E 100%)',
        'lt-dark-grad':   'linear-gradient(180deg, #1A1A2E 0%, #0D0D1A 100%)',
        'lt-card-grad':   'linear-gradient(135deg, rgba(0,48,135,0.08) 0%, rgba(200,16,46,0.04) 100%)',
      },
      boxShadow: {
        'lt-card':  '0 4px 24px rgba(0,48,135,0.10)',
        'lt-hover': '0 8px 40px rgba(0,48,135,0.18)',
        'lt-red':   '0 4px 20px rgba(200,16,46,0.25)',
      },
      animation: {
        'fade-up':      'fadeUp 0.6s ease forwards',
        'fade-in':      'fadeIn 0.4s ease forwards',
        'slide-right':  'slideRight 0.5s ease forwards',
        'pulse-soft':   'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:     { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:     { from: { opacity: '0' }, to: { opacity: '1' } },
        slideRight: { from: { opacity: '0', transform: 'translateX(-20px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        pulseSoft:  { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.7' } },
      },
    },
  },
  plugins: [],
}
