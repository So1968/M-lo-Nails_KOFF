'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CalendarDays,
  Clock3,
  Instagram,
  MapPin,
  Phone,
  Sparkles,
  Star,
  WandSparkles
} from 'lucide-react';

const tabs = [
  { id: 'prestations', label: 'Prestations' },
  { id: 'tarifs', label: 'Tarifs' },
  { id: 'reservation', label: 'Réserver' }
] as const;

const highlightedServices = [
  {
    title: 'Gainage',
    details: 'Pour renforcer l’ongle naturel avec un rendu net, propre et élégant.',
    price: 'À partir de 25€'
  },
  {
    title: 'Pose gel',
    details: 'Une pose soignée et durable pour un résultat harmonieux et féminin.',
    price: 'À partir de 25€'
  },
  {
    title: 'Capsules américaines / Gel X',
    details: 'Pour des poses plus marquées, modernes et créatives.',
    price: 'À partir de 30€'
  },
  {
    title: 'French & décorations',
    details: 'French lumineuse, strass, effets et détails pour personnaliser la pose.',
    price: 'Supplément selon création'
  }
];

const allServices = [
  'Semi-permanent sur ongle naturel',
  'Pose gel',
  'Gainage',
  'Capsules américaines / Gel X',
  'Remplissage',
  'Dépose',
  'French',
  'Nail art',
  'Décorations, strass et effets',
  'Réparation d’ongle'
];

const prices = [
  'Semi-permanent sur ongle naturel — à partir de 20€',
  'Pose gel — à partir de 25€',
  'Gainage — à partir de 25€',
  'Capsules américaines / Gel X — à partir de 30€'
];

