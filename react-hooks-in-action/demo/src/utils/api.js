import { shortISO } from "./date-wrangler";

export default function getData(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
}

export function getBookings(bookableId, startDate, endDate) {
  const start = shortISO(startDate);
  const end = shortISO(endDate);

  const urlBase = "http://localhost:3001/bookings";

  const query = `?bookableId=${bookableId}&date_gte=${start}&date_lte=${end}`;

  return getData(urlBase + query);
}
