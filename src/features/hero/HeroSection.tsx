import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, ChevronDown, Download } from 'lucide-react'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { DotPattern } from '@/components/ui/dot-pattern'
import { NumberTicker } from '@/components/ui/number-ticker'
import { profile } from '@/config/profile'
import { cn } from '@/lib/utils'
import { services } from '@/features/services'

export default function HeroSection() {
  const root = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: root,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const patternScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])

  const liveCount = services.filter((service) => service.status === 'live').length

  const stats = [
    { value: liveCount, label: liveCount > 1 ? 'sites en ligne' : 'site en ligne' },
    { value: services.length, label: 'projets menés' },
    { value: 4, label: 'années de code' },
  ]

  return (
    <section ref={root} id="accueil" className="relative overflow-hidden">
      <motion.div
        aria-hidden
        style={reduceMotion ? undefined : { scale: patternScale }}
        className="absolute inset-0"
      >
        <DotPattern
          width={22}
          height={22}
          cy={1}
          cr={1}
          className={cn(
            'text-foreground/25',
            '[mask-image:radial-gradient(650px_circle_at_center_top,white,transparent)]'
          )}
        />
      </motion.div>

      <motion.div
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-4xl flex-col items-center justify-center px-6 py-28 text-center"
      >
        <BlurFade delay={0.15} inView>
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
            Axel Roubaud
          </h1>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-brand-text">{profile.role}</p>
          <div className="mx-auto mt-7 flex max-w-xl flex-col gap-3 text-left">
            {profile.bio.map((paragraph, index) => (
              <p
                key={paragraph}
                className={cn(
                  'text-pretty leading-relaxed',
                  index === 0 ? 'text-lg text-foreground sm:text-xl' : 'text-muted-foreground'
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </BlurFade>

        <BlurFade delay={0.35} inView>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              render={<a href="#parcours" />}
              className="h-12 rounded-full bg-brand px-6 text-base text-brand-foreground hover:bg-brand/90"
            >
              Découvrir mon parcours
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={<a href={profile.cvPath} download type="application/pdf" />}
              className="h-12 rounded-full px-6 text-base"
            >
              <Download data-icon="inline-start" />
              Télécharger le CV
            </Button>
          </div>
        </BlurFade>

        <BlurFade delay={0.45} inView>
          <dl className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  <NumberTicker value={stat.value} className="text-foreground" />
                </dd>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </BlurFade>

        <BlurFade delay={0.6} inView>
          <a
            href="#parcours"
            className="group mt-12 inline-flex flex-col items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-brand-text"
          >
            Faire connaissance
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex size-8 items-center justify-center rounded-full border transition-colors group-hover:border-brand/40"
            >
              <ChevronDown className="size-4" />
            </motion.span>
          </a>
        </BlurFade>
      </motion.div>
    </section>
  )
}
