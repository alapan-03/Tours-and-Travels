import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import React from 'react';
// import App from "./App"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import ReactDOM from 'react-dom/client';
import Comp1 from "./Components/Comp1"
import Signup from './Components/Signup';
import Login from './Components/Login';
import AdditionalDetails from './Components/AdditionalDetails';
import BookSummary from './Components/BookSummary';
import Me from './Components/Me';
// import { LogIn } from 'lucide-react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:dataId",
    element: <Comp1/>,
  },
  {
    path: "/Signup",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/:tourId/details",
    element: <AdditionalDetails/>
  },
  {
    path: "/:dataId2/summary",
    element: <BookSummary/>
  },
  {
    path: "/me",
    element: <Me/>
  },

])



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
