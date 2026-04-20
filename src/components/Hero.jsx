import { motion } from 'framer-motion'
import { Play, ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '50M+', label: 'Views Generated' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-25"
          poster="https://images.unsplash.com/photo-1536240478700-b869ad10a2eb?w=1600&q=80"
        >
          {/* Replace src with your actual video URL */}
          <source src="" type="video/mp4" />
        </video>
        {/* Fallback gradient bg when no video */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1a1a_0%,_#080808_70%)]" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/40 via-transparent to-[#080808]/40" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#D4A843 1px, transparent 1px), linear-gradient(90deg, #D4A843 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0"
        style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4A843]" />
          <span className="section-label">Premium Video Editing Agency</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4A843]" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(52px,9vw,130px)] leading-none tracking-wider text-[#E8E8E8] mb-6"
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
          className="text-[#888] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
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
          className="flex flex-wrap items-center justify-center gap-10 md:gap-20"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-gold-gradient tracking-wide">
                {stat.value}
              </div>
              <div className="text-[#888] text-sm mt-1 tracking-wide">{stat.label}</div>
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
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} className="text-[#D4A843]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
