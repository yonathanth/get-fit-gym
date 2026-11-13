/**
 * Display date for an event: the admin's optional custom text (dateString)
 * wins; otherwise the real eventDate is formatted, e.g. "April 15, 2026".
 */
export function eventDisplayDate(eventDate: Date | string | null | undefined, dateString?: string | null): string {
  if (dateString && dateString.trim()) return dateString.trim();
  if (!eventDate) return "Upcoming";
  const d = new Date(eventDate);
  if (Number.isNaN(d.getTime())) return "Upcoming";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "Africa/Addis_Ababa" });
}
