import { useParams } from "react-router-dom";

import people from "./people";

const Person = () => {
  const { id } = useParams();
  const person = people.filter((person) => person.id === id)[0];

  return (
    <div>
      <h1>Person</h1>
      <h1>{person.name}</h1>
      <p>{person.address}</p>
    </div>
  );
};

export default Person;
