import { Briefcase, GraduationCap } from 'lucide-react'
import Section from '@/components/Section'
import { BlurFade } from '@/components/ui/blur-fade'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { cn } from '@/lib/utils'
import { formatRange } from '@/lib/format'
import { education, experiences } from './data/journal'
import type { JournalEntry } from '@/types'

const KIND_TONE: Record<string, string> = {
  Alternance: 'border-brand/40 text-brand-text',
  Stage: 'border-border text-muted-foreground',
  Formation: 'border-border text-muted-foreground',
  Projet: 'border-amber-400/40 text-amber-400',
}

function Entry({ entry }: { entry: JournalEntry }) {
  return (
    <BlurFade inView>
      <article className="rounded-2xl border bg-card p-6 transition-colors duration-300 hover:border-brand/25 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              'rounded-full border px-2.5 py-0.5 font-mono text-[0.7rem] uppercase tracking-wider',
              KIND_TONE[entry.kind]
            )}
          >
            {entry.kind}
          </span>
          <time className="font-mono text-xs text-muted-foreground">
            {formatRange(entry.from, entry.to)}
          </time>
        </div>

        <h4 className="mt-4 text-xl font-semibold tracking-tight">{entry.org}</h4>
        <p className="mt-1 text-sm text-brand-text">{entry.title}</p>

        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{entry.detail}</p>

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
      </article>
    </BlurFade>
  )
}

function GroupHeading({ icon: Icon, label }: { icon: typeof Briefcase; label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="flex size-9 items-center justify-center rounded-full border bg-card">
        <Icon className="size-4 text-brand-text" />
      </span>
      <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">{label}</h3>
    </div>
  )
}

export default function JournalSection() {
  return (
    <Section
      id="parcours"
      eyebrow="Parcours"
      title={
        <>
          Deux ans en entreprise,
          <br />
          <span className="text-brand-text">cinq ans de formation</span>
        </>
      }
      description="Du BUT Informatique au Mastère en alternance, en passant par deux stages."
    >
      <TracingBeam className="px-6">
        <div className="mx-auto max-w-3xl">
          <GroupHeading icon={Briefcase} label="Expériences" />
          <div className="flex flex-col gap-4">
            {experiences.map((entry) => (
              <Entry key={entry.id} entry={entry} />
            ))}
          </div>

          <div className="mt-14">
            <GroupHeading icon={GraduationCap} label="Formation" />
            <div className="flex flex-col gap-4">
              {education.map((entry) => (
                <Entry key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </div>
      </TracingBeam>
    </Section>
  )
}
