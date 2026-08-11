import type { JournalEntry } from '@/types'

export const experiences: JournalEntry[] = [
  {
    id: 'viaxoft',
    from: '2025-10',
    to: '2027-10',
    org: 'Viaxoft',
    kind: 'Alternance',
    title: 'Développeur full stack',
    detail: 'Éditeur de logiciel SaaS pour agences de voyage et tour-opérateurs.',
    missions: [
      'Microservice de création de devis avec analyse IA, prochainement testé chez des clients',
      'Refonte du moteur de recherche interne',
      "API REST pour la migration d'EasyRedmine vers OpenProject",
      'Connecteur Odoo pour les tickets de support, réalisé en autonomie',
    ],
    stack: [
      'React',
      'TypeScript',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Playwright',
      'PHP',
      'Docker',
    ],
  },
  {
    id: 'postlab',
    from: '2025-02',
    to: '2025-06',
    org: 'PostLab',
    kind: 'Stage',
    title: 'Développeur web',
    detail: 'Application web de formation de formateurs, développée en équipe.',
    stack: ['Symfony', 'PHP', 'Bootstrap'],
  },
  {
    id: 'rubambelle',
    from: '2024-04',
    to: '2024-06',
    org: 'Rubambelle',
    kind: 'Stage',
    title: 'Développeur web',
    detail: "Création d'une boutique en ligne, de la maquette à la mise en production.",
    stack: ['WordPress', 'PHP', 'JavaScript'],
  },
]

export const education: JournalEntry[] = [
  {
    id: 'esimed',
    from: '2025-09',
    to: '2027-10',
    org: 'Esimed',
    kind: 'Formation',
    title: 'Mastère Expert en architecture et développement logiciel',
    detail:
      'Bac +5, en alternance. Deuxième année en cours, au Technopôle de Château-Gombert à Marseille.',
  },
  {
    id: 'iut',
    from: '2022-09',
    to: '2025-06',
    org: "IUT d'Aix-Marseille",
    kind: 'Formation',
    title: "BUT Informatique, parcours réalisation d'applications",
    detail:
      'Bac +3. Trois ans de développement logiciel, bases de données, gestion de projet et travail en équipe.',
  },
]
