# Décision d’architecture – Melo Nails

## Contexte

Le projet Melo Nails est destiné à être déployé sur un Raspberry Pi 5, dans une logique de solution autonome, légère et maîtrisée.

Deux pistes techniques étaient initialement envisagées :

* Next.js (application moderne)
* WordPress + MariaDB (solution CMS)

## Décision

Le projet adopte officiellement l’architecture suivante :

👉 **Next.js + Docker sur Raspberry Pi 5**

## Justification

Ce choix est motivé par :

* une meilleure maîtrise du produit (pas de dépendance CMS)
* une architecture plus évolutive
* une cohérence avec un futur développement sur mesure
* une meilleure intégration avec des outils comme n8n
* une réduction des couches techniques inutiles

## Conséquences

* Next.js devient la **base principale du projet**
* WordPress est conservé uniquement comme **référence secondaire (archive)**
* toutes les nouvelles fonctionnalités seront développées dans l’application Next.js
* l’infrastructure Raspberry Pi sera optimisée pour cette pile

## Prochaine étape

Préparer l’environnement Raspberry Pi et valider le déploiement Docker de l’application Next.js.

---
