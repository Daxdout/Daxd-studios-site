import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Showreel', href: '#showreel' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-soft-sm border-b border-[#DDD0BC]/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-sm flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #A0522D, #C9974A)' }}
          >
            <span className="font-display text-[#FAF8F5] text-sm font-semibold tracking-wider">D</span>
          </div>
          <span
            className="font-display text-xl tracking-widest"
            style={{ color: '#1A1714', letterSpacing: '0.18em' }}
          >
            DAX<span className="text-gold-gradient">D</span> STUDIOS
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#7A6E65] hover:text-[#A0522D] text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#book" className="btn-primary text-sm py-3 px-6">
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#1A1714]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#FAF8F5] border-t border-[#DDD0BC]/60 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#3D3530] text-base font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a href="#book" className="btn-primary text-sm text-center mt-2" onClick={() => setOpen(false)}>
            Book a Free Call
          </a>
        </div>
      )}
    </header>
  )
}