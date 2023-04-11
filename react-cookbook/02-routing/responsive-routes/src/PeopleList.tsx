import { NavLink } from "react-router-dom";

import people from "./people";

const PeopleList = () => {
  return (
    <div>
      <h2>PeopleList</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <NavLink to={`/people/${person.id}`}>{person.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
