/**
 * Formats an optional time range into a display string.
 * Returns "09:00–17:00" if both provided, "09:00" if only start, null if neither.
 */
export function formatTimeRange(start?: string, end?: string): string | null {
  if (start && end) return `${start}–${end}`;
  return start ?? null;
}
