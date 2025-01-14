import { Navbar } from './components/sections/Navbar'
import { Hero } from './components/sections/Hero'
import { Manifesto } from './components/sections/Manifesto'
import { Services } from './components/sections/Services'
import { FeaturedWork } from './components/sections/FeaturedWork'
import { Process } from './components/sections/Process'
import { Testimonials } from './components/sections/Testimonials'
import { PricingTeaser } from './components/sections/PricingTeaser'
import { FAQ } from './components/sections/FAQ'
import { FinalCTA } from './components/sections/FinalCTA'
import { Footer } from './components/sections/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <FeaturedWork />
        <Process />
        <Testimonials />
        <PricingTeaser />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
