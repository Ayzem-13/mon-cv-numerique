import { createContext, useContext } from 'react'

export type Theme = 'light' | 'dark' | 'system'

export const THEME_STORAGE_KEY = 'cv-theme'

export type RevealOrigin = { x: number; y: number }

export type ThemeContextValue = {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: Theme, origin?: RevealOrigin) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme doit etre utilise a l'interieur d'un <ThemeProvider>")
  }
  return context
}

export function revealTheme(apply: () => void, origin?: RevealOrigin): void {
  const supported = typeof document.startViewTransition === 'function'
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!supported || reduced || !origin) {
    apply()
    return
  }

  const { x, y } = origin
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

  document
    .startViewTransition(apply)
    .ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
        },
        {
          duration: 550,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
    .catch(() => {})
}
