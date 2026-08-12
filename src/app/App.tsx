import { Analytics } from '@vercel/analytics/react'
import ScrollProgress from '@/components/motion/ScrollProgress'
import SmoothScroll from '@/components/motion/SmoothScroll'
import ThemeProvider from '@/app/ThemeProvider'
import { ActivitySection } from '@/features/activity'
import { ContactSection } from '@/features/contact'
import { Footer, Header, SectionRail } from '@/features/layout'
import { JournalSection } from '@/features/journal'
import { ServicesSection } from '@/features/services'
import { StackSection } from '@/features/stack'
import { HeroSection } from '@/features/hero'

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <SectionRail />

      <main>
        <HeroSection />
        <JournalSection />
        <StackSection />
        <ServicesSection />
        <ActivitySection />
        <ContactSection />
      </main>

      <Footer />
      <Analytics />
    </ThemeProvider>
  )
}
