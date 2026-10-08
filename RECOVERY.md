# Inventaire de récupération

## Récupéré directement du déploiement

- `public/assets/recovered-runtime.js` : bundle JavaScript complet du déploiement Netlify.
- `src/recovered.css` : CSS du déploiement.
- `public/images/` : images, favicon et CV.
- `public/audio/theme.mp3` : musique.
- `index.html` : métadonnées et structure de démarrage reconstruite.

## Reconstruction

- `src/main.jsx` initialise un vrai point d'entrée React/Vite et charge le runtime récupéré.
- `package.json` fournit les dépendances nécessaires.
- `vite.config.js` permet de développer et construire le projet.

## Limite

Le code source React original n'était pas présent dans le ZIP Netlify. Le runtime compilé reste donc la partie la plus fidèle du comportement original. Les composants React originaux ne peuvent pas être reconstitués automatiquement à l'identique à partir du bundle.
