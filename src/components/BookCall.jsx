import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Clock, Video, CheckCircle2 } from 'lucide-react'

const perks = [
  { icon: Clock, text: '30-min free strategy session' },
  { icon: Video, text: 'We review your current content' },
  { icon: CheckCircle2, text: 'Get a free growth audit report' },
]

export default function BookCall() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script)
    }
  }, [])

  return (
    <section id="book" ref={ref} className="py-28 px-6 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(212,168,67,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">Ready to Scale?</span>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] tracking-wider text-[#E8E8E8] mt-3">
            BOOK A FREE<br />
            <span className="text-gold-gradient">STRATEGY CALL</span>
          </h2>
          <p className="text-[#888] text-base mt-5 max-w-lg mx-auto leading-relaxed">
            No pitch, no pressure. Just a real conversation about your channel, your goals, and how we can help.
          </p>

          {/* Perks */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-2">
                <perk.icon size={15} className="text-[#D4A843]" />
                <span className="text-[#888] text-sm">{perk.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Calendly Widget Container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden border border-white/[0.08]"
          style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,168,67,0.06)' }}
        >
          {/* Calendly inline widget */}
          {/* Replace the data-url with your actual Calendly link */}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/daxdstudios/strategy-call?hide_gdpr_banner=1&background_color=0f0f0f&text_color=e8e8e8&primary_color=d4a843"
            style={{ minWidth: '320px', height: '700px' }}
          />

          {/* Fallback for when Calendly hasn't loaded */}
          <noscript>
            <div className="bg-[#111111] p-12 text-center">
              <Calendar size={40} className="text-[#D4A843] mx-auto mb-4" />
              <p className="text-[#888] mb-6">Please enable JavaScript to use the booking widget.</p>
              <a
                href="https://calendly.com/daxdstudios/strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book on Calendly
              </a>
            </div>
          </noscript>
        </motion.div>

        {/* Fallback direct link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-[#666] text-sm mt-6"
        >
          Widget not loading?{' '}
          <a
            href="https://calendly.com/daxdstudios/strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4A843] hover:underline"
          >
            Open Calendly directly →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
