import { useRouteError } from "react-router-dom";

const TodoBoundary = () => {
  const error = useRouteError() as Error;
  return (
    <>
      <h2>Error 💥</h2>
      <pre>{error.message}</pre>
    </>
  );
};

export default TodoBoundary;
