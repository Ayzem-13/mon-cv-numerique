import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { LuGithub } from 'react-icons/lu'
import Section from '@/components/Section'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { services } from './data/services'
import type { Service } from '@/types'

const STATUS = {
  live: { label: 'En production', dot: 'bg-brand', text: 'text-brand-text' },
  build: { label: 'En cours', dot: 'bg-amber-400', text: 'text-amber-400' },
  idle: { label: 'Archivé', dot: 'bg-muted-foreground', text: 'text-muted-foreground' },
} as const

function ProjectRow({ service, index, total }: { service: Service; index: number; total: number }) {
  const status = STATUS[service.status]
  const flipped = index % 2 === 1
  const shotRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: shotRef,
    offset: ['start end', 'end start'],
  })
  const shotY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <BlurFade delay={0.05} inView>
      <article className="group relative grid items-center gap-8 overflow-hidden rounded-2xl border bg-card p-6 transition-colors duration-300 hover:border-brand/30 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
        <div
          ref={shotRef}
          className={cn(
            'relative overflow-hidden rounded-xl border bg-muted/30',
            flipped && 'lg:order-2'
          )}
        >
          {service.shot ? (
            <motion.img
              style={reduceMotion ? undefined : { y: shotY }}
              src={service.shot}
              alt={`Aperçu de ${service.name}`}
              loading="lazy"
              decoding="async"
              width={1280}
              height={800}
              className="aspect-[16/10] w-full scale-110 object-cover object-left-top"
            />
          ) : (
            <div className="flex aspect-[16/10] items-center justify-center">
              <span className="font-mono text-5xl font-semibold text-foreground/10">
                {service.name.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground/60">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
              <span className={cn('size-1.5 rounded-full', status.dot)} />
              <span className={status.text}>{status.label}</span>
            </span>
            <span className="font-mono text-xs text-muted-foreground">{service.role}</span>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{service.name}</h3>

          <p className="text-pretty leading-relaxed text-muted-foreground">{service.summary}</p>

          <ul className="flex flex-wrap gap-2">
            {service.stack.map((item) => (
              <li
                key={item}
                className="rounded-md border bg-muted/40 px-2 py-1 font-mono text-[0.7rem] text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>

          {service.highlights && (
            <ul className="flex flex-col gap-1.5">
              {service.highlights.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <span aria-hidden className="text-brand-text">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {(service.url || service.repo || service.api) && (
            <div className="mt-2 flex flex-wrap gap-2">
              {service.url && (
                <Button
                  size="sm"
                  render={<a href={service.url} target="_blank" rel="noopener noreferrer" />}
                  className="rounded-full"
                >
                  {service.domain}
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
              )}
              {service.repo && (
                <Button
                  variant="outline"
                  size="sm"
                  render={<a href={service.repo} target="_blank" rel="noopener noreferrer" />}
                  className="rounded-full"
                >
                  <LuGithub data-icon="inline-start" />
                  {service.api ? 'Front' : 'Code'}
                </Button>
              )}
              {service.api && (
                <Button
                  variant="outline"
                  size="sm"
                  render={<a href={service.api} target="_blank" rel="noopener noreferrer" />}
                  className="rounded-full"
                >
                  <LuGithub data-icon="inline-start" />
                  API
                </Button>
              )}
            </div>
          )}
        </div>
      </article>
    </BlurFade>
  )
}

export default function ServicesSection() {
  return (
    <Section
      id="projets"
      eyebrow="Projets"
      title={
        <>
          Ce que j'ai construit
          <br />
          <span className="text-brand-text">avec tout ça</span>
        </>
      }
      description="Huit projets, du site en production au travail d'école mené jusqu'au bout. Du plus récent au plus ancien."
    >
      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <ProjectRow key={service.id} service={service} index={index} total={services.length} />
        ))}
      </div>
    </Section>
  )
}
