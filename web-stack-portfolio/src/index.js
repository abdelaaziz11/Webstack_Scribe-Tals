import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Categories from './Pages/Categories/Categories';
import StoryPage from './Pages/StoryPage/StoryPage';
import Register from './Pages/Register/Rogister';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/categories",
    element: <Categories/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/story",
    element: <StoryPage/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
