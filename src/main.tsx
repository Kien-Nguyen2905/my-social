import { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
const HomePage = lazy(() => import('./pages/home'));

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
