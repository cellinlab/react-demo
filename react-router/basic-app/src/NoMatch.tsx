import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      NoMatch
      <div>404</div>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </div>
  );
};

export default NoMatch;
