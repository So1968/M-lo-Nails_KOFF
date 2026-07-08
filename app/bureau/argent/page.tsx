export default function ArgentPage() {
  return (
    <main className="site-page px-4 py-10 sm:px-6">
      <section className="site-container-narrow">
        <div className="site-panel rounded-[2.2rem] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold-deep)]">
            Bureau privé · Argent
          </p>
          <h1 className="font-serif-display mt-4 text-4xl tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Argent
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-soft)]">
            Suivre ce qui entre, ce qui sort, et séparer travail / maison.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <Card title="J’ai gagné" text="Ajouter une prestation ou un paiement reçu." />
          <Card title="J’ai dépensé" text="Ajouter une dépense pro ou personnelle." />
          <Card title="Travail ou maison ?" text="Classer chaque somme pour éviter de tout mélanger." />
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
