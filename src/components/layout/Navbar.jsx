import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, Mail, Bot, ChevronDown } from 'lucide-react'

const NAV = [
  { label:'Home',       href:'/'          },
  { label:'Services',   href:'/services'  },
  { label:'Training',   href:'/training'  },
  { label:'Support',    href:'/support'   },
  { label:'Dashboard',  href:'/dashboard' },
  { label:'Contact Us', href:'#contact'   },
]

export default function Navbar({ onChatOpen }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar — matches lntcmb.com style */}
      <div className="bg-lt-navy text-white text-xs font-body hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:18008339990" className="flex items-center gap-1.5 hover:text-lt-red-light transition-colors">
              <Phone size={11}/> 1800-833-9990
            </a>
            <a href="tel:18002669990" className="flex items-center gap-1.5 hover:text-lt-red-light transition-colors">
              <Phone size={11}/> 1800-266-9990
            </a>
          </div>
          <a href="mailto:CMB@larsentoubro.com" className="flex items-center gap-1.5 hover:text-lt-red-light transition-colors">
            <Mail size={11}/> CMB@larsentoubro.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-nav' : 'border-b border-lt-gray-border'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-lt-red rounded flex items-center justify-center">
                <span className="font-display font-black text-white text-xs leading-none">L&T</span>
              </div>
              <div>
                <div className="font-display font-bold text-lt-navy text-lg uppercase tracking-wider leading-none">Equipcare</div>
                <div className="text-[9px] text-lt-gray font-body tracking-widest uppercase leading-none mt-0.5">Construction & Mining Machinery</div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map(n => (
              <Link key={n.href} to={n.href}
                className="px-4 py-2 text-sm font-body font-medium text-lt-gray-dark hover:text-lt-red
                           border-b-2 border-transparent hover:border-lt-red transition-all duration-150">
                {n.label}
              </Link>
            ))}
          </nav>

          {/* AI Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={onChatOpen}
              className="flex items-center gap-2 btn-red shadow-red">
              <Bot size={14}/> AI Assistant
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-lt-navy">
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-lt-gray-border shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {NAV.map(n => (
              <Link key={n.href} to={n.href} onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-body font-medium text-lt-gray-dark
                           hover:text-lt-red hover:bg-lt-red-pale rounded transition-all">
                {n.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <button onClick={() => { onChatOpen(); setOpen(false) }} className="w-full btn-red flex items-center justify-center gap-2">
                <Bot size={14}/> AI Assistant
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
