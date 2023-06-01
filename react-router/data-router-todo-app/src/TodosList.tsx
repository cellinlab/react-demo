import { useRef, useState, useEffect } from "react";
import type { ActionFunctionArgs } from "react-router-dom";
import { useLoaderData, useNavigation, Link, Form } from "react-router-dom";

import TodoItem from "./TodoItem";

import type { Todos } from "./todo";
import { sleep } from "./utils";
import { removeTodo, addTodo, getTodos } from "./todo";

export async function todosAction({ request }: ActionFunctionArgs) {
  await sleep(1000);
  const formData = await request.formData();

  if (formData.get("action") === "delete") {
    const id = formData.get("todoId");
    if (typeof id === "string") {
      removeTodo(id);
      return {
        ok: true,
      };
    }
  }

  const todo = formData.get("todo");
  if (typeof todo === "string") {
    addTodo(todo);
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: "/todos",
    },
  });
}

export async function todosLoader(): Promise<Todos> {
  await sleep(1000);
  return getTodos();
}

const TodosList = () => {
  const [isAdding, setIsAdding] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const navigation = useNavigation();

  const todos = useLoaderData() as Todos;

  useEffect(() => {
    if (navigation.formData?.get("action") === "add") {
      setIsAdding(true);
    } else if (navigation.state === "idle") {
      setIsAdding(false);
      formRef.current?.reset();
    }
  }, [navigation]);

  return (
    <>
      <h2>Todos</h2>
      <ul>
        <li>
          <Link to="/todos/junk">Click this link to force an error in the loader</Link>
        </li>
        {Object.entries(todos).map(([id, todo]) => (
          <li key={id}>
            <TodoItem id={id} todo={todo} />
          </li>
        ))}
      </ul>
      <Form method="post" ref={formRef}>
        <input type="hidden" name="action" value="add" />
        <input type="text" name="todo" />
        <button type="submit" disabled={isAdding}>
          {isAdding ? "Adding..." : "Add"}
        </button>
      </Form>
    </>
  );
};

export default TodosList;
