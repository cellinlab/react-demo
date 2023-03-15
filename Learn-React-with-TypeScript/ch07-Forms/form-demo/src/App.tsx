import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import './App.css';

import { ContactPage } from './ContactPage3';
import { ThankYouPage } from './ThankYouPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/contact" />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/thank-you/:name',
    element: <ThankYouPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
