import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBanner from './components/MarqueeBanner'
import Showreel from './components/Showreel'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import About from './components/About'
import BookCall from './components/BookCall'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-parchment text-espresso">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <Showreel />
      <Portfolio />
      <Testimonials />
      <About />
      <BookCall />
      <Footer />
    </div>
  )
}
