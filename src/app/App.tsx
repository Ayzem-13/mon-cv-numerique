import ScrollProgress from '@/components/motion/ScrollProgress'
import SmoothScroll from '@/components/motion/SmoothScroll'
import ThemeProvider from '@/app/ThemeProvider'
import { ActivitySection } from '@/features/activity'
import { ContactSection } from '@/features/contact'
import { Footer, Header } from '@/features/layout'
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

      <main>
        <HeroSection />
        <ServicesSection />
        <JournalSection />
        <StackSection />
        <ActivitySection />
        <ContactSection />
      </main>

      <Footer />
    </ThemeProvider>
  )
}
