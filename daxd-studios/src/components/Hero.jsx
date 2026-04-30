import { motion } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Scissors, Camera, BarChart2 } from 'lucide-react'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
})

const pills = [
  { icon: Camera, label: 'Content Strategy' },
  { icon: Scissors, label: 'High-Retention Editing' },
  { icon: BarChart2, label: 'Platform Optimization' },
  { icon: TrendingUp, label: 'Growth Systems' },
]

const brands = ['WTFF BURGER', 'BRUNBAE', 'W.I.S.H', 'DROOVYY']

const highlight = {
  background: 'linear-gradient(135deg, rgba(255,223,150,0.5), rgba(201,151,74,0.4))',
  padding: '2px 6px',
  borderRadius: '4px',
  boxShadow: '0 2px 6px rgba(201,151,74,0.18)',
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(155deg, #FDFCFA 0%, #F5EFE6 45%, #EDE3D4 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Dot pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(139,69,19,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Glow (reduced for mobile) */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(300px, 70vw, 800px)',
        height: 'clamp(300px, 70vw, 800px)',
        background: 'radial-gradient(circle, rgba(201,151,74,0.12), transparent 65%)',
        filter: 'blur(50px)',
      }} />

      {/* Floating blobs (scaled down) */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '8%',
          left: '5%',
          width: 'clamp(120px, 25vw, 300px)',
          height: 'clamp(120px, 25vw, 300px)',
          background: 'radial-gradient(circle, rgba(139,69,19,0.08), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '8%',
          right: '5%',
          width: 'clamp(120px, 25vw, 300px)',
          height: 'clamp(120px, 25vw, 300px)',
          background: 'radial-gradient(circle, rgba(201,151,74,0.08), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* MAIN */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        padding: 'clamp(60px, 8vw, 110px) clamp(18px, 5vw, 56px) 30px',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>

        <div style={{ maxWidth: '720px' }}>

          {/* Badge */}
          <motion.div {...fade(0.1)} style={{ marginBottom: '20px' }}>
            <span style={{
              background: 'rgba(139,69,19,0.07)',
              border: '1px solid rgba(139,69,19,0.16)',
              borderRadius: '100px',
              padding: '6px 12px',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#8B4513',
            }}>
              Content Production & Marketing Agency
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 {...fade(0.2)} style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(30px, 6vw, 64px)',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}>
            We Help Creators Turn Content Into{' '}
            <span style={{
              background: 'linear-gradient(135deg, #8B4513, #C9974A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Clients
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p {...fade(0.3)} style={{
            fontSize: 'clamp(14px, 3.5vw, 16px)',
            color: '#6B5E55',
            maxWidth: '600px',
            margin: '0 auto 24px',
            lineHeight: 1.6,
          }}>
            We handle your{' '}
            <span style={highlight}>entire content system</span> — from{' '}
            <span style={highlight}>strategy and production</span> to editing and distribution — so you can focus on scaling your brand and closing clients.
          </motion.p>

          {/* Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '24px',
          }}>
            {pills.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                style={{
                  padding: '1px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(139,69,19,0.25), rgba(201,151,74,0.25))',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'linear-gradient(135deg, #FFFFFF, #F7F2EA)',
                  borderRadius: '9px',
                  padding: '7px 10px',
                  fontSize: '12px',
                }}>
                  <p.icon size={13} color="#C9974A" />
                  {p.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div {...fade(0.5)} style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '24px',
          }}>

            <a href="#book" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #8B4513, #C9974A)',
              color: '#fff',
              padding: '12px 18px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '14px',
              width: '100%',
              maxWidth: '260px',
            }}>
              Book a Free Strategy Call
              <ArrowRight size={14} />
            </a>

            <a href="#portfolio" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: '#fff',
              padding: '12px 18px',
              borderRadius: '10px',
              textDecoration: 'none',
              color: '#1A1714',
              fontSize: '14px',
              width: '100%',
              maxWidth: '220px',
              border: '1px solid rgba(0,0,0,0.08)'
            }}>
              <Play size={14} color="#8B4513" />
              See Our Work
            </a>

          </motion.div>

          {/* Trust */}
          <motion.div {...fade(0.6)} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex' }}>
              {['a','b','c'].map((s, i) => (
                <img
                  key={i}
                  src={`https://api.dicebear.com/7.x/notionists/svg?seed=${s}&backgroundColor=C9974A`}
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: '2px solid #fff',
                    marginLeft: i > 0 ? '-6px' : 0,
                  }}
                />
              ))}
            </div>

            <span style={{ fontSize: '12px', color: '#6B5E55' }}>
              Trusted by <strong>50+ creators</strong>
            </span>
          </motion.div>

        </div>
      </div>

      {/* Brand strip */}
      <div style={{
        borderTop: '1px solid rgba(0,0,0,0.08)',
        padding: '16px',
        textAlign: 'center',
        background: 'rgba(255,255,255,0.5)',
      }}>
        <p style={{
          fontSize: '9px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#C4B9B2',
          marginBottom: '10px',
        }}>
          Trusted by brands that grow
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}>
          {brands.map(b => (
            <span key={b} style={{
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: '#C4B9B2',
            }}>
              {b}
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}