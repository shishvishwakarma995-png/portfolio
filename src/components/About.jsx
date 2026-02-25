import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} style={{ padding: '8rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

        {/* Left — Image placeholder with glow */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            width: '100%', aspectRatio: '1',
            borderRadius: '24px',
            border: '2px solid rgba(99,102,241,0.25)',
            position: 'relative', overflow: 'hidden',
            boxShadow: '0 0 60px rgba(99,102,241,0.15)'
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(circle at 30% 30%, rgba(99,102,241,0.15), transparent 60%)',
              zIndex: 1, pointerEvents: 'none'
            }} />
            <img
              src="/profile.jpg"
              alt="Shishanki Vishwakarma"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center top',
                display: 'block'
              }}
            />
            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute', top: '10%', right: '-10%',
                background: 'rgba(99,102,241,0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px', padding: '0.6rem 1rem',
                color: 'white', fontSize: '0.75rem', fontWeight: 700,
                boxShadow: '0 8px 32px rgba(99,102,241,0.4)',
                zIndex: 2
              }}
            >
              🎓 B.Sc Biotech
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              style={{
                position: 'absolute', bottom: '10%', left: '-10%',
                background: 'rgba(16,185,129,0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px', padding: '0.6rem 1rem',
                color: 'white', fontSize: '0.75rem', fontWeight: 700,
                boxShadow: '0 8px 32px rgba(16,185,129,0.4)'
              }}
            >
              ⚡ Django & React
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            — About Me
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900,
            color: 'white', lineHeight: 1.2,
            letterSpacing: '-1px', marginBottom: '1.5rem',
            fontFamily: "'Georgia', serif"
          }}>
            A developer who thinks <span style={{ color: '#818cf8' }}>differently</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.95rem' }}>
            I'm a Biotechnology graduate who fell in love with programming. This unique background gives me a different perspective on problem-solving — I approach code like a scientist: methodically, curiously, and always looking for elegant solutions.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.9, marginBottom: '2rem', fontSize: '0.9rem' }}>
            I specialize in building full-stack web applications with Python/Django on the backend and React on the frontend, with a strong focus on clean UI and great user experience.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[
              { num: '4+', label: 'Projects Built' },
              { num: '5+', label: 'Tech Stack' },
              { num: '100%', label: 'Passion' }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#818cf8', letterSpacing: '-1px' }}>{s.num}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About