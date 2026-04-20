const items = [
  'YouTube Growth', 'Short-Form Reels', 'Brand Ads', 'Documentary Style',
  'Motion Graphics', 'Color Grading', 'Thumbnail Design', 'Channel Strategy',
  'YouTube Growth', 'Short-Form Reels', 'Brand Ads', 'Documentary Style',
  'Motion Graphics', 'Color Grading', 'Thumbnail Design', 'Channel Strategy',
]

export default function MarqueeBanner() {
  return (
    <div className="py-5 border-y border-white/[0.06] overflow-hidden bg-[#111111]/60 backdrop-blur-sm">
      <div className="flex whitespace-nowrap marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className="text-[#888] text-sm tracking-widest uppercase font-mono">{item}</span>
            <span className="text-[#D4A843] text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
