# Suivi des tâches — Melo Nails

> Dernière mise à jour : **2026-04-15**

## Légende

- `TODO` : à faire
- `DOING` : en cours
- `DONE` : terminé
- `BLOCKED` : bloqué

---

## Sprint actif — Standardisation WordPress (Semaine en cours)

1. **ARC-01** — Basculer la doc sur stack WordPress
2. **ARC-02** — Standardiser docker-compose (wp + db + nginx)
3. **SEC-01** — Imposer politique mots de passe forts
4. **OPS-01** — Séparer stockage des médias (`wp_uploads`)

---

## Backlog priorisé

| ID | Tâche | Domaine | Priorité | Statut | Responsable | Échéance | Notes |
|---|---|---|---|---|---|---|---|
| ARC-01 | Décision architecture cible | Architecture | Haute | DONE | Owner + Codex | 2026-04-15 | WordPress validé |
| ARC-02 | Refonte docker-compose | Architecture | Haute | DONE | Codex | 2026-04-15 | Stack simplifiée |
| ARC-03 | Nettoyage documentation | Architecture | Haute | DONE | Codex | 2026-04-15 | README + docs alignés |
| SEC-01 | Politique mots de passe robustes | Sécurité | Haute | DOING | Owner | 2026-04-16 | Secrets à renseigner dans `.env` |
| SEC-02 | Activer HTTPS Nginx | Sécurité | Haute | TODO | Owner | 2026-04-17 | Certificats à monter |
| OPS-01 | Plan de sauvegarde 3-2-1 | Ops | Haute | TODO | Owner | 2026-04-18 | Inclure `db_data`, `wp_core`, `wp_uploads` |
| MVP-01 | Structurer pages vitrine | Produit | Haute | TODO | Owner + Codex | 2026-04-20 | Contenus à valider |
| MVP-02 | Installer module réservation | Produit | Haute | TODO | Owner | 2026-04-22 | Scénarios RDV |
| ECO-01 | Préparer WooCommerce | Produit | Moyenne | TODO | Owner | 2026-04-30 | MVP e-commerce |

---

## Journal d’avancement

| Date | Responsable | Travaux | Résultat |
|---|---|---|---|
| 2026-04-15 | Codex | Reprise architecture et documentation | Stack WordPress standard validée |
| 2026-04-15 | Codex | Refonte `docker-compose.yml` | Services `nginx`, `wordpress`, `db` opérationnels |
| 2026-04-15 | Codex | Ajout conf Nginx + volumes persistants | Proxy et stockage images structurés |

---

## Points de blocage

- Aucun blocage technique sur la stack Docker.
- Bloquant opérationnel : provisionner certificats TLS et DNS final.

---

## Cadence recommandée

- **Hebdo (30 min)** : revue backlog + sécurité + sauvegardes
- **Mensuel (60 min)** : test restauration + revue plugins WordPress
