import { GET_POKEMON_LIST, SET_POKEMON_LIST } from 'core/constants';

export const getPokemonList = () => ({
  type: GET_POKEMON_LIST,
});

export const setPokemonList = payload => ({
  type: SET_POKEMON_LIST,
  payload,
});
