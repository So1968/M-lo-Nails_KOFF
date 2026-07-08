export default function SantePage() {
  return (
    <main className="site-page px-4 py-10 sm:px-6">
      <section className="site-container-narrow">
        <div className="site-panel rounded-[2.2rem] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold-deep)]">
            Bureau privé · Santé
          </p>
          <h1 className="font-serif-display mt-4 text-4xl tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Santé / CPAM
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-soft)]">
            Suivre la protection santé de l’entrepreneure : CPAM, arrêts, mutuelle, prévoyance et ergonomie.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card title="CPAM" text="Vérifier l’affiliation et les droits." />
          <Card title="Arrêt maladie" text="Penser au délai de transmission et suivre les indemnités." />
          <Card title="Mutuelle / prévoyance" text="Repérer ce qui protège en cas d’arrêt ou de baisse d’activité." />
          <Card title="Ergonomie" text="Prévenir les douleurs : dos, épaules, poignets, mains." />
        </div>
      </section>
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="site-card rounded-[1.6rem] p-6 transition hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_18px_36px_rgba(120,98,73,0.10)]">
      <h2 className="text-xl font-semibold text-[var(--foreground)]">{title}</h2>
      <p className="mt-3 leading-relaxed text-[var(--text-soft)]">{text}</p>
    </div>
  );
}
