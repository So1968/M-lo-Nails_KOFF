const steps = [
  {
    title: "1. Sécuriser le projet",
    text: "Identifier ce qui bloque, ce qui rassure, le rythme possible et les conditions nécessaires pour apprendre sans pression scolaire."
  },
  {
    title: "2. Se former aux bases esthétiques",
    text: "Repérer une solution adaptée : CAP esthétique, cours à distance, modules courts ou accompagnement individualisé."
  },
  {
    title: "3. Pratiquer la pose d’ongles",
    text: "Travailler les gestes techniques : préparation de l’ongle, gel, semi-permanent, gainage, french, nail art, hygiène et sécurité."
  },
  {
    title: "4. Avancer par petites marches",
    text: "Prévoir des objectifs simples : une technique à la fois, quelques modèles de confiance, puis une montée progressive."
  }
];

const watchPoints = [
  "Éviter les formations trop longues ou trop scolaires au départ.",
  "Privilégier les formats courts, clairs, avec démonstrations et pratique.",
  "Garder une trace des acquis pour valoriser ses progrès.",
  "Ne pas exposer les difficultés personnelles sur la vitrine publique.",
  "Construire un parcours professionnel sérieux, mais compatible avec son rythme."
];

export default function FormationPage() {
  return (
    <main className="site-page px-4 py-10 sm:px-6">
      <section className="site-container-narrow">
        <div className="site-panel rounded-[2.2rem] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold-deep)]">
            Bureau privé · Formation adaptée
          </p>
          <h1 className="font-serif-display mt-4 text-4xl tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl">
            Se former sans se mettre en échec
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-soft)]">
            Mélo a besoin d’un parcours de formation rassurant, progressif et concret. L’objectif n’est pas de la remettre brutalement dans un cadre scolaire, mais de construire une montée en compétence sérieuse en esthétique et en pose d’ongles.
          </p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.title} className="site-card rounded-[1.6rem] p-6">
              <h2 className="text-xl font-semibold text-[var(--foreground)]">{step.title}</h2>
              <p className="mt-3 leading-relaxed text-[var(--text-soft)]">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[2rem] border border-[var(--border)] bg-[var(--accent-soft)]/75 p-6 shadow-[0_14px_34px_rgba(120,98,73,0.07)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold-deep)]">
            Points de vigilance
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--text-soft)]">
            {watchPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold-deep)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
