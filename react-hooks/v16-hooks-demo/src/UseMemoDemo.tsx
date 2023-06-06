import { useMemo, useState } from "react";

const usePow = (nums: number[]) => {
  console.log("usePow invoked");
  return nums.map((num) => Math.pow(num, 2));
};

const CompWithMemo = () => {
  console.log("CompWithMemo render");
  const [count, setCount] = useState(0);

  const data = useMemo(() => usePow([1, 2, 3, 4, 5]), []);

  return (
    <div>
      <h2>CompWithMemo</h2>
      <p>count: {count}</p>
      <p>data: {data.join(",")}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

const CompWithoutMemo = () => {
  console.log("CompWithoutMemo render");
  const [count, setCount] = useState(0);

  const data = usePow([1, 2, 3, 4, 5]);

  return (
    <div>
      <h2>CompWithoutMemo</h2>
      <p>count: {count}</p>
      <p>data: {data.join(",")}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

const UseMemoDemo = () => {
  console.log("UseMemoDemo render");
  return (
    <div>
      <h2>UseMemoDemo</h2>
      <hr />
      <CompWithMemo />
      <hr />
      <CompWithoutMemo />
    </div>
  );
};

export default UseMemoDemo;
