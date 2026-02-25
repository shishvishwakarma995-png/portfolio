import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'HTML & CSS', level: 90, color: '#f97316', icon: '🎨' },
  { name: 'JavaScript', level: 75, color: '#eab308', icon: '⚡' },
  { name: 'React', level: 70, color: '#38bdf8', icon: '⚛️' },
  { name: 'Python', level: 85, color: '#a3e635', icon: '🐍' },
  { name: 'Django', level: 80, color: '#34d399', icon: '🌿' },
  { name: 'Git & GitHub', level: 75, color: '#f472b6', icon: '🔧' },
  { name: 'REST APIs', level: 72, color: '#c084fc', icon: '🔗' },
  { name: 'Bootstrap', level: 85, color: '#818cf8', icon: '📱' },
]

const SkillBar = ({ skill, inView, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: index * 0.08 }}
    style={{ marginBottom: '1.2rem' }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <span>{skill.icon}</span> {skill.name}
      </span>
      <span style={{ color: skill.color, fontSize: '0.8rem', fontWeight: 700 }}>{skill.level}%</span>
    </div>
    <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '50px', height: 6, overflow: 'hidden' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${skill.level}%` } : {}}
        transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: 'easeOut' }}
        style={{
          height: '100%', borderRadius: '50px',
          background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
          boxShadow: `0 0 10px ${skill.color}44`
        }}
      />
    </div>
  </motion.div>
)

const Skills = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" ref={ref} style={{ padding: '8rem 2rem', background: 'rgba(255,255,255,0.01)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{ color: '#6366f1', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            — What I Know
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900,
            color: 'white', letterSpacing: '-2px',
            fontFamily: "'Georgia', serif"
          }}>
            My <span style={{ color: '#818cf8' }}>Skills</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem 4rem' }}>
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} inView={inView} index={i} />
          ))}
        </div>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}
        >
          {['VS Code', 'Postman', 'Figma', 'SQLite', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'Render'].map((tool) => (
            <motion.span
              key={tool}
              whileHover={{ scale: 1.05, borderColor: 'rgba(99,102,241,0.5)' }}
              style={{
                background: 'rgba(99,102,241,0.06)',
                border: '1px solid rgba(99,102,241,0.15)',
                color: 'rgba(255,255,255,0.5)',
                padding: '0.35rem 1rem',
                borderRadius: '50px',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'default',
                transition: 'all 0.2s'
              }}
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills