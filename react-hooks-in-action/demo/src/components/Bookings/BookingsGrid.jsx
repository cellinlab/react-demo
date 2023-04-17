import { useEffect, useMemo, useState } from "react";

import { useBookings, useGrid } from "./bookingsHooks";

import Spinner from "../common/Spinner";

export default function BookingsGrid(props) {
  const { week, bookable, booking, setBooking } = props;

  const { bookings, status, error } = useBookings(bookable?.id, week.start, week.end);

  const { grid, sessions, dates } = useGrid(bookable, week.start);

  useEffect(() => {
    setBooking(null);
  }, [bookable, week.start, setBooking]);

  function cell(session, date) {
    const cellData = bookings?.[session]?.[date] || grid[session][date];
    const isSelected = booking?.session === session && booking?.date === date;

    return (
      <td
        key={date}
        className={isSelected ? "selected" : null}
        onClick={bookings ? () => setBooking(cellData) : null}
      >
        {cellData?.title || "\u00A0"}
      </td>
    );
  }

  if (!grid) {
    return (
      <p>
        <Spinner />
        Loading bookings...
      </p>
    );
  }

  return (
    <>
      {status === "error" && (
        <p className="bookingsError">Sorry, there was an error loading the bookings: {error}</p>
      )}
      <table className={status === "success" ? "bookingsGrid active" : "bookingsGrid"}>
        <thead>
          <tr>
            <th>
              <span className="status">
                <Spinner />
              </span>
            </th>
            {dates.map((date) => (
              <th key={date}>{new Date(date).toDateString()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session}>
              <th>{session}</th>
              {dates.map((date) => cell(session, date))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
