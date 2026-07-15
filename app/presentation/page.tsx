import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const skills = [
  "Pose d’ongles et univers onglerie",
  "Manucure soignée et préparation de l’ongle",
  "Goût du détail, finitions propres et travail minutieux",
  "Style doux, chic et créatif",
  "Accueil calme, écoute et respect du rythme de chaque cliente"
];

const steps = [
  {
    title: "Projet professionnel",
    text: "Mélo construit progressivement son activité autour de l’onglerie, avec l’envie de proposer des poses élégantes, propres et adaptées au style de chaque cliente."
  },
  {
    title: "Spécialité visée",
    text: "Son projet se concentre sur les ongles : pose, gainage, semi-permanent, manucure, nail art discret ou créatif, et beauté des pieds esthétique."
  },
  {
    title: "Formation en cours",
    text: "La page est encore une ébauche : les formations, attestations et expériences seront ajoutées au fur et à mesure de son parcours."
  }
];

export default function PresentationPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-page px-4 pb-16 pt-[112px] sm:px-6">
        <section className="site-container-narrow">
          <div className="site-panel overflow-hidden rounded-[2.3rem] p-6 sm:p-9">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold-deep)]">
              Présentation
            </p>

            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <h1 className="font-serif-display text-4xl tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl">
                  Qui est Mélo ?
                </h1>

                <p className="mt-5 text-lg leading-8 text-[var(--text-soft)]">
                  Mélo Nail est un projet d’onglerie en construction, porté par Mélodie, une jeune femme créative, minutieuse et attentive aux détails. Son univers se veut doux, propre et élégant : des poses soignées, pensées pour mettre les mains en valeur sans en faire trop.
                </p>

                <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">
                  Cette page présente une première ébauche de son parcours. Elle sera complétée au fil de ses formations, de ses réalisations et de son expérience.
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                  <Link
                    href="/reservation"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--accent-strong)] px-7 py-4 text-sm font-semibold text-[#fffaf6] shadow-[0_14px_28px_rgba(159,113,84,0.18)] transition hover:bg-[var(--gold-deep)]"
                  >
                    Réserver un créneau
                  </Link>
                  <Link
                    href="/#contacts"
                    className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-7 py-4 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
                  >
                    Voir les contacts
                  </Link>
                </div>
              </div>

              <aside className="rounded-[2rem] border border-[var(--border)] bg-[var(--accent-soft)]/70 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold-deep)]">
                  Mini CV
                </p>
                <h2 className="font-serif-display mt-3 text-3xl tracking-[-0.04em] text-[var(--foreground)]">
                  Mélodie · Mélo Nail
                </h2>
                <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-soft)]">
                  <p><strong className="text-[var(--foreground)]">Secteur :</strong> Neyron · 01700</p>
                  <p><strong className="text-[var(--foreground)]">Activité :</strong> onglerie, manucure, pose d’ongles</p>
                  <p><strong className="text-[var(--foreground)]">Statut :</strong> projet en construction</p>
                  <p><strong className="text-[var(--foreground)]">Contact :</strong> formulaire de réservation en ligne</p>
                  <p><strong className="text-[var(--foreground)]">Instagram pro :</strong> compte à créer</p>
                </div>
              </aside>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.title} className="site-card rounded-[1.6rem] p-6">
                <h2 className="text-xl font-semibold text-[var(--foreground)]">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 site-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold-deep)]">
              Ce qui caractérise Mélo
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill} className="rounded-[1.3rem] border border-[var(--border)] bg-[var(--surface-2)] px-4 py-4 text-sm font-medium text-[var(--foreground)]">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 text-sm leading-7 text-[var(--text-soft)] shadow-[0_12px_28px_rgba(120,98,73,0.06)]">
            <p className="font-semibold text-[var(--foreground)]">Information importante</p>
            <p className="mt-2">
              Aucun numéro de téléphone personnel n’est affiché pour le moment. Quand Mélo aura un numéro professionnel dédié et un compte Instagram professionnel, ils pourront être ajoutés ici.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
