import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Target, TrendingUp, Film } from 'lucide-react'

const pillars = [
  { icon: Target, title: 'Retention First', desc: 'Every cut, every hook, every transition is engineered to keep viewers watching until the end.' },
  { icon: TrendingUp, title: 'Growth Obsessed', desc: 'We track analytics, study what works, and continuously improve your content strategy.' },
  { icon: Film, title: 'Full Production', desc: 'Scripting, editing, thumbnails, titles — we handle the entire pipeline so you focus on creating.' },
  { icon: Zap, title: 'Fast Turnaround', desc: '72-hour delivery on standard projects. No chasing, no delays, no excuses.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">About the Studio</span>
            <h2 className="font-display text-[clamp(40px,5vw,70px)] tracking-wider text-[#E8E8E8] mt-4 mb-6 leading-none">
              WE DON'T<br />
              JUST EDIT.<br />
              <span className="text-gold-gradient">WE GROW<br />CHANNELS.</span>
            </h2>

            <div className="space-y-5 text-[#999] leading-relaxed font-light">
              <p>
                Dax D Studios was built by creators, for creators. We've spent thousands of hours studying what makes 
                videos go viral, what keeps audiences subscribed, and what turns viewers into fans.
              </p>
              <p>
                Our team combines cinematic editing craft with data-driven strategy. We've worked across niches — 
                tech, finance, fitness, travel, politics — and understand that every audience is different.
              </p>
              <p className="text-[#D4A843] font-medium">
                The result? Channels that don't just grow — they compound.
              </p>
            </div>

            <div className="mt-10 flex gap-4 flex-wrap">
              <a href="#book" className="btn-primary">Work With Us</a>
              <a href="#portfolio" className="btn-outline">See Portfolio</a>
            </div>
          </motion.div>

          {/* Right — Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                className="p-6 rounded-xl border border-white/[0.07] hover:border-[#D4A843]/25 transition-colors duration-300"
                style={{ background: '#111111' }}
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4A843]/10 border border-[#D4A843]/20 flex items-center justify-center mb-4">
                  <pillar.icon size={18} className="text-[#D4A843]" />
                </div>
                <h3 className="font-semibold text-[#E8E8E8] mb-2">{pillar.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-28 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>
    </section>
  )
}
