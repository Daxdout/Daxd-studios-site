import { ArrowUpRight } from 'lucide-react'

export default function Founder() {
  return (
    <section
      style={{
        background: '#141210',
        padding: '120px 40px',
      }}
    >
      <div
        style={{
          maxWidth: '1150px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* LEFT - IMAGE */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '18px',
              padding: '2px', // 🔥 border thickness
              background:
                'linear-gradient(135deg, rgba(201,151,74,0.6), rgba(201,151,74,0.05))',
              boxShadow: '0 15px 50px rgba(0,0,0,0.6)',
            }}
          >
            <div
              style={{
                width: '300px',
                height: '380px',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#000',
              }}
            >
              <img
                src="/founder.jpg"
                alt="Daksh - Founder"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.05) saturate(0.95)',
                }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT - TEXT */}
        <div>
          {/* PREMIUM HEADING */}
          <h2
            style={{
              fontSize: '38px',
              lineHeight: 1.2,
              marginBottom: '24px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            <span style={{ color: '#F5EFE6' }}>Meet the </span>
            <span style={{ color: '#C9974A' }}>Founder</span>
          </h2>

          <p
            style={{
              fontSize: '15px',
              color: '#9B8E84',
              lineHeight: 1.9,
              marginBottom: '18px',
              maxWidth: '520px',
            }}
          >
            I’m Daksh, the mind behind Dax D Studios.

            We help creators and brands turn raw content 
            into high-retention videos engineered for attention, trust, and conversion..
          </p>

          <p
            style={{
              fontSize: '15px',
              color: '#9B8E84',
              lineHeight: 1.9,
              marginBottom: '28px',
              maxWidth: '520px',
            }}
          >
            This isn’t just editing - it’s strategy, storytelling, and animation combined.
Every cut, frame, and sequence is intentional-built to maximize watch time, build authority, and turn viewers into clients.
          </p>

          {/* CTA */}
          <a
            href="https://www.instagram.com/daxdout_edits/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              color: '#C9974A',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(201,151,74,0.4)',
              paddingBottom: '4px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8'
              e.currentTarget.style.transform = 'translateX(3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateX(0)'
            }}
          >
            View my work
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}