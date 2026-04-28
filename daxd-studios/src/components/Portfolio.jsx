import { useState } from 'react'
import { X } from 'lucide-react'

const projects = [
  { thumb: 'https://img.youtube.com/vi/uyeRi2Lc954/maxresdefault.jpg', video: 'https://www.youtube.com/embed/uyeRi2Lc954' },
  { thumb: 'https://img.youtube.com/vi/NdcygytQlYQ/maxresdefault.jpg', video: 'https://www.youtube.com/embed/NdcygytQlYQ' },
  { thumb: 'https://img.youtube.com/vi/SDHKQbKC7gA/maxresdefault.jpg', video: 'https://www.youtube.com/embed/SDHKQbKC7gA' },
  { thumb: 'https://img.youtube.com/vi/p6UiFObNQlE/maxresdefault.jpg', video: 'https://www.youtube.com/embed/p6UiFObNQlE' },
  { thumb: 'https://img.youtube.com/vi/tTplmSnPIHQ/maxresdefault.jpg', video: 'https://www.youtube.com/embed/tTplmSnPIHQ' },
  { thumb: 'https://img.youtube.com/vi/f-rBpnp4BP4/maxresdefault.jpg', video: 'https://www.youtube.com/embed/f-rBpnp4BP4' },
]

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section
      style={{
        padding: '80px 20px',
        background: 'linear-gradient(180deg, #EFE7DB, #E5D6C2)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: '#8B4513',
              marginBottom: 12,
            }}
          >
            Selected Work
          </div>

          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(36px, 6vw, 60px)',
              fontWeight: 600,
              lineHeight: 1.1,
              background: `
                linear-gradient(
                  180deg,
                  #F1D6A3 0%,
                  #D4A055 30%,
                  #B7792E 60%,
                  #7A4316 100%
                )
              `,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            We Don’t Just Edit.<br />
            We Grow Channels.
          </h2>

          <p style={{ color: '#6E6259', fontSize: 14, marginTop: 10 }}>
            Click any project to watch the full edit.
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => setActiveVideo(p.video)}
              style={{
                borderRadius: 16,
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                border: '1px solid rgba(160,82,45,0.12)',
                background: 'linear-gradient(145deg, #FFFDF9, #F3ECE3)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              }}
            >
              {/* IMAGE WRAPPER */}
              <div
                style={{
                  width: '100%',
                  position: 'relative',
                  paddingTop: '56.25%', // always 16:9 → clean layout
                }}
              >
                <img
                  src={p.thumb}
                  alt=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://placehold.co/640x360/EDE6D8/A0522D?text=Video'
                  }}
                />

                {/* OVERLAY */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.45))',
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.95)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}
                  >
                    ▶
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999,
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: 900,
              position: 'relative',
            }}
          >
            <button
              onClick={() => setActiveVideo(null)}
              style={{
                position: 'absolute',
                top: -40,
                right: 0,
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              <X />
            </button>

            <div style={{ borderRadius: 14, overflow: 'hidden' }}>
              <iframe
                src={activeVideo}
                style={{
                  width: '100%',
                  height: '500px',
                  border: 'none',
                }}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}