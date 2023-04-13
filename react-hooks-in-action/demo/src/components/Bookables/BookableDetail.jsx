import { useState } from "react";

import { days, sessions } from "../../static.json";

export default function BookableDetail({ bookable }) {
  const [hasDetails, setHasDetails] = useState(false);

  const toggleDetails = () => {
    setHasDetails(!hasDetails);
  };

  return bookable ? (
    <div className="bookable-details item">
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
  ) : null;
}
