import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'enki',
    name: 'Enki',
    shot: '/shots/enki.png',
    role: 'Conception, full stack, projet de fin de Master 1',
    summary:
      "ERP d'atelier : catalogue de pièces, postes et machines, gammes d'opérations, devis, commandes et facturation. Interface dense pensée pour un usage quotidien, avec table filtrable, colonnes configurables et alertes de stock.",
    stack: ['React 19', 'TypeScript', 'TailwindCSS', 'shadcn/ui', 'API REST', 'PostgreSQL'],
    status: 'build',
    since: '2026-01',
  },
  {
    id: 'ananta-france',
    name: 'Ananta France',
    domain: 'ananta-actu.fr',
    shot: '/shots/ananta.png',
    url: 'https://ananta-actu.fr/',
    role: 'Conception, développement, exploitation',
    summary:
      'Média communautaire francophone sur le jeu Ananta : interviews traduites depuis Famitsu, IGN et 4Gamer, fiches personnages, gameplay. Écrit à trois, en ligne et maintenu.',
    stack: ['Docusaurus', 'React 19', 'TypeScript', 'MDX'],
    status: 'live',
    since: '2025-01',
  },
  {
    id: 'lsfive',
    name: 'LS FIVE',
    domain: 'lsfive.fr',
    shot: '/shots/lsfive.png',
    url: 'https://lsfive.fr/',
    role: 'Développement, documentation, exploitation',
    summary:
      "Site officiel d'un serveur de roleplay GTA V : présentation, règlements, métiers, guides et wiki communautaire. Documentation en MDX propulsée par Fumadocs.",
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Fumadocs', 'Motion'],
    status: 'live',
    since: '2025-05',
  },
  {
    id: 'ananta-actu-v2',
    name: 'Ananta Actu v2',
    role: 'Architecture, back-end, front-end',
    summary:
      "Réécriture complète du média en monorepo Bun : API Elysia et Prisma d'un côté, front Astro en îlots React de l'autre. Défilement inertiel Lenis et animations GSAP.",
    stack: ['Astro', 'React 19', 'Bun', 'Elysia', 'Prisma', 'PostgreSQL', 'GSAP'],
    status: 'build',
    since: '2025-11',
  },
  {
    id: 'fluxe',
    name: 'Fluxe',
    repo: 'https://github.com/Ayzem-13/Fluxe-Frontend',
    role: 'Full stack, projet de Master 1',
    summary:
      'Réseau social type Twitter : API Elysia sur Bun avec Prisma et PostgreSQL, authentification JWT, front React 19 piloté par Redux Toolkit.',
    stack: ['Bun', 'Elysia', 'Prisma', 'PostgreSQL', 'JWT', 'React 19', 'Redux'],
    status: 'idle',
    since: '2025-09',
    until: '2026-01',
  },
  {
    id: 'infra',
    name: 'Infrastructure',
    role: 'Administration, déploiement continu',
    summary:
      "VPS Ubuntu que j'administre : Coolify pour le déploiement des projets, Pterodactyl pour les serveurs de jeu, mises en production via GitHub Actions.",
    stack: ['Ubuntu', 'Docker', 'Coolify', 'Pterodactyl', 'GitHub Actions'],
    status: 'live',
    since: '2025-03',
  },
  {
    id: 'crousgame',
    name: 'crousgame',
    repo: 'https://github.com/Noobos100/crousgame',
    role: 'Développement gameplay',
    summary:
      "Jeu 3D Unity réalisé en projet universitaire : récupérer les cookies disséminés dans le niveau puis rejoindre le point d'arrivée.",
    stack: ['Unity', 'C#'],
    status: 'idle',
    since: '2024-09',
    until: '2024-12',
  },
]
