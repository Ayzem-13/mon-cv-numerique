import { ArrowUpRight } from 'lucide-react'
import { LuGithub } from 'react-icons/lu'
import { GitHubCalendar } from 'react-github-calendar'
import Section from '@/components/Section'
import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Button } from '@/components/ui/button'
import { NumberTicker } from '@/components/ui/number-ticker'
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
      id="github"
      eyebrow="GitHub"
      title={
        <>
          Je code <span className="text-brand-text">tous les jours</span>
        </>
      }
      description="Mon activité de développement au quotidien, en dehors du travail."
    >
      <BlurFade inView>
        <div className="relative overflow-hidden rounded-2xl border bg-card">
          <div className="flex flex-wrap items-center gap-4 border-b p-6 sm:p-8">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border bg-muted/40">
              <LuGithub className="size-5" />
            </span>

            <div className="min-w-0 flex-1">
              <p className="font-semibold tracking-tight">{profile.githubUsername}</p>
              <p className="text-sm text-muted-foreground">
                <NumberTicker value={github.publicRepos} className="text-foreground" /> dépôts
                publics · <NumberTicker value={github.followers} className="text-foreground" />{' '}
                followers
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground/80">
                La plupart de mes projets personnels sont dans des dépôts privés.
              </p>
            </div>

            <Button
              size="lg"
              className="h-11 rounded-full bg-brand px-5 text-brand-foreground hover:bg-brand/90"
              render={
                <a
                  href={`https://github.com/${profile.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Voir le profil
              <ArrowUpRight data-icon="inline-end" />
            </Button>
          </div>

          <div className="overflow-x-auto p-6 sm:p-8">
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

          <BorderBeam
            duration={10}
            size={300}
            className="from-transparent via-brand to-transparent"
          />
        </div>
      </BlurFade>
    </Section>
  )
}
