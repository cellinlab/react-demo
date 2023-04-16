import { useEffect, useMemo, useState } from "react";

import { getGrid, transformBookings } from "./grid-builder";

import { getBookings } from "../../utils/api";

import Spinner from "../common/Spinner";

export default function BookingsGrid(props) {
  const { week, bookable, booking, setBooking } = props;

  const [bookings, setBookings] = useState(null);
  const [error, setError] = useState(null);

  const { grid, sessions, dates } = useMemo(
    () => (bookable ? getGrid(bookable, week.start) : {}),
    [bookable, week.start]
  );

  useEffect(() => {
    if (bookable) {
      let doUpdate = true;
      setBooking(null);
      setError(null);
      setBookings(null);

      getBookings(bookable.id, week.start, week.end)
        .then((data) => {
          if (doUpdate) {
            setBookings(transformBookings(data));
          }
        })
        .catch((err) => {
          if (doUpdate) {
            setError(err.message);
          }
        });

      return () => {
        doUpdate = false;
      };
    }
  }, [bookable, week, setBooking]);

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
      {error && (
        <p className="bookingsError">Sorry, there was an error loading the bookings: {error}</p>
      )}
      <table className={bookings ? "bookingsGrid active" : "bookingsGrid"}>
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
