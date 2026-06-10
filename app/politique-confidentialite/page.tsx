export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-16 text-[var(--foreground)] sm:px-6">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_16px_36px_rgba(120,98,73,0.08)]">
        <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold-deep)]">
          Données personnelles
        </p>

        <h1 className="font-serif-display mt-4 text-4xl tracking-[-0.04em]">
          Politique de confidentialité
        </h1>

        <div className="mt-8 space-y-8 leading-relaxed text-[var(--text-soft)]">
          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Données collectées
            </h2>
            <p className="mt-2">
              Lorsque vous contactez Mélo Nail ou prenez rendez-vous, certaines informations peuvent être nécessaires : nom, prénom, coordonnées, demande de prestation, disponibilité ou message transmis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Utilisation
            </h2>
            <p className="mt-2">
              Ces informations servent uniquement à répondre aux demandes, gérer les rendez-vous, assurer le suivi client et organiser les prestations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Droits
            </h2>
            <p className="mt-2">
              Vous pouvez demander l’accès, la rectification ou la suppression des informations vous concernant en contactant Mélo Nail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Cookies
            </h2>
            <p className="mt-2">
              Le site peut utiliser des cookies strictement nécessaires à son fonctionnement. Si des outils de suivi plus avancés sont ajoutés, cette page devra être complétée.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
