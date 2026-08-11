import {
  SiAstro,
  SiBun,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGitlab,
  SiGraphql,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import { TbApi, TbBrandFramerMotion, TbLeaf, TbTestPipe, TbUsersGroup } from 'react-icons/tb'
import type { IconType } from 'react-icons'

type Tech = { Icon: IconType; color: string }

export const techIcons: Record<string, Tech> = {
  'React 19': { Icon: SiReact, color: '#61DAFB' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  'Next.js': { Icon: SiNextdotjs, color: '#FFFFFF' },
  Astro: { Icon: SiAstro, color: '#FF5D01' },
  TailwindCSS: { Icon: SiTailwindcss, color: '#06B6D4' },
  'shadcn/ui': { Icon: SiShadcnui, color: '#FFFFFF' },
  'TanStack Query': { Icon: SiReactquery, color: '#FF4154' },
  Motion: { Icon: TbBrandFramerMotion, color: '#FFFFFF' },

  Java: { Icon: FaJava, color: '#E76F00' },
  'Spring Boot': { Icon: TbLeaf, color: '#6DB33F' },
  PHP: { Icon: SiPhp, color: '#777BB4' },
  Symfony: { Icon: SiSymfony, color: '#FFFFFF' },
  NestJS: { Icon: SiNestjs, color: '#E0234E' },
  Bun: { Icon: SiBun, color: '#FBF0DF' },
  Elysia: { Icon: TbApi, color: '#B794F4' },
  GraphQL: { Icon: SiGraphql, color: '#E10098' },
  REST: { Icon: TbApi, color: '#8B9CB6' },

  PostgreSQL: { Icon: SiPostgresql, color: '#4169E1' },
  MySQL: { Icon: SiMysql, color: '#4479A1' },
  Prisma: { Icon: SiPrisma, color: '#2D3748' },
  SQL: { Icon: TbApi, color: '#8B9CB6' },

  Docker: { Icon: SiDocker, color: '#2496ED' },
  'GitHub Actions': { Icon: SiGithubactions, color: '#2088FF' },
  'GitLab CI': { Icon: SiGitlab, color: '#FC6D26' },

  Playwright: { Icon: TbTestPipe, color: '#2EAD33' },
  'Tests E2E': { Icon: TbTestPipe, color: '#8B9CB6' },
  Zod: { Icon: SiZod, color: '#3E67B1' },
  Git: { Icon: SiGit, color: '#F05032' },
  'Agile / Scrum': { Icon: TbUsersGroup, color: '#8B9CB6' },
  'Revue de code': { Icon: TbUsersGroup, color: '#8B9CB6' },
}
