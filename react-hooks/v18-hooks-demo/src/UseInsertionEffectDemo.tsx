import { useInsertionEffect, useEffect, useLayoutEffect, useState } from "react";

const FirstChild = () => {
  useInsertionEffect(() => {
    console.log("FirstChild useInsertionEffect");
    const style = document.createElement("style");
    style.innerHTML = `
      .css-in-js {
        color: red;
      }
    `;
    document.head.appendChild(style);
    return () => {
      console.log("FirstChild useInsertionEffect cleanup");
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    console.log("FirstChild useEffect");
    return () => {
      console.log("FirstChild useEffect cleanup");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("FirstChild useLayoutEffect");
    return () => {
      console.log("FirstChild useLayoutEffect cleanup");
    };
  }, []);

  return <div className="css-in-js">FirstChild</div>;
};

const SecondChild = () => {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .css-in-js {
        color: blue;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <div className="css-in-js">SecondChild</div>;
};

const UseInsertionEffectDemo = () => {
  const [showFirstChild, setShowFirstChild] = useState(true);

  return (
    <div>
      <h2>UseInsertionEffectDemo</h2>
      {showFirstChild ? <FirstChild /> : <SecondChild />}
      <button onClick={() => setShowFirstChild(!showFirstChild)}>Toggle</button>
    </div>
  );
};

export default UseInsertionEffectDemo;
