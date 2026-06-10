export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-16 text-[var(--foreground)] sm:px-6">
      <section className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_16px_36px_rgba(120,98,73,0.08)]">
        <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold-deep)]">
          Informations légales
        </p>

        <h1 className="font-serif-display mt-4 text-4xl tracking-[-0.04em]">
          Mentions légales
        </h1>

        <div className="mt-8 space-y-8 leading-relaxed text-[var(--text-soft)]">
          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Éditeur du site
            </h2>
            <p className="mt-2">Le présent site est édité par Mélo Nail.</p>
            <p>Responsable de publication : Mélodie Blanco.</p>
            <p>Activité : prothésie ongulaire / prestations d’onglerie.</p>
            <p>Zone d’activité : Neyron et alentours.</p>
            <p className="mt-4 rounded-2xl bg-[var(--surface-2)] p-4 text-sm">
              À compléter avant validation définitive : SIRET, adresse de domiciliation ou adresse professionnelle, téléphone et e-mail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Hébergement
            </h2>
            <p className="mt-2">
              Le site est hébergé via une infrastructure déployée avec Coolify.
            </p>
            <p className="mt-4 rounded-2xl bg-[var(--surface-2)] p-4 text-sm">
              À compléter : nom de l’hébergeur final du serveur, adresse postale et moyen de contact.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Propriété intellectuelle
            </h2>
            <p className="mt-2">
              Les textes, visuels, photographies, vidéos et éléments graphiques présents sur ce site sont destinés à présenter l’univers et les prestations de Mélo Nail. Toute reproduction ou utilisation sans autorisation préalable est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              Contact
            </h2>
            <p className="mt-2">
              Pour toute question concernant le site ou les prestations, vous pouvez contacter Mélo Nail par les moyens indiqués sur le site.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
