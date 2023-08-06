import { useState } from "react";
import {
  useDebounceEffect,
  useMount,
  useUnmount,
  useUpdate,
  useUpdateEffect,
  useToggle,
} from "ahooks";

const MountDemo = () => {
  useMount(() => {
    console.log("Mount");
  });

  useUnmount(() => {
    console.log("Unmount");
  });

  return <div>Mount</div>;
};

const UpdateDemo = () => {
  const update = useUpdate();

  return (
    <>
      <div>Time: {Date.now()}</div>
      <button onClick={update}>update</button>
    </>
  );
};

const UpdateEffectDemo = () => {
  const [count, setCount] = useState(0);

  useUpdateEffect(() => {
    console.log("count", count);
  }, [count]);

  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>add</button>
    </>
  );
};

const LifeCycle = () => {
  const [value1, setValue1] = useState<string>("hello ahooks");
  const [records, setRecords] = useState<string[]>([]);

  const [isMountShow, { toggle }] = useToggle(false);

  useDebounceEffect(
    () => {
      setRecords((records) => [...records, value1]);
    },
    [value1],
    {
      wait: 500,
    }
  );

  return (
    <div>
      <h2>LifeCycle</h2>
      <hr />
      <h3>useDebounceEffect</h3>
      <div>
        <input
          value={value1}
          onChange={(e) => {
            setValue1(e.target.value);
          }}
          placeholder="Typed value"
        />
        <p>value: {value1}</p>
        <ul>
          {records.map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>
      </div>
      <hr />
      <h3>useMount & useUnmount</h3>
      <div>
        <button
          onClick={() => {
            toggle();
          }}
        >
          {isMountShow ? "Hide Mount Demo" : "Show Mount Demo"}
        </button>
        {isMountShow && <MountDemo />}
      </div>
      <hr />
      <h3>useUpdate</h3>
      <div>
        <UpdateDemo />
      </div>
      <hr />
      <h3>useUpdateEffect</h3>
      <div>
        <UpdateEffectDemo />
      </div>
    </div>
  );
};

export default LifeCycle;
