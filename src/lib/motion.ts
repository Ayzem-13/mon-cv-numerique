import { stagger, type Variants } from 'motion/react'

export const EASE_OUT = [0.22, 1, 0.36, 1] as const

export const revealContainer: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: stagger(0.045) } },
}

export const revealRow: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
}

export const VIEWPORT = { once: true, amount: 0.15 } as const
