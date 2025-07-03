import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage.tsx';
import Aboutus from './pages/Aboutus.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/about',
        element: <Aboutus />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
