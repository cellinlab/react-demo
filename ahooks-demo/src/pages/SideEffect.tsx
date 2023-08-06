import { useState } from "react";
import { useDebounce, useInterval } from "ahooks";

const SideEffect = () => {
  const [value, setValue] = useState<string>("");
  const [intervalCount, setIntervalCount] = useState(0);
  const [intervalCount2, setIntervalCount2] = useState(0);
  const [interval2, setInterval2] = useState<number | null>(1000);

  const debouncedValue = useDebounce(value, {
    wait: 500,
  });

  useInterval(() => {
    setIntervalCount((intervalCount) => intervalCount + 1);
  }, 1000);

  useInterval(
    () => {
      setIntervalCount2((intervalCount2) => intervalCount2 + 1);
    },
    interval2,
    {
      immediate: false,
    }
  );

  return (
    <div>
      <h2>SideEffect</h2>
      <hr />
      <h3>useDebounce</h3>
      <div>
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Typed value"
        />
        <p>value: {value}</p>
        <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
      </div>
      <hr />
      <h3>useInterval</h3>
      <div>
        <p>IntervalCount: {intervalCount}</p>
      </div>
      <hr />
      <h3>useInterval with options</h3>
      <div>
        <p>IntervalCount2: {intervalCount2}</p>
        <p>Interval2: {interval2}</p>
        <button
          onClick={() => {
            setInterval2((interval2 as number) + 1000);
          }}
        >
          Change Interval2
        </button>
        <button
          onClick={() => {
            setInterval2(null);
          }}
        >
          Clear Interval2
        </button>
      </div>
    </div>
  );
};

export default SideEffect;
