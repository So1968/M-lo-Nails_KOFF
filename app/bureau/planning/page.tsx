"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ReservationRequest = {
  id: string;
  service: string;
  durationMinutes: number;
  dateISO: string;
  dateLabel: string;
  slot: string;
  endTime: string;
  clientName: string;
  clientContact: string;
  message: string;
  status: string;
  createdAt: string;
};

export default function BureauPlanningPage() {
  const [requests, setRequests] = useState<ReservationRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRequests() {
      const response = await fetch("/api/reservation-requests", {
        cache: "no-store",
      });

      if (response.ok) {
        const data = await response.json();
        setRequests(data.requests ?? []);
      }

      setLoading(false);
    }

    loadRequests();
  }, []);

  function buildGoogleCalendarUrl(request: ReservationRequest) {
    const start = new Date(`${request.dateISO}T${request.slot}:00`);
    const end = new Date(start);
    end.setMinutes(start.getMinutes() + request.durationMinutes);

    const formatForGoogle = (date: Date) =>
      date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const details = [
      `Cliente : ${request.clientName}`,
      `Contact : ${request.clientContact}`,
      `Prestation : ${request.service}`,
      request.message ? `Message : ${request.message}` : "",
      "",
      "Rendez-vous préparé depuis le bureau Mélo Nail.",
    ]
      .filter(Boolean)
      .join("\\n");

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `Mélo Nail - ${request.service} - ${request.clientName}`,
      dates: `${formatForGoogle(start)}/${formatForGoogle(end)}`,
      details,
      location: "Mélo Nail, Neyron",
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-10 text-[var(--foreground)] sm:px-6">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold-deep)]">
              Bureau privé · Planning
            </p>
            <h1 className="font-serif-display mt-3 text-4xl tracking-[-0.04em] sm:text-5xl">
              Demandes de rendez-vous
            </h1>
          </div>

          <Link
            href="/bureau"
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold transition hover:bg-[var(--surface-2)]"
          >
            ← Retour bureau
          </Link>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_45px_rgba(88,66,49,0.10)]">
          <p className="text-sm leading-7 text-[var(--text-soft)]">
            Les demandes envoyées depuis la page publique apparaissent ici. Mélo
            peut ensuite préparer l’ajout dans son agenda Google.
          </p>

          {loading && (
            <p className="mt-6 rounded-3xl bg-white p-5 text-sm text-[var(--text-soft)]">
              Chargement des demandes...
            </p>
          )}

          {!loading && requests.length === 0 && (
            <p className="mt-6 rounded-3xl bg-white p-5 text-sm text-[var(--text-soft)]">
              Aucune demande de rendez-vous pour le moment.
            </p>
          )}

          <div className="mt-6 grid gap-4">
            {requests.map((request) => (
              <article
                key={request.id}
                className="rounded-3xl border border-[var(--border)] bg-white p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-bold">
                      {request.clientName} · {request.service}
                    </p>
                    <p className="mt-2 text-sm text-[var(--text-soft)]">
                      {request.dateLabel} · {request.slot} - {request.endTime}
                    </p>
                    <p className="mt-2 text-sm text-[var(--text-soft)]">
                      Durée bloquée : {request.durationMinutes} min
                    </p>
                    <p className="mt-2 text-sm text-[var(--text-soft)]">
                      Contact : {request.clientContact}
                    </p>
                    {request.message && (
                      <p className="mt-2 text-sm text-[var(--text-soft)]">
                        Message : {request.message}
                      </p>
                    )}
                  </div>

                  <a
                    href={buildGoogleCalendarUrl(request)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[var(--accent-strong)] px-5 py-3 text-sm font-bold text-[#fffaf6] transition hover:bg-[var(--gold-deep)]"
                  >
                    Ajouter à Google Agenda
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
