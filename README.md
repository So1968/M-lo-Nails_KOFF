# Melo Nails — Stack WordPress auto-hébergée (Docker)

Ce dépôt est désormais standardisé autour de **WordPress + MariaDB + Nginx** pour un déploiement simple sur Raspberry Pi 5.

## Stack retenue

- **CMS** : WordPress (image officielle)
- **Base de données** : MariaDB
- **Reverse proxy** : Nginx
- **Containerisation** : Docker Compose
- **Stockage persistant** : volumes dédiés (DB, core WordPress, uploads images, certificats et logs Nginx)

## Démarrage rapide

1. Copier l’environnement :

```bash
cp .env.example .env
```

2. Remplacer **tous** les mots de passe par des secrets robustes (32+ caractères).

3. Lancer la stack :

```bash
docker compose up -d
```

4. Ouvrir :

- Site WordPress : `http://IP_DU_SERVEUR`

## Volumes persistants

- `db_data` : données MariaDB
- `wp_core` : fichiers WordPress
- `wp_uploads` : médias (`wp-content/uploads`)
- `nginx_certs` : certificats TLS
- `nginx_logs` : logs reverse proxy

## Profil archive (optionnel)

Une ancienne piste Next.js reste disponible en archive technique :

```bash
docker compose --profile next-archive up -d --build
```

## Documentation

- Décision d’architecture : [`docs/DECISION_ARCHITECTURE.md`](docs/DECISION_ARCHITECTURE.md)
- Installation Raspberry Pi : [`docs/INSTALLATION_RASPBERRY_PI.md`](docs/INSTALLATION_RASPBERRY_PI.md)
- Roadmap : [`docs/ROADMAP.md`](docs/ROADMAP.md)
- Suivi : [`docs/SUIVI_TACHES.md`](docs/SUIVI_TACHES.md)
