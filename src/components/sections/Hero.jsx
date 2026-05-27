import { Link } from 'react-router-dom'
import { ArrowRight, Bot, Shield, Activity, Users, Package, Building2, MapPin } from 'lucide-react'

const STATS = [
  { value:'910+',   label:'Machines Under Contract', icon: Activity,  color:'text-lt-red'  },
  { value:'1,500+', label:'Engineers & Technicians', icon: Users,     color:'text-blue-400'},
  { value:'92%',    label:'Machine Availability',    icon: Shield,    color:'text-green-400'},
  { value:'6',      label:'Service Centers',         icon: Building2, color:'text-lt-gold' },
  { value:'40,000', label:'Spare Parts SKUs',        icon: Package,   color:'text-purple-400'},
  { value:'100+',   label:'Active Project Sites',    icon: MapPin,    color:'text-orange-400'},
]

export default function Hero({ onChatOpen }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40"/>
      <div className="absolute inset-0 bg-gradient-to-b from-lt-navy via-lt-navy/95 to-lt-navy"/>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lt-red/5 rounded-full blur-[120px] pointer-events-none"/>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lt-blue/10 rounded-full blur-[100px] pointer-events-none"/>

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_,i) => (
          <div key={i} className="absolute h-px bg-gradient-to-r from-transparent via-lt-red/20 to-transparent w-full animate-shimmer"
            style={{ top:`${15+i*17}%`, animationDelay:`${i*0.4}s`, animationDuration:'4s' }}/>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lt-red/30 bg-lt-red/5 text-xs font-body font-medium text-lt-red">
            <span className="w-1.5 h-1.5 bg-lt-red rounded-full animate-pulse"/>
            India's #1 Construction Equipment Digital Service Ecosystem
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-6">
          <h1 className="font-display font-black text-white uppercase leading-none tracking-wide">
            <span className="block text-5xl sm:text-7xl lg:text-8xl">L&T Equipcare</span>
            <span className="block text-3xl sm:text-5xl lg:text-6xl text-lt-gold mt-2">Digital Service Platform</span>
          </h1>
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-400 font-body leading-relaxed">
              A 24×7 AI-enabled customer support, training & service ecosystem —
              built for India's construction & mining industry.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <button onClick={onChatOpen}
            className="flex items-center gap-2 px-6 py-3 bg-lt-red text-white font-body font-semibold rounded-xl
                       hover:bg-lt-red-dark transition-all shadow-[0_0_30px_rgba(200,16,46,0.3)] animate-pulse-glow">
            <Bot size={16}/> Talk to AI Assistant
          </button>
          <Link to="/services"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-lt-surface-border text-white
                       font-body font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all">
            Book Service <ArrowRight size={15}/>
          </Link>
          <Link to="/dashboard"
            className="flex items-center gap-2 px-6 py-3 border border-lt-gold/30 text-lt-gold
                       font-body font-semibold rounded-xl hover:bg-lt-gold/10 transition-all">
            My Dashboard
          </Link>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {STATS.map((s,i) => (
            <div key={s.label}
              className={`card-dark text-center group animate-fade-up stagger-${i+1}`}
              style={{ opacity:0 }}>
              <s.icon size={20} className={`${s.color} mx-auto mb-2`}/>
              <div className={`font-display font-black text-2xl ${s.color}`}>{s.value}</div>
              <div className="text-[11px] text-lt-gray-muted font-body leading-tight mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
