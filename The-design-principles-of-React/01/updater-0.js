function useState(value) {
  const getter = () => value;
  const setter = (newValue) => {
    value = newValue;
  };

  return [getter, setter];
}

const [count, setCount] = useState(0);

console.log(count()); // 0
setCount(1);
console.log(count()); // 1