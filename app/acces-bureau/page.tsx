"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccesBureauPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const response = await fetch("/api/bureau-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });

    setLoading(false);

    if (!response.ok) {
      setError("Code incorrect. Vérifie le code d’accès.");
      return;
    }

    router.push("/bureau");
  }

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-16 text-[var(--foreground)] sm:px-6">
      <section className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center">
        <div className="w-full rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_18px_45px_rgba(88,66,49,0.10)]">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold-deep)]">
            Bureau privé
          </p>

          <h1 className="font-serif-display mt-4 text-4xl tracking-[-0.04em]">
            Accès au bureau Mélo Nail
          </h1>

          <p className="mt-4 text-[var(--text-soft)]">
            Cet espace est réservé à Mélo et aux personnes autorisées.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[var(--foreground)]">
                Code d’accès
              </span>
              <input
                type="password"
                value={code}
                onChange={(event) => setCode(event.target.value)}
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-5 py-4 text-lg outline-none transition focus:border-[var(--gold-deep)] focus:ring-4 focus:ring-[rgba(183,121,95,0.16)]"
                placeholder="Entrer le code"
                autoComplete="current-password"
              />
            </label>

            {error && (
              <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[var(--accent-strong)] px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#fffaf6] shadow-[0_14px_28px_rgba(159,113,84,0.20)] transition hover:bg-[var(--gold-deep)] disabled:opacity-60"
            >
              {loading ? "Vérification..." : "Entrer dans le bureau"}
            </button>
          </form>

          <p className="mt-6 text-xs leading-6 text-[var(--text-soft)]">
            Par sécurité, ne partagez ce code qu’avec les personnes autorisées.
          </p>
        </div>
      </section>
    </main>
  );
}
