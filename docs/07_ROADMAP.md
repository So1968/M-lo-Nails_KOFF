# Roadmap — Melo Nails (WordPress)

Ce document pilote l’exécution produit/technique de Melo Nails sur une base **WordPress auto-hébergée**.

## Vision

Créer un site vitrine + réservation + e-commerce léger, administrable simplement, hébergé sur Raspberry Pi 5 avec Docker.

## État global (mise à jour : 2026-04-15)

- **Architecture cible** : ✅ Validée (WordPress + MariaDB + Nginx)
- **Standardisation Docker** : ✅ Livrée
- **Configuration éditoriale WordPress** : ⏳ À finaliser
- **Parcours réservation** : ⏳ À implémenter
- **E-commerce** : ⏳ À implémenter

---

## Phase 0 — Cadrage & réalignement (terminée)

### Livrables
- Décision architecture : **WordPress standard**
- Documentation alignée exploitation
- Stack Docker simplifiée

### Statut
- **DONE** (2026-04-15)

---

## Phase 1 — Infra & sécurité (en cours)

### Livrables
- Raspberry Pi durci
- Docker + Compose
- Reverse proxy Nginx
- HTTPS actif
- Sauvegardes automatiques

### Critères d’acceptation
- Site disponible en HTTPS
- Sauvegardes testées en restauration
- Secrets robustes en place

### Statut
- **DOING**

---

## Phase 2 — MVP vitrine + réservation

### Livrables
- Pages : Accueil / Tarifs / Galerie / Contact
- Plugin réservation (créneaux + confirmations)
- Configuration emails transactionnels

### Statut
- **TODO**

---

## Phase 3 — E-commerce

### Livrables
- WooCommerce
- Catalogue produits
- Paiement en ligne
- Processus commande + suivi

### Statut
- **TODO**

---

## Risques & mitigation

- **Risque** : surcharge plugins → **Action** : limiter la stack plugin au strict nécessaire.
- **Risque** : perte de médias → **Action** : sauvegarde dédiée `wp_uploads` + tests mensuels.
- **Risque** : compromission admin → **Action** : mots de passe forts + 2FA + durcissement accès `/wp-admin`.
