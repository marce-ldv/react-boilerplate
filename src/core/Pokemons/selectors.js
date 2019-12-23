import { createSelector } from 'reselect';

export const getPokemonsSelector = createSelector(
  state => state.pokemon,
  pokeData => pokeData.pokemons,
);
