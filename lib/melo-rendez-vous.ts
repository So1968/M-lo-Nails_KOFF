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

export const meloServices: MeloService[] = [
  {
    id: "semi-permanent",
    name: "Semi-permanent",
    durationMinutes: 60,
    description: "Pose simple, mains propres et soignées.",
  },
  {
    id: "gainage",
    name: "Gainage / renfort",
    durationMinutes: 90,
    description: "Renfort de l’ongle naturel, tenue et élégance.",
  },
  {
    id: "remplissage",
    name: "Remplissage",
    durationMinutes: 90,
    description: "Entretien d’une pose existante.",
  },
  {
    id: "pose-complete",
    name: "Pose complète gel",
    durationMinutes: 120,
    description: "Pose complète avec construction.",
  },
  {
    id: "depose",
    name: "Dépose",
    durationMinutes: 45,
    description: "Retrait propre d’une pose.",
  },
];

export const meloAvailability: MeloAvailabilityWindow[] = [
  { day: 2, label: "Mardi matin", start: "09:30", end: "12:00" },
  { day: 2, label: "Mardi après-midi", start: "14:00", end: "18:00" },
  { day: 3, label: "Mercredi après-midi", start: "14:00", end: "18:00" },
  { day: 4, label: "Jeudi matin", start: "09:30", end: "12:00" },
  { day: 4, label: "Jeudi après-midi", start: "14:00", end: "18:00" },
  { day: 5, label: "Vendredi matin", start: "09:30", end: "12:00" },
  { day: 5, label: "Vendredi après-midi", start: "14:00", end: "18:00" },
  { day: 6, label: "Samedi matin", start: "09:30", end: "12:30" },
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

export function formatFrenchDate(date: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
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

export function getSlotsForDate(dateISO: string, durationMinutes: number) {
  const date = new Date(`${dateISO}T12:00:00`);
  const day = date.getDay();

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
        slots.push(minutesToTime(slotStart));
      }

      return slots;
    });
}
