import { Play, ExternalLink } from 'lucide-react'

const shorts = [
  {
    title: 'Social Media',
    platform: 'Instagram Reel',
    thumbnail: '/thumbnails/reel1.jpg',
    link: 'https://www.instagram.com/p/DXb2jG2DoOV/',
  },
  {
    title: 'Social media',
    platform: 'Instagram Reel',
    thumbnail: '/thumbnails/reel2.jpg',
    link: 'https://www.instagram.com/p/DWUNyLADU7O/',
  },
  {
    title: 'Educational',
    platform: 'YouTube Short',
    thumbnail: '/thumbnails/reel3.jpg',
    link: 'https://www.youtube.com/shorts/IbB44xAaI50',
  },
  {
    title: 'Retention editing',
    platform: 'Instagram Reel',
    thumbnail: '/thumbnails/reel4.jpg',
    link: 'https://www.instagram.com/p/DY2BBsIuFcC/',
  },
]

export default function ShortsPortfolio() {
  return (
    <section
      id="shorts"
      style={{
        padding: '120px 20px',
        background: `
          radial-gradient(
            circle at top center,
            rgba(201,151,74,0.12) 0%,
            rgba(201,151,74,0.04) 25%,
            transparent 60%
          ),
          linear-gradient(
            180deg,
            #FCFBF8 0%,
            #F7F1E8 50%,
            #FCFBF8 100%
          )
        `,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          <p
            style={{
              color: '#C9974A',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              fontSize: '11px',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            SHORT FORM CONTENT
          </p>

          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(52px, 8vw, 92px)',
              fontWeight: 500,
              lineHeight: 1,
              marginBottom: '18px',
              background:
                'linear-gradient(135deg,#1A1714 0%,#5A4030 40%,#C9974A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Reels & Shorts
          </h2>

          <div
            style={{
              width: '100px',
              height: '2px',
              margin: '0 auto 22px',
              background:
                'linear-gradient(to right, transparent, #C9974A, transparent)',
            }}
          />

          <p
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              color: '#6B615A',
              fontSize: '18px',
              lineHeight: '1.8',
            }}
          >
            Premium short-form content crafted to maximize retention,
            elevate brand perception, and transform attention into results.
          </p>
        </div>

        {/* Shorts Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px',
          }}
        >
          {shorts.map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  maxWidth: '300px',
                  margin: '0 auto',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow =
                    '0 20px 50px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow =
                    '0 15px 40px rgba(0,0,0,0.08)'
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '9 / 16',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />

                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.25), rgba(0,0,0,0.05))',
                    }}
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.92)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Play
                        size={24}
                        fill="#8B4513"
                        color="#8B4513"
                        style={{ marginLeft: '3px' }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    padding: '18px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#1A1714',
                      marginBottom: '6px',
                    }}
                  >
                    {video.title}
                  </h3>

                  <p
                    style={{
                      color: '#8A7F77',
                      fontSize: '13px',
                      marginBottom: '12px',
                    }}
                  >
                    {video.platform}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#C9974A',
                      fontSize: '13px',
                      fontWeight: 600,
                    }}
                  >
                    View Content
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}