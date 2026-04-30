export default function EtudeMarche() {
  const concurrents = [
    ["Ongl’Ydée", "Neyron", "Prothésiste ongulaire locale", "Concurrente directe à Neyron"],
    ["GLOCEA", "Miribel", "Salon privé, manucure russe", "Positionnement soigné / personnalisé"],
    ["L’Art du Détail", "Mas Rillier / Miribel", "Gel, capsules, remplissage, babyboomer, french, semi", "Offre large et visible"],
    ["Laury Nails", "Miribel", "Pose gel chablon dès 60€", "Tarifs plus élevés, clientèle déjà installée"]
  ];

  const tarifs = [
    ["Semi-permanent", "30€ à 45€", "20€ à 25€ au démarrage"],
    ["Pose gel / capsules", "50€ à 70€", "25€ à 35€ au démarrage"],
    ["Remplissage gel", "40€ à 55€", "25€ à 35€"],
    ["Nail art simple", "+5€ à +15€", "+3€ à +10€"],
    ["Dépose", "10€ à 25€", "10€ à 15€"]
  ];

  return (
    <main className="min-h-screen bg-[#f7f1eb] px-4 py-8 text-[#332a24]">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-[#e6d8cc] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.25em] text-[#9f7154]">
            Bureau Mélo Nail
          </p>
          <h1 className="mt-4 text-4xl font-semibold">Étude de marché</h1>
          <p className="mt-4 max-w-3xl text-[#6f6258]">
            Analyse simple du marché local pour aider Mélo à fixer ses prix,
            comprendre sa concurrence et construire une offre cohérente.
          </p>
        </div>

        <div className="mt-8 rounded-[2rem] border border-[#e6d8cc] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Concurrence locale repérée</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#e6d8cc] text-[#8a7668]">
                  <th className="py-3 pr-4">Nom</th>
                  <th className="py-3 pr-4">Lieu</th>
                  <th className="py-3 pr-4">Offre visible</th>
                  <th className="py-3 pr-4">Lecture pour Mélo</th>
                </tr>
              </thead>
              <tbody>
                {concurrents.map(([nom, lieu, offre, lecture]) => (
                  <tr key={nom} className="border-b border-[#f0e5dc]">
                    <td className="py-4 pr-4 font-medium">{nom}</td>
                    <td className="py-4 pr-4">{lieu}</td>
                    <td className="py-4 pr-4 text-[#6f6258]">{offre}</td>
                    <td className="py-4 pr-4 text-[#6f6258]">{lecture}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-[#e6d8cc] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Tarifs repères et place possible de Mélo</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#e6d8cc] text-[#8a7668]">
                  <th className="py-3 pr-4">Prestation</th>
                  <th className="py-3 pr-4">Marché observé</th>
                  <th className="py-3 pr-4">Mélo au démarrage</th>
                </tr>
              </thead>
              <tbody>
                {tarifs.map(([prestation, marche, melo]) => (
                  <tr key={prestation} className="border-b border-[#f0e5dc]">
                    <td className="py-4 pr-4 font-medium">{prestation}</td>
                    <td className="py-4 pr-4 text-[#6f6258]">{marche}</td>
                    <td className="py-4 pr-4 font-medium text-[#9f7154]">{melo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Card title="Positionnement Mélo Nail">
            <p>
              Mélo Nail peut se positionner comme une offre douce, jeune, soignée,
              accessible et locale. Pas low-cost, pas institut luxe : un style joli,
              propre, créatif et rassurant.
            </p>
          </Card>

          <Card title="Clientèle cible">
            <ul className="list-disc pl-5">
              <li>Jeunes femmes autour de Neyron / Miribel</li>
              <li>Clientes qui veulent une pose propre sans prix trop élevé</li>
              <li>Clientes régulières pour remplissage ou semi</li>
              <li>Personnes qui découvrent l’onglerie</li>
            </ul>
          </Card>

          <Card title="Forces">
            <ul className="list-disc pl-5">
              <li>Identité visuelle déjà douce et professionnelle</li>
              <li>Tarifs accessibles au démarrage</li>
              <li>Possibilité de créer une relation de confiance</li>
              <li>Style jeune, actuel, personnalisable</li>
            </ul>
          </Card>

          <Card title="Points à travailler">
            <ul className="list-disc pl-5">
              <li>Plus de photos avant/après</li>
              <li>Portfolio Instagram régulier</li>
              <li>Temps de pose à maîtriser</li>
              <li>Tarifs à augmenter progressivement quand la qualité et la vitesse montent</li>
            </ul>
          </Card>

          <Card title="Idées d’offres">
            <ul className="list-disc pl-5">
              <li>Offre découverte : -5€ sur la première pose</li>
              <li>Carte fidélité : 5 poses = petit nail art offert</li>
              <li>Pack remplissage mensuel</li>
              <li>Mini supplément nail art simple</li>
            </ul>
          </Card>

          <Card title="Prochaines actions">
            <ul className="list-disc pl-5">
              <li>Ajouter 6 photos fortes au portfolio</li>
              <li>Fixer une grille tarifaire claire</li>
              <li>Créer une fiche cliente simple</li>
              <li>Suivre temps passé / prix / bénéfice par pose</li>
            </ul>
          </Card>
        </div>
      </section>
    </main>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[1.5rem] border border-[#e6d8cc] bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 leading-relaxed text-[#6f6258]">{children}</div>
    </div>
  );
}
