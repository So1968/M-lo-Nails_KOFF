export default function UrssafPage() {
  return (
    <main className="min-h-screen bg-[#f7f1eb] px-4 py-8 text-[#332a24]">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-semibold">URSSAF</h1>
        <p className="mt-4 text-[#6f6258]">
          Préparer les déclarations, suivre le chiffre d’affaires et éviter les oublis.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card title="Chiffre d’affaires à déclarer" text="Additionner les prestations encaissées sur la période." />
          <Card title="Échéance" text="Noter la prochaine date de déclaration." />
          <Card title="Cotisations estimées" text="Prévoir ce qu’il faudra payer." />
          <Card title="Historique" text="Garder une trace des déclarations déjà faites." />
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
