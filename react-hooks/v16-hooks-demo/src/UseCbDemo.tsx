import { useCallback, useState, memo } from "react";

const CompWithCb = memo(({ getTotalFunc }: any) => {
  console.log("CompWithCb render");

  return (
    <div>
      <h2>CompWithCb</h2>
      <button onClick={getTotalFunc}>Get Total</button>
    </div>
  );
});

const CompWithoutCb = ({ getTotalFunc }: any) => {
  console.log("CompWithoutCb render");

  return (
    <div>
      <h2>CompWithoutCb</h2>
      <button onClick={getTotalFunc}>Get Total</button>
    </div>
  );
};

const UseCbDemo = () => {
  const [price, setPrice] = useState(10);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  const handlePrice = () => {
    setPrice(price + 1);
  };
  const getTotalFunc1 = useCallback(() => {
    setTotal(price * 0.8);
  }, [price]);
  const getTotalFunc2 = () => {
    setTotal(price * 0.8);
  };

  return (
    <div>
      <h2>UseCbDemo</h2>
      <p>
        price: {price}, total: {total}, count: {count}
      </p>
      <button onClick={handlePrice}>Price +1</button>
      <button onClick={handleCount}>Count +1</button>
      <hr />
      <CompWithCb getTotalFunc={getTotalFunc1} />
      <hr />
      <CompWithoutCb getTotalFunc={getTotalFunc2} />
    </div>
  );
};

export default UseCbDemo;
