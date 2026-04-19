# 🎮 JEU VIDÉOps — Monorepo & CI/CD

![Build Status](https://github.com/Matrami9/JeuvideOps_test/actions/workflows/test.yml/badge.svg)
![Deployment](https://github.com/Matrami9/JeuvideOps_test/actions/workflows/static-site.yml/badge.svg)

Ce projet est une démonstration complète d'une chaîne **DevOps** appliquée à un monorepo de jeux vidéo. L'objectif est d'automatiser les tests, la compilation et le déploiement via Docker et GitHub Actions.

---

## 🚀 Liens du projet

| Ressource | Lien |
|---|---|
| 🌐 Portail Web (GitHub Pages) | [Accéder aux jeux](https://matrami9.github.io/JeuvideOps_test/) |
| 🐳 Image Docker (GHCR) | `ghcr.io/matrami9/jeuvideops_test:latest` |

---

## 🏗️ Architecture du projet

Le dépôt est organisé en **Monorepo** contenant deux projets distincts :

### 1. Lassana — `Two_Ships_Passing_In_The_Night`

- Jeu d'aventure spatiale (JS13K).
- Tests unitaires avec **Mocha**.

### 2. Matrami — `Space_Invaders`

- Classique arcade revisité.
- Développé en **TypeScript**, compilé avec **Parcel**.
- Linting avec **ESLint**.

---

## ⚙️ Pipeline CI/CD (GitHub Actions)

Le workflow automatise les étapes suivantes à chaque push sur `main` :

| Étape | Description |
|---|---|
| 🧪 **Tests & Linting** | Exécution des tests Mocha et vérification ESLint pour chaque projet de manière isolée |
| 🐳 **Dockerisation** | Build d'une image Docker **Multi-stage** optimisée |
| 📦 **Registry** | Publication automatique sur **GitHub Container Registry (GHCR)** |
| 🚀 **Déploiement statique** | Compilation TypeScript et déploiement sur GitHub Pages avec un portail Tailwind CSS |

---

## 🐳 Docker & Déploiement local

L'image Docker utilise **Nginx sur Alpine Linux** pour servir les jeux de manière ultra-légère. Elle a été configurée pour supporter les dépendances système spécifiques (`libc6-compat`) requises par les outils de build.

### Récupérer l'image

```bash
docker pull ghcr.io/matrami9/jeuvideops_test:latest
```

### Lancer le projet localement

```bash
docker run -d -p 8080:80 --name jeuvideops ghcr.io/matrami9/jeuvideops_test:latest
```

Accédez ensuite à [http://localhost:8080](http://localhost:8080) pour voir le portail de jeux.

---

## 🛠️ Stack technique

| Catégorie | Outils |
|---|---|
| CI/CD | GitHub Actions |
| Conteneurisation | Docker (Multi-stage builds) |
| Serveur Web | Nginx (Alpine) |
| Langages | TypeScript, JavaScript, HTML/CSS (Tailwind) |
| Outils | Parcel, Mocha, ESLint, npm |