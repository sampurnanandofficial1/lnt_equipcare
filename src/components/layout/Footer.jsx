import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

const CENTERS = ['Nagpur','Kanchipuram','Durgapur','Singrauli','Bahadurgarh','Pune']
const LINKS = {
  Platform: [{l:'AI Assistant',h:'/support'},{l:'Self-Help Hub',h:'/support'},{l:'Training Academy',h:'/training'},{l:'Service Booking',h:'/services'}],
  Company:  [{l:'About L&T CMMB',h:'https://lntcmb.com/about-us/'},{l:'Komatsu Partnership',h:'#'},{l:'News & Events',h:'https://lntcmb.com/news-and-events/'},{l:'Careers',h:'https://lntcmb.com/about-us/career-opportunities/'}],
  Support:  [{l:'Service Centers',h:'/services'},{l:'Spare Parts',h:'/services'},{l:'AMC Contracts',h:'/services'},{l:'Contact Us',h:'https://lntcmb.com/contact-us/'}],
}

export default function Footer() {
  return (
    <footer>
      {/* Dark footer — same style as lntcmb.com */}
      <div className="bg-lt-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-lt-blue rounded flex items-center justify-center">
                  <span className="font-display font-black text-white text-sm">L&T</span>
                </div>
                <div>
                  <div className="font-display font-bold text-white text-xl uppercase tracking-wider">Equipcare</div>
                  <div className="text-[10px] text-gray-400 tracking-widest uppercase">A Brand of Larsen & Toubro Limited</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-5 font-body">
                L&T Construction & Mining Machinery is part of the L&T Group — India's most trusted construction equipment service ecosystem.
              </p>
              <div className="space-y-2.5 text-sm">
                <a href="tel:18008339990" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-body">
                  <Phone size={13} className="text-lt-blue flex-shrink-0"/> 1800-833-9990 / 1800-266-9990
                </a>
                <a href="mailto:CMB@larsentoubro.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-body">
                  <Mail size={13} className="text-lt-blue flex-shrink-0"/> CMB@larsentoubro.com
                </a>
              </div>
              <div className="mt-5">
                <div className="text-xs text-lt-blue font-body font-semibold uppercase tracking-wider mb-2">6 Service Centers</div>
                <div className="flex flex-wrap gap-1.5">
                  {CENTERS.map(c => <span key={c} className="text-xs px-2 py-0.5 rounded border border-white/10 text-gray-400 font-body">{c}</span>)}
                </div>
              </div>
            </div>

            {/* Links */}
            {Object.entries(LINKS).map(([cat, links]) => (
              <div key={cat}>
                <div className="text-xs font-body font-semibold text-lt-blue uppercase tracking-wider mb-4">{cat}</div>
                <ul className="space-y-2.5">
                  {links.map(l => (
                    <li key={l.l}>
                      <Link to={l.h} className="text-sm text-gray-400 hover:text-white transition-colors font-body">{l.l}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 font-body">
            <div>© 2026 Larsen & Toubro Limited. All Rights Reserved.</div>
            <div className="flex items-center gap-4">
              <a href="https://lntcmb.com/copyright-terms/" className="hover:text-white transition-colors">Terms</a>
              <a href="https://lntcmb.com/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="https://lntcmb.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
                lntcmb.com <ExternalLink size={9}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
