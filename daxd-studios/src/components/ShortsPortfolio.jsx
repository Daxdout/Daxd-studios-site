import { Play } from 'lucide-react'

const shorts = [
  {
    title: 'Fitness Transformation',
    thumbnail: '/thumbnails/video1.jpg',
    link: 'https://www.instagram.com/',
  },
  {
    title: 'Real Estate Reel',
    thumbnail: '/thumbnails/video2.jpg',
    link: 'https://www.instagram.com/',
  },
  {
    title: 'Business Growth Short',
    thumbnail: '/thumbnails/video3.jpg',
    link: 'https://youtube.com/',
  },
  {
    title: 'Podcast Highlights',
    thumbnail: '/thumbnails/video1.jpg',
    link: 'https://www.instagram.com/',
  },
  {
    title: 'Luxury Brand Reel',
    thumbnail: '/thumbnails/video2.jpg',
    link: 'https://www.instagram.com/',
  },
  {
    title: 'Motivational Short',
    thumbnail: '/thumbnails/video3.jpg',
    link: 'https://youtube.com/',
  },
]

export default function ShortsPortfolio() {
  return (
    <section
      id="shorts"
      style={{
        background: '#F3EBDE',
        padding: '110px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Heading */}

        <div
          style={{
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#A86D2D',
              marginBottom: '14px',
              fontWeight: '500',
            }}
          >
            SHORT FORM CONTENT
          </p>

          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontWeight: '500',
              lineHeight: '1.05',
              marginBottom: '14px',
              background:
                'linear-gradient(180deg, #E4BF84 0%, #A86D2D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Reels & Shorts
          </h2>

          <p
            style={{
              color: '#7A6B61',
              fontSize: '15px',
            }}
          >
            Tap any reel to watch.
          </p>
        </div>

        {/* Grid */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '26px',
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
                  e.currentTarget.style.transform =
                    'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    'translateY(0px)'
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '18px',
                  }}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    style={{
                      width: '100%',
                      aspectRatio: '9 / 16',
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
                        'linear-gradient(to top, rgba(0,0,0,0.25), rgba(0,0,0,0.02))',
                    }}
                  >
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.92)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Play
                        size={22}
                        fill="#A86D2D"
                        color="#A86D2D"
                        style={{ marginLeft: '3px' }}
                      />
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    marginTop: '10px',
                    fontSize: '14px',
                    color: '#2F2925',
                  }}
                >
                  {video.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}