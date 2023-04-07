import { useCallback, useState } from "react";

const PriceInput = (
  {
    value = {
      currency: 'USD',
      amount: 0,
    },
    onChange
  }
) => {
  const handleChange = useCallback(
    (newValue) => {
      onChange({
        ...value,
        ...newValue
      });
    },
    [value, onChange]
  );

  return (
    <div>
      <input
        value={value.amount}
        onChange={(e) => handleChange({ amount: e.target.value })}
      />
      <select
        value={value.currency}
        onChange={(e) => handleChange({ currency: e.target.value })}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
    </div>
  );
};

const Demo = () => {
  const [price, setPrice] = useState({
    currency: 'USD',
    amount: 0,
  });

  const handleChange = (newValue) => setPrice(newValue);

  return (
    <div>
      <h1>Controlled Component</h1>
      <PriceInput value={price} onChange={handleChange} />
      <p>
        {price.currency} {price.amount || 0}
      </p>
    </div>
  );
};

export default Demo;
