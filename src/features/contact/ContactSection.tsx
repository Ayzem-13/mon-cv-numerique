import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Download } from 'lucide-react'
import Section from '@/components/Section'
import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { contactChannels, profile } from '@/config/profile'

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(label)
      setTimeout(() => setCopied((current) => (current === label ? null : current)), 1800)
    } catch {
      setCopied(null)
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          On en discute<span className="text-brand-text"> ?</span>
        </>
      }
      description="Une opportunité, une question technique ou juste envie d'échanger sur le développement."
    >
      <BlurFade inView>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border bg-card p-6 sm:p-10">
          <div className="grid gap-3 sm:grid-cols-2">
            <Button
              size="lg"
              className="h-12 w-full justify-center rounded-full bg-brand text-sm text-brand-foreground hover:bg-brand/90 sm:text-base"
              render={<a href="mailto:roubaudaxel2@gmail.com" />}
            >
              M'écrire un mail
              <ArrowUpRight data-icon="inline-end" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 w-full justify-center rounded-full text-sm sm:text-base"
              render={<a href={profile.cvPath} download type="application/pdf" />}
            >
              <Download data-icon="inline-start" />
              Télécharger le CV
            </Button>
          </div>

          <dl className="mt-8 divide-y border-t">
            {contactChannels.map((channel) => (
              <div
                key={channel.label}
                className="flex flex-col gap-1.5 py-4 sm:flex-row sm:items-center sm:gap-4"
              >
                <dt className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground sm:w-28 sm:shrink-0">
                  <channel.icon className="size-3.5 shrink-0" aria-hidden />
                  {channel.label}
                </dt>

                <dd className="min-w-0 sm:flex-1">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      {...(channel.href.startsWith('http') && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                      className="break-all text-sm underline-offset-4 transition-colors hover:text-brand-text hover:underline"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <span className="break-all text-sm">{channel.value}</span>
                  )}
                </dd>

                {channel.copyable && (
                  <button
                    type="button"
                    onClick={() => copy(channel.label, channel.value)}
                    aria-label={`Copier ${channel.label.toLowerCase()}`}
                    className="inline-flex min-h-9 shrink-0 items-center gap-1.5 self-start rounded-full border px-3 text-xs text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand-text sm:self-auto"
                  >
                    {copied === channel.label ? (
                      <>
                        <Check className="size-3" /> copié
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" /> copier
                      </>
                    )}
                  </button>
                )}
              </div>
            ))}
          </dl>

          <BorderBeam
            duration={10}
            size={280}
            className="from-transparent via-brand to-transparent"
          />
        </div>
      </BlurFade>
    </Section>
  )
}
