# Suivi des tâches — Melo Nails

> Objectif : suivre l’avancement opérationnel du projet de façon simple et lisible.

## Légende des statuts

- `TODO` : à faire
- `DOING` : en cours
- `DONE` : terminé
- `BLOCKED` : bloqué

---

## Plan d’exécution (session en cours)

### Sprint actuel — Cadrage architecture + Infrastructure (démarré le 2026-04-10)

1. **ARC-01** — Auditer le code existant et identifier les écarts doc/code.
2. **ARC-02** — Valider la cible unique (WordPress ou Next.js full custom).
3. **INF-01** — Préparer la carte SD/SSD et installer Raspberry Pi OS Lite 64-bit.
4. **INF-02** — Sécuriser l’accès initial (SSH par clés, utilisateur admin, Fail2Ban).
5. **INF-03** — Installer Docker + Docker Compose Plugin.
6. **INF-04** — Préparer le proxy + HTTPS (après validation du domaine).

### Définition de terminé (DoD) — Phase 1

- Accès SSH sans mot de passe root.
- `docker compose version` répond correctement.
- Reverse proxy exposé en HTTPS valide.
- Sauvegarde quotidienne automatisée et test de restauration de base effectué.

---

## Backlog priorisé

| ID | Tâche | Phase | Priorité | Statut | Responsable | Échéance | Notes |
|---|---|---|---|---|---|---|---|
| ARC-01 | Audit code + doc et relevé des manques | 0 | Haute | DONE | Codex | 2026-04-10 | Audit terminé, incohérences documentées |
| ARC-02 | Décider architecture cible unique | 0 | Haute | TODO | Owner | 2026-04-12 | Choix bloquant avant MVP |
| ARC-03 | Retirer/archiver la piste technique non retenue | 0 | Haute | TODO | Codex + Owner | 2026-04-13 | Réduire dette de décision |
| INF-01 | Installer OS Raspberry Pi 64-bit Lite | 1 | Haute | DOING | Codex + Owner | S1 | Démarrage validé, checklist d’installation prête |
| INF-02 | Configurer SSH + sécurité de base | 1 | Haute | TODO | Codex + Owner | S1 | Clés SSH, fail2ban |
| INF-03 | Installer Docker + Compose | 1 | Haute | TODO | Codex + Owner | S1 | Vérifier versions |
| INF-04 | Mettre en place reverse proxy + HTTPS | 1 | Haute | TODO | Codex + Owner | S2 | Domaine + certificats |
| INF-05 | Activer sauvegarde chiffrée quotidienne | 1 | Haute | TODO | Codex + Owner | S2 | Règle 3‑2‑1 |
| DOC-01 | Rédiger la doc complète d'installation Raspberry Pi + Docker | 1 | Haute | DONE | Codex | 2026-04-15 | Guide pas à pas + runbook ajoutés |
| MVP-01 | Créer pages Accueil/Tarifs/Galerie/Contact | 2 | Haute | TODO | À définir | S3 | Contenus initiaux |
| MVP-02 | Configurer prestations et agenda réservation | 2 | Haute | TODO | À définir | S3 | Durées + buffers |
| MVP-03 | Activer emails de confirmation RDV | 2 | Moyenne | TODO | À définir | S4 | Template personnalisé |
| ADM-01 | Structurer fiches clientes CRM | 3 | Moyenne | TODO | À définir | S5 | Notes + historique |
| ADM-02 | Configurer devis/facture + acomptes | 3 | Haute | TODO | À définir | S5 | Mentions légales |
| ADM-03 | Publier pages légales + consentement RGPD | 3 | Haute | TODO | À définir | S6 | Conformité |
| PAY-01 | Intégrer Stripe/PayPal | 4 | Moyenne | TODO | À définir | S7 | Sandbox puis prod |
| PAY-02 | Ajouter mini boutique produits entretien | 4 | Moyenne | TODO | À définir | S8 | Click & collect |
| OPS-01 | Documenter procédure de restauration complète | 5 | Haute | TODO | À définir | S9 | Guide pas à pas |
| OPS-02 | Réaliser test de reprise après panne | 5 | Haute | TODO | À définir | S9 | Objectif < 1h |

---

## Journal d’avancement

> À compléter à chaque session de travail.

| Date | Responsable | Tâches traitées | Résultat | Prochaines actions |
|---|---|---|---|---|
| 2026-04-09 | Codex | Structuration documentaire initiale | README amélioré + roadmap + suivi créés | Valider l’outil cible (WordPress/Odoo), puis démarrer INF-01 |
| 2026-04-09 | Codex | Lancement exécution Phase 1 + mise à jour du suivi | Plan de sprint S1 ajouté, INF-01 passé en DOING, responsables clarifiés | Exécuter INF-01 puis enchaîner INF-02 |
| 2026-04-10 | Codex | ARC-01 audit code complet + mise à jour doc | Incohérences d’architecture identifiées (Next.js + WordPress en parallèle), README/ROADMAP/SUIVI alignés | Exécuter ARC-02 (décision d’architecture), puis ARC-03 |
| 2026-04-15 | Codex | Structuration déploiement Pi + stack Docker profils | `docker-compose.yml` réorganisé (`next`/`wordpress`), README refondu, guide d'installation complet ajouté | Valider la cible unique définitive puis démarrer INF-02 en réel sur le Pi |

---

## Points de blocage

- **Blocage principal** : décision propriétaire requise sur la pile applicative cible (`WordPress` vs `Next.js`).
- **En attente d’infra** : disponibilité du Raspberry Pi 5 + SSD pour exécuter INF-01 en conditions réelles.

---

## Cadence recommandée

- **Revue hebdomadaire (30 min)** : mise à jour statuts + priorités
- **Revue mensuelle (60 min)** : bilan KPI + ajustements roadmap
