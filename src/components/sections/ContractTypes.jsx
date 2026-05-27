import { CheckCircle2, ArrowRight } from 'lucide-react'

const CONTRACTS = [
  {
    id:'FMC/MARC',
    full:'Full Maintenance Contract',
    color:'border-lt-red/40 hover:border-lt-red',
    badge:'text-lt-red bg-lt-red/10 border-lt-red/20',
    icon:'🛡️',
    best:'Large mining fleets, critical equipment',
    billing:['Hourly Parts Billing','Lumpsum Monthly Service','AG Commitment to customer','Priority response SLA'],
    highlight: true,
  },
  {
    id:'CMC',
    full:'Comprehensive Maintenance Contract',
    color:'border-blue-500/30 hover:border-blue-500',
    badge:'text-blue-400 bg-blue-500/10 border-blue-500/20',
    icon:'⚙️',
    best:'Mid-size fleets with defined parts usage',
    billing:['Parts as per contract list','AG Commitment to customer','Free supply beyond list','%AG availability guarantee'],
    highlight: false,
  },
  {
    id:'Cost Cap',
    full:'Cost Cap Contract',
    color:'border-lt-gold/30 hover:border-lt-gold',
    badge:'text-lt-gold bg-lt-gold/10 border-lt-gold/20',
    icon:'📊',
    best:'Budget-conscious operations',
    billing:['Yearly billing cycle','Fixed parts cap value','No service billing','AG commitment included'],
    highlight: false,
  },
  {
    id:'SSA',
    full:'Site Support Agreement',
    color:'border-green-500/30 hover:border-green-500',
    badge:'text-green-400 bg-green-500/10 border-green-500/20',
    icon:'🔧',
    best:'Remote sites needing on-call support',
    billing:['Monthly service billing','Parts as per customer PO','On-site technical support','Periodic health monitoring'],
    highlight: false,
  },
]

export default function ContractTypes() {
  return (
    <section className="py-24 bg-lt-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-3">Service Contracts</div>
          <h2 className="section-title mb-4">Find the Right AMC for Your Fleet</h2>
          <div className="divider-red mx-auto mb-5"/>
          <p className="text-base text-lt-gray-muted font-body max-w-xl mx-auto">
            Five contract types designed for every fleet size, usage pattern & budget.
            Our AI will recommend the right one based on your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONTRACTS.map(c => (
            <div key={c.id}
              className={`card-dark border-2 ${c.color} transition-all duration-300 flex flex-col
                ${c.highlight ? 'ring-1 ring-lt-red/20' : ''}`}>
              {c.highlight && (
                <div className="text-center mb-4">
                  <span className="text-[10px] font-body font-bold text-lt-red bg-lt-red/10 border border-lt-red/20 px-3 py-0.5 rounded-full uppercase tracking-wider">Most Popular</span>
                </div>
              )}
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className={`inline-flex self-start items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${c.badge} mb-3`}>
                {c.id}
              </div>
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-1">{c.full}</h3>
              <p className="text-xs text-lt-gray-muted font-body mb-4">Best for: {c.best}</p>

              <ul className="space-y-2 flex-1">
                {c.billing.map(b => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-300 font-body">
                    <CheckCircle2 size={13} className="text-green-400 mt-0.5 flex-shrink-0"/>
                    {b}
                  </li>
                ))}
              </ul>

              <button className="mt-5 w-full py-2.5 border border-lt-surface-border text-lt-gray-muted text-xs font-body
                                 rounded-lg hover:border-lt-red/40 hover:text-white transition-all flex items-center justify-center gap-1.5">
                Enquire About {c.id} <ArrowRight size={12}/>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-lt-gray-muted font-body mb-4">Not sure which contract fits your fleet?</p>
          <button className="btn-red flex items-center gap-2 mx-auto">
            <span>Let AI Recommend the Right AMC</span>
            <ArrowRight size={14}/>
          </button>
        </div>
      </div>
    </section>
  )
}
