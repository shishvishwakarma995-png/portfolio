import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const roles = ['Frontend Developer', 'Python & Django Dev', 'UI/UX Enthusiast', 'Problem Solver']

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1500)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '6rem 2rem 2rem'
    }}>
      {/* Animated background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
      }} />

      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          position: 'absolute', top: '10%', right: '10%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)',
          borderRadius: '50%', filter: 'blur(20px)'
        }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: 'absolute', bottom: '20%', left: '5%',
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)',
          borderRadius: '50%', filter: 'blur(20px)'
        }}
      />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 800 }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
            borderRadius: '50px', padding: '0.4rem 1rem',
            marginBottom: '2rem'
          }}
        >
          <span style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px #10b981' }} />
          <span style={{ color: '#a5b4fc', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-3px',
            marginBottom: '1rem',
            fontFamily: "'Georgia', serif"
          }}
        >
          <span style={{ color: 'white' }}>Shishanki</span>
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Vishwakarma</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '1.5rem',
            fontFamily: "'Courier New', monospace",
            minHeight: '2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem'
          }}
        >
          <span style={{ color: '#6366f1' }}>{'>'}</span>
          <span>{displayed}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ color: '#6366f1', fontWeight: 700 }}
          >|</motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            color: 'rgba(255,255,255,0.35)',
            fontSize: '1rem',
            lineHeight: 1.8,
            maxWidth: 520,
            margin: '0 auto 2.5rem'
          }}
        >
          Biotechnology graduate turned developer. I craft modern web experiences 
          with React & Django, turning ideas into pixel-perfect reality.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
              color: 'white', textDecoration: 'none',
              padding: '0.85rem 2.2rem', borderRadius: '50px',
              fontWeight: 700, fontSize: '0.9rem',
              boxShadow: '0 0 20px rgba(99,102,241,0.35)',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
            }}
          >
            View Projects →
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, background: 'rgba(99,102,241,0.1)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              border: '1px solid rgba(99,102,241,0.4)',
              color: '#a5b4fc', textDecoration: 'none',
              padding: '0.85rem 2.2rem', borderRadius: '50px',
              fontWeight: 700, fontSize: '0.9rem',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              transition: 'background 0.2s'
            }}
          >
            Let's Talk
          </motion.a>
        </motion.div>

        {/* Scroll bounce */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 28, height: 44,
              border: '2px solid rgba(99,102,241,0.3)',
              borderRadius: '14px',
              display: 'flex', justifyContent: 'center', paddingTop: '6px'
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: 4, height: 8, background: '#6366f1', borderRadius: '2px' }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero