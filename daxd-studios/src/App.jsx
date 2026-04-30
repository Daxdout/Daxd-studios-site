import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBanner from './components/MarqueeBanner'
import Showreel from './components/Showreel'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import About from './components/About'
import BookCall from './components/BookCall'
import Founder from './components/Founder'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-parchment text-espresso">
      <Navbar />
      <Hero />
      <MarqueeBanner />

      {/* ✅ FIXED: Added anchor target */}
      <div id="portfolio" style={{ scrollMarginTop: '100px' }}>
        <Portfolio />
      </div>

      <Founder />
      <BookCall />
      <About />
      <Testimonials />
      <Footer />
    </div>
  )
}