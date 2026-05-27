import { CheckCircle2, ArrowRight, Star } from 'lucide-react'

const CONTRACTS = [
  { id:'FMC/MARC', full:'Full Maintenance Contract',         emoji:'🛡️', best:'Large mining fleets',          color:'border-lt-blue', badgeCls:'bg-lt-blue text-white', popular:true,  items:['Hourly Parts Billing','Lumpsum Monthly Service','AG Commitment','Priority SLA'] },
  { id:'CMC',      full:'Comprehensive Maintenance Contract',emoji:'⚙️', best:'Mid-size defined-usage fleets',color:'border-blue-500',badgeCls:'bg-blue-600 text-white',popular:false, items:['Parts per contract list','AG Commitment','Free supply beyond list','%AG guarantee'] },
  { id:'Cost Cap', full:'Cost Cap Contract',                 emoji:'📊', best:'Budget-conscious operations',  color:'border-orange-400',badgeCls:'bg-orange-500 text-white',popular:false,items:['Yearly billing','Fixed parts cap','No service billing','AG commitment'] },
  { id:'SSA',      full:'Site Support Agreement',            emoji:'🔧', best:'Remote on-call sites',         color:'border-green-500',badgeCls:'bg-green-600 text-white',popular:false, items:['Monthly service billing','Parts per PO','On-site support','Periodic monitoring'] },
]

export default function ContractTypes() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-3">Service Contracts</div>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">Find the Right AMC for Your Fleet</h2>
          <div className="divider-blue mx-auto mb-5"/>
          <p className="section-subtitle max-w-xl mx-auto">Five contract types designed for every fleet size, usage pattern & budget. Let our AI recommend the right one.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTRACTS.map(c => (
            <div key={c.id} className={`card border-t-4 ${c.color} p-5 flex flex-col relative`}>
              {c.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 bg-lt-yellow text-lt-navy text-[10px] font-bold px-3 py-1 rounded-full shadow">
                    <Star size={9} className="fill-white"/> Most Popular
                  </span>
                </div>
              )}
              <div className="text-3xl mb-3 mt-2">{c.emoji}</div>
              <span className={`self-start text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 ${c.badgeCls}`}>{c.id}</span>
              <h3 className="font-display font-bold text-lg text-lt-navy uppercase mb-1">{c.full}</h3>
              <p className="text-xs text-lt-gray font-body mb-4">Best for: {c.best}</p>
              <ul className="space-y-1.5 flex-1">
                {c.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-lt-gray-dark font-body">
                    <CheckCircle2 size={13} className="text-green-600 mt-0.5 flex-shrink-0"/>{item}
                  </li>
                ))}
              </ul>
              <button className="mt-5 w-full btn-outline flex items-center justify-center gap-1.5 text-xs">
                Enquire <ArrowRight size={11}/>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-lt-gray font-body mb-4">Not sure which contract fits your fleet?</p>
          <button className="btn-primary flex items-center gap-2 mx-auto">Let AI Recommend the Right AMC <ArrowRight size={14}/></button>
        </div>
      </div>
    </section>
  )
}
