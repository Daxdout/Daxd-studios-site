import { Play } from 'lucide-react'

const shorts = [
  {
    title: 'Social Media Content Edit',
    thumbnail: '/thumbnails/reel1.jpg',
    link: 'https://www.instagram.com/p/DXb2jG2DoOV/',
  },
  {
    title: 'High-Retention Reel Edit',
    thumbnail: '/thumbnails/reel2.jpg',
    link: 'https://www.instagram.com/p/DWUNyLADU7O/',
  },
  {
    title: 'Educational Short Edit',
    thumbnail: '/thumbnails/reel3.jpg',
    link: 'https://www.youtube.com/shorts/IbB44xAaI50',
  },
  {
    title: 'Retention Editing',
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

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
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
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '9 / 16',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
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
                        'linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0.05))',
                    }}
                  >
                    <div
                      style={{
                        width: '58px',
                        height: '58px',
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

                {/* Title */}
                <div
                  style={{
                    paddingTop: '14px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 500,
                      color: '#1A1714',
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {video.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}