import { useCallback, useState } from "react";

import BookableList from "./BookableList";
import BookableDetail from "./BookableDetail";

export default function BookablesView() {
  const [bookable, setBookable] = useState();

  const updateBookable = useCallback((selected) => {
    if (selected) {
      selected.lastShown = Date.now();
      setBookable(selected);
    }
  }, []);

  return (
    <>
      <BookableList bookable={bookable} setBookable={updateBookable} />
      <BookableDetail bookable={bookable} />
    </>
  );
}
