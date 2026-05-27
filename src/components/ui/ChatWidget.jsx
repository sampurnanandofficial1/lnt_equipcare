import { useState, useRef, useEffect } from 'react'
import { X, Send, Bot, User, Loader2, Phone, Minimize2, Maximize2, AlertCircle } from 'lucide-react'
import { sendMessage, generateSessionId } from '../../lib/chatApi'
import { saveChatSession } from '../../lib/firebase'

const QUICK = ['Book a service request','Check AMC contract types','Nearest service center','Warning code help','Spare parts enquiry','Breakdown support']
const WELCOME = `Hello! I'm the **L&T Equipcare AI Assistant** 🔧\n\nI can help you with:\n• Service booking & AMC contracts\n• Troubleshooting & warning codes\n• Spare parts enquiries\n• Nearest service center\n• Machine maintenance guidance\n\nHow can I assist you today?`

function fmt(t) {
  return t.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/•/g,'&#8226;').replace(/\n/g,'<br/>')
}

export default function ChatWidget({ open, onClose }) {
  const [messages, setMessages] = useState([{ role:'assistant', content:WELCOME }])
  const [input, setInput]       = useState('')
  const [loading, setLoading]   = useState(false)
  const [minimized, setMin]     = useState(false)
  const [sessionId]             = useState(generateSessionId)
  const [error, setError]       = useState(null)
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  useEffect(() => { if (open && !minimized) setTimeout(() => inputRef.current?.focus(), 300) }, [open, minimized])
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:'smooth' }) }, [messages, loading])

  const send = async (text) => {
    const q = (text || input).trim()
    if (!q || loading) return
    setInput(''); setError(null)
    const updated = [...messages, { role:'user', content:q }]
    setMessages(updated); setLoading(true)
    try {
      const apiMsgs = updated.filter(m => m.content !== WELCOME).map(m => ({ role:m.role, content:m.content }))
      const reply = await sendMessage(apiMsgs, sessionId)
      const final = [...updated, { role:'assistant', content:reply }]
      setMessages(final)
      if (final.length % 5 === 0) await saveChatSession({ sessionId, messages:final, messageCount:final.length })
    } catch { setError('Connection issue. Please try again or call 1800-833-9990.') }
    finally { setLoading(false) }
  }

  if (!open) return null

  return (
    <div className={`fixed bottom-6 right-6 z-[100] flex flex-col transition-all duration-300 rounded-2xl overflow-hidden
                     shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-lt-gray-border
                     ${minimized ? 'h-14 w-80' : 'h-[580px] w-[370px] max-h-[90vh]'}`}>

      {/* Header — navy blue */}
      <div className="flex items-center justify-between px-4 py-3 bg-lt-blue">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={16} className="text-white"/>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-lt-yellow rounded-full border-2 border-lt-blue"/>
          </div>
          <div>
            <div className="text-sm font-display font-bold text-white uppercase tracking-wide">Equipcare AI</div>
            <div className="text-[10px] text-blue-200 font-body">Online · 24×7 Support</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <a href="tel:18008339990" className="p-1.5 rounded text-blue-200 hover:text-lt-yellow hover:bg-white/10 transition-all" title="Call">
            <Phone size={13}/>
          </a>
          <button onClick={() => setMin(!minimized)} className="p-1.5 rounded text-blue-200 hover:text-white hover:bg-white/10 transition-all">
            {minimized ? <Maximize2 size={13}/> : <Minimize2 size={13}/>}
          </button>
          <button onClick={onClose} className="p-1.5 rounded text-blue-200 hover:text-white hover:bg-white/10 transition-all">
            <X size={13}/>
          </button>
        </div>
      </div>

      {!minimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-lt-gray-bg px-3 py-4 space-y-4">
            {messages.map((m,i) => (
              <div key={i} className={`flex gap-2.5 ${m.role==='user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5
                  ${m.role==='assistant' ? 'bg-lt-blue' : 'bg-lt-navy'}`}>
                  {m.role==='assistant' ? <Bot size={13} className="text-white"/> : <User size={13} className="text-white"/>}
                </div>
                <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed font-body
                  ${m.role==='assistant'
                    ? 'bg-white border border-lt-gray-border text-lt-navy rounded-tl-sm shadow-sm'
                    : 'bg-lt-blue text-white rounded-tr-sm'}`}
                  dangerouslySetInnerHTML={{ __html: fmt(m.content) }}/>
              </div>
            ))}
            {loading && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-lt-blue flex items-center justify-center">
                  <Bot size={13} className="text-white"/>
                </div>
                <div className="bg-white border border-lt-gray-border rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5">
                    {[0,1,2].map(i => <div key={i} className="w-1.5 h-1.5 bg-lt-gray rounded-full animate-bounce" style={{animationDelay:`${i*0.15}s`}}/>)}
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="flex items-start gap-2 px-3 py-2.5 bg-lt-blue-pale border border-lt-blue/20 rounded-xl text-xs text-lt-blue">
                <AlertCircle size={13} className="mt-0.5 flex-shrink-0"/>{error}
              </div>
            )}
            <div ref={bottomRef}/>
          </div>

          {/* Quick replies */}
          {messages.length <= 1 && (
            <div className="bg-white px-3 pt-2 pb-2 border-t border-lt-gray-border">
              <div className="text-[10px] text-lt-gray font-body mb-2 uppercase tracking-wider">Quick Actions</div>
              <div className="flex flex-wrap gap-1.5">
                {QUICK.map(q => (
                  <button key={q} onClick={() => send(q)}
                    className="text-xs px-2.5 py-1 rounded-full border border-lt-gray-border text-lt-gray-dark bg-lt-gray-bg
                               hover:border-lt-blue hover:text-lt-blue hover:bg-lt-blue-pale transition-all">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 bg-white border-t border-lt-gray-border">
            <div className="flex gap-2 items-end">
              <textarea ref={inputRef} value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key==='Enter' && !e.shiftKey) { e.preventDefault(); send() }}}
                placeholder="Ask about service, parts, contracts..."
                rows={1}
                className="flex-1 border border-lt-gray-border rounded-xl px-3.5 py-2.5 text-sm text-lt-navy
                           placeholder-lt-gray font-body resize-none focus:outline-none focus:border-lt-blue transition-colors"
                style={{ minHeight:'40px', maxHeight:'100px' }}/>
              <button onClick={() => send()} disabled={!input.trim() || loading}
                className="w-10 h-10 rounded-xl bg-lt-blue text-white flex items-center justify-center
                           hover:bg-lt-blue-dark disabled:opacity-40 disabled:cursor-not-allowed transition-all flex-shrink-0">
                {loading ? <Loader2 size={15} className="animate-spin"/> : <Send size={15}/>}
              </button>
            </div>
            <div className="text-[10px] text-lt-gray mt-1.5 text-center font-body">Powered by Claude AI · L&T CMMB Equipcare</div>
          </div>
        </>
      )}
    </div>
  )
}
