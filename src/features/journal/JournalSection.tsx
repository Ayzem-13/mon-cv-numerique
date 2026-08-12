import Section from '@/components/Section'
import { BlurFade } from '@/components/ui/blur-fade'
import { MagicCard } from '@/components/ui/magic-card'
import { techIcons } from '@/features/stack'
import { cn } from '@/lib/utils'
import { formatRange } from '@/lib/format'
import { education, experiences } from './data/journal'
import type { JournalEntry } from '@/types'

const CARD = {
  gradientFrom: 'var(--brand)',
  gradientTo: 'var(--brand)',
  gradientColor: 'color-mix(in oklab, var(--brand) 12%, transparent)',
  gradientOpacity: 0.5,
} as const

function Logo({ entry, className }: { entry: JournalEntry; className?: string }) {
  return (
    <span
      className={cn(
        'flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-background',
        className
      )}
    >
      {entry.logo ? (
        <img
          src={entry.logo}
          alt=""
          loading="lazy"
          decoding="async"
          className="max-h-7 max-w-7 object-contain"
        />
      ) : (
        <span className="font-mono text-xs font-semibold text-muted-foreground">
          {entry.org.slice(0, 2).toUpperCase()}
        </span>
      )}
    </span>
  )
}

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => {
        const tech = techIcons[item]
        return (
          <li
            key={item}
            className="inline-flex items-center gap-1.5 rounded-md border bg-muted/40 px-2 py-1 text-[0.7rem] text-muted-foreground"
          >
            {tech && <tech.Icon aria-hidden className="size-3" style={{ color: tech.color }} />}
            {item}
          </li>
        )
      })}
    </ul>
  )
}

function Experience({ entry, current }: { entry: JournalEntry; current: boolean }) {
  return (
    <MagicCard
      {...CARD}
      gradientSize={280}
      className={cn('rounded-2xl border bg-card', current && 'border-brand/30')}
    >
      <article className="p-6 sm:p-8">
        <header className="flex flex-wrap items-start gap-4">
          <Logo entry={entry} />

          <div className="min-w-0 flex-1">
            <h4 className="text-xl font-semibold tracking-tight sm:text-2xl">{entry.org}</h4>
            <p className="mt-0.5 text-sm text-muted-foreground">{entry.title}</p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-1.5 sm:items-end">
            <span
              className={cn(
                'rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider',
                current ? 'border-brand/40 text-brand-text' : 'text-muted-foreground'
              )}
            >
              {entry.kind}
            </span>
            <time className="font-mono text-xs text-muted-foreground">
              {formatRange(entry.from, entry.to)}
            </time>
          </div>
        </header>

        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {entry.detail}
        </p>

        {entry.missions && (
          <ul className="mt-5 flex flex-col gap-3">
            {entry.missions.map((mission) => (
              <li key={mission} className="flex gap-3 text-sm leading-relaxed">
                <span
                  aria-hidden
                  className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-brand/70"
                />
                <span>{mission}</span>
              </li>
            ))}
          </ul>
        )}

        {entry.stack && (
          <div className="mt-7">
            <TechList items={entry.stack} />
          </div>
        )}
      </article>
    </MagicCard>
  )
}

function Education({ entry, current }: { entry: JournalEntry; current: boolean }) {
  return (
    <MagicCard
      {...CARD}
      gradientSize={240}
      className={cn('h-full rounded-2xl border bg-card', current && 'border-brand/30')}
    >
      <article className="flex h-full flex-col p-6 sm:p-7">
        <header className="flex items-start gap-4">
          <Logo entry={entry} />

          <div className="min-w-0 flex-1">
            <h4 className="font-semibold leading-snug tracking-tight">{entry.title}</h4>
            <p className="mt-0.5 text-sm text-muted-foreground">{entry.org}</p>
          </div>

          {current && (
            <span className="shrink-0 rounded-full border border-brand/40 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-brand-text">
              En cours
            </span>
          )}
        </header>

        <time className="mt-5 font-mono text-xs text-muted-foreground">
          {formatRange(entry.from, entry.to)}
        </time>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.detail}</p>
      </article>
    </MagicCard>
  )
}

export default function JournalSection() {
  return (
    <Section
      id="parcours"
      eyebrow="Parcours"
      title={
        <>
          En entreprise <span className="text-brand-text">depuis 2024</span>
        </>
      }
      description="Du BUT Informatique au Mastère en alternance : deux stages, puis une alternance chez un éditeur SaaS."
    >
      <div className="flex flex-col gap-5">
        {experiences.map((entry, index) => (
          <BlurFade key={entry.id} delay={0.06 * index} inView>
            <Experience entry={entry} current={index === 0} />
          </BlurFade>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Formation
        </h3>

        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((entry, index) => (
            <BlurFade key={entry.id} delay={0.06 * index} inView>
              <Education entry={entry} current={index === 0} />
            </BlurFade>
          ))}
        </div>
      </div>
    </Section>
  )
}
