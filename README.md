# Melo Nails — Site vitrine & e-commerce (Next.js)

Socle applicatif moderne pour **Melo Nails**, pensé pour être auto-hébergé sur **Raspberry Pi 5** via Docker.

## Stack retenue

- **Framework** : Next.js (App Router) + TypeScript
- **UI** : Tailwind CSS v4
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Containerisation** : Docker multi-stage (ARM64 friendly)

## État d’avancement (2026-04-10)

- ✅ Architecture validée sur Next.js
- ✅ Home premium mobile-first livrée
- ⏳ MVP Réservation en préparation
- ⏳ E-commerce + back-office à implémenter

## Expérience visuelle

La home est conçue en mode **mobile-first** avec une direction artistique premium :

- Hero plein écran avec CTA vibrant
- Cartes prestations en glassmorphism
- Galerie asymétrique type Pinterest
- Section “La Créatrice”
- Footer orienté conversion (contact + prise de RDV)

## Structure du projet

```text
melo-nails/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ docs/
│  ├─ ROADMAP.md
│  └─ SUIVI_TACHES.md
├─ Dockerfile
├─ docker-compose.yml
└─ package.json
```

## Démarrage local

```bash
npm install
npm run dev
```

Build production :

```bash
npm run lint
npm run build
npm run start
```

## Docker (production)

```bash
docker build -t melo-nails:latest .
docker run --rm -p 3000:3000 melo-nails:latest
```

## Documentation de pilotage

- Roadmap projet : [`docs/ROADMAP.md`](docs/ROADMAP.md)
- Suivi opérationnel : [`docs/SUIVI_TACHES.md`](docs/SUIVI_TACHES.md)
