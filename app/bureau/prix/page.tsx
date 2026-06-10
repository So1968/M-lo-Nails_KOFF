export default function PrixPage() {
  return (
    <main className="min-h-screen bg-[#f7f1eb] px-4 py-8 text-[#332a24]">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-semibold">Prix & devis</h1>
        <p className="mt-4 text-[#6f6258]">
          Aider Mélo à fixer des prix justes, éviter les tarifs trop bas et préparer des devis simples.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
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
    <div className="rounded-[1.5rem] border border-[#e6d8cc] bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-[#6f6258]">{text}</p>
    </div>
  );
}
