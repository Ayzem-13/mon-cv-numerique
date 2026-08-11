import { useMemo, useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react'
import { navItems } from '@/config/navigation'
import { profile } from '@/config/profile'
import { useActiveSection } from '@/hooks'
import { EASE_OUT } from '@/lib/motion'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const { scrollY } = useScroll()
  const reduceMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const ids = useMemo(() => navItems.map((item) => item.id), [])
  const activeId = useActiveSection(ids, 'accueil')
  const active = navItems.find((item) => item.id === activeId) ?? navItems[0]

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 40))

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled ? 'border-border bg-background/85 backdrop-blur-md' : 'border-transparent'
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-5 sm:px-8">
        <a
          href="#accueil"
          className="flex min-w-0 items-baseline gap-2 text-xs transition-colors hover:text-brand-text"
        >
          <span className="font-bold tracking-tight">
            {profile.firstName} {profile.lastName}
          </span>
          <span className="hidden text-muted-foreground sm:inline">/</span>
          <span className="hidden truncate text-muted-foreground sm:inline">{active.label}</span>
        </a>

        <nav
          aria-label="Navigation principale"
          className="ml-auto hidden items-center gap-6 md:flex"
        >
          {navItems.map((item) => {
            const isActive = item.id === activeId
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'group flex items-baseline gap-1.5 text-xs uppercase tracking-wider transition-colors',
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <span
                  className={cn('text-[0.65rem]', isActive ? 'text-brand-text' : 'text-border')}
                >
                  {item.index}
                </span>
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="inline-flex size-8 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand-text md:hidden"
          >
            {open ? <LuX className="size-3.5" /> : <LuMenu className="size-3.5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Navigation mobile"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
              {navItems.map((item) => {
                const isActive = item.id === activeId
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'flex items-baseline gap-3 border-b border-dashed border-border py-3 text-sm uppercase tracking-wider last:border-b-0',
                        isActive ? 'text-brand-text' : 'text-muted-foreground'
                      )}
                    >
                      <span className="text-[0.65rem] text-border">{item.index}</span>
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
