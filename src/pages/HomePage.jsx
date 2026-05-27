import Hero            from '../components/sections/Hero'
import PlatformOverview from '../components/sections/PlatformOverview'
import UserTypes        from '../components/sections/UserTypes'
import ServiceNetwork   from '../components/sections/ServiceNetwork'
import ContractTypes    from '../components/sections/ContractTypes'
import TrainingAcademy  from '../components/sections/TrainingAcademy'
import { Bot, Phone, ArrowRight, Award, Shield, Zap } from 'lucide-react'

function AwardsStrip() {
  return (
    <section className="py-12 border-y border-lt-surface-border bg-lt-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-center">
          {[
            { icon:'🏆', title:'Best Service Partner 2023',     sub:'Award from Komatsu' },
            { icon:'🥇', title:'SRM Partner of the Year 2025',  sub:'L&T Group Recognition' },
            { icon:'🎖️', title:'Komatsu Gold Rebuild Cert',     sub:'1st Asian Distributor' },
            { icon:'🌍', title:'ATC Asia Champion 2024',        sub:'Mr. P. Vinod — L&T' },
            { icon:'📋', title:'ISO 9001 | 14001 | 45001',      sub:'Triple Certified' },
          ].map(a => (
            <div key={a.title} className="flex items-center gap-3 px-5 py-3 rounded-xl border border-lt-surface-border bg-lt-surface-card">
              <span className="text-2xl">{a.icon}</span>
              <div className="text-left">
                <div className="text-sm font-body font-semibold text-white">{a.title}</div>
                <div className="text-xs text-lt-gray-muted font-body">{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EquipcareIntegration() {
  return (
    <section className="py-24 bg-lt-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="section-label mb-3">Escalation Architecture</div>
          <h2 className="section-title mb-4">Platform + Equipcare = Unbreakable Support</h2>
          <div className="divider-red mx-auto"/>
        </div>

        {/* Flow diagram */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {/* Layer 1 */}
            <div className="card-dark border-blue-500/30 border">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Bot size={22} className="text-blue-400"/>
                </div>
                <div className="tag-blue mb-2">Layer 1</div>
                <h3 className="font-display font-bold text-xl text-white uppercase">Digital Platform</h3>
              </div>
              <ul className="space-y-2 text-xs text-lt-gray-muted font-body">
                <li className="flex gap-2"><Zap size={11} className="text-blue-400 mt-0.5 flex-shrink-0"/>24×7 AI self-service</li>
                <li className="flex gap-2"><Zap size={11} className="text-blue-400 mt-0.5 flex-shrink-0"/>Troubleshooting guides</li>
                <li className="flex gap-2"><Zap size={11} className="text-blue-400 mt-0.5 flex-shrink-0"/>Training & certifications</li>
                <li className="flex gap-2"><Zap size={11} className="text-blue-400 mt-0.5 flex-shrink-0"/>Service ticket creation</li>
              </ul>
              <div className="mt-4 text-center text-xs text-blue-400 font-body font-semibold">Resolves ~70% of queries</div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex flex-col items-center justify-center gap-2 py-8">
              <div className="text-xs text-lt-gray-muted font-body text-center mb-2">Unresolved issues escalate automatically</div>
              <ArrowRight size={28} className="text-lt-red"/>
              <div className="text-[10px] text-lt-gold font-body text-center mt-1">Seamless handover with full context</div>
            </div>

            {/* Layer 2 */}
            <div className="card-dark border-lt-red/40 border-2 ring-1 ring-lt-red/10">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-lt-red/10 border border-lt-red/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield size={22} className="text-lt-red"/>
                </div>
                <div className="tag-red mb-2">Layer 2</div>
                <h3 className="font-display font-bold text-xl text-white uppercase">Equipcare Expert</h3>
              </div>
              <ul className="space-y-2 text-xs text-lt-gray-muted font-body">
                <li className="flex gap-2"><Award size={11} className="text-lt-red mt-0.5 flex-shrink-0"/>1,500+ trained engineers</li>
                <li className="flex gap-2"><Award size={11} className="text-lt-red mt-0.5 flex-shrink-0"/>Advanced diagnostics</li>
                <li className="flex gap-2"><Award size={11} className="text-lt-red mt-0.5 flex-shrink-0"/>Field intervention</li>
                <li className="flex gap-2"><Award size={11} className="text-lt-red mt-0.5 flex-shrink-0"/>Component overhauls</li>
              </ul>
              <div className="mt-4 text-center">
                <a href="tel:1800XXXXXXX" className="flex items-center justify-center gap-1.5 text-xs text-lt-red font-body font-semibold">
                  <Phone size={11}/> 1800-XXX-XXXX (24×7)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA({ onChatOpen }) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lt-red/20 via-lt-navy to-lt-blue/20"/>
      <div className="absolute inset-0 grid-bg opacity-20"/>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display font-black text-5xl sm:text-6xl text-white uppercase tracking-wide mb-4">
          Ready to Go Digital?
        </h2>
        <p className="text-lg text-gray-400 font-body mb-8">
          Join thousands of L&T Komatsu customers already using Equipcare to maximize machine uptime.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button onClick={onChatOpen} className="btn-red flex items-center gap-2 text-base px-7 py-3.5">
            <Bot size={17}/> Start with AI Assistant
          </button>
          <a href="tel:1800XXXXXXX" className="flex items-center gap-2 text-base px-7 py-3.5 border-2 border-white/20
             text-white font-body font-semibold rounded-xl hover:bg-white/5 transition-all">
            <Phone size={17}/> Call 1800-XXX-XXXX
          </a>
        </div>
      </div>
    </section>
  )
}

export default function HomePage({ onChatOpen }) {
  return (
    <>
      <Hero             onChatOpen={onChatOpen}/>
      <AwardsStrip/>
      <PlatformOverview/>
      <UserTypes/>
      <ServiceNetwork/>
      <ContractTypes/>
      <TrainingAcademy/>
      <EquipcareIntegration/>
      <CTA              onChatOpen={onChatOpen}/>
    </>
  )
}
