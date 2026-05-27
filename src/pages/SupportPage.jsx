import { useState } from 'react'
import { Search, AlertTriangle, Droplets, Zap, Settings, ChevronRight, Download, Bot, Phone } from 'lucide-react'

const CATS = [
  { id:'engine',   icon:Settings,     label:'Engine',      color:'text-lt-blue',    issues:['Overheating','Oil pressure warning','Black smoke','Hard starting','Loss of power'] },
  { id:'hydraulic',icon:Droplets,     label:'Hydraulic',   color:'text-blue-700',  issues:['Slow response','Oil leaks','Unusual noise','Drift/creep','Low pressure'] },
  { id:'electric', icon:Zap,          label:'Electrical',  color:'text-orange-500',issues:['Dead battery','Warning lights','Sensor faults','Communication errors','Starting issues'] },
  { id:'warning',  icon:AlertTriangle,label:'Warning Codes',color:'text-amber-600', issues:['E01 series','E02 series','E03 series','PM service due','Hydraulic overload'] },
]
const CODES = [
  { code:'E0110',system:'Engine',   sev:'Critical',desc:'Engine coolant overtemperature',action:'Stop machine immediately. Check coolant level and cooling fins.' },
  { code:'E0125',system:'Engine',   sev:'Warning', desc:'Engine oil pressure low',       action:'Check oil level. Do not continue. Contact Equipcare 1800-833-9990.' },
  { code:'E0215',system:'Hydraulic',sev:'Warning', desc:'Hydraulic oil temperature high', action:'Reduce workload. Check hydraulic oil level and cooling system.' },
  { code:'E0330',system:'Electrical',sev:'Info',   desc:'Battery voltage low',            action:'Check alternator output. Inspect battery terminals for corrosion.' },
  { code:'PM01', system:'Maintenance',sev:'Info',  desc:'500-hour PM service due',        action:'Schedule PM service with nearest L&T service center.' },
]
const SEV = { Critical:'text-lt-blue bg-lt-blue-pale border-lt-blue/30', Warning:'text-amber-700 bg-amber-50 border-amber-200', Info:'text-blue-700 bg-blue-50 border-blue-200' }

export default function SupportPage({ onChatOpen }) {
  const [search, setSearch] = useState('')
  const [tab, setTab]       = useState('troubleshoot')
  const filtered = CODES.filter(e => !search || e.code.toLowerCase().includes(search.toLowerCase()) || e.desc.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="min-h-screen bg-white" style={{ paddingTop:'100px' }}>
      <div className="bg-lt-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label mb-2 text-lt-blue">Self-Help Hub</div>
          <h1 className="font-display font-bold text-5xl text-white uppercase mb-3">Troubleshooting & Support</h1>
          <p className="text-gray-400 font-body max-w-xl mb-6">Resolve issues faster with visual guides, error codes & AI — before calling Equipcare.</p>
          <div className="flex gap-3">
            <button onClick={onChatOpen} className="btn-primary flex items-center gap-2"><Bot size={14}/> Ask AI First</button>
            <a href="tel:18008339990" className="flex items-center gap-2 border-2 border-white/30 text-white font-body font-semibold px-5 py-2.5 rounded hover:bg-white/10 text-sm transition-all"><Phone size={14}/> Call Equipcare</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex gap-1 border-b border-lt-gray-border mb-8">
          {[['troubleshoot','Troubleshoot'],['errorcodes','Error Codes'],['manuals','Manuals']].map(([id,label]) => (
            <button key={id} onClick={() => setTab(id)}
              className={`px-5 py-3 text-sm font-body font-medium border-b-2 transition-all -mb-px
                ${tab===id ? 'border-lt-blue text-lt-blue' : 'border-transparent text-lt-gray hover:text-lt-navy'}`}>{label}</button>
          ))}
        </div>
        {tab==='troubleshoot' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CATS.map(c => (
              <div key={c.id} className="card p-5">
                <div className="flex items-center gap-2 mb-4"><c.icon size={18} className={c.color}/><h3 className={`font-display font-bold text-xl uppercase ${c.color}`}>{c.label}</h3></div>
                <ul className="space-y-1">
                  {c.issues.map(issue => (
                    <li key={issue}><button className="w-full text-left flex items-center justify-between text-sm text-lt-gray-dark hover:text-lt-blue py-2 border-b border-lt-gray-border last:border-0 font-body group">
                      {issue}<ChevronRight size={12} className="text-lt-gray group-hover:text-lt-blue"/>
                    </button></li>
                  ))}
                </ul>
                <button onClick={onChatOpen} className="w-full mt-4 py-2 text-xs font-body font-semibold text-lt-blue border border-lt-blue rounded hover:bg-lt-blue-pale transition-all">Diagnose with AI →</button>
              </div>
            ))}
          </div>
        )}
        {tab==='errorcodes' && (
          <div>
            <div className="relative mb-6 max-w-md">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-lt-gray"/>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search error code (e.g. E0110)"
                className="w-full pl-10 pr-4 py-2.5 border border-lt-gray-border rounded-lg text-sm text-lt-navy placeholder-lt-gray font-body focus:outline-none focus:border-lt-blue transition-colors"/>
            </div>
            <div className="space-y-3">
              {filtered.map(e => (
                <div key={e.code} className="card p-4 flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-shrink-0"><span className="font-mono font-bold text-xl text-lt-blue">{e.code}</span><div className="text-xs text-lt-gray font-body">{e.system}</div></div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-body font-semibold text-lt-navy text-sm">{e.desc}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold ${SEV[e.sev]}`}>{e.sev}</span>
                    </div>
                    <p className="text-xs text-lt-gray font-body">{e.action}</p>
                  </div>
                  <button onClick={onChatOpen} className="text-xs text-lt-blue hover:underline font-body flex-shrink-0">AI Help →</button>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab==='manuals' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[['PC200/205/210 Operation Manual','Hydraulic Excavator','PDF · 12MB'],['PC300/350 Operation Manual','Hydraulic Excavator','PDF · 15MB'],['D85 Dozer Manual','Crawler Dozer','PDF · 9MB'],['GD705 Motor Grader Manual','Motor Grader','PDF · 11MB'],['HD465 Dump Truck Manual','Mining Dump Truck','PDF · 18MB'],['WA470 Wheel Loader Manual','Wheel Loader','PDF · 8MB']].map(([t,tp,sz]) => (
              <div key={t} className="card p-4 flex items-start gap-3">
                <div className="w-10 h-12 bg-lt-blue-pale border border-lt-blue/20 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-mono font-bold text-lt-blue">PDF</span>
                </div>
                <div className="flex-1"><div className="text-sm font-body font-semibold text-lt-navy">{t}</div><div className="text-xs text-lt-gray font-body mt-0.5">{tp} · {sz}</div></div>
                <button className="p-1.5 border border-lt-gray-border rounded hover:border-lt-blue hover:text-lt-blue text-lt-gray transition-all flex-shrink-0"><Download size={13}/></button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
