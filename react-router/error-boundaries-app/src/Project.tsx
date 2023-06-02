import type { LoaderFunctionArgs } from "react-router-dom";
import { useLoaderData, json, useRouteError, isRouteErrorResponse } from "react-router-dom";

export function projectLoader({ params }: LoaderFunctionArgs) {
  if (params.projectId === "unauthorized") {
    throw json(
      {
        contactEmail: "admin@cellinlab.com",
      },
      {
        status: 401,
      }
    );
  }

  if (params.projectId === "broken") {
    return json({
      id: params.projectId,
      name: "Broken Project",
      owner: "admin",
      deadline: "2021-01-01",
      cost: 1000000,
    });
  }

  return json({
    project: {
      id: params.projectId,
      name: "Authorized Project",
      owner: "admin",
      deadline: "2021-01-01",
      cost: 1000000,
    },
  });
}

const Project = () => {
  const { project } = useLoaderData();
  return (
    <>
      <h1>Project Name: {project.name}</h1>
      <p>Project Owner: {project.owner}</p>
      <p>Project Deadline: {project.deadline}</p>
      <p>Project Cost: {project.cost}</p>
    </>
  );
};

export const ProjectBoundary = () => {
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error) || error.status !== 401) {
    throw error;
  }

  return (
    <>
      <h1>You do not have access to this project</h1>
      <p>
        Please reach out to{" "}
        <a href={`mailto:${error.data.contactEmail}`}>{error.data.contactEmail}</a> to obtain
        access.
      </p>
    </>
  );
};

export default Project;
