import { useEffect } from 'react'
import Aos from 'aos'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Reasons from './sections/Reasons'
import Listings from './sections/Listings'
import Reviews from './sections/Reviews'
import Footer from './sections/Footer'

function App() {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Reasons />
        <Listings />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}

export default App
