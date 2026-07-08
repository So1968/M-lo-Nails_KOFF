export default function PrixPage() {
  return (
    <main className="site-page px-4 py-10 sm:px-6">
      <section className="site-container-narrow">
        <div className="site-panel rounded-[2.2rem] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold-deep)]">
            Bureau privé · Tarifs
          </p>
          <h1 className="font-serif-display mt-4 text-4xl tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Prix & devis
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-soft)]">
            Aider Mélo à fixer des prix justes, éviter les tarifs trop bas et préparer des devis simples.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card title="Calculer un prix" text="Temps, produits, frais, marge souhaitée." />
          <Card title="Vérifier le prix" text="Trop bas, minimum acceptable ou plus confortable." />
          <Card title="Créer un devis" text="Transformer le calcul en document clair." />
          <Card title="Comparer au marché" text="Utiliser l’étude de marché pour ajuster les tarifs." />
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
