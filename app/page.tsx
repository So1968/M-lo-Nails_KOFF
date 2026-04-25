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
import ServicesInteractiveBlock from './components/ServicesInteractiveBlock';

const prices = [
  'Semi-permanent sur ongle naturel — à partir de 20€',
  'Pose gel — à partir de 25€',
  'Gainage — à partir de 25€',
  'Capsules américaines / Gel X — à partir de 30€'
];

const galleryImages = [
  {
    title: 'Nude lumineux',
    subtitle: 'Élégance sobre et soignée',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'French raffinée',
    subtitle: 'Un classique chic et intemporel',
    image:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Gel X tendance',
    subtitle: 'Une pose dessinée avec finesse',
    image:
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Détails créatifs',
    subtitle: 'Une touche de personnalité',
    image:
      'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Pose chic',
    subtitle: 'Des mains sublimées avec douceur',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Finition soignée',
    subtitle: 'Précision et rendu net',
    image:
      'https://images.unsplash.com/photo-1607779097040-26e80aa4576d?auto=format&fit=crop&w=1200&q=80'
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative isolate px-4 pb-16 pt-16 sm:px-6 md:pb-24 md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.96),_rgba(246,240,234,0.82)_46%,_rgba(239,224,209,0.7)_100%)]" />

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-[2.6rem] border border-[var(--border)] bg-[var(--surface)]/96 px-6 py-8 shadow-[0_20px_48px_rgba(88,66,49,0.08)] sm:px-10 sm:py-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--gold-deep)]">
              <Sparkles className="h-4 w-4" />
              Mélo Nail · Neyron
            </div>

            <div className="mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[var(--text-soft)]">
              Onglerie créative & élégante
            </p>

            <h1 className="font-serif-display mt-4 max-w-3xl text-5xl leading-[0.95] tracking-[-0.05em] text-[var(--foreground)] sm:text-6xl">
              Sublimer vos mains
              <span className="mt-2 block text-gradient">avec douceur</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-soft)]">
              Des poses soignées, féminines et actuelles, dans un univers lumineux pensé pour allier
              élégance, confort et belles finitions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#reservation"
                className="soft-button inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition"
              >
                Prendre rendez-vous
              </Link>

              <Link
                href="#galerie"
                className="soft-outline inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition"
              >
                Voir les réalisations
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-4">
            <motion.article
              variants={fadeUp}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--accent-soft)] p-7 shadow-[0_14px_32px_rgba(120,98,73,0.06)]"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold-deep)]">
                L’univers Mélo Nail
              </p>
              <h2 className="font-serif-display mt-4 text-3xl leading-tight text-[var(--foreground)]">
                Doux, chic et raffiné
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--text-soft)]">
                Un style pensé pour mettre en valeur la main avec précision, délicatesse et élégance.
              </p>
            </motion.article>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <motion.article
                variants={fadeUp}
                className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_12px_28px_rgba(120,98,73,0.05)]"
              >
                <Palette className="h-5 w-5 text-[var(--gold-deep)]" />
                <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">Style signature</h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--text-soft)]">
                  Des poses fines, lumineuses et actuelles, avec une vraie attention portée aux détails.
                </p>
              </motion.article>

              <motion.article
                variants={fadeUp}
                className="rounded-[1.8rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_12px_28px_rgba(120,98,73,0.05)]"
              >
                <Star className="h-5 w-5 text-[var(--gold-deep)]" />
                <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">Ce qui compte</h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--text-soft)]">
                  Vous proposer une pose qui vous ressemble, dans un cadre rassurant, doux et soigné.
                </p>
              </motion.article>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass rounded-[2rem] p-8 sm:p-9"
          >
            <div className="mb-4 flex items-center gap-3">
              <WandSparkles className="h-5 w-5 text-[var(--gold-deep)]" />
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold-deep)]">
                Présentation
              </p>
            </div>
            <h2 className="font-serif-display text-4xl tracking-[-0.04em] text-[var(--foreground)]">
              Mélo Nail
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--text-soft)]">
              Je m’appelle Mélodie Blanco, fondatrice de Mélo Nail. Passionnée par l’onglerie, j’aime
              le travail minutieux, créatif et soigné. Mon univers mêle originalité, élégance et
              tendance, avec l’envie de proposer des ongles qui font plaisir et dans lesquels chaque
              cliente se sent bien.
            </p>
          </motion.article>

          <div className="grid gap-6 sm:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--accent-soft)]/80 p-6"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold-deep)]">
                Positionnement
              </p>
              <h3 className="font-serif-display mt-4 text-3xl text-[var(--foreground)]">
                Créative et élégante
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-soft)]">
                Des poses originales et soignées, avec une vraie sensibilité au détail.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold-deep)]">
                Ambiance
              </p>
              <h3 className="font-serif-display mt-4 text-3xl text-[var(--foreground)]">
                Douce et professionnelle
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-soft)]">
                Un accueil sur rendez-vous dans un cadre clair, rassurant et organisé.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 sm:col-span-2"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold-deep)]">Objectif</p>
              <h3 className="font-serif-display mt-4 text-3xl text-[var(--foreground)]">
                Montrer, rassurer, puis réserver
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-soft)]">
                Le site est pensé pour faire découvrir l’univers de Mélo Nail, mettre en valeur les
                prestations et permettre une prise de rendez-vous simple.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <ServicesInteractiveBlock />

      <section id="galerie" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 flex items-center gap-3">
          <span className="gold-line" />
          <h2 className="font-serif-display text-4xl tracking-[-0.03em] text-[var(--foreground)]">
            Quelques réalisations
          </h2>
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
                  <p className="mt-1 text-sm text-white/85">{item.subtitle}</p>
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
            className="rounded-[2rem] border border-[var(--border)] bg-[var(--accent-soft)]/82 p-8 shadow-[0_16px_36px_rgba(120,98,73,0.06)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-[var(--gold-deep)]" />
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold-deep)]">
                Réservation
              </p>
            </div>

            <h2 className="font-serif-display text-4xl tracking-[-0.03em] text-[var(--foreground)]">
              Prendre rendez-vous simplement
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-[var(--text-soft)]">
              Les rendez-vous se réservent en ligne. Un pré-paiement sécurisé permet de confirmer le
              créneau et de préparer la prestation dans les meilleures conditions.
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
                className="soft-button inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition"
              >
                Voir les contacts
              </Link>

              <Link
                href="#galerie"
                className="soft-outline inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition"
              >
                Revoir les réalisations
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
