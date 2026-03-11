// ── app/page.tsx ──
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Industries from '@/components/sections/Industries'
import CapabilityProgramme from '@/components/sections/CapabilityProgramme'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Team from '@/components/sections/Team'
import RougeStars from '@/components/sections/RougeStars'
import Contact from '@/components/sections/Contact'
import MarqueeStrip from '@/components/ui/MarqueeStrip'
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <MarqueeStrip />
      <Services />
      <Industries />
      <MarqueeStrip reversed />
      <CapabilityProgramme />
      <Process />
      <Testimonials />
      <Team />
      <RougeStars />
      <Contact />
      <Footer />
    </main>
  )
}
