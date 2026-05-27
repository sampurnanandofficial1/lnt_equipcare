import { Play, Award, Globe, BookOpen, ChevronRight, Lock } from 'lucide-react'

const ROLES = [
  { role:'Operator',    color:'bg-lt-blue',   mods:8,  topics:['Safe Operations','Fuel Efficiency','Daily Inspection','Productivity'] },
  { role:'Supervisor',  color:'bg-lt-navy',  mods:6,  topics:['Utilization','Site Safety','Machine Planning','Productivity Metrics'] },
  { role:'Fleet Owner', color:'bg-orange-500',mods:5, topics:['TCO Optimization','AMC Planning','Lifecycle Mgmt','Fleet ROI'] },
  { role:'Technician',  color:'bg-green-600',mods:10, topics:['Diagnostics','Repair Workflows','Hydraulics','Engine Overhaul'] },
]
const LANGS = ['हिंदी','தமிழ்','తెలుగు','ಕನ್ನಡ','मराठी','বাংলা','ਪੰਜਾਬੀ','English']

export default function TrainingAcademy() {
  return (
    <section className="py-20 bg-lt-gray-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-3">Digital Learning</div>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">Equipment Training Academy</h2>
          <div className="divider-blue mx-auto mb-5"/>
          <p className="section-subtitle max-w-xl mx-auto">Role-based certifications with gamification & 8 Indian languages.</p>
        </div>

        {/* Language strip */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <span className="flex items-center gap-1.5 text-xs font-body font-semibold text-lt-navy"><Globe size={13}/> Available in:</span>
          {LANGS.map(l => (
            <span key={l} className="text-xs px-3 py-1 rounded-full border border-lt-gray-border bg-white text-lt-gray-dark font-body shadow-sm">{l}</span>
          ))}
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {ROLES.map(r => (
            <div key={r.role} className="card p-5 flex flex-col">
              <div className={`w-10 h-10 rounded-lg ${r.color} flex items-center justify-center mb-4`}>
                <BookOpen size={18} className="text-white"/>
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-bold text-xl text-lt-navy uppercase">{r.role}</h3>
                <span className="text-xs border border-lt-gray-border text-lt-gray px-2 py-0.5 rounded font-body">{r.mods} Modules</span>
              </div>
              <ul className="space-y-1.5 flex-1">
                {r.topics.map(t => (
                  <li key={t} className="flex items-center gap-2 text-sm text-lt-gray-dark font-body">
                    <Play size={10} className="text-lt-blue fill-lt-blue flex-shrink-0"/>{t}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-1.5 mt-4 text-xs font-body font-semibold text-lt-blue border-t border-lt-gray-border pt-3">
                <Award size={12}/> Certification Available
              </div>
            </div>
          ))}
        </div>

        {/* ATC callout */}
        <div className="card border-t-4 border-lt-blue p-6 sm:p-8 text-center max-w-3xl mx-auto">
          <div className="text-4xl mb-3">🏆</div>
          <h3 className="font-display font-bold text-2xl text-lt-navy uppercase mb-2">Komatsu ATC — Asia's Premier Technical Contest</h3>
          <p className="text-sm text-lt-gray font-body mb-5 max-w-xl mx-auto">
            L&T engineers consistently win at Asian ATC. Mr. Oscar D'Silva — 7th in the World, 1st in Asia.
            Prepare your technicians with our ATC-focused training.
          </p>
          <button className="btn-yellow inline-flex items-center gap-2 mx-auto">
            <Award size={15}/> Start ATC Prep Course <ChevronRight size={13}/>
          </button>
        </div>
      </div>
    </section>
  )
}
