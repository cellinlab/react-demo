import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Header } from './Header';
import { ProductsPage } from './pages/ProductsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
  {
    path: 'products',
    element: <ProductsPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
