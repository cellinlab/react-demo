import { createBrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import { homeLoader } from './Home';
import TodosList from './TodosList';
import { todosLoader, todosAction } from './TodosList';
import Todo from './Todo.tsx';
import { todoLoader } from './Todo.tsx';
import TodoBoundary from './TodoBoundary';
import DeferredPage from './DeferredPage';
import { deferredLoader } from './DeferredPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        loader: homeLoader,
        Component: Home
      },
      {
        path: '/todos',
        action: todosAction,
        loader: todosLoader,
        Component: TodosList,
        ErrorBoundary: TodoBoundary,
        children: [
          {
            path: ':id',
            loader: todoLoader,
            Component: Todo
          },
        ]
      },
      {
        path: '/deferred',
        loader: deferredLoader,
        Component: DeferredPage
      }
    ]
  }
]);

export default router;
