import { useAsyncValue } from "react-router-dom";

const RenderAwaitedData = () => {
  const data = useAsyncValue() as string;
  return <p>{data}</p>;
};

export default RenderAwaitedData;
