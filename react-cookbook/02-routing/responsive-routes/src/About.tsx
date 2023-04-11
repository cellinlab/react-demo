import { NavLink, Routes, Route, Navigate } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div>
        <NavLink to="/about/apartment">Apartment</NavLink>
        <NavLink to="/about/offices">Offices</NavLink>
      </div>
      <div>
        <Routes>
          <Route path="/apartment" element={<div>Apartments</div>} />
          <Route path="/offices" element={<div>Offices</div>} />
          <Route path="*" element={<Navigate to="/about/apartment" />} />
        </Routes>
      </div>
    </div>
  );
};

export default About;
