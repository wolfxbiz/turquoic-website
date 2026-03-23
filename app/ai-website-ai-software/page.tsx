// ── app/ai-website-ai-software/page.tsx ── Composes all landing page sections
import LandingNavbar from '@/components/landing/layout/LandingNavbar'
import LandingFooter from '@/components/landing/layout/LandingFooter'
import LandingHero from '@/components/landing/sections/LandingHero'
import SocialProofStrip from '@/components/landing/sections/SocialProofStrip'
import ProblemHook from '@/components/landing/sections/ProblemHook'
import ServicesGrid from '@/components/landing/sections/ServicesGrid'
import Pricing from '@/components/landing/sections/Pricing'
import LandingTestimonials from '@/components/landing/sections/LandingTestimonials'
import HowItWorks from '@/components/landing/sections/HowItWorks'
import FaqAccordion from '@/components/landing/sections/FaqAccordion'
import FinalCta from '@/components/landing/sections/FinalCta'

export default function LandingPage() {
  return (
    <main>
      <LandingNavbar />
      <LandingHero />
      <SocialProofStrip />
      <ProblemHook />
      <ServicesGrid />
      <Pricing />
      <LandingTestimonials />
      <HowItWorks />
      <FaqAccordion />
      <FinalCta />
      <LandingFooter />
    </main>
  )
}
