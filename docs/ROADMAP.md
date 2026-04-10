# Roadmap — Melo Nails (Next.js)

Ce document pilote l’exécution produit/technique de Melo Nails sur une base **Next.js App Router**.

## Vision

Créer un site vitrine + e-commerce esthétique, ultra-rapide et maintenable, auto-hébergé sur Raspberry Pi 5 avec Docker.

## État global (mise à jour : 2026-04-10)

- **Architecture cible** : ✅ Validée (Next.js)
- **Socle UI de la home** : ✅ Livré
- **Réservation en ligne** : ⏳ À implémenter
- **E-commerce** : ⏳ À implémenter
- **Back-office métier** : ⏳ À implémenter

---

## Phase 0 — Cadrage & alignement (terminée)

### Objectifs
- Supprimer l’ambiguïté d’architecture et fixer un chemin de livraison unique.

### Livrables
- Décision de stack : **Next.js App Router**
- Documentation projet réalignée
- Plan d’actions MVP clarifié

### Statut
- **DONE** (2026-04-10)

---

## Phase 1 — Infrastructure (en cours)

### Objectifs
- Préparer un socle d’hébergement fiable sur Raspberry Pi.

### Livrables
- Raspberry Pi configuré (OS 64-bit Lite, SSH, durcissement)
- Docker + Compose installés
- Reverse proxy + HTTPS
- Sauvegarde quotidienne automatisée

### Critères d’acceptation
- Accès HTTPS sans alerte certificat
- Sauvegarde quotidienne vérifiée sur stockage distant
- Procédure de restauration testée

### Statut
- **DOING**

---

## Phase 2 — MVP vitrine + réservation (prochaine priorité)

### Objectifs
- Permettre la prise de rendez-vous bout en bout depuis le site.

### Livrables
- Home finalisée (déjà posée)
- Pages : Tarifs, Galerie, Contact détaillé
- Module réservation (prestations, durées, créneaux)
- Emails de confirmation

### Critères d’acceptation
- Une cliente réserve en autonomie en moins de 2 minutes
- Le rendez-vous est visible dans l’agenda côté gérante

### Statut
- **TODO**

---

## Phase 3 — E-commerce & paiement

### Objectifs
- Ajouter la monétisation directe en ligne.

### Livrables
- Catalogue produits entretien
- Panier + checkout
- Paiement en ligne (Stripe/PayPal)
- Gestion acompte pour les réservations

### Critères d’acceptation
- Paiement test validé (sandbox puis prod)
- Traçabilité commande/paiement complète

### Statut
- **TODO**

---

## Phase 4 — Admin métier & conformité

### Objectifs
- Structurer l’exploitation quotidienne et la conformité.

### Livrables
- Mini CRM (historique clientes + notes)
- Facturation (devis/factures)
- Pages légales + parcours RGPD
- Dashboard KPI simple

### Critères d’acceptation
- Facture générée après réservation validée
- Consentement et mentions légales opérationnels

### Statut
- **TODO**

---

## Risques et mitigation

- **Risque** : dérive de scope MVP → **Action** : sprint court + revue hebdo avec backlog figé.
- **Risque** : performance sur Pi → **Action** : optimisation images, cache, bundle analysis.
- **Risque** : perte de données → **Action** : sauvegarde 3-2-1 + tests de restauration mensuels.
