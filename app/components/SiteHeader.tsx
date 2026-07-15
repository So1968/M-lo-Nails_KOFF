import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed left-1/2 top-4 z-[100] w-[calc(100%-1rem)] max-w-6xl -translate-x-1/2 rounded-[2.4rem] border border-[var(--border)] bg-[rgba(255,250,246,0.97)] shadow-[0_18px_42px_rgba(88,66,49,0.14)] backdrop-blur sm:w-[calc(100%-2rem)]">
      <div className="pointer-events-none absolute inset-x-8 bottom-2 hidden h-px bg-gradient-to-r from-transparent via-[rgba(171,128,70,0.32)] to-transparent md:block" />
      <div className="pointer-events-none absolute inset-x-14 top-3 hidden h-px bg-gradient-to-r from-transparent via-[rgba(200,165,111,0.22)] to-transparent md:block" />

      <div className="mx-auto flex items-center justify-between gap-3 px-5 py-5 sm:px-8 sm:py-6">
        <Link href="/" className="leading-tight">
          <span className="block font-serif-display text-3xl tracking-[-0.05em] text-[var(--foreground)]">
            Mélo Nail
          </span>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-[var(--text-soft)] sm:block">
            Prothésiste ongulaire · Neyron
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-[var(--text-soft)] md:flex">
          <Link href="/presentation" className="transition hover:text-[var(--gold-deep)]">
            Mélo
          </Link>
          <Link href="/#prestations" className="transition hover:text-[var(--gold-deep)]">
            Prestations
          </Link>
          <Link href="/#galerie" className="transition hover:text-[var(--gold-deep)]">
            Réalisations
          </Link>
          <Link href="/reservation" className="transition hover:text-[var(--gold-deep)]">
            Réservation
          </Link>
          <Link href="/presentation#contact" className="transition hover:text-[var(--gold-deep)]">
            Contact
          </Link>
        </nav>

        <Link
          href="/reservation"
          className="inline-flex items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--accent-strong)] px-4 py-3 text-xs font-semibold text-[#fffaf6] shadow-[0_12px_24px_rgba(159,113,84,0.18)] transition hover:bg-[var(--gold-deep)] sm:px-6 sm:py-4 sm:text-sm"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </header>
  );
}
