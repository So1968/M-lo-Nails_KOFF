'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
  wearTime: string;
  discoverTitle: string;
  discoverText: string[];
  careTitle: string;
  careText: string[];
};

const servicesData: ServiceInfo[] = [
  {
    id: 'semi',
    title: 'Semi-permanent sur ongle naturel',
    shortLabel: 'Semi-permanent',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Manucure nude élégante sur ongles naturels',
    price: 'À partir de 20€',
    wearTime: 'Tenue moyenne : 2 à 3 semaines avec des précautions d’usage',
    discoverTitle: 'Découvrir la prestation',
    discoverText: [
      "Le semi-permanent est réalisé directement sur l’ongle naturel.",
      "Il apporte un rendu brillant, propre et plus durable qu’un vernis classique.",
      "La tenue moyenne est de 2 à 3 semaines avec des précautions d’usage, selon la repousse, l’état de l’ongle et les gestes du quotidien."
    ],
    careTitle: "Préserver l’ongle",
    careText: [
      "Ne pas gratter ni arracher la matière.",
      "Privilégier une dépose propre plutôt qu’un retrait à la maison.",
      "Hydrater régulièrement les cuticules.",
      "Éviter d’utiliser les ongles comme outil au quotidien."
    ]
  },
  {
    id: 'gel',
    title: 'Pose gel',
    shortLabel: 'Pose gel',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Pose gel chic et lumineuse',
    price: 'À partir de 25€',
    wearTime: 'Tenue moyenne : 3 à 4 semaines avec des précautions d’usage',
    discoverTitle: 'Découvrir la prestation',
    discoverText: [
      "La pose gel permet d’obtenir un rendu structuré, harmonieux et très soigné.",
      "Elle convient parfaitement aux personnes qui souhaitent une belle tenue et une mise en forme élégante.",
      "La tenue moyenne est de 3 à 4 semaines avec des précautions d’usage. Un remplissage est ensuite conseillé pour garder une pose nette."
    ],
    careTitle: "Préserver l’ongle",
    careText: [
      "Ne jamais arracher une pose gel.",
      "Revenir en entretien quand la repousse devient importante.",
      "Éviter les chocs répétés sur les longueurs.",
      "Entretenir les cuticules avec une huile adaptée."
    ]
  },
  {
    id: 'gainage',
    title: 'Gainage',
    shortLabel: 'Gainage',
    image:
      'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Gainage raffiné sur ongle naturel',
    price: 'À partir de 25€',
    wearTime: 'Tenue moyenne : 3 à 4 semaines avec des précautions d’usage',
    discoverTitle: 'Découvrir la prestation',
    discoverText: [
      "Le gainage renforce l’ongle naturel sans forcément ajouter de longueur.",
      "Il aide à obtenir un rendu net, solide et élégant tout en gardant un aspect naturel.",
      "La tenue moyenne est de 3 à 4 semaines avec des précautions d’usage et un entretien régulier."
    ],
    careTitle: "Préserver l’ongle",
    careText: [
      "Le gainage se conserve mieux avec un entretien régulier.",
      "Éviter de limer ou de décoller la matière soi-même.",
      "Une dépose réalisée avec soin reste essentielle.",
      "L’hydratation des cuticules aide à garder un contour net et harmonieux."
    ]
  },
  {
    id: 'gelx',
    title: 'Capsules américaines / Gel X',
    shortLabel: 'Capsules américaines',
    image:
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Capsules américaines élégantes',
    price: 'À partir de 30€',
    wearTime: 'Tenue moyenne : 3 à 4 semaines avec des précautions d’usage',
    discoverTitle: 'Découvrir la prestation',
    discoverText: [
      "Les capsules américaines, aussi appelées Gel X, permettent d’obtenir rapidement de la longueur et une jolie forme.",
      "Le rendu est moderne, élégant et particulièrement adapté aux poses plus dessinées ou créatives.",
      "La tenue moyenne est de 3 à 4 semaines avec des précautions d’usage, selon la longueur choisie et les gestes du quotidien."
    ],
    careTitle: "Préserver l’ongle",
    careText: [
      "Éviter de forcer sur la longueur avec les gestes du quotidien.",
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
      'https://images.unsplash.com/photo-1607779097040-26e80aa4576d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Remplissage soigné et élégant',
    price: 'À partir de 20€',
    wearTime: 'À prévoir en moyenne toutes les 3 à 4 semaines',
    discoverTitle: 'Découvrir la prestation',
    discoverText: [
      "Le remplissage permet d’entretenir une pose existante en corrigeant la repousse.",
      "Il aide à garder un résultat propre, équilibré et harmonieux au fil du temps.",
      "Il est conseillé en moyenne toutes les 3 à 4 semaines, selon la repousse et l’état de la pose."
    ],
    careTitle: "Préserver l’ongle",
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
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Dépose respectueuse de l’ongle',
    price: 'À partir de 10€',
    wearTime: 'Durée de la prestation : selon la pose à retirer',
    discoverTitle: 'Découvrir la prestation',
    discoverText: [
      "La dépose consiste à retirer la matière avec soin.",
      "Elle doit être réalisée proprement pour respecter l’ongle naturel.",
      "La qualité de la dépose joue un grand rôle dans la préservation de l’ongle."
    ],
    careTitle: "Préserver l’ongle",
    careText: [
      "Ne jamais arracher une pose.",
      "Éviter les méthodes trop agressives à la maison.",
      "Après une dépose, hydrater l’ongle et les cuticules reste une bonne habitude.",
      "Une dépose douce est toujours préférable à une dépose précipitée."
    ]
  },
  {
    id: 'french',
    title: 'French',
    shortLabel: 'French',
    image:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'French élégante et lumineuse',
    price: 'Supplément possible',
    wearTime: 'Tenue liée à la pose choisie : semi-permanent, gel ou gainage',
    discoverTitle: 'Découvrir la prestation',
    discoverText: [
      "La french offre un rendu intemporel, propre et raffiné.",
      "Avec sa base nude et son bord clair, elle apporte une élégance sobre qui reste très appréciée.",
      "Sa tenue dépend de la pose choisie en base : semi-permanent, gel ou gainage."
    ],
    careTitle: "Préserver l’ongle",
    careText: [
      "Comme pour les autres poses, il vaut mieux éviter d’arracher la matière.",
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
      'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Nail art chic et raffiné',
    price: 'Supplément selon création',
    wearTime: 'Tenue liée à la pose choisie et aux précautions d’usage',
    discoverTitle: 'Découvrir la prestation',
    discoverText: [
      "Le nail art permet d’ajouter une touche créative et personnelle à la pose.",
      "Il peut rester discret et raffiné, ou devenir plus travaillé selon le style souhaité.",
      "Sa tenue dépend de la pose choisie et des précautions d’usage, surtout si la décoration comporte du relief ou des détails."
    ],
    careTitle: "Préserver l’ongle",
    careText: [
      "Plus une pose est travaillée, plus il faut éviter les chocs et les frottements.",
      "Ne pas manipuler ou gratter les détails décoratifs.",
      "En cas de décollement, mieux vaut revenir plutôt que tirer sur la matière.",
      "Une pose bien entretenue garde plus longtemps son élégance."
    ]
  },
  {
    id: 'decorations',
    title: 'Décorations, strass et effets',
    shortLabel: 'Décorations',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Décorations délicates et élégantes',
    price: 'Supplément selon création',
    wearTime: 'Tenue liée à la pose choisie et aux précautions d’usage',
    discoverTitle: 'Découvrir la prestation',
    discoverText: [
      "Les décorations, strass et effets apportent de la lumière, du relief ou une finition plus précieuse.",
      "Ils permettent de personnaliser la pose tout en gardant un rendu chic.",
      "Leur tenue dépend de la pose choisie et des précautions d’usage, notamment pour les éléments en relief."
    ],
    careTitle: "Préserver l’ongle",
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
      'https://images.unsplash.com/photo-1607779097040-26e80aa4576d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Réparation d’ongle précise et soignée',
    price: 'Selon besoin',
    wearTime: 'Tenue variable selon l’ongle et la réparation',
    discoverTitle: 'Découvrir la prestation',
    discoverText: [
      "La réparation d’ongle permet de restaurer un ongle fragilisé, cassé ou abîmé.",
      "L’objectif est de retrouver un rendu propre, harmonieux et confortable.",
      "La tenue dépend de l’état de l’ongle, de la réparation réalisée et des précautions d’usage."
    ],
    careTitle: "Préserver l’ongle",
    careText: [
      "Un ongle réparé demande un peu plus d’attention au quotidien.",
      "Éviter les gestes brusques ou les pressions directes.",
      "Revenir en cas de fragilité ou de nouveau choc.",
      "Une réparation bien suivie aide à garder un résultat net et durable."
    ]
  }
];

export default function ServicesInteractiveBlock() {
  const [selectedService, setSelectedService] = useState<ServiceKey>('semi');
  const [activeInfoTab, setActiveInfoTab] = useState<'discover' | 'care'>('discover');

  const currentService = useMemo(
    () => servicesData.find((service) => service.id === selectedService) ?? servicesData[0],
    [selectedService]
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="gold-line" />
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--gold-deep)]">
            Prestations détaillées
          </p>
        </div>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)] md:text-4xl">
          Choisir la prestation qui vous correspond
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--text-soft)]">
          Découvrez chaque prestation à travers une image, une explication claire, une tenue moyenne
          et des conseils simples pour mieux préserver l’ongle.
        </p>
        <p className="mt-3 max-w-3xl rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm leading-relaxed text-[var(--text-soft)]">
          Les tenues indiquées sont des moyennes : elles peuvent varier selon l’ongle naturel, la repousse,
          le métier, les gestes du quotidien et les précautions d’usage.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/95 p-5 shadow-[0_18px_50px_rgba(120,98,73,0.07)]">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-soft)]">
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
                      ? 'border-[var(--gold)] bg-[#f1e3d4] shadow-[0_8px_20px_rgba(120,98,73,0.08)]'
                      : 'border-[var(--border)] bg-[var(--surface)] hover:bg-[#f8efe5]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">{service.shortLabel}</p>
                      <p className="mt-1 text-xs text-[var(--text-soft)]">{service.price}</p>
                      <p className="mt-1 text-xs font-medium text-[var(--gold-deep)]">{service.wearTime}</p>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-deep)]">
                      Voir
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/95 p-5 shadow-[0_18px_50px_rgba(120,98,73,0.07)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)]">
                <img
                  src={currentService.image}
                  alt={currentService.imageAlt}
                  className="h-72 w-full object-cover sm:h-80"
                />
              </div>

              <div className="mt-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--foreground)]">{currentService.title}</h3>
                    <p className="mt-1 text-sm font-medium text-[var(--gold-deep)]">{currentService.price}</p>
                    <p className="mt-2 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2 text-xs font-semibold text-[var(--gold-deep)]">
                      {currentService.wearTime}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveInfoTab('discover')}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                      activeInfoTab === 'discover'
                        ? 'border border-[var(--gold)] bg-[var(--accent-strong)] text-[#fffaf5] shadow-[0_10px_24px_rgba(159,126,93,0.18)]'
                        : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--text-soft)] hover:bg-[#f8efe5]'
                    }`}
                  >
                    Découvrir la prestation
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveInfoTab('care')}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                      activeInfoTab === 'care'
                        ? 'border border-[var(--gold)] bg-[var(--accent-strong)] text-[#fffaf5] shadow-[0_10px_24px_rgba(159,126,93,0.18)]'
                        : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--text-soft)] hover:bg-[#f8efe5]'
                    }`}
                  >
                    Préserver l’ongle
                  </button>
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-[var(--border)] bg-[#fbf5ee] p-5">
                  {activeInfoTab === 'discover' ? (
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--gold-deep)]">
                        {currentService.discoverTitle}
                      </p>
                      <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--text-soft)]">
                        {currentService.discoverText.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--gold-deep)]">
                        {currentService.careTitle}
                      </p>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--text-soft)]">
                        {currentService.careText.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
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
  );
}
