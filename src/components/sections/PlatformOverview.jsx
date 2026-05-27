import { Link } from 'react-router-dom'
import { Bot, BookOpen, Settings, LifeBuoy, BarChart3, Users, ArrowRight } from 'lucide-react'

const MODULES = [
  { id:1, icon:Bot,       color:'bg-lt-blue text-white',    label:'Module 1', title:'AI Language Assistant',     desc:'Voice + text AI in 10+ Indian languages. First-level troubleshooting & Equipcare escalation.', tags:['Voice','10+ Languages','24×7'], href:'/support' },
  { id:2, icon:BookOpen,  color:'bg-lt-navy text-white',   label:'Module 2', title:'Self-Help & Troubleshooting',desc:'Visual guides, error code library, maintenance SOPs & downloadable manuals for all equipment.',  tags:['Error Codes','Video Guides','Offline'], href:'/support' },
  { id:3, icon:Users,     color:'bg-orange-500 text-white',label:'Module 3', title:'Digital Training Academy',  desc:'Role-based learning for operators, supervisors, fleet owners & technicians with certifications.',  tags:['Certifications','Role-Based','Regional Language'], href:'/training' },
  { id:4, icon:Settings,  color:'bg-green-600 text-white', label:'Module 4', title:'Service Management',        desc:'AMC tracking, service history, breakdown requests, maintenance reminders & ticket management.',   tags:['AMC Tracker','Live Status','Spare Parts'], href:'/services' },
  { id:5, icon:LifeBuoy,  color:'bg-blue-700 text-white',  label:'Module 5', title:'Equipcare Integration',     desc:'Seamless escalation to expert engineers. Unified ticket history and call escalation layer.',       tags:['1-Click Escalation','Ticket Sync','24×7'], href:'/support' },
  { id:6, icon:BarChart3, color:'bg-purple-600 text-white',label:'Module 6', title:'Customer Engagement',       desc:'Loyalty rewards, operator badges, fleet analytics, webinars & community forums.',                  tags:['Loyalty Points','Webinars','Community'], href:'/dashboard' },
]

export default function PlatformOverview() {
  return (
    <section className="py-20 bg-lt-gray-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header — lntcmb.com style */}
        <div className="text-center mb-14">
          <div className="section-label mb-3">Platform Architecture</div>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">Complete Platform Storyboard</h2>
          <div className="divider-blue mx-auto mb-5"/>
          <p className="section-subtitle max-w-2xl mx-auto">
            Six integrated modules covering the entire machine lifecycle — from daily inspection to full overhaul.
          </p>
        </div>

        {/* Customer journey strip */}
        <div className="hidden lg:flex items-center justify-center gap-1 mb-12 text-xs font-body font-medium">
          {['Customer Need','→','AI Response','→','Self Resolution','→','Service Request','→','Expert Intervention','→','Machine Uptime'].map((s,i) => (
            <span key={i}
              className={s==='→'
                ? 'text-lt-blue text-base font-bold px-1'
                : 'px-3 py-1.5 rounded border border-lt-gray-border bg-white text-lt-gray-dark shadow-sm'}>
              {s}
            </span>
          ))}
        </div>

        {/* Module cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((m, i) => (
            <Link key={m.id} to={m.href}
              className={`card group cursor-pointer animate-fade-up stagger-${Math.min(i+1,6)}`}
              style={{opacity:0}}>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${m.color}`}>
                    <m.icon size={20}/>
                  </div>
                  <span className="text-xs font-body text-lt-gray border border-lt-gray-border px-2 py-0.5 rounded">{m.label}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-lt-navy uppercase tracking-wide mb-2">{m.title}</h3>
                <p className="text-sm text-lt-gray font-body leading-relaxed mb-4">{m.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {m.tags.map(t => <span key={t} className="tag-gray text-[10px]">{t}</span>)}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-body font-semibold text-lt-blue group-hover:gap-3 transition-all">
                  Explore <ArrowRight size={12}/>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
