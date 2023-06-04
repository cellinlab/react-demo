import { useLoaderData } from "react-router-dom";

export async function loader() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "I came from the About page loader!";
}

export const Component = () => {
  const data = useLoaderData() as string;
  return (
    <div>
      <h2>About</h2>
      <p>{data}</p>
    </div>
  );
};

Component.displayName = "About";
