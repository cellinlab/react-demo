import { shortISO } from "../../utils/date-wrangler";
import useFetch from "../../utils/useFetch";
import { useBookingsParams } from "./bookingsHooks";

import BookableList from "../Bookables/BookableList";
import Bookings from "./Bookings";
import PageSpinner from "../common/PageSpinner";

export default function BookingsPage() {
  const { data: bookables = [], status, error } = useFetch("http://localhost:3001/bookables");

  const { bookableId, date } = useBookingsParams();

  const bookable = bookables.find((b) => b.id === bookableId) || bookables[0];

  function getUrl(id) {
    const base = `/bookings?bookableId=${id}`;
    return date ? `${base}&date=${shortISO(date)}` : base;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  if (status === "loading") {
    return <PageSpinner />;
  }

  return (
    <main className="bookings-page">
      <BookableList bookable={bookable} bookables={bookables} getUrl={getUrl} />
      <Bookings bookable={bookable} />
    </main>
  );
}
