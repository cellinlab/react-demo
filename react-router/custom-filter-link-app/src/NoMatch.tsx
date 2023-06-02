import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here</h2>
      <p>Sorry, we couldn't find what you were looking for.</p>
      <p>
        <Link to="/">Go home</Link>
      </p>
    </div>
  );
};

export default NoMatch;
