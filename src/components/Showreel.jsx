import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Play } from 'lucide-react'

export default function Showreel() {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const VIDEO_ID = 'dQw4w9WgXcQ'

  return (
    <section
      id="showreel"
      ref={ref}
      className="py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #FAF8F5 0%, #F2EDE3 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">Our Showreel</span>
          <h2
            className="font-display tracking-wider mt-3"
            style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#1A1714', fontWeight: 300 }}
          >
            SEE THE CRAFT
          </h2>
          <p className="text-base mt-4 max-w-xl mx-auto" style={{ color: '#7A6E65' }}>
            Two minutes. Every frame intentional. This is what we build for every client.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(160,82,45,0.15)',
            boxShadow: '0 40px 80px rgba(26,23,20,0.12), 0 0 0 1px rgba(201,151,74,0.08)',
          }}
        >
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            {!playing ? (
              <div className="absolute inset-0">
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Showreel thumbnail"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                {/* Warm overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(160deg, rgba(250,248,245,0.55) 0%, rgba(26,23,20,0.35) 100%)' }}
                />

                {/* Play button */}
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-5 group"
                >
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-full scale-150 animate-ping"
                      style={{ border: '2px solid rgba(201,151,74,0.3)' }}
                    />
                    <div
                      className="w-20 h-20 rounded-full border-2 flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
                      style={{
                        borderColor: '#C9974A',
                        background: 'rgba(201,151,74,0.15)',
                      }}
                    >
                      <Play size={32} style={{ color: '#C9974A' }} className="translate-x-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <span className="section-label" style={{ color: '#C9974A' }}>Watch Showreel</span>
                </button>
              </div>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
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
            className="px-6 py-4 flex items-center justify-between"
            style={{
              background: 'linear-gradient(135deg, #1A1714 0%, #2A1F18 100%)',
              borderTop: '1px solid rgba(201,151,74,0.12)',
            }}
          >
            <div>
              <div className="text-sm font-medium" style={{ color: '#EDE6D8' }}>Dax D Studios — 2024 Showreel</div>
              <div className="text-xs mt-0.5" style={{ color: '#7A6E65' }}>Highlights from 120+ projects delivered</div>
            </div>
            <a
              href={`https://youtube.com/watch?v=${VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-wide hover:underline"
              style={{ color: '#C9974A' }}
            >
              Watch on YouTube →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}