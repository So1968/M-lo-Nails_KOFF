"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  addMinutesToTime,
  formatFrenchDate,
  getAvailableDates,
  getSlotsForDate,
  meloServices,
  toISODate,
} from "@/lib/melo-rendez-vous";

export default function ReservationPage() {
  const availableDates = useMemo(() => getAvailableDates(30), []);
  const [serviceId, setServiceId] = useState(meloServices[0]?.id ?? "");
  const [selectedDateISO, setSelectedDateISO] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const selectedService =
    meloServices.find((service) => service.id === serviceId) ?? meloServices[0];

  const selectedDate = selectedDateISO
    ? new Date(`${selectedDateISO}T12:00:00`)
    : null;

  const selectedEndTime =
    selectedSlot && selectedService
      ? addMinutesToTime(selectedSlot, selectedService.durationMinutes)
      : "";

  async function sendRequest() {
    if (!selectedService || !selectedDate || !selectedSlot || !clientName || !clientContact) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const response = await fetch("/api/reservation-requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service: selectedService.name,
        durationMinutes: selectedService.durationMinutes,
        dateISO: selectedDateISO,
        dateLabel: formatFrenchDate(selectedDate),
        slot: selectedSlot,
        endTime: selectedEndTime,
        clientName,
        clientContact,
        message,
      }),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("sent");
  }

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-8 text-[var(--foreground)] sm:px-6">
      <section className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold transition hover:bg-[var(--surface-2)]"
          >
            ← Retour au site
          </Link>

          <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-soft)]">
            Mélo Nail · réservation
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_45px_rgba(88,66,49,0.10)] sm:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--gold-deep)]">
            Prendre rendez-vous simplement
          </p>

          <h1 className="font-serif-display mt-4 max-w-3xl text-4xl tracking-[-0.04em] sm:text-5xl">
            Choisissez votre prestation, puis cliquez sur un créneau
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-soft)]">
            Les créneaux proposés tiennent compte de la durée de la prestation.
            Mélo confirmera ensuite le rendez-vous.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="space-y-8">
              <section>
                <h2 className="text-lg font-bold">1. Choisir la prestation</h2>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {meloServices.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => {
                        setServiceId(service.id);
                        setSelectedDateISO("");
                        setSelectedSlot("");
                        setStatus("idle");
                      }}
                      className={`rounded-3xl border p-5 text-left transition ${
                        serviceId === service.id
                          ? "border-[var(--gold-deep)] bg-[var(--surface-2)] shadow-[0_12px_30px_rgba(159,113,84,0.14)]"
                          : "border-[var(--border)] bg-white hover:bg-[var(--surface-2)]"
                      }`}
                    >
                      <span className="block font-bold">{service.name}</span>
                      <span className="mt-2 block text-sm leading-6 text-[var(--text-soft)]">
                        {service.description}
                      </span>
                      <span className="mt-3 block text-xs uppercase tracking-[0.18em] text-[var(--gold-deep)]">
                        Durée prévue : {service.durationMinutes} min
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold">
                  2. Choisir directement un créneau disponible
                </h2>

                <div className="mt-4 grid gap-4">
                  {availableDates.map((date) => {
                    const dateISO = toISODate(date);
                    const slots = getSlotsForDate(
                      dateISO,
                      selectedService.durationMinutes
                    );

                    if (slots.length === 0) {
                      return null;
                    }

                    return (
                      <article
                        key={dateISO}
                        className={`rounded-[1.6rem] border p-5 transition ${
                          selectedDateISO === dateISO
                            ? "border-[var(--gold-deep)] bg-[var(--surface-2)]"
                            : "border-[var(--border)] bg-white"
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h3 className="font-bold capitalize">
                            {formatFrenchDate(date)}
                          </h3>
                          <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-soft)]">
                            {slots.length} créneau{slots.length > 1 ? "x" : ""}
                          </p>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-3">
                          {slots.map((slot) => {
                            const end = addMinutesToTime(
                              slot,
                              selectedService.durationMinutes
                            );
                            const isSelected =
                              selectedDateISO === dateISO &&
                              selectedSlot === slot;

                            return (
                              <button
                                key={`${dateISO}-${slot}`}
                                type="button"
                                onClick={() => {
                                  setSelectedDateISO(dateISO);
                                  setSelectedSlot(slot);
                                  setStatus("idle");
                                }}
                                className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                                  isSelected
                                    ? "border-[var(--gold-deep)] bg-[var(--accent-strong)] text-[#fffaf6]"
                                    : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]"
                                }`}
                              >
                                {slot} - {end}
                              </button>
                            );
                          })}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>

              <section>
                <h2 className="text-lg font-bold">3. Vos coordonnées</h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold">
                      Prénom / nom
                    </span>
                    <input
                      value={clientName}
                      onChange={(event) => {
                        setClientName(event.target.value);
                        setStatus("idle");
                      }}
                      className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none focus:border-[var(--gold-deep)]"
                      placeholder="Votre nom"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold">
                      Téléphone ou Instagram
                    </span>
                    <input
                      value={clientContact}
                      onChange={(event) => {
                        setClientContact(event.target.value);
                        setStatus("idle");
                      }}
                      className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none focus:border-[var(--gold-deep)]"
                      placeholder="Votre contact"
                    />
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="mb-2 block text-sm font-semibold">
                    Message facultatif
                  </span>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="min-h-28 w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none focus:border-[var(--gold-deep)]"
                    placeholder="Couleur, nail art souhaité, contrainte horaire..."
                  />
                </label>
              </section>
            </div>

            <aside className="h-fit rounded-[1.8rem] border border-[var(--border)] bg-white p-6 lg:sticky lg:top-28">
              <h2 className="text-lg font-bold">Votre demande</h2>

              <div className="mt-5 space-y-3 rounded-3xl bg-[var(--surface-2)] p-5 text-sm leading-7">
                <p>
                  <strong>Prestation :</strong>{" "}
                  {selectedService?.name ?? "À choisir"}
                </p>
                <p>
                  <strong>Durée bloquée :</strong>{" "}
                  {selectedService?.durationMinutes ?? 0} min
                </p>
                <p>
                  <strong>Date :</strong>{" "}
                  {selectedDate ? formatFrenchDate(selectedDate) : "À choisir"}
                </p>
                <p>
                  <strong>Créneau :</strong>{" "}
                  {selectedSlot
                    ? `${selectedSlot} - ${selectedEndTime}`
                    : "À choisir"}
                </p>
              </div>

              <button
                type="button"
                onClick={sendRequest}
                disabled={
                  status === "sending" ||
                  !selectedSlot ||
                  !clientName ||
                  !clientContact
                }
                className="mt-6 w-full rounded-full bg-[var(--accent-strong)] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#fffaf6] transition hover:bg-[var(--gold-deep)] disabled:cursor-not-allowed disabled:opacity-45"
              >
                {status === "sending"
                  ? "Envoi en cours..."
                  : status === "sent"
                    ? "Demande envoyée"
                    : "Demander ce rendez-vous"}
              </button>

              {status === "sent" && (
                <div className="mt-5 rounded-3xl border border-[var(--gold)] bg-[var(--surface-2)] p-5 text-sm leading-7">
                  <p className="font-bold text-[var(--gold-deep)]">
                    Votre demande a bien été envoyée.
                  </p>
                  <p className="mt-2 text-[var(--text-soft)]">
                    Mélo devra confirmer le rendez-vous avant qu’il soit définitif.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="mt-5 rounded-3xl border border-red-200 bg-red-50 p-5 text-sm leading-7 text-red-700">
                  Vérifiez que vous avez choisi un créneau et rempli vos coordonnées.
                </div>
              )}

              <p className="mt-4 text-xs leading-6 text-[var(--text-soft)]">
                Le créneau tient compte de la durée prévue. La confirmation
                définitive reste faite par Mélo.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
