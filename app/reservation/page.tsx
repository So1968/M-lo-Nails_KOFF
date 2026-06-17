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
  const [copied, setCopied] = useState(false);

  const selectedService =
    meloServices.find((service) => service.id === serviceId) ?? meloServices[0];

  const selectedDate = selectedDateISO
    ? new Date(`${selectedDateISO}T12:00:00`)
    : null;

  const selectedEndTime =
    selectedSlot && selectedService
      ? addMinutesToTime(selectedSlot, selectedService.durationMinutes)
      : "";

  const requestText = [
    "Bonjour Mélo,",
    "",
    "Je souhaite demander un rendez-vous.",
    selectedService ? `Prestation : ${selectedService.name}` : "",
    selectedDate ? `Date souhaitée : ${formatFrenchDate(selectedDate)}` : "",
    selectedSlot
      ? `Créneau souhaité : ${selectedSlot} - ${selectedEndTime}`
      : "",
    clientName ? `Nom : ${clientName}` : "",
    clientContact ? `Contact : ${clientContact}` : "",
    message ? `Message : ${message}` : "",
    "",
    "Merci de me confirmer si ce créneau est possible.",
  ]
    .filter(Boolean)
    .join("\n");

  async function copyRequest() {
    await navigator.clipboard.writeText(requestText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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
            Les horaires proposés tiennent compte de la durée de la prestation.
            Un gainage bloque plus longtemps qu’une dépose, pour laisser à Mélo
            le temps nécessaire.
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
                      onChange={(event) => setClientName(event.target.value)}
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
                      onChange={(event) => setClientContact(event.target.value)}
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
                onClick={copyRequest}
                disabled={!selectedSlot || !clientName || !clientContact}
                className="mt-6 w-full rounded-full bg-[var(--accent-strong)] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#fffaf6] transition hover:bg-[var(--gold-deep)] disabled:cursor-not-allowed disabled:opacity-45"
              >
                {copied ? "Demande copiée" : "Copier la demande"}
              </button>

              <p className="mt-4 text-xs leading-6 text-[var(--text-soft)]">
                Le créneau tient compte de la durée prévue. La confirmation
                définitive reste faite par Mélo.
              </p>

              <textarea
                readOnly
                value={requestText}
                className="mt-5 min-h-64 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm leading-6 text-[var(--foreground)]"
              />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
