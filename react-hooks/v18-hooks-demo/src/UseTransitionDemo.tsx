import { useTransition, useState } from "react";

const UseTransitionDemo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    startTransition(() => {
      const res: string[] = [];
      for (let i = 0; i < 10000; i++) {
        res.push(`${e.target.value} ${i}`);
      }
      setItems(res);
    });
  };
  return (
    <div>
      <h2>UseTransitionDemo</h2>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UseTransitionDemo;
