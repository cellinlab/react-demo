import { Routes, Route, Navigate } from "react-router-dom";
import Media from "react-media";

import PeopleList from "./PeopleList";
import Person from "./Person";
import people from "./people";

const PeopleContainer = () => {
  return (
    <Media queries={{ small: "(max-width: 700px)" }}>
      {(matches) =>
        matches.small ? (
          <>
            <Routes>
              <Route path="/:id" element={<Person />} />
            </Routes>
          </>
        ) : (
          <div style={{ display: "flex" }}>
            <PeopleList />
            <Routes>
              <Route path="/" element={<Navigate to={`/people/${people[0].id}`} />} />
              <Route path="/:id" element={<Person />} />
            </Routes>
          </div>
        )
      }
    </Media>
  );
};

export default PeopleContainer;
