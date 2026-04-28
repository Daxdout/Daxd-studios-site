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
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => setActiveVideo(p.video)}
              className="portfolio-card"
            >
              <div className="image-wrapper">
                <img src={p.thumb} alt="" />

                <div className="overlay">
                  <div className="play-btn">▶</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeVideo && (
        <div className="modal" onClick={() => setActiveVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveVideo(null)}>
              <X />
            </button>

            <iframe
              src={activeVideo}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .portfolio-card {
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          border: 1px solid rgba(160,82,45,0.12);
          background: linear-gradient(145deg, #FFFDF9, #F3ECE3);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .portfolio-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .image-wrapper {
          width: 100%;
          position: relative;
          padding-top: 56.25%;
        }

        .image-wrapper img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.45));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-card:hover .overlay {
          opacity: 1;
        }

        .play-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          padding: 20px;
        }

        .modal-content {
          width: 100%;
          max-width: 900px;
          position: relative;
        }

        .modal-content iframe {
          width: 100%;
          height: 500px;
          border: none;
          border-radius: 14px;
        }

        .close-btn {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .portfolio-grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </section>
  )
}