import Link from 'next/link';
import {
  Activity,
  CalendarDays,
  ClipboardList,
  HeartPulse,
  Landmark,
  PiggyBank,
  ReceiptText,
  ShoppingBag,
  Sparkles,
  Tag,
  UsersRound
} from 'lucide-react';

const dailyCards = [
  {
    title: 'Santé & énergie',
    text: 'CPAM, mutuelle, fatigue, ergonomie et rendez-vous importants.',
    href: '/bureau/sante',
    icon: HeartPulse,
    badge: 'CPAM'
  },
  {
    title: 'Rendez-vous perso',
    text: 'Ce qui concerne Mélo : santé, papiers, rappels et organisation.',
    href: '#',
    icon: CalendarDays,
    badge: 'À venir'
  },
  {
    title: 'Papiers utiles',
    text: 'Retrouver facilement les démarches et documents à garder sous la main.',
    href: '#',
    icon: ClipboardList,
    badge: 'Repères'
  }
];

const businessCards = [
  {
    title: 'Clientes',
    text: 'Fiches clientes, habitudes, préférences et historique des poses.',
    href: '#',
    icon: UsersRound,
    badge: 'CRM'
  },
  {
    title: 'Planning clientes',
    text: 'Rendez-vous, temps de pose, annulations et créneaux à remplir.',
    href: '#',
    icon: CalendarDays,
    badge: 'Agenda'
  },
  {
    title: 'Prix & devis',
    text: 'Calculer juste : temps, produits, marge, offres et promotions.',
    href: '/bureau/prix',
    icon: Tag,
    badge: 'Tarifs'
  },
  {
    title: 'Argent',
    text: 'Revenus, dépenses, séparation pro / perso et bénéfice estimé.',
    href: '/bureau/argent',
    icon: PiggyBank,
    badge: '€'
  },
  {
    title: 'URSSAF',
    text: 'Chiffre d’affaires, échéances, déclarations et traces à conserver.',
    href: '/bureau/urssaf',
    icon: Landmark,
    badge: 'URSSAF'
  },
  {
    title: 'Matériel / boutique',
    text: 'Stock, produits, achats utiles et idées de boutique plus tard.',
    href: '#',
    icon: ShoppingBag,
    badge: 'Stock'
  }
];

export default function BureauMeloNail() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-6 text-[var(--foreground)] sm:px-6 lg:py-10">
      <section className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.3rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_22px_55px_rgba(88,66,49,0.10)] sm:p-8">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--gold-soft)]/25 blur-3xl" />
          <div className="absolute -bottom-16 left-12 h-44 w-44 rounded-full bg-white/70 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--gold-deep)]">
              <Sparkles className="h-4 w-4" />
              Bureau privé · Mélo Nail
            </div>

            <h1 className="font-serif-display mt-5 max-w-3xl text-4xl leading-none tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl">
              Bonjour Mélo,
              <span className="block text-gradient">qu’est-ce qu’on fait aujourd’hui ?</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--text-soft)] sm:text-lg">
              Un carnet de bord privé pour distinguer ce qui concerne ton quotidien et ce qui concerne la gestion de Mélo Nail. Simple, visuel, sans mélanger la vitrine cliente et ton espace de travail.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <StatusCard label="Aujourd’hui" value="Choisir une priorité" icon={Activity} />
          <StatusCard label="À surveiller" value="URSSAF / santé / argent" icon={ReceiptText} />
          <StatusCard label="Objectif" value="Tenir sans s’épuiser" icon={HeartPulse} />
        </div>

        <DashboardSection
          eyebrow="Vie quotidienne"
          title="Mon quotidien"
          text="Pour prendre soin de Mélo : santé, papiers, rendez-vous personnels, énergie et organisation."
          cards={dailyCards}
        />

        <DashboardSection
          eyebrow="Entreprise"
          title="Ma gestion Mélo Nail"
          text="Pour faire tourner l’activité : clientes, prix, argent, URSSAF, planning, matériel et objectifs."
          cards={businessCards}
        />

        <div className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--accent-soft)]/75 p-5 shadow-[0_14px_34px_rgba(120,98,73,0.07)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold-deep)]">Prochaine priorité</p>
          <h2 className="font-serif-display mt-2 text-3xl tracking-[-0.04em]">Rendre chaque page aussi claire que cette entrée.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-soft)]">
            Les modules sont volontairement courts au départ. On ajoute ensuite les vrais calculs, rappels, formulaires et documents sans transformer le bureau en usine à gaz.
          </p>
        </div>
      </section>
    </main>
  );
}

function DashboardSection({
  eyebrow,
  title,
  text,
  cards
}: {
  eyebrow: string;
  title: string;
  text: string;
  cards: typeof dailyCards;
}) {
  return (
    <section className="mt-10">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold-deep)]">{eyebrow}</p>
          <h2 className="font-serif-display mt-2 text-3xl tracking-[-0.04em] text-[var(--foreground)]">{title}</h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-[var(--text-soft)]">{text}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <BureauCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}

function BureauCard({
  title,
  text,
  href,
  icon: Icon,
  badge
}: {
  title: string;
  text: string;
  href: string;
  icon: typeof HeartPulse;
  badge: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-[1.6rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_12px_28px_rgba(120,98,73,0.06)] transition hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_18px_36px_rgba(120,98,73,0.10)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--gold-deep)]">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--gold-deep)]">
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">{text}</p>
    </Link>
  );
}

function StatusCard({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Activity }) {
  return (
    <div className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-[var(--gold-deep)]">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-soft)]">{label}</p>
          <p className="mt-1 font-semibold text-[var(--foreground)]">{value}</p>
        </div>
      </div>
    </div>
  );
}
