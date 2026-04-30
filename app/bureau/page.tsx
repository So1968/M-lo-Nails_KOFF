import Link from "next/link";

export default function BureauMeloNail() {
  const sections = [
    {
      title: "Planning",
      text: "Suivre les rendez-vous prévus, faits ou annulés.",
      href: "#"
    },
    {
      title: "Clientes",
      text: "Créer les fiches clientes, préférences et historique.",
      href: "#"
    },
    {
      title: "Argent",
      text: "Suivre revenus, dépenses, bénéfice estimé.",
      href: "#"
    },
    {
      title: "Étude de marché",
      text: "Comparer la concurrence, les prix et le positionnement.",
      href: "/bureau/marche"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f7f1eb] px-4 py-8 text-[#332a24]">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-[#e6d8cc] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.25em] text-[#9f7154]">
            Espace privé
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            Bureau Mélo Nail
          </h1>

          <p className="mt-4 max-w-3xl text-[#6f6258]">
            Espace de travail privé pour suivre l’activité, les clientes, les revenus,
            les dépenses, les objectifs et les décisions importantes.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Card label="Rendez-vous" value="À créer" />
          <Card label="Clientes" value="À créer" />
          <Card label="Revenus du mois" value="0 €" />
          <Card label="Dépenses" value="0 €" />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="rounded-[1.5rem] border border-[#e6d8cc] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-3 text-[#6f6258]">{section.text}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-[#e6d8cc] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Prochaine priorité</h2>
          <p className="mt-3 text-[#6f6258]">
            Construire le module argent : revenus, dépenses, bénéfice estimé,
            séparation pro / personnel.
          </p>
        </div>
      </section>
    </main>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.5rem] border border-[#e6d8cc] bg-white p-6 shadow-sm">
      <p className="text-sm text-[#8a7668]">{label}</p>
      <p className="mt-3 text-2xl font-semibold">{value}</p>
    </div>
  );
}
