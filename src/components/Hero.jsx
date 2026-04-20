import { motion } from 'framer-motion'
import { Play, ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '50M+', label: 'Views Generated' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero">

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#A0522D 1px, transparent 1px), linear-gradient(90deg, #A0522D 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Warm radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(201,151,74,0.13) 0%, rgba(160,82,45,0.05) 50%, transparent 75%)',
        }}
      />

      {/* Gradient vignette bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #FAF8F5)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-28">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, #C9974A)' }} />
          <span className="section-label">Premium Video Editing Agency</span>
          <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, #C9974A)' }} />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-none tracking-wider mb-6"
          style={{ fontSize: 'clamp(52px, 9vw, 128px)', color: '#1A1714', fontWeight: 300 }}
        >
          WE HELP CREATORS
          <br />
          <span className="text-gold-gradient">&amp; BRANDS SCALE</span>
          <br />
          WITH HIGH-RETENTION
          <br />
          VIDEO EDITING
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          style={{ color: '#7A6E65' }}
        >
          From raw footage to viral content — we craft videos that hold attention,
          build audiences, and drive real growth for YouTube creators and brands.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a href="#portfolio" className="btn-primary text-base">
            <Play size={16} fill="currentColor" />
            View Our Work
          </a>
          <a href="#book" className="btn-outline text-base">
            Book a Call
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-20 pb-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="font-display text-4xl md:text-5xl text-gold-gradient tracking-wide"
                style={{ fontWeight: 400 }}
              >
                {stat.value}
              </div>
              <div className="text-sm mt-1 tracking-wide" style={{ color: '#7A6E65' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="section-label text-[10px]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} style={{ color: '#C9974A' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}