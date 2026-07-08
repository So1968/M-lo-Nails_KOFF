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
  const [visibleMonthIndex, setVisibleMonthIndex] = useState(0);
  const [selectedDateISO, setSelectedDateISO] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientInstagram, setClientInstagram] = useState("");
  const [clientAddress, setClientAddress] = useState("");
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

  const calendarMonths = useMemo(() => {
    const monthMap = new Map<
      string,
      {
        key: string;
        label: string;
        year: number;
        monthIndex: number;
        availableDates: Date[];
      }
    >();

    availableDates.forEach((date) => {
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      const label = date.toLocaleDateString("fr-FR", {
        month: "long",
        year: "numeric",
      });

      const existingMonth = monthMap.get(key);

      if (existingMonth) {
        existingMonth.availableDates.push(date);
      } else {
        monthMap.set(key, {
          key,
          label,
          year: date.getFullYear(),
          monthIndex: date.getMonth(),
          availableDates: [date],
        });
      }
    });

    return Array.from(monthMap.values()).map((month) => {
      const firstDayOfMonth = new Date(month.year, month.monthIndex, 1);
      const lastDayOfMonth = new Date(month.year, month.monthIndex + 1, 0);
      const firstWeekdayIndex = (firstDayOfMonth.getDay() + 6) % 7;
      const availableDateSet = new Set(
        month.availableDates.map((date) => toISODate(date))
      );

      const days: Array<
        | null
        | {
            iso: string;
            date: Date;
            dayNumber: number;
            slotsCount: number;
            isAvailable: boolean;
          }
      > = [];

      for (let index = 0; index < firstWeekdayIndex; index += 1) {
        days.push(null);
      }

      for (let dayNumber = 1; dayNumber <= lastDayOfMonth.getDate(); dayNumber += 1) {
        const date = new Date(month.year, month.monthIndex, dayNumber);
        const iso = toISODate(date);
        const slots = availableDateSet.has(iso)
          ? getSlotsForDate(iso, selectedService.durationMinutes)
          : [];

        days.push({
          iso,
          date,
          dayNumber,
          slotsCount: slots.length,
          isAvailable: slots.length > 0,
        });
      }

      return {
        ...month,
        days,
      };
    });
  }, [availableDates, selectedService.durationMinutes]);

  const visibleMonth = calendarMonths[visibleMonthIndex] ?? calendarMonths[0];
  const canGoToPreviousMonth = visibleMonthIndex > 0;
  const canGoToNextMonth = visibleMonthIndex < calendarMonths.length - 1;
  const selectedDateBelongsToVisibleMonth = visibleMonth
    ? selectedDateISO.startsWith(visibleMonth.key)
    : false;
  const slotsForSelectedDate =
    selectedDateBelongsToVisibleMonth && selectedDateISO
      ? getSlotsForDate(selectedDateISO, selectedService.durationMinutes)
      : [];

  async function sendRequest() {
    if (!selectedService || !selectedDate || !selectedSlot || !clientName || !clientPhone) {
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
        clientPhone,
        clientEmail,
        clientInstagram,
        clientAddress,
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
            Les horaires proposés tiennent compte de la durée de la prestation.
            Votre demande créera une fiche cliente pour le suivi par Mélo.
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
                        setVisibleMonthIndex(0);
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
                  2. Choisir une date dans le calendrier
                </h2>

                <p className="mt-2 text-sm leading-6 text-[var(--text-soft)]">
                  Cliquez sur une date disponible, puis choisissez le créneau de cette journée.
                </p>

                {visibleMonth && (
                  <article className="mt-4 rounded-[1.8rem] border border-[var(--border)] bg-white p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-3">
                      <button
                        type="button"
                        disabled={!canGoToPreviousMonth}
                        onClick={() => {
                          setVisibleMonthIndex((currentIndex) => Math.max(currentIndex - 1, 0));
                          setSelectedDateISO("");
                          setSelectedSlot("");
                          setStatus("idle");
                        }}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-lg font-bold transition hover:bg-[var(--surface-2)] disabled:cursor-not-allowed disabled:opacity-30"
                        aria-label="Afficher le mois précédent"
                      >
                        ←
                      </button>

                      <h3 className="font-serif-display text-center text-2xl capitalize tracking-[-0.03em] text-[var(--gold-deep)]">
                        {visibleMonth.label}
                      </h3>

                      <button
                        type="button"
                        disabled={!canGoToNextMonth}
                        onClick={() => {
                          setVisibleMonthIndex((currentIndex) =>
                            Math.min(currentIndex + 1, calendarMonths.length - 1)
                          );
                          setSelectedDateISO("");
                          setSelectedSlot("");
                          setStatus("idle");
                        }}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-lg font-bold transition hover:bg-[var(--surface-2)] disabled:cursor-not-allowed disabled:opacity-30"
                        aria-label="Afficher le mois suivant"
                      >
                        →
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-7 gap-2 text-center text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--text-soft)]">
                      {["lun", "mar", "mer", "jeu", "ven", "sam", "dim"].map(
                        (dayLabel) => (
                          <span key={`${visibleMonth.key}-${dayLabel}`}>
                            {dayLabel}
                          </span>
                        )
                      )}
                    </div>

                    <div className="mt-2 grid grid-cols-7 gap-2">
                      {visibleMonth.days.map((day, index) => {
                        if (!day) {
                          return (
                            <span
                              key={`${visibleMonth.key}-empty-${index}`}
                              className="min-h-12 rounded-2xl"
                            />
                          );
                        }

                        const isSelected = selectedDateISO === day.iso;

                        return (
                          <button
                            key={day.iso}
                            type="button"
                            disabled={!day.isAvailable}
                            onClick={() => {
                              setSelectedDateISO(day.iso);
                              setSelectedSlot("");
                              setStatus("idle");
                            }}
                            className={`min-h-12 rounded-2xl border px-2 py-2 text-center text-sm font-bold transition ${
                              isSelected
                                ? "border-[var(--gold-deep)] bg-[var(--accent-strong)] text-[#fffaf6]"
                                : day.isAvailable
                                  ? "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-2)]"
                                  : "border-transparent bg-transparent text-[var(--text-soft)] opacity-30"
                            }`}
                            aria-label={`Choisir le ${formatFrenchDate(day.date)}`}
                          >
                            <span>{day.dayNumber}</span>
                            {day.isAvailable && (
                              <span className="mt-1 block text-[0.6rem] font-semibold">
                                {day.slotsCount} cr.
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {selectedDateBelongsToVisibleMonth &&
                      selectedDateISO &&
                      slotsForSelectedDate.length > 0 && (
                        <div className="mt-5 rounded-[1.4rem] border border-[var(--gold-deep)] bg-[var(--surface-2)] p-4">
                          <p className="text-sm font-semibold text-[var(--text-soft)]">
                            Créneaux disponibles le{" "}
                            <span className="font-bold text-[var(--foreground)]">
                              {selectedDate ? formatFrenchDate(selectedDate) : ""}
                            </span>
                          </p>

                          <div className="mt-3 flex flex-wrap gap-3">
                            {slotsForSelectedDate.map((slot) => {
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
                        </div>
                      )}
                  </article>
                )}
              </section>

              <section>
                <h2 className="text-lg font-bold">3. Vos informations</h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold">
                      Prénom / nom *
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
                      Téléphone *
                    </span>
                    <input
                      value={clientPhone}
                      onChange={(event) => {
                        setClientPhone(event.target.value);
                        setStatus("idle");
                      }}
                      className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none focus:border-[var(--gold-deep)]"
                      placeholder="Votre téléphone"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold">
                      Instagram
                    </span>
                    <input
                      value={clientInstagram}
                      onChange={(event) => setClientInstagram(event.target.value)}
                      className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none focus:border-[var(--gold-deep)]"
                      placeholder="@votre_compte"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold">
                      Email
                    </span>
                    <input
                      value={clientEmail}
                      onChange={(event) => setClientEmail(event.target.value)}
                      className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none focus:border-[var(--gold-deep)]"
                      placeholder="votre@email.fr"
                    />
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="mb-2 block text-sm font-semibold">
                    Adresse
                  </span>
                  <input
                    value={clientAddress}
                    onChange={(event) => setClientAddress(event.target.value)}
                    className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3 outline-none focus:border-[var(--gold-deep)]"
                    placeholder="Adresse ou commune"
                  />
                </label>

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
                  !clientPhone
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
                  Choisissez un créneau et renseignez au minimum votre nom et téléphone.
                </div>
              )}

              <p className="mt-4 text-xs leading-6 text-[var(--text-soft)]">
                Une fiche cliente sera créée pour permettre à Mélo de suivre la demande.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
