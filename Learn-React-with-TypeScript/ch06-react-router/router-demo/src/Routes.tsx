import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import { ProductsPage } from './pages/ProductsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'products',
        element: <ProductsPage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
