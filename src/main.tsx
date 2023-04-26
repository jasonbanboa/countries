import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Index from './components/Index'
import About from './components/About'
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
    path: '/search/:countryName',
    element: <Index />
  }, 
  {
    path: '/about/:countryName',
    element: <About />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);