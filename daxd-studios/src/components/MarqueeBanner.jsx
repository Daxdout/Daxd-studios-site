const items = [
  'YouTube Growth','Short-Form Reels','Brand Ads','Documentary Style',
  'Motion Graphics','Color Grading','Thumbnail Design','Channel Strategy',
  'YouTube Growth','Short-Form Reels','Brand Ads','Documentary Style',
  'Motion Graphics','Color Grading','Thumbnail Design','Channel Strategy',
]

export default function MarqueeBanner() {
  return (
    <div
      style={{
        padding: '14px 0',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1A1714 0%, #2A1F18 50%, #3D2B1F 100%)',
        borderTop: '1px solid rgba(201,151,74,0.18)',
        borderBottom: '1px solid rgba(201,151,74,0.18)',
      }}
    >
      <div className="flex whitespace-nowrap marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center" style={{ gap: '20px', margin: '0 20px' }}>
            <span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#B5ADA5',
              }}
            >
              {item}
            </span>
            <span style={{ color: '#C9974A', fontSize: '14px', lineHeight: 1 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}