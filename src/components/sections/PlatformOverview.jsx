import { Link } from 'react-router-dom'
import { Bot, BookOpen, Settings, LifeBuoy, BarChart3, Users, ArrowRight, Zap } from 'lucide-react'

const MODULES = [
  {
    id: 1,
    icon: Bot,
    color: 'text-lt-red',
    bg: 'bg-lt-red/10 border-lt-red/20',
    label: 'AI Assistant',
    title: 'Regional Language AI Support',
    desc: 'Voice + text AI in Hindi, Tamil, Telugu & more. First-level troubleshooting, service booking & Equipcare escalation.',
    tags: ['Voice Input','10+ Languages','24×7'],
    href: '/support',
  },
  {
    id: 2,
    icon: BookOpen,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    label: 'Self-Help Hub',
    title: 'Troubleshooting & Manuals',
    desc: 'Visual guides, error code library, maintenance SOPs, inspection checklists & downloadable manuals — optimized for low-bandwidth.',
    tags: ['Error Codes','Video Guides','Offline Ready'],
    href: '/support',
  },
  {
    id: 3,
    icon: Users,
    color: 'text-lt-gold',
    bg: 'bg-lt-gold/10 border-lt-gold/20',
    label: 'Training Academy',
    title: 'Role-Based Digital Learning',
    desc: 'Operator safety, supervisor productivity, fleet owner TCO optimization & technician diagnostics — with certifications & gamification.',
    tags: ['Certifications','Role-Based','Progress Tracking'],
    href: '/training',
  },
  {
    id: 4,
    icon: Settings,
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
    label: 'Service Management',
    title: 'AMC, Warranty & Service Tracking',
    desc: 'AMC visibility, service history, breakdown requests, maintenance reminders, spare parts inquiry & real-time ticket tracking.',
    tags: ['AMC Tracker','Spare Parts','Live Status'],
    href: '/services',
  },
  {
    id: 5,
    icon: LifeBuoy,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
    label: 'Equipcare Integration',
    title: 'Seamless Escalation Layer',
    desc: 'When AI can\'t resolve, Equipcare steps in. Unified ticket history, call escalation, and service tracking across both platforms.',
    tags: ['1-Click Escalation','Ticket Sync','24×7 Hotline'],
    href: '/support',
  },
  {
    id: 6,
    icon: BarChart3,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
    label: 'Customer Engagement',
    title: 'Loyalty, Rewards & Community',
    desc: 'Operator performance badges, fleet owner rewards, service campaigns, expert webinars & community forums for the L&T CMMB ecosystem.',
    tags: ['Loyalty Points','Webinars','Community'],
    href: '/dashboard',
  },
]

export default function PlatformOverview() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-lt-navy via-lt-surface to-lt-navy"/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-3">Platform Architecture</div>
          <h2 className="section-title mb-4">Complete Platform Storyboard</h2>
          <div className="divider-red mx-auto mb-5"/>
          <p className="section-subtitle max-w-2xl mx-auto text-lt-gray-muted text-base">
            Six integrated modules covering the entire machine lifecycle — from first ignition to full overhaul.
            Click any module to explore.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="hidden lg:flex items-center justify-center gap-2 mb-14 text-xs text-lt-gray-muted font-body">
          {['Customer Need','→','AI First Response','→','Self Resolution','→','Service Request','→','Equipcare Expert','→','Machine Uptime'].map((s,i) => (
            <span key={i} className={s==='→' ? 'text-lt-red' : 'px-2.5 py-1 rounded-full border border-lt-surface-border bg-lt-surface-card'}>{s}</span>
          ))}
        </div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map((m,i) => (
            <Link key={m.id} to={m.href}
              className={`card-dark group cursor-pointer animate-fade-up stagger-${Math.min(i+1,6)}`}
              style={{ opacity:0 }}>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2.5 rounded-xl border ${m.bg}`}>
                  <m.icon size={22} className={m.color}/>
                </div>
                <span className="text-xs font-body font-semibold text-lt-gray-muted border border-lt-surface-border px-2 py-0.5 rounded-full">
                  Module {m.id}
                </span>
              </div>
              <div className="text-[10px] font-body font-bold text-lt-gray uppercase tracking-widest mb-1">{m.label}</div>
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-2">{m.title}</h3>
              <p className="text-sm text-lt-gray-muted font-body leading-relaxed mb-4">{m.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {m.tags.map(t => <span key={t} className="tag-blue text-[10px]">{t}</span>)}
              </div>
              <div className={`flex items-center gap-1.5 text-xs font-body font-semibold ${m.color}
                              group-hover:gap-2.5 transition-all`}>
                Explore module <ArrowRight size={12}/>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 p-6 rounded-2xl border border-lt-gold/20 bg-lt-gold/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Zap size={20} className="text-lt-gold flex-shrink-0"/>
            <div>
              <div className="font-display font-bold text-white text-lg uppercase">Equipcare Remains Your Expert Safety Net</div>
              <div className="text-sm text-lt-gray-muted font-body">This platform handles first-level support. Complex issues escalate instantly to Equipcare's 1,500+ engineers.</div>
            </div>
          </div>
          <a href="tel:1800XXXXXXX"
            className="flex items-center gap-2 px-5 py-2.5 bg-lt-gold text-lt-navy font-body font-bold rounded-xl whitespace-nowrap hover:bg-lt-gold-dark transition-all text-sm flex-shrink-0">
            Call Equipcare Now
          </a>
        </div>
      </div>
    </section>
  )
}
