import { useFetcher, Link } from "react-router-dom";

interface TodoItemProps {
  id: string;
  todo: string;
}

const TodoItem = ({ id, todo }: TodoItemProps) => {
  const fetcher = useFetcher();

  const isDeleting = fetcher.formData != null;

  return (
    <>
      <Link to={`/todos/${id}`}>{todo}</Link>
      &nbsp;
      <fetcher.Form method="post" style={{ display: "inline" }}>
        <input type="hidden" name="action" value="delete" />
        <button type="submit" name="todoId" value={id} disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </fetcher.Form>
    </>
  );
};

export default TodoItem;
