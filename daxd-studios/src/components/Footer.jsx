import { Mail, MapPin, ArrowUpRight, Camera } from 'lucide-react'

const social = [
  { icon: Camera, label: 'Instagram', href: 'https://www.instagram.com/daxdout_edits/' },
]

const services = [
  'Long-Form YouTube Editing', 'Short-Form Reels & Shorts',
  'Brand Ad Production',       'Thumbnail Design',
  'Channel Strategy',          'Script Writing',
]

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(150deg, #1A1714 0%, #2A1F18 55%, #1A1714 100%)' }}>
      <div className="gold-divider" />

      <div
        style={{
          maxWidth: '1200px', margin: '0 auto',
          padding: '64px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
        }}
      >
        <div style={{ gridColumn: 'span 2' }} className="lg-span-2">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div
              style={{
                width: '30px', height: '30px', borderRadius: '5px', flexShrink: 0,
                background: 'linear-gradient(135deg, #8B4513, #C9974A)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <span style={{ fontFamily: '"Playfair Display", serif', color: '#FDFCFA', fontSize: '14px', fontWeight: 500 }}>D</span>
            </div>
            <span
              style={{
                fontFamily: '"Inter", sans-serif', fontSize: '13px', fontWeight: 600,
                letterSpacing: '0.14em', color: '#EDE6D8',
              }}
            >
              DAXD <span style={{ color: '#C9974A' }}>STUDIOS</span>
            </span>
          </div>

          <p style={{ fontSize: '13.5px', color: '#6B5E55', lineHeight: 1.75, maxWidth: '260px', marginBottom: '20px' }}>
            Premium video editing for YouTube creators and brands serious about growing their audience and revenue.
          </p>

          <div style={{ display: 'flex', gap: '8px' }}>
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: '34px', height: '34px', borderRadius: '8px',
                  border: '1px solid rgba(201,151,74,0.14)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#6B5E55', transition: 'all 0.2s', textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color       = '#C9974A'
                  e.currentTarget.style.borderColor = 'rgba(201,151,74,0.38)'
                  e.currentTarget.style.background  = 'rgba(201,151,74,0.07)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color       = '#6B5E55'
                  e.currentTarget.style.borderColor = 'rgba(201,151,74,0.14)'
                  e.currentTarget.style.background  = 'transparent'
                }}
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="section-label" style={{ color: '#C9974A', marginBottom: '18px', display: 'block' }}>Services</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#portfolio"
                  style={{ fontSize: '13px', color: '#6B5E55', textDecoration: 'none', transition: 'color 0.18s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#EDE6D8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#6B5E55'}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="section-label" style={{ color: '#C9974A', marginBottom: '18px', display: 'block' }}>Contact</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <a
              href="mailto:dhirandaksh@gmail.com"
              className="group"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6B5E55', textDecoration: 'none', transition: 'color 0.18s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C9974A'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#6B5E55'}
            >
              <Mail size={13} style={{ flexShrink: 0 }} />
              dhirandaksh@gmail.com
              <ArrowUpRight size={11} style={{ opacity: 0.5 }} />
            </a>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#6B5E55' }}>
              <MapPin size={13} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Pune, Maharashtra, India</span>
            </div>

            <div style={{ marginTop: '6px' }}>
              <a href="#book" className="btn-primary" style={{ fontSize: '13px', padding: '11px 20px' }}>
                Book a Free Call
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(201,151,74,0.07)',
          padding: '18px 40px',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
        }}
      >
        <p style={{ fontSize: '12px', color: '#3D3530' }}>
          © {new Date().getFullYear()} Dax D Studios. All rights reserved.
        </p>
        <p style={{ fontSize: '12px', color: '#3D3530' }}>
          Built for creators who mean business.
        </p>
      </div>
    </footer>
  )
}