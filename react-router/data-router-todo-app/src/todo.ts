export interface Todos {
  [key: string]: string;
}

const TODOS_KEY = 'todos';

export const uuid = () => {
  return Math.random()
    .toString(16)
    .substring(2, 15);
}

export const saveTodos = (todos: Todos): void => {
  return localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

function initTodos(): Todos {
  const todos: Todos = new Array(10)
    .fill(null)
    .reduce(
      (acc, _, index) => {
        return Object.assign(acc, {
          [uuid()]: `Seed Todo #${index + 1}`
        });
      },
      {}
    );
  saveTodos(todos);
  return todos;
};

export const getTodos = (): Todos => {
  let todos: Todos | null = null;

  try {
    // @ts-ignore
    todos = JSON.parse(localStorage.getItem(TODOS_KEY));
  } catch (error) {
    console.error(error);
  }
  if (!todos) {
    todos = initTodos();
  }
  return todos;
};

export const addTodo = (todo: string): void => {
  const newTodos = {
    ...getTodos(),
  };
  newTodos[uuid()] = todo;
  saveTodos(newTodos);
};

export const removeTodo = (id: string): void => {
  const newTodos = {
    ...getTodos(),
  };
  delete newTodos[id];
  saveTodos(newTodos);
};

export const resetTodos = (): void => {
  localStorage.removeItem(TODOS_KEY);
  initTodos();
};
