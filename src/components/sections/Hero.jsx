import { Link } from 'react-router-dom'
import { Bot, Phone, ArrowRight, Shield, Activity, Users, Package, Building2, MapPin } from 'lucide-react'

const STATS = [
  { value:'910+',   label:'Machines Under Contract', icon: Activity,  color:'text-lt-blue'   },
  { value:'1,500+', label:'Engineers & Technicians', icon: Users,     color:'text-lt-navy'  },
  { value:'92%',    label:'Machine Availability',    icon: Shield,    color:'text-green-600'},
  { value:'6',      label:'Service Centers',         icon: Building2, color:'text-orange-500'},
  { value:'40,000', label:'Spare Parts SKUs',        icon: Package,   color:'text-lt-navy'  },
  { value:'100+',   label:'Active Project Sites',    icon: MapPin,    color:'text-lt-blue'   },
]

export default function Hero({ onChatOpen }) {
  return (
    <>
      {/* Hero banner — matches lntcmb.com large imagery style */}
      <section className="relative overflow-hidden" style={{ marginTop: '100px' }}>
        {/* Background — construction site imagery feel */}
        <div className="relative h-[520px] sm:h-[600px] bg-lt-navy overflow-hidden">
          {/* Simulated construction site BG */}
          <div className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0F1A30 0%, #1B2A4A 40%, #8B1C1C 100%)',
            }}/>
          {/* Decorative diagonal overlay */}
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px)' }}/>

          {/* Equipment silhouette shapes */}
          <div className="absolute bottom-0 right-0 w-96 h-64 opacity-10">
            <svg viewBox="0 0 400 250" className="w-full h-full fill-white">
              <rect x="50" y="120" width="300" height="20" rx="4"/>
              <rect x="100" y="60" width="20" height="80" rx="4"/>
              <rect x="120" y="60" width="80" height="20" rx="4"/>
              <circle cx="120" cy="150" r="20"/>
              <circle cx="280" cy="150" r="20"/>
              <rect x="140" y="100" width="140" height="40" rx="4"/>
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-lt-yellow text-lt-navy text-xs font-body font-semibold px-4 py-1.5 rounded mb-6 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"/>
                India's Leading Equipment Service Platform
              </div>

              <h1 className="font-display font-black text-white uppercase leading-none tracking-wide mb-4">
                <span className="block text-5xl sm:text-6xl lg:text-7xl">L&T Equipcare</span>
                <span className="block text-2xl sm:text-3xl text-blue-200 mt-2 font-semibold">
                  24×7 Digital Service Ecosystem
                </span>
              </h1>

              <p className="text-gray-300 font-body text-base leading-relaxed mb-8 max-w-xl">
                AI-powered customer support, training & service management for
                Komatsu equipment owners across India.
              </p>

              <div className="flex flex-wrap gap-3">
                <button onClick={onChatOpen}
                  className="flex items-center gap-2 bg-lt-blue text-white font-body font-semibold px-6 py-3 rounded
                             hover:bg-lt-blue-dark transition-all shadow-blue">
                  <Bot size={16}/> Talk to AI Assistant
                </button>
                <Link to="/services"
                  className="flex items-center gap-2 bg-lt-yellow text-lt-navy font-body font-bold px-6 py-3 rounded
                             hover:bg-lt-gray-bg transition-all">
                  Book Service <ArrowRight size={15}/>
                </Link>
                <a href="tel:18008339990"
                  className="flex items-center gap-2 border-2 border-white/40 text-white font-body font-semibold px-6 py-3 rounded
                             hover:bg-white/10 transition-all">
                  <Phone size={15}/> 1800-833-9990
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar — white strip below hero, matching lntcmb.com section cards */}
        <div className="bg-white shadow-nav">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-lt-gray-border">
              {STATS.map((s, i) => (
                <div key={s.label} className={`py-5 px-4 text-center animate-fade-up stagger-${i+1}`} style={{opacity:0}}>
                  <div className={`font-display font-black text-2xl ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-lt-gray font-body leading-tight mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
