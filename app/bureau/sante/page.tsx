export default function SantePage() {
  return (
    <main className="min-h-screen bg-[#f7f1eb] px-4 py-8 text-[#332a24]">
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-semibold">Santé / CPAM</h1>
        <p className="mt-4 text-[#6f6258]">
          Suivre la protection santé de l’entrepreneure : CPAM, arrêts, mutuelle, prévoyance et ergonomie.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
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
    <div className="rounded-[1.5rem] border border-[#e6d8cc] bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-[#6f6258]">{text}</p>
    </div>
  );
}
