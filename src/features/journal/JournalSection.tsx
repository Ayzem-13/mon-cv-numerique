import { GraduationCap } from 'lucide-react'
import Section from '@/components/Section'
import { BlurFade } from '@/components/ui/blur-fade'
import { cn } from '@/lib/utils'
import { formatRange } from '@/lib/format'
import { education, experiences } from './data/journal'
import type { JournalEntry } from '@/types'

function Experience({
  entry,
  current,
  last,
}: {
  entry: JournalEntry
  current: boolean
  last: boolean
}) {
  return (
    <li className="relative grid gap-3 border-t border-dashed pt-8 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:border-t-0 sm:pb-14 sm:pt-0 sm:last:pb-0">
      <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1 sm:pt-1 sm:text-right">
        <time className="font-mono text-xs text-muted-foreground">
          {formatRange(entry.from, entry.to)}
        </time>
        <span
          className={cn(
            'text-[0.7rem] uppercase tracking-wider',
            current ? 'text-brand-text' : 'text-muted-foreground/70'
          )}
        >
          {entry.kind}
        </span>
      </div>

      <div className="relative sm:pl-8">
        <span
          aria-hidden
          className={cn(
            'absolute left-0 top-2 hidden size-2.5 rounded-full ring-4 ring-background sm:block',
            current ? 'bg-brand' : 'bg-border'
          )}
        />
        {!last && (
          <span
            aria-hidden
            className="absolute left-[4px] top-6 hidden h-[calc(100%+3.5rem)] w-px bg-border sm:block"
          />
        )}

        <h4 className="text-xl font-semibold tracking-tight sm:text-2xl">{entry.org}</h4>
        <p className="mt-0.5 text-sm text-muted-foreground">{entry.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.detail}</p>

        {entry.missions && (
          <ul className="mt-4 flex flex-col gap-2">
            {entry.missions.map((mission) => (
              <li key={mission} className="flex gap-2.5 text-sm leading-relaxed">
                <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-brand" />
                <span>{mission}</span>
              </li>
            ))}
          </ul>
        )}

        {entry.stack && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {entry.stack.map((item) => (
              <li
                key={item}
                className="rounded-md border bg-muted/40 px-2 py-1 font-mono text-[0.7rem] text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
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
      <ol className="flex flex-col">
        {experiences.map((entry, index) => (
          <BlurFade key={entry.id} delay={0.06 * index} inView>
            <Experience
              entry={entry}
              current={index === 0}
              last={index === experiences.length - 1}
            />
          </BlurFade>
        ))}
      </ol>

      <div className="mt-16 border-t pt-10">
        <div className="mb-6 flex items-center gap-3">
          <GraduationCap className="size-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">Formation</h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((entry, index) => (
            <BlurFade key={entry.id} delay={0.06 * index} inView>
              <article
                className={cn(
                  'flex h-full flex-col rounded-2xl border bg-card p-6',
                  index === 0 && 'border-brand/30'
                )}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <time className="font-mono text-xs text-muted-foreground">
                    {formatRange(entry.from, entry.to)}
                  </time>
                  {index === 0 && (
                    <span className="rounded-full border border-brand/40 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-brand-text">
                      En cours
                    </span>
                  )}
                </div>
                <h4 className="mt-2 font-semibold leading-snug tracking-tight">{entry.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{entry.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.detail}</p>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </Section>
  )
}
