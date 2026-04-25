'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  Clock3,
  Instagram,
  MapPin,
  Palette,
  Phone,
  Sparkles,
  Star,
  WandSparkles
} from 'lucide-react';

const highlightedServices = [
  {
    title: 'Gainage',
    details:
      'Une prestation idéale pour renforcer l’ongle naturel avec un rendu net, élégant et soigné.',
    price: 'À partir de 25€'
  },
  {
    title: 'Pose gel',
    details:
      'Une pose travaillée avec précision pour un résultat harmonieux, féminin et durable.',
    price: 'À partir de 25€'
  },
  {
    title: 'Capsules américaines / Gel X',
    details:
      'Pour des poses plus affirmées, modernes et stylées, avec une vraie liberté créative.',
    price: 'À partir de 30€'
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

const galleryCards = [
  'Élégance nude',
  'French lumineuse',
  'Gel X tendance',
  'Détails créatifs',
  'Strass raffinés',
  'Pose soignée'
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f7f1ea] text-stone-800">
      <section className="relative isolate px-4 pb-16 pt-20 sm:px-6 md:pb-24 md:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(245,237,227,0.88)_45%,_rgba(234,223,211,0.9)_100%)]" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"
        >
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[0_25px_80px_rgba(120,98,73,0.12)] backdrop-blur sm:p-9 md:p-11">
            <p className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-[#f6efe7] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-stone-600 sm:text-sm">
              <Sparkles className="h-4 w-4" /> Mélo Nail • Neyron • 01700
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
              Onglerie créative, chic et soignée <span className="text-[#a88467]">près de Lyon</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
              Des poses élégantes, des détails raffinés et un univers doux et lumineux pour mettre en
              valeur chaque style avec précision.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="#reservation"
                className="rounded-full bg-stone-900 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="#galerie"
                className="rounded-full border border-stone-300 bg-white px-7 py-3 text-center text-sm font-semibold text-stone-800 transition hover:bg-stone-100"
              >
                Voir les réalisations
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/70 bg-[#efe2d4] p-6 shadow-[0_20px_60px_rgba(120,98,73,0.12)]">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">L’univers Mélo Nail</p>
              <p className="mt-3 text-2xl font-semibold text-stone-900">Féminin, sobre, original et raffiné</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Une esthétique beige et blanche, minimaliste et élégante, pensée pour mettre le résultat
                final au centre.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-[0_16px_40px_rgba(120,98,73,0.08)]">
                <Palette className="h-5 w-5 text-[#a88467]" />
                <p className="mt-3 text-lg font-semibold text-stone-900">Style visuel</p>
                <p className="mt-2 text-sm text-stone-600">Doux, chic, luxueux et minimaliste.</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-[0_16px_40px_rgba(120,98,73,0.08)]">
                <Star className="h-5 w-5 text-[#a88467]" />
                <p className="mt-3 text-lg font-semibold text-stone-900">Ce qui compte</p>
                <p className="mt-2 text-sm text-stone-600">Voir les clientes repartir heureuses du résultat.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20"
      >
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="rounded-[2rem] border border-[#e8ddd1] bg-white/85 p-7 shadow-[0_20px_60px_rgba(120,98,73,0.08)] sm:p-8">
            <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[#a88467]">
              <WandSparkles className="h-4 w-4" /> Présentation
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 md:text-4xl">Mélo Nail</h2>
            <p className="mt-5 leading-relaxed text-stone-600">
              Je m’appelle Mélodie Blanco, fondatrice de Mélo Nail. Passionnée par l’onglerie, j’aime le
              travail minutieux, créatif et soigné. Mon univers mêle originalité, élégance et tendance,
              avec l’envie de proposer des ongles qui font plaisir et dans lesquels chaque cliente se sent
              bien.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[#e8ddd1] bg-[#f3e9dd] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Positionnement</p>
              <p className="mt-3 text-lg font-semibold text-stone-900">Créative, tendance, élégante</p>
              <p className="mt-2 text-sm text-stone-600">
                Des poses originales et soignées, avec une vraie sensibilité au détail.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[#e8ddd1] bg-[#f9f5f0] p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Ambiance</p>
              <p className="mt-3 text-lg font-semibold text-stone-900">Douce et professionnelle</p>
              <p className="mt-2 text-sm text-stone-600">
                Un accueil sur rendez-vous dans un cadre clair, rassurant et organisé.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[#e8ddd1] bg-[#f9f5f0] p-6 sm:col-span-2">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Objectif</p>
              <p className="mt-3 text-lg font-semibold text-stone-900">Photos, prix, puis réservation</p>
              <p className="mt-2 text-sm text-stone-600">
                Le site est pensé pour montrer le style de Mélo Nail, situer les prestations et permettre
                une prise de rendez-vous simple.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="prestations"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20"
      >
        <div className="mb-10 flex items-center gap-3">
          <WandSparkles className="h-5 w-5 text-[#a88467]" />
          <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">Prestations mises en avant</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {highlightedServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[2rem] border border-[#e8ddd1] bg-white/90 p-6 shadow-[0_18px_50px_rgba(120,98,73,0.08)]"
            >
              <h3 className="text-2xl font-semibold text-stone-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{service.details}</p>
              <p className="mt-5 inline-flex rounded-full bg-[#f3e9dd] px-4 py-1 text-sm font-semibold text-stone-800">
                {service.price}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 rounded-[2rem] border border-[#e8ddd1] bg-[#fcfaf7] p-6 sm:p-7">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">Toutes les prestations</p>
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
      </motion.section>

      <section id="galerie" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 flex items-center gap-3">
          <Star className="h-5 w-5 text-[#a88467]" />
          <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">Réalisations</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryCards.map((label, index) => (
            <motion.div
              key={`${label}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-[#e8ddd1] bg-[linear-gradient(160deg,#f7efe6,#eadccf)] p-4 shadow-[0_14px_36px_rgba(120,98,73,0.08)]"
            >
              <div className="flex h-64 items-end rounded-[1.25rem] border border-white/60 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.92),_rgba(244,233,221,0.82)_55%,_rgba(227,212,198,0.92)_100%)] p-4 transition duration-500 group-hover:scale-[1.01]">
                <span className="rounded-full bg-white/85 px-3 py-1 text-xs uppercase tracking-[0.22em] text-stone-600">
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20"
      >
        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#e8ddd1] bg-white/90 p-7 shadow-[0_20px_60px_rgba(120,98,73,0.08)] sm:p-8">
            <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[#a88467]">
              <CalendarDays className="h-4 w-4" /> Tarifs de départ
            </p>
            <div className="mt-5 space-y-3">
              {prices.map((price) => (
                <div
                  key={price}
                  className="rounded-2xl border border-[#ece3d8] bg-[#fcfaf7] px-4 py-3 text-sm text-stone-700"
                >
                  {price}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-stone-500">
              Les tarifs peuvent varier selon la longueur, le niveau de détail, les décorations et le
              temps de réalisation.
            </p>
          </div>

          <div
            id="reservation"
            className="rounded-[2rem] border border-[#e8ddd1] bg-[#f3e9dd] p-7 shadow-[0_20px_60px_rgba(120,98,73,0.08)] sm:p-8"
          >
            <p className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[#a88467]">
              <Clock3 className="h-4 w-4" /> Réservation
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900">Prendre rendez-vous simplement</h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              Les rendez-vous se font uniquement sur réservation. La cliente choisit son créneau, peut
              modifier son rendez-vous ou l’annuler dans le délai prévu.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-stone-700 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">Lundi à vendredi</div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">8h–12h / 14h–19h</div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">1h30 à 3h selon la pose</div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4">Acompte demandé</div>
            </div>
            <p className="mt-5 text-sm text-stone-500">Annulation souhaitée au moins 24h à l’avance.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#"
                className="rounded-full bg-stone-900 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                Réserver en ligne
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-stone-300 bg-white px-7 py-3 text-center text-sm font-semibold text-stone-800 transition hover:bg-stone-100"
              >
                Voir les contacts
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <footer id="contact" className="border-t border-[#e8ddd1] bg-[#f0e5d8] px-4 py-10 sm:px-6 md:py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_auto] md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-semibold text-stone-900">Mélo Nail</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-600">
              Onglerie créative à Neyron, près de Lyon. Un univers chic, doux et soigné, centré sur le
              résultat final et la réservation simple.
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
          </div>
        </div>
      </footer>
    </main>
  );
}
