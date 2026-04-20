# Dax D Studios — Portfolio Website

Premium, dark-themed portfolio website for Dax D Studios video editing agency.

## Tech Stack

- **React 18** + **Vite** (lightning-fast dev/build)
- **Tailwind CSS 3** (utility-first styling)
- **Framer Motion** (smooth animations)
- **Lucide React** (icons)

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → Opens at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Sticky nav with mobile menu
│   ├── Hero.jsx           # Fullscreen hero with video bg + stats
│   ├── MarqueeBanner.jsx  # Scrolling services ticker
│   ├── Showreel.jsx       # YouTube embed with custom play UI
│   ├── Portfolio.jsx      # Filterable project grid
│   ├── Testimonials.jsx   # Client review cards
│   ├── About.jsx          # Studio intro + 4 pillars
│   ├── BookCall.jsx       # Calendly embed section
│   └── Footer.jsx         # Links, socials, contact
├── App.jsx                # Root layout
├── main.jsx               # Entry point
└── index.css              # Global styles + fonts
```

---

## Customization Checklist

### 1. Hero Video
In `Hero.jsx`, add your background video URL:
```jsx
<source src="YOUR_VIDEO_URL.mp4" type="video/mp4" />
```

### 2. Showreel (YouTube)
In `Showreel.jsx`, replace the Video ID:
```jsx
const VIDEO_ID = 'YOUR_YOUTUBE_VIDEO_ID'
```

### 3. Portfolio Projects
In `Portfolio.jsx`, edit the `projects` array:
```js
{
  title: 'Your Project Name',
  category: 'YouTube',          // YouTube | Reels | Ads
  client: '@YourClient',
  result: 'Result metric here',
  thumb: 'https://your-image.jpg',
  tags: ['Tag1', 'Tag2'],
}
```

### 4. Testimonials
In `Testimonials.jsx`, edit the `testimonials` array with real client data.

### 5. Calendly Link
In `BookCall.jsx`, update the Calendly URL:
```jsx
data-url="https://calendly.com/YOUR_USERNAME/YOUR_EVENT"
```
Also update the fallback `href` on the direct link.

### 6. Contact Info
In `Footer.jsx`, update email, location, and all social links.

### 7. Meta / SEO
In `index.html`, update:
```html
<title>Dax D Studios — Premium Video Editing Agency</title>
<meta name="description" content="..." />
```

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `#080808` | Near-black | Page background |
| `#111111` | Charcoal | Card backgrounds |
| `#D4A843` | Gold | Primary accent, CTAs |
| `#E8622A` | Ember | Gradient accent |
| `#E8E8E8` | Frost | Primary text |
| `#888888` | Dim | Secondary text |

**Fonts:** Bebas Neue (display) · DM Sans (body) · JetBrains Mono (labels)

---

## Deployment

**Vercel (recommended):**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# Drag the `dist/` folder to app.netlify.com
```

**GitHub Pages:**
```bash
npm run build
# Push `dist/` contents to `gh-pages` branch
```

---

## Notes

- The hero background video requires an MP4 source URL. A gradient fallback renders automatically if no video is provided.
- Calendly widget loads async — there's a direct link fallback if the widget doesn't render.
- All placeholder images use Unsplash CDN URLs — replace with your actual project thumbnails.
- Client avatar images use DiceBear API — replace with real photos.
