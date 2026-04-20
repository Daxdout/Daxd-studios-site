import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { X } from 'lucide-react'

const projects = [
  { thumb: 'https://img.youtube.com/vi/uyeRi2Lc954/maxresdefault.jpg', video: 'https://www.youtube.com/embed/uyeRi2Lc954' },
  { thumb: 'https://img.youtube.com/vi/NdcygytQlYQ/maxresdefault.jpg', video: 'https://www.youtube.com/embed/NdcygytQlYQ' },
  { thumb: 'https://img.youtube.com/vi/SDHKQbKC7gA/maxresdefault.jpg', video: 'https://www.youtube.com/embed/SDHKQbKC7gA' },
  { thumb: 'https://img.youtube.com/vi/p6UiFObNQlE/maxresdefault.jpg', video: 'https://www.youtube.com/embed/p6UiFObNQlE' },
  { thumb: 'https://img.youtube.com/vi/tTplmSnPIHQ/maxresdefault.jpg', video: 'https://www.youtube.com/embed/tTplmSnPIHQ' },
  { thumb: 'https://img.youtube.com/vi/f-rBpnp4BP4/maxresdefault.jpg', video: 'https://www.youtube.com/embed/f-rBpnp4BP4' },
  { thumb: '/thumbnails/video1.jpg', video: 'https://drive.google.com/file/d/1CDvtJn55SepglvKkhiONdHMg41AyqFJ0/preview' },
  { thumb: '/thumbnails/video2.jpg', video: 'https://drive.google.com/file/d/10JJjlT3kiiO5fOwyPfYEAYvCfHI58LhK/preview' },
  { thumb: '/thumbnails/video3.jpg', video: 'https://drive.google.com/file/d/1X2xA4PdKna-0V2533sDeMt-l1N6P7YR1/preview' },
]

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #F2EDE3 0%, #EDE6D8 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">Selected Work</span>
          <h2
            className="font-display tracking-wider mt-3"
            style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#1A1714', fontWeight: 300 }}
          >
            OUR PORTFOLIO
          </h2>
          <p className="text-base mt-4 max-w-xl mx-auto" style={{ color: '#7A6E65' }}>
            Click any project to watch the full edit.
          </p>

          {/* Decorative line */}
          <div className="gold-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="portfolio-card rounded-xl overflow-hidden cursor-pointer card-lift relative group"
              style={{
                border: '1px solid rgba(160,82,45,0.12)',
                background: '#FFFFFF',
                boxShadow: '0 2px 12px rgba(26,23,20,0.06)',
              }}
              onClick={() => setActiveVideo(p.video)}
            >
              <img
                src={p.thumb}
                alt={`Project ${i + 1}`}
                className="w-full aspect-video object-cover"
                onError={(e) => {
                  e.target.src = `https://placehold.co/640x360/EDE6D8/A0522D?text=Project+${i + 1}`
                }}
              />
              {/* Hover overlay */}
              <div
                className="portfolio-overlay absolute inset-0 flex items-center justify-center"
                style={{ background: 'linear-gradient(160deg, rgba(201,151,74,0.85) 0%, rgba(160,82,45,0.92) 100%)' }}
              >
                <div className="text-center">
                  <div
                    className="w-14 h-14 rounded-full border-2 border-white/60 flex items-center justify-center mx-auto mb-3"
                    style={{ background: 'rgba(255,255,255,0.15)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span className="text-white text-xs tracking-widest uppercase font-mono">Play Video</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(26,23,20,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-11 right-0 flex items-center gap-2 text-sm transition-colors"
              style={{ color: '#B5ADA5' }}
            >
              <X size={16} /> Close
            </button>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(201,151,74,0.2)' }}
            >
              <iframe
                src={activeVideo}
                className="w-full aspect-video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}