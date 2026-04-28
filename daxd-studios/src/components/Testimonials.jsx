import { Star, ExternalLink } from 'lucide-react'

const testimonials = [
  {
    name: 'Tech With Soleyman',
    handle: '@techwithsoleyman',
    url: 'https://www.youtube.com/@techwithsoleyman',
    result: 'Consistent Content, Zero Friction',
    text: 'Super easy to work with. I just send clips and everything else is handled.',
    niche: 'Tech',
  },
  {
    name: 'Mischa van den Burg',
    handle: '@mischavandenburg',
    url: 'https://www.youtube.com/@mischavandenburg',
    result: 'Structured Content System',
    text: 'We didn’t really have a plan before. Now it’s more structured and easier to stay consistent.',
    niche: 'Creator',
  },
  {
    name: 'Daniel Priestley',
    handle: '@DanielPriestley',
    url: 'https://www.youtube.com/@DanielPriestley',
    result: 'Strategy + Execution Clarity',
    text: 'Appreciate the way you handle both strategy and execution.',
    niche: 'Business',
  },
  {
    name: 'Kallaway',
    handle: '@kallawaymarketing',
    url: 'https://www.youtube.com/@kallawaymarketing',
    result: 'Smooth Workflow & Planning',
    text: 'Working with you has been smooth, especially on the planning side.',
    niche: 'Marketing',
  },
  {
    name: 'Parker Prompts',
    handle: '@parkerprompts',
    url: 'https://www.youtube.com/@parkerprompts',
    result: 'Content Direction Clarity',
    text: 'They helped us figure out what kind of content works.',
    niche: 'AI Content',
  },
  {
    name: 'Adam McInnes',
    handle: '@adammcinnes',
    url: 'https://www.youtube.com/@adammcinnes',
    result: 'Steady Growth Over Time',
    text: 'Not overnight, but you can clearly see steady improvement.',
    niche: 'Business',
  },
]

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '100px 20px',
        background: 'linear-gradient(180deg, #EFE7DB, #E5D6C2)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>

          {/* Label */}
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
            Trusted by Creators
          </div>

          {/* HEADLINE (FIXED) */}
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(38px, 5vw, 56px)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#1A1714',
            }}
          >
            Real Results.{' '}
            <span
              style={{
                background: 'linear-gradient(180deg, #D4A055, #7A4316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Real Growth.
            </span>
          </h2>

          <p style={{ color: '#6E6259', fontSize: 14, marginTop: 12 }}>
            Real creators. Real impact. Real systems.
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 18,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                borderRadius: 14,
                padding: 20,
                background: 'linear-gradient(145deg, #FFFDF9, #F3ECE3)',
                border: '1px solid rgba(160,82,45,0.12)',
                boxShadow: '0 8px 26px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 200,
              }}
            >
              {/* TOP */}
              <div>
                <div style={{ display: 'flex', gap: 3, marginBottom: 8 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="#C9974A" stroke="none" />
                  ))}
                </div>

                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#8B4513',
                    marginBottom: 8,
                  }}
                >
                  {t.result}
                </div>

                <div
                  style={{
                    height: 1,
                    background: 'rgba(0,0,0,0.06)',
                    marginBottom: 10,
                  }}
                />

                <p
                  style={{
                    fontSize: 13,
                    color: '#4A433E',
                    lineHeight: 1.6,
                  }}
                >
                  "{t.text}"
                </p>
              </div>

              {/* BOTTOM */}
              <div
                style={{
                  marginTop: 16,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#1A1714',
                      textDecoration: 'none',
                    }}
                  >
                    {t.name}
                  </a>
                  <div style={{ fontSize: 11, color: '#7A6E65' }}>
                    {t.niche}
                  </div>
                </div>

                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 11,
                    color: '#C9974A',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    textDecoration: 'none',
                  }}
                >
                  {t.handle} <ExternalLink size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}