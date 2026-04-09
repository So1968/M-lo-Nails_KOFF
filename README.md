# Melo Nails — MicroERP auto‑hébergé

Projet de plateforme **tout‑en‑un** pour piloter une micro‑entreprise de prothésie ongulaire / esthétique, hébergée sur un **Raspberry Pi 5**.

## 🎯 Objectif

Construire un système unique avec un seul point d’entrée (back‑office) pour gérer :

- le site vitrine,
- les réservations,
- la relation client (CRM léger),
- la facturation,
- le suivi de stock,
- la sécurité et les sauvegardes.

> Mantra : **zéro friction**. Si une action prend plus de 3 clics, le système doit être simplifié.

---

## 🧱 Périmètre fonctionnel

### Front public (cliente)
- Présentation des services
- Galerie avant/après
- FAQ et contact
- Réservation en ligne (prestation + créneau)
- Espace client (historique, factures, annulation/report)

### Back‑office (gérante)
- CRM client (profil, notes, historique)
- Agenda (jour/semaine, indisponibilités, buffers)
- Facturation / acomptes / suivi paiements
- Stock simple + alertes de seuil
- Tableau de bord d’activité (CA, RDV, paiements en attente)

---

## ⚙️ Stack technique cible

- **Matériel** : Raspberry Pi 5 (8 Go), SSD NVMe, alimentation officielle 27W
- **OS** : Debian / Raspberry Pi OS 64‑bit Lite
- **Orchestration** : Docker + Docker Compose
- **Réseau/Sécurité** : Traefik *ou* Nginx Proxy Manager + Fail2Ban
- **Applicatif recommandé** : WordPress (WooCommerce + plugin de réservation type Amelia/Bookly)
- **Alternative** : Odoo Community (plus complet, plus lourd)

---

## 🔐 Sécurité, sauvegarde et conformité

- HTTPS obligatoire
- Sauvegarde **3‑2‑1** (base + fichiers, sauvegarde chiffrée hors site)
- Pages légales (mentions, CGV/CGU) + consentement RGPD
- Back‑office non indexé + accès admin via VPN (Tailscale/WireGuard recommandé)

---

## 🗺️ Feuille de route

La feuille de route détaillée est disponible ici :

- [`docs/ROADMAP.md`](docs/ROADMAP.md)

Suivi opérationnel (état d’avancement des tâches) :

- [`docs/SUIVI_TACHES.md`](docs/SUIVI_TACHES.md)

---

## 🚀 Démarrage du projet (prochaines actions)

1. Valider l’architecture cible (WordPress tout‑en‑un vs Odoo).
2. Préparer l’environnement Pi (OS, SSH, sécurité de base).
3. Ajouter une base `docker-compose.yml` avec services minimaux.
4. Mettre en place les premiers scripts de sauvegarde/restauration.
5. Lancer un MVP : pages statiques + réservation.
