const items = [
  'YouTube Growth', 'Short-Form Reels', 'Brand Ads', 'Documentary Style',
  'Motion Graphics', 'Color Grading', 'Thumbnail Design', 'Channel Strategy',
  'YouTube Growth', 'Short-Form Reels', 'Brand Ads', 'Documentary Style',
  'Motion Graphics', 'Color Grading', 'Thumbnail Design', 'Channel Strategy',
]

export default function MarqueeBanner() {
  return (
    <div
      className="py-5 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A1714 0%, #2A1F18 40%, #3D2B1F 100%)',
        borderTop: '1px solid rgba(201,151,74,0.2)',
        borderBottom: '1px solid rgba(201,151,74,0.2)',
      }}
    >
      <div className="flex whitespace-nowrap marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span
              className="text-sm tracking-widest uppercase font-mono"
              style={{ color: '#B5ADA5' }}
            >
              {item}
            </span>
            <span style={{ color: '#C9974A', fontSize: '18px' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}