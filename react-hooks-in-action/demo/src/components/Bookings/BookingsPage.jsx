import { useState } from "react";

import BookableList from "../Bookables/BookableList";
import Bookings from "./Bookings";

export default function BookingsPage() {
  const [bookable, setBookable] = useState(null);

  return (
    <main className="bookings-page">
      <BookableList bookable={bookable} setBookable={setBookable} />
      <Bookings bookable={bookable} />
    </main>
  );
}
