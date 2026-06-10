export default function ArgentPage() {
  return (
    <main className="min-h-screen bg-[#f7f1eb] px-4 py-8 text-[#332a24]">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-semibold">Argent</h1>
        <p className="mt-4 text-[#6f6258]">
          Suivre ce qui entre, ce qui sort, et séparer travail / maison.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
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
    <div className="rounded-[1.5rem] border border-[#e6d8cc] bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-[#6f6258]">{text}</p>
    </div>
  );
}
