import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('shishvishwakarma995@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" ref={ref} style={{ padding: '8rem 2rem' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}
        >
          — Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900,
            color: 'white', letterSpacing: '-2px', lineHeight: 1.1,
            marginBottom: '1.5rem', fontFamily: "'Georgia', serif"
          }}
        >
          Let's build something <span style={{ color: '#818cf8' }}>amazing</span> together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '3rem' }}
        >
          I'm currently open to frontend developer and backend developer roles. If you have an opportunity or just want to connect, my inbox is always open!
        </motion.p>

        {/* Email button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}
        >
          <motion.button
            onClick={copyEmail}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99,102,241,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
              color: 'white', border: 'none', cursor: 'pointer',
              padding: '1rem 2.5rem', borderRadius: '50px',
              fontWeight: 700, fontSize: '1rem',
              boxShadow: '0 0 30px rgba(99,102,241,0.3)',
              display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}
          >
            {copied ? '✅ Copied!' : '📧 Copy Email'}
          </motion.button>

          <motion.a
            href="https://github.com/shishvishwakarma995-png"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              padding: '1rem 2.5rem', borderRadius: '50px',
              fontWeight: 700, fontSize: '1rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(255,255,255,0.03)'
            }}
          >
            ⚙ GitHub
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', marginBottom: '1rem' }}>
            Designed & Built by Shishanki Vishwakarma • 2026
          </p>
          <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.75rem' }}>
            Made with React ⚛️ & Framer Motion 🎬
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact