import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play } from 'lucide-react'

export default function Showreel() {
  const [playing, setPlaying] = useState(false)
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const VIDEO_ID = 'dQw4w9WgXcQ'

  return (
    <section
      id="showreel"
      ref={ref}
      style={{ padding: '96px 24px', background: 'linear-gradient(180deg, #FAF8F5 0%, #F2EDE3 100%)' }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span className="section-label">Our Showreel</span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(32px, 5vw, 60px)',
              fontWeight: 500,
              color: '#1A1714',
              marginTop: '12px',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}
          >
            See the Craft
          </h2>
          <p style={{ color: '#7A6E65', fontSize: '15px', marginTop: '12px', lineHeight: 1.65 }}>
            Two minutes. Every frame intentional.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(160,82,45,0.14)',
            boxShadow: '0 32px 72px rgba(26,23,20,0.11)',
          }}
        >
          <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
            {!playing ? (
              <div style={{ position: 'absolute', inset: 0 }}>
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Showreel thumbnail"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div
                  style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(160deg, rgba(250,248,245,0.45) 0%, rgba(26,23,20,0.4) 100%)',
                  }}
                />
                <button
                  onClick={() => setPlaying(true)}
                  style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    gap: '14px', background: 'none', border: 'none', cursor: 'pointer',
                  }}
                >
                  <div style={{ position: 'relative' }}>
                    <div
                      style={{
                        position: 'absolute', inset: 0, borderRadius: '50%',
                        border: '2px solid rgba(201,151,74,0.3)',
                        transform: 'scale(1.5)',
                        animation: 'ping 2s ease-in-out infinite',
                      }}
                    />
                    <div
                      style={{
                        width: '72px', height: '72px', borderRadius: '50%',
                        border: '2px solid #C9974A',
                        background: 'rgba(201,151,74,0.14)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'transform 0.25s',
                      }}
                    >
                      <Play size={28} style={{ color: '#C9974A', marginLeft: '3px' }} fill="#C9974A" />
                    </div>
                  </div>
                  <span className="section-label" style={{ color: '#C9974A' }}>Watch Showreel</span>
                </button>
              </div>
            ) : (
              <iframe
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Dax D Studios Showreel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Bottom bar */}
          <div
            style={{
              padding: '16px 24px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'linear-gradient(135deg, #1A1714 0%, #2A1F18 100%)',
              borderTop: '1px solid rgba(201,151,74,0.1)',
            }}
          >
            <div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: '#EDE6D8' }}>Dax D Studios — 2024 Showreel</div>
              <div style={{ fontSize: '12px', color: '#6B5E55', marginTop: '2px' }}>Highlights from 120+ projects delivered</div>
            </div>
            <a
              href={`https://youtube.com/watch?v=${VIDEO_ID}`}
              target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '12px', color: '#C9974A', textDecoration: 'none' }}
            >
              Watch on YouTube →
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`@keyframes ping { 0%,100%{opacity:1;transform:scale(1.5)} 50%{opacity:0.3;transform:scale(1.9)} }`}</style>
    </section>
  )
}