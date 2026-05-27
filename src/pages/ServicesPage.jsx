import { useState } from 'react'
import { Wrench, Calendar, FileText, MapPin, CheckCircle2, Loader2 } from 'lucide-react'
import { saveServiceRequest } from '../lib/firebase'

const MACHINE_TYPES = ['PC200/205/210 Excavator','PC300/350 Excavator','PC450 Excavator','D85 Dozer','D155 Dozer','GD535/GD705 Motor Grader','HD465/HD785 Dump Truck','WA470 Wheel Loader']
const SERVICE_TYPES = ['Breakdown Repair','Preventive Maintenance (PM)','Component Overhaul','Engine Repair','Hydraulics Service','Structural Repair','Pre-delivery Inspection','AMC Service']
const ZONES = ['North Zone (Delhi/Jaipur/Singrauli)','South Zone (Hyderabad)','East Zone (Kolkata/Durgapur)','West Zone (Mumbai/Ahmedabad/Raipur/Nagpur)']

export default function ServicesPage() {
  const [form, setForm] = useState({ name:'', company:'', phone:'', machine:'', serial:'', serviceType:'', zone:'', desc:'' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [ticketId, setTicketId]   = useState(null)

  const set = k => e => setForm(f => ({...f, [k]: e.target.value}))

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.machine || !form.serviceType) return
    setLoading(true)
    const id = await saveServiceRequest({ ...form, createdAt: new Date().toISOString() })
    setTicketId(id || 'TKT-' + Date.now().toString().slice(-6))
    setSubmitted(true)
    setLoading(false)
  }

  const inputCls = "w-full card px-4 py-2.5 text-sm text-lt-navy placeholder-lt-gray font-body focus:outline-none focus:border-lt-red transition-colors"
  const selectCls = `${inputCls} cursor-pointer`

  return (
    <div className="min-h-screen bg-white" style={{ paddingTop:'100px' }}>
      <div className="bg-lt-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-label mb-2 text-lt-red">Service & Support</div>
          <h1 className="font-display font-bold text-5xl text-white uppercase mb-3">Service Management</h1>
          <p className="text-gray-400 font-body max-w-xl">Book service, track AMC, manage warranties & raise breakdown requests — all in one place.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Service Booking Form */}
          <div className="lg:col-span-2">
            <div className="card-dark">
              <div className="flex items-center gap-3 mb-6">
                <Wrench size={20} className="text-lt-red"/>
                <h2 className="font-display font-bold text-2xl text-white uppercase">Book a Service Request</h2>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 size={52} className="text-green-400 mx-auto mb-4"/>
                  <h3 className="font-display font-bold text-2xl text-white uppercase mb-2">Request Submitted!</h3>
                  <p className="text-lt-gray font-body mb-4">Your service ticket has been created.</p>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-400/10 border border-green-400/20 rounded-xl">
                    <span className="text-sm font-body font-semibold text-green-400">Ticket ID: {ticketId}</span>
                  </div>
                  <p className="text-xs text-lt-gray font-body mt-4">Our team will contact you within 2–4 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name:'',company:'',phone:'',machine:'',serial:'',serviceType:'',zone:'',desc:'' }) }}
                    className="btn-outline mt-6">Raise Another Request</button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="text-xs text-lt-gray font-body mb-1.5 block uppercase tracking-wider">Contact Name *</label>
                    <input value={form.name} onChange={set('name')} placeholder="Your name" className={inputCls}/></div>
                  <div><label className="text-xs text-lt-gray font-body mb-1.5 block uppercase tracking-wider">Company / Site Name</label>
                    <input value={form.company} onChange={set('company')} placeholder="Company or project site" className={inputCls}/></div>
                  <div><label className="text-xs text-lt-gray font-body mb-1.5 block uppercase tracking-wider">Phone Number *</label>
                    <input value={form.phone} onChange={set('phone')} placeholder="+91 XXXXX XXXXX" className={inputCls}/></div>
                  <div><label className="text-xs text-lt-gray font-body mb-1.5 block uppercase tracking-wider">Machine Type *</label>
                    <select value={form.machine} onChange={set('machine')} className={selectCls}>
                      <option value="">Select machine...</option>
                      {MACHINE_TYPES.map(m => <option key={m}>{m}</option>)}
                    </select></div>
                  <div><label className="text-xs text-lt-gray font-body mb-1.5 block uppercase tracking-wider">Serial / PIN Number</label>
                    <input value={form.serial} onChange={set('serial')} placeholder="Machine serial number" className={inputCls}/></div>
                  <div><label className="text-xs text-lt-gray font-body mb-1.5 block uppercase tracking-wider">Service Required *</label>
                    <select value={form.serviceType} onChange={set('serviceType')} className={selectCls}>
                      <option value="">Select service type...</option>
                      {SERVICE_TYPES.map(s => <option key={s}>{s}</option>)}
                    </select></div>
                  <div className="sm:col-span-2"><label className="text-xs text-lt-gray font-body mb-1.5 block uppercase tracking-wider">Zone / Region *</label>
                    <select value={form.zone} onChange={set('zone')} className={selectCls}>
                      <option value="">Select your zone...</option>
                      {ZONES.map(z => <option key={z}>{z}</option>)}
                    </select></div>
                  <div className="sm:col-span-2"><label className="text-xs text-lt-gray font-body mb-1.5 block uppercase tracking-wider">Issue Description</label>
                    <textarea value={form.desc} onChange={set('desc')} rows={3} placeholder="Describe the issue or service needed..."
                      className={`${inputCls} resize-none`}/></div>
                  <div className="sm:col-span-2">
                    <button onClick={handleSubmit} disabled={loading || !form.name || !form.phone}
                      className="btn-red flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                      {loading ? <Loader2 size={14} className="animate-spin"/> : <Wrench size={14}/>}
                      Submit Service Request
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar info */}
          <div className="space-y-5">
            <div className="card-dark">
              <div className="flex items-center gap-2 mb-4"><Calendar size={16} className="text-lt-red"/><h3 className="font-display font-bold text-lg text-white uppercase">Response Times</h3></div>
              {[['Breakdown','2–4 hours','Critical'],['PM Service','24 hours','Normal'],['Component Overhaul','48 hours','Planned'],['AMC Renewal','Same day','Admin']].map(([t,r,p]) => (
                <div key={t} className="flex items-center justify-between py-2 border-b border-lt-gray-border/50 last:border-0">
                  <div><div className="text-sm font-body text-white">{t}</div><div className="text-xs text-lt-gray">{p}</div></div>
                  <span className="text-xs text-lt-gold font-body font-semibold">{r}</span>
                </div>
              ))}
            </div>

            <div className="card-dark">
              <div className="flex items-center gap-2 mb-4"><FileText size={16} className="text-blue-400"/><h3 className="font-display font-bold text-lg text-white uppercase">AMC Types Available</h3></div>
              {['FMC / MARC','CMC','Cost Cap','SSA','GPC'].map(a => (
                <div key={a} className="flex items-center gap-2 py-1.5 border-b border-lt-gray-border/50 last:border-0">
                  <CheckCircle2 size={12} className="text-green-400 flex-shrink-0"/>
                  <span className="text-sm text-gray-300 font-body">{a}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-lt-red-pale border border-lt-red/30">
              <div className="text-xs font-body font-bold text-lt-red uppercase tracking-wider mb-2">Emergency Breakdown?</div>
              <p className="text-xs text-lt-gray font-body mb-3">Call Equipcare directly for immediate field dispatch.</p>
              <a href="tel:1800XXXXXXX" className="btn-red w-full text-center flex items-center justify-center gap-1.5 text-xs">
                📞 1800-XXX-XXXX (24×7)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
