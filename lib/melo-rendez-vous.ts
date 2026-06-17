export type MeloService = {
  id: string;
  name: string;
  durationMinutes: number;
  description: string;
};

export type MeloAvailabilityWindow = {
  day: number;
  label: string;
  start: string;
  end: string;
};

export type MeloBookedSlot = {
  dateISO: string;
  start: string;
  durationMinutes: number;
  label: string;
};

export const meloServices: MeloService[] = [
  {
    id: "semi-permanent",
    name: "Semi-permanent",
    durationMinutes: 90,
    description: "Pose simple, mains propres et soignées.",
  },
  {
    id: "gainage",
    name: "Gainage / renfort",
    durationMinutes: 120,
    description: "Renfort de l’ongle naturel, tenue et élégance.",
  },
  {
    id: "remplissage",
    name: "Remplissage",
    durationMinutes: 120,
    description: "Entretien d’une pose existante.",
  },
  {
    id: "pose-complete",
    name: "Pose complète gel",
    durationMinutes: 180,
    description: "Pose complète avec construction. Temps large prévu au démarrage.",
  },
  {
    id: "depose",
    name: "Dépose",
    durationMinutes: 60,
    description: "Retrait propre d’une pose.",
  },
];

export const meloAvailability: MeloAvailabilityWindow[] = [
  { day: 2, label: "Mardi", start: "09:30", end: "12:30" },
  { day: 2, label: "Mardi", start: "14:00", end: "18:30" },
  { day: 3, label: "Mercredi", start: "14:00", end: "18:30" },
  { day: 4, label: "Jeudi", start: "09:30", end: "12:30" },
  { day: 4, label: "Jeudi", start: "14:00", end: "18:30" },
  { day: 5, label: "Vendredi", start: "09:30", end: "12:30" },
  { day: 5, label: "Vendredi", start: "14:00", end: "18:30" },
  { day: 6, label: "Samedi", start: "09:30", end: "13:00" },
];

/**
 * Démonstration de créneaux déjà pris.
 * Plus tard, ces créneaux viendront du bureau / planning et de Google Agenda.
 */
export const meloBookedSlots: MeloBookedSlot[] = [
  {
    dateISO: "2026-06-23",
    start: "14:00",
    durationMinutes: 120,
    label: "Rendez-vous déjà réservé",
  },
];

export function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function minutesToTime(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function addMinutesToTime(time: string, minutesToAdd: number) {
  return minutesToTime(timeToMinutes(time) + minutesToAdd);
}

export function formatFrenchDate(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);
}

export function toISODate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function getAvailableDates(daysAhead = 30) {
  const dates: Date[] = [];
  const today = new Date();

  for (let index = 1; index <= daysAhead; index += 1) {
    const date = new Date(today);
    date.setDate(today.getDate() + index);

    const hasAvailability = meloAvailability.some(
      (availability) => availability.day === date.getDay()
    );

    if (hasAvailability) {
      dates.push(date);
    }
  }

  return dates;
}

function overlaps(
  slotStart: number,
  slotEnd: number,
  bookedStart: number,
  bookedEnd: number
) {
  return slotStart < bookedEnd && slotEnd > bookedStart;
}

export function getSlotsForDate(dateISO: string, durationMinutes: number) {
  const date = new Date(`${dateISO}T12:00:00`);
  const day = date.getDay();

  const bookedSlotsForDate = meloBookedSlots.filter(
    (bookedSlot) => bookedSlot.dateISO === dateISO
  );

  return meloAvailability
    .filter((availability) => availability.day === day)
    .flatMap((availability) => {
      const slots: string[] = [];
      const start = timeToMinutes(availability.start);
      const end = timeToMinutes(availability.end);

      for (
        let slotStart = start;
        slotStart + durationMinutes <= end;
        slotStart += 30
      ) {
        const slotEnd = slotStart + durationMinutes;

        const isBlocked = bookedSlotsForDate.some((bookedSlot) => {
          const bookedStart = timeToMinutes(bookedSlot.start);
          const bookedEnd = bookedStart + bookedSlot.durationMinutes;

          return overlaps(slotStart, slotEnd, bookedStart, bookedEnd);
        });

        if (!isBlocked) {
          slots.push(minutesToTime(slotStart));
        }
      }

      return slots;
    });
}
