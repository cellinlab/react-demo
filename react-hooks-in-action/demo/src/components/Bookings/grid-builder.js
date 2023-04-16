import { sessions as sessionNames } from '../../static.json';

import { addDays, shortISO } from '../../utils/date-wrangler';

export function getGrid(bookable, startDate) {
  const dates = bookable.days.sort().map(
    d => shortISO(addDays(startDate, d))
  );

  const sessions = bookable.sessions.map(s => sessionNames[s]);

  const grid = {};

  sessions.forEach(s => {
    grid[s] = {};
    dates.forEach(d => grid[s][d] = {
      session: s,
      date: d,
      bookableId: bookable.id,
      title: ""
    });
  });

  return {
    sessions,
    dates,
    grid,
  };
}

export function transformBookings(bookingsArray) {
  return bookingsArray.reduce((bookings, booking) => {
    const { session, date } = booking;
    if (!bookings[session]) {
      bookings[session] = {};
    }
    bookings[session][date] = booking;
    return bookings;
  }, {});
}