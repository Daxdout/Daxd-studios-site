import { motion } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Scissors, Camera, BarChart2 } from 'lucide-react'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
})

const pills = [
  { icon: Camera,     label: 'Content Strategy' },
  { icon: Scissors,   label: 'High-Retention Editing' },
  { icon: BarChart2,  label: 'Platform Optimization' },
  { icon: TrendingUp, label: 'Growth Systems' },
]

const brands = ['WTFF BURGER', 'BRUNBAE', 'W.I.S.H', 'DROOVYY']

// ✅ Clean highlight (FINAL)
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
        backgroundSize: '32px 32px',
      }} />

      {/* Center glow */}
      <div style={{
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(201,151,74,0.12), transparent 65%)',
        filter: 'blur(60px)',
      }} />

      {/* Floating blobs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(139,69,19,0.08), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(201,151,74,0.08), transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* MAIN */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        padding: 'clamp(80px, 10vw, 110px) clamp(24px, 4vw, 56px) 40px',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>

        <div style={{ maxWidth: '720px' }}>

          {/* Badge */}
          <motion.div {...fade(0.1)} style={{ marginBottom: '28px' }}>
            <span style={{
              background: 'rgba(139,69,19,0.07)',
              border: '1px solid rgba(139,69,19,0.16)',
              borderRadius: '100px',
              padding: '6px 14px',
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#8B4513',
            }}>
              Content Production & Marketing Agency
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 {...fade(0.2)} style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: 1.1,
            marginBottom: '20px',
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
            fontSize: '16px',
            color: '#6B5E55',
            maxWidth: '600px',
            margin: '0 auto 28px',
            lineHeight: 1.7,
          }}>
            We handle your{' '}
            <span style={highlight}>
              entire content system
            </span>{' '}
            — from{' '}
            <span style={highlight}>
              strategy and production
            </span>{' '}
            to editing and distribution — so you can focus on scaling your brand and closing clients.
          </motion.p>

          {/* Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '30px',
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
                  padding: '8px 12px',
                  fontSize: '13px',
                }}>
                  <p.icon size={14} color="#C9974A" />
                  {p.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div {...fade(0.5)} style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '28px',
          }}>

            <a href="#book" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #8B4513, #C9974A)',
              color: '#fff',
              padding: '14px 22px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              boxShadow: '0 8px 24px rgba(139,69,19,0.18)',
            }}>
              Book a Free Strategy Call
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </a>

            <div style={{
              padding: '1px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(139,69,19,0.35), rgba(201,151,74,0.35))',
            }}>
              <a href="#portfolio" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #FFFFFF, #F7F2EA)',
                padding: '14px 22px',
                borderRadius: '9px',
                textDecoration: 'none',
                color: '#1A1714',
                fontSize: '14px',
                fontWeight: 500,
              }}>
                <Play size={16} color="#8B4513" />
                See Our Work
              </a>
            </div>

          </motion.div>

          {/* Trust */}
          <motion.div {...fade(0.6)} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '20px',
          }}>
            <div style={{ display: 'flex' }}>
              {['a','b','c'].map((s, i) => (
                <img
                  key={i}
                  src={`https://api.dicebear.com/7.x/notionists/svg?seed=${s}&backgroundColor=C9974A`}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: '2px solid #fff',
                    marginLeft: i > 0 ? '-8px' : 0,
                  }}
                />
              ))}
            </div>

            <div style={{ color: '#C9974A' }}>★★★★★</div>

            <span style={{ fontSize: '13px', color: '#6B5E55' }}>
              Trusted by <strong>50+ creators & brands</strong> generating <strong>100M+ views</strong>
            </span>
          </motion.div>

        </div>
      </div>

      {/* Brand strip */}
      <div style={{
        borderTop: '1px solid rgba(0,0,0,0.08)',
        padding: '20px',
        textAlign: 'center',
        background: 'rgba(255,255,255,0.5)',
      }}>
        <p style={{
          fontSize: '10px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#C4B9B2',
          marginBottom: '12px',
        }}>
          Trusted by brands that grow
        </p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '28px',
          flexWrap: 'wrap',
        }}>
          {brands.map(b => (
            <span key={b} style={{
              fontSize: '12px',
              letterSpacing: '0.12em',
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