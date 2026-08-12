# Intégration continue et déploiement

## CI — `.github/workflows/ci.yml`

Un seul workflow, déclenché sur les pushes vers `master` et sur toutes les pull requests.
Il enchaîne, dans cet ordre : `lint`, `format:check`, `type-check`, `test`, `build`.

Points à connaître :

- L'installation utilise `--frozen-lockfile`. Si `pnpm-lock.yaml` n'est pas à jour avec
  `package.json`, la CI échoue au lieu de résoudre les versions autrement que sur ta machine.
- La version de pnpm n'est pas écrite dans le workflow : elle vient du champ `packageManager`
  de `package.json`. Une seule source de vérité, partagée avec Vercel.
- Le job a `permissions: contents: read` et le checkout ne conserve pas les identifiants :
  un workflow qui n'écrit rien n'a pas besoin d'un jeton en écriture.
- `concurrency` annule le run précédent quand on pousse deux fois de suite sur la même branche.

## Déploiement — Vercel

Le déploiement n'est pas fait par GitHub Actions. Vercel est branché sur le dépôt et déploie
lui-même :

- un push sur `master` met à jour la production ;
- toute autre branche et toute pull request produisent une preview sur une URL dédiée.

La configuration est dans `vercel.json` à la racine : commande de build, dossier de sortie,
en-têtes de sécurité et durées de cache. Aucun secret n'est nécessaire, le site est statique et
n'appelle que des API publiques depuis le navigateur.

### Mise en place

1. Sur Vercel, **Add New → Project**, puis importer `Ayzem-13/mon-cv-numerique`.
2. Laisser la détection automatique : le framework Vite, la commande de build et le dossier
   `dist` sont déjà déclarés dans `vercel.json`.
3. Ne rien ajouter dans **Environment Variables** : le projet n'en utilise aucune.
4. Déployer.

### Si la CSP bloque quelque chose

`vercel.json` contient une Content-Security-Policy stricte. Le script de thème inline dans
`index.html` y est autorisé par son empreinte SHA-256. **Modifier ce script invalide
l'empreinte et le thème cessera de s'appliquer avant le premier rendu.** Il faut alors la
recalculer :

```bash
node -e "const fs=require('fs'),c=require('crypto');const m=fs.readFileSync('index.html','utf8').match(/<script>([\s\S]*?)<\/script>/);console.log('sha256-'+c.createHash('sha256').update(m[1],'utf8').digest('base64'))"
```

De même, un nouvel appel réseau vers un domaine tiers doit être ajouté à `connect-src`.
