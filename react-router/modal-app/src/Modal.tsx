import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Dialog } from "@reach/dialog";

import { getImageById } from "./images";

const Modal = () => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();
  const { id } = useParams<"id">();

  const image = getImageById(Number(id));

  const onDismiss = () => {
    navigate(-1);
  };

  return (
    <Dialog aria-labelledby="label" onDismiss={onDismiss} initialFocusRef={btnRef}>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          padding: "8px 8px",
        }}
      >
        <h1
          id="label"
          style={{
            margin: 0,
          }}
        >
          {image?.title}
        </h1>
        <img
          style={{
            width: "100%",
            height: "auto",
            margin: "16px 0",
            borderRadius: "8px",
          }}
          width={400}
          height={400}
          src={image?.src}
          alt={image?.title}
        />
        <button
          style={{
            display: "block",
          }}
          ref={btnRef}
          onClick={onDismiss}
        >
          Close
        </button>
      </div>
    </Dialog>
  );
};

export default Modal;
