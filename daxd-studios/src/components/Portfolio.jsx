import { useState } from 'react'
import { X } from 'lucide-react'

const projects = [
  {
    title: 'YouTube Growth Edit',
    thumb: 'https://img.youtube.com/vi/uyeRi2Lc954/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/uyeRi2Lc954'
  },
  {
    title: 'High Retention Storytelling',
    thumb: 'https://img.youtube.com/vi/NdcygytQlYQ/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/NdcygytQlYQ'
  },
  {
    title: 'Faceless Automation Edit',
    thumb: 'https://img.youtube.com/vi/SDHKQbKC7gA/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/SDHKQbKC7gA'
  },

  // ✅ ONLY video replaced, title kept clean (not "gohighlevel")
  {
    title: 'Long-Form Content Edit',
    thumb: 'https://img.youtube.com/vi/eRS3CmvrOvA/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/eRS3CmvrOvA'
  },

  {
    title: 'Client Acquisition Video',
    thumb: 'https://img.youtube.com/vi/tTplmSnPIHQ/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/tTplmSnPIHQ'
  },
  {
    title: 'Content Scaling Edit',
    thumb: 'https://img.youtube.com/vi/f-rBpnp4BP4/maxresdefault.jpg',
    video: 'https://www.youtube.com/embed/f-rBpnp4BP4'
  },
]

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section style={{
      padding: 'clamp(60px, 8vw, 80px) 16px',
      background: 'linear-gradient(180deg, #EFE7DB, #E5D6C2)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: '#8B4513',
            marginBottom: 10,
          }}>
            Selected Work
          </div>

          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(28px, 7vw, 60px)',
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
          }}>
            We Don’t Just Edit.<br />
            We Grow Brands.
          </h2>

          <p style={{
            color: '#6E6259',
            fontSize: '13px',
            marginTop: 10
          }}>
            Tap any project to watch.
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
                <img src={p.thumb} alt={p.title} />

                <div className="overlay">
                  <div className="play-btn">▶</div>
                </div>
              </div>

              {/* ✅ IMPROVED TITLE */}
              <div className="video-title">
                {p.title}
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
              <X size={22}/>
            </button>

            <div className="video-wrapper">
              <iframe
                src={activeVideo}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
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
          cursor: pointer;
        }

        .image-wrapper {
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          padding-top: 56.25%;
          border: 1px solid rgba(160,82,45,0.1);
          background: linear-gradient(145deg, #FFFDF9, #F3ECE3);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .portfolio-card:hover .image-wrapper {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.12);
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
          background: linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-card:hover .overlay {
          opacity: 1;
        }

        .play-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }

        /* ✅ CLEAN, SMALL, ALIGNED TITLE */
        .video-title {
          margin-top: 8px;
          font-size: 12.5px;
          font-weight: 600;
          color: #2d2a26;
          text-align: left;
          letter-spacing: 0.02em;
          line-height: 1.3;
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          padding: 16px;
        }

        .modal-content {
          width: 100%;
          max-width: 900px;
          position: relative;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
        }

        .video-wrapper iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 12px;
        }

        .close-btn {
          position: absolute;
          top: -36px;
          right: 0;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .overlay {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}