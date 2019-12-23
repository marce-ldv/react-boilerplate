import { createSelector } from 'reselect';

export const getPokemonsSelector = createSelector(
  state => state.pokemon,
  pokeData => {
    return pokeData.pokemons;
  },
);
