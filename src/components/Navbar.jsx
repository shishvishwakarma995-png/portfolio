import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Contact']

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '1rem 2rem',
        background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(99,102,241,0.1)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '1.2rem',
          fontWeight: 700,
          color: 'white',
          textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '0.5rem'
        }}
      >
        <span style={{
          background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>SV</span>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>/ dev</span>
      </motion.a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        {links.map((link, i) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            whileHover={{ color: '#a5b4fc' }}
            style={{
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 500,
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              transition: 'color 0.2s',
              letterSpacing: '0.05em'
            }}
          >
            {link}
          </motion.a>
        ))}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(99,102,241,0.5)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            marginLeft: '0.5rem',
            background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
            color: 'white',
            textDecoration: 'none',
            fontSize: '0.82rem',
            fontWeight: 600,
            padding: '0.45rem 1.2rem',
            borderRadius: '50px',
            boxShadow: '0 0 15px rgba(99,102,241,0.3)'
          }}
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  )
}

export default Navbar