import { ConsultationModalProvider } from '@/components/landing/ConsultationModalContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <ConsultationModalProvider>
      <Navbar />
      {children}
      <Footer />
    </ConsultationModalProvider>
  )
}
