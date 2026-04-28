import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Target, TrendingUp, Film } from 'lucide-react'

const pillars = [
  { icon: Target,     title: 'Retention First',   desc: 'Every cut, hook, and transition engineered to keep viewers watching until the end.'         },
  { icon: TrendingUp, title: 'Growth Obsessed',   desc: 'We track analytics, study what works, and continuously improve your content strategy.'      },
  { icon: Film,       title: 'Full Production',   desc: 'Scripting, editing, thumbnails, titles — we handle the full pipeline so you can create.'    },
  { icon: Zap,        title: 'Fast Turnaround',   desc: '72-hour delivery on standard projects. No chasing, no delays, no excuses.'                  },
]

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: '96px 24px', background: 'linear-gradient(150deg, #1A1714 0%, #2A1F18 45%, #3D2B1F 100%)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label" style={{ color: '#C9974A' }}>About the Studio</span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(34px, 4.5vw, 62px)',
                fontWeight: 500,
                color: '#FAF8F5',
                marginTop: '14px',
                marginBottom: '24px',
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
              }}
            >
              We Don't<br />Just Edit.<br />
              <span className="text-gold-gradient">We Grow<br />Channels.</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '15px', color: '#A09088', lineHeight: 1.75, fontWeight: 400 }}>
                Dax D Studios was built by creators, for creators. We've spent thousands of hours studying
                what makes videos go viral, what keeps audiences subscribed, and what turns viewers into fans.
              </p>
              <p style={{ fontSize: '15px', color: '#A09088', lineHeight: 1.75, fontWeight: 400 }}>
                Our team combines cinematic editing craft with data-driven strategy — across tech, finance,
                fitness, travel, politics — understanding that every audience is different.
              </p>
              <p style={{ fontSize: '15px', color: '#C9974A', fontWeight: 500, lineHeight: 1.6 }}>
                The result? Channels that don't just grow — they compound.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
              <a href="#book" className="btn-primary">Work With Us</a>
              <a
                href="#portfolio"
                className="btn-outline"
                style={{ borderColor: 'rgba(201,151,74,0.35)', color: '#C9974A' }}
              >
                See Portfolio
              </a>
            </div>
          </motion.div>

          {/* Right pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 + 0.2 }}
                style={{
                  padding: '22px 20px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(201,151,74,0.12)',
                  transition: 'border-color 0.25s, background 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,151,74,0.3)'
                  e.currentTarget.style.background  = 'rgba(201,151,74,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,151,74,0.12)'
                  e.currentTarget.style.background  = 'rgba(255,255,255,0.04)'
                }}
              >
                <div
                  style={{
                    width: '36px', height: '36px', borderRadius: '8px', marginBottom: '14px',
                    background: 'rgba(201,151,74,0.1)',
                    border: '1px solid rgba(201,151,74,0.22)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <pillar.icon size={16} style={{ color: '#C9974A' }} />
                </div>
                <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#EDE6D8', marginBottom: '6px' }}>
                  {pillar.title}
                </div>
                <div style={{ fontSize: '12.5px', color: '#6B5E55', lineHeight: 1.65 }}>
                  {pillar.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider" style={{ marginTop: '80px', opacity: 0.25 }} />
      </div>
    </section>
  )
}