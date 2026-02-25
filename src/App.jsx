import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <div style={{ background: '#050508', minHeight: '100vh', position: 'relative' }}>
      {/* Custom cursor glow */}
      <div style={{
        position: 'fixed',
        left: mousePos.x - 150,
        top: mousePos.y - 150,
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'left 0.1s, top 0.1s',
        borderRadius: '50%'
      }} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App