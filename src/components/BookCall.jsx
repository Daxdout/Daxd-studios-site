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

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => { if (document.head.contains(script)) document.head.removeChild(script) }
  }, [])

  return (
    <section
      id="book"
      ref={ref}
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAF8F5 0%, #F2EDE3 100%)' }}
    >
      {/* Decorative warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(201,151,74,0.07) 0%, transparent 65%)' }}
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
          <h2
            className="font-display tracking-wider mt-3"
            style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#1A1714', fontWeight: 300 }}
          >
            BOOK A FREE<br />
            <span className="text-gold-gradient">STRATEGY CALL</span>
          </h2>
          <p className="text-base mt-5 max-w-lg mx-auto leading-relaxed" style={{ color: '#7A6E65' }}>
            No pitch, no pressure. Just a real conversation about your channel, your goals, and how we can help.
          </p>

          {/* Perks */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {perks.map((perk, i) => (
              <div key={i} className="flex items-center gap-2">
                <perk.icon size={15} style={{ color: '#C9974A' }} />
                <span className="text-sm" style={{ color: '#7A6E65' }}>{perk.text}</span>
              </div>
            ))}
          </div>

          <div className="gold-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        {/* Calendly Widget */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(160,82,45,0.15)',
            boxShadow: '0 40px 80px rgba(26,23,20,0.10), 0 0 0 1px rgba(201,151,74,0.06)',
          }}
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/daxdstudios/strategy-call?hide_gdpr_banner=1&background_color=faf8f5&text_color=1a1714&primary_color=c9974a"
            style={{ minWidth: '320px', height: '700px' }}
          />

          <noscript>
            <div className="p-12 text-center" style={{ background: '#FAF8F5' }}>
              <Calendar size={40} style={{ color: '#C9974A' }} className="mx-auto mb-4" />
              <p className="mb-6" style={{ color: '#7A6E65' }}>Please enable JavaScript to use the booking widget.</p>
              <a href="https://calendly.com/daxdstudios/strategy-call" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book on Calendly
              </a>
            </div>
          </noscript>
        </motion.div>

        {/* Fallback */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-sm mt-6"
          style={{ color: '#B5ADA5' }}
        >
          Widget not loading?{' '}
          <a href="https://calendly.com/daxdstudios/strategy-call" target="_blank" rel="noopener noreferrer"
            className="hover:underline" style={{ color: '#C9974A' }}>
            Open Calendly directly →
          </a>
        </motion.p>
      </div>
    </section>
  )
}