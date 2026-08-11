import { ArrowRight, Download } from 'lucide-react'
import { LuGithub } from 'react-icons/lu'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { DotPattern } from '@/components/ui/dot-pattern'
import { NumberTicker } from '@/components/ui/number-ticker'
import { profile } from '@/config/profile'
import { useGithubStats } from '@/hooks'
import { cn } from '@/lib/utils'
import { services } from '@/features/services'

export default function HeroSection() {
  const github = useGithubStats(profile.githubUsername)
  const liveCount = services.filter((service) => service.status === 'live').length

  const stats = [
    { value: liveCount, suffix: '', label: 'sites en production' },
    { value: github.publicRepos, suffix: '', label: 'dépôts publics' },
    { value: 4, suffix: '', label: 'années de code' },
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
          '[mask-image:radial-gradient(600px_circle_at_center_top,white,transparent)]'
        )}
      />

      <div className="relative mx-auto max-w-5xl px-6 pt-32 text-center sm:pt-40">
        <BlurFade delay={0.05} inView>
          <a
            href={`https://github.com/${profile.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto inline-flex items-center gap-2 rounded-full border bg-card/60 px-4 py-1.5 backdrop-blur-sm transition-colors hover:border-brand/40"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/70 motion-reduce:hidden" />
              <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
            </span>
            <AnimatedShinyText className="text-xs">
              Alternance chez Viaxoft · Mastère 2 Esimed
            </AnimatedShinyText>
            <ArrowRight className="size-3 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </BlurFade>

        <BlurFade delay={0.15} inView>
          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
            Axel Roubaud
          </h1>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Je conçois les interfaces, j'écris les API et{' '}
            <span className="text-brand-text">j'administre les serveurs</span> qui les font tourner.
            Full stack, du composant au déploiement.
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
          <dl className="mx-auto mt-14 grid max-w-xl grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  <NumberTicker value={stat.value} className="text-foreground" />
                  {stat.suffix}
                </dd>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </BlurFade>
      </div>

      <ContainerScroll
        titleComponent={
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Enki · ERP d'atelier · projet de fin de Master 1
          </p>
        }
      >
        <img
          src="/shots/enki.png"
          alt="Interface d'Enki : catalogue des pièces de l'atelier"
          height={957}
          width={1865}
          className="mx-auto size-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  )
}
