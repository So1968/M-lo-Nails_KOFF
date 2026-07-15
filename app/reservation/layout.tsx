import type { ReactNode } from "react";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export default function ReservationLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <div className="flex w-full justify-center pt-[132px]">
        <div className="w-full max-w-5xl">
          {children}

          <section className="ar加besque-corner mx-4 mb-14 rounded-[2.3rem] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_16px_38px_rgba(120,98,73,0.08)] sm:mx-6 sm:p-9">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold-deep)]">
              Avant de réserver
            </p>
            <div className="mt-4 grid gap-5 md:grid-cols-[1fr_0.75fr] md:items-center">
              <div>
                <h2 className="font-serif-display text-3xl tracking-[-0.04em] text-[var(--foreground)]">
                  Découvrir Mélo et son projet
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">
                  Mélo Nail est encore une ébauche de projet professionnel. La page de présentation permet de comprendre l’univers de Mélodie, son style, son parcours en construction et les informations de contact actuellement disponibles.
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/presentation"
                  className="flex w-full items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--accent-strong)] px-5 py-3 text-sm font-semibold text-[#fffaf6] transition hover:bg-[var(--gold-deep)]"
                >
                  Voir la présentation de Mélo
                </Link>
                <p className="text-center text-xs leading-6 text-[var(--text-soft)]">
                  Pas de téléphone public pour le moment. Un compte Instagram professionnel sera créé séparément du compte personnel.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
