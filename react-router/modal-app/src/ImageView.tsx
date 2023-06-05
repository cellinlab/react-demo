import { useParams } from "react-router-dom";

import { getImageById } from "./images";

const ImageView = () => {
  const { id } = useParams<"id">();
  const image = getImageById(Number(id));

  if (!image) {
    return <div>Image not found</div>;
  }
  return (
    <div>
      <h1>{image.title}</h1>
      <img width={400} height={400} src={image.src} alt={image.title} />
    </div>
  );
};

export default ImageView;
