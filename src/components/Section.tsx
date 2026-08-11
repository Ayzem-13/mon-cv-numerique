import type { ReactNode } from 'react'
import { BlurFade } from '@/components/ui/blur-fade'
import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  eyebrow: string
  title: ReactNode
  description?: string
  children: ReactNode
  className?: string
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-20 px-6 py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-6xl">
        <BlurFade inView>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tighter sm:text-5xl">{title}</h2>
            {description && (
              <p className="mt-4 text-balance text-muted-foreground sm:text-lg">{description}</p>
            )}
          </div>
        </BlurFade>

        <div className="mt-14">{children}</div>
      </div>
    </section>
  )
}
