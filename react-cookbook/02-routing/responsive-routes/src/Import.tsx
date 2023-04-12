import { useEffect, useState } from "react";

const Important = () => {
  const initialValue = "initial value";

  const [data, setData] = useState(initialValue);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (data !== initialValue) {
      setDirty(true);
    }
  }, [data, initialValue]);

  return (
    <div>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        onChange={(e: any) => setData(e.target.value)}
        value={data}
      ></textarea>
      <br />
      <button onClick={() => setDirty(false)} disabled={!dirty}>
        Save
      </button>
    </div>
  );
};

export default Important;
