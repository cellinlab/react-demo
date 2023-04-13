import { useReducer, useRef } from "react";
import { FaChevronLeft, FaCalendarDay, FaChevronRight, FaCalendarCheck } from "react-icons/fa";

import { getWeek } from "../../utils/date-wrangler";
import weekReducer from "./weekReducer";

export default function WeekPicker({ date }) {
  const [week, dispatch] = useReducer(weekReducer, date, getWeek);
  const textboxRef = useRef();

  function goToDate() {
    const date = new Date(textboxRef.current.value);
    dispatch({ type: "SET_DATE", payload: date });
  }

  return (
    <div>
      <p className="date-picker">
        <button className="btn" onClick={() => dispatch({ type: "PREV_WEEK" })}>
          <FaChevronLeft />
          <span>Prev</span>
        </button>
        <button className="btn" onClick={() => dispatch({ type: "TODAY" })}>
          <FaCalendarDay />
          <span>Today</span>
        </button>
        <span>
          <input
            type="text"
            ref={textboxRef}
            placeholder="YYYY-MM-DD"
            defaultValue={date.toISOString().slice(0, 10)}
          />
          <button className="btn" onClick={goToDate}>
            <FaCalendarCheck />
            <span>Go</span>
          </button>
        </span>
        <button className="btn" onClick={() => dispatch({ type: "NEXT_WEEK" })}>
          <FaChevronRight />
          <span>Next</span>
        </button>
      </p>
      <p>
        {week.start.toDateString()} - {week.end.toDateString()}
      </p>
    </div>
  );
}
