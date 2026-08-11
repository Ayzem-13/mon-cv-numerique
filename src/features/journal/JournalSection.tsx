import Section from '@/components/Section'
import { Timeline } from '@/components/ui/timeline'
import { formatRange } from '@/lib/format'
import { journal } from './data/journal'

const KIND_TONE: Record<string, string> = {
  Alternance: 'border-brand/40 text-brand-text',
  Stage: 'border-border text-foreground',
  Formation: 'border-border text-muted-foreground',
  Projet: 'border-amber-400/40 text-amber-400',
}

export default function JournalSection() {
  const data = journal.map((entry) => ({
    title: entry.org,
    content: (
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.7rem] uppercase tracking-wider ${KIND_TONE[entry.kind]}`}
          >
            {entry.kind}
          </span>
          <time className="font-mono text-xs text-muted-foreground">
            {formatRange(entry.from, entry.to)}
          </time>
        </div>

        <h4 className="text-lg font-semibold tracking-tight">{entry.title}</h4>

        <p className="text-pretty leading-relaxed text-muted-foreground">{entry.detail}</p>

        {entry.stack && (
          <ul className="mt-1 flex flex-wrap gap-2">
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
    ),
  }))

  return (
    <Section
      id="parcours"
      eyebrow="Parcours"
      title={
        <>
          Trois ans à écrire du code,
          <br />
          <span className="text-brand-text">deux ans en entreprise</span>
        </>
      }
      description="De l'IUT à l'alternance chez un éditeur SaaS, en passant par deux stages."
      className="py-24 sm:py-28"
    >
      <div className="-mx-6">
        <Timeline data={data} />
      </div>
    </Section>
  )
}
