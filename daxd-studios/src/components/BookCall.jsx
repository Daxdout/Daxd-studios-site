import { Calendar, Clock, Video, CheckCircle2 } from 'lucide-react'

const perks = [
  { icon: Clock, text: '30-min free strategy session' },
  { icon: Video, text: 'We review your current content' },
  { icon: CheckCircle2, text: 'Free growth audit report' },
]

export default function BookCall() {

  // ✅ SIMPLE & RELIABLE
  const openCalendly = () => {
    window.open('https://calendly.com/daxdstudios/30min', '_blank')
  }

  return (
    <section
      id="book"
      style={{
        padding: '100px 20px',
        background: 'linear-gradient(180deg, #EFE7DB, #E5D6C2)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>

        {/* LABEL */}
        <div
          style={{
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: '#B7792E',
            marginBottom: 14,
          }}
        >
          Ready to Scale?
        </div>

        {/* HEADING */}
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(38px, 5vw, 56px)',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: 14,
          }}
        >
          Book a{' '}
          <span
            style={{
              background: 'linear-gradient(180deg, #D4A055, #7A4316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Free Strategy Call
          </span>
        </h2>

        {/* SUBTEXT */}
        <p style={{ color: '#6E6259', fontSize: 15, marginBottom: 28 }}>
          No pitch, no pressure. Just a real conversation about your channel growth.
        </p>

        {/* PERKS */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 20,
            marginBottom: 36,
          }}
        >
          {perks.map((perk, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <perk.icon size={14} style={{ color: '#C9974A' }} />
              <span style={{ fontSize: 13, color: '#7A6E65' }}>{perk.text}</span>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <button
          onClick={openCalendly}
          style={{
            padding: '14px 26px',
            fontSize: 14,
            fontWeight: 500,
            borderRadius: 10,
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
            background: 'linear-gradient(90deg, #C9974A, #8B4513)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
            transition: 'all 0.25s ease',
          }}
        >
          Book Your Call
        </button>

        {/* FALLBACK */}
        <p style={{ marginTop: 18, fontSize: 13, color: '#8C837A' }}>
          Prefer direct link?{' '}
          <a
            href="https://calendly.com/daxdstudios/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#C9974A', textDecoration: 'none' }}
          >
            Open Calendly →
          </a>
        </p>

      </div>
    </section>
  )
}