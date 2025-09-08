# Mon CV Numérique – Portfolio Axel Roubaud

Portfolio web développé avec React, TypeScript, Vite, TailwindCSS et Framer Motion.

## Présentation

Ce projet est mon portfolio numérique permettant de présenter mon parcours, mes compétences, mes projet (alternance, stage, etc.).

### Stack technique
- **React 19** + **TypeScript**
- **Vite** (build ultra-rapide)
- **TailwindCSS** (design responsive et moderne)
- **Framer Motion** (animations)
- **React Icons**

## Installation & utilisation

### Prérequis
- Node.js >= 18
- pnpm (recommandé, sinon npm ou yarn)

### Installation des dépendances
```bash
pnpm install
```

### Lancement du serveur de développement
```bash
vite
```
ou 
```bash
pnpm run dev
```

Le site sera accessible sur [http://localhost:5173](http://localhost:5173) (ou un autre port si déjà utilisé).

### Build pour production
```bash
pnpm run build
```

## Personnalisation
- Modifiez les données dans `src/data/mockData.ts` pour adapter les projets, compétences, contacts, etc.
- Les composants sont dans `src/componenets/`.
- Chaque page est une section ce retrouve dans `src/pages`
- Les styles sont principalement gérés par TailwindCSS.

