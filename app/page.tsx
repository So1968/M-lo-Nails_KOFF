'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  Clock3,
  Instagram,
  MapPin,
  Phone,
  Sparkles,
  WandSparkles
} from 'lucide-react';
import ServicesInteractiveBlock from './components/ServicesInteractiveBlock';

const prices = [
  'Semi-permanent sur ongle naturel — à partir de 20€',
  'Pose gel — à partir de 25€',
  'Gainage — à partir de 25€',
  'Capsules américaines / Gel X — à partir de 30€'
];

const heroImages = [
  {
    title: 'French bleue fleurie',
    image: '/images/melo-french-bleue.jpeg'
  },
  {
    title: 'Création chic et affirmée',
    image: '/images/melo-kaki-blanc.jpeg'
  },
  {
    title: 'Inspiration graphique',
    image: '/images/melo-graphique-jaune.jpeg'
  }
];

const galleryImages = [
  {
    title: 'French bleue fleurie',
    image: '/images/melo-french-bleue.jpeg'
  },
  {
    title: 'Création chic et affirmée',
    image: '/images/melo-kaki-blanc.jpeg'
  },
  {
    title: 'Inspiration graphique',
    image: '/images/melo-graphique-jaune.jpeg'
  },
  {
    title: 'Blanc chic',
    image: '/images/melo-french-bleue.jpeg'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
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
              Des poses d’ongles
              <span className="mt-2 block text-gradient">qui révèlent votre style</span>
            </h1>

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
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={heroImages[0].image}
                  alt={heroImages[0].title}
                  className="h-[300px] w-full object-cover sm:h-[330px] md:h-[350px]"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {heroImages.slice(1).map((item) => (
                  <div
                    key={item.title}
                    className="overflow-hidden rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface-2)]"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-36 w-full object-cover sm:h-40"
                    />
                    <p className="px-4 py-3 text-sm font-medium text-[var(--foreground)]">
                      {item.title}
                    </p>
                  </div>
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
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_16px_36px_rgba(120,98,73,0.08)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(47,41,37,0.78)] via-[rgba(47,41,37,0.2)] to-transparent p-5">
                  <p className="font-serif-display text-2xl text-white">{item.title}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="reservation" className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_16px_36px_rgba(120,98,73,0.06)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-[var(--gold-deep)]" />
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold-deep)]">
                Tarifs de départ
              </p>
            </div>

            <h2 className="font-serif-display mb-6 text-4xl tracking-[-0.04em] text-[var(--foreground)]">
              Repères tarifs
            </h2>

            <div className="grid gap-3">
              {prices.map((price) => (
                <div
                  key={price}
                  className="rounded-[1.2rem] border border-[var(--border)] bg-[var(--surface-2)] px-4 py-4 text-base text-[var(--foreground)]"
                >
                  {price}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-[var(--text-soft)]">
              Les tarifs peuvent varier selon la longueur, le niveau de détail, les décorations et le
              temps de réalisation.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-[var(--gold)] bg-[var(--accent-soft)]/82 p-8 shadow-[0_16px_36px_rgba(120,98,73,0.08)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-[var(--gold-deep)]" />
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold-deep)]">
                Réservation
              </p>
            </div>

            <h2 className="font-serif-display text-4xl tracking-[-0.03em] text-[var(--foreground)]">
              Réserver simplement
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-[var(--text-soft)]">
              Les rendez-vous se réservent en ligne. Le pré-paiement sécurisé confirme votre
              créneau et permet de consacrer le rendez-vous uniquement à votre accueil et à votre
              prestation.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.2rem] bg-[var(--surface)] px-4 py-4 text-[var(--foreground)]">
                Lundi à vendredi
              </div>
              <div className="rounded-[1.2rem] bg-[var(--surface)] px-4 py-4 text-[var(--foreground)]">
                8h–12h / 14h–19h
              </div>
              <div className="rounded-[1.2rem] bg-[var(--surface)] px-4 py-4 text-[var(--foreground)]">
                1h30 à 3h selon la pose
              </div>
              <div className="rounded-[1.2rem] bg-[var(--surface)] px-4 py-4 text-[var(--foreground)]">
                Pré-paiement sécurisé
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-[var(--text-soft)]">
              En cas d’imprévu, l’annulation ou le déplacement du rendez-vous reste possible dans le
              délai indiqué lors de la réservation.
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
          </motion.article>
        </div>
      </section>

      <footer id="contacts" className="border-t border-[var(--border)] bg-[var(--surface)]/88">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr]">
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
        </div>
      </footer>
    </main>
  );
}
