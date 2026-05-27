import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

const CENTERS = ['Nagpur','Kanchipuram','Durgapur','Singrauli','Bahadurgarh','Pune']
const LINKS = {
  Platform: [{l:'AI Assistant',h:'/support'},{l:'Self-Help Hub',h:'/support'},{l:'Training Academy',h:'/training'},{l:'Service Booking',h:'/services'}],
  Company:  [{l:'About L&T CMMB',h:'#'},{l:'Komatsu Partnership',h:'#'},{l:'Awards & Recognition',h:'#'},{l:'Careers',h:'#'}],
  Support:  [{l:'Service Centers',h:'/services'},{l:'Spare Parts',h:'/services'},{l:'AMC Contracts',h:'/services'},{l:'Contact Us',h:'#'}],
}

export default function Footer() {
  return (
    <footer className="bg-lt-navy border-t border-lt-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-lt-red rounded flex items-center justify-center font-display font-black text-white">L&T</div>
              <div>
                <div className="font-display font-bold text-white text-xl uppercase tracking-wider">Equipcare</div>
                <div className="text-[10px] text-lt-gold font-body tracking-widest uppercase">Digital Service Platform</div>
              </div>
            </div>
            <p className="text-sm text-lt-gray-muted leading-relaxed mb-5">
              India's most digitally connected construction & mining equipment service ecosystem. Powered by L&T CMMB — Komatsu's exclusive distributor.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:1800XXXXXXX" className="flex items-center gap-2 text-lt-gray-muted hover:text-white transition-colors">
                <Phone size={13} className="text-lt-red"/> 1800-XXX-XXXX (24x7 Equipcare)
              </a>
              <a href="mailto:equipcare@larsentoubro.com" className="flex items-center gap-2 text-lt-gray-muted hover:text-white transition-colors">
                <Mail size={13} className="text-lt-red"/> equipcare@larsentoubro.com
              </a>
            </div>
            {/* Service centers */}
            <div className="mt-5">
              <div className="text-xs text-lt-gold font-body font-semibold uppercase tracking-wider mb-2">6 Service Centers</div>
              <div className="flex flex-wrap gap-1.5">
                {CENTERS.map(c => (
                  <span key={c} className="text-xs px-2 py-0.5 rounded border border-lt-surface-border text-lt-gray-muted">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([cat, links]) => (
            <div key={cat}>
              <div className="text-xs font-body font-semibold text-lt-gold uppercase tracking-wider mb-4">{cat}</div>
              <ul className="space-y-2">
                {links.map(l => (
                  <li key={l.l}>
                    <Link to={l.h} className="text-sm text-lt-gray-muted hover:text-white transition-colors">{l.l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-lt-surface-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-lt-gray-muted">
          <div>© 2025 Larsen & Toubro Limited — Construction & Mining Machinery Business. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="https://www.larsentoubro.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors">
              larsentoubro.com <ExternalLink size={10}/>
            </a>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
