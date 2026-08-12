import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const CARD_SELECTOR = '[data-scroll-stack-card]'

const STACK_POSITION = 0.1

const SCALE_END_POSITION = 0.05

const ITEM_STACK_DISTANCE = 8

const BASE_SCALE = 0.9

const ITEM_SCALE = 0.02

function layoutTop(element: HTMLElement): number {
  let top = 0
  let node: HTMLElement | null = element
  while (node) {
    top += node.offsetTop
    node = node.offsetParent as HTMLElement | null
  }
  return top
}

export function ScrollStackItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      data-scroll-stack-card
      className={cn('relative w-full origin-top will-change-transform', className)}
    >
      {children}
    </div>
  )
}

export function ScrollStack({
  children,
  className,
  itemDistance = 80,
}: {
  children: ReactNode
  className?: string

  itemDistance?: number
}) {
  const root = useRef<HTMLDivElement>(null)
  const cards = useRef<HTMLElement[]>([])
  const tops = useRef<number[]>([])
  const endTop = useRef(0)
  const frame = useRef(0)

  const update = useCallback(() => {
    frame.current = 0

    const list = cards.current
    if (!list.length) return

    const scrollTop = window.scrollY
    const viewport = window.innerHeight
    const stackPosition = viewport * STACK_POSITION
    const scaleEnd = viewport * SCALE_END_POSITION
    const pinEnd = endTop.current - viewport / 2

    list.forEach((card, index) => {
      const cardTop = tops.current[index]
      const pinStart = cardTop - stackPosition - ITEM_STACK_DISTANCE * index

      const scaleSpan = cardTop - scaleEnd - pinStart
      const progress =
        scaleSpan <= 0 ? 0 : Math.min(1, Math.max(0, (scrollTop - pinStart) / scaleSpan))
      const target = BASE_SCALE + index * ITEM_SCALE
      const scale = 1 - progress * (1 - target)

      let translateY = 0
      if (scrollTop >= pinStart) {
        translateY = Math.min(scrollTop, pinEnd) - pinStart
      }

      card.style.transform = `translate3d(0, ${Math.round(translateY * 100) / 100}px, 0) scale(${
        Math.round(scale * 1000) / 1000
      })`
      card.style.zIndex = String(index + 1)
    })
  }, [])

  const onScroll = useCallback(() => {
    if (frame.current) return
    frame.current = requestAnimationFrame(update)
  }, [update])

  const measure = useCallback(() => {
    const list = cards.current
    tops.current = list.map(layoutTop)

    const end = root.current?.querySelector<HTMLElement>('[data-scroll-stack-end]')
    endTop.current = end ? layoutTop(end) : 0

    update()
  }, [update])

  useLayoutEffect(() => {
    const container = root.current
    if (!container) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const list = Array.from(container.querySelectorAll<HTMLElement>(CARD_SELECTOR))
    cards.current = list

    list.forEach((card, index) => {
      if (index < list.length - 1) card.style.marginBottom = `${itemDistance}px`
    })

    measure()

    window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new ResizeObserver(measure)
    observer.observe(container)

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
      if (frame.current) cancelAnimationFrame(frame.current)
      list.forEach((card) => {
        card.style.transform = ''
        card.style.marginBottom = ''
        card.style.zIndex = ''
      })
      cards.current = []
    }
  }, [itemDistance, measure, onScroll])

  useEffect(() => {
    let cancelled = false
    document.fonts?.ready.then(() => {
      if (!cancelled) measure()
    })
    return () => {
      cancelled = true
    }
  }, [measure])

  return (
    <div ref={root} className={cn('relative', className)}>
      {children}
      {}
      <div data-scroll-stack-end aria-hidden className="h-[60vh] w-full" />
    </div>
  )
}
