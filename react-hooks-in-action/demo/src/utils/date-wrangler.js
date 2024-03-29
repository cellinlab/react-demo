export function addDays(date, days) {
  const clone = new Date(date.getTime());
  clone.setDate(clone.getDate() + days);
  return clone;
}

export function getWeek(forDate, daysOffset = 0) {
  const date = addDays(forDate, daysOffset);
  const day = date.getDay();

  return {
    start: addDays(date, -day),
    end: addDays(date, 6 - day),
    date,
  };
}

export function shortISO(date) {
  return date.toISOString().split('T')[0];
}

export const isDate = date => !isNaN(Date.parse(date));
