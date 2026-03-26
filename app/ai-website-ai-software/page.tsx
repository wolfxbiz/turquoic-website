// ── app/ai-website-ai-software/page.tsx ── Composes all landing page sections
import { ConsultationModalProvider } from '@/components/landing/ConsultationModalContext'
import TopBanner from '@/components/landing/layout/TopBanner'
import LandingNavbar from '@/components/landing/layout/LandingNavbar'
import LandingFooter from '@/components/landing/layout/LandingFooter'
import LandingHero from '@/components/landing/sections/LandingHero'
import SocialProofStrip from '@/components/landing/sections/SocialProofStrip'
import ProblemHook from '@/components/landing/sections/ProblemHook'
import SolutionSection from '@/components/landing/sections/SolutionSection'
import ServicesGrid from '@/components/landing/sections/ServicesGrid'
import TechLogoMarquee from '@/components/landing/sections/TechLogoMarquee'
import FreeConsultationSection from '@/components/landing/sections/FreeConsultationSection'
import Pricing from '@/components/landing/sections/Pricing'
import LandingTestimonials from '@/components/landing/sections/LandingTestimonials'
import HowItWorks from '@/components/landing/sections/HowItWorks'
import FaqAccordion from '@/components/landing/sections/FaqAccordion'
import FinalCta from '@/components/landing/sections/FinalCta'

export default function LandingPage() {
  return (
    <ConsultationModalProvider>
      {/* Banner sits above everything — navbar offsets itself when visible */}
      <TopBanner />
      <main>
        <LandingNavbar />
        <LandingHero />
        <SocialProofStrip />
        <ProblemHook />
        <SolutionSection />
        <ServicesGrid />
        <TechLogoMarquee />
        <FreeConsultationSection />
        <Pricing />
        <LandingTestimonials />
        <HowItWorks />
        <FaqAccordion />
        <FinalCta />
        <LandingFooter />
      </main>
    </ConsultationModalProvider>
  )
}
