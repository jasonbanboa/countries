import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Index from './components/Index'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/region/:region',
    element: <Index />,
  },
  {
    path: '/about/:countryName',
    element: <h1>about page</h1>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);