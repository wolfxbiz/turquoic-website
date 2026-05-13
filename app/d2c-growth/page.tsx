import { ConsultationModalProvider } from '@/components/landing/ConsultationModalContext'
import TopBanner from '@/components/landing/layout/TopBanner'
import D2cNavbar from '@/components/d2c/D2cNavbar'
import D2cHero from '@/components/d2c/D2cHero'
import D2cSocialProof from '@/components/d2c/D2cSocialProof'
import D2cProblem from '@/components/d2c/D2cProblem'
import D2cSolution from '@/components/d2c/D2cSolution'
import D2cTierCards from '@/components/d2c/D2cTierCards'
import D2cProcess from '@/components/d2c/D2cProcess'
import D2cProof from '@/components/d2c/D2cProof'
import D2cComparison from '@/components/d2c/D2cComparison'
import FreeConsultationSection from '@/components/landing/sections/FreeConsultationSection'
import D2cFaq from '@/components/d2c/D2cFaq'
import D2cFinalCta from '@/components/d2c/D2cFinalCta'
import D2cFooter from '@/components/d2c/D2cFooter'

export default function D2cGrowthPage() {
  return (
    <ConsultationModalProvider>
      <TopBanner />
      <main>
        <D2cNavbar />
        <D2cHero />
        <D2cSocialProof />
        <D2cProblem />
        <D2cSolution />
        <D2cTierCards />
        <D2cProcess />
        <D2cProof />
        <D2cComparison />
        <FreeConsultationSection />
        <D2cFaq />
        <D2cFinalCta />
        <D2cFooter />
      </main>
    </ConsultationModalProvider>
  )
}
