import Hero            from '../components/sections/Hero'
import PlatformOverview from '../components/sections/PlatformOverview'
import UserTypes        from '../components/sections/UserTypes'
import ServiceNetwork   from '../components/sections/ServiceNetwork'
import ContractTypes    from '../components/sections/ContractTypes'
import TrainingAcademy  from '../components/sections/TrainingAcademy'
import { Bot, Phone, ArrowRight, Shield, Award, Zap } from 'lucide-react'

function AwardsStrip() {
  return (
    <section className="py-10 bg-lt-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-5">
          {[['🏆','Best Service Partner 2023','from Komatsu'],['🥇','SRM Partner 2025','L&T Group'],['🎖️','Komatsu Gold Rebuild Cert','1st in Asia'],['🌍','ATC Asia Champion 2024','Mr. P. Vinod'],['📋','ISO 9001 | 14001 | 45001','Triple Certified']].map(([i,t,s]) => (
            <div key={t} className="flex items-center gap-3">
              <span className="text-2xl">{i}</span>
              <div><div className="text-sm font-body font-semibold text-white">{t}</div><div className="text-xs text-gray-400 font-body">{s}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EquipcareIntegration() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="section-label mb-3">Escalation Architecture</div>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">Platform + Equipcare = Unbreakable Support</h2>
          <div className="divider-blue mx-auto"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="card-blue p-6">
            <div className="w-12 h-12 bg-lt-navy rounded-xl flex items-center justify-center mb-4"><Bot size={22} className="text-white"/></div>
            <span className="tag-navy mb-3 block w-fit">Layer 1 — Digital Platform</span>
            <h3 className="font-display font-bold text-2xl text-lt-navy uppercase mb-3">Self-Service</h3>
            <ul className="space-y-1.5 text-sm text-lt-gray font-body mb-4">
              {['24×7 AI self-service','Troubleshooting guides','Training & certifications','Service ticket creation'].map(f => <li key={f} className="flex gap-2"><Zap size={12} className="text-lt-navy mt-0.5 flex-shrink-0"/>{f}</li>)}
            </ul>
            <div className="text-xs font-body font-semibold text-green-600 bg-green-50 border border-green-200 rounded px-3 py-1.5 text-center">Resolves ~70% of queries</div>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center gap-2 py-8">
            <p className="text-xs text-lt-gray font-body text-center mb-2">Unresolved issues escalate automatically</p>
            <ArrowRight size={28} className="text-lt-blue"/>
            <p className="text-[10px] text-lt-gray font-body text-center mt-1">Full context passed to engineer</p>
          </div>
          <div className="card border-t-4 border-lt-blue p-6 ring-1 ring-lt-blue/20">
            <div className="w-12 h-12 bg-lt-blue rounded-xl flex items-center justify-center mb-4"><Shield size={22} className="text-white"/></div>
            <span className="tag-blue mb-3 block w-fit">Layer 2 — Equipcare Expert</span>
            <h3 className="font-display font-bold text-2xl text-lt-navy uppercase mb-3">Expert Intervention</h3>
            <ul className="space-y-1.5 text-sm text-lt-gray font-body mb-4">
              {['1,500+ trained engineers','Advanced diagnostics','Field intervention','Component overhauls'].map(f => <li key={f} className="flex gap-2"><Award size={12} className="text-lt-blue mt-0.5 flex-shrink-0"/>{f}</li>)}
            </ul>
            <a href="tel:18008339990" className="flex items-center justify-center gap-1.5 bg-lt-blue text-white text-xs font-body font-semibold py-2 px-4 rounded hover:bg-lt-blue-dark transition-all">
              <Phone size={11}/> 1800-833-9990 (24×7)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA({ onChatOpen }) {
  return (
    <section className="py-20 bg-lt-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display font-black text-5xl sm:text-6xl text-white uppercase tracking-wide mb-4">Ready to Go Digital?</h2>
        <p className="text-blue-100 font-body text-lg mb-8">Join thousands of L&T Komatsu customers maximizing machine uptime.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button onClick={onChatOpen} className="flex items-center gap-2 bg-white text-lt-blue font-body font-bold px-7 py-3.5 rounded hover:bg-lt-blue-pale transition-all text-base shadow-lg">
            <Bot size={17}/> Start with AI Assistant
          </button>
          <a href="tel:18008339990" className="flex items-center gap-2 border-2 border-white text-white font-body font-semibold px-7 py-3.5 rounded hover:bg-white/10 transition-all text-base">
            <Phone size={17}/> 1800-833-9990
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
