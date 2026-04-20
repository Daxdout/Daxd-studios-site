import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Target, TrendingUp, Film } from 'lucide-react'

const pillars = [
  { icon: Target, title: 'Retention First', desc: 'Every cut, every hook, every transition is engineered to keep viewers watching until the end.' },
  { icon: TrendingUp, title: 'Growth Obsessed', desc: 'We track analytics, study what works, and continuously improve your content strategy.' },
  { icon: Film, title: 'Full Production', desc: 'Scripting, editing, thumbnails, titles — we handle the entire pipeline so you focus on creating.' },
  { icon: Zap, title: 'Fast Turnaround', desc: '72-hour delivery on standard projects. No chasing, no delays, no excuses.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 px-6"
      style={{ background: 'linear-gradient(150deg, #1A1714 0%, #2A1F18 40%, #3D2B1F 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label" style={{ color: '#C9974A' }}>About the Studio</span>
            <h2
              className="font-display tracking-wider mt-4 mb-6 leading-none"
              style={{ fontSize: 'clamp(40px,5vw,70px)', color: '#FAF8F5', fontWeight: 300 }}
            >
              WE DON'T<br />
              JUST EDIT.<br />
              <span className="text-gold-gradient">WE GROW<br />CHANNELS.</span>
            </h2>

            <div className="space-y-5 leading-relaxed font-light" style={{ color: '#B5ADA5' }}>
              <p>
                Dax D Studios was built by creators, for creators. We've spent thousands of hours studying what makes
                videos go viral, what keeps audiences subscribed, and what turns viewers into fans.
              </p>
              <p>
                Our team combines cinematic editing craft with data-driven strategy. We've worked across niches —
                tech, finance, fitness, travel, politics — and understand that every audience is different.
              </p>
              <p style={{ color: '#C9974A' }} className="font-medium">
                The result? Channels that don't just grow — they compound.
              </p>
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">
              <a href="#book" className="btn-primary">Work With Us</a>
              <a
                href="#portfolio"
                className="btn-outline"
                style={{ borderColor: 'rgba(201,151,74,0.4)', color: '#C9974A' }}
              >
                See Portfolio
              </a>
            </div>
          </motion.div>

          {/* Right — Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                className="p-6 rounded-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(201,151,74,0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(201,151,74,0.35)'
                  e.currentTarget.style.background = 'linear-gradient(145deg, rgba(201,151,74,0.08) 0%, rgba(160,82,45,0.04) 100%)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(201,151,74,0.15)'
                  e.currentTarget.style.background = 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(201,151,74,0.12)', border: '1px solid rgba(201,151,74,0.25)' }}
                >
                  <pillar.icon size={18} style={{ color: '#C9974A' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#FAF8F5' }}>{pillar.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7A6E65' }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gold divider */}
        <div className="mt-28 gold-divider opacity-30" />
      </div>
    </section>
  )
}