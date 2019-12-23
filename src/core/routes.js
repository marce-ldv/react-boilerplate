/* eslint-disable react/display-name */
import React from 'react';
import Pokemons from 'containers/Pokemons';

export const routes = [
  {
    path: '/pokemon-list',
    component: () => <Pokemons />,
  },
];
