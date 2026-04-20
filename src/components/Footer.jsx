import { Mail, MapPin, ArrowUpRight, Play, Camera, X, Briefcase } from 'lucide-react'

const social = [
  { icon: Play, label: 'YouTube', href: 'https://youtube.com/@daxdstudios' },
  { icon: Camera, label: 'Instagram', href: 'https://instagram.com/daxdstudios' },
  { icon: X, label: 'Twitter/X', href: 'https://twitter.com/daxdstudios' },
  { icon: Briefcase, label: 'LinkedIn', href: 'https://linkedin.com/company/daxdstudios' },
]

const services = [
  'Long-Form YouTube Editing',
  'Short-Form Reels & Shorts',
  'Brand Ad Production',
  'Thumbnail Design',
  'Channel Strategy',
  'Script Writing',
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#D4A843] to-[#E8622A] flex items-center justify-center">
              <span className="font-display text-[#080808] text-sm">D</span>
            </div>
            <span className="font-display text-xl tracking-widest text-frost">
              DAX<span className="text-gold-gradient">D</span> STUDIOS
            </span>
          </div>
          <p className="text-[#888] text-sm leading-relaxed max-w-xs mb-6">
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
                className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#888] hover:text-[#D4A843] hover:border-[#D4A843]/30 transition-all duration-200"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="section-label mb-5">Services</h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s}>
                <a href="#portfolio" className="text-[#888] text-sm hover:text-[#E8E8E8] transition-colors">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="section-label mb-5">Contact</h4>
          <div className="space-y-4">
            <a
              href="mailto:hello@daxdstudios.com"
              className="flex items-center gap-3 text-[#888] text-sm hover:text-[#D4A843] transition-colors group"
            >
              <Mail size={14} className="shrink-0" />
              hello@daxdstudios.com
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <div className="flex items-start gap-3 text-[#888] text-sm">
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
      <div className="border-t border-white/[0.05] px-6 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[#555] text-xs">
          © {new Date().getFullYear()} Dax D Studios. All rights reserved.
        </p>
        <p className="text-[#555] text-xs">
          Built for creators who mean business.
        </p>
      </div>
    </footer>
  )
}
