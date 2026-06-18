import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBanner from './components/MarqueeBanner'
import Showreel from './components/Showreel'
import Portfolio from './components/Portfolio'
import ShortsPortfolio from './components/ShortsPortfolio'
import Testimonials from './components/Testimonials'
import About from './components/About'
import BookCall from './components/BookCall'
import Founder from './components/Founder'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-parchment text-espresso">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Marquee */}
      <MarqueeBanner />

      {/* Long Form Portfolio */}
      <div id="portfolio" style={{ scrollMarginTop: '100px' }}>
        <Portfolio />
      </div>

      {/* Shorts Portfolio */}
      <div id="shorts" style={{ scrollMarginTop: '100px' }}>
        <ShortsPortfolio />
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Founder */}
      <Founder />

      {/* About */}
      <About />

      {/* Book a Call */}
      <BookCall />

      {/* Footer */}
      <Footer />
    </div>
  )
}