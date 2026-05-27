import { Play, Award, Globe, BookOpen, ChevronRight } from 'lucide-react'

const ROLES = [
  { role:'Operator',        color:'yellow', modules:8,  topics:['Safe Operations','Fuel Efficiency','Daily Inspection','Productivity Tips'], cert:'Komatsu Operator Cert' },
  { role:'Site Supervisor', color:'blue',   modules:6,  topics:['Utilization Tracking','Site Safety','Machine Planning','Productivity Metrics'], cert:'Site Management Cert' },
  { role:'Fleet Owner',     color:'gold',   modules:5,  topics:['TCO Optimization','AMC Planning','Lifecycle Management','Fleet ROI'], cert:'Fleet Management Cert' },
  { role:'Technician',      color:'green',  modules:10, topics:['Diagnostics','Repair Workflows','Hydraulics','Engine Overhaul'], cert:'ATC Prep Certification' },
]

const COLOR = {
  yellow: { bg:'bg-yellow-400/10', border:'border-yellow-400/20', text:'text-yellow-400' },
  blue:   { bg:'bg-blue-400/10',   border:'border-blue-400/20',   text:'text-blue-400'   },
  gold:   { bg:'bg-lt-gold/10',    border:'border-lt-gold/20',    text:'text-lt-gold'    },
  green:  { bg:'bg-green-400/10',  border:'border-green-400/20',  text:'text-green-400'  },
}

const LANGS = ['हिंदी','தமிழ்','తెలుగు','ಕನ್ನಡ','मराठी','বাংলা','ਪੰਜਾਬੀ','English']

export default function TrainingAcademy() {
  return (
    <section className="py-24 bg-lt-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-3">Digital Learning</div>
          <h2 className="section-title mb-4">L&T Equipment Training Academy</h2>
          <div className="divider-red mx-auto mb-5"/>
          <p className="text-base text-lt-gray-muted font-body max-w-xl mx-auto">
            Role-based digital learning with certifications, gamification & regional language support.
            From operator safety to technician ATC preparation.
          </p>
        </div>

        {/* Language strip */}
        <div className="flex items-center gap-3 mb-10 flex-wrap justify-center">
          <div className="flex items-center gap-1.5 text-xs text-lt-gold font-body font-semibold">
            <Globe size={13}/> Available in:
          </div>
          {LANGS.map(l => (
            <span key={l} className="text-xs px-3 py-1 rounded-full border border-lt-surface-border bg-lt-surface-card text-gray-300 font-body">{l}</span>
          ))}
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {ROLES.map(r => {
            const c = COLOR[r.color]
            return (
              <div key={r.role} className={`card-dark border ${c.border} ${c.bg} flex flex-col`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-xs font-body font-bold uppercase tracking-wider ${c.text}`}>{r.role}</div>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${c.border} ${c.text} font-body`}>{r.modules} Modules</span>
                </div>
                <ul className="space-y-2 flex-1">
                  {r.topics.map(t => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-300 font-body">
                      <Play size={10} className={`${c.text} fill-current flex-shrink-0`}/>{t}
                    </li>
                  ))}
                </ul>
                <div className={`mt-4 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-body font-semibold ${c.text}`}>
                  <Award size={12}/>{r.cert}
                </div>
              </div>
            )
          })}
        </div>

        {/* Features strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon:'🎮', title:'Gamification', sub:'Points, badges & leaderboards' },
            { icon:'📜', title:'Certifications', sub:'Industry-recognized credentials' },
            { icon:'📱', title:'Offline Ready', sub:'Download & learn anywhere' },
            { icon:'📊', title:'Progress Tracking', sub:'Manager & fleet owner visibility' },
          ].map(f => (
            <div key={f.title} className="card-dark text-center">
              <div className="text-3xl mb-2">{f.icon}</div>
              <div className="font-display font-bold text-white text-base uppercase">{f.title}</div>
              <div className="text-xs text-lt-gray-muted font-body mt-1">{f.sub}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="btn-red flex items-center gap-2 mx-auto">
            <BookOpen size={15}/> Explore Training Academy <ChevronRight size={14}/>
          </button>
        </div>
      </div>
    </section>
  )
}
