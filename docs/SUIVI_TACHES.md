# Suivi des tâches — Melo Nails

> Dernière mise à jour : **2026-04-10**

## Légende

- `TODO` : à faire
- `DOING` : en cours
- `DONE` : terminé
- `BLOCKED` : bloqué

---

## Sprint actif — MVP Réservation (Semaine en cours)

1. **MVP-01** — Structurer pages publiques (Accueil/Tarifs/Galerie/Contact)
2. **MVP-02** — Définir catalogue prestations + durées + buffers
3. **MVP-03** — Intégrer flux de réservation (formulaire + créneaux)
4. **MVP-04** — Ajouter confirmation email cliente
5. **OPS-01** — Finaliser base infra Pi (HTTPS + sauvegarde)

---

## Backlog priorisé

| ID | Tâche | Domaine | Priorité | Statut | Responsable | Échéance | Notes |
|---|---|---|---|---|---|---|---|
| ARC-01 | Audit code + docs | Architecture | Haute | DONE | Codex | 2026-04-10 | Écarts identifiés |
| ARC-02 | Décision architecture cible | Architecture | Haute | DONE | Owner + Codex | 2026-04-10 | Next.js validé |
| ARC-03 | Nettoyage piste non retenue (WordPress) | Architecture | Moyenne | DOING | Codex + Owner | 2026-04-13 | À clôturer |
| UI-01 | Home premium mobile-first | Front | Haute | DONE | Codex | 2026-04-10 | Hero + sections + footer |
| UI-02 | Composants réutilisables (cards, sections) | Front | Moyenne | TODO | Codex | 2026-04-14 | Préparer scale pages |
| MVP-01 | Pages Tarifs/Galerie/Contact détaillées | Produit | Haute | TODO | Codex + Owner | 2026-04-15 | Contenu à valider |
| MVP-02 | Mapping prestations + durées | Produit | Haute | TODO | Owner | 2026-04-14 | Base nécessaire réservation |
| MVP-03 | Flux réservation fonctionnel | Produit | Haute | TODO | Codex | 2026-04-18 | UI + validation |
| MVP-04 | Email de confirmation RDV | Produit | Moyenne | TODO | Codex | 2026-04-19 | Template transactionnel |
| INF-01 | Installation OS Pi 64-bit Lite | Infra | Haute | DOING | Owner | S1 | Matériel requis |
| INF-02 | SSH + hardening + fail2ban | Infra | Haute | TODO | Owner | S1 | Dépend INF-01 |
| INF-03 | Docker + Compose + monitoring | Infra | Haute | TODO | Owner | S1 | Dépend INF-01 |
| INF-04 | Reverse proxy + HTTPS | Infra | Haute | TODO | Owner | S2 | Dépend DNS |
| INF-05 | Sauvegarde chiffrée quotidienne | Infra | Haute | TODO | Owner | S2 | Politique 3-2-1 |

---

## Journal d’avancement

| Date | Responsable | Travaux | Résultat |
|---|---|---|---|
| 2026-04-09 | Codex | Structuration documentaire initiale | README + roadmap + suivi créés |
| 2026-04-10 | Codex | Audit code + alignement documentation | Architecture Next.js actée |
| 2026-04-10 | Codex | Implémentation home premium + Dockerfile optimisé | Socle visuel/tech livré |
| 2026-04-10 | Codex | Mise à jour complète des fichiers d’avancement | Roadmap et backlog réalignés sur le MVP réservation |

---

## Points de blocage

- Aucun blocage technique majeur sur le front.
- Blocage opérationnel : dépendance au matériel Raspberry Pi pour la partie infra (INF-01 à INF-05).

---

## Cadence recommandée

- **Hebdo (30 min)** : revue backlog + statut sprint
- **Mensuel (60 min)** : bilan KPI + priorisation roadmap
