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
      <div className="flex w-full justify-center pt-[82px]">
        <div className="w-full max-w-5xl">
          {children}

          <section className="mx-4 mb-12 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_14px_34px_rgba(120,98,73,0.07)] sm:mx-6 sm:p-8">
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
