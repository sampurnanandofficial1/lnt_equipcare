import { Play, Lock, Award, Globe, Clock, ChevronRight } from 'lucide-react'

const COURSES = [
  { id:1, role:'Operator',   title:'Safe Machine Operation',       duration:'45 min', lang:'Hindi / English', level:'Beginner',      status:'free',   icon:'🦺', cert:true },
  { id:2, role:'Operator',   title:'Fuel Efficiency Techniques',   duration:'30 min', lang:'Tamil / English', level:'Intermediate',  status:'free',   icon:'⛽', cert:false },
  { id:3, role:'Operator',   title:'Daily Inspection Checklist',   duration:'20 min', lang:'10 Languages',    level:'Beginner',      status:'free',   icon:'✅', cert:true },
  { id:4, role:'Supervisor', title:'Site Productivity Dashboard',  duration:'60 min', lang:'Hindi / English', level:'Intermediate',  status:'locked', icon:'📊', cert:true },
  { id:5, role:'Supervisor', title:'Machine Utilization Planning', duration:'45 min', lang:'English',         level:'Advanced',      status:'locked', icon:'🗓️', cert:true },
  { id:6, role:'Fleet Owner',title:'TCO Optimization Masterclass', duration:'90 min', lang:'English',         level:'Advanced',      status:'locked', icon:'💰', cert:true },
  { id:7, role:'Fleet Owner',title:'Lifecycle Management Guide',   duration:'60 min', lang:'Hindi / English', level:'Intermediate',  status:'locked', icon:'♻️', cert:false },
  { id:8, role:'Technician', title:'Engine Diagnostics Workflow',  duration:'120 min',lang:'Hindi / English', level:'Advanced',      status:'locked', icon:'🔧', cert:true },
  { id:9, role:'Technician', title:'ATC Examination Preparation',  duration:'180 min',lang:'English',         level:'Expert',        status:'locked', icon:'🏆', cert:true },
]

const ROLE_COLOR = { Operator:'text-yellow-400', Supervisor:'text-blue-400', 'Fleet Owner':'text-lt-gold', Technician:'text-green-400' }
const LEVEL_COLOR = { Beginner:'text-green-400 bg-green-400/10 border-green-400/20', Intermediate:'text-blue-400 bg-blue-400/10 border-blue-400/20', Advanced:'text-orange-400 bg-orange-400/10 border-orange-400/20', Expert:'text-lt-red bg-lt-red/10 border-lt-red/20' }

export default function TrainingPage() {
  return (
    <div className="min-h-screen pt-20 bg-lt-navy">
      <div className="bg-lt-surface border-b border-lt-surface-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label mb-2">Digital Learning</div>
          <h1 className="section-title mb-3">Equipment Training Academy</h1>
          <p className="text-lt-gray-muted font-body max-w-xl mb-6">Role-based learning for operators, supervisors, fleet owners & technicians — with certifications, regional languages & gamification.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            {[['9+','Courses Available'],['8','Indian Languages'],['4','Certifications'],['24×7','Self-Paced Access']].map(([v,l]) => (
              <div key={l} className="flex items-center gap-2"><span className="font-display font-bold text-xl text-lt-red">{v}</span><span className="text-lt-gray-muted font-body">{l}</span></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSES.map(c => (
            <div key={c.id} className="card-dark flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{c.icon}</span>
                <div className="flex gap-1.5">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold ${LEVEL_COLOR[c.level]}`}>{c.level}</span>
                  {c.cert && <span className="tag-gold text-[10px]"><Award size={9}/>Cert</span>}
                </div>
              </div>

              <div className={`text-[10px] font-body font-bold uppercase tracking-widest mb-1 ${ROLE_COLOR[c.role]}`}>{c.role}</div>
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-3 flex-1">{c.title}</h3>

              <div className="flex gap-3 text-xs text-lt-gray-muted font-body mb-4">
                <span className="flex items-center gap-1"><Clock size={10}/>{c.duration}</span>
                <span className="flex items-center gap-1"><Globe size={10}/>{c.lang}</span>
              </div>

              <button className={`w-full py-2.5 rounded-xl text-sm font-body font-semibold transition-all flex items-center justify-center gap-2
                ${c.status==='free'
                  ? 'bg-lt-red text-white hover:bg-lt-red-dark'
                  : 'border border-lt-surface-border text-lt-gray-muted hover:border-white/20 hover:text-white'}`}>
                {c.status==='free' ? <><Play size={13}/>Start Course</> : <><Lock size={13}/>Login to Access</>}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-lt-gold/20 bg-lt-gold/5 text-center">
          <div className="text-2xl mb-3">🏆</div>
          <h3 className="font-display font-bold text-2xl text-white uppercase mb-2">Komatsu ATC — Asia's Premier Technical Competition</h3>
          <p className="text-sm text-lt-gray-muted font-body mb-4 max-w-xl mx-auto">L&T engineers have consistently won at Asian ATC. Mr. Oscar D'Silva ranks 7th in the World. Prepare your technicians with our ATC-focused training modules.</p>
          <button className="btn-gold flex items-center gap-2 mx-auto">
            <Award size={14}/> Start ATC Prep Course <ChevronRight size={13}/>
          </button>
        </div>
      </div>
    </div>
  )
}
