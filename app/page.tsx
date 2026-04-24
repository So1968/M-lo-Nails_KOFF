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

type MainTab = 'prestations' | 'tarifs' | 'reservation';
type ServiceKey =
  | 'semi'
  | 'gel'
  | 'gainage'
  | 'gelx'
  | 'remplissage'
  | 'depose'
  | 'french'
  | 'nailart'
  | 'decorations'
  | 'reparation';

type ServiceInfo = {
  id: ServiceKey;
  title: string;
  shortLabel: string;
  image: string;
  imageAlt: string;
  price: string;
  discoverText: string[];
  careText: string[];
};

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

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
    alt: 'Ongles nude élégants',
    label: 'Élégance nude'
  },
  {
    src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80',
    alt: 'French élégante',
    label: 'French lumineuse'
  }
];

const servicesData: ServiceInfo[] = [
  {
    id: 'semi',
    title: 'Semi-permanent sur ongle naturel',
    shortLabel: 'Semi-permanent',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Semi-permanent nude sur ongles naturels',
    price: 'À partir de 20€',
    discoverText: [
      "Le semi-permanent est appliqué directement sur l’ongle naturel.",
      "Il offre un rendu brillant, net et durable, plus longue tenue qu’un vernis classique.",
      "C’est une belle option pour celles qui souhaitent un résultat discret, propre et élégant sans ajouter de longueur."
    ],
    careText: [
      "Ne pas gratter ni arracher la matière.",
      "Privilégier une dépose propre plutôt qu’un retrait à la maison.",
      "Hydrater régulièrement les cuticules.",
      "Éviter d’utiliser les ongles comme outil."
    ]
  },
  {
    id: 'gel',
    title: 'Pose gel',
    shortLabel: 'Pose gel',
    image:
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Pose gel élégante',
    price: 'À partir de 25€',
    discoverText: [
      "La pose gel permet d’obtenir un rendu structuré, soigné et élégant.",
      "Elle convient aux personnes qui souhaitent une pose plus travaillée avec une belle tenue.",
      "Le résultat peut rester naturel ou aller vers un style plus affirmé selon l’envie."
    ],
    careText: [
      "Ne jamais arracher une pose gel.",
      "Revenir en entretien ou en dépose quand la repousse devient importante.",
      "Éviter les chocs répétés sur les longueurs.",
      "Entretenir les cuticules avec une huile adaptée."
    ]
  },
  {
    id: 'gainage',
    title: 'Gainage',
    shortLabel: 'Gainage',
    image:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Gainage sur ongle naturel',
    price: 'À partir de 25€',
    discoverText: [
      "Le gainage renforce l’ongle naturel sans forcément ajouter de longueur.",
      "Il permet d’obtenir un rendu net, solide et élégant tout en conservant un aspect naturel.",
      "C’est une option idéale lorsqu’on souhaite garder sa longueur avec plus de tenue."
    ],
    careText: [
      "Éviter de limer ou décoller la matière soi-même.",
      "Revenir en entretien quand la repousse apparaît.",
      "Privilégier une dépose soignée.",
      "Hydrater les cuticules régulièrement."
    ]
  },
  {
    id: 'gelx',
    title: 'Capsules américaines / Gel X',
    shortLabel: 'Capsules américaines',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Capsules américaines Gel X',
    price: 'À partir de 30€',
    discoverText: [
      "Les capsules américaines, aussi appelées Gel X, permettent d’obtenir rapidement de la longueur et une jolie forme.",
      "Le rendu est moderne, élégant et particulièrement adapté aux styles plus dessinés.",
      "C’est une belle solution pour celles qui veulent une pose plus visible et plus travaillée."
    ],
    careText: [
      "Éviter de forcer sur la longueur au quotidien.",
      "Ne pas tenter d’enlever la capsule soi-même.",
      "Revenir si une capsule se soulève ou se fissure.",
      "Respecter l’entretien ou la dépose pour préserver l’ongle naturel."
    ]
  },
  {
    id: 'remplissage',
    title: 'Remplissage',
    shortLabel: 'Remplissage',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Remplissage soigné',
    price: 'À partir de 20€',
    discoverText: [
      "Le remplissage permet d’entretenir une pose existante en corrigeant la repousse.",
      "Il aide à garder un rendu propre, équilibré et harmonieux au fil du temps.",
      "C’est une étape importante pour conserver une belle pose sans attendre qu’elle se fragilise."
    ],
    careText: [
      "Ne pas attendre trop longtemps avant l’entretien.",
      "Une repousse trop importante peut fragiliser l’équilibre de la pose.",
      "Éviter les gestes brusques sur les longueurs.",
      "Mieux vaut reprendre rendez-vous plutôt que laisser la pose s’abîmer."
    ]
  },
  {
    id: 'depose',
    title: 'Dépose',
    shortLabel: 'Dépose',
    image:
      'https://images.unsplash.com/photo-1607779097040-26e80aa4576d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dépose soignée',
    price: 'À partir de 10€',
    discoverText: [
      "La dépose consiste à retirer la matière avec soin.",
      "Elle doit être réalisée proprement pour respecter l’ongle naturel.",
      "La qualité de la dépose joue un rôle important dans la préservation de l’ongle."
    ],
    careText: [
      "Ne jamais arracher une pose.",
      "Éviter les méthodes trop agressives à la maison.",
      "Après une dépose, hydrater l’ongle et les cuticules est une bonne habitude.",
      "Une dépose douce est toujours préférable à une dépose précipitée."
    ]
  },
  {
    id: 'french',
    title: 'French',
    shortLabel: 'French',
    image:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'French élégante',
    price: 'Supplément possible',
    discoverText: [
      "La french offre un rendu intemporel, propre et raffiné.",
      "Avec sa base nude et son bord clair, elle apporte une élégance sobre et lumineuse.",
      "Elle convient parfaitement à celles qui recherchent une pose chic et soignée."
    ],
    careText: [
      "Éviter d’arracher la matière.",
      "Une bonne tenue passe aussi par des gestes délicats au quotidien.",
      "L’entretien régulier permet de garder une french nette et harmonieuse.",
      "Une dépose propre aide à préserver l’ongle naturel."
    ]
  },
  {
    id: 'nailart',
    title: 'Nail art',
    shortLabel: 'Nail art',
    image:
      'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Nail art chic',
    price: 'Supplément selon création',
    discoverText: [
      "Le nail art permet d’ajouter une touche créative et personnelle à la pose.",
      "Il peut rester discret et raffiné, ou devenir plus travaillé selon le style souhaité.",
      "C’est idéal pour celles qui veulent une pose unique, avec du caractère."
    ],
    careText: [
      "Éviter les chocs et les frottements sur les détails.",
      "Ne pas manipuler ou gratter la décoration.",
      "En cas de décollement, mieux vaut revenir plutôt que tirer sur la matière.",
      "Une pose bien entretenue garde plus longtemps son élégance."
    ]
  },
  {
    id: 'decorations',
    title: 'Décorations, strass et effets',
    shortLabel: 'Décorations',
    image:
      'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Décorations élégantes',
    price: 'Supplément selon création',
    discoverText: [
      "Les décorations, strass et effets apportent de la lumière, du relief ou une finition plus précieuse.",
      "Ils permettent de personnaliser la pose tout en gardant un rendu chic.",
      "Selon le style souhaité, ils peuvent rester discrets ou plus visibles."
    ],
    careText: [
      "Éviter de gratter les éléments décoratifs.",
      "Faire attention aux chocs sur les détails en relief.",
      "Signaler rapidement si un élément se décolle.",
      "Une dépose soignée reste importante pour préserver l’ongle naturel."
    ]
  },
  {
    id: 'reparation',
    title: "Réparation d’ongle",
    shortLabel: 'Réparation',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Réparation d’ongle',
    price: 'Selon besoin',
    discoverText: [
      "La réparation d’ongle permet de restaurer un ongle fragilisé, cassé ou abîmé.",
      "L’objectif est de retrouver un rendu propre, harmonieux et confortable.",
      "C’est une solution utile pour rééquilibrer l’ensemble et prolonger l’esthétique de la pose."
    ],
    careText: [
      "Un ongle réparé demande un peu plus d’attention au quotidien.",
      "Éviter les gestes brusques ou les pressions directes.",
      "Revenir en cas de fragilité ou de nouveau choc.",
      "Une réparation bien suivie aide à garder un résultat net et durable."
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<MainTab>('prestations');
  const [selectedService, setSelectedService] = useState<ServiceKey>('semi');
  const [activeInfoTab, setActiveInfoTab] = useState<'discover' | 'care'>('discover');

  const currentService = useMemo(
    () => servicesData.find((service) => service.id === selectedService) ?? servicesData[0],
    [selectedService]
  );

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
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
            Prise de rendez-vous facile
          </p>
          <h3 className="mt-3 text-xl font-semibold text-stone-900">Réservez votre créneau</h3>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            Réservez facilement votre créneau et retrouvez toutes les informations utiles avant votre
            rendez-vous.
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbf8f4_0%,#f5ede4_48%,#efe2d5_100%)]" />
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
              Des poses élégantes, un univers doux et raffiné, et des créations soignées pour sublimer
              chaque style.
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
            {heroImages.map((image, index) => (
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
            avec l’envie de proposer des poses qui mettent chaque cliente en valeur.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.25rem] border border-[#ece3d8] bg-[#f9f5f0] px-4 py-4 text-sm text-stone-700">
              Créative, élégante et soignée
            </div>
            <div className="rounded-[1.25rem] border border-[#ece3d8] bg-[#f9f5f0] px-4 py-4 text-sm text-stone-700">
              Féminin, sobre et raffiné
            </div>
            <div className="rounded-[1.25rem] border border-[#ece3d8] bg-[#f9f5f0] px-4 py-4 text-sm text-stone-700">
              Le sens du détail
            </div>
          </div>
        </div>
      </section>

      <section id="bloc-principal" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-8 flex items-center gap-3">
          <WandSparkles className="h-5 w-5 text-[#a88467]" />
          <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">Prestations, tarifs et réservation</h2>
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
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="mb-8 flex items-center gap-3">
          <Star className="h-5 w-5 text-[#a88467]" />
          <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">Découvrir les prestations</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#e8ddd1] bg-white/90 p-5 shadow-[0_18px_50px_rgba(120,98,73,0.08)]">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
              Toutes les prestations
            </p>

            <div className="grid gap-3">
              {servicesData.map((service) => {
                const isActive = selectedService === service.id;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => {
                      setSelectedService(service.id);
                      setActiveInfoTab('discover');
                    }}
                    className={`rounded-[1.25rem] border px-4 py-4 text-left transition ${
                      isActive
                        ? 'border-[#cdb79f] bg-[#f3e9dd] shadow-[0_8px_20px_rgba(120,98,73,0.08)]'
                        : 'border-[#ece3d8] bg-white hover:bg-[#faf6f1]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-stone-900">{service.shortLabel}</p>
                        <p className="mt-1 text-xs text-stone-500">{service.price}</p>
                      </div>
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#a88467]">
                        Voir
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e8ddd1] bg-white/90 p-5 shadow-[0_18px_50px_rgba(120,98,73,0.08)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                <div className="overflow-hidden rounded-[1.5rem] border border-[#ece3d8] bg-[#f8f3ed]">
                  <img
                    src={currentService.image}
                    alt={currentService.imageAlt}
                    className="h-72 w-full object-cover sm:h-80"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-2xl font-semibold text-stone-900">{currentService.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[#a88467]">{currentService.price}</p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveInfoTab('discover')}
                      className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                        activeInfoTab === 'discover'
                          ? 'bg-[#a88467] text-white'
                          : 'border border-[#e2d6ca] bg-white text-stone-700 hover:bg-[#f6efe7]'
                      }`}
                    >
                      Découvrir la prestation
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveInfoTab('care')}
                      className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                        activeInfoTab === 'care'
                          ? 'bg-[#a88467] text-white'
                          : 'border border-[#e2d6ca] bg-white text-stone-700 hover:bg-[#f6efe7]'
                      }`}
                    >
                      Préserver l’ongle
                    </button>
                  </div>

                  <div className="mt-5 rounded-[1.5rem] border border-[#ece3d8] bg-[#fcfaf7] p-5">
                    {activeInfoTab === 'discover' ? (
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                          Découvrir la prestation
                        </p>
                        <div className="mt-4 space-y-3 text-sm leading-relaxed text-stone-700">
                          {currentService.discoverText.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                          Préserver l’ongle
                        </p>
                        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-stone-700">
                          {currentService.careText.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-[#a88467]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="galerie" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-8 flex items-center gap-3">
          <Star className="h-5 w-5 text-[#a88467]" />
          <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">Réalisations</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.slice(0, 4).map((image, index) => (
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
                  src={image.image}
                  alt={image.imageAlt}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="bg-[#f8f3ed] px-4 py-3">
                <span className="text-sm font-medium text-stone-700">{image.shortLabel}</span>
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
              À Neyron, près de Lyon, Mélo Nail signe des poses soignées, élégantes et tendance dans un
              univers doux et raffiné.
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
