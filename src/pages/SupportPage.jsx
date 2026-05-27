import { useState } from 'react'
import { Search, AlertTriangle, Droplets, Zap, Settings, ChevronRight, Download, Bot, Phone } from 'lucide-react'

const CATEGORIES = [
  { id:'engine',   icon: Settings,      label:'Engine',      color:'text-lt-red',     issues:['Overheating','Oil pressure warning','Black smoke','Hard starting','Loss of power'] },
  { id:'hydraulic',icon: Droplets,      label:'Hydraulic',   color:'text-blue-400',   issues:['Slow response','Oil leaks','Unusual noise','Drift/creep','Low pressure'] },
  { id:'electric', icon: Zap,           label:'Electrical',  color:'text-lt-gold',    issues:['Dead battery','Warning lights','Sensor faults','Communication errors','Starting issues'] },
  { id:'warning',  icon: AlertTriangle, label:'Warning Codes',color:'text-orange-400', issues:['E01 series','E02 series','E03 series','PM service due','Hydraulic overload'] },
]

const ERROR_CODES = [
  { code:'E0110', system:'Engine',    severity:'Critical', desc:'Engine coolant overtemperature', action:'Stop machine immediately. Check coolant level and cooling fins.' },
  { code:'E0125', system:'Engine',    severity:'Warning',  desc:'Engine oil pressure low',        action:'Check oil level. Do not continue operation. Contact Equipcare.' },
  { code:'E0215', system:'Hydraulic', severity:'Warning',  desc:'Hydraulic oil temperature high', action:'Reduce workload. Check hydraulic oil level and cooling system.' },
  { code:'E0330', system:'Electrical',severity:'Info',     desc:'Battery voltage low',            action:'Check alternator output. Inspect battery terminals for corrosion.' },
  { code:'PM01',  system:'Maintenance',severity:'Info',    desc:'500-hour PM service due',        action:'Schedule PM service with your nearest L&T service center.' },
]

const SEV = { Critical:'text-lt-red bg-lt-red/10 border-lt-red/20', Warning:'text-lt-gold bg-lt-gold/10 border-lt-gold/20', Info:'text-blue-400 bg-blue-400/10 border-blue-400/20' }

export default function SupportPage({ onChatOpen }) {
  const [search, setSearch]   = useState('')
  const [activeTab, setActiveTab] = useState('troubleshoot')

  const filtered = ERROR_CODES.filter(e =>
    !search || e.code.toLowerCase().includes(search.toLowerCase()) || e.desc.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen pt-20 bg-lt-navy">
      {/* Header */}
      <div className="bg-lt-surface border-b border-lt-surface-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label mb-2">Self-Help Hub</div>
          <h1 className="section-title mb-3">Troubleshooting & Support</h1>
          <p className="text-lt-gray-muted font-body max-w-xl">
            Resolve issues faster with our visual guides, error code library & AI assistant — before calling Equipcare.
          </p>
          <div className="flex gap-3 mt-6">
            <button onClick={onChatOpen} className="btn-red flex items-center gap-2">
              <Bot size={14}/> Ask AI First
            </button>
            <a href="tel:1800XXXXXXX" className="btn-outline flex items-center gap-2">
              <Phone size={14}/> Call Equipcare
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Tabs */}
        <div className="flex gap-1 border-b border-lt-surface-border mb-8">
          {[['troubleshoot','Troubleshoot'],['errorcodes','Error Codes'],['manuals','Manuals']].map(([id,label]) => (
            <button key={id} onClick={() => setActiveTab(id)}
              className={`px-5 py-3 text-sm font-body font-medium border-b-2 transition-all -mb-px
                ${activeTab===id ? 'border-lt-red text-white' : 'border-transparent text-lt-gray-muted hover:text-white'}`}>
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'troubleshoot' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORIES.map(cat => (
              <div key={cat.id} className="card-dark">
                <div className="flex items-center gap-3 mb-4">
                  <cat.icon size={20} className={cat.color}/>
                  <h3 className={`font-display font-bold text-xl uppercase tracking-wide ${cat.color}`}>{cat.label}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.issues.map(issue => (
                    <li key={issue}>
                      <button className="w-full text-left flex items-center justify-between text-sm text-gray-300
                                         hover:text-white py-1.5 border-b border-lt-surface-border/50 last:border-0 font-body group">
                        {issue}
                        <ChevronRight size={12} className="text-lt-gray-muted group-hover:text-white"/>
                      </button>
                    </li>
                  ))}
                </ul>
                <button onClick={onChatOpen}
                  className={`w-full mt-4 py-2 text-xs font-body font-semibold rounded-lg border transition-all
                  border-lt-surface-border text-lt-gray-muted hover:text-white hover:border-white/20`}>
                  Diagnose with AI →
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'errorcodes' && (
          <div>
            <div className="relative mb-6 max-w-md">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lt-gray-muted"/>
              <input value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search error code (e.g. E0110)"
                className="w-full pl-10 pr-4 py-2.5 bg-lt-surface-card border border-lt-surface-border rounded-xl
                           text-sm text-white placeholder-lt-gray-muted font-body focus:outline-none focus:border-lt-red/50"/>
            </div>
            <div className="space-y-3">
              {filtered.map(e => (
                <div key={e.code} className="card-dark flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="font-mono font-bold text-lg text-lt-red">{e.code}</span>
                    <div className="text-xs text-lt-gray-muted font-body mt-0.5">{e.system}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-body font-semibold text-white text-sm">{e.desc}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold ${SEV[e.severity]}`}>{e.severity}</span>
                    </div>
                    <p className="text-xs text-lt-gray-muted font-body">{e.action}</p>
                  </div>
                  <button onClick={onChatOpen} className="flex-shrink-0 text-xs text-lt-red hover:underline font-body">
                    AI Help →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'manuals' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[['PC200 / PC205 / PC210 Operation Manual','Hydraulic Excavator','PDF · 12MB'],
              ['PC300 / PC350 Operation Manual','Hydraulic Excavator','PDF · 15MB'],
              ['D85 Dozer Operation Manual','Crawler Dozer','PDF · 9MB'],
              ['GD705 Motor Grader Manual','Motor Grader','PDF · 11MB'],
              ['HD465 Dump Truck Manual','Mining Dump Truck','PDF · 18MB'],
              ['WA470 Wheel Loader Manual','Wheel Loader','PDF · 8MB']].map(([title,type,size]) => (
              <div key={title} className="card-dark flex items-start gap-4">
                <div className="w-10 h-12 bg-lt-red/10 border border-lt-red/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[10px] font-mono font-bold text-lt-red">PDF</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-body font-semibold text-white">{title}</div>
                  <div className="text-xs text-lt-gray-muted font-body mt-0.5">{type} · {size}</div>
                </div>
                <button className="flex-shrink-0 p-1.5 rounded-lg border border-lt-surface-border text-lt-gray-muted hover:text-white hover:border-white/20 transition-all">
                  <Download size={13}/>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
