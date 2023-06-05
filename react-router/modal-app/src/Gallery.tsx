import { useLocation, Link } from "react-router-dom";

import { IMAGES } from "./images";

const Gallery = () => {
  const location = useLocation();

  return (
    <div
      style={{
        padding: "0 24px",
      }}
    >
      <h2>Gallery</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gridGap: "24px",
        }}
      >
        {IMAGES.map((img) => {
          return (
            <Link key={img.id} to={`/img/${img.id}`} state={{ backgroundLocation: location }}>
              <img
                width={200}
                height={200}
                src={img.src}
                alt={img.title}
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
