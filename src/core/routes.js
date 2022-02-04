/* eslint-disable react/display-name */
import React from 'react';
import Pokemons from 'pages/Pokemons';

export const routes = [
  {
    exact: true,
    path: '/',
    component: () => <Pokemons />,
  },
  {
    path: '/pokemons',
    component: () => <Pokemons />,
  },
];
