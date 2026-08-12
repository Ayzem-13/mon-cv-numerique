import { Database, Layers, Rocket, Server, ShieldCheck } from 'lucide-react'
import Section from '@/components/Section'
import { BlurFade } from '@/components/ui/blur-fade'
import { Marquee } from '@/components/ui/marquee'
import { cn } from '@/lib/utils'
import { stackLayers } from './data/stack'
import { techIcons } from './data/techIcons'

const ICONS: Record<string, typeof Layers> = {
  front: Layers,
  back: Server,
  donnees: Database,
  livraison: Rocket,
  qualite: ShieldCheck,
}

const SPANS: Record<string, string> = {
  front: 'lg:col-span-2',
  back: 'lg:col-span-2',
  donnees: 'lg:col-span-1',
  livraison: 'lg:col-span-1',
  qualite: 'lg:col-span-2',
}

function TechChip({ name }: { name: string }) {
  const tech = techIcons[name]

  return (
    <li className="group/chip inline-flex items-center gap-2 rounded-lg border bg-muted/40 px-2.5 py-1.5 text-xs transition-colors hover:border-brand/30 hover:bg-muted">
      {tech && (
        <tech.Icon
          aria-hidden
          className="size-3.5 shrink-0 opacity-80 transition-opacity group-hover/chip:opacity-100"
          style={{ color: tech.color }}
        />
      )}
      <span className="text-foreground/90">{name}</span>
    </li>
  )
}

export default function StackSection() {
  const all = stackLayers.flatMap((layer) => layer.items)
  const half = Math.ceil(all.length / 2)

  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title={
        <>
          Du composant React
          <br />
          <span className="text-brand-text">jusqu'à la base de données</span>
        </>
      }
      description="Ce que je manipule au quotidien, en cours comme en entreprise, de l'interface jusqu'à la mise en production."
    >
      <div className="grid gap-4 lg:grid-cols-4">
        {stackLayers.map((layer, index) => {
          const Icon = ICONS[layer.id] ?? Layers
          const highlight = layer.id === 'back'

          return (
            <BlurFade key={layer.id} delay={0.05 * index} inView className={SPANS[layer.id]}>
              <div
                className={cn(
                  'group relative flex h-full flex-col gap-4 rounded-2xl border bg-card p-6 transition-colors duration-300',
                  highlight ? 'border-brand/30' : 'hover:border-brand/20'
                )}
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className={cn(
                      'size-5 transition-transform duration-300 group-hover:-translate-y-0.5',
                      highlight ? 'text-brand-text' : 'text-muted-foreground'
                    )}
                  />
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(layer.items.length).padStart(2, '0')}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{layer.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{layer.hint}</p>
                </div>

                <ul className="mt-auto flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <TechChip key={item} name={item} />
                  ))}
                </ul>
              </div>
            </BlurFade>
          )
        })}
      </div>

      <div className="relative mt-10 flex w-full flex-col gap-3 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {all.slice(0, half).map((item) => {
            const tech = techIcons[item]
            return (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs"
              >
                {tech && (
                  <tech.Icon aria-hidden className="size-3.5" style={{ color: tech.color }} />
                )}
                {item}
              </span>
            )
          })}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {all.slice(half).map((item) => {
            const tech = techIcons[item]
            return (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs"
              >
                {tech && (
                  <tech.Icon aria-hidden className="size-3.5" style={{ color: tech.color }} />
                )}
                {item}
              </span>
            )
          })}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background" />
      </div>
    </Section>
  )
}
