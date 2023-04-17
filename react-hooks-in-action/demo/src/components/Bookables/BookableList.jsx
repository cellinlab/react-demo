import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

import useFetch from "../../utils/useFetch";

import Spinner from "../common/Spinner";

export default function BookableList({ bookable, setBookable }) {
  const { data: bookables = [], status, error } = useFetch("http://localhost:3001/bookables");

  const group = bookable?.group;

  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const groups = [...new Set(bookables.map((b) => b.group))];

  useEffect(() => {
    setBookable(bookables[0]);
  }, [bookables, setBookable]);

  const chnageGroup = (e) => {
    const bookablesInSelectedGroup = bookables.filter((b) => b.group === e.target.value);
    setBookable(bookablesInSelectedGroup[0]);
  };

  const changeBookable = (selectedBookable) => {
    setBookable(selectedBookable);
  };

  const nextBookable = () => {
    const i = bookablesInGroup.indexOf(bookable);
    const nextIndex = (i + 1) % bookablesInGroup.length;
    const nextBookable = bookablesInGroup[nextIndex];
    setBookable(nextBookable);
  };

  if (status === "error") {
    return <p>Sorry, there was an error loading the bookables: {error.message}</p>;
  }

  if (status === "loading") {
    return (
      <p>
        <Spinner />
        Loading bookables...
      </p>
    );
  }

  return (
    <div>
      <select value={group} onChange={chnageGroup}>
        {groups.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
      <ul className="bookables items-list-nav">
        {bookablesInGroup.map((b) => (
          <li key={b.id} className={b.id === bookable.id ? "selected" : ""}>
            <button className="btn" onClick={() => changeBookable(b)}>
              {b.title}
            </button>
          </li>
        ))}
      </ul>
      <p>
        <button className="btn" onClick={nextBookable} autoFocus>
          <FaArrowRight />
          <span>Next</span>
        </button>
      </p>
    </div>
  );
}
