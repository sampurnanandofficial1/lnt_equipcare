import { MapPin, Award, Clock } from 'lucide-react'

const CENTERS = [
  { name:'Nagpur',      zone:'West',  area:'28,300', est:2015, ce:1476, me:398,  cert:'Gold'   },
  { name:'Kanchipuram', zone:'South', area:'29,468', est:2014, ce:5883, me:582,  cert:'Gold'   },
  { name:'Durgapur',    zone:'East',  area:'8,094',  est:2009, ce:5517, me:684,  cert:'Gold'   },
  { name:'Singrauli',   zone:'North', area:'10,080', est:2018, ce:1306, me:null, cert:'Gold'   },
  { name:'Bahadurgarh', zone:'North', area:'4,092',  est:2010, ce:1334, me:435,  cert:'Silver' },
  { name:'Pune',        zone:'West',  area:'1,474',  est:1995, ce:1501, me:null, cert:'Silver' },
]

const ZONE = { North:'text-blue-700 bg-blue-50', South:'text-green-700 bg-green-50', East:'text-purple-700 bg-purple-50', West:'text-orange-700 bg-orange-50' }
const CERT = { Gold:'text-yellow-700 bg-yellow-50 border-yellow-200', Silver:'text-gray-600 bg-gray-100 border-gray-300' }

export default function ServiceNetwork() {
  return (
    <section className="py-20 bg-lt-gray-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-3">Pan-India Coverage</div>
          <h2 className="section-title text-4xl sm:text-5xl mb-4">6 World-Class Service Centers</h2>
          <div className="divider-blue mx-auto mb-5"/>
          <p className="section-subtitle max-w-xl mx-auto">First Asian distributor to receive Komatsu Level 3 Gold Rebuild Certification.</p>
        </div>

        {/* Summary strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[['6','Service Centers','Pan-India'],['4','Marketing Zones','N / S / E / W'],['92%','Machine Availability','Under Contract'],['24×7','On-Site Support','1,100+ engineers']].map(([v,l,s]) => (
            <div key={l} className="card p-5 text-center">
              <div className="font-display font-black text-3xl text-lt-blue">{v}</div>
              <div className="text-sm font-body font-semibold text-lt-navy mt-1">{l}</div>
              <div className="text-xs text-lt-gray font-body">{s}</div>
            </div>
          ))}
        </div>

        {/* Center cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CENTERS.map(c => (
            <div key={c.name} className="card-blue p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <MapPin size={13} className="text-lt-blue"/>
                    <span className="font-display font-bold text-xl text-lt-navy uppercase">{c.name}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ZONE[c.zone]}`}>{c.zone} Zone</span>
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${CERT[c.cert]}`}>
                  <Award size={10}/> {c.cert}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="bg-lt-gray-bg rounded p-2 text-center">
                  <div className="text-[10px] text-lt-gray font-body">Area</div>
                  <div className="text-sm font-display font-bold text-lt-navy">{c.area}</div>
                  <div className="text-[9px] text-lt-gray">sqm</div>
                </div>
                <div className="bg-lt-gray-bg rounded p-2 text-center">
                  <div className="text-[10px] text-lt-gray font-body">CE Fleet</div>
                  <div className="text-sm font-display font-bold text-lt-blue">{c.ce?.toLocaleString()||'—'}</div>
                </div>
                <div className="bg-lt-gray-bg rounded p-2 text-center">
                  <div className="text-[10px] text-lt-gray font-body">ME Fleet</div>
                  <div className="text-sm font-display font-bold text-lt-navy">{c.me?.toLocaleString()||'—'}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-3 text-[10px] text-lt-gray font-body">
                <Clock size={10}/> Est. {c.est}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
