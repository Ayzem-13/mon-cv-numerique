import { Boxes, Database, Layers, Server, ShieldCheck } from 'lucide-react'
import Section from '@/components/Section'
import { BlurFade } from '@/components/ui/blur-fade'
import { Marquee } from '@/components/ui/marquee'
import { cn } from '@/lib/utils'
import { stackLayers } from './data/stack'

const ICONS: Record<string, typeof Layers> = {
  front: Layers,
  back: Server,
  donnees: Database,
  infra: Boxes,
  qualite: ShieldCheck,
}

const SPANS: Record<string, string> = {
  front: 'lg:col-span-2',
  back: 'lg:col-span-2',
  donnees: 'lg:col-span-1',
  infra: 'lg:col-span-1',
  qualite: 'lg:col-span-2',
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
          <span className="text-brand-text">jusqu'au serveur</span>
        </>
      }
      description="Je ne m'arrête pas à l'interface : je conçois les API, modélise les données et gère la mise en production."
    >
      <div className="grid gap-4 lg:grid-cols-4">
        {stackLayers.map((layer, index) => {
          const Icon = ICONS[layer.id] ?? Layers
          const highlight = layer.id === 'infra'

          return (
            <BlurFade key={layer.id} delay={0.05 * index} inView className={SPANS[layer.id]}>
              <div
                className={cn(
                  'group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border bg-card p-6 transition-colors duration-300',
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
                    <li
                      key={item}
                      className="rounded-md border bg-muted/40 px-2 py-1 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          )
        })}
      </div>

      <div className="relative mt-10 flex w-full flex-col gap-3 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {all.slice(0, half).map((item) => (
            <span
              key={item}
              className="rounded-full border bg-card px-4 py-1.5 font-mono text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {all.slice(half).map((item) => (
            <span
              key={item}
              className="rounded-full border bg-card px-4 py-1.5 font-mono text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background" />
      </div>
    </Section>
  )
}
