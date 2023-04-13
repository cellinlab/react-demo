import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

import { days, sessions } from "../../static.json";
import reducer from "./reducer";
import getData from "../../utils/api";

import Spinner from "../common/Spinner";

const initialState = {
  group: "Rooms",
  bookableIndex: 0,
  hasDetails: true,
  bookables: [],
  isLoading: true,
  error: null,
};

export default function BookableList() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { group, bookableIndex, hasDetails, bookables, isLoading, error } = state;

  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const groups = [...new Set(bookables.map((b) => b.group))];
  const bookable = bookablesInGroup[bookableIndex];

  useEffect(() => {
    dispatch({ type: "FETCH_BOOKABLES_REQUEST" });

    getData("http://localhost:3001/bookables")
      .then((data) => {
        dispatch({ type: "FETCH_BOOKABLES_SUCCESS", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_BOOKABLES_ERROR", payload: err.message });
      });
  }, []);

  const changeBookable = (index) => {
    dispatch({
      type: "SET_BOOKABLE",
      payload: index,
    });
  };

  const chnageGroup = (e) => {
    dispatch({
      type: "SET_GROUP",
      payload: e.target.value,
    });
  };

  const nextBookable = () => {
    dispatch({
      type: "NEXT_BOOKABLE",
    });
  };

  const toggleDetails = () => {
    dispatch({
      type: "TOGGLE_HAS_DETAILS",
    });
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
    <>
      <div>
        <select value={group} onChange={chnageGroup}>
          {groups.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <ul className="bookables items-list-nav">
          {bookablesInGroup.map((b, i) => (
            <li key={b.id} className={i === bookableIndex ? "selected" : ""}>
              <button className="btn" onClick={() => changeBookable(i)}>
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
      {bookable && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>{bookable.title} </h2>
              <span className="controls">
                <label htmlFor="">
                  <input type="checkbox" checked={hasDetails} onChange={toggleDetails} />
                  Show Details
                </label>
              </span>
            </div>
            <p>{bookable.notes}</p>
            {hasDetails && (
              <div className="item-details">
                <h3>Availability</h3>
                <div className="bookable-availablility">
                  <ul>
                    {bookable.days.sort().map((d) => (
                      <li key={d}>{days[d]}</li>
                    ))}
                  </ul>
                  <ul>
                    {bookable.sessions.sort().map((s) => (
                      <li key={s}>{sessions[s]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
