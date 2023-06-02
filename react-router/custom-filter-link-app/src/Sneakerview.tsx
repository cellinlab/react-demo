import { useParams } from "react-router-dom";

import NoMatch from "./NoMatch";

import { getSneakerById } from "./snkrs";

const Sneakerview = () => {
  const { id } = useParams();

  if (!id) return <NoMatch />;

  const snkr = getSneakerById(id);

  if (!snkr) return <NoMatch />;

  const name = `${snkr.brand} ${snkr.model} ${snkr.colorway}`;
  return (
    <div>
      <h2>{name}</h2>
      <img
        width={200}
        height={200}
        style={{
          borderRadius: "8px",
          maxWidth: "100%",
          aspectRatio: "1 / 1",
        }}
        src={snkr.imageUrl}
        alt={name}
      />
    </div>
  );
};

export default Sneakerview;
