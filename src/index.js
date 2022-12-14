import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Price from './components/Price';
import Contact from './components/Contact';
import Mapdata from './components/Mapdata';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/price",
    element: <Price />,
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/mapdata",
    element: <Mapdata/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
