import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-[var(--border)] bg-[rgba(255,250,246,0.96)] shadow-[0_12px_30px_rgba(88,66,49,0.08)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="leading-tight">
          <span className="block font-serif-display text-2xl tracking-[-0.04em] text-[var(--foreground)]">
            Mélo Nail
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-[var(--text-soft)] sm:block">
            Prothésiste ongulaire · Neyron
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-[var(--text-soft)] md:flex">
          <Link href="/#prestations" className="transition hover:text-[var(--gold-deep)]">
            Prestations
          </Link>
          <Link href="/#galerie" className="transition hover:text-[var(--gold-deep)]">
            Réalisations
          </Link>
          <Link href="/reservation" className="transition hover:text-[var(--gold-deep)]">
            Réservation
          </Link>
          <Link href="/#contacts" className="transition hover:text-[var(--gold-deep)]">
            Contact
          </Link>
        </nav>

        <Link
          href="/reservation"
          className="inline-flex items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--accent-strong)] px-4 py-3 text-xs font-semibold text-[#fffaf6] shadow-[0_12px_24px_rgba(159,113,84,0.18)] transition hover:bg-[var(--gold-deep)] sm:px-5 sm:text-sm"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </header>
  );
}
