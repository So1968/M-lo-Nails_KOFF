'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Clock3,
  Instagram,
  MapPin,
  Phone,
  Sparkles,
  WandSparkles
} from 'lucide-react';
import ServicesInteractiveBlock from './components/ServicesInteractiveBlock';

const heroImages = [
  {
    title: 'La pose préférée de Mélo',
    image: '/images/melo-telephone.png'
  },
  {
    title: 'French bleue fleurie',
    image: '/images/melo-blanc-bleu.png'
  },
  {
    title: 'Création kaki chic',
    image: '/images/melo-kaki-blanc-1.png'
  }
];

const galleryImages = [
  {
    title: 'Création signature au téléphone',
    category: 'Pose signature',
    image: '/images/melo-telephone.png'
  },
  {
    title: 'Kaki blanc élégant',
    category: 'Gel / style chic',
    image: '/images/melo-kaki-blanc-1.png'
  },
  {
    title: 'Blanc bleu raffiné',
    category: 'French couleur',
    image: '/images/melo-blanc-bleu.png'
  },
  {
    title: 'Kaki blanc graphique',
    category: 'Nail art graphique',
    image: '/images/melo-kaki-blanc-2.png'
  },
  {
    title: 'Blanc chic',
    category: 'Pose élégante',
    image: '/images/melo-blanc-chic.jpeg'
  },
  {
    title: 'French bleue',
    category: 'French moderne',
    image: '/images/melo-french-bleue.jpeg'
  },
  {
    title: 'Graphique jaune',
    category: 'Nail art coloré',
    image: '/images/melo-graphique-jaune.jpeg'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const selectedImage =
    selectedImageIndex === null ? null : galleryImages[selectedImageIndex];

  function showPreviousImage() {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length
    );
  }

  function showNextImage() {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
  }

  return (
    <main className="overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(255,250,246,0.94)] shadow-[0_12px_30px_rgba(88,66,49,0.08)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="leading-tight">
            <span className="block font-serif-display text-2xl tracking-[-0.04em] text-[var(--foreground)]">
              Mélo Nail
            </span>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-[var(--text-soft)] sm:block">
              Prothésiste ongulaire · Neyron
            </span>
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-semibold text-[var(--text-soft)] md:flex">
            <Link href="#prestations" className="transition hover:text-[var(--gold-deep)]">
              Prestations
            </Link>
            <Link href="#galerie" className="transition hover:text-[var(--gold-deep)]">
              Réalisations
            </Link>
            <Link href="#reservation" className="transition hover:text-[var(--gold-deep)]">
              Réservation
            </Link>
            <Link href="#contacts" className="transition hover:text-[var(--gold-deep)]">
              Contact
            </Link>
          </nav>

          <Link
            href="#reservation"
            className="inline-flex items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--accent-strong)] px-5 py-3 text-sm font-semibold text-[#fffaf6] shadow-[0_12px_24px_rgba(159,113,84,0.18)] transition hover:bg-[var(--gold-deep)]"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </header>
      <section className="relative isolate flex min-h-[100svh] items-center px-4 py-8 sm:px-6 md:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.96),_rgba(246,240,234,0.84)_48%,_rgba(239,224,209,0.68)_100%)]" />
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-[var(--gold-soft)]/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-white/60 blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-[2.4rem] border border-[var(--border)] bg-[var(--surface)]/95 p-6 shadow-[0_24px_60px_rgba(88,66,49,0.10)] sm:p-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--gold-deep)]">
              <Sparkles className="h-4 w-4" />
              Mélo Nail · secteur Neyron
            </div>

            <div className="mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[var(--text-soft)]">
              Onglerie créative · poses soignées · réservation en ligne
            </p>

            <h1 className="font-serif-display mt-4 max-w-3xl text-4xl leading-[0.98] tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl md:text-6xl">
              Des ongles
              <span className="mt-2 block text-gradient">qui révèlent votre style</span>
            </h1>

            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--surface-2)] px-4 py-2 text-sm font-medium text-[var(--gold-deep)]">
              Neyron • Sur rendez-vous uniquement
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
              Un univers doux, précis et créatif pour des mains soignées, élégantes et faciles à
              porter au quotidien.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#prestations"
                className="inline-flex items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--accent-strong)] px-7 py-4 text-sm font-semibold text-[#fffaf6] shadow-[0_14px_28px_rgba(159,113,84,0.18)] transition hover:bg-[var(--gold-deep)]"
              >
                Découvrir les prestations
              </Link>

              <Link
                href="#galerie"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-7 py-4 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
              >
                Voir les réalisations
              </Link>

              <Link
                href="#reservation"
                className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-7 py-4 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
              >
                Prendre rendez-vous
              </Link>
            </div>

            <div className="mt-8 rounded-[1.8rem] border border-[var(--border)] bg-[var(--accent-soft)]/70 p-5">
              <div className="flex items-start gap-3">
                <WandSparkles className="mt-1 h-5 w-5 shrink-0 text-[var(--gold-deep)]" />
                <div>
                  <p className="font-serif-display text-2xl leading-tight text-[var(--foreground)]">
                    Une pose pensée pour vous mettre en valeur.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">
                    Mélo Nail accompagne chaque rendez-vous avec soin, écoute et précision, pour un
                    résultat élégant qui reste fidèle à votre style.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-[2.4rem] border border-[var(--border)] bg-[var(--surface)]/92 p-3 shadow-[0_24px_60px_rgba(88,66,49,0.12)]">
            <div className="grid gap-3">
              <button
                type="button"
                onClick={() => setSelectedImageIndex(0)}
                className="overflow-hidden rounded-[2rem] text-left"
              >
                <img
                  src={heroImages[0].image}
                  alt={heroImages[0].title}
                  className="h-[300px] w-full scale-105 object-cover object-center brightness-[1.04] contrast-[1.08] saturate-[1.08] transition duration-700 hover:scale-110 sm:h-[330px] md:h-[350px]"
                />
              </button>

              <div className="grid gap-3 sm:grid-cols-2">
                {heroImages.slice(1).map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setSelectedImageIndex(index + 1)}
                    className="overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-2)] text-left"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-36 w-full scale-105 object-cover object-center brightness-[1.05] contrast-[1.1] saturate-[1.08] transition duration-700 hover:scale-110 sm:h-40"
                    />
                    <p className="px-4 py-3 text-sm font-medium text-[var(--foreground)]">
                      {item.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="prestations">
        <ServicesInteractiveBlock />
      </section>

      <section id="galerie" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="gold-line" />
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold-deep)]">
                Réalisations
              </p>
            </div>
            <h2 className="font-serif-display text-4xl tracking-[-0.04em] text-[var(--foreground)] md:text-5xl">
              Quelques réalisations Mélo Nail
            </h2>
          </div>
          <Link
            href="#reservation"
            className="inline-flex w-fit items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--accent-strong)] px-6 py-3 text-sm font-semibold text-[#fffaf6] shadow-[0_14px_28px_rgba(159,113,84,0.16)] transition hover:bg-[var(--gold-deep)]"
          >
            Prendre rendez-vous
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.button
              key={`${item.title}-${index}`}
              type="button"
              onClick={() => setSelectedImageIndex(index)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] text-left shadow-[0_16px_36px_rgba(120,98,73,0.08)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full scale-105 object-cover object-center brightness-[1.04] contrast-[1.08] saturate-[1.08] transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(47,41,37,0.78)] via-[rgba(47,41,37,0.2)] to-transparent p-5">
                  <p className="font-serif-display text-2xl text-white">{item.title}</p>
                  <p className="mt-1 text-sm font-medium text-white/80">{item.category}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>


      {selectedImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/82 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setSelectedImageIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--foreground)] shadow-lg"
          >
            Fermer
          </button>

          <button
            type="button"
            onClick={showPreviousImage}
            className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white px-5 py-4 text-2xl font-bold text-[var(--foreground)] shadow-lg md:block"
            aria-label="Photo précédente"
          >
            ←
          </button>

          <div className="max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-[var(--surface)] shadow-2xl">
            <div className="flex h-[72vh] items-center justify-center bg-[#120d0a]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="border-t border-[var(--border)] p-5">
              <p className="font-serif-display text-3xl tracking-[-0.04em] text-[var(--foreground)]">
                {selectedImage.title}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold-deep)]">
                {selectedImage.category}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={showNextImage}
            className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white px-5 py-4 text-2xl font-bold text-[var(--foreground)] shadow-lg md:block"
            aria-label="Photo suivante"
          >
            →
          </button>
        </div>
      )}

      <section id="reservation" className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 md:pb-24">
        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2.4rem] border border-[var(--gold)] bg-[var(--accent-soft)]/82 p-8 shadow-[0_16px_36px_rgba(120,98,73,0.08)] md:p-10"
        >
          <div className="mb-4 flex items-center gap-3">
            <Clock3 className="h-5 w-5 text-[var(--gold-deep)]" />
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold-deep)]">
              Réservation
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-serif-display text-4xl tracking-[-0.03em] text-[var(--foreground)] md:text-5xl">
                Prendre rendez-vous simplement
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-[var(--text-soft)]">
                Choisissez la prestation qui vous correspond, puis réservez votre créneau en ligne. Le rendez-vous est pensé pour prendre le temps de vous accueillir, comprendre votre envie et réaliser une pose soignée.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#contacts"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--accent-strong)] px-7 py-4 text-sm font-semibold text-[#fffaf6] shadow-[0_14px_28px_rgba(159,113,84,0.18)] transition hover:bg-[var(--gold-deep)]"
                >
                  Voir les contacts
                </Link>

                <Link
                  href="#prestations"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-7 py-4 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
                >
                  Revoir les prestations
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.3rem] bg-[var(--surface)] px-4 py-4 text-[var(--foreground)]">
                Sur rendez-vous uniquement
              </div>
              <div className="rounded-[1.3rem] bg-[var(--surface)] px-4 py-4 text-[var(--foreground)]">
                Lundi à vendredi · 8h–12h / 14h–19h
              </div>
              <div className="rounded-[1.3rem] bg-[var(--surface)] px-4 py-4 text-[var(--foreground)]">
                Prévoir 1h30 à 3h selon la pose
              </div>
              <div className="rounded-[1.3rem] bg-[var(--surface)] px-4 py-4 text-[var(--foreground)]">
                Pré-paiement sécurisé pour confirmer le créneau
              </div>
            </div>
          </div>
        </motion.article>
      </section>

      <footer id="contacts" className="border-t border-[var(--border)] bg-[var(--surface)]/88">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.7fr]">
          <div>
            <h2 className="font-serif-display text-4xl tracking-[-0.04em] text-[var(--foreground)]">
              Mélo Nail
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text-soft)]">
              Onglerie créative à Neyron. Un univers chic, doux et soigné, centré sur l’élégance des
              poses et une réservation simple.
            </p>
          </div>

          <div className="space-y-4 text-base text-[var(--foreground)]">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[var(--gold-deep)]" />
              <span>Neyron • 01700</span>
            </div>

            <div className="flex items-center gap-3">
              <Instagram className="h-5 w-5 text-[var(--gold-deep)]" />
              <span>Instagram</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[var(--gold-deep)]" />
              <span>Téléphone en complément si besoin</span>
            </div>
          </div>

          <div className="space-y-3 text-sm text-[var(--text-soft)]">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold-deep)]">
              Informations
            </p>
            <Link href="/mentions-legales" className="block transition hover:text-[var(--gold-deep)]">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="block transition hover:text-[var(--gold-deep)]">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
