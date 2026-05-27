import { useState } from 'react'
import { HardHat, Briefcase, Wrench, BarChart2, Truck, Users, Building, ChevronRight } from 'lucide-react'

const USERS = [
  {
    id: 'operator',
    icon: HardHat,
    label: 'Operator',
    color: 'text-yellow-400',
    border: 'border-yellow-400/30',
    bg: 'bg-yellow-400/10',
    headline: 'Built for the man behind the machine',
    features: ['Daily inspection checklists', 'Warning code guidance', 'Safe operation modules', 'Voice-based AI support in regional language', 'Fuel efficiency tips', 'Basic troubleshooting'],
    tag: 'Field Level',
  },
  {
    id: 'supervisor',
    icon: Briefcase,
    label: 'Site Supervisor',
    color: 'text-blue-400',
    border: 'border-blue-400/30',
    bg: 'bg-blue-400/10',
    headline: 'Command your site with data',
    features: ['Machine utilization dashboard', 'Service request management', 'Site productivity tracking', 'Safety practice modules', 'Machine availability alerts', 'Escalation to Equipcare'],
    tag: 'Site Management',
  },
  {
    id: 'fleet',
    icon: Truck,
    label: 'Fleet Owner',
    color: 'text-lt-gold',
    border: 'border-lt-gold/30',
    bg: 'bg-lt-gold/10',
    headline: 'Maximize ROI across your fleet',
    features: ['Fleet-level AMC visibility', 'TCO optimization insights', 'Maintenance planning calendar', 'Machine lifecycle tracking', 'Parts cost analytics', 'Loyalty & reward points'],
    tag: 'Fleet Management',
  },
  {
    id: 'technician',
    icon: Wrench,
    label: 'Technician',
    color: 'text-green-400',
    border: 'border-green-400/30',
    bg: 'bg-green-400/10',
    headline: 'Diagnose faster, repair smarter',
    features: ['Advanced diagnostics library', 'Repair workflow guides', 'Component overhaul SOPs', 'Spare parts catalogue', 'ATC training modules', 'Komatsu certification prep'],
    tag: 'Technical',
  },
  {
    id: 'rental',
    icon: Building,
    label: 'Rental Operator',
    color: 'text-purple-400',
    border: 'border-purple-400/30',
    bg: 'bg-purple-400/10',
    headline: 'Keep every machine earning',
    features: ['Multi-customer machine tracking', 'Utilization reporting', 'Service scheduling', 'Operator performance monitoring', 'Rental ROI calculator', 'AMC for rental fleets'],
    tag: 'Rental Fleet',
  },
  {
    id: 'dealer',
    icon: Users,
    label: 'Dealer & Support',
    color: 'text-lt-red',
    border: 'border-lt-red/30',
    bg: 'bg-lt-red/10',
    headline: 'Full visibility of your territory',
    features: ['Territory-wise machine health', 'Customer service history', 'AMC renewal tracking', 'Spare parts pipeline', 'Support team coordination', 'Escalation management'],
    tag: 'Dealer Network',
  },
]

export default function UserTypes() {
  const [active, setActive] = useState('operator')
  const user = USERS.find(u => u.id === active)

  return (
    <section className="py-24 bg-lt-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-3">Who It's Built For</div>
          <h2 className="section-title mb-4">Every User Gets Their Own Experience</h2>
          <div className="divider-red mx-auto mb-5"/>
          <p className="text-base text-lt-gray-muted font-body max-w-xl mx-auto">
            Role-based dashboards and workflows — from the operator on site to the fleet owner in the office.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* User selector */}
          <div className="lg:w-64 flex-shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            {USERS.map(u => (
              <button key={u.id} onClick={() => setActive(u.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200
                            whitespace-nowrap lg:whitespace-normal text-left flex-shrink-0
                  ${active===u.id
                    ? `${u.bg} ${u.border} ${u.color}`
                    : 'border-lt-surface-border text-lt-gray-muted hover:text-white hover:border-white/20'}`}>
                <u.icon size={18} className={active===u.id ? u.color : ''}/>
                <div>
                  <div className="text-sm font-body font-semibold">{u.label}</div>
                  <div className={`text-[10px] hidden lg:block ${active===u.id ? 'opacity-70' : 'text-lt-gray-muted'}`}>{u.tag}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className={`flex-1 rounded-2xl border ${user.border} ${user.bg} p-6 lg:p-8`} key={active}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className={`text-xs font-body font-bold uppercase tracking-widest ${user.color} mb-2 block`}>{user.tag}</span>
                <h3 className="font-display font-bold text-3xl text-white uppercase tracking-wide">{user.label} Dashboard</h3>
                <p className="text-lt-gray-muted font-body mt-2">{user.headline}</p>
              </div>
              <div className={`p-4 rounded-2xl ${user.bg} border ${user.border}`}>
                <user.icon size={32} className={user.color}/>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {user.features.map((f,i) => (
                <div key={f} className="flex items-center gap-3 py-2.5 px-3 rounded-xl bg-black/20 border border-white/5">
                  <ChevronRight size={14} className={user.color}/>
                  <span className="text-sm text-gray-300 font-body">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button className={`btn-red flex items-center gap-2`}>
                Launch {user.label} Dashboard
                <ChevronRight size={14}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
