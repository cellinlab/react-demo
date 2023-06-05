import { Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <h2>Courses</h2>
      <Outlet />
    </div>
  );
};

export default Courses;
