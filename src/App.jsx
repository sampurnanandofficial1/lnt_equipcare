import { Routes, Route } from 'react-router-dom'

// Placeholder pages — will be replaced with full content
const Home = () => (
  <div className="min-h-screen bg-lt-dark-800 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="font-display text-6xl font-bold text-lt-red">L&T EQUIPCARE</h1>
      <p className="font-body text-lt-gray-light text-xl mt-4">Environment Ready — Awaiting Website Prompt</p>
      <div className="mt-6 flex gap-3 justify-center">
        <span className="tag-red">React 18</span>
        <span className="tag">Vite 5</span>
        <span className="tag">Tailwind 3</span>
        <span className="tag">Framer Motion</span>
      </div>
    </div>
  </div>
)

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
