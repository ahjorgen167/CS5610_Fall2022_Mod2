import React from 'react';
import ReactDOM from 'react-dom/client';
// import Calculator from './Calculator';
import AllPokemon from './pokemon/AllPokemon';
import PokemonDetails from './pokemon/PokemonDetails';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider, 
  Route,
} from "react-router-dom";
import Result from './Result';
import { CalculatorProvider } from './CalculatorProvider';
import Register from './Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
// <img src="" />

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  },
  {
    path: "/all",
    element: <AllPokemon />
  },
  // 'localhost:3000' + /123213
  // 'localhost:3000' + /1
  // 'localhost:3000' + /charizard
  {
    path: '/:pokemonId',
    element: <PokemonDetails />
  },
  // {
  //   path: "/",
  //   element: <Calculator />
  // },
  {
    path: "/result5",
    element: <Result totalSum={15} />
  }


])

root.render(
  <React.StrictMode>
    <CalculatorProvider>
      <RouterProvider router={reactRouter} />    {/* <Calculator/>, <Result /> */}
    </CalculatorProvider>
  </React.StrictMode>
);

