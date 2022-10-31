import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './Calculator';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Result from './Result';
import { CalculatorProvider } from './CalculatorProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
// <img src="" />

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <Calculator />
  },
  {
    path: "/result5",
    element: <Result totalSum={15} />
  }


])

root.render(
  <React.StrictMode>
    <CalculatorProvider>
      <RouterProvider router={reactRouter} />    
    </CalculatorProvider>
  </React.StrictMode>
);

