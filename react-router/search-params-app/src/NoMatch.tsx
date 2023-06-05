import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <h3>No match for this route</h3>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default NoMatch;
