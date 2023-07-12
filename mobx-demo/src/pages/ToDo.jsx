import React from "react";
import { makeAutoObservable, observable, action, computed, autorun } from "mobx";
import { observer } from "mobx-react";

class Todo {
  id = Math.random();
  title = "";
  finished = false;

  constructor(title) {
    makeAutoObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}

class TodoList {
  todos = [];
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
  constructor(todos) {
    makeAutoObservable(this, {
      todos: observable,
      unfinishedTodoCount: computed,
    });
    this.todos = todos;
  }
}

const TodoListView = observer(({ todoList }) => {
  return (
    <div>
      <ul>
        {todoList.todos.map((todo) => (
          <TodoView todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
});

const TodoView = observer(({ todo }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.finished} onChange={() => todo.toggle()} />
      {todo.title}
    </li>
  );
});

const store = new TodoList([
  new Todo("Learn React"),
  new Todo("Learn React Router"),
  new Todo("Learn Mobx"),
]);

autorun(() => {
  console.log("Tasks left: " + store.unfinishedTodoCount);
});

const LeftView = observer(({ todoList }) => {
  return <div>Tasks left: {todoList.unfinishedTodoCount}</div>;
});

const ToDo = () => {
  return (
    <div>
      <h1>ToDo Example</h1>
      <TodoListView todoList={store} />
      <LeftView todoList={store} />
    </div>
  );
};

export default ToDo;
