// ── templates/landing-page/page.tsx ──
// Composes all sections. Add/remove/reorder sections here.
import TemplateNavbar from './components/TemplateNavbar'
import TemplateHero from './components/TemplateHero'
import TemplateSocialProof from './components/TemplateSocialProof'
import TemplateProblemHook from './components/TemplateProblemHook'
import TemplateServicesGrid from './components/TemplateServicesGrid'
import TemplatePricing from './components/TemplatePricing'
import TemplateTestimonials from './components/TemplateTestimonials'
import TemplateHowItWorks from './components/TemplateHowItWorks'
import TemplateFaq from './components/TemplateFaq'
import TemplateFinalCta from './components/TemplateFinalCta'
import TemplateFooter from './components/TemplateFooter'

export default function LandingPage() {
  return (
    <main>
      <TemplateNavbar />
      <TemplateHero />
      <TemplateSocialProof />
      <TemplateProblemHook />
      <TemplateServicesGrid />
      <TemplatePricing />
      <TemplateTestimonials />
      <TemplateHowItWorks />
      <TemplateFaq />
      <TemplateFinalCta />
      <TemplateFooter />
    </main>
  )
}
