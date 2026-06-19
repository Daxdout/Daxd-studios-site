import testimonial1 from '../assets/testimonial1.jpg'
import testimonial2 from '../assets/testimonial2.jpg'
import testimonial3 from '../assets/testimonial3.jpg'
import testimonial4 from '../assets/testimonial4.jpg'
import testimonial5 from '../assets/testimonial5.jpg'
import testimonial6 from '../assets/testimonial6.jpg'

const testimonials = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
  testimonial6,
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
          maxWidth: '1800px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '120px',
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
            display: 'grid',
            gridTemplateColumns: 'repeat(2, auto)',
            justifyContent: 'center',
            columnGap: '140px',
            rowGap: '120px',
            marginBottom: '120px',
          }}
        >
          {testimonials.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Testimonial ${index + 1}`}
              style={{
                width: '220px',
                height: 'auto',
                transform: 'scale(3)',
                transformOrigin: 'center',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(3.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(3)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}