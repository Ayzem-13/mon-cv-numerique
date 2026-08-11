import { ArrowUpRight } from 'lucide-react'
import { GitHubCalendar } from 'react-github-calendar'
import Section from '@/components/Section'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { profile } from '@/config/profile'
import { useGithubStats } from '@/hooks'
import { useTheme } from '@/lib/theme'

const LEVELS = {
  light: ['#ececec', '#e6f2a4', '#dcec70', '#daf432', '#d8fa00'],
  dark: ['#1f1f1f', '#3b4712', '#617d1a', '#a3c219', '#d8fa00'],
}

export default function ActivitySection() {
  const { resolvedTheme } = useTheme()
  const github = useGithubStats(profile.githubUsername)

  return (
    <Section
      id="activite"
      eyebrow="Activité"
      title={
        <>
          Je code
          <span className="text-brand-text"> tous les jours</span>
        </>
      }
      description="Contributions publiques des douze derniers mois, hors travail chez Viaxoft."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
        <BlurFade inView>
          <div className="flex h-full flex-col justify-center overflow-x-auto rounded-2xl border bg-card p-6 sm:p-8">
            <GitHubCalendar
              username={profile.githubUsername}
              colorScheme={resolvedTheme}
              theme={LEVELS}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              labels={{ totalCount: '{{count}} contributions sur {{year}}' }}
            />
          </div>
        </BlurFade>

        <BlurFade delay={0.1} inView>
          <div className="flex h-full flex-col gap-5 rounded-2xl border bg-card p-6 sm:p-8">
            <h3 className="text-sm font-medium">Langages les plus utilisés</h3>

            <dl className="flex flex-col gap-4">
              {github.languages.map((language) => (
                <div key={language.name} className="flex flex-col gap-1.5">
                  <div className="flex items-baseline justify-between text-sm">
                    <dt>{language.name}</dt>
                    <dd className="font-mono text-xs text-muted-foreground">{language.percent}%</dd>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-brand transition-[width] duration-700"
                      style={{ width: `${language.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </dl>

            <Button
              variant="outline"
              size="sm"
              className="mt-auto w-full rounded-full"
              render={
                <a
                  href={`https://github.com/${profile.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              {profile.githubUsername}
              <ArrowUpRight data-icon="inline-end" />
            </Button>
          </div>
        </BlurFade>
      </div>
    </Section>
  )
}
