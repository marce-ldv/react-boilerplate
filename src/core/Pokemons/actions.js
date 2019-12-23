import { GET_POKEMON_LIST, SET_POKEMON_LIST } from 'core/constants';

export const getPokemonList = () => {
  return {
    type: GET_POKEMON_LIST,
  };
};

export const setPokemonList = payload => {
  return {
    type: SET_POKEMON_LIST,
    payload,
  };
};
