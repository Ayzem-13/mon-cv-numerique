import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const HEADER_CLEARANCE = 80

export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const lenis = reduced
      ? null
      : new Lenis({
          duration: 1.05,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        })

    let frame = 0
    if (lenis) {
      const raf = (time: number) => {
        lenis.raf(time)
        frame = requestAnimationFrame(raf)
      }
      frame = requestAnimationFrame(raf)
    }

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return

      const anchor = (event.target as Element | null)?.closest?.('a[href^="#"]')
      if (!(anchor instanceof HTMLAnchorElement)) return

      const id = anchor.getAttribute('href')?.slice(1)
      if (!id) return

      const target = document.getElementById(id)
      if (!target) return

      event.preventDefault()
      history.replaceState(null, '', `#${id}`)

      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_CLEARANCE

      if (lenis) {
        lenis.scrollTo(top, { duration: 1.4 })
      } else {
        window.scrollTo({ top, behavior: 'auto' })
      }
    }

    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      if (frame) cancelAnimationFrame(frame)
      lenis?.destroy()
    }
  }, [])

  return null
}
