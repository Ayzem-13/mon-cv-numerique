import type { StackLayer } from '@/types'

export const stackLayers: StackLayer[] = [
  {
    id: 'front',
    label: 'Front',
    hint: 'Interface et rendu',
    items: [
      'React 19',
      'TypeScript',
      'Next.js',
      'Astro',
      'TailwindCSS',
      'shadcn/ui',
      'Motion',
      'GSAP',
    ],
  },
  {
    id: 'back',
    label: 'Back',
    hint: 'Services et API',
    items: ['Java', 'Spring Boot', 'PHP', 'Symfony', 'Bun', 'Elysia', 'Node', 'GraphQL', 'REST'],
  },
  {
    id: 'donnees',
    label: 'Données',
    hint: 'Persistance et modélisation',
    items: ['PostgreSQL', 'MySQL', 'Prisma', 'SQL'],
  },
  {
    id: 'infra',
    label: 'Infra',
    hint: 'Déploiement et exploitation',
    items: ['Docker', 'VPS Ubuntu', 'Coolify', 'Pterodactyl', 'GitHub Actions', 'GitLab CI'],
  },
  {
    id: 'qualite',
    label: 'Qualité',
    hint: 'Tests et méthode',
    items: ['Playwright', 'Tests E2E', 'Git', 'Agile / Scrum', 'Revue de code'],
  },
]
