import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play } from 'lucide-react'

export default function Showreel() {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  // Replace VIDEO_ID with your actual YouTube video ID
  const VIDEO_ID = 'dQw4w9WgXcQ'

  return (
    <section id="showreel" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">Our Showreel</span>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] tracking-wider text-[#E8E8E8] mt-3">
            SEE THE CRAFT
          </h2>
          <p className="text-[#888] text-base mt-4 max-w-xl mx-auto">
            Two minutes. Every frame intentional. This is what we build for every client.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden border border-white/[0.08]"
          style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,168,67,0.08)' }}
        >
          {/* Aspect ratio wrapper */}
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            {!playing ? (
              <div className="absolute inset-0">
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Showreel thumbnail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#080808]/60" />

                {/* Play button */}
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-5 group"
                >
                  <div className="relative">
                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#D4A843]/30 scale-150 animate-ping" />
                    <div className="w-20 h-20 rounded-full border-2 border-[#D4A843] flex items-center justify-center
                      bg-[#D4A843]/10 backdrop-blur-sm group-hover:bg-[#D4A843]/20 transition-all duration-300 group-hover:scale-110">
                      <Play size={32} className="text-[#D4A843] translate-x-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <span className="section-label text-[#D4A843]">Watch Showreel</span>
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
          <div className="bg-[#111111] border-t border-white/[0.06] px-6 py-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-[#E8E8E8]">Dax D Studios — 2024 Showreel</div>
              <div className="text-xs text-[#888] mt-0.5">Highlights from 120+ projects delivered</div>
            </div>
            <a
              href={`https://youtube.com/watch?v=${VIDEO_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#D4A843] hover:underline tracking-wide"
            >
              Watch on YouTube →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
