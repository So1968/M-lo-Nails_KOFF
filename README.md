# 💅 Melo Nails — Plateforme auto-hébergée (Raspberry Pi + Docker)

Projet de plateforme pour une activité de prothésie ongulaire / esthétique, avec un déploiement ciblé sur **Raspberry Pi 5**.

## Pourquoi ce dépôt ?

Objectif : disposer d'une base propre pour lancer rapidement une plateforme locale/auto-hébergée avec :

- une vitrine moderne,
- un socle Docker exploitable,
- une base documentaire claire pour l'installation et l'exploitation.

---

## État actuel (analyse du dépôt)

Le dépôt contient **deux pistes techniques** :

1. **Piste principale recommandée : Next.js**
   - code dans `app/`
   - Dockerfile de build/production déjà présent
2. **Piste alternative : WordPress + MariaDB**
   - disponible via Docker Compose pour validation métier rapide

Pour éviter la confusion, le `docker-compose.yml` est maintenant organisé par **profils** :

- `next` (recommandé)
- `wordpress` (alternative)

---

## Stack technique

### Application
- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion

### Infrastructure Docker
- Nginx Proxy Manager (reverse proxy + TLS)
- App Next.js (profil `next`)
- WordPress + MariaDB (profil `wordpress`)

---

## Démarrage rapide

```bash
git clone <URL_DU_DEPOT> melo-nails
cd melo-nails
cp .env.example .env
```

### Lancer la piste Next.js (recommandée)

```bash
docker compose --profile next up -d --build
```

### Lancer la piste WordPress (alternative)

```bash
docker compose --profile wordpress up -d
```

Interface Nginx Proxy Manager :
- `http://<IP_DU_PI>:81`

---

## Documentation

- **Guide complet Raspberry Pi** : [`docs/INSTALLATION_RASPBERRY_PI.md`](docs/INSTALLATION_RASPBERRY_PI.md)
- Feuille de route : [`docs/ROADMAP.md`](docs/ROADMAP.md)
- Suivi des tâches : [`docs/SUIVI_TACHES.md`](docs/SUIVI_TACHES.md)

---

## Commandes utiles

```bash
# État des conteneurs
docker compose ps

# Logs
docker compose logs -f --tail=200

# Redéploiement Next.js après update
git pull
docker compose --profile next up -d --build
```

---

## Recommandation d'architecture

Pour ce dépôt, la trajectoire la plus cohérente est de **prioriser Next.js** puis d'ajouter progressivement les modules métier (réservation, CRM, facturation, stock). La piste WordPress reste disponible comme solution temporaire de comparaison.
