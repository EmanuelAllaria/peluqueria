export const TIME_SLOTS = [
  "10:00",
  "11:30",
  "13:00",
  "14:30",
  "16:00",
  "17:30",
  "19:00",
] as const;

export type TimeSlot = (typeof TIME_SLOTS)[number];

export function isSunday(date: Date): boolean {
  return date.getDay() === 0;
}

export function isPastDate(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const compare = new Date(date);
  compare.setHours(0, 0, 0, 0);
  return compare < today;
}

export function isDateDisabled(date: Date): boolean {
  return isPastDate(date) || isSunday(date);
}

export function getAvailableSlots(date: Date): TimeSlot[] {
  if (isDateDisabled(date)) return [];

  const today = new Date();
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  if (!isToday) return [...TIME_SLOTS];

  const now = today.getHours() * 60 + today.getMinutes();
  return TIME_SLOTS.filter((slot) => {
    const [hours, minutes] = slot.split(":").map(Number);
    return hours * 60 + minutes > now + 60;
  });
}

export function formatBookingDate(date: Date): string {
  return new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
