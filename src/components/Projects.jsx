import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'SignVault',
    desc: 'An enterprise-grade document signing SaaS — upload documents, place digital signatures, share signing links, and generate legally traceable signed PDFs. Built with full audit trails, signer identity verification, and real-world enterprise workflows. Think DocuSign, but yours.',
    tech: ['React', 'TypeScript', 'Node.js', 'JWT', 'AWS S3', 'Tailwind CSS'],
    color: '#f59e0b',
    icon: '🔏',
    live: '#',
    github: '#',
    featured: true,
    comingSoon: true
  },
  {
    title: 'Job Application Tracker',
    desc: 'A full-stack Django web app where users can track their job applications, update statuses, and monitor their job hunt through a sleek dark dashboard.',
    tech: ['Django', 'Python', 'Bootstrap 5', 'SQLite'],
    color: '#6366f1',
    icon: '💼',
    live: 'https://jobtracker-1-pmmw.onrender.com/',
    github: 'https://github.com/shishvishwakarma995-png/jobtracker',
    featured: true,
    comingSoon: false
  },
  {
    title: 'Expense Tracker',
    desc: 'A React SaaS app with user auth, real-time budget tracking per category, animated income/expense charts, dark/light theme toggle, and smooth Framer Motion animations throughout.',
    tech: ['React', 'Framer Motion', 'Recharts', 'Vite'],
    color: '#10b981',
    icon: '💰',
    live: 'https://expense-tracker-amber-nine-90.vercel.app/',
    github: 'https://github.com/shishvishwakarma995-png/expense-tracker',
    featured: true,
    comingSoon: false
  },
  {
    title: 'Portfolio Website',
    desc: 'This very portfolio! Built with React and Framer Motion with smooth animations, typewriter effects, and a sleek dark aesthetic.',
    tech: ['React', 'Framer Motion', 'JavaScript'],
    color: '#a855f7',
    icon: '🎨',
    live: '#',
    github: '#',
    featured: false,
    comingSoon: false
  }
]

const ProjectCard = ({ project, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ y: -8, boxShadow: `0 24px 60px ${project.color}22` }}
    style={{
      background: 'rgba(255,255,255,0.02)',
      border: `1px solid ${project.color}25`,
      borderRadius: '20px',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'default',
      transition: 'box-shadow 0.3s'
    }}
  >
    {/* Glow top border */}
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 2,
      background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`
    }} />

    {/* Subtle bg glow */}
    <div style={{
      position: 'absolute', top: -60, right: -60, width: 200, height: 200,
      background: `radial-gradient(circle, ${project.color}0d, transparent 70%)`,
      pointerEvents: 'none'
    }} />

    {/* Badges */}
    <div style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
      {project.comingSoon && (
        <motion.div
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            background: `${project.color}20`, border: `1px solid ${project.color}50`,
            borderRadius: '50px', padding: '0.2rem 0.75rem',
            color: project.color, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em'
          }}
        >
          🚧 IN PROGRESS
        </motion.div>
      )}
      {project.featured && !project.comingSoon && (
        <div style={{
          background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)',
          borderRadius: '50px', padding: '0.2rem 0.7rem',
          color: '#a5b4fc', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em'
        }}>
          ★ FEATURED
        </div>
      )}
    </div>

    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{project.icon}</div>

    <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.5px' }}>
      {project.title}
    </h3>

    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
      {project.desc}
    </p>

    {/* Tech stack */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
      {project.tech.map(t => (
        <span key={t} style={{
          background: `${project.color}15`,
          border: `1px solid ${project.color}30`,
          color: project.color,
          padding: '0.2rem 0.7rem',
          borderRadius: '50px',
          fontSize: '0.72rem',
          fontWeight: 700
        }}>{t}</span>
      ))}
    </div>

    {/* Links */}
    <div style={{ display: 'flex', gap: '0.75rem' }}>
      {project.comingSoon ? (
        <div style={{
          background: `${project.color}15`, border: `1px solid ${project.color}30`,
          color: project.color, padding: '0.5rem 1.4rem',
          borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700,
          display: 'flex', alignItems: 'center', gap: '0.4rem'
        }}>
          🔒 Coming Soon
        </div>
      ) : (
        <>
          <motion.a
            href={project.github} target="_blank" whileHover={{ scale: 1.05 }}
            style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.6)', padding: '0.5rem 1.2rem',
              borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600,
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem'
            }}
          >⚙ GitHub</motion.a>
          <motion.a
            href={project.live} target="_blank"
            whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${project.color}44` }}
            style={{
              background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
              color: 'white', padding: '0.5rem 1.2rem',
              borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600,
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem'
            }}
          >↗ Live Demo</motion.a>
        </>
      )}
    </div>
  </motion.div>
)

const Projects = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} style={{ padding: '8rem 2rem' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            — What I've Built
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900,
            color: 'white', letterSpacing: '-2px',
            fontFamily: "'Georgia', serif"
          }}>
            My <span style={{ color: '#818cf8' }}>Projects</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects