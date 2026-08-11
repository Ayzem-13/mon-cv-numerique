import { useEffect, useState } from 'react'

export type GithubStats = {
  publicRepos: number
  followers: number
  languages: { name: string; percent: number }[]
  loaded: boolean
}

const FALLBACK: GithubStats = {
  publicRepos: 11,
  followers: 6,
  languages: [
    { name: 'TypeScript', percent: 57 },
    { name: 'Java', percent: 14 },
    { name: 'JavaScript', percent: 14 },
    { name: 'PHP', percent: 14 },
  ],
  loaded: false,
}

type Repo = { fork: boolean; language: string | null }

export function useGithubStats(username: string): GithubStats {
  const [stats, setStats] = useState<GithubStats>(FALLBACK)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`, {
            signal: controller.signal,
          }),
        ])
        if (!userRes.ok || !reposRes.ok) return

        const user = (await userRes.json()) as { public_repos: number; followers: number }
        const repos = (await reposRes.json()) as Repo[]

        const counts = new Map<string, number>()
        for (const repo of repos) {
          if (repo.fork || !repo.language) continue
          counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1)
        }

        const total = [...counts.values()].reduce((sum, n) => sum + n, 0)
        const languages = total
          ? [...counts.entries()]
              .sort((a, b) => b[1] - a[1])
              .slice(0, 5)
              .map(([name, n]) => ({ name, percent: Math.round((n / total) * 100) }))
          : FALLBACK.languages

        setStats({
          publicRepos: user.public_repos,
          followers: user.followers,
          languages,
          loaded: true,
        })
      } catch {
        setStats(FALLBACK)
      }
    }

    load()
    return () => controller.abort()
  }, [username])

  return stats
}
