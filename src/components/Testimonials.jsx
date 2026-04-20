import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Arjun Mehta', handle: '@ArjunTechTalks', channelUrl: 'https://youtube.com',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=arjun&backgroundColor=C9974A',
    text: "Dax D Studios completely transformed my channel. The editing style they brought kept my retention above 60% consistently. In two months, my channel hit 100K.",
    result: '0 → 100K subscribers in 8 weeks', niche: 'Tech & Finance',
  },
  {
    name: 'Priya Sharma', handle: '@PriyaFitLife', channelUrl: 'https://youtube.com',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=priya&backgroundColor=A0522D',
    text: "The team understood our brand's voice from day one. Our ad creative they produced outperformed everything we'd made in-house. ROAS went through the roof.",
    result: '340% ROAS improvement on ads', niche: 'Health & Fitness',
  },
  {
    name: 'Karan Singh', handle: '@KaranAnalyzes', channelUrl: 'https://youtube.com',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=karan&backgroundColor=8B6F3F',
    text: "I was skeptical about outsourcing editing, but these guys get the documentary style I was going for. They elevated my political content to another level entirely.",
    result: '+80K subs, 4M+ views in 60 days', niche: 'Political Commentary',
  },
  {
    name: 'Neha Kulkarni', handle: '@NehaCreates', channelUrl: 'https://youtube.com',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=neha&backgroundColor=5C4A2A',
    text: "My Instagram reels now average 500K+ views. The hooks they write are insane — they understand exactly what makes someone stop scrolling. Worth every rupee.",
    result: 'Avg 500K+ plays per reel', niche: 'Lifestyle & Travel',
  },
]

function TestimonialCard({ t, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative rounded-2xl p-7 card-lift"
      style={{
        background: 'linear-gradient(145deg, #FFFFFF 0%, #FBF9F5 100%)',
        border: '1px solid rgba(160,82,45,0.12)',
        boxShadow: '0 4px 24px rgba(26,23,20,0.06)',
      }}
    >
      {/* Top gradient accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: 'linear-gradient(90deg, #A0522D, #C9974A, #E8B86D, #C9974A, #A0522D)' }}
      />

      {/* Stars */}
      <div className="flex gap-1 mb-5 mt-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={13} style={{ color: '#C9974A' }} fill="#C9974A" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[15px] leading-relaxed mb-6 font-light" style={{ color: '#3D3530' }}>
        "{t.text}"
      </p>

      {/* Result pill */}
      <div
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6"
        style={{ background: 'rgba(201,151,74,0.1)', border: '1px solid rgba(160,82,45,0.2)' }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#C9974A' }} />
        <span className="text-xs font-mono" style={{ color: '#A0522D' }}>{t.result}</span>
      </div>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" style={{ border: '1px solid rgba(160,82,45,0.15)' }} />
          <div>
            <div className="text-sm font-semibold" style={{ color: '#1A1714' }}>{t.name}</div>
            <div className="text-xs" style={{ color: '#7A6E65' }}>{t.niche}</div>
          </div>
        </div>
        <a
          href={t.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs transition-colors hover:underline"
          style={{ color: '#C9974A' }}
        >
          {t.handle}
          <ExternalLink size={11} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #EDE6D8 0%, #E5D9C5 100%)' }}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">Client Results</span>
          <h2
            className="font-display tracking-wider mt-3"
            style={{ fontSize: 'clamp(40px,6vw,80px)', color: '#1A1714', fontWeight: 300 }}
          >
            WHAT CREATORS<br />
            <span className="text-gold-gradient">ARE SAYING</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => <TestimonialCard key={i} t={t} index={i} />)}
        </div>
      </div>
    </section>
  )
}