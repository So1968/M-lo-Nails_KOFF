# Décision d’architecture – Melo Nails

## Contexte

Le projet Melo Nails doit être exploitable rapidement sur Raspberry Pi 5 avec une administration simple pour une activité locale.

Deux pistes ont été étudiées :

- Next.js sur mesure
- WordPress + MariaDB

## Décision (mise à jour du 2026-04-15)

👉 **WordPress + MariaDB + Nginx (Docker Compose)** devient la stack standard du projet.

## Justification

- Mise en service plus rapide (CMS prêt à l’emploi)
- Administration de contenu simplifiée
- Écosystème plugins/thèmes mature
- Exploitation Docker claire (3 services principaux)
- Persistance explicite des images et données critiques

## Conséquences

- WordPress est la référence pour tous les déploiements.
- La documentation est alignée sur le runbook WordPress.
- Le reverse proxy standard est Nginx.
- Les mots de passe forts deviennent un prérequis opérationnel.
- La piste Next.js est conservée uniquement en archive technique (profil `next-archive`).

## Exigences d’exploitation retenues

- Stockage persistant séparé : DB, cœur WP, uploads.
- Secrets robustes dans `.env` (32+ caractères).
- Reverse proxy frontal Nginx.
- Plan de sauvegarde régulier + test de restauration.
