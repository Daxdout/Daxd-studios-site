import testimonial1 from '../assets/testimonial1.jpg'
import testimonial2 from '../assets/testimonial2.jpg'
import testimonial3 from '../assets/testimonial3.jpg'

const testimonials = [
  testimonial1,
  testimonial2,
  testimonial3,
]

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
          maxWidth: '1600px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '140px',
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

        {/* Testimonials */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '220px',
            flexWrap: 'wrap',
            marginBottom: '120px',
          }}
        >
          {testimonials.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Testimonial ${index + 1}`}
              style={{
                width: '180px',
                height: 'auto',
                transform: 'scale(4.4)',
                transformOrigin: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(4.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(4)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}