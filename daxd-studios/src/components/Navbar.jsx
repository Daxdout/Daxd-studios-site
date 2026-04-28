import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Work',      href: '#portfolio'    },
  { label: 'Showreel',  href: '#showreel'     },
  { label: 'About',     href: '#about'        },
  { label: 'Reviews',   href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        transition: 'background 0.4s, box-shadow 0.4s',
        background: scrolled ? 'rgba(253,252,250,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(160,82,45,0.1)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 40px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div
            style={{
              width: '32px', height: '32px',
              borderRadius: '5px',
              background: 'linear-gradient(135deg, #8B4513, #C9974A)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span style={{ fontFamily: '"Playfair Display", serif', color: '#FDFCFA', fontSize: '15px', fontWeight: 500 }}>
              D
            </span>
          </div>
          <span
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: '#1A1714',
            }}
          >
            DAXD <span style={{ color: '#C9974A' }}>STUDIOS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '13.5px',
                fontWeight: 400,
                color: '#5A4F48',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#8B4513'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5A4F48'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#book" className="btn-primary" style={{ fontSize: '13px', padding: '11px 22px' }}>
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1A1714' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            background: '#FDFCFA',
            borderTop: '1px solid rgba(160,82,45,0.1)',
            padding: '24px 40px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ color: '#3D3530', fontSize: '15px', fontWeight: 400, textDecoration: 'none' }}
            >
              {link.label}
            </a>
          ))}
          <a href="#book" className="btn-primary" onClick={() => setOpen(false)} style={{ marginTop: '8px', justifyContent: 'center' }}>
            Book a Free Call
          </a>
        </div>
      )}
    </header>
  )
}