const galleryImages = [
  {
    src: 'https://source.unsplash.com/featured/900x1200/?nails,manicure,beige',
    alt: 'Modèle d’ongles beige et soigné',
    label: 'Élégance nude'
  },
  {
    src: 'https://source.unsplash.com/featured/901x1200/?french,manicure,nails',
    alt: 'Modèle d’ongles french',
    label: 'French lumineuse'
  },
  {
    src: 'https://source.unsplash.com/featured/902x1200/?gel,nails,beauty',
    alt: 'Modèle d’ongles gel',
    label: 'Pose gel'
  },
  {
    src: 'https://source.unsplash.com/featured/903x1200/?nailart,hands,beauty',
    alt: 'Modèle d’ongles nail art',
    label: 'Détails créatifs'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'prestations' | 'tarifs' | 'reservation'>('prestations');

  const tabContent = useMemo(() => {
    if (activeTab === 'prestations') {
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {highlightedServices.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.5rem] border border-[#e8ddd1] bg-white p-5 shadow-[0_12px_30px_rgba(120,98,73,0.07)]"
            >
              <h3 className="text-xl font-semibold text-stone-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{service.details}</p>
              <p className="mt-4 inline-flex rounded-full bg-[#f3e9dd] px-4 py-1 text-sm font-semibold text-stone-800">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'tarifs') {
      return (
        <div className="grid gap-3">
          {prices.map((price) => (
            <div
              key={price}
              className="rounded-[1.25rem] border border-[#ece3d8] bg-white px-4 py-4 text-sm text-stone-700 shadow-[0_10px_24px_rgba(120,98,73,0.05)]"
            >
              {price}
            </div>
          ))}
          <p className="pt-2 text-sm leading-relaxed text-stone-500">
            Les tarifs peuvent varier selon la longueur, le niveau de détail, les décorations et le temps
            de réalisation.
          </p>
        </div>
      );
    }

    return (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[1.5rem] border border-[#e8ddd1] bg-white p-5 shadow-[0_12px_30px_rgba(120,98,73,0.07)]">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Fonctionnement</p>
          <div className="mt-4 grid gap-3 text-sm text-stone-700">
            <div className="rounded-2xl border border-[#ece3d8] bg-[#fcfaf7] px-4 py-3">
              Sur rendez-vous uniquement
            </div>
            <div className="rounded-2xl border border-[#ece3d8] bg-[#fcfaf7] px-4 py-3">Lundi à vendredi</div>
            <div className="rounded-2xl border border-[#ece3d8] bg-[#fcfaf7] px-4 py-3">8h–12h / 14h–19h</div>
            <div className="rounded-2xl border border-[#ece3d8] bg-[#fcfaf7] px-4 py-3">1h30 à 3h selon la pose</div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-[#e8ddd1] bg-[#f3e9dd] p-5 shadow-[0_12px_30px_rgba(120,98,73,0.07)]">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Réservation</p>
          <h3 className="mt-3 text-xl font-semibold text-stone-900">Simple et encadrée</h3>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            La cliente choisit son créneau, peut modifier son rendez-vous ou l’annuler dans le délai prévu.
          </p>
          <div className="mt-4 grid gap-3 text-sm text-stone-700">
            <div className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3">Acompte demandé</div>
            <div className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3">Annulation 24h à l’avance</div>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#"
              className="rounded-full bg-[#a88467] px-6 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
            >
              Réserver en ligne
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-[#d9ccbf] bg-white px-6 py-3 text-center text-sm font-semibold text-stone-800 transition hover:bg-[#f8f3ed]"
            >
              Voir les contacts
            </Link>
          </div>
        </div>
      </div>
    );
  }, [activeTab]);

  return (
    <main className="overflow-hidden bg-[#f7f1ea] text-stone-800">
      <section className="relative isolate px-4 pb-14 pt-16 sm:px-6 md:pb-20 md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(245,237,227,0.88)_45%,_rgba(234,223,211,0.9)_100%)]" />
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center"
        >
          <div className="rounded-[2rem] border border-[#e8ddd1] bg-white/88 p-7 shadow-[0_25px_80px_rgba(120,98,73,0.12)] backdrop-blur sm:p-9 md:p-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#e7dacc] bg-[#f8f3ed] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-stone-600 sm:text-sm">
              <Sparkles className="h-4 w-4" /> MÉLO NAIL • NEYRON • PRÈS DE LYON
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
              Onglerie créative, chic et soignée
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
              Des poses élégantes, un style doux et raffiné, et une présentation pensée pour aller à
              l’essentiel : voir, choisir, réserver.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="#galerie"
                className="rounded-full bg-[#a88467] px-7 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
              >
                Voir les réalisations
              </Link>
              <Link
                href="#bloc-principal"
                className="rounded-full border border-[#d9ccbf] bg-white px-7 py-3 text-center text-sm font-semibold text-stone-800 transition hover:bg-[#f8f3ed]"
              >
                Découvrir les prestations
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {galleryImages.slice(0, 2).map((image, index) => (
              <motion.figure
                key={`${image.label}-${index}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`overflow-hidden rounded-[1.75rem] border border-[#e8ddd1] bg-white shadow-[0_18px_40px_rgba(120,98,73,0.12)] ${
                  index === 0 ? 'translate-y-4' : ''
                }`}
              >
                <img src={image.src} alt={image.alt} className="h-52 w-full object-cover" />
                <figcaption className="bg-[#f8f3ed] px-4 py-3 text-sm font-medium text-stone-700">
                  {image.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="rounded-[2rem] border border-[#e8ddd1] bg-white/88 p-6 shadow-[0_20px_60px_rgba(120,98,73,0.08)] sm:p-7">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#a88467]">Présentation</p>
          <h2 className="mt-3 text-3xl font-semibold text-stone-900">Mélo Nail</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-stone-600">
            Je m’appelle Mélodie Blanco, fondatrice de Mélo Nail. Passionnée par l’onglerie, j’aime le
            travail minutieux, créatif et soigné. Mon univers mêle originalité, élégance et tendance,
            avec l’envie de proposer des ongles qui font plaisir et dans lesquels chaque cliente se sent
            bien.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.25rem] border border-[#ece3d8] bg-[#f9f5f0] px-4 py-4 text-sm text-stone-700">
              Créative, tendance, élégante
            </div>
            <div className="rounded-[1.25rem] border border-[#ece3d8] bg-[#f9f5f0] px-4 py-4 text-sm text-stone-700">
              Féminin mais sobre
            </div>
            <div className="rounded-[1.25rem] border border-[#ece3d8] bg-[#f9f5f0] px-4 py-4 text-sm text-stone-700">
              Photos → prix → réservation
            </div>
          </div>
        </div>
      </section>

      <section id="bloc-principal" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-8 flex items-center gap-3">
          <WandSparkles className="h-5 w-5 text-[#a88467]" />
          <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">Essentiel</h2>
        </div>

        <div className="rounded-[2rem] border border-[#e8ddd1] bg-[#fcfaf7] p-4 shadow-[0_18px_50px_rgba(120,98,73,0.08)] sm:p-5">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-[#a88467] text-white shadow-[0_10px_24px_rgba(120,98,73,0.16)]'
                      : 'border border-[#e2d6ca] bg-white text-stone-700 hover:bg-[#f6efe7]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
              >
                {tabContent}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] border border-[#e8ddd1] bg-white/88 p-6 shadow-[0_18px_50px_rgba(120,98,73,0.06)] sm:p-7">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Toutes les prestations</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {allServices.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-[#ece3d8] bg-white px-4 py-3 text-sm text-stone-700"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="galerie" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-20">
        <div className="mb-8 flex items-center gap-3">
          <Star className="h-5 w-5 text-[#a88467]" />
          <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">Réalisations</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.figure
              key={`${image.label}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group overflow-hidden rounded-[1.5rem] border border-[#e8ddd1] bg-white shadow-[0_14px_36px_rgba(120,98,73,0.08)]"
            >
              <div className="overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="bg-[#f8f3ed] px-4 py-3">
                <span className="text-sm font-medium text-stone-700">{image.label}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <footer id="contact" className="border-t border-[#e8ddd1] bg-[#f0e5d8] px-4 py-10 sm:px-6 md:py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_auto] md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-semibold text-stone-900">Mélo Nail</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-600">
              Onglerie créative à Neyron, près de Lyon. Un univers chic, doux et soigné, pensé pour être
              simple à comprendre et agréable à parcourir.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-stone-700">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Neyron • 01700 • près de Lyon
            </span>
            <span className="inline-flex items-center gap-2">
              <Instagram className="h-4 w-4" /> Instagram
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> Téléphone en complément si besoin
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" /> Réservation via le site
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4" /> Lundi à vendredi • 8h–12h / 14h–19h
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
