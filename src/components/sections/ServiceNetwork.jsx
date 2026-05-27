import { MapPin, Clock, Award, Phone } from 'lucide-react'

const CENTERS = [
  { name:'Nagpur',       zone:'West',  area:'28,300', est:2015, pop_ce:1476, pop_me:398,  cert:'Gold' },
  { name:'Kanchipuram',  zone:'South', area:'29,468', est:2014, pop_ce:5883, pop_me:582,  cert:'Gold' },
  { name:'Durgapur',     zone:'East',  area:'8,094',  est:2009, pop_ce:5517, pop_me:684,  cert:'Gold' },
  { name:'Singrauli',    zone:'North', area:'10,080', est:2018, pop_ce:1306, pop_me:null, cert:'Gold' },
  { name:'Bahadurgarh',  zone:'North', area:'4,092',  est:2010, pop_ce:1334, pop_me:435,  cert:'Silver' },
  { name:'Pune',         zone:'West',  area:'1,474',  est:1995, pop_ce:1501, pop_me:null, cert:'Silver' },
]

const ZONE_COLOR = { North:'text-blue-400', South:'text-green-400', East:'text-purple-400', West:'text-orange-400' }
const CERT_COLOR  = { Gold:'text-lt-gold', Silver:'text-lt-gray-muted' }

export default function ServiceNetwork() {
  return (
    <section className="py-24 bg-lt-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-3">Pan-India Coverage</div>
          <h2 className="section-title mb-4">6 World-Class Service Centers</h2>
          <div className="divider-red mx-auto mb-5"/>
          <p className="text-base text-lt-gray-muted font-body max-w-xl mx-auto">
            Komatsu Gold Rebuild Certified facilities — the first Asian distributor to receive Level 3 Gold Certification.
          </p>
        </div>

        {/* Summary bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { v:'6',    l:'Service Centers', sub:'Pan-India' },
            { v:'4',    l:'Marketing Zones', sub:'N / S / E / W' },
            { v:'92%',  l:'Machine Availability', sub:'Under Contract' },
            { v:'24×7', l:'On-site Support', sub:'1,100+ engineers deployed' },
          ].map(s => (
            <div key={s.l} className="card-dark text-center">
              <div className="font-display font-black text-3xl text-lt-red">{s.v}</div>
              <div className="text-sm font-body font-semibold text-white mt-1">{s.l}</div>
              <div className="text-xs text-lt-gray-muted font-body">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Centers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CENTERS.map((c,i) => (
            <div key={c.name} className="card-dark group">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-lt-red"/>
                    <span className="font-display font-bold text-xl text-white uppercase tracking-wide">{c.name}</span>
                  </div>
                  <span className={`text-xs font-body font-semibold ${ZONE_COLOR[c.zone]} mt-0.5 block`}>
                    {c.zone} Zone
                  </span>
                </div>
                <div className="text-right">
                  <div className={`flex items-center gap-1 text-xs font-bold ${CERT_COLOR[c.cert]}`}>
                    <Award size={12}/> Komatsu {c.cert}
                  </div>
                  <div className="text-xs text-lt-gray-muted font-body mt-0.5">
                    <Clock size={10} className="inline mr-1"/>Est. {c.est}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="bg-black/20 rounded-lg p-2 text-center">
                  <div className="text-xs text-lt-gray-muted font-body">Area</div>
                  <div className="text-sm font-display font-bold text-white">{c.area}</div>
                  <div className="text-[10px] text-lt-gray-muted">sqm</div>
                </div>
                <div className="bg-black/20 rounded-lg p-2 text-center">
                  <div className="text-xs text-lt-gray-muted font-body">CE Fleet</div>
                  <div className="text-sm font-display font-bold text-blue-400">{c.pop_ce?.toLocaleString() || '—'}</div>
                  <div className="text-[10px] text-lt-gray-muted">units</div>
                </div>
                <div className="bg-black/20 rounded-lg p-2 text-center">
                  <div className="text-xs text-lt-gray-muted font-body">ME Fleet</div>
                  <div className="text-sm font-display font-bold text-lt-gold">{c.pop_me?.toLocaleString() || '—'}</div>
                  <div className="text-[10px] text-lt-gray-muted">units</div>
                </div>
              </div>

              <button className="w-full mt-4 py-2 border border-lt-surface-border text-lt-gray-muted text-xs font-body
                                 rounded-lg hover:border-lt-red/40 hover:text-lt-red transition-all flex items-center justify-center gap-1.5">
                <Phone size={11}/> Contact {c.name}
              </button>
            </div>
          ))}
        </div>

        {/* Capabilities strip */}
        <div className="mt-10 p-5 rounded-2xl border border-lt-surface-border bg-lt-surface-card">
          <div className="text-xs text-lt-gold font-body font-bold uppercase tracking-widest mb-3">Service Center Capabilities</div>
          <div className="flex flex-wrap gap-2">
            {['Dust-Free Assembly','Engine Repairs','Dynamometer Testing','Transmission Overhaul',
              'Hydraulics Test Bench','Structural Repairs','Component Recon','Accident Repairs',
              'Used Equipment Refurb','PPM Repair','Extended Warranty Rebuilds'].map(c => (
              <span key={c} className="text-xs px-2.5 py-1 rounded-full border border-lt-surface-border text-lt-gray-muted">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
