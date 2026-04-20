import { Mail, MapPin, ArrowUpRight, Play, Camera, X, Briefcase } from 'lucide-react'

const social = [
  { icon: Play,     label: 'YouTube',   href: 'https://youtube.com/@daxdstudios' },
  { icon: Camera,   label: 'Instagram', href: 'https://instagram.com/daxdstudios' },
  { icon: X,        label: 'Twitter/X', href: 'https://twitter.com/daxdstudios' },
  { icon: Briefcase,label: 'LinkedIn',  href: 'https://linkedin.com/company/daxdstudios' },
]

const services = [
  'Long-Form YouTube Editing', 'Short-Form Reels & Shorts',
  'Brand Ad Production', 'Thumbnail Design',
  'Channel Strategy', 'Script Writing',
]

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(150deg, #1A1714 0%, #2A1F18 50%, #1A1714 100%)' }}>
      {/* Gold top border */}
      <div className="gold-divider" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-8 h-8 rounded-sm flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #A0522D, #C9974A)' }}
            >
              <span className="font-display text-sm" style={{ color: '#FAF8F5' }}>D</span>
            </div>
            <span className="font-display text-xl tracking-widest" style={{ color: '#EDE6D8', letterSpacing: '0.18em' }}>
              DAX<span className="text-gold-gradient">D</span> STUDIOS
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: '#7A6E65' }}>
            Premium video editing for YouTube creators and brands who are serious about growing their audience and revenue.
          </p>
          <div className="flex gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid rgba(201,151,74,0.15)', color: '#7A6E65' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#C9974A'
                  e.currentTarget.style.borderColor = 'rgba(201,151,74,0.4)'
                  e.currentTarget.style.background = 'rgba(201,151,74,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#7A6E65'
                  e.currentTarget.style.borderColor = 'rgba(201,151,74,0.15)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="section-label mb-5" style={{ color: '#C9974A' }}>Services</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#portfolio"
                  className="text-sm transition-colors"
                  style={{ color: '#7A6E65' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#EDE6D8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#7A6E65'}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="section-label mb-5" style={{ color: '#C9974A' }}>Contact</h4>
          <div className="space-y-4">
            <a
              href="mailto:hello@daxdstudios.com"
              className="flex items-center gap-3 text-sm transition-colors group"
              style={{ color: '#7A6E65' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C9974A'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#7A6E65'}
            >
              <Mail size={14} className="shrink-0" />
              hello@daxdstudios.com
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <div className="flex items-start gap-3 text-sm" style={{ color: '#7A6E65' }}>
              <MapPin size={14} className="shrink-0 mt-0.5" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="pt-2">
              <a href="#book" className="btn-primary py-3 px-5 text-sm">
                Book a Free Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-6 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(201,151,74,0.08)' }}
      >
        <p className="text-xs" style={{ color: '#3D3530' }}>
          © {new Date().getFullYear()} Dax D Studios. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: '#3D3530' }}>
          Built for creators who mean business.
        </p>
      </div>
    </footer>
  )
}