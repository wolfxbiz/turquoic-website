'use client'

import { createContext, useCallback, useContext, useState } from 'react'
import FreeConsultationModal from '@/components/landing/sections/FreeConsultation'

type ModalCtx = {
  open: () => void
  close: () => void
  bannerVisible: boolean
  dismissBanner: () => void
}

const Ctx = createContext<ModalCtx>({
  open: () => {}, close: () => {},
  bannerVisible: true, dismissBanner: () => {},
})

export function ConsultationModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(true)

  const open          = useCallback(() => setIsOpen(true),       [])
  const close         = useCallback(() => setIsOpen(false),      [])
  const dismissBanner = useCallback(() => setBannerVisible(false), [])

  return (
    <Ctx.Provider value={{ open, close, bannerVisible, dismissBanner }}>
      {children}
      <FreeConsultationModal isOpen={isOpen} onClose={close} />
    </Ctx.Provider>
  )
}

export const useConsultationModal = () => useContext(Ctx)
