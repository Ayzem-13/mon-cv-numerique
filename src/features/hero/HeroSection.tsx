import { ArrowRight, Download } from 'lucide-react'
import { LuGithub } from 'react-icons/lu'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { DotPattern } from '@/components/ui/dot-pattern'
import { NumberTicker } from '@/components/ui/number-ticker'
import { profile } from '@/config/profile'
import { cn } from '@/lib/utils'
import { services } from '@/features/services'

export default function HeroSection() {
  const liveCount = services.filter((service) => service.status === 'live').length

  const stats = [
    { value: liveCount, label: liveCount > 1 ? 'sites en ligne' : 'site en ligne' },
    { value: services.length, label: 'projets menés' },
    { value: 4, label: 'années de code' },
  ]

  return (
    <section id="accueil" className="relative overflow-hidden">
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

      <div className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-4xl flex-col items-center justify-center px-6 py-28 text-center">
        <BlurFade delay={0.05} inView>
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border bg-card/60 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/70 motion-reduce:hidden" />
              <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
            </span>
            <AnimatedShinyText className="text-xs">
              Alternance chez Viaxoft · Mastère 2 à l'Esimed
            </AnimatedShinyText>
          </span>
        </BlurFade>

        <BlurFade delay={0.15} inView>
          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
            Axel Roubaud
          </h1>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Développeur <span className="text-foreground">full stack</span> à Marseille. Je
            construis des applications web de bout en bout : l'interface, l'API, la base de données
            et <span className="text-brand-text">la mise en production</span>.
          </p>
        </BlurFade>

        <BlurFade delay={0.35} inView>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              render={<a href="#projets" />}
              className="h-12 rounded-full bg-brand px-6 text-base text-brand-foreground hover:bg-brand/90"
            >
              Voir mes projets
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
            <Button
              variant="ghost"
              size="lg"
              render={
                <a
                  href={`https://github.com/${profile.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-12 rounded-full px-6 text-base"
            >
              <LuGithub data-icon="inline-start" />
              GitHub
            </Button>
          </div>
        </BlurFade>

        <BlurFade delay={0.45} inView>
          <dl className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-4">
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
      </div>
    </section>
  )
}
