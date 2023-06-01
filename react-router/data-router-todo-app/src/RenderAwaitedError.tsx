import { useAsyncError } from "react-router-dom";

const RenderAwaitedError = () => {
  const error = useAsyncError() as Error;
  return (
    <p
      style={{
        color: "red",
      }}
    >
      Error 💥: {error.message}
      <br />
      {error.stack}
    </p>
  );
};

export default RenderAwaitedError;
