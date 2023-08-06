import { useToggle } from "ahooks";

const Toggle = () => {
  const [state, { toggle }] = useToggle(true);

  return (
    <div>
      <h2>useToggle</h2>
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
      </p>
    </div>
  );
};

export default Toggle;
