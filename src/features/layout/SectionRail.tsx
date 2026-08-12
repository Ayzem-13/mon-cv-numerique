import { useMemo } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { navItems } from '@/config/navigation'
import { useActiveSection } from '@/hooks'
import { cn } from '@/lib/utils'

export default function SectionRail() {
  const ids = useMemo(() => navItems.map((item) => item.id), [])
  const activeId = useActiveSection(ids, 'accueil')
  const { scrollY } = useScroll()
  const [past, setPast] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => setPast(latest > 400))

  return (
    <AnimatePresence>
      {past && (
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
        >
          <nav
            aria-label="Sections"
            className="flex flex-col gap-1 rounded-full border bg-card/80 p-1.5 backdrop-blur-md"
          >
            {navItems.map((item, index) => {
              const isActive = item.id === activeId
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-label={item.label}
                  aria-current={isActive ? 'true' : undefined}
                  title={item.label}
                  className={cn(
                    'relative flex size-9 items-center justify-center rounded-full font-mono text-xs transition-colors',
                    isActive
                      ? 'text-brand-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="rail-active"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-brand"
                    />
                  )}
                  <span className="relative z-10">{index + 1}</span>
                </a>
              )
            })}
          </nav>

          <a
            href="#accueil"
            className="inline-flex items-center gap-1.5 rounded-full border bg-card/80 px-3 py-2 text-[0.7rem] uppercase tracking-wider text-muted-foreground backdrop-blur-md transition-colors hover:border-brand/40 hover:text-brand-text"
          >
            <ArrowUp className="size-3" />
            Top
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
