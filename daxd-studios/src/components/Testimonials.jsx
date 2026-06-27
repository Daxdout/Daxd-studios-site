import testimonialsImage from '../assets/testimonials-collage.png'

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '120px 20px',
        background: 'linear-gradient(180deg, #EFE7DB, #E5D6C2)',
      }}
    >
      <div
        style={{
          maxWidth: '1800px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: '#B7792E',
              marginBottom: '14px',
            }}
          >
            TRUSTED BY CREATORS
          </div>

          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(48px, 7vw, 80px)',
              fontWeight: 600,
              color: '#1A1714',
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            Client Testimonials
          </h2>

          <p
            style={{
              color: '#6E6259',
              fontSize: '18px',
            }}
          >
            Real creators. Real feedback.
          </p>
        </div>

        {/* Single Image */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={testimonialsImage}
            alt="Client Testimonials"
            style={{
              width: '65%',
              maxWidth: '1450px',
              transform: 'scale(1.15)',
              transformOrigin: 'center',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1.15)'
            }}
          />
        </div>
      </div>
    </section>
  )
}