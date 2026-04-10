'use client';

import { motion } from 'framer-motion';
import { Clock3, Instagram, MapPin, Sparkles, Star, WandSparkles } from 'lucide-react';

const services = [
  {
    title: 'Pose complète',
    details: 'Construction gel + mise en forme premium, finition glossy longue tenue.',
    price: 'À partir de 55€'
  },
  {
    title: 'Remplissage',
    details: 'Entretien expert de votre pose avec correction de la forme et brillance miroir.',
    price: 'À partir de 42€'
  },
  {
    title: 'Nail Art',
    details: 'Design sur-mesure : chrome, babyboomer, french revisitée, effets 3D & strass.',
    price: 'À partir de 10€'
  }
];

const galleryCards = ['h-56', 'h-80', 'h-64', 'h-72', 'h-60', 'h-84'];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative flex min-h-screen items-center px-4 py-16">
        <div className="placeholder-media absolute inset-0" />
        <div className="absolute inset-0 bg-black/45" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass relative z-10 mx-auto w-full max-w-5xl rounded-3xl p-6 md:p-10"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/40 bg-fuchsia-400/10 px-4 py-1 text-sm tracking-wide text-fuchsia-100">
            <Sparkles className="h-4 w-4" /> Nail Artist • Melo Nails
          </p>
          <h1 className="font-serif-display max-w-3xl text-4xl leading-tight md:text-6xl">
            Sublimez jusqu&apos;au bout des ongles
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">
            Une signature élégante, des finitions impeccables et une expérience beauté pensée pour les
            femmes qui veulent briller.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-500 px-8 py-3 font-semibold text-white shadow-[0_0_25px_rgba(217,70,239,0.55)] transition hover:scale-[1.02]">
              Réserver mon moment
            </button>
            <button className="rounded-full border border-white/35 bg-white/10 px-8 py-3 font-semibold text-white transition hover:bg-white/20">
              Voir la galerie
            </button>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-4 py-20"
      >
        <div className="mb-10 flex items-center gap-3">
          <WandSparkles className="h-5 w-5 text-pink-300" />
          <h2 className="font-serif-display text-3xl md:text-4xl">Mes prestations</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="glass rounded-3xl p-6"
            >
              <h3 className="font-serif-display text-2xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">{service.details}</p>
              <p className="mt-6 inline-flex rounded-full border border-emerald-300/45 bg-emerald-400/10 px-4 py-1 text-sm font-semibold text-emerald-200">
                {service.price}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-10 flex items-center gap-3">
          <Star className="h-5 w-5 text-amber-300" />
          <h2 className="font-serif-display text-3xl md:text-4xl">Galerie / Inspiration</h2>
        </div>

        <div className="columns-2 gap-4 space-y-4 md:columns-3">
          {galleryCards.map((height, index) => (
            <motion.div
              key={`gallery-${height}-${index}`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`placeholder-media group relative w-full break-inside-avoid rounded-2xl ${height} overflow-hidden border border-white/20`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-50 transition-opacity group-hover:opacity-20" />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/20 px-3 py-1 text-xs uppercase tracking-wider text-white backdrop-blur-sm">
                Placeholder photo HD
              </div>
              <div className="absolute inset-0 transition duration-500 group-hover:scale-110 group-hover:bg-white/10" />
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl px-4 pb-24"
      >
        <div className="glass rounded-3xl p-8 md:p-10">
          <h2 className="font-serif-display text-3xl">La créatrice</h2>
          <p className="mt-4 leading-relaxed text-white/85">
            Je suis Melo, passionnée de précision et de créativité. Chaque rendez-vous est un moment
            d&apos;écoute pour créer une pose qui reflète votre personnalité avec raffinement et tenue.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-white/90 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">+300 poses réalisées</div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">Produits premium sélectionnés</div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">Ambiance cocoon & chic</div>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-white/20 bg-black/35 px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif-display text-2xl">Melo Nails</p>
            <p className="mt-2 text-sm text-white/75">Votre parenthèse beauté, élégante et audacieuse.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/85">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4" /> Lun-Sam · 9h-19h
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Bordeaux centre
            </span>
            <span className="inline-flex items-center gap-2">
              <Instagram className="h-4 w-4" /> @melo.nails
            </span>
          </div>
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-fuchsia-200">
            Prendre rendez-vous
          </button>
        </div>
      </footer>
    </main>
  );
}
