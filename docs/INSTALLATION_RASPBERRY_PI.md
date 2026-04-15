# Installation complète sur Raspberry Pi 5 (Docker)

Ce guide décrit une procédure **de bout en bout** pour déployer ce dépôt sur un Raspberry Pi 5 avec Docker.

---

## 1) Pré-requis matériel et réseau

- Raspberry Pi 5 (4 Go RAM minimum, 8 Go recommandé)
- SSD USB 3 recommandé (éviter microSD seule en production)
- Raspberry Pi OS Lite 64-bit
- Connexion internet stable
- Domaine (recommandé pour HTTPS)

---

## 2) Préparation de Raspberry Pi OS

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

Après redémarrage :

```bash
sudo timedatectl set-timezone Europe/Paris
sudo apt install -y ca-certificates curl git ufw fail2ban
```

### Sécurisation minimale

```bash
# pare-feu
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# fail2ban
sudo systemctl enable --now fail2ban
```

---

## 3) Installation Docker + Compose Plugin

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
newgrp docker

docker --version
docker compose version
```

---

## 4) Récupération du dépôt

```bash
git clone <URL_DU_DEPOT> melo-nails
cd melo-nails
cp .env.example .env
```

> Ajuster les mots de passe dans `.env` si vous activez le profil WordPress.

---

## 5) Choisir le mode de lancement

Le dépôt fournit **2 profils Docker** :

- `next` : application Next.js (recommandé)
- `wordpress` : alternative WordPress + MariaDB

### Option A (recommandée) : Next.js

```bash
docker compose --profile next up -d --build
```

Services actifs :
- `proxy` (Nginx Proxy Manager)
- `app_next` (application Next.js)

### Option B : WordPress

```bash
docker compose --profile wordpress up -d
```

Services actifs :
- `proxy`
- `db` (MariaDB)
- `app_wordpress` (WordPress)

---

## 6) Configuration du reverse proxy (Nginx Proxy Manager)

1. Ouvrir `http://IP_DU_PI:81`
2. Se connecter avec les identifiants initiaux NPM (à changer immédiatement)
3. Ajouter un **Proxy Host** :
   - Domaine : `app.votre-domaine.tld`
   - Scheme : `http`
   - Forward Hostname :
     - `app_next` (profil `next`) et port `3000`, ou
     - `app_wordpress` (profil `wordpress`) et port `80`
4. Activer SSL + Let’s Encrypt + force SSL + HTTP/2

---

## 7) Commandes d’exploitation (runbook)

### État des services

```bash
docker compose ps
docker compose logs -f --tail=200
```

### Mise à jour du dépôt + redéploiement

```bash
git pull
docker compose --profile next up -d --build
```

### Arrêt / redémarrage

```bash
docker compose stop
docker compose start
```

### Redémarrer un service

```bash
docker compose restart app_next
```

### Nettoyage images non utilisées

```bash
docker image prune -f
```

---

## 8) Sauvegardes minimales recommandées

À sauvegarder :
- volumes Docker (`proxy_data`, `proxy_letsencrypt`, et si WordPress: `db_data`, `wp_data`)
- `.env`
- dépôt Git (source)

Exemple backup volume (tar) :

```bash
docker run --rm -v proxy_data:/volume -v "$PWD":/backup alpine \
  tar czf /backup/backup_proxy_data_$(date +%F).tar.gz -C /volume .
```

---

## 9) Vérifications post-installation

- `docker compose ps` : tous les conteneurs sont `Up`
- Accès `http://IP_DU_PI:81` OK
- Domaine accessible en HTTPS sans alerte certificat
- La page d’accueil de l’application répond correctement

---

## 10) Checklist production (courte)

- [ ] Mots de passe `.env` robustes
- [ ] SSH par clé uniquement
- [ ] Sauvegarde planifiée (quotidienne)
- [ ] Test de restauration mensuel
- [ ] Mise à jour système mensuelle

