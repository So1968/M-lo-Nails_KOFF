# Roadmap — Melo Nails MicroERP

Ce document décrit le plan de livraison du projet avec jalons, livrables et critères de validation.

## Vision

Créer une solution simple à exploiter au quotidien, robuste sur Raspberry Pi, et conforme aux besoins métier d’une micro‑entreprise esthétique.

## Hypothèses de pilotage

- Méthode incrémentale par phases courtes
- Priorité à la fiabilité (sauvegarde + restauration) avant les fonctionnalités avancées
- Validation de chaque phase par une démonstration concrète

---

## Phase 1 — Infrastructure (Semaine 1 à 2)

### Objectifs
- Disposer d’un socle serveur sécurisé et stable.

### Livrables
- Raspberry Pi configuré (OS 64‑bit Lite, SSH, durcissement de base)
- Docker + Docker Compose installés
- Reverse proxy (Traefik ou NPM) opérationnel
- HTTPS actif sur le domaine
- Sauvegarde automatique quotidienne (base + fichiers)

### Critères d’acceptation
- Accès HTTPS sans alerte certificat
- Sauvegarde quotidienne vérifiée sur stockage distant
- Fail2Ban actif et testé

---

## Phase 2 — MVP métier (Semaine 3 à 4)

### Objectifs
- Mettre en ligne une première version utile pour les clientes.

### Livrables
- Site vitrine (Accueil, Tarifs, Galerie, Contact)
- Module de réservation configuré (prestations, durée, créneaux)
- Notifications de confirmation de RDV (email)

### Critères d’acceptation
- Une cliente peut réserver un créneau de bout en bout
- L’agenda back‑office reçoit correctement le rendez‑vous

---

## Phase 3 — Administratif & CRM (Semaine 5 à 6)

### Objectifs
- Structurer l’exploitation et la gestion administrative.

### Livrables
- Fiches clientes (historique + notes)
- Facturation (devis/facture, acomptes)
- Modèles d’emails transactionnels
- Pages légales publiées

### Critères d’acceptation
- Facture générée pour une réservation validée
- Parcours conforme RGPD (consentement + mentions)

---

## Phase 4 — Paiement & boutique (Semaine 7 à 8)

### Objectifs
- Activer la monétisation en ligne.

### Livrables
- Paiement en ligne (Stripe/PayPal)
- Prise d’acompte à la réservation
- Mini‑catalogue produits (entretien)

### Critères d’acceptation
- Paiement test validé en sandbox puis production
- Acompte correctement réconcilié avec la réservation

---

## Phase 5 — Exploitation & résilience (Semaine 9)

### Objectifs
- Garantir la continuité d’activité.

### Livrables
- Procédure documentée de restauration complète
- Test de panne simulée (rebuild from backup)
- Checklist d’exploitation hebdomadaire

### Critères d’acceptation
- Remise en service complète en < 1h
- Vérification de l’intégrité des données restaurées

---

## Indicateurs de succès

- Taux de réservation en ligne
- Taux de no‑show
- Délai moyen de traitement administratif
- Temps de reprise après incident
- Satisfaction client (retours directs)

## Risques principaux et mitigation

- **Risque** : saturation des ressources Pi → **Action** : monitoring CPU/RAM/disque + optimisation plugins
- **Risque** : perte de données → **Action** : règle 3‑2‑1 + test de restauration mensuel
- **Risque** : complexité outil → **Action** : standardiser les workflows et limiter les extensions
