import type { MouseEvent } from 'react'
import { LuMonitor, LuMoon, LuSun } from 'react-icons/lu'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { EASE_OUT } from '@/lib/motion'
import { useTheme, type Theme } from '@/lib/theme'

const CYCLE = [
  { value: 'light', label: 'clair', icon: LuSun },
  { value: 'dark', label: 'sombre', icon: LuMoon },
  { value: 'system', label: 'système', icon: LuMonitor },
] as const satisfies ReadonlyArray<{ value: Theme; label: string; icon: typeof LuSun }>

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const reduceMotion = useReducedMotion()

  const index = CYCLE.findIndex((option) => option.value === theme)
  const current = CYCLE[index] ?? CYCLE[2]
  const next = CYCLE[(index + 1) % CYCLE.length]
  const Icon = current.icon

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setTheme(next.value, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Thème ${current.label}. Basculer vers : ${next.label}`}
      className="inline-flex size-8 items-center justify-center overflow-hidden border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand-text"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current.value}
          className="flex"
          initial={reduceMotion ? undefined : { opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
        >
          <Icon className="size-3.5" />
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
