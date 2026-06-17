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

const weekDays = ["lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim."];

function getMonthLabel(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function getMonthKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function getCalendarDays(monthDate: Date) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1, 12, 0, 0);
  const lastDay = new Date(year, month + 1, 0, 12, 0, 0);
  const firstDayOffset = (firstDay.getDay() + 6) % 7;

  const days: Array<Date | null> = Array.from(
    { length: firstDayOffset },
    () => null
  );

  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    days.push(new Date(year, month, day, 12, 0, 0));
  }

  while (days.length % 7 !== 0) {
    days.push(null);
  }

  return days;
}

function chunkByWeek(days: Array<Date | null>) {
  const weeks: Array<Array<Date | null>> = [];

  for (let index = 0; index < days.length; index += 7) {
    weeks.push(days.slice(index, index + 7));
  }

  return weeks;
}

export default function ReservationPage() {
  const availableDates = useMemo(() => getAvailableDates(120), []);
  const [serviceId, setServiceId] = useState(meloServices[0]?.id ?? "");
  const [selectedDateISO, setSelectedDateISO] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1, 12, 0, 0);
  });

  const selectedService =
    meloServices.find((service) => service.id === serviceId) ?? meloServices[0];

  const selectedDate = selectedDateISO
    ? new Date(`${selectedDateISO}T12:00:00`)
    : null;

  const selectedEndTime =
    selectedSlot && selectedService
      ? addMinutesToTime(selectedSlot, selectedService.durationMinutes)
      : "";

  const calendarDays = useMemo(
    () => getCalendarDays(visibleMonth),
    [visibleMonth]
  );

  const calendarWeeks = useMemo(() => chunkByWeek(calendarDays), [calendarDays]);

  const availableDateSet = useMemo(
    () => new Set(availableDates.map((date) => toISODate(date))),
    [availableDates]
  );

  const selectedDaySlots = selectedDateISO
    ? getSlotsForDate(selectedDateISO, selectedService.durationMinutes)
    : [];

  const firstMonthKey = getMonthKey(new Date());
  const lastAvailableDate = availableDates[availableDates.length - 1] ?? new Date();
  const lastMonthKey = getMonthKey(lastAvailableDate);
  const visibleMonthKey = getMonthKey(visibleMonth);

  const canGoPrevious = visibleMonthKey > firstMonthKey;
  const canGoNext = visibleMonthKey < lastMonthKey;

  function changeMonth(direction: -1 | 1) {
    setVisibleMonth(
      (currentMonth) =>
        new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth() + direction,
          1,
          12,
          0,
          0
        )
    );
    setSelectedDateISO("");
    setSelectedSlot("");
    setStatus("idle");
  }

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
            Choisissez une prestation, puis ouvrez une date
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-soft)]">
            Cliquez sur une journée disponible : les horaires s’ouvrent
            directement sous le calendrier, avec le formulaire juste en dessous.
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
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold">2. Choisir une date</h2>
                    <p className="mt-1 text-sm text-[var(--text-soft)]">
                      Les jours disponibles affichent le nombre de dispos.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => changeMonth(-1)}
                      disabled={!canGoPrevious}
                      className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-bold transition hover:bg-[var(--surface-2)] disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      ←
                    </button>
                    <p className="min-w-36 text-center text-sm font-bold capitalize">
                      {getMonthLabel(visibleMonth)}
                    </p>
                    <button
                      type="button"
                      onClick={() => changeMonth(1)}
                      disabled={!canGoNext}
                      className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-bold transition hover:bg-[var(--surface-2)] disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      →
                    </button>
                  </div>
                </div>

                <div className="mt-5 rounded-[1.6rem] border border-[var(--border)] bg-white p-4">
                  <div className="grid grid-cols-7 gap-2 text-center text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                    {weekDays.map((day) => (
                      <div key={day}>{day}</div>
                    ))}
                  </div>

                  <div className="mt-3 space-y-2">
                    {calendarWeeks.map((week, weekIndex) => {
                      const selectedDateIsInWeek = week.some(
                        (date) => date && toISODate(date) === selectedDateISO
                      );

                      return (
                        <div key={`week-${weekIndex}`}>
                          <div className="grid grid-cols-7 gap-2">
                            {week.map((date, index) => {
                              if (!date) {
                                return (
                                  <div
                                    key={`empty-${weekIndex}-${index}`}
                                    className="min-h-14 rounded-2xl bg-[var(--surface)] opacity-50"
                                  />
                                );
                              }

                              const dateISO = toISODate(date);
                              const slots = getSlotsForDate(
                                dateISO,
                                selectedService.durationMinutes
                              );
                              const hasSlots =
                                availableDateSet.has(dateISO) && slots.length > 0;
                              const isSelected = selectedDateISO === dateISO;

                              return (
                                <button
                                  key={dateISO}
                                  type="button"
                                  disabled={!hasSlots}
                                  onClick={() => {
                                    setSelectedDateISO(dateISO);
                                    setSelectedSlot("");
                                    setStatus("idle");
                                  }}
                                  className={`min-h-14 rounded-2xl border px-2 py-2 text-center transition ${
                                    isSelected
                                      ? "border-[var(--gold-deep)] bg-[var(--accent-strong)] text-[#fffaf6]"
                                      : hasSlots
                                        ? "border-[var(--border)] bg-[var(--surface-2)] hover:border-[var(--gold-deep)]"
                                        : "border-transparent bg-[var(--surface)] text-[var(--text-soft)] opacity-45"
                                  }`}
                                >
                                  <span className="block text-sm font-bold">
                                    {date.getDate()}
                                  </span>
                                  {hasSlots && (
                                    <span className="mt-1 block text-[0.65rem] font-semibold">
                                      {slots.length} dispo{slots.length > 1 ? "s" : ""}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {selectedDateIsInWeek && selectedDate && (
                            <div className="mt-3 rounded-[1.4rem] border border-[var(--gold)] bg-[var(--surface-2)] p-5 shadow-[0_14px_34px_rgba(159,113,84,0.12)]">
                              <div className="flex flex-wrap items-center justify-between gap-3">
                                <div>
                                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold-deep)]">
                                    Horaires disponibles
                                  </p>
                                  <h3 className="mt-1 font-bold capitalize">
                                    {formatFrenchDate(selectedDate)}
                                  </h3>
                                </div>

                                <p className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[var(--text-soft)]">
                                  {selectedDaySlots.length} dispo
                                  {selectedDaySlots.length > 1 ? "s" : ""}
                                </p>
                              </div>

                              <div className="mt-4 flex flex-wrap gap-3">
                                {selectedDaySlots.map((slot) => {
                                  const end = addMinutesToTime(
                                    slot,
                                    selectedService.durationMinutes
                                  );
                                  const isSelected = selectedSlot === slot;

                                  return (
                                    <button
                                      key={`${selectedDateISO}-${slot}`}
                                      type="button"
                                      onClick={() => {
                                        setSelectedSlot(slot);
                                        setStatus("idle");
                                      }}
                                      className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                                        isSelected
                                          ? "border-[var(--gold-deep)] bg-[var(--accent-strong)] text-[#fffaf6]"
                                          : "border-[var(--border)] bg-white hover:bg-[var(--surface)]"
                                      }`}
                                    >
                                      {slot} - {end}
                                    </button>
                                  );
                                })}
                              </div>

                              <div className="mt-6 border-t border-[var(--border)] pt-5">
                                <h4 className="font-bold">Vos coordonnées</h4>

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
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
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
                  <strong>Horaire :</strong>{" "}
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
                    Mélo devra confirmer le rendez-vous avant qu’il soit
                    définitif.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="mt-5 rounded-3xl border border-red-200 bg-red-50 p-5 text-sm leading-7 text-red-700">
                  Vérifiez que vous avez choisi un horaire et rempli vos
                  coordonnées.
                </div>
              )}

              <p className="mt-4 text-xs leading-6 text-[var(--text-soft)]">
                L’horaire tient compte de la durée prévue. La confirmation
                définitive reste faite par Mélo.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
