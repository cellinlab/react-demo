import React from "react";

import useWindowSize from "./useWindowSize";

const Demo = () => {
  const [size, width, height] = useWindowSize();

  return (
    <>
      <div className="info">
        <p>Size: {size}</p>
        <p>Width: {width}</p>
        <p>Height: {height}</p>
      </div>
      {
        size === 'large' ? (
          <div className="large">
            <h1>Large</h1>
          </div>
        ) : (
          <div className="small">
            <h1>Small</h1>
          </div>
        )
      }
    </>
  );
};

export default Demo;
