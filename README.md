# Léo Tarpin — Portfolio récupéré

Ce projet a été reconstruit à partir du déploiement Netlify fourni.

## Ce qui a été récupéré

- les images et ressources publiées
- le CV PDF
- la musique du portfolio
- les styles CSS du déploiement
- le runtime JavaScript compilé contenant l'expérience Three.js, les interactions, les modales et les données des projets
- une structure Vite + React pour pouvoir relancer et modifier le projet

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir l'URL indiquée par Vite.

## Build de production

```bash
npm run build
npm run preview
```

## Important

Le ZIP Netlify ne contient pas les fichiers sources React originaux. Le fichier `public/assets/recovered-runtime.js` est donc le runtime compilé récupéré du déploiement. Il permet de conserver le comportement et le rendu du site, mais ne permet pas de retrouver automatiquement les noms et la séparation exacts des composants React d'origine.

La structure React ajoutée autour du runtime constitue une base propre pour poursuivre une reconstruction progressive en composants (`src/components`, `src/data`, etc.).
