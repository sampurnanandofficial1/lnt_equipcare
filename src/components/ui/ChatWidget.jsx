import { useState, useRef, useEffect } from 'react'
import { X, Send, Bot, User, Loader2, Phone, Minimize2, Maximize2, AlertCircle } from 'lucide-react'
import { sendMessage, generateSessionId } from '../../lib/chatApi'
import { saveChatSession } from '../../lib/firebase'

const QUICK = [
  'Book a service request',
  'Check AMC contract types',
  'Find nearest service center',
  'Explain warning codes',
  'Spare parts enquiry',
  'Machine breakdown support',
]

const WELCOME = `Namaste! I'm the **L&T Equipcare AI Assistant** 🔧

I can help you with:
• Service booking & AMC contracts
• Troubleshooting & warning codes
• Spare parts enquiries
• Nearest service center
• Machine maintenance guidance

How can I assist you today?`

function formatMsg(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/•/g, '&#8226;')
    .replace(/\n/g, '<br/>')
}

export default function ChatWidget({ open, onClose }) {
  const [messages, setMessages]   = useState([{ role:'assistant', content: WELCOME }])
  const [input, setInput]         = useState('')
  const [loading, setLoading]     = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [sessionId]               = useState(generateSessionId)
  const [error, setError]         = useState(null)
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  useEffect(() => {
    if (open && !minimized) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open, minimized])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async (text) => {
    const q = (text || input).trim()
    if (!q || loading) return
    setInput('')
    setError(null)

    const userMsg = { role: 'user', content: q }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setLoading(true)

    try {
      const apiMessages = updated
        .filter(m => m.content !== WELCOME)
        .map(m => ({ role: m.role, content: m.content }))

      const reply = await sendMessage(apiMessages, sessionId)
      const final = [...updated, { role: 'assistant', content: reply }]
      setMessages(final)

      // Save to Firebase every 5 messages
      if (final.length % 5 === 0) {
        await saveChatSession({ sessionId, messages: final, messageCount: final.length })
      }
    } catch (err) {
      setError('Connection issue. Please try again or call 1800-XXX-XXXX.')
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className={`fixed bottom-6 right-6 z-[100] flex flex-col transition-all duration-300
      ${minimized ? 'h-14 w-80' : 'h-[600px] w-[380px] max-h-[90vh]'}`}
      style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5))' }}>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-lt-navy-800 to-lt-blue-dark rounded-t-2xl border border-lt-surface-border border-b-0">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-8 h-8 bg-lt-red rounded-full flex items-center justify-center">
              <Bot size={16} className="text-white"/>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-lt-navy-800"/>
          </div>
          <div>
            <div className="text-sm font-display font-bold text-white uppercase tracking-wide">Equipcare AI</div>
            <div className="text-[10px] text-green-400 font-body">Online · 24x7</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <a href="tel:1800XXXXXXX"
            className="p-1.5 rounded-lg text-lt-gray-muted hover:text-lt-gold hover:bg-lt-gold/10 transition-all" title="Call Equipcare">
            <Phone size={14}/>
          </a>
          <button onClick={() => setMinimized(!minimized)}
            className="p-1.5 rounded-lg text-lt-gray-muted hover:text-white hover:bg-white/10 transition-all">
            {minimized ? <Maximize2 size={14}/> : <Minimize2 size={14}/>}
          </button>
          <button onClick={onClose}
            className="p-1.5 rounded-lg text-lt-gray-muted hover:text-lt-red hover:bg-lt-red/10 transition-all">
            <X size={14}/>
          </button>
        </div>
      </div>

      {!minimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-lt-surface px-3 py-4 space-y-4 border-x border-lt-surface-border">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-2.5 ${m.role==='user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5
                  ${m.role==='assistant' ? 'bg-lt-red' : 'bg-lt-blue'}`}>
                  {m.role==='assistant' ? <Bot size={13} className="text-white"/> : <User size={13} className="text-white"/>}
                </div>
                <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed font-body
                  ${m.role==='assistant'
                    ? 'bg-lt-surface-card border border-lt-surface-border text-gray-200 rounded-tl-sm'
                    : 'bg-lt-blue text-white rounded-tr-sm'}`}
                  dangerouslySetInnerHTML={{ __html: formatMsg(m.content) }}/>
              </div>
            ))}
            {loading && (
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-lt-red flex items-center justify-center">
                  <Bot size={13} className="text-white"/>
                </div>
                <div className="bg-lt-surface-card border border-lt-surface-border rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1.5 items-center">
                    {[0,1,2].map(i => (
                      <div key={i} className="w-1.5 h-1.5 bg-lt-gray rounded-full animate-bounce"
                        style={{ animationDelay:`${i*0.15}s` }}/>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="flex items-start gap-2 px-3 py-2.5 bg-lt-red/10 border border-lt-red/20 rounded-xl text-xs text-lt-red">
                <AlertCircle size={13} className="mt-0.5 flex-shrink-0"/>
                {error}
              </div>
            )}
            <div ref={bottomRef}/>
          </div>

          {/* Quick replies */}
          {messages.length <= 1 && (
            <div className="bg-lt-surface px-3 pb-2 border-x border-lt-surface-border">
              <div className="text-[10px] text-lt-gray-muted font-body mb-2 uppercase tracking-wider">Quick Actions</div>
              <div className="flex flex-wrap gap-1.5">
                {QUICK.map(q => (
                  <button key={q} onClick={() => send(q)}
                    className="text-xs px-2.5 py-1 rounded-full border border-lt-surface-border text-lt-gray-muted
                               hover:border-lt-red/40 hover:text-white hover:bg-lt-red/10 transition-all">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 bg-lt-surface-card border border-lt-surface-border rounded-b-2xl">
            <div className="flex gap-2 items-end">
              <textarea
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key==='Enter' && !e.shiftKey) { e.preventDefault(); send() }}}
                placeholder="Ask about service, parts, contracts..."
                rows={1}
                className="flex-1 bg-lt-surface border border-lt-surface-border rounded-xl px-3.5 py-2.5
                           text-sm text-white placeholder-lt-gray-muted font-body resize-none
                           focus:outline-none focus:border-lt-red/50 transition-colors"
                style={{ minHeight:'40px', maxHeight:'100px' }}
              />
              <button onClick={() => send()}
                disabled={!input.trim() || loading}
                className="w-10 h-10 rounded-xl bg-lt-red text-white flex items-center justify-center
                           hover:bg-lt-red-dark disabled:opacity-40 disabled:cursor-not-allowed transition-all flex-shrink-0">
                {loading ? <Loader2 size={15} className="animate-spin"/> : <Send size={15}/>}
              </button>
            </div>
            <div className="text-[10px] text-lt-gray-muted mt-1.5 text-center">
              Powered by Claude AI · L&T CMMB Equipcare
            </div>
          </div>
        </>
      )}
    </div>
  )
}
