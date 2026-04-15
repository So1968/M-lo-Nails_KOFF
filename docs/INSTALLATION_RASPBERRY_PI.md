# Installation complète sur Raspberry Pi 5 (WordPress + Docker)

Ce guide décrit une procédure **de bout en bout** pour déployer Melo Nails sur Raspberry Pi 5 avec la stack standard : **WordPress + MariaDB + Nginx**.

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
sudo apt install -y ca-certificates curl git ufw fail2ban openssl
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

## 4) Récupération du dépôt + configuration des secrets

```bash
git clone <URL_DU_DEPOT> melo-nails
cd melo-nails
cp .env.example .env
```

Générer des mots de passe forts (32+ caractères) :

```bash
openssl rand -base64 36
```

Renseigner ensuite dans `.env` :
- `DB_ROOT_PASSWORD`
- `DB_PASSWORD`

---

## 5) Lancement de la stack WordPress

```bash
docker compose up -d
```

Services actifs :
- `nginx` (reverse proxy)
- `wordpress` (CMS)
- `db` (MariaDB)

Vérifier l’état :

```bash
docker compose ps
```

---

## 6) Configuration reverse proxy Nginx

Le fichier actif est :
- `infra/nginx/conf.d/default.conf`

Le proxy est préconfiguré pour router le trafic vers `wordpress:80`.

### HTTPS (recommandé en production)

- Monter vos certificats dans le volume `nginx_certs`
- Adapter la conf Nginx pour écouter en `443 ssl`
- Rediriger `80 -> 443`

---

## 7) Installation WordPress (premier boot)

1. Ouvrir `http://IP_DU_PI`
2. Suivre l’assistant WordPress
3. Créer un compte admin avec mot de passe robuste
4. Forcer le HTTPS dans les réglages une fois TLS activé

---

## 8) Commandes d’exploitation (runbook)

### Logs

```bash
docker compose logs -f --tail=200
```

### Mise à jour de la stack

```bash
git pull
docker compose pull
docker compose up -d
```

### Redémarrage

```bash
docker compose restart
```

### Nettoyage images inutilisées

```bash
docker image prune -f
```

---

## 9) Sauvegardes minimales recommandées

À sauvegarder :
- `db_data`
- `wp_core`
- `wp_uploads`
- `.env`

Exemple backup d’un volume :

```bash
docker run --rm -v wp_uploads:/volume -v "$PWD":/backup alpine \
  tar czf /backup/backup_wp_uploads_$(date +%F).tar.gz -C /volume .
```

---

## 10) Checklist production

- [ ] Mots de passe `.env` robustes (32+)
- [ ] SSH par clé uniquement
- [ ] HTTPS actif (certificat valide)
- [ ] Sauvegarde planifiée (quotidienne)
- [ ] Test de restauration mensuel
- [ ] Mise à jour système mensuelle
