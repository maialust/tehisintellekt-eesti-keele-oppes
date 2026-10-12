const WEEKDAYS = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];

/** "28.11.2026" → "laupäev" */
export function weekday(date: string) {
  const [d, m, y] = date.split(".").map(Number);
  const day = new Date(y, m - 1, d).getDay();
  return Number.isNaN(day) ? "" : WEEKDAYS[day];
}

/** "laupäev" → "Laupäev" */
export const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
