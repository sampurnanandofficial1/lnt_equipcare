import { useState } from 'react'
import { HardHat, Briefcase, Wrench, Truck, Users, Building, ChevronRight, CheckCircle2 } from 'lucide-react'

const USERS = [
  { id:'operator',   icon:HardHat,  color:'lt-red',    label:'Operator',       tag:'Field Level',    features:['Daily inspection checklists','Warning code guidance','Safe operation modules','Voice-based AI in regional language','Fuel efficiency tips','Basic troubleshooting'] },
  { id:'supervisor', icon:Briefcase,color:'lt-navy',   label:'Site Supervisor',tag:'Site Management',features:['Machine utilization dashboard','Service request management','Site productivity tracking','Safety practice modules','Machine availability alerts','Escalation to Equipcare'] },
  { id:'fleet',      icon:Truck,    color:'orange-500',label:'Fleet Owner',    tag:'Fleet Management',features:['Fleet-level AMC visibility','TCO optimization insights','Maintenance planning calendar','Machine lifecycle tracking','Parts cost analytics','Loyalty & reward points'] },
  { id:'technician', icon:Wrench,   color:'green-600', label:'Technician',     tag:'Technical',      features:['Advanced diagnostics library','Repair workflow guides','Component overhaul SOPs','Spare parts catalogue','ATC training modules','Komatsu certification prep'] },
  { id:'rental',     icon:Building, color:'blue-700',  label:'Rental Operator',tag:'Rental Fleet',   features:['Multi-customer machine tracking','Utilization reporting','Service scheduling','Operator performance monitoring','Rental ROI calculator','AMC for rental fleets'] },
  { id:'dealer',     icon:Users,    color:'purple-600',label:'Dealer & Support',tag:'Dealer Network', features:['Territory-wise machine health','Customer service history','AMC renewal tracking','Spare parts pipeline','Support team coordination','Escalation management'] },
]

const colorMap = {
  'lt-red':'bg-lt-red text-white border-lt-red','lt-navy':'bg-lt-navy text-white border-lt-navy',
  'orange-500':'bg-orange-500 text-white border-orange-500','green-600':'bg-green-600 text-white border-green-600',
  'blue-700':'bg-blue-700 text-white border-blue-700','purple-600':'bg-purple-600 text-white border-purple-600',
}
const textMap = {
  'lt-red':'text-lt-red','lt-navy':'text-lt-navy','orange-500':'text-orange-500',
  'green-600':'text-green-600','blue-700':'text-blue-700','purple-600':'text-purple-600',
}

export default function UserTypes() {
  const [active, setActive] = useState('operator')
  const user = USERS.find(u => u.id === active)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-3">Who It's Built For</div>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">Every User Gets Their Own Experience</h2>
          <div className="divider-red mx-auto mb-5"/>
          <p className="section-subtitle max-w-xl mx-auto">Role-based dashboards from the operator on site to the fleet owner in the boardroom.</p>
        </div>

        {/* Role tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {USERS.map(u => (
            <button key={u.id} onClick={() => setActive(u.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 text-sm font-body font-semibold transition-all
                ${active===u.id ? `${colorMap[u.color]} shadow-md` : 'border-lt-gray-border text-lt-gray-dark hover:border-lt-red hover:text-lt-red bg-white'}`}>
              <u.icon size={15}/>
              {u.label}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="card-red p-8 max-w-3xl mx-auto" key={active}>
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[user.color]}`}>
              <user.icon size={26}/>
            </div>
            <div>
              <div className={`text-xs font-body font-bold uppercase tracking-widest mb-1 ${textMap[user.color]}`}>{user.tag}</div>
              <h3 className="font-display font-bold text-3xl text-lt-navy uppercase">{user.label} Dashboard</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {user.features.map(f => (
              <div key={f} className="flex items-center gap-2.5 py-2 px-3 bg-lt-gray-bg rounded-lg border border-lt-gray-border">
                <CheckCircle2 size={14} className="text-green-600 flex-shrink-0"/>
                <span className="text-sm text-lt-gray-dark font-body">{f}</span>
              </div>
            ))}
          </div>
          <button className={`btn-red`}>Launch {user.label} Dashboard <ChevronRight size={14} className="inline"/></button>
        </div>
      </div>
    </section>
  )
}
