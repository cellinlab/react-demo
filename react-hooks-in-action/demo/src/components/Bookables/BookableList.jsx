import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import getData from "../../utils/api";

import Spinner from "../common/Spinner";

export default function BookableList({ bookable, setBookable }) {
  const [bookables, setBookables] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const nextBtnRef = useRef();

  const group = bookable?.group;

  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const groups = [...new Set(bookables.map((b) => b.group))];

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getData("http://localhost:3001/bookables")
      .then((data) => {
        setBookable(data[0]);
        setBookables(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [setBookable]);

  const chnageGroup = (e) => {
    const bookablesInSelectedGroup = bookables.filter((b) => b.group === e.target.value);
    setBookable(bookablesInSelectedGroup[0]);
  };

  const changeBookable = (selectedBookable) => {
    setBookable(selectedBookable);
    nextBtnRef.current.focus();
  };

  const nextBookable = () => {
    const i = bookablesInGroup.indexOf(bookable);
    const nextIndex = (i + 1) % bookablesInGroup.length;
    const nextBookable = bookablesInGroup[nextIndex];
    setBookable(nextBookable);
  };

  if (error) {
    return <p>Sorry, there was an error loading the bookables: {error}</p>;
  }

  if (isLoading) {
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
        <button className="btn" onClick={nextBookable} ref={nextBtnRef} autoFocus>
          <FaArrowRight />
          <span>Next</span>
        </button>
      </p>
    </div>
  );
}
