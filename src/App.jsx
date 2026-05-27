import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Bot } from 'lucide-react'
import Navbar        from './components/layout/Navbar'
import Footer        from './components/layout/Footer'
import ChatWidget    from './components/ui/ChatWidget'
import HomePage      from './pages/HomePage'
import SupportPage   from './pages/SupportPage'
import ServicesPage  from './pages/ServicesPage'
import TrainingPage  from './pages/TrainingPage'
import DashboardPage from './pages/DashboardPage'

export default function App() {
  const [chatOpen, setChatOpen] = useState(false)
  return (
    <div className="min-h-screen bg-lt-navy text-white">
      <Navbar onChatOpen={() => setChatOpen(true)}/>
      <main>
        <Routes>
          <Route path="/"          element={<HomePage    onChatOpen={() => setChatOpen(true)}/>}/>
          <Route path="/support"   element={<SupportPage onChatOpen={() => setChatOpen(true)}/>}/>
          <Route path="/services"  element={<ServicesPage/>}/>
          <Route path="/training"  element={<TrainingPage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
        </Routes>
      </main>
      <Footer/>
      {!chatOpen && (
        <button onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-lt-red rounded-full flex items-center justify-center
                     shadow-[0_0_30px_rgba(200,16,46,0.4)] hover:bg-lt-red-dark transition-all hover:scale-110 animate-pulse-glow">
          <Bot size={24} className="text-white"/>
        </button>
      )}
      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)}/>
    </div>
  )
}
