import React from "react";
import type { LoaderFunctionArgs } from "react-router-dom";
import { useParams, useLoaderData } from "react-router-dom";

import { sleep } from "./utils";
import { getTodos } from "./todo";

export async function todoLoader({ params }: LoaderFunctionArgs): Promise<string> {
  await sleep(1000);

  let todos = getTodos();
  if (!params.id) {
    throw new Error("Expected params.id to be defined");
  }

  const todo = todos[params.id];

  if (!todo) {
    throw new Error("Todo not found for id: " + params.id);
  }

  return todo;
}

const Todo = () => {
  const params = useParams();
  const todo = useLoaderData() as string;

  return (
    <>
      <h2>Nested Todo Route:</h2>
      <p>id: {params.id}</p>
      <p>
        todo: <strong>{todo}</strong>
      </p>
    </>
  );
};

export default Todo;
