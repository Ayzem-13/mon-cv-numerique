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
      'TanStack Query',
      'Motion',
    ],
  },
  {
    id: 'back',
    label: 'Back',
    hint: 'Services et API',
    items: ['Java', 'Spring Boot', 'PHP', 'Symfony', 'NestJS', 'Bun', 'Elysia', 'GraphQL', 'REST'],
  },
  {
    id: 'donnees',
    label: 'Données',
    hint: 'Persistance et modélisation',
    items: ['PostgreSQL', 'MySQL', 'Prisma', 'SQL'],
  },
  {
    id: 'livraison',
    label: 'Livraison',
    hint: 'Conteneurs et intégration continue',
    items: ['Docker', 'GitHub Actions', 'GitLab CI'],
  },
  {
    id: 'qualite',
    label: 'Qualité',
    hint: 'Tests et méthode',
    items: ['Playwright', 'Tests E2E', 'Zod', 'Git', 'Agile / Scrum', 'Revue de code'],
  },
]
