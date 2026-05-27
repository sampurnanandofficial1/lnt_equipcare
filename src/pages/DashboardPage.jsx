import { useState } from 'react'
import { Activity, AlertTriangle, CheckCircle2, Clock, TrendingUp, Package, BarChart3, Bell } from 'lucide-react'

const MACHINES = [
  { id:'PC210-1',  model:'PC210', serial:'K50001', site:'Pune Expressway', health:92, hours:1240, status:'Active',  nextPM:'120 hrs' },
  { id:'PC350-2',  model:'PC350', serial:'K50042', site:'Mumbai Port',     health:78, hours:3100, status:'PM Due',  nextPM:'Overdue'  },
  { id:'D155-3',   model:'D155',  serial:'K50088', site:'Nagpur Mine',     health:96, hours:890,  status:'Active',  nextPM:'340 hrs' },
  { id:'HD465-4',  model:'HD465', serial:'K50122', site:'Singrauli Coal',  health:61, hours:4200, status:'Service', nextPM:'—'       },
  { id:'GD705-5',  model:'GD705', serial:'K50166', site:'NH-48 Road',      health:88, hours:2100, status:'Active',  nextPM:'200 hrs' },
]

const HEALTH_COLOR = h => h >= 90 ? 'text-green-400' : h >= 75 ? 'text-lt-gold' : 'text-lt-red'
const STATUS_STYLE = { Active:'text-green-400 bg-green-400/10 border-green-400/20', 'PM Due':'text-lt-gold bg-lt-gold/10 border-lt-gold/20', Service:'text-lt-red bg-lt-red/10 border-lt-red/20' }

export default function DashboardPage() {
  const [role, setRole] = useState('fleet')

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-lt-navy py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="section-label mb-1">My Workspace</div>
            <h1 className="font-display font-bold text-4xl text-white uppercase">Fleet Dashboard</h1>
          </div>
          <div className="flex gap-1 p-1 bg-lt-gray-bg border border-lt-gray-border rounded-xl">
            {[['fleet','Fleet Owner'],['operator','Operator'],['supervisor','Supervisor']].map(([id,label]) => (
              <button key={id} onClick={() => setRole(id)}
                className={`px-4 py-2 rounded-lg text-xs font-body font-semibold transition-all
                  ${role===id ? 'bg-lt-red text-white' : 'text-lt-gray hover:text-white'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* KPI row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon:Activity,        label:'Fleet Availability',  value:'84%', sub:'3 machines active', color:'text-green-400' },
            { icon:AlertTriangle,   label:'Alerts',              value:'2',   sub:'Action needed',    color:'text-lt-red'   },
            { icon:Clock,           label:'Avg Machine Age',     value:'1,906', sub:'hours',           color:'text-blue-400' },
            { icon:TrendingUp,      label:'Uptime This Month',   value:'91%', sub:'vs 88% last month', color:'text-lt-gold'  },
          ].map(k => (
            <div key={k.label} className="card">
              <div className="flex items-center justify-between mb-3">
                <k.icon size={16} className={k.color}/>
                <Bell size={13} className="text-lt-gray"/>
              </div>
              <div className={`font-display font-black text-3xl ${k.color}`}>{k.value}</div>
              <div className="text-sm font-body font-semibold text-white mt-1">{k.label}</div>
              <div className="text-xs text-lt-gray font-body">{k.sub}</div>
            </div>
          ))}
        </div>

        {/* Machine table */}
        <div className="card mb-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Package size={16} className="text-lt-red"/>
              <h2 className="font-display font-bold text-xl text-white uppercase">Machine Health Monitor</h2>
            </div>
            <span className="text-xs text-lt-gray font-body">{MACHINES.length} machines</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-lt-gray-border text-left">
                  {['Machine','Serial','Site','Health','Hours','Next PM','Status','Action'].map(h => (
                    <th key={h} className="text-xs text-lt-gray uppercase tracking-wider pb-3 pr-4 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MACHINES.map(m => (
                  <tr key={m.id} className="border-b border-lt-gray-border/50 last:border-0 hover:bg-white/2 transition-colors">
                    <td className="py-3 pr-4 font-display font-bold text-white text-base">{m.model}</td>
                    <td className="py-3 pr-4 font-mono text-xs text-lt-gray">{m.serial}</td>
                    <td className="py-3 pr-4 text-lt-gray-dark text-xs whitespace-nowrap">{m.site}</td>
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-1.5 bg-lt-surface-border rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${m.health>=90?'bg-green-400':m.health>=75?'bg-lt-gold':'bg-lt-red'}`} style={{width:`${m.health}%`}}/>
                        </div>
                        <span className={`text-xs font-bold ${HEALTH_COLOR(m.health)}`}>{m.health}%</span>
                      </div>
                    </td>
                    <td className="py-3 pr-4 text-lt-gray-dark text-xs">{m.hours.toLocaleString()}</td>
                    <td className="py-3 pr-4">
                      <span className={`text-xs font-bold ${m.nextPM==='Overdue'?'text-lt-red':m.nextPM==='—'?'text-lt-gray':'text-lt-gray-dark'}`}>{m.nextPM}</span>
                    </td>
                    <td className="py-3 pr-4">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold ${STATUS_STYLE[m.status]}`}>{m.status}</span>
                    </td>
                    <td className="py-3">
                      <button className="text-xs text-lt-red hover:underline font-body font-semibold whitespace-nowrap">Book Service →</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom 2-col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="card">
            <div className="flex items-center gap-2 mb-4"><CheckCircle2 size={16} className="text-green-400"/><h3 className="font-display font-bold text-xl text-white uppercase">AMC Status</h3></div>
            {[['PC210 — Pune Site','FMC/MARC','Expires Dec 2025','Active'],['D155 — Nagpur Mine','CMC','Expires Mar 2026','Active'],['HD465 — Singrauli','SSA','Expires Aug 2025','Renewal Due']].map(([m,type,exp,st]) => (
              <div key={m} className="flex items-center justify-between py-2.5 border-b border-lt-gray-border/50 last:border-0">
                <div><div className="text-sm font-body text-white">{m}</div><div className="text-xs text-lt-gray">{type} · {exp}</div></div>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-bold ${st==='Active'?'text-green-400 bg-green-400/10 border-green-400/20':'text-lt-red bg-lt-red/10 border-lt-red/20'}`}>{st}</span>
              </div>
            ))}
          </div>
          <div className="card">
            <div className="flex items-center gap-2 mb-4"><BarChart3 size={16} className="text-blue-400"/><h3 className="font-display font-bold text-xl text-white uppercase">Spare Parts Tracker</h3></div>
            {[['Engine Oil Filter','PC210','In Stock','✅'],['Final Drive Gear','HD465','2 Weeks','⏳'],['Bucket Tooth Set','PC350','In Stock','✅'],['Air Filter Element','D155','3 Days','🔄']].map(([part,m,avail,icon]) => (
              <div key={part} className="flex items-center justify-between py-2.5 border-b border-lt-gray-border/50 last:border-0">
                <div><div className="text-sm font-body text-white">{part}</div><div className="text-xs text-lt-gray">{m}</div></div>
                <span className="text-xs text-lt-gray-dark font-body">{icon} {avail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
