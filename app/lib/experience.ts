// Start of data engineering work (Upwork). Used to derive the "years" stat.
export const DE_START = new Date(2025, 2, 1); // Mar 2025

export function experienceLabel(now: Date = new Date()): string {
  const months =
    (now.getFullYear() - DE_START.getFullYear()) * 12 +
    (now.getMonth() - DE_START.getMonth());
  const years = Math.floor(Math.max(months, 0) / 6) / 2; // round down to 0.5
  return years < 1 ? '<1 Yr' : `${years}+ Yrs`;
}
