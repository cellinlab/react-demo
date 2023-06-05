import { useParams, Link } from "react-router-dom";

import { capitalizeString } from "./utils";

const Course = () => {
  let { id } = useParams<"id">();

  return (
    <div>
      <h2>Welcome to the {id!.split("-").map(capitalizeString).join(" ")} course!</h2>

      <p>This is a great course. You're gonna love it!</p>

      <Link to="/courses">See all courses</Link>
    </div>
  );
};

export default Course;
