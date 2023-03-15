import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { ProductsPage } from './pages/ProductsPage';
import { ProductPage } from './pages/ProductPage';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'product/:id',
        element: <ProductPage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
