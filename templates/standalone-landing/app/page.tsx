import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import ProblemHook from '@/components/sections/ProblemHook'
import ServicesGrid from '@/components/sections/ServicesGrid'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import HowItWorks from '@/components/sections/HowItWorks'
import Faq from '@/components/sections/Faq'
import FinalCta from '@/components/sections/FinalCta'
import Footer from '@/components/sections/Footer'

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemHook />
      <ServicesGrid />
      <Pricing />
      <Testimonials />
      <HowItWorks />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  )
}
