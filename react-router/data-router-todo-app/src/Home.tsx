import { useLoaderData } from "react-router-dom";

import { sleep } from "./utils";

interface HomeLoaderData {
  data: string;
}

export async function homeLoader(): Promise<HomeLoaderData> {
  await sleep(1000);
  return {
    data: new Date().toISOString(),
  };
}

const Home = () => {
  const data = useLoaderData() as HomeLoaderData;

  return (
    <>
      <h2>Home</h2>
      <p>
        Data from loader: <strong>{data.data}</strong>
      </p>
    </>
  );
};

export default Home;
