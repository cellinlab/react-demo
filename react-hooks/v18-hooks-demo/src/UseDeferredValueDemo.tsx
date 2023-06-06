import { useState, useDeferredValue } from "react";

const getList = (key: string) => {
  const res = [];

  for (let i = 0; i < 10000; i++) {
    if (String(i).includes(key)) {
      res.push(<li key={i}>{i}</li>);
    }
  }
  return res;
};

const UseDeferredValueDemo = () => {
  const [input, setInput] = useState("");
  const deferredValue = useDeferredValue(input);

  console.log("render");
  console.log("input", input);
  console.log("deferredValue", deferredValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h2>UseDeferredValueDemo</h2>
      <input type="text" value={input} onChange={handleChange} />
      <div>
        <ul>{deferredValue && getList(deferredValue)}</ul>
      </div>
    </div>
  );
};

export default UseDeferredValueDemo;
