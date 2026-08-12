import { ArrowUpRight } from 'lucide-react'
import { LuGithub } from 'react-icons/lu'
import Section from '@/components/Section'
import { Button } from '@/components/ui/button'
import { ScrollStack, ScrollStackItem } from '@/components/ui/scroll-stack'
import { cn } from '@/lib/utils'
import { services } from './data/services'
import type { Service } from '@/types'

const STATUS = {
  live: { label: 'En ligne', dot: 'bg-brand', text: 'text-brand-text' },
  build: { label: 'En cours', dot: 'bg-amber-400', text: 'text-amber-400' },
  idle: { label: 'Archivé', dot: 'bg-muted-foreground', text: 'text-muted-foreground' },
} as const

const STACK_SHOWN = 6

function Links({ service }: { service: Service }) {
  if (!service.url && !service.repo && !service.api) return null

  return (
    <div className="flex flex-wrap gap-2 lg:justify-end">
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
  )
}

function ProjectCard({
  service,
  index,
  total,
}: {
  service: Service
  index: number
  total: number
}) {
  const status = STATUS[service.status]
  const shown = service.stack.slice(0, STACK_SHOWN)
  const hidden = service.stack.length - shown.length

  return (
    <article className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border bg-card shadow-xl shadow-black/10 lg:mx-auto lg:aspect-[16/10] lg:w-auto lg:block">
      <div className="aspect-[16/10] shrink-0 bg-muted/30 lg:h-full lg:w-full">
        {service.shot ? (
          <img
            src={service.shot}
            alt={`Aperçu de ${service.name}`}
            loading="lazy"
            decoding="async"
            width={1280}
            height={800}
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <span className="font-mono text-5xl font-semibold text-foreground/10 lg:text-7xl">
              {service.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 border-t bg-muted/20 p-5 sm:p-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:grid lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-8 lg:border-t-0 lg:bg-background/85 lg:px-8 lg:py-5 lg:backdrop-blur-xl">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground/60">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border bg-background px-2.5 py-0.5 text-xs">
              <span className={cn('size-1.5 rounded-full', status.dot)} />
              <span className={status.text}>{status.label}</span>
            </span>
            <span className="truncate font-mono text-xs text-muted-foreground">{service.role}</span>
          </div>

          <h3 className="mt-1.5 text-xl font-semibold tracking-tight sm:text-2xl">
            {service.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-pretty text-sm leading-relaxed text-muted-foreground">
            {service.summary}
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <ul className="flex flex-wrap gap-1.5 lg:justify-end">
            {shown.map((item) => (
              <li
                key={item}
                className="rounded-md border bg-background px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
              >
                {item}
              </li>
            ))}
            {hidden > 0 && (
              <li className="rounded-md border border-dashed px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground/70">
                +{hidden}
              </li>
            )}
          </ul>

          <Links service={service} />
        </div>
      </div>
    </article>
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
      <ScrollStack>
        {services.map((service, index) => (
          <ScrollStackItem
            key={service.id}
            className="h-auto lg:h-[82svh] lg:max-h-[700px] lg:min-h-[500px]"
          >
            <ProjectCard service={service} index={index} total={services.length} />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </Section>
  )
}
