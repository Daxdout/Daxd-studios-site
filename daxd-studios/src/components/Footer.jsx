import { Mail, MapPin, ArrowUpRight, Camera } from 'lucide-react'

const social = [
  { icon: Camera, label: 'Instagram', href: 'https://www.instagram.com/daxdout_edits/' },
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
    <footer style={{
      background: 'linear-gradient(150deg, #1A1714 0%, #2A1F18 55%, #1A1714 100%)'
    }}>
      <div className="gold-divider" />

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-main">
          <div className="logo-row">
            <div className="logo-box">
              <span>D</span>
            </div>

            <span className="logo-text">
              DAXD <span>STUDIOS</span>
            </span>
          </div>

          <p className="footer-desc">
            Premium video editing for YouTube creators and brands serious about growing their audience and revenue.
          </p>

          <div className="social-row">
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="footer-title">Services</h4>
          <ul className="footer-list">
            {services.map((s) => (
              <li key={s}>
                <a href="#portfolio">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="footer-title">Contact</h4>

          <div className="footer-contact">

            <a href="mailto:dhirandaksh@gmail.com">
              <Mail size={14} />
              dhirandaksh@gmail.com
              <ArrowUpRight size={12} />
            </a>

            <div>
              <MapPin size={14} />
              Pune, Maharashtra, India
            </div>

            <a href="#book" className="footer-cta">
              Book a Free Call
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dax D Studios</p>
        <p>Built for creators who mean business.</p>
      </div>

      {/* STYLES */}
      <style>{`

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(50px,8vw,64px) clamp(16px,5vw,40px);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .footer-main {
          max-width: 280px;
        }

        .logo-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .logo-box {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: linear-gradient(135deg, #8B4513, #C9974A);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: "Playfair Display";
          font-size: 14px;
        }

        .logo-text {
          font-size: 13px;
          letter-spacing: 0.14em;
          color: #EDE6D8;
          font-weight: 600;
        }

        .logo-text span {
          color: #C9974A;
        }

        .footer-desc {
          font-size: 13.5px;
          color: #6B5E55;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .social-row {
          display: flex;
          gap: 10px;
        }

        .social-row a {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          border: 1px solid rgba(201,151,74,0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6B5E55;
        }

        .footer-title {
          color: #C9974A;
          font-size: 12px;
          letter-spacing: 0.12em;
          margin-bottom: 16px;
        }

        .footer-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-list a {
          font-size: 13px;
          color: #6B5E55;
          text-decoration: none;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 13px;
          color: #6B5E55;
        }

        .footer-contact a {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: inherit;
        }

        .footer-cta {
          margin-top: 6px;
          background: linear-gradient(135deg, #8B4513, #C9974A);
          padding: 12px;
          border-radius: 10px;
          color: #fff !important;
          justify-content: center;
          text-align: center;
        }

        .footer-bottom {
          border-top: 1px solid rgba(201,151,74,0.07);
          padding: 16px clamp(16px,5vw,40px);
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 6px;
          font-size: 12px;
          color: #3D3530;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* MOBILE (REAL FIX) */
        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-main {
            max-width: 100%;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-cta {
            width: 100%;
          }
        }

      `}</style>
    </footer>
  )
}