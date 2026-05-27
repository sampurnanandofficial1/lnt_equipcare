import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Bot } from 'lucide-react'

const NAV = [
  { label: 'Platform',  href: '/#platform' },
  { label: 'Services',  href: '/services' },
  { label: 'Training',  href: '/training' },
  { label: 'Support',   href: '/support' },
  { label: 'Dashboards',href: '/dashboard', highlight: true },
]

export default function Navbar({ onChatOpen }) {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-lt-navy/95 backdrop-blur-md border-b border-lt-surface-border shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-lt-red rounded flex items-center justify-center font-display font-black text-white text-sm">L&T</div>
          <div>
            <div className="font-display font-bold text-white text-lg leading-none uppercase tracking-wider">Equipcare</div>
            <div className="text-[9px] text-lt-gold font-body font-medium tracking-widest uppercase">Digital Service Platform</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV.map(n => (
            <Link key={n.href} to={n.href}
              className={`px-3.5 py-2 text-sm font-body font-medium rounded-lg transition-all duration-200
                ${n.highlight
                  ? 'bg-lt-red/10 text-lt-red border border-lt-red/20 hover:bg-lt-red hover:text-white'
                  : 'text-lt-gray-muted hover:text-white hover:bg-white/5'}`}>
              {n.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          <a href="tel:1800XXXXXXX"
            className="flex items-center gap-1.5 text-xs text-lt-gray-muted hover:text-white transition-colors px-3 py-2">
            <Phone size={13} /> 1800-XXX-XXXX
          </a>
          <button onClick={onChatOpen}
            className="flex items-center gap-2 btn-red animate-pulse-glow">
            <Bot size={14} /> Ask AI
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-lt-navy/98 border-t border-lt-surface-border px-4 py-4 space-y-1">
          {NAV.map(n => (
            <Link key={n.href} to={n.href} onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-lt-gray-muted hover:text-white rounded-lg hover:bg-white/5 transition-all">
              {n.label}
            </Link>
          ))}
          <button onClick={() => { onChatOpen(); setOpen(false) }}
            className="w-full mt-2 btn-red flex items-center justify-center gap-2">
            <Bot size={14}/> Ask AI Assistant
          </button>
        </div>
      )}
    </nav>
  )
}